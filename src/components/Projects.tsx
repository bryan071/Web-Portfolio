import { Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import portfolioImage from "@/assets/sip.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import companyMapping from "@/assets/company-mapping.jpg";

const projects = [
  {
    title: "Photo Editing Portfolio",
    desc: "Showcasing photo editing projects.",
    image: portfolioImage,
    link: "/photo-editing",
  },
  {
    title: "Farm-Aid: E-commerce App",
    desc: "A platform to buy and sell farm products that will help farmers reach more customers.",
    image: ecommerceImage,
    link: "/farm-aid",
  },
  {
    title: "Company Mapping",
    desc: "A system that will monitor and verify the information of companies.",
    image: companyMapping,
    link: "/company-mapping",
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
          Here are some of my recent projects that showcase my skills.
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

                <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Code className="w-4 h-4" /> View
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}