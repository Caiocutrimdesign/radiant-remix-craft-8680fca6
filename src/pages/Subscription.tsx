import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  getPlans,
  getUserSubscription,
  pagarPlano,
  SubscriptionPlan,
  UserSubscription
} from "@/services/paymentService";
import { CreditCard, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

const Subscription = () => {
  const { user } = useAuth();
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [currentSub, setCurrentSub] = useState<UserSubscription | null>(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  useEffect(() => {
    setPlans(getPlans());
    if (user) {
      const sub = getUserSubscription(user.id);
      setCurrentSub(sub);
      if (sub) {
        setSelectedPlan(sub.planId);
      } else {
        setSelectedPlan(getPlans()[0].id);
      }
    }
  }, [user]);

  const handlePayment = async () => {
    if (!user || !selectedPlan) return;
    setLoadingPayment(true);
    
    try {
      await pagarPlano(user.id, selectedPlan);
      toast.success("Pagamento confirmado com sucesso!");
      
      // Reload sub
      const sub = getUserSubscription(user.id);
      setCurrentSub(sub);
      
    } catch (error) {
      toast.error("Erro ao simular pagamento.");
    } finally {
      setLoadingPayment(false);
    }
  };

  const notifyWhatsApp = () => {
    const text = `Olá! Gostaria de confirmar o pagamento do meu plano ${selectedPlan} na Rastremix. Tudo certo por aí?`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!user) return null;

  const isLate = currentSub?.status === 'atrasado';
  const isPending = !currentSub || currentSub.status === 'pendente';
  const isPaid = currentSub?.status === 'pago';

  return (
    <div className="p-6 md:p-8 space-y-8 animate-fade-in max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Assinatura e Pagamento</h1>
        <p className="text-gray-400">Gerencie seu plano, faturas e renovações do sistema de rastreamento.</p>
      </div>

      {/* STATUS BANNER */}
      {currentSub ? (
        <div className={`p-6 rounded-2xl border flex items-center justify-between ${
          isLate ? 'bg-red-500/10 border-red-500/30' : 
          isPaid ? 'bg-green-500/10 border-green-500/30' : 
          'bg-yellow-500/10 border-yellow-500/30'
        }`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isLate ? 'bg-red-500/20 text-red-500' : 
              isPaid ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
            }`}>
              {isLate ? <AlertCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase">Status: {currentSub.status}</h3>
              <p className="text-sm text-gray-400">
                Vencimento do plano atual: <strong className="text-white">
                  {format(parseISO(currentSub.dueDate), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                </strong>
              </p>
            </div>
          </div>

          {(isLate || isPending) && (
            <button 
              onClick={handlePayment}
              disabled={loadingPayment}
              className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:shadow-glow transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {loadingPayment ? 'Processando...' : <><CreditCard className="w-5 h-5"/> Pagar Mensalidade</>}
            </button>
          )}
        </div>
      ) : (
        <div className="p-6 rounded-2xl border bg-primary/10 border-primary/30 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-white">Nenhum plano ativo</h3>
            <p className="text-sm text-gray-400">Escolha um dos planos abaixo e comece a rastrear agora.</p>
          </div>
        </div>
      )}

      {/* PLAN SELECTION */}
      <div className="mt-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">Escolha ou Troque de Plano</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div 
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                selectedPlan === plan.id 
                ? 'bg-primary/5 border-primary shadow-glow ring-1 ring-primary' 
                : 'bg-black/40 border-white/10 hover:border-white/30'
              }`}
            >
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <div className="my-4">
                <span className="text-gray-400">R$</span>
                <span className="text-3xl font-display font-bold text-white">{plan.price.toFixed(2).replace('.', ',')}</span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${selectedPlan === plan.id ? 'text-primary' : 'text-gray-500'}`} />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PAYMENT ACTIONS */}
      {(!currentSub || selectedPlan !== currentSub.planId || isLate) && (
        <div className="p-8 mt-8 glass-panel rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Pronto para confirmar sua assinatura?</h3>
          <p className="text-gray-400">O pagamento liberará o acesso imediato ou prolongará sua data de vencimento em 30 dias.</p>
          <div className="flex justify-center gap-4 pt-4">
            <button 
               onClick={handlePayment}
               disabled={loadingPayment}
               className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all flex items-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              {loadingPayment ? 'Validando Cartão/Pix...' : 'SIMULAR PAGAMENTO AGORA'}
            </button>
            <button 
               onClick={notifyWhatsApp}
               className="px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl hover:bg-[#25D366] hover:text-black transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              CONFIRMAR VIA WHATSAPP
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">*Este é um ambiente de simulação. Ao integrar com o Stripe/MercadoPago, o modal real aparecerá aqui.</p>
        </div>
      )}
    </div>
  );
};

export default Subscription;
