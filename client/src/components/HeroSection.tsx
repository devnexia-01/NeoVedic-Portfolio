import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8" data-testid="badge-hero-tag">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Next-Gen IT Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Transform Your Business
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            With Innovation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          NeoVedic delivers cutting-edge solutions in Web Development, DevOps, Cloud Infrastructure, 
          and Digital Marketing. We don't just build technology—we craft experiences that drive growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2 group" data-testid="button-hero-explore-services">
            <a href="#services">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="backdrop-blur-sm" data-testid="button-hero-get-in-touch">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50">
          {[
            { label: "Projects Delivered", value: "500+", testId: "stat-projects" },
            { label: "Happy Clients", value: "200+", testId: "stat-clients" },
            { label: "Team Members", value: "50+", testId: "stat-team" },
            { label: "Success Rate", value: "98%", testId: "stat-success" },
          ].map((stat) => (
            <div key={stat.label} className="text-center" data-testid={stat.testId}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
