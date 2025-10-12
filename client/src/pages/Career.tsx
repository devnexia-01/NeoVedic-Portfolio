import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart, ArrowRight, MapPin, Clock, DollarSign } from "lucide-react";

export default function Career() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses and stock options.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths, mentorship programs, and continuous learning opportunities.",
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Collaborative environment with talented professionals and innovative projects.",
    },
  ];

  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / New York",
      type: "Full-time",
      description: "Design and maintain CI/CD pipelines, automate infrastructure with Terraform and Kubernetes.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Create beautiful, intuitive user interfaces and exceptional user experiences.",
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Drive growth through SEO, content marketing, and data-driven campaigns.",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      description: "Design enterprise cloud architectures on AWS, Azure, and Google Cloud.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Chicago",
      type: "Full-time",
      description: "Lead product strategy and drive innovation for our enterprise solutions.",
    },
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Build Your Career
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                With NeoVedic
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Join a team of world-class professionals building the future of technology. 
              We're always looking for talented individuals passionate about innovation.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer more than just a job—we provide a platform for growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="p-8 text-center hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our current job openings and find your perfect role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openings.map((job) => (
                <Card key={job.title} className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/30">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <Button className="w-full group">
                    <span className="flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-40 bg-gradient-to-br from-primary/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Don't See Your Role?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We're always on the lookout for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg">
              <span className="flex items-center gap-2">
                Submit Your Resume
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
