import { Smartphone, Globe, Code, ShoppingCart, Palette, GitBranch } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built with the latest technologies to establish your digital presence.",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored software systems designed to streamline your operations and solve unique business challenges.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payments, inventory management, and seamless shopping experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage users and create memorable digital experiences.",
  },
  {
    icon: GitBranch,
    title: "API Development & Integration",
    description: "Robust APIs and seamless system integrations to connect your digital ecosystem.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to deployment, we offer end-to-end services to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
