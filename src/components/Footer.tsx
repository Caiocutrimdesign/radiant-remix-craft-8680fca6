import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">R</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Rastre<span className="text-gradient">mix</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especializada em rastreamento veicular, garantindo a melhor proteção contra roubo e furto.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Menu</h4>
            <div className="space-y-2">
              {["Início", "Sobre", "Recursos", "Depoimentos", "Contato"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-3">
              <a href="tel:08000420009" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 0800 042 0009
              </a>
              <a href="tel:5598985992136" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> (98) 98599-2136
              </a>
              <a href="mailto:rastremixsegurancaveicular@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> rastremixsegurancaveicular@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Horário</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>Seg - Sex: 08:00 às 18:00</p>
                  <p>Sáb: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rastremix Segurança Veicular. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
