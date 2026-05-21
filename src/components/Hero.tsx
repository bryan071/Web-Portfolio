import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingItems = ["</>", "{ }", "React", "JS", "CSS", "UI"];

const cuteCharacters = [
  { image: `${import.meta.env.BASE_URL}characters/mochi.png`, top: "18%", duration: 14, delay: 0 },
  { image: `${import.meta.env.BASE_URL}characters/cutie.png`, top: "42%", duration: 18, delay: 3 },
  { image: `${import.meta.env.BASE_URL}characters/kulet1.png`, top: "68%", duration: 16, delay: 6 },
  { image: `${import.meta.env.BASE_URL}characters/puslit.png`, top: "78%", duration: 20, delay: 9 },
  { image: `${import.meta.env.BASE_URL}characters/pichi.png`, top: "88%", duration: 24, delay: 11 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 text-foreground px-4 relative pt-16 overflow-hidden"
    >
      {/* Floating Background Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingItems.map((item, index) => (
          <motion.span
            key={index}
            className="absolute text-primary/10 text-3xl md:text-5xl font-bold select-none"
            style={{
              left: `${10 + index * 15}%`,
              top: `${15 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Cute Running Characters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {cuteCharacters.map((char, index) => (
           <motion.img
              key={index}
              src={char.image}
              alt=""
              className="absolute w-16 h-16 md:w-24 md:h-24 object-contain opacity-80 select-none"
              style={{ top: char.top }}
              initial={{ x: "-20vw" }}
              animate={{
                x: "110vw",
                y: [0, -12, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                x: {
                  duration: char.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: char.delay,
                },
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-center relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
          Bryan
        </span>{" "}
        👋
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl mb-6 text-muted-foreground text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Website Developer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-center text-muted-foreground mb-8 leading-relaxed relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        “I develop modern, responsive, and high-performance websites and web
        applications using React, Tailwind CSS, and other advanced web
        development technologies.”
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 mb-10 justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all"
        >
          <a href="#projects">View Projects</a>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all"
        >
          <a href={`${import.meta.env.BASE_URL}BryanBulan_Resume.pdf`} download>
            Download CV
          </a>
        </Button>
      </motion.div>

      <motion.div
        className="flex gap-6 text-2xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="https://github.com/bryan071"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/bryan-bulan-828659374/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>

        <a
          href="https://www.facebook.com/bryan.m.bulan/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-primary cursor-pointer animate-bounce z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}