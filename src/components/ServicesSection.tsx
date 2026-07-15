import { Smartphone, Globe, Code, ShoppingCart, Palette, GitBranch } from "lucide-react";
import { useTranslation } from "react-i18next";
import { openContactForm } from "@/lib/contact";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    { icon: Smartphone, title: t("services.items.s1t"), description: t("services.items.s1d") },
    { icon: Globe, title: t("services.items.s2t"), description: t("services.items.s2d") },
    { icon: Code, title: t("services.items.s3t"), description: t("services.items.s3d") },
    { icon: ShoppingCart, title: t("services.items.s4t"), description: t("services.items.s4d") },
    { icon: Palette, title: t("services.items.s5t"), description: t("services.items.s5d") },
    { icon: GitBranch, title: t("services.items.s6t"), description: t("services.items.s6d") },
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("services.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              type="button"
              key={service.title}
              onClick={() => openContactForm(`service:${service.title}`)}
              className="group relative bg-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 text-start"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="mt-6 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
