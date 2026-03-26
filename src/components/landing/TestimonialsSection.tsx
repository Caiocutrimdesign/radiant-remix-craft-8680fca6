import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Ferreira",
    role: "Motorista de App",
    content: "Melhor investimento que fiz. O app é rápido e o bloqueio é na hora. Com 50 reais por mês eu durmo tranquilo sabendo onde meu carro está."
  },
  {
    name: "Amanda Silva",
    role: "Proprietária",
    content: "Tive um problema na estrada à noite e a assistência 24h chegou muito rápido com o reboque. O atendimento deles pelo WhatsApp é nota 10!"
  },
  {
    name: "Roberto Almeida",
    role: "Dono de Frota",
    content: "Instalei em toda a minha frota. O rastreamento de 3 em 3 minutos mudou completamente a forma como gerencio as rotas. Super recomendo a Rastremix."
  }
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section id="depoimentos" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          O que dizem <span className="neon-text-blue">Nossos Clientes</span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg">Faça como milhares de brasileiros e proteja seu veículo com a Rastremix.</p>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 glass-panel border border-white/10 rounded-3xl"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-4 left-4" />
              
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed relative z-10 px-8">
                "{testimonials[current].content}"
              </p>
              
              <div>
                <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                <p className="text-primary text-sm uppercase tracking-widest">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="p-3 rounded-full border border-white/20 text-white hover:bg-primary/20 hover:border-primary hover:text-primary transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full border border-white/20 text-white hover:bg-primary/20 hover:border-primary hover:text-primary transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
