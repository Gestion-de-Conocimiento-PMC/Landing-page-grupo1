import { Brain, Calendar, TrendingUp, Zap, Shield, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import featureAi from "@/assets/feature-ai.jpg";
import featureSchedule from "@/assets/feature-schedule.jpg";
import featureProductivity from "@/assets/feature-productivity.jpg";

const features = [
  {
    icon: Brain,
    title: "Análisis Inteligente",
    description: "Nuestra IA analiza tus tareas, prioridades y hábitos para entender exactamente qué necesitas.",
    image: featureAi,
  },
  {
    icon: Calendar,
    title: "Horarios Personalizados",
    description: "Genera automáticamente horarios optimizados que se adaptan a tu ritmo de trabajo y preferencias.",
    image: featureSchedule,
  },
  {
    icon: TrendingUp,
    title: "Maximiza tu Productividad",
    description: "Aumenta tu eficiencia hasta un 40% con planificación inteligente basada en tu rendimiento.",
    image: featureProductivity,
  },
  {
    icon: Zap,
    title: "Actualizaciones en Tiempo Real",
    description: "Tu horario se ajusta automáticamente cuando surgen imprevistos o cambios de prioridad.",
  },
  {
    icon: Shield,
    title: "Privacidad Garantizada",
    description: "Tus datos están encriptados y protegidos. Solo tú tienes acceso a tu información.",
  },
  {
    icon: Smartphone,
    title: "Disponible en Todos tus Dispositivos",
    description: "Accede desde cualquier lugar: web, móvil o tablet. Sincronización automática en la nube.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ser más productivo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas poderosas diseñadas para simplificar tu día y multiplicar tu rendimiento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-1 bg-card border-border animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.image ? (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-glow">
                  <feature.icon className="w-7 h-7 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
