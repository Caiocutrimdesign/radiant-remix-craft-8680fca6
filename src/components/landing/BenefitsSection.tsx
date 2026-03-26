import { motion } from "framer-motion";
import { Navigation, Clock, Power, ShieldAlert, Smartphone } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    { icon: Navigation, title: "Rastreamento Real-Time", desc: "Acompanhe seu veículo no mapa com precisão de milissegundos." },
    { icon: Clock, title: "Histórico de Rotas", desc: "Guarde os trajetos percorridos por até 6 meses com relatórios detalhados." },
    { icon: Power, title: "Bloqueio Remoto", desc: "Corte inteligente de combustível e ignição com um único clique." },
    { icon: ShieldAlert, title: "Alertas Inteligentes", desc: "Receba notificações sobre ignição, movimentação suspeita ou saída de área." },
    { icon: Smartphone, title: "Sistema Responsivo", desc: "Acesse todo o painel pelo celular ou desktop com a mesma fluidez." }
  ];

  return (
    <section id="beneficios" className="py-24 bg-card relative overflow-hidden">
      {/* Glow background accents */}
      <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-secondary/10 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">Por que escolher a <span className="neon-text-purple">Rastremix</span>?</h2>
            <p className="text-gray-400 text-lg">
              Nosso painel não é apenas um localizador, é uma plataforma robusta projetada para você assumir o controle total, de forma fácil e intuitiva.
            </p>
            <div className="pt-4">
              <a href="#planos" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors font-bold uppercase tracking-wider">
                Conhecer os planos <Navigation className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-2xl border-white/5 hover:border-secondary/50 hover:shadow-neon-purple transition-all group ${
                  idx === benefits.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors text-white group-hover:text-secondary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
