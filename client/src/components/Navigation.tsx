import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/devops", label: "DevOps" },
    { href: "/services/cloud", label: "Cloud" },
    { href: "/services/marketing", label: "Marketing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                NeoVedic
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" asChild data-testid="button-get-quote">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">Our Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-mobile-service-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  <div className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            <Button className="w-full mt-2" asChild data-testid="button-mobile-get-quote">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
