import { Upload, Sparkles, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Agrega tus tareas",
    description: "Importa o escribe tus actividades, pendientes y proyectos en un solo lugar.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "La IA analiza",
    description: "Nuestro sistema inteligente evalúa prioridades, tiempos y dependencias automáticamente.",
    number: "02",
  },
  {
    icon: Calendar,
    title: "Recibe tu horario",
    description: "Obtén un plan de acción personalizado que optimiza tu tiempo y energía.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Logra más cada día",
    description: "Sigue tu horario y observa cómo tu productividad se multiplica semana tras semana.",
    number: "04",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tan simple que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              funciona solo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En 4 pasos sencillos, transforma tu caos diario en un sistema organizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center space-y-4 p-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-glow">
                    <step.icon className="w-10 h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
