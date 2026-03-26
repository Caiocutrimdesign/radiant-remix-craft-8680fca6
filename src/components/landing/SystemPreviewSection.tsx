import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop } from "lucide-react";

export const SystemPreviewSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Glow layers */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/10 rounded-full border border-primary/30 mb-8 shadow-glow">
            <Laptop className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Controle total na <span className="neon-text-blue">palma da mão</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Acompanhe alertas, histórico financeiro e faça bloqueios instantâneos com nossa plataforma web de nível militar, desenvolvida exclusivamente para você.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-display font-bold text-lg rounded-full hover:bg-primary transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-neon-blue group"
          >
            👉 ACESSAR O SISTEMA
          </Link>
        </motion.div>

        {/* Mockup Frame */}
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="mt-16 relative perspective-1000 max-w-5xl mx-auto"
        >
          <div className="glass-panel rounded-t-3xl border-b-0 border-white/20 p-2 overflow-hidden shadow-[0_-20px_50px_rgba(0,243,255,0.2)]">
            {/* Fake Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/60 rounded-t-xl mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md flex items-center px-3">
                <span className="text-xs text-gray-500 font-mono">dashboard.rastremix.com.br</span>
              </div>
            </div>
            {/* Fake Dashboard Body - Graphic representation */}
            <div className="h-[400px] w-full bg-[#0a0a0a] rounded-xl flex">
              <div className="w-1/4 h-full border-r border-white/5 p-4 space-y-4">
                <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="flex-1 p-6 relative">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                 <div className="flex justify-between items-center mb-6">
                   <div className="h-6 w-1/3 bg-white/10 rounded animate-pulse" />
                   <div className="h-8 w-8 bg-primary/20 rounded-full animate-pulse" />
                 </div>
                 <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                   <div className="h-24 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                   </div>
                   <div className="h-24 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
                   </div>
                 </div>
                 <div className="h-32 bg-white/5 rounded-lg border border-white/10 w-full relative z-10" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
