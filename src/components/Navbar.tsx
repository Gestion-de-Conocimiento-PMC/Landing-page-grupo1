import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import LogoPMC from "/LogoPMC.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Características", href: "#features" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Precios", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={LogoPMC} alt="PMC Logo" className="w-16 h-16 object-contain" />
            <span className="text-4xl font-bold text-foreground">
              PLAN<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">IA</span>R
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <Button variant="hero" size="sm" className="group" onClick={() => window.open('https://planiar.vercel.app/', '_blank')}>
              Comenzar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-x-2 cursor-pointer text-left w-full"
              >
                {link.name}
              </button>
            ))}
            <Button variant="hero" size="sm" className="group w-full mt-4" onClick={() => window.open('https://www.figma.com/make/cbDE7cyCs44SK9hAAkAqtX/AI-Powered-Weekly-Planner?node-id=0-1&t=zCImvBJ9KMntXdQK-1', '_blank')}>
              Comenzar gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
