import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Características", href: "#features" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Precios", href: "#pricing" },
    { name: "Testimonios", href: "#testimonials" },
  ],
  company: [
    { name: "Sobre nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Seguridad", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
              <span className="text-2xl font-bold text-foreground">TaskFlow AI</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transforma el caos en productividad con inteligencia artificial. Organiza tu vida, una tarea a la vez.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Compañía</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 TaskFlow AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
