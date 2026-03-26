import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Lock } from "lucide-react";

export const HeroSection = () => {
  const whatsappLink = "https://wa.me/5598985992136?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+plano+de+rastreamento+de+R%24+50%2Fm%C3%AAs.";

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020202]">
      {/* Absolute Minimal Ambient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFTSIDE: Text & Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-display font-medium leading-[1.05] text-white">
              Rastreamento Veicular <span className="font-light block mt-2">Inteligente</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#888] max-w-lg leading-relaxed font-light">
              O Rastreador Veicular da Rastremix é a solução perfeita para proteger seu veículo 24 horas por dia.
            </p>
          </div>

          {/* Elegant Pricing Display */}
          <div className="py-6 border-y border-white/[0.05]">
            <p className="text-sm tracking-widest text-[#666] uppercase mb-1 font-medium">Planos a partir de</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl md:text-5xl font-display font-light text-white">
                R$ 50,00 
              </h2>
              <span className="text-xl text-[#666] font-light">/ mês</span>
            </div>
            <p className="text-xs text-[#555] mt-3 max-w-sm block">
              *Consulte valores para o seu veículo. Instalação grátis nos planos anuais.
            </p>
          </div>

          {/* Buttons Layout */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-semibold text-[14px] uppercase tracking-wide rounded-xl hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Falar com consultor
            </a>
            
            <Link 
              to="/login"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-[14px] uppercase tracking-wide rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              Acessar Sistema
              <Lock className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHTSIDE: High-end Interface Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative hidden lg:flex justify-center items-center"
        >
           <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-700" />
              <img 
                 src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop" 
                 alt="Luxury Tech Tracking" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Modern HUD Overlays */}
              <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-white/[0.05] border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                 <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                 <div>
                   <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-0.5">Sinal GPS</div>
                   <div className="text-white font-medium text-xs tracking-wide">CONECTADO</div>
                 </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-[#050505]/80 border border-white/10 p-5 rounded-2xl">
                 <div className="flex justify-between items-end mb-4">
                   <div>
                      <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Veículo 01</div>
                      <div className="text-white font-medium text-lg">Monitoramento Ativo</div>
                   </div>
                   <div className="text-xs text-primary font-mono tracking-wider">ON-LINE</div>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
