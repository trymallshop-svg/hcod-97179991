import { useTranslation } from "react-i18next";
import { CONTACT_EMAIL, PHONE_DISPLAY, buildWhatsAppUrl } from "@/lib/contact";

const Footer = () => {
  const { t } = useTranslation();
  const services = [
    t("services.items.s1t"),
    t("services.items.s2t"),
    t("services.items.s3t"),
    t("services.items.s5t"),
  ];
  const solutions = [
    t("solutions.items.p1t"),
    t("solutions.items.p2t"),
    t("solutions.items.p3t"),
    t("solutions.items.p4t"),
  ];

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-heading font-bold text-foreground">HCOD</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={buildWhatsAppUrl(t("whatsapp.defaultMsg"))}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                dir="ltr"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-muted-foreground text-sm">{t("contact.location")}</p>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {services.map((name) => (
                <li key={name}>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-3">
              {solutions.map((name) => (
                <li key={name}>
                  <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t("footer.companyLinks.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  {t("footer.companyLinks.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HCOD. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
