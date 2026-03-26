import { motion } from "framer-motion";
import { Wrench, Map, Smartphone } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    { num: "01", icon: Wrench, title: "Instalação Discreta", desc: "Técnicos especializados instalam o módulo avançado em local seguro e invisível no seu veículo." },
    { num: "02", icon: Map, title: "Conexão Segura", desc: "O dispositivo passa a transmitir dados criptografados para nossos servidores redundantes de alta disponibilidade." },
    { num: "03", icon: Smartphone, title: "Controle Total", desc: "Você recebe acesso ao nosso aplicativo/sistema para acompanhar, bloquear e gerenciar sua frota 24/7." }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Como a <span className="neon-text-blue">Mágica Acontece</span></h2>
          <p className="text-gray-400">Três passos simples separam você da tranquilidade total.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 flex ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="glass-panel p-8 rounded-2xl border-primary/20 hover:shadow-glow transition-all relative group max-w-sm w-full">
                    <div className="absolute -top-6 -right-6 text-6xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors">
                      {step.num}
                    </div>
                    <step.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex w-12 h-12 rounded-full border-4 border-black bg-primary items-center justify-center shadow-glow z-10 shrink-0">
                  <span className="text-black font-bold font-mono">{idx + 1}</span>
                </div>
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
