import { Code2, Palette, Database, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { name: "HTML5", icon: Code2, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
  { name: "React", icon: Code2, color: "text-cyan-500" },
  { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
  { name: "Firebase", icon: Database, color: "text-amber-500" },
  { name: "GitHub", icon: GitBranch, color: "text-foreground" },
];

export default function About() {
  return (
    <section id="about" className="bg-secondary/20 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Bryan - Frontend Developer"
            className="w-56 h-56 object-cover rounded-full shadow-xl border-4 border-primary animate-glow"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
              Me
            </span>{" "}
            ✨
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Hi! I'm <span className="font-semibold text-foreground">Bryan</span>, an aspiring
            frontend developer passionate about building modern and responsive
            web applications. I enjoy turning ideas into visually appealing and
            user-friendly websites. I love learning new technologies and
            improving my craft every day. 🚀
          </p>

          <h3 className="text-2xl font-semibold mb-4">My Tech Stack 🧠</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:scale-105 transition-transform cursor-default"
              >
                <skill.icon className={`w-4 h-4 ${skill.color}`} />
                <span className="font-medium">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
