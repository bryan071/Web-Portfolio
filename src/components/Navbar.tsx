import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/30 backdrop-blur-lg border-b border-white/10 text-foreground z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Bryan.dev
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition-colors hover:text-primary"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-2xl focus:outline-none hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {navOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg border-t border-white/10 animate-slide-in-right">
          <ul className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleNav}
                  className="text-lg hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
