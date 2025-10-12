import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Building2, TrendingUp, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/30 mb-8 backdrop-blur-sm" data-testid="badge-hero-tag">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Enterprise-Grade IT Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Elevate Your Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Through Technology
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            NeoVedic delivers world-class <span className="font-semibold text-foreground">DevOps automation</span>, 
            <span className="font-semibold text-foreground"> enterprise web development</span>, and 
            <span className="font-semibold text-foreground"> ERP solutions</span> that transform businesses. 
            From startups to Fortune 500 companies, we build technology that scales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Button size="lg" asChild className="gap-2 group px-8 py-6 text-base" data-testid="button-hero-explore-services">
              <a href="#services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="backdrop-blur-sm px-8 py-6 text-base" data-testid="button-hero-get-in-touch">
              <a href="#contact">Schedule Consultation</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
            {[
              { label: "Projects Delivered", value: "500+", icon: Building2, testId: "stat-projects" },
              { label: "Happy Clients", value: "200+", icon: TrendingUp, testId: "stat-clients" },
              { label: "Team Experts", value: "50+", icon: Shield, testId: "stat-team" },
              { label: "Success Rate", value: "98%", icon: Sparkles, testId: "stat-success" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group hover:scale-105 transition-transform" data-testid={stat.testId}>
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
