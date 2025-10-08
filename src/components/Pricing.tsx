import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "por siempre",
    description: "Perfecto para todos los usuarios",
    features: [
      "Hasta 20 tareas al mes",
      "Análisis de IA",
      "Tu horario personalizado",
      "Acceso web",
      "Soporte por email",
    ],
    cta: "Comenzar gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "USD por mes",
    description: "Para personas que buscan máxima productividad",
    features: [
      "Tareas ilimitadas",
      "Horarios ilimitados",
      "Sincronización con calendarios",
      "Reportes de productividad",
      "Soporte prioritario 24/7",
    ],
    cta: "Probar 14 días gratis",
    popular: true,
  },
  {
    name: "Equipos",
    price: "$10",
    period: "USD por usuario/mes",
    description: "Para grupos que quieren trabajar mejor juntos",
    features: [
      "Todo lo de Pro",
      "Gestión de equipo",
      "Tableros colaborativos",
      "Análisis de equipo",
      "Roles y permisos",
      "Gerente de cuenta dedicado",
    ],
    cta: "Contactar ventas",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Planes para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              cada necesidad
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comienza gratis y escala cuando lo necesites. Sin sorpresas, sin ataduras.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 space-y-6 hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-6 hover:scale-105 relative animate-fade-in-up cursor-pointer group ${
                plan.popular ? "border-2 border-primary shadow-lg hover:rotate-2" : "bg-card hover:-rotate-1"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
              
              <div className="space-y-3 pt-6 border-t border-border">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
