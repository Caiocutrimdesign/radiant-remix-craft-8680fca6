import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

export const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "69,90",
      color: "border-white/10",
      btnClass: "bg-white/10 hover:bg-white/20 text-white",
      shadow: "",
      features: ["Rastreio em Tempo Real", "Histórico de 30 dias", "Suporte Horário Comercial"]
    },
    {
      name: "Intermediário",
      price: "99,90",
      color: "border-secondary/50",
      btnClass: "bg-secondary text-white hover:shadow-neon-purple",
      shadow: "shadow-neon-purple",
      features: ["Tudo do Básico", "Bloqueio Remoto App", "Alertas de Ignição", "Histórico de 90 dias"]
    },
    {
      name: "Premium",
      popular: true,
      price: "149,90",
      color: "border-primary",
      btnClass: "bg-primary text-black hover:shadow-neon-blue font-bold",
      shadow: "shadow-[0_0_30px_rgba(0,243,255,0.4)] scale-105 z-10",
      features: ["Tudo do Intermediário", "Antifurto Virtual", "Escuta Interna (Opcional)", "Suporte 24/7 Prioritário", "Pronta Resposta"]
    }
  ];

  return (
    <section id="planos" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Escolha a <span className="neon-text-blue">Sua Proteção</span></h2>
          <p className="text-gray-400">Custo-benefício incomparável para motos, carros ou frotas pesadas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-8 rounded-3xl border ${plan.color} ${plan.shadow} relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 bg-black/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.6)] flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> Mais Escolhido
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-gray-400">R$</span>
                <span className="text-4xl font-bold text-white ml-1">{plan.price}</span>
                <span className="text-gray-400">/mês</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary' : 'text-gray-500'}`} />
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-xl transition-all duration-300 ${plan.btnClass}`}>
                Assinar {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
