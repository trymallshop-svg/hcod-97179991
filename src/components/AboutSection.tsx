import { Zap, Shield, Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: Zap, title: t("about.features.f1t"), description: t("about.features.f1d") },
    { icon: Shield, title: t("about.features.f2t"), description: t("about.features.f2d") },
    { icon: Clock, title: t("about.features.f3t"), description: t("about.features.f3d") },
    { icon: Users, title: t("about.features.f4t"), description: t("about.features.f4d") },
  ];
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {t("about.title1")}
              <span className="text-gradient-cyan"> {t("about.titleAccent")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="gradient-border p-6 glow-border-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted-foreground text-sm mb-8">{t("about.trusted")}</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["React", "Node.js", "Python", "AWS", "Flutter", "PostgreSQL"].map((tech) => (
              <span key={tech} className="text-foreground font-heading font-medium text-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
