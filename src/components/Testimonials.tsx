import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de Marketing",
    content: "PLANIAR cambió completamente mi forma de trabajar. Ahora tengo tiempo para lo que realmente importa y mi equipo está más organizado que nunca.",
    rating: 4,
    avatar: "MG",
  },
  {
    name: "Carlos Ruiz",
    role: "Emprendedor",
    content: "Pasé de sentir que no tenía control de mi tiempo a tener días perfectamente estructurados. La IA realmente entiende mis prioridades.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Desarrolladora de Software",
    content: "Como persona con TDAH, necesitaba algo más que una lista de tareas. PLANIAR me da estructura sin quitarme flexibilidad. Es perfecto.",
    rating: 5,
    avatar: "AM",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Amado por{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              miles de usuarios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo PLANIAR está transformando la vida de profesionales como tú.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-6 hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-2 bg-card animate-fade-in-up cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary group-hover:scale-125 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
