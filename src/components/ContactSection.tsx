import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  buildWhatsAppUrl,
} from "@/lib/contact";
import { WhatsAppIcon } from "./FloatingWhatsApp";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1).max(2000),
});

const ContactSection = () => {
  const { t } = useTranslation();
  const [source, setSource] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const stored = window.sessionStorage.getItem("hcod_contact_source");
    if (stored) setSource(stored);
    const handler = (e: Event) => setSource((e as CustomEvent<string>).detail);
    window.addEventListener("hcod:contact-source", handler);
    return () => window.removeEventListener("hcod:contact-source", handler);
  }, []);

  const sourceLabel = (() => {
    if (!source) return t("contact.form.sourceLabels.contact_form");
    if (source.startsWith("service:"))
      return t("contact.form.sourceLabels.service", { name: source.slice(8) });
    if (source.startsWith("solution:"))
      return t("contact.form.sourceLabels.solution", { name: source.slice(9) });
    return t(`contact.form.sourceLabels.${source}`, source);
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      toast.error(t("contact.form.error"), {
        description: parsed.error.issues[0]?.message,
      });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...parsed.data, source: sourceLabel },
      });
      if (error) throw error;
      toast.success(t("contact.form.success"), {
        description: t("contact.form.successDesc"),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      window.sessionStorage.removeItem("hcod_contact_source");
      setSource("");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error(t("contact.form.error"), {
        description: t("contact.form.errorDesc"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const waMsg = `${sourceLabel}\n${formData.name ? formData.name + " — " : ""}${formData.message || t("whatsapp.defaultMsg")}`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-surface-darker">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("contact.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              {t("contact.title1")}
              <span className="text-gradient-cyan"> {t("contact.titleAccent")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-6">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.emailLabel")}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={buildWhatsAppUrl(t("whatsapp.defaultMsg"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.phoneLabel")}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors" dir="ltr">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.locationLabel")}</p>
                  <p className="text-foreground font-medium">{t("contact.location")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border p-8 glow-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {source && (
                <div className="text-xs text-primary/80 bg-primary/5 border border-primary/20 rounded-md px-3 py-2">
                  {sourceLabel}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  maxLength={100}
                  placeholder={t("contact.form.namePh")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/50"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    maxLength={255}
                    placeholder={t("contact.form.emailPh")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    maxLength={40}
                    placeholder={t("contact.form.phonePh")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  maxLength={2000}
                  placeholder={t("contact.form.messagePh")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground/50 resize-none"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={submitting}>
                  {submitting ? t("contact.form.sending") : t("contact.form.send")}
                  <Send className="w-4 h-4 rtl:-scale-x-100" />
                </Button>
                <a
                  href={buildWhatsAppUrl(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#25D366] text-white font-medium hover:bg-[#25D366]/90 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t("contact.form.whatsapp")}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
