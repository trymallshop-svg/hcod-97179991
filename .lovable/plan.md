## التعديلات المطلوبة على موقع HCOD

### 1. حذف قسم الأعمال (Portfolio)
- حذف `src/components/PortfolioSection.tsx` وإزالة استيراده من `src/pages/Index.tsx`.
- إزالة رابط "Portfolio" من الـ Navbar والفوتر.

### 2. الإبقاء على قسم "Ready-Made Solutions, Custom Fit"
- يبقى `SolutionsSection` كما هو مع تعديلات بسيطة على الترجمة والـ CTA (يفتح فورم التواصل تلقائياً مع تمرير اسم الحل).

### 3. تفعيل Lovable Cloud + إعداد إرسال الإيميل
- تفعيل Lovable Cloud.
- إعداد دومين إيميل عبر واجهة Lovable (سيُطلب من المستخدم إدخال دومينه).
- إنشاء Edge Function `send-contact-email` باستخدام قالب React Email:
  - يستقبل: name, email, phone (اختياري), message, source (من أي زر جاء).
  - يتحقق من المدخلات بـ Zod (حد أقصى للأطوال، إيميل صالح).
  - يرسل رسالة إلى `info@hcod.tech` بعنوان "New Inquiry from {name}".
- يبقى ContactSection يعرض نجاح/فشل الإرسال عبر toast.

### 4. ربط كل أزرار CTA بالفورم + زر واتساب
كل الأزرار التالية تنقل المستخدم لقسم `#contact` وتُعبّئ حقل "source" في الفورم تلقائياً:
- HeroSection: "Get a Quote", "Explore Services"
- Navbar (سطح المكتب والموبايل): "Get a Quote"
- بطاقات ServicesSection (كل بطاقة قابلة للنقر)
- بطاقات SolutionsSection (تفتح الفورم بالحل المختار)
- AboutSection: أي CTA موجود

**زر واتساب عائم (Floating WhatsApp button):**
- يظهر في كل الصفحات بأسفل يمين (أو يسار في RTL).
- يفتح: `https://wa.me/201011955896?text=...` مع رسالة افتراضية.
- زر واتساب إضافي داخل ContactSection بجانب زر "Send Message".

### 5. تحديث بيانات التواصل
في ContactSection والفوتر:
- الإيميل: `info@hcod.tech` (كما هو)
- الهاتف/واتساب: `+20 10 11955896`
- الموقع: `مصر - الجيزة` / `Egypt - Giza`
- إضافة أيقونة WhatsApp منفصلة قابلة للنقر.

### 6. دعم ثنائي اللغة (عربي/إنجليزي)
- إضافة `react-i18next` مع ملفي ترجمة:
  - `src/locales/en.json`
  - `src/locales/ar.json`
- كاشف اللغة التلقائي (`i18next-browser-languagedetector`) — يبدأ حسب لغة المتصفح.
- زر تبديل EN/AR في الـ Navbar (سطح مكتب + موبايل).
- تطبيق `dir="rtl"` تلقائياً على `<html>` عند اختيار العربية، مع ضبط الخط العربي (Cairo أو Tajawal) بجانب Space Grotesk / Inter.
- تحديث كل النصوص في المكونات:
  - Navbar, HeroSection, AboutSection, ServicesSection, SolutionsSection, ContactSection, Footer.
- ضبط أنماط Tailwind لتعمل مع RTL (استخدام `ms-*` / `me-*` بدل `ml-*` / `mr-*` في الأماكن الحرجة، أو إضافة plugin `tailwindcss-rtl`).

### 7. SEO
- تحديث `index.html`: العنوان والوصف بالعربية والإنجليزية، `lang` ديناميكي عبر i18next.

---

### تفاصيل تقنية

**الحزم الجديدة:**
- `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- `zod` (موجود غالباً)
- خط عربي عبر Google Fonts في `index.css`

**بنية الفورم بعد التعديل:**
```
name, email, phone, message, source (hidden, auto-filled)
[Send Message]  [WhatsApp Us]
```

**بنية Edge Function:**
- `supabase/functions/send-contact-email/index.ts` (CORS + Zod + قالب React Email)
- قالب: `supabase/functions/_shared/transactional-email-templates/contact-inquiry.tsx`

### ما يحتاج قرار المستخدم لاحقاً
- دومين الإيميل المُتحقق (مثلاً `notify.hcod.tech`) — سيُطلب عبر واجهة Lovable Cloud بعد الموافقة على الخطة.

بمجرد موافقتك سأبدأ التنفيذ.