import { Card } from "@/components/ui/card";
import { Award, Users, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing but the best, ensuring every project exceeds expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your success is our mission. We work as an extension of your team.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge technologies to solve complex business challenges.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that drive real business value.",
  },
];

const technologies = [
  { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", tools: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Cloud", tools: ["AWS", "Azure", "Google Cloud", "Kubernetes"] },
  { category: "DevOps", tools: ["Docker", "Jenkins", "GitHub Actions", "Terraform"] },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Why Choose NeoVedic
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another IT company. We're your strategic technology partner committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="p-6 text-center" data-testid={`card-value-${value.title.toLowerCase()}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 border border-card-border">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category} data-testid={`tech-stack-${tech.category.toLowerCase()}`}>
                <h4 className="text-lg font-semibold mb-4 text-primary">{tech.category}</h4>
                <ul className="space-y-2">
                  {tech.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
