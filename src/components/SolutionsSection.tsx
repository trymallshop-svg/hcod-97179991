import { Monitor, BarChart3, Calendar, Store, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "POS Systems",
    description: "Complete point-of-sale solutions for retail, restaurants, and service businesses with inventory tracking and analytics.",
    features: ["Real-time inventory", "Sales analytics", "Multi-location support"],
  },
  {
    icon: BarChart3,
    title: "ERP & Management Solutions",
    description: "Enterprise resource planning systems to streamline operations, finance, HR, and supply chain management.",
    features: ["Process automation", "Financial reporting", "Resource planning"],
  },
  {
    icon: Calendar,
    title: "Booking & Reservation Systems",
    description: "Smart scheduling platforms for appointments, reservations, and resource management across industries.",
    features: ["Online booking", "Calendar sync", "Automated reminders"],
  },
  {
    icon: Store,
    title: "Marketplace & E-commerce Platforms",
    description: "Scalable marketplace solutions connecting buyers and sellers with secure transactions and logistics.",
    features: ["Multi-vendor support", "Payment gateway", "Order management"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-surface-darker">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Software Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready-Made Solutions, Custom Fit
          </h2>
          <p className="text-muted-foreground text-lg">
            Pre-built software packages that can be customized to your specific business requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group gradient-border p-8 glow-border-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Features */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
