import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-glow-pulse floating-delayed" />
      
      {/* Floating Shapes */}
      <div className="absolute top-32 right-20 w-4 h-4 border border-primary/50 rotate-45 floating opacity-50" />
      <div className="absolute bottom-40 left-32 w-6 h-6 border border-primary/30 rounded-full floating-delayed opacity-40" />
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-primary/30 floating opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Innovation • Technology • Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
            We Build{" "}
            <span className="text-gradient-cyan glow-text">Intelligent</span>
            <br />
            Digital Solutions
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delayed text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Custom software development, mobile applications, websites, and advanced tech solutions for businesses ready to transform.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delayed-2 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "50+", label: "Projects" },
              { value: "99%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
