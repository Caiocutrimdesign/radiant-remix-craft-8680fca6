import { motion } from "framer-motion";
import { Clock, ShieldAlert, Zap, Lock, MapPin, Wrench } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Em tempo real",
    description: "Visualização de localização, velocidade, trajeto e tempo parado."
  },
  {
    icon: ShieldAlert,
    title: "Central de monitoramento",
    description: "Coordenação e envio de informações em tempo real."
  },
  {
    icon: Zap,
    title: "Sempre que Ligado",
    description: "Envio automático de dados via GPS a cada 3 minutos consecutivos."
  },
  {
    icon: Lock,
    title: "Bloqueio remoto",
    description: "Controle direto pelo app ou pela nossa central 24h em emergências."
  },
  {
    icon: MapPin,
    title: "Histórico detalhado",
    description: "Acesso completo a rotas, horários e paradas efetuadas com precisão."
  },
  {
    icon: Wrench,
    title: "Assistência 24h",
    description: "Reboque, chaveiro, troca de pneu e suporte sempre que precisar."
  }
];

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-32 bg-[#020202] border-t border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6"
          >
             Características do <span className="font-semibold">Rastreador</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#888] text-lg lg:text-xl font-light leading-relaxed"
          >
            Tudo o que você precisa para ter controle absoluto e paz de espírito onde quer que seu veículo esteja.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-md p-10 rounded-2xl border border-white/10 text-left transition-all duration-500 hover:-translate-y-2 shadow-lg hover:border-white/20 group hover:bg-white/[0.04]"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 group-hover:bg-white group-hover:border-transparent transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-[#888] font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
