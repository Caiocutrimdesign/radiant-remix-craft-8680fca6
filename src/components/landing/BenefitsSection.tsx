import { motion } from "framer-motion";
import { Clock, ShieldAlert, Zap, Lock, MapPin, Wrench } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Em tempo real",
    description: "Visualização de localização, velocidade, trajeto e tempo parado.",
    color: "from-blue-500 to-primary"
  },
  {
    icon: ShieldAlert,
    title: "Central de monitoramento",
    description: "Coordenação e envio de informações em tempo real.",
    color: "from-purple-500 to-secondary"
  },
  {
    icon: Zap,
    title: "Toda vez que é ligado",
    description: "Envio automático de dados via GPS a cada 3 minutos.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Lock,
    title: "Bloqueio remoto",
    description: "Controle direto pelo app ou pela nossa central 24h.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: MapPin,
    title: "Histórico de localização",
    description: "Acesso completo a rotas, horários e paradas efetuadas.",
    color: "from-cyan-500 to-blue-400"
  },
  {
    icon: Wrench,
    title: "Assistência veicular 24h",
    description: "Reboque, chaveiro, troca de pneu e suporte sempre que precisar.",
    color: "from-yellow-500 to-orange-400"
  }
];

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
             Características do <span className="neon-text-blue">Rastreador</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
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
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group overflow-hidden relative"
            >
              {/* Background gradient fade on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} bg-opacity-20`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
