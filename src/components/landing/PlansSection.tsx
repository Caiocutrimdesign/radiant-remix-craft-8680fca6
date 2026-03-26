import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import { CheckoutModal, Plan } from "./CheckoutModal";

const plans: Plan[] & { features: string[], recommended: boolean }[] = [
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
    recommended: false
  },
  {
    name: "Mensal (A partir de)",
    price: "50,00",
    period: "/ mês",
    features: [
      "Instalação Grátis (Plano Anual)",
      "Rastreamento 24h",
      "Bloqueio Remoto Rápido",
      "Cerca Virtual Automática",
      "Alertas no Aplicativo",
      "Suporte Técnico 24h"
    ],
    recommended: true
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
    recommended: false
  }
];

export const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <section id="planos" className="py-24 bg-[#020202] relative overflow-hidden">
      <CheckoutModal 
        isOpen={selectedPlan !== null} 
        onClose={() => setSelectedPlan(null)} 
        plan={selectedPlan} 
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4 font-medium">Planos a partir de</p>
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-7xl font-display font-light text-white leading-tight">
              R$ 50,00 <span className="text-3xl text-gray-500">/mês</span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-400 font-light">Transparência total e o melhor custo-benefício do mercado para manter seu veículo 100% monitorado.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 ${
                plan.recommended 
                  ? 'bg-[#111] border border-white/20 shadow-2xl z-10 scale-105' 
                  : 'bg-[#0a0a0a] border border-white/5'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-white text-black font-semibold tracking-wider rounded-full text-xs uppercase shadow-lg">
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className="text-gray-400 font-medium text-lg mb-2 uppercase tracking-wide">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-500 font-medium text-lg">R$</span>
                  <span className="text-5xl font-display font-normal text-white">{plan.price}</span>
                </div>
                <div className="text-gray-500 mt-2 text-sm">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-primary' : 'text-gray-500'}`} />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <button 
                  onClick={() => setSelectedPlan({ name: plan.name, price: plan.price, period: plan.period })}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all uppercase tracking-wide text-sm ${
                    plan.recommended 
                      ? 'bg-white text-black hover:bg-gray-200 shadow-md' 
                      : 'bg-[#1a1a1a] text-white hover:bg-[#222] border border-white/10'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  ASSINAR PLANO
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
