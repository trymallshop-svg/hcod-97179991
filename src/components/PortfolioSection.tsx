import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics platform with AI-powered insights.",
    image: "bg-gradient-to-br from-primary/20 to-primary/5",
  },
  {
    title: "HealthCare App",
    category: "Mobile Application",
    description: "Patient management system with telemedicine integration.",
    image: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Multi-vendor marketplace with integrated logistics.",
    image: "bg-gradient-to-br from-violet-500/20 to-violet-500/5",
  },
  {
    title: "Smart POS System",
    category: "Software Solution",
    description: "Cloud-based POS with inventory and analytics.",
    image: "bg-gradient-to-br from-amber-500/20 to-amber-500/5",
  },
  {
    title: "Booking Platform",
    category: "Web Application",
    description: "Advanced reservation system for hospitality industry.",
    image: "bg-gradient-to-br from-rose-500/20 to-rose-500/5",
  },
  {
    title: "Corporate Website",
    category: "Website",
    description: "Modern corporate presence with CMS integration.",
    image: "bg-gradient-to-br from-sky-500/20 to-sky-500/5",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Recent Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore some of our successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-card/50 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
