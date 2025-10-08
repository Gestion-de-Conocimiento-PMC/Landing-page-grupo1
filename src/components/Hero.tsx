import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Impulsado por Inteligencia Artificial</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforma el caos en{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                productividad
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              PLANIAR analiza tus tareas y actividades para crear horarios personalizados que se adaptan a tus necesidades. Deja que la IA organice tu dia para tener la mejor productividad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group" onClick={() => window.open('https://www.figma.com/make/cbDE7cyCs44SK9hAAkAqtX/AI-Powered-Weekly-Planner?node-id=0-1&t=zCImvBJ9KMntXdQK-1', '_blank')}>
                Comenzar gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToHowItWorks}>
                Ver cómo funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10</div>
                <div className="text-sm text-muted-foreground">Usuarios activos</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">40</div>
                <div className="text-sm text-muted-foreground">Tareas organizadas</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up group cursor-pointer">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30 animate-glow group-hover:opacity-50 transition-opacity" />
            <img
              src={heroImage}
              alt="TaskFlow AI Dashboard"
              className="relative rounded-2xl shadow-2xl w-full group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
