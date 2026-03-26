import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  const whatsappLink = "https://wa.me/5598985992136?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+plano+de+rastreamento+de+R%24+50%2Fm%C3%AAs.";

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#020202]">
      {/* Subtle Premium Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593460354583-4224ab273433?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity filter brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-12 lg:col-span-6 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-xs tracking-widest font-medium uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Sistema Avançado de Segurança</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-display font-medium leading-[1.1] text-white">
            Rastreamento Veicular <span className="font-light text-primary block mt-2">Inteligente</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
            O Rastreador Veicular da Rastremix é a solução perfeita para proteger seu veículo 24 horas por dia.
          </p>

          {/* Elegant Pricing Display */}
          <div className="py-6 relative">
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-2 font-medium">Planos a partir de</p>
            <h2 className="text-5xl md:text-6xl font-display font-normal text-white flex items-baseline gap-2">
              R$ 50,00 <span className="text-2xl text-gray-500 font-light">/ mês</span>
            </h2>
            <p className="text-xs text-gray-500 mt-4 max-w-sm block">
              *Consulte valores para o seu veículo. Instalação grátis nos planos anuais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-semibold text-[15px] hover:bg-gray-100 transition-all flex items-center justify-center gap-3 overflow-hidden shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span className="tracking-wide">FALAR COM UM CONSULTOR</span>
            </a>
            
            <Link 
              to="/login"
              className="group px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-all flex items-center justify-center gap-3"
            >
              <span className="tracking-wide">ACESSAR SISTEMA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="col-span-12 lg:col-span-6 relative hidden lg:flex justify-end items-center h-full"
        >
           {/* High-End HUD / System Visualization over Car directly baked via CSS overlay magic */}
           <div className="w-[120%] h-[600px] relative -right-20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/30 to-[#020202] z-10" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#020202]/50 to-[#020202] z-10" />
              <img 
                 src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop" 
                 alt="Luxury Tracker System" 
                 className="w-full h-full object-cover rounded-3xl opacity-80 filter contrast-125"
              />
              
              {/* Premium HUD Overlay Elements */}
              <div className="absolute top-10 right-10 z-20 glass-panel border border-white/10 p-4 rounded-xl backdrop-blur-md opacity-80 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <div>
                   <div className="text-[10px] text-gray-400 tracking-widest uppercase">GPS SIGNAL</div>
                   <div className="text-white font-mono text-xs">AQUISIÇÃO OTIMIZADA</div>
                 </div>
              </div>
              
              {/* Tracking grid overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           </div>
        </motion.div>
      </div>
    </section>
  );
};
