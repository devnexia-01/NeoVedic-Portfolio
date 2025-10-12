import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Star, TrendingUp, Users, ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";

export default function Clients() {
  const industries = [
    {
      icon: Building2,
      title: "Enterprise Software",
      description: "Fortune 500 companies trust us with their digital transformation.",
      clients: "50+ Enterprise Clients",
    },
    {
      icon: TrendingUp,
      title: "Fintech & Banking",
      description: "Secure, compliant solutions for the financial services industry.",
      clients: "30+ Financial Institutions",
    },
    {
      icon: Users,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant systems that improve patient care and operations.",
      clients: "25+ Healthcare Organizations",
    },
    {
      icon: Star,
      title: "E-commerce & Retail",
      description: "High-conversion platforms that drive revenue and customer satisfaction.",
      clients: "40+ Retail Brands",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Global",
      content: "NeoVedic transformed our infrastructure with their DevOps expertise. We've reduced deployment time by 80% and operational costs by 60%. Their team is absolutely world-class.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "FinanceFirst",
      content: "The custom ERP system they built has revolutionized our operations. Everything from inventory to financials is now seamlessly integrated. Best investment we've made.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "HealthTech Solutions",
      content: "Their cloud migration strategy was flawless. Zero downtime, improved performance, and significant cost savings. The NeoVedic team exceeded all expectations.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Marketing Director",
      company: "RetailPro",
      content: "Our organic traffic increased by 300% in just 6 months thanks to their digital marketing expertise. The ROI has been phenomenal. Highly recommended!",
      rating: 5,
    },
  ];

  const stats = [
    { value: "200+", label: "Happy Clients", icon: Users },
    { value: "500+", label: "Projects Delivered", icon: Building2 },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "15+", label: "Years Experience", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/30 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Our Clients
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Trusted by Industry
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Leaders Worldwide
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              From startups to Fortune 500 companies, we've helped businesses across industries 
              achieve digital excellence and accelerate growth.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep expertise across multiple industries with proven results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Card key={industry.title} className="p-10 hover:shadow-xl transition-all border-2 hover:border-primary/30">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{industry.description}</p>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-sm font-semibold text-primary">{industry.clients}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it—hear from the companies we've helped transform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="p-10 relative">
                  <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-6">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-semibold mt-1">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-40 bg-gradient-to-br from-primary/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Join Our Growing Client Base</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Experience the same success our clients have achieved. Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" asChild className="px-10 py-6 text-lg">
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-10 py-6 text-lg">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
