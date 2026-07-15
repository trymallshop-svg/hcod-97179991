import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(2000),
  source: z.string().trim().max(200).optional().or(z.literal('')),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'invalid_input', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    const { name, email, phone, message, source } = parsed.data;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { error: dbError } = await supabase.from('contact_messages').insert({
      name,
      email,
      phone: phone || null,
      message,
      source: source || null,
    });
    if (dbError) {
      console.error('DB insert failed:', dbError);
      return new Response(
        JSON.stringify({ error: 'storage_failed', details: dbError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // Best-effort email dispatch via the built-in transactional email system.
    // Only fires if the template has been scaffolded and an email domain is configured.
    let emailStatus: 'sent' | 'skipped' | 'failed' = 'skipped';
    try {
      const { error: mailError } = await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'contact-inquiry',
          recipientEmail: 'info@hcod.tech',
          idempotencyKey: `contact-${crypto.randomUUID()}`,
          templateData: { name, email, phone: phone || '', message, source: source || '' },
        },
      });
      emailStatus = mailError ? 'failed' : 'sent';
      if (mailError) console.warn('Email dispatch failed (safe to ignore before setup):', mailError.message);
    } catch (mailErr) {
      console.warn('Email function not available yet:', (mailErr as Error).message);
    }

    return new Response(JSON.stringify({ ok: true, emailStatus }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(JSON.stringify({ error: 'unexpected', details: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
