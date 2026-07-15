import { Monitor, BarChart3, Calendar, Store, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { openContactForm } from "@/lib/contact";

const SolutionsSection = () => {
  const { t } = useTranslation();
  const solutions = [
    {
      icon: Monitor,
      title: t("solutions.items.p1t"),
      description: t("solutions.items.p1d"),
      features: t("solutions.items.p1f", { returnObjects: true }) as string[],
    },
    {
      icon: BarChart3,
      title: t("solutions.items.p2t"),
      description: t("solutions.items.p2d"),
      features: t("solutions.items.p2f", { returnObjects: true }) as string[],
    },
    {
      icon: Calendar,
      title: t("solutions.items.p3t"),
      description: t("solutions.items.p3d"),
      features: t("solutions.items.p3f", { returnObjects: true }) as string[],
    },
    {
      icon: Store,
      title: t("solutions.items.p4t"),
      description: t("solutions.items.p4d"),
      features: t("solutions.items.p4f", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-surface-darker">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("solutions.tag")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("solutions.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("solutions.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <button
              type="button"
              key={solution.title}
              onClick={() => openContactForm(`solution:${solution.title}`)}
              className="group gradient-border p-8 glow-border-hover cursor-pointer text-start"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 rtl:-scale-x-100" />
              </div>

              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>

              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
