import { Link } from "react-router-dom";
import { ShieldAlert, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="relative h-14 flex items-center justify-center transition-all group-hover:scale-105">
                <img src="/2222.png" alt="Rastremix Logo" className="h-full w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                RASTRE<span className="text-red-500">MIX</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tecnologia de ponta em rastreamento veicular e gestão de frotas. Segurança, controle e tranquilidade 24 horas por dia.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-gray-400 hover:text-primary transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-primary transition-colors text-sm">Benefícios</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-primary transition-colors text-sm">Planos e Preços</a></li>
              <li><a href="#seguranca" className="text-gray-400 hover:text-primary transition-colors text-sm">Segurança</a></li>
              <li><Link to="/login" className="text-primary hover:text-white transition-colors text-sm font-bold">Acessar Sistema</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Agendar Instalação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">Av. Tecnológica, 1000<br/>São Paulo, SP - 01000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">0800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">contato@rastremix.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rastremix Segurança Veicular. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Desenvolvido com <span className="text-red-500 animate-pulse">❤</span> por Alta Tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
};
