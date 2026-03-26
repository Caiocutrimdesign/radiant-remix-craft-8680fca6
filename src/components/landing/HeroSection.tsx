import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ChevronRight, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  const whatsappLink = "https://wa.me/5598985992136?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+plano+de+rastreamento+de+R%24+50%2Fm%C3%AAs.";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow-blue pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow-purple pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-2">
            <Shield className="w-4 h-4" />
            <span>Sistema Avançado de Rastreamento</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white shadow-black drop-shadow-lg">
            Rastreamento Veicular <span className="neon-text-blue block">Inteligente</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            O Rastreador Veicular da Rastremix é a solução perfeita para proteger seu veículo 24 horas por dia.
          </p>

          <div className="py-6 my-2 border-y border-white/10 bg-black/40 p-4 rounded-xl border border-primary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse-glow-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">
              A partir de R$ 50,00/mês
            </h2>
            <p className="text-xs text-gray-500 mt-2 italic flex items-center gap-1">
              *Consulte valores para o seu veículo. Instalação grátis nos planos anuais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-5 bg-[#25D366] text-black font-black text-lg rounded-xl overflow-hidden shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] transition-all flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <MessageCircle className="w-7 h-7 fill-black" />
              <span>FALAR COM UM CONSULTOR</span>
            </a>
            
            <Link 
              to="/login"
              className="px-8 py-5 border-2 border-primary/50 text-white font-bold rounded-xl hover:bg-primary hover:text-black transition-all flex items-center justify-center"
            >
              ACESSAR SISTEMA
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[100px] opacity-60" />
            
            {/* Visual representation / GIF Simulator (Car + Tech) */}
            <div className="absolute inset-0 p-8">
              <div className="w-full h-full glass-panel rounded-3xl border border-primary/30 shadow-[0_0_50px_rgba(0,243,255,0.2)] relative overflow-hidden transform-gpu perspective-1000 rotate-y-[-5deg]">
                 
                 {/* Decorative Map BG */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-luminosity filter grayscale" />
                 <div className="absolute inset-0 bg-black/50" />
                 
                 {/* Tracking Line Animation */}
                 <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none">
                    <path d="M 0,200 Q 150,50 300,150 T 600,100" fill="none" stroke="rgba(0,243,255,0.4)" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_20s_linear_infinite]" />
                 </svg>

                 {/* Car Image Proxy - Will use a highly styled placeholder or fallback to an unsplash car image */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto z-20">
                   <img 
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop" 
                      alt="Carro Futurista"
                      className="w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] rounded-xl brightness-75 contrast-125"
                   />
                 </div>

                 {/* Radar Scans */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-2 border-primary/20 rounded-full animate-[ping_4s_ease-out_infinite] z-0" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border-2 border-secondary/30 rounded-full animate-[ping_3s_ease-out_infinite_0.5s] z-0" />

                 {/* Status Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 glass-panel bg-black/80 border-primary/30 p-4 rounded-xl flex items-center justify-between z-30 shadow-neon-blue">
                   <div>
                     <div className="text-primary text-xs font-mono mb-1">STATUS DO VEÍCULO</div>
                     <div className="text-white font-bold tracking-widest">MONITORAMENTO ATIVO</div>
                   </div>
                   <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                     <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(0,243,255,1)]" />
                   </div>
                 </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
