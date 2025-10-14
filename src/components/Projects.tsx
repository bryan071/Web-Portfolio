import { Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import portfolioImage from "@/assets/portfolio-project.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import weatherImage from "@/assets/weather-project.jpg";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "A responsive portfolio website built with React and Tailwind CSS.",
    image: portfolioImage,
    demo: "#",
  },
  {
    title: "E-Commerce App",
    desc: "A modern online shopping app with Firebase and React.",
    image: ecommerceImage,
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    desc: "A clean weather dashboard with real-time data.",
    image: weatherImage,
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          My Projects{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
            🚀
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in frontend development
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden shadow-lg hover:shadow-primary/20 transition-all transform hover:-translate-y-2 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.desc}
                </CardDescription>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Code className="w-4 h-4" /> View Demo
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
