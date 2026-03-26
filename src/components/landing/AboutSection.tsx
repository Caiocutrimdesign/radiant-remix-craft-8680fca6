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
    <div ref={ref} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center gap-4 transition-transform duration-500 hover:-translate-y-2">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 mb-2">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-4xl md:text-5xl font-display font-light text-white">
        +{count.toLocaleString('pt-BR')}
      </h4>
      <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-widest uppercase font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Nossa História</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-8"
          >
            Solução em Rastreamento Veicular
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-gray-400 text-lg lg:text-xl font-light leading-relaxed text-left max-w-3xl mx-auto"
          >
            <p>
              <strong className="text-white font-medium block mb-2">Fundação:</strong>
              Fundada com o propósito de proteger o patrimônio e oferecer mais tranquilidade para motoristas em todo o país, nossa empresa nasceu da vontade de levar tecnologia de rastreamento veicular de forma acessível e eficiente ao consumidor final.
            </p>
            <p>
              <strong className="text-white font-medium block mb-2">Atuação Constante:</strong>
              Ao longo do tempo, consolidamos nossa atuação no varejo, oferecendo soluções práticas, atendimento humanizado e resultados reais para quem busca segurança no dia a dia.
            </p>
          </motion.div>
        </div>

        {/* CONTADORES ANIMADOS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <AnimatedCounter value={7000} label="Veículos Protegidos" icon={ShieldCheck} />
          <AnimatedCounter value={10} label="Anos de Experiência" icon={Target} />
          <AnimatedCounter value={2500} label="Veículos Recuperados" icon={Car} />
          <AnimatedCounter value={7500} label="Clientes Satisfeitos" icon={Users} />
        </div>
      </div>
    </section>
  );
};
