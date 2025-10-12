import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Server, Cloud, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build stunning, scalable web applications with cutting-edge technologies and modern frameworks.",
    features: ["React & Next.js", "Full-Stack Solutions", "Progressive Web Apps", "E-commerce Platforms"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/services/web-development",
    testId: "card-service-web-development"
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Streamline your development pipeline with robust CI/CD solutions and automation excellence.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
    gradient: "from-purple-500 to-pink-500",
    href: "/services/devops",
    testId: "card-service-devops"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scale effortlessly with enterprise-grade cloud architecture on AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "Auto-scaling Solutions", "Security & Compliance", "Cost Optimization"],
    gradient: "from-emerald-500 to-teal-500",
    href: "/services/cloud",
    testId: "card-service-cloud"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Drive growth with data-driven marketing strategies and cutting-edge digital campaigns.",
    features: ["SEO Optimization", "Content Strategy", "Social Media Marketing", "Analytics & Insights"],
    gradient: "from-orange-500 to-red-500",
    href: "/services/marketing",
    testId: "card-service-marketing"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and drive sustainable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="p-8 hover-elevate active-elevate-2 transition-all duration-300 group overflow-visible"
                data-testid={service.testId}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" asChild className="group/btn p-0 h-auto" data-testid={`button-explore-${service.title.toLowerCase().replace(" ", "-")}`}>
                  <Link href={service.href}>
                    <span className="flex items-center gap-2 text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
