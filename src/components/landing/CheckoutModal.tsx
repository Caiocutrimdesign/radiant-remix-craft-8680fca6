import { useState } from "react";
import { X, CheckCircle, CreditCard, Banknote, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Plan = {
  name: string;
  price: string;
  period: string;
};

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

export const CheckoutModal = ({ isOpen, onClose, plan }: CheckoutModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix">("credit");

  // Reset step when opening
  if (!isOpen) return null;

  const handleNext = () => setStep(2);
  const handleCheckout = () => setStep(3);

  const formatCpf = (val: string) => {
    return val
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const numericPrice = plan ? parseFloat(plan.price.replace(".", "").replace(",", ".")) : 0;
  // If anual, simulate total cost. But for mockup, we just use the text.
  const displayTotal = plan?.name === "Anual" ? "R$ 600,00" : `R$ ${plan?.price}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#111]">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              {step === 1 ? "Resumo da Assinatura" : step === 2 ? "Pagamento Seguro" : "Assinatura Confirmada"}
            </h3>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto">
            {step === 1 && (
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">{plan?.name}</h4>
                      <p className="text-sm text-gray-400">Rastreamento Veicular Inteligente</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-display font-bold text-white">R$ {plan?.price}</div>
                      <div className="text-xs text-gray-500">{plan?.period}</div>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center text-lg font-bold">
                    <span className="text-white">Total a pagar hoje:</span>
                    <span className="text-primary">{displayTotal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button onClick={onClose} className="py-3 text-gray-400 hover:text-white font-medium border border-white/10 rounded-xl hover:bg-white/5 transition-all">
                    CANCELAR
                  </button>
                  <button onClick={handleNext} className="py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    CONTINUAR <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
               <div className="space-y-6">
                 {/* Formulário */}
                 <div className="space-y-4">
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-1">Nome Completo</label>
                     <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" placeholder="Digite seu nome" />
                   </div>
                   <div>
                     <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-1">CPF</label>
                     <input type="text" value={cpf} onChange={e => setCpf(formatCpf(e.target.value))} maxLength={14} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" placeholder="000.000.000-00" />
                   </div>
                 </div>

                 {/* Forma de Pagamento */}
                 <div className="space-y-3">
                   <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-1">Forma de Pagamento</label>
                   <div className="grid grid-cols-2 gap-3">
                     <button 
                       onClick={() => setPaymentMethod('credit')}
                       className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${paymentMethod === 'credit' ? 'border-primary bg-primary/10 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}
                     >
                       <CreditCard className="w-5 h-5 flex-shrink-0" /> <span className="text-sm font-medium">Cartão</span>
                     </button>
                     <button 
                       onClick={() => setPaymentMethod('pix')}
                       className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${paymentMethod === 'pix' ? 'border-primary bg-primary/10 text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}
                     >
                       <Banknote className="w-5 h-5 flex-shrink-0" /> <span className="text-sm font-medium">PIX</span>
                     </button>
                   </div>
                 </div>

                 {paymentMethod === 'credit' && (
                    <div className="space-y-4 pt-2">
                       <input type="text" placeholder="Número do Cartão" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="Validade (MM/AA)" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
                          <input type="text" placeholder="CVC" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
                       </div>
                    </div>
                 )}

                 <button 
                   onClick={handleCheckout} 
                   disabled={!name || cpf.length < 14}
                   className="w-full py-4 mt-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                 >
                   FINALIZAR ASSINATURA
                 </button>
               </div>
            )}

            {step === 3 && (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white">Assinatura Realizada!</h3>
                <p className="text-gray-400">
                  Obrigado, <strong className="text-white">{name.split(" ")[0]}</strong>. Sua solicitação para o {plan?.name} foi processada com sucesso.
                </p>

                <div className="pt-6 relative">
                  <p className="text-sm text-gray-500 mb-4">Para agendar a instalação imediatamente:</p>
                  <a 
                    href={`https://wa.me/5598985992136?text=Ol%C3%A1%21+Acabo+de+reaizar+minha+assinatura+do+${encodeURIComponent(plan?.name || '')}+pelo+site.+Meu+nome+%C3%A9+${encodeURIComponent(name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-[#25D366] text-black font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    FALAR COM CONSULTOR AGORA
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
