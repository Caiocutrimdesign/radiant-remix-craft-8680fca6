import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare } from "lucide-react";

const plans = [
  {
    name: "Trimestral",
    price: "165,00",
    period: "pagos a cada 3 meses",
    features: [
      "Rastreamento 24h",
      "Bloqueio Remoto",
      "Cerca Virtual",
      "Histórico de Rotas",
      "Alerta de Ignição"
    ],
    recommended: false,
    whatsappUrl: "https://wa.me/5598985992136?text=Quero+assinar+o+Plano+Trimestral"
  },
  {
    name: "Mensal (A partir de)",
    price: "50,00",
    period: "/mês",
    features: [
      "Instalação Grátis (Plano Anual)",
      "Rastreamento 24h",
      "Bloqueio Remoto Rápido",
      "Cerca Virtual Automática",
      "Alertas no Aplicativo",
      "Suporte Técnico 24h"
    ],
    recommended: true,
    whatsappUrl: "https://wa.me/5598985992136?text=Quero+saber+mais+sobre+o+Plano+de+50+reais"
  },
  {
    name: "Anual",
    price: "600,00",
    period: "pago 1x ao ano",
    features: [
      "Instalação Taxa Zero",
      "2 Meses de Desconto Fixo",
      "Rastreamento Plus",
      "Assistência Auto (Reboque)",
      "Troca de Pneu e Chaveiro",
      "Atendimento Prioritário"
    ],
    recommended: false,
    whatsappUrl: "https://wa.me/5598985992136?text=Quero+assinar+o+Plano+Anual+Completo"
  }
];

export const PlansSection = () => {
  return (
    <section id="planos" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-6 glass-panel rounded-3xl border border-primary/40 shadow-[0_0_50px_rgba(0,243,255,0.2)] mb-8"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-2 leading-none">
              A partir de <span className="neon-text-blue block md:inline mt-2 md:mt-0">R$ 50,00/mês</span>
            </h2>
          </motion.div>
          
          <p className="text-xl text-gray-400">Transparência total e o melhor custo-benefício do mercado para manter seu veículo 100% monitorado.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-panel rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-4 ${
                plan.recommended 
                  ? 'border-2 border-primary/70 shadow-[0_0_40px_rgba(0,243,255,0.15)] bg-gradient-to-b from-primary/10 to-transparent transform lg:scale-105 z-10' 
                  : 'border border-white/5 bg-black/40'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-blue-600 text-black font-bold rounded-full text-sm shadow-glow whitespace-nowrap">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className="text-white font-bold text-2xl mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-gray-400 font-bold mb-2">R$</span>
                  <span className="text-5xl font-display font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-primary' : 'text-gray-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a 
                  href={plan.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${
                    plan.recommended 
                      ? 'bg-primary text-black hover:shadow-glow hover:bg-white' 
                      : 'bg-white/5 text-white hover:bg-white/10 hover:border-white/30 border border-white/10'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  ASSINAR PLANO
                </a>
                
                {plan.recommended && (
                   <button className="w-full py-3 text-sm text-gray-400 hover:text-white transition-colors">
                     Ver todos os planos disponíveis
                   </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
