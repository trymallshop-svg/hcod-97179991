const footerLinks = {
  services: [
    { name: "Mobile Development", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Custom Software", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
  ],
  solutions: [
    { name: "POS Systems", href: "#solutions" },
    { name: "ERP Solutions", href: "#solutions" },
    { name: "Booking Systems", href: "#solutions" },
    { name: "E-commerce", href: "#solutions" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-heading font-bold text-foreground">
                HCOD
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Building intelligent digital solutions that transform businesses and drive innovation.
            </p>
            <a
              href="mailto:info@hcod.tech"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              info@hcod.tech
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HCOD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
