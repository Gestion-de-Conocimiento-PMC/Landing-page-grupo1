import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Sin tarjeta de crédito requerida</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Empieza a organizar tu vida hoy mismo
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Únete a más de 10 personas que ya están multiplicando su productividad con  PLANIAR. Tu horario personalizado te está esperando.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-110 hover:rotate-2 group transition-all duration-300"
              onClick={() => window.open('https://www.figma.com/make/cbDE7cyCs44SK9hAAkAqtX/AI-Powered-Weekly-Planner?node-id=0-1&t=zCImvBJ9KMntXdQK-1', '_blank')}
            >
              Comenzar gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary hover:scale-110 hover:-rotate-2 transition-all duration-300"
              onClick={() => window.open('https://www.figma.com/make/cbDE7cyCs44SK9hAAkAqtX/AI-Powered-Weekly-Planner?node-id=0-1&t=zCImvBJ9KMntXdQK-1', '_blank')}
            >
              Probar Pro
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>14 días de prueba</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
