import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, ShoppingCart, Zap, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function WebDevelopment() {
  const offerings = [
    {
      icon: Code2,
      title: "Custom Web Applications",
      description: "Tailored solutions built with React, Next.js, and modern frameworks to meet your unique business needs.",
      features: ["Scalable Architecture", "SEO Optimized", "Lightning Fast Performance", "Responsive Design"],
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Combine the best of web and mobile with PWAs that work offline and feel native.",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payments, inventory management, and analytics.",
      features: ["Payment Integration", "Order Management", "Product Catalogs", "Customer Analytics"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with advanced optimization techniques.",
      features: ["Code Splitting", "Lazy Loading", "CDN Integration", "Cache Strategies"],
    },
  ];

  const techStack = [
    { name: "React", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", color: "from-gray-600 to-gray-800" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", color: "from-green-500 to-emerald-600" },
    { name: "PostgreSQL", color: "from-blue-600 to-indigo-700" },
  ];

  const benefits = [
    "10x faster development with modern frameworks",
    "99.9% uptime with robust infrastructure",
    "Scalable solutions that grow with your business",
    "SEO-optimized for maximum visibility",
    "Mobile-first responsive design",
    "Comprehensive testing and quality assurance",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Web Development</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Build Stunning <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Web Applications
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Create powerful, scalable web applications with cutting-edge technologies. 
                From simple websites to complex enterprise solutions, we bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild data-testid="button-webdev-get-started">
                  <a href="#contact">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-webdev-view-work">
                  <a href="/#services">View Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Card key={offering.title} className="p-8" data-testid={`card-offering-${offering.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground mb-6">{offering.description}</p>
                    <ul className="space-y-2">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Tech Stack</h2>
                <p className="text-muted-foreground mb-8">
                  We use the latest and most reliable technologies to build applications 
                  that are fast, secure, and scalable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className={`px-4 py-3 rounded-lg bg-gradient-to-br ${tech.color} text-white font-medium text-center`}
                      data-testid={`badge-tech-${tech.name.toLowerCase().replace(/\./g, '')}`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3" data-testid="item-benefit">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your web application to life.
            </p>
            <Button size="lg" asChild data-testid="button-webdev-cta-contact">
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
