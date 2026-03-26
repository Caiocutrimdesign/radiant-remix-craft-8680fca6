import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Ferreira",
    role: "Motorista de Aplicativo",
    content: "Melhor investimento que fiz. O aplicativo é extremamente responsivo e o bloqueio é na hora. Com 50 reais por mês eu durmo tranquilo sabendo exatamente onde meu carro está."
  },
  {
    name: "Amanda Silva",
    role: "Proprietária Particular",
    content: "Tive um problema na estrada à noite e a assistência 24h chegou muito rápido com o reboque. A central responde via WhatsApp em minutos. Atendimento nota 10!"
  },
  {
    name: "Roberto Almeida",
    role: "Gestor de Frotas",
    content: "Instalei em toda a minha frota comercial. O rastreamento atualizado de 3 em 3 minutos mudou completamente a forma como gerencio as rotas dos meus motoristas."
  }
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section id="depoimentos" className="py-32 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6">
          O que dizem <span className="font-semibold">Nossos Clientes</span>
        </h2>
        <p className="text-[#888] mb-20 text-lg lg:text-xl font-light">Faça como milhares de brasileiros e proteja seu veículo com a tecnologia de ponta da Rastremix.</p>

        <div className="relative h-[280px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-6 left-6" />
              
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-lg md:text-2xl text-gray-300 font-light italic mb-8 leading-relaxed max-w-3xl">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <h4 className="text-white font-medium text-lg tracking-wide">{testimonials[current].name}</h4>
                <p className="text-[#666] text-xs uppercase tracking-widest mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button onClick={prev} className="p-3.5 rounded-full border border-white/20 text-gray-400 hover:bg-white/10 hover:text-white transition-all transform hover:-translate-x-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === idx ? 'bg-red-600 w-8 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <button onClick={next} className="p-3.5 rounded-full border border-white/20 text-gray-400 hover:bg-white/10 hover:text-white transition-all transform hover:translate-x-1">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
