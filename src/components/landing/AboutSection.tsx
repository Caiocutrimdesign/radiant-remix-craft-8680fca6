import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Target, Car, Users, ArrowRight } from "lucide-react";
import { InfoModal } from "./InfoModal";

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
    <div ref={ref} className="bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center gap-4 transition-transform duration-500 hover:-translate-y-1 shadow-lg hover:border-white/20">
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saibaMaisContent = (
    <div className="space-y-4">
      <p>A Rastremix nasceu com um único objetivo: democratizar a segurança veicular de alta tecnologia no Brasil sem abrir mão de um atendimento humano e próximo.</p>
      
      <h4 className="text-white font-medium text-lg mt-6 pt-4 border-t border-white/5">Nossa Missão</h4>
      <p>Proteger o patrimônio dos nossos clientes com excelência técnica, respostas em tempo real e eficiência nas ocorrências, provando que é possível ter o serviço de empresas gigantescas com um preço justo.</p>
      
      <h4 className="text-white font-medium text-lg mt-6 pt-4 border-t border-white/5">Visão e Valores</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Transparência:</strong> Informação clara em todos os nossos planos.</li>
        <li><strong>Inovação:</strong> O que há de melhor em hardware GPS/GPRS.</li>
        <li><strong>Comprometimento:</strong> Central de atendimento 24 horas real e responsiva.</li>
      </ul>
    </div>
  );

  return (
    <section id="sobre" className="py-32 bg-[#020202] relative border-t border-white/5">
      <InfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Nossa História" 
        subtitle="Conheça a essência da Rastremix"
        content={saibaMaisContent}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
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
            className="space-y-8 text-[#888] text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
             <p>Fundada com o propósito de proteger o patrimônio e oferecer mais tranquilidade para motoristas em todo o país, nossa empresa nasceu da vontade de levar tecnologia de rastreamento veicular de forma acessível e eficiente ao consumidor final.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-[14px] uppercase tracking-wide rounded-xl hover:bg-white/5 transition-all flex items-center gap-2"
            >
              Saiba Mais Sobre Nós <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

        {/* CONTADORES ANIMADOS (Horizontal Layout & Glass/Premium) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          <AnimatedCounter value={7000} label="Veículos Protegidos" icon={ShieldCheck} />
          <AnimatedCounter value={10} label="Anos de Experiência" icon={Target} />
          <AnimatedCounter value={2500} label="Veículos Recuperados" icon={Car} />
          <AnimatedCounter value={7500} label="Clientes Satisfeitos" icon={Users} />
        </div>
      </div>
    </section>
  );
};
