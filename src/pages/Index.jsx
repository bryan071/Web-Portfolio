import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
