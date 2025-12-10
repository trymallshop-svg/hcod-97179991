import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technologies and modern approaches to solve complex problems.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and best practices ensure reliable, scalable solutions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile methodology and efficient workflows keep projects on schedule.",
  },
  {
    icon: Users,
    title: "Long-term Support",
    description: "Dedicated support and maintenance to keep your systems running smoothly.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About HCOD
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Building the Future of
              <span className="text-gradient-cyan"> Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              HCOD is a leading provider of custom digital solutions, dedicated to transforming businesses through innovative technology. We combine technical expertise with creative thinking to deliver software that drives real results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to enterprises, we partner with ambitious organizations to create scalable, secure, and beautiful digital products that stand out in today's competitive landscape.
            </p>
          </div>

          {/* Right Content - Features Grid */}
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground text-sm mb-8">Trusted technologies we work with</p>
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
