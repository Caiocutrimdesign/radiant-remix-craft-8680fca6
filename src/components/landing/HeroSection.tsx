import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";

export const HeroSection = () => {
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
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Sistema Avançado de Rastreamento</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Proteja seu veículo com tecnologia inteligente <span className="neon-text-blue block">RASTREMIX</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            Monitoramento em tempo real, segurança 24h e controle total na palma da sua mão. Garanta a proteção que seu patrimônio merece com o sistema mais futurista do mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/login"
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span>ENTRAR NO SISTEMA</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="#planos"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              VER PLANOS
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square animate-float">
            {/* 3D Car Placeholder Simulation using Glow Rings and a layered image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50" />
            
            {/* Mockup Frame / Dashboard Preview hovering */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 p-4 glass-panel rounded-2xl shadow-neon-blue border-white/10 rotate-y-[-10deg] rotate-x-[10deg] transform-gpu">
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                <div className="text-xs font-mono text-primary">RST-2026 - Conectado</div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 shadow-glow" />
                </div>
                <div className="h-2 bg-white/10 rounded-full w-4/5 overflow-hidden">
                  <div className="h-full bg-secondary w-1/2 shadow-neon-purple" />
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">Velocidade Atual</div>
                  <div className="text-2xl font-bold text-white font-display">65 <span className="text-sm text-gray-400">km/h</span></div>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Simulated 3D Car Map Overlay */}
            <div className="absolute left-0 bottom-1/4 w-2/3 p-4 glass-panel rounded-2xl shadow-neon-purple border-white/10 rotate-y-[10deg] transform-gpu -translate-x-12 translate-y-12 backdrop-blur-3xl">
              <div className="relative w-full h-32 rounded-xl border border-white/5 bg-black/50 overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
                 <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-pulse relative z-10" />
                 {/* Map rings */}
                 <div className="absolute w-16 h-16 rounded-full border border-primary/20 animate-[ping_3s_linear_infinite]" />
                 <div className="absolute w-32 h-32 rounded-full border border-primary/10 animate-[ping_4s_linear_infinite]" />
                 <div className="absolute bottom-2 left-2 text-[10px] text-primary font-mono">LAT -23.5505 / LNG -46.6333</div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
