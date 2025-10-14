import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 text-foreground px-4 relative pt-16"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-center"
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
        className="text-xl md:text-2xl mb-6 text-muted-foreground text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Frontend Developer & Designer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-center text-muted-foreground mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I build modern, responsive, and fast web applications using React, Tailwind CSS, and other powerful frontend tools.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 mb-10 justify-center"
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
          <a href="/resume.pdf">Download CV</a>
        </Button>
      </motion.div>

      <motion.div
        className="flex gap-6 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 text-primary cursor-pointer animate-bounce"
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
