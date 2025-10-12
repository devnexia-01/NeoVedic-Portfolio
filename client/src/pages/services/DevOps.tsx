import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, GitBranch, Container, Activity, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function DevOps() {
  const offerings = [
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automate your deployment process with robust continuous integration and delivery pipelines.",
      features: ["Automated Testing", "Zero-Downtime Deployments", "Rollback Strategies", "Multi-Environment Support"],
    },
    {
      icon: Container,
      title: "Container Orchestration",
      description: "Manage and scale containerized applications with Kubernetes and Docker expertise.",
      features: ["Kubernetes Setup", "Docker Optimization", "Auto-Scaling", "Service Mesh"],
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Define and manage your infrastructure using Terraform, Ansible, and modern IaC tools.",
      features: ["Terraform Modules", "Ansible Playbooks", "Version Control", "Disaster Recovery"],
    },
    {
      icon: Activity,
      title: "Monitoring & Logging",
      description: "Comprehensive observability with real-time monitoring, logging, and alerting systems.",
      features: ["Prometheus & Grafana", "ELK Stack", "Alert Management", "Performance Metrics"],
    },
  ];

  const tools = [
    { name: "Jenkins", color: "from-red-500 to-orange-500" },
    { name: "GitLab CI", color: "from-orange-500 to-red-600" },
    { name: "Docker", color: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", color: "from-blue-500 to-indigo-600" },
    { name: "Terraform", color: "from-purple-500 to-indigo-600" },
    { name: "Ansible", color: "from-red-600 to-gray-700" },
  ];

  const benefits = [
    "Reduce deployment time by 80% with automation",
    "99.99% infrastructure reliability",
    "Automatic scaling based on demand",
    "Comprehensive security and compliance",
    "Cost optimization through efficient resource usage",
    "24/7 monitoring and incident response",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Server className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">DevOps</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Streamline Your <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Development Pipeline
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                Transform your development workflow with automated CI/CD pipelines, container orchestration, 
                and infrastructure as code. Deploy faster, scale smarter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild data-testid="button-devops-get-started">
                  <a href="#contact">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-devops-view-solutions">
                  <a href="/#services">Our Solutions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">DevOps Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Card key={offering.title} className="p-8" data-testid={`card-offering-${offering.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground mb-6">{offering.description}</p>
                    <ul className="space-y-2">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-purple-500" />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our DevOps Tools</h2>
                <p className="text-muted-foreground mb-8">
                  We leverage industry-leading tools to automate, monitor, and optimize 
                  your entire development and deployment lifecycle.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className={`px-4 py-3 rounded-lg bg-gradient-to-br ${tool.color} text-white font-medium text-center`}
                      data-testid={`badge-tool-${tool.name.toLowerCase().replace(/\s/g, '')}`}
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Benefits You'll Experience</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3" data-testid="item-benefit">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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

        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your DevOps Strategy</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a robust, automated pipeline that accelerates your delivery.
            </p>
            <Button size="lg" asChild data-testid="button-devops-cta-contact">
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Schedule Consultation
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
