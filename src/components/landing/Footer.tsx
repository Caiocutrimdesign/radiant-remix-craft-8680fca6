import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ShieldAlert } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
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
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Tecnologia de ponta em rastreamento veicular e gestão de frotas para garantir a segurança do seu patrimônio 24/7.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-primary transition-colors text-sm">Empresa</button></li>
              <li><button onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-primary transition-colors text-sm">Planos</button></li>
              <li><button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-primary transition-colors text-sm">Assistência 24h</button></li>
              <li><button onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-primary transition-colors text-sm">Depoimentos</button></li>
              <li><Link to="/login" className="text-gray-400 hover:text-primary transition-colors text-sm">Acessar Sistema</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">ATENDIMENTO</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Atendimento 24h: <br/><strong className="text-white">(98) 98599-2136</strong></li>
              <li className="text-gray-400">Suporte Técnico: <br/><strong className="text-white">(98) 97020-6628</strong></li>
              <li className="text-gray-400">Financeiro: <br/><strong className="text-white">(98) 98423-8044</strong></li>
              <li><a href="mailto:rastremixsegurancaveicular@gmail.com" className="text-primary hover:text-white transition-colors">rastremixsegurancaveicular@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">ACOMPANHE A GENTE</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-xs text-gray-500 mt-6 max-w-xs">
               Horário comercial: Seg a Sex, 08h às 18h. Plantões de emergência via telefone 24 horas por dia.
            </p>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rastremix Segurança e Monitoramento Veicular. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
