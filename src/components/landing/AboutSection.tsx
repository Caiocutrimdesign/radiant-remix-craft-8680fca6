import { motion } from "framer-motion";
import { Cpu, Lock, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Redefinindo a <span className="neon-text-blue">Segurança Veicular</span></h2>
          <p className="text-gray-400 text-lg">
            A Rastremix nasceu da necessidade de aplicar altíssima tecnologia à proteção de patrimônio. 
            Não somos apenas um rastreador; somos o seu centro de controle particular.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Tecnologia de Ponta", desc: "Equipamentos de última geração com chip M2M multi-operadora, garantindo precisão milimétrica.", color: "text-primary" },
            { icon: Lock, title: "Segurança Militar", desc: "Criptografia avançada ponta a ponta. Apenas você tem acesso real aos dados de localização do seu veículo.", color: "text-red-500" },
            { icon: Globe, title: "Cobertura Global", desc: "Conexão satelital e redes 4G garantem que o seu veículo jamais fique fora do seu radar.", color: "text-secondary" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group border-t border-white/5"
            >
              <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
