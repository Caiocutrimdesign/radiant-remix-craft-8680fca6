import { motion } from "framer-motion";
import { MapPin, Radio, Lock, Clock, Route, Wrench } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description: "Acompanhe a localização exata do seu veículo, velocidade e trajeto percorrido a qualquer momento.",
  },
  {
    icon: Radio,
    title: "Central de Monitoramento",
    description: "Central 24h coordena todas as informações coletadas e repassa aos interessados com agilidade.",
  },
  {
    icon: Lock,
    title: "Bloqueio Remoto",
    description: "Bloqueie seu veículo remotamente pelo aplicativo ou pela central de monitoramento.",
  },
  {
    icon: Clock,
    title: "Alerta ao Ligar",
    description: "Toda vez que o veículo é ligado, o rastreador envia dados para a central via GPS.",
  },
  {
    icon: Route,
    title: "Histórico de Percurso",
    description: "Acesse todo o histórico de rotas e paradas do seu veículo com detalhes completos.",
  },
  {
    icon: Wrench,
    title: "Assistência 24h",
    description: "Reboque, troca de pneu, chaveiro e motorista reserva inclusos no serviço.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="recursos" className="py-24 bg-secondary/20 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Recursos</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            Características do{" "}
            <span className="text-gradient">Rastreador</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
