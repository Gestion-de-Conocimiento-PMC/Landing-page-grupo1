import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Clock, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Pierdes 2+ horas diarias",
    description: "Planificando, repriorizando y olvidando tareas importantes. Tu tiempo se evapora sin resultados.",
    loss: "10+ horas semanales",
  },
  {
    icon: TrendingDown,
    title: "Productividad inconsistente",
    description: "Algunos días trabajas mucho pero logras poco. Sin estructura, tu energía se desperdicia.",
    loss: "40% menos rendimiento",
  },
  {
    icon: AlertCircle,
    title: "Estrés y sobrecarga mental",
    description: "Recordar todo en tu cabeza te agota. La ansiedad de olvidar algo importante nunca desaparece.",
    loss: "Burnout garantizado",
  },
  {
    icon: Zap,
    title: "Oportunidades perdidas",
    description: "Proyectos personales, desarrollo profesional y tiempo con familia quedan siempre para después.",
    loss: "Sueños pospuestos",
  },
];

const benefits = [
  {
    title: "Horarios inteligentes en 5 minutos",
    description: "La IA crea tu agenda semanal perfecta considerando tus prioridades, energía y tiempo disponible.",
  },
  {
    title: "Recupera 10+ horas por semana",
    description: "Elimina tiempo perdido en planificación, decisiones y distracciones. Enfócate en lo que importa.",
  },
  {
    title: "Reduce estrés hasta 60%",
    description: "Tu cerebro descansa al saber que todo está organizado. PLANIAR recuerda por ti.",
  },
  {
    title: "Multiplica tu productividad x3",
    description: "Estructura optimizada + prioridades claras + seguimiento automático = resultados exponenciales.",
  },
];

export const WhyPlaniar = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Sin PLANIAR */}
        <div className="mb-20">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Sin PLANIAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Lo que estás{" "}
              <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
                perdiendo ahora mismo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada día sin estructura te cuesta más de lo que imaginas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="p-6 space-y-4 border-destructive/20 bg-card hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                  <div className="pt-2 border-t border-destructive/10">
                    <span className="text-sm font-semibold text-destructive">{point.loss}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Con PLANIAR */}
        <div>
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Con PLANIAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Lo que{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ganas al usarlo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforma tu caos en resultados medibles en minutos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 space-y-3 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
