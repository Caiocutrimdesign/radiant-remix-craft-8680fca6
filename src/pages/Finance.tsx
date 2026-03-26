import { useState, useEffect } from "react";
import { CreditCard, Search, Power, Trash2 } from "lucide-react";
import { getAllSubscriptions, alterarStatusAssinatura, UserSubscription, PaymentStatus } from "@/services/paymentService";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

// Dados mockados para cruzar ID com Nome na simulação
const mockClients: Record<string, { name: string, email: string }> = {
  '1': { name: 'Administrador', email: 'teste1@gmail.com' },
  '2': { name: 'João Cliente', email: 'teste2@gmail.com' },
  '3': { name: 'Maria Funcionária', email: 'teste3@gmail.com' },
  '4': { name: 'Carlos Técnico', email: 'teste4@gmail.com' },
};

export default function Finance() {
  const { user } = useAuth();
  const [subs, setSubs] = useState<UserSubscription[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadSubs();
  }, []);

  const loadSubs = () => {
    setSubs(getAllSubscriptions());
  };

  const handleStatusChange = (userId: string, newStatus: PaymentStatus) => {
    alterarStatusAssinatura(userId, newStatus);
    toast.success(`Status de ${mockClients[userId]?.name || userId} alterado para ${newStatus}.`);
    loadSubs();
  };

  // Se for cliente, mostre apenas a assinatura dele ou redirecione para /subscription
  if (user?.role === 'CLIENTE') {
    return (
      <div className="p-8 text-center glass-panel rounded-2xl">
        <h2 className="text-xl text-white">Redirecionando para a sua assinatura...</h2>
        <script>window.location.href = '/dashboard/subscription';</script>
      </div>
    );
  }

  const filteredSubs = subs.filter(sub => {
     if (filter !== 'all' && sub.status !== filter) return false;
     const clientName = mockClients[sub.userId]?.name?.toLowerCase() || '';
     if (search && !clientName.includes(search.toLowerCase())) return false;
     return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-purple flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-secondary" /> Gestão de Assinaturas
          </h1>
          <p className="text-muted-foreground mt-1">Controle de faturas, bloqueios e pagamentos de clientes.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar por nome do cliente..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none text-foreground"
          />
        </div>
        <select 
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-secondary text-foreground flex-shrink-0"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos os Status</option>
          <option value="pago">Pagos</option>
          <option value="pendente">Pendentes</option>
          <option value="atrasado">Atrasados (Bloqueados)</option>
        </select>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/40 border-b border-white/5 text-muted-foreground text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Cliente</th>
              <th className="p-4 font-medium">Plano ID</th>
              <th className="p-4 font-medium hidden sm:table-cell">Vencimento</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Ações Rápidas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredSubs.length === 0 ? (
               <tr>
                 <td colSpan={5} className="p-8 text-center text-gray-400">Nenhuma assinatura encontrada. (Acesse com a conta Cliente e simule o pagamento primeiro).</td>
               </tr>
            ) : filteredSubs.map((sub, idx) => {
              const client = mockClients[sub.userId] || { name: 'Desconhecido', email: sub.userId };
              return (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-foreground">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.email}</p>
                  </td>
                  <td className="p-4 font-mono text-muted-foreground">{sub.planId}</td>
                  <td className="p-4 hidden sm:table-cell text-muted-foreground">
                    {format(parseISO(sub.dueDate), "dd MMM yyyy", { locale: ptBR })}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold ${
                      sub.status === 'pago' ? 'bg-green-500/20 text-green-500 border border-green-500/30' : 
                      sub.status === 'atrasado' ? 'bg-red-500/20 text-red-500 border border-red-500/30' : 
                      'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {sub.status !== 'pago' && (
                      <button 
                        onClick={() => handleStatusChange(sub.userId, 'pago')}
                        className="px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-md transition-colors text-xs font-bold"
                        title="Forçar como Pago"
                      >
                        FORÇAR RECEBIDO
                      </button>
                    )}
                    {sub.status !== 'atrasado' && (
                      <button 
                        onClick={() => handleStatusChange(sub.userId, 'atrasado')}
                        className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-md transition-colors"
                        title="Bloquear Usuário / Informar Atraso"
                      >
                        <Power className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
