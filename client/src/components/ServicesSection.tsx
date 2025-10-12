import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Server, Cloud, TrendingUp, ArrowRight, Globe, Building2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Enterprise-grade web applications, corporate websites, and custom ERP systems built with cutting-edge technologies.",
    features: [
      "Corporate Websites & Portals",
      "Custom ERP Systems", 
      "E-commerce Platforms",
      "Progressive Web Apps"
    ],
    gradient: "from-blue-600 to-cyan-600",
    href: "/services/web-development",
    testId: "card-service-web-development",
    highlight: "ERP & Website Solutions"
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Accelerate delivery and reduce costs with enterprise DevOps automation, CI/CD pipelines, and infrastructure optimization.",
    features: [
      "80% Faster Deployments",
      "99.99% Uptime Reliability", 
      "Automated CI/CD Pipelines",
      "Infrastructure as Code"
    ],
    gradient: "from-purple-600 to-pink-600",
    href: "/services/devops",
    testId: "card-service-devops",
    highlight: "Business Critical"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Enterprise cloud solutions on AWS, Azure, and GCP with auto-scaling, security, and cost optimization.",
    features: [
      "Multi-Cloud Architecture",
      "Security & Compliance", 
      "Auto-Scaling Solutions",
      "60% Cost Reduction"
    ],
    gradient: "from-emerald-600 to-teal-600",
    href: "/services/cloud",
    testId: "card-service-cloud",
    highlight: "Enterprise Scale"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that generate leads, increase conversions, and maximize ROI.",
    features: [
      "SEO & SEM Optimization",
      "Content Marketing Strategy", 
      "Social Media Growth",
      "Analytics & ROI Tracking"
    ],
    gradient: "from-orange-600 to-red-600",
    href: "/services/marketing",
    testId: "card-service-marketing",
    highlight: "Growth Focused"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">What We Do</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services designed to accelerate growth, reduce costs, 
            and deliver measurable business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="relative p-10 hover-elevate active-elevate-2 transition-all duration-500 group overflow-hidden border-2 hover:border-primary/30"
                data-testid={service.testId}
              >
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-bl-lg">
                  <span className="text-xs font-bold text-primary">{service.highlight}</span>
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" asChild className="group/btn p-0 h-auto text-lg font-semibold" data-testid={`button-explore-${service.title.toLowerCase().replace(" ", "-")}`}>
                  <Link href={service.href}>
                    <span className="flex items-center gap-2 text-primary">
                      Explore {service.title}
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
