import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/DASHBOARD.png",
    "/PLANNER.png", 
    "/SCHEDULE.png",
    "/TASK.png"
  ];

  // Debug para verificar que las imágenes cargan
  useEffect(() => {
    carouselImages.forEach((imageSrc, index) => {
      const img = new Image();
      img.onload = () => console.log(`✅ Imagen ${index + 1} cargada: ${imageSrc}`);
      img.onerror = () => console.error(`❌ Error cargando imagen ${index + 1}: ${imageSrc}`);
      img.src = imageSrc;
    });
  }, []);

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 7000); 

    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
              <Button variant="hero" size="lg" className="group" onClick={() => window.open('https://planiar.vercel.app/', '_blank')}>
                Comenzar
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
            
            {/* Carrusel de imágenes */}
            <div className="relative rounded-2xl shadow-2xl bg-gradient-to-br from-muted/20 to-background min-h-[300px] flex items-center justify-center">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`w-full transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute top-0 left-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`PLANIAR Design ${index + 1}`}
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
                    onError={(e) => {
                      console.error(`❌ Error loading image: ${image}`);
                      e.currentTarget.style.display = 'block';
                      e.currentTarget.style.background = '#f3f4f6';
                      e.currentTarget.style.border = '2px dashed #9ca3af';
                      e.currentTarget.alt = `Error: No se pudo cargar ${image}`;
                    }}
                    onLoad={() => {
                      console.log(`✅ Image loaded successfully: ${image}`);
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Indicadores del carrusel */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 z-20">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                    index === currentImageIndex 
                      ? 'bg-white border-white shadow-lg scale-110' 
                      : 'bg-transparent border-white/60 hover:border-white hover:bg-white/30'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
