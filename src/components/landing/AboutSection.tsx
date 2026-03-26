import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Target, Car, Users } from "lucide-react";

const AnimatedCounter = ({ value, label, icon: Icon, duration = 2 }: { value: number, label: string, icon: any, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center gap-3 transform hover:-translate-y-2 transition-transform duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        +{count.toLocaleString('pt-BR')}
      </h4>
      <p className="text-sm text-primary uppercase tracking-widest font-bold">{label}</p>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Nossa História</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Solução em Rastreamento Veicular
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed text-left"
          >
            <div>
              <strong className="text-white block mb-1">Nossa História:</strong>
              Fundada com o propósito de proteger o patrimônio e oferecer mais tranquilidade para motoristas em todo o país, nossa empresa nasceu da vontade de levar tecnologia de rastreamento veicular de forma acessível e eficiente ao consumidor final.
            </div>
            <div>
              <strong className="text-white block mb-1">Atuação:</strong>
              Ao longo do tempo, consolidamos nossa atuação no varejo, oferecendo soluções práticas, atendimento humanizado e resultados reais para quem busca segurança no dia a dia.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <button className="px-8 py-3 glass-panel text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/20">
              SAIBA MAIS
            </button>
          </motion.div>
        </div>

        {/* CONTADORES ANIMADOS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <AnimatedCounter value={7000} label="Veículos Protegidos" icon={ShieldCheck} />
          <AnimatedCounter value={10} label="Anos de Experiência" icon={Target} />
          <AnimatedCounter value={2500} label="Veículos Recuperados" icon={Car} />
          <AnimatedCounter value={7500} label="Clientes Satisfeitos" icon={Users} />
        </div>
      </div>
    </section>
  );
};
