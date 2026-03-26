// ==========================================
// RASTREMIX - SERVIÇO DE PAGAMENTO (SIMULADO)
// ==========================================
// TODO PARA O FUTURO:
// Quando for integrar com Stripe, Mercado Pago ou Asaas, 
// altere os métodos abaixo para chamar suas respectivas APIs.
// A interface e os retornos do sistema não precisarão ser reescritos.

export type PlanType = 'BÁSICO' | 'INTERMEDIÁRIO' | 'PREMIUM';
export type PaymentStatus = 'pago' | 'pendente' | 'atrasado';

export interface SubscriptionPlan {
  id: string;
  name: PlanType;
  price: number;
  features: string[];
}

export interface UserSubscription {
  userId: string;
  planId: string;
  status: PaymentStatus;
  dueDate: string; // ISO String
}

export interface Invoice {
  id: string;
  userId: string;
  amount: number;
  paymentDate: string;
  status: "success" | "failed";
}

export const AVAILABLE_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan_basic',
    name: 'BÁSICO',
    price: 69.90,
    features: ['Rastreamento em tempo real', 'Histórico de 30 dias', 'Suporte horário comercial']
  },
  {
    id: 'plan_intermediario',
    name: 'INTERMEDIÁRIO',
    price: 99.90,
    features: ['Tudo do Básico', 'Alertas automáticos', 'Histórico de 90 dias', 'Bloqueio remoto via App']
  },
  {
    id: 'plan_premium',
    name: 'PREMIUM',
    price: 149.90,
    features: ['Tudo do Intermediário', 'Suporte 24h Prioritário', 'Pronta resposta veicular', 'Antifurto virtual']
  }
];

// Helper: Salva dados no localStorage
const saveToDb = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));
// Helper: Pega dados do localStorage
const getFromDb = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');

/**
 * Retorna todos os planos disponíveis
 */
export const getPlans = (): SubscriptionPlan[] => {
  return AVAILABLE_PLANS;
};

/**
 * Pega a assinatura atual de um usuário. Se ele não tiver, cria uma pendente ou retorna null.
 */
export const getUserSubscription = (userId: string): UserSubscription | null => {
  const subs: UserSubscription[] = getFromDb('rx_subscriptions');
  const sub = subs.find(s => s.userId === userId);
  return sub || null;
};

export const getAllSubscriptions = (): UserSubscription[] => {
  return getFromDb('rx_subscriptions');
};

/**
 * SIMULAÇÃO: Realizar pagamento e renovar por 30 dias.
 * - Integração FUTURA: Chame a rota de checkout do Stripe aqui.
 */
export const pagarPlano = async (userId: string, planId: string): Promise<boolean> => {
  // Simular delay de gateway de pagamento
  await new Promise(resolve => setTimeout(resolve, 1500));

  let subs: UserSubscription[] = getFromDb('rx_subscriptions');
  
  // Data atual + 30 dias de vencimento
  const nextDueDate = new Date();
  nextDueDate.setDate(nextDueDate.getDate() + 30);

  const existingSubIndex = subs.findIndex(s => s.userId === userId);
  
  if (existingSubIndex >= 0) {
    subs[existingSubIndex] = {
      ...subs[existingSubIndex],
      planId,
      status: 'pago',
      dueDate: nextDueDate.toISOString()
    };
  } else {
    subs.push({
      userId,
      planId,
      status: 'pago',
      dueDate: nextDueDate.toISOString()
    });
  }

  saveToDb('rx_subscriptions', subs);

  // Criar Invoice de histórico
  const plan = AVAILABLE_PLANS.find(p => p.id === planId);
  const invoices: Invoice[] = getFromDb('rx_invoices');
  invoices.push({
    id: `inv_${Date.now()}`,
    userId,
    amount: plan?.price || 0,
    paymentDate: new Date().toISOString(),
    status: 'success'
  });
  saveToDb('rx_invoices', invoices);

  return true;
};

/**
 * Verifica se a data de vencimento já passou.
 * Se sim, altera para atrasado. E garante o bloqueio nas rotas protegidas.
 * - Integração FUTURA: Isso pode ser um webhook diário (CRON job) no backend.
 */
export const verificarVencimento = (userId: string): PaymentStatus => {
  let subs: UserSubscription[] = getFromDb('rx_subscriptions');
  const subIndex = subs.findIndex(s => s.userId === userId);
  
  if (subIndex === -1) return 'pendente'; // Se não tem assinatura, está livre ou precisa assinar
  
  const sub = subs[subIndex];
  const dueDate = new Date(sub.dueDate);
  const now = new Date();

  // Se agora é maior que o vencimento e estava pago
  if (now > dueDate && sub.status === 'pago') {
    subs[subIndex].status = 'atrasado';
    saveToDb('rx_subscriptions', subs);
    return 'atrasado';
  }

  return subs[subIndex].status;
};

/**
 * Utilizado por administradores para forçar o atraso ou quitação manuais.
 */
export const alterarStatusAssinatura = (userId: string, status: PaymentStatus, skipDaysOffset: number = 0) => {
  let subs: UserSubscription[] = getFromDb('rx_subscriptions');
  const subIndex = subs.findIndex(s => s.userId === userId);
  if (subIndex >= 0) {
    subs[subIndex].status = status;

    if (skipDaysOffset !== 0) {
       const newDate = new Date(subs[subIndex].dueDate);
       newDate.setDate(newDate.getDate() + skipDaysOffset);
       subs[subIndex].dueDate = newDate.toISOString();
    }
    saveToDb('rx_subscriptions', subs);
  }
};

/**
 * Função mockada: Bloqueia diretamente no banco local do cliente.
 */
export const bloquearUsuario = (userId: string) => {
  alterarStatusAssinatura(userId, 'atrasado');
};
