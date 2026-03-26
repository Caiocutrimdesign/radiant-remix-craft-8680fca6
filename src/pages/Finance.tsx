import React from "react";
import { CreditCard, Download, Search } from "lucide-react";

const invoices = [
  { id: "INV-001", client: "João Pereira", amount: "R$ 149,90", date: "2026-03-25", status: "Pago" },
  { id: "INV-002", client: "Maria Silva", amount: "R$ 89,90", date: "2026-03-20", status: "Atrasado" },
  { id: "INV-003", client: "Empresa Logística SA", amount: "R$ 1.499,00", date: "2026-03-26", status: "Pendente" },
];

export default function Finance() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-purple flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-secondary" /> Financeiro
          </h1>
          <p className="text-muted-foreground mt-1">Controle de faturas e pagamentos de planos</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar fatura ou cliente..." 
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none text-foreground"
          />
        </div>
        <select className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-secondary text-foreground flex-shrink-0">
          <option value="all">Todos os Status</option>
          <option value="paid">Pagos</option>
          <option value="pending">Pendentes</option>
          <option value="late">Atrasados</option>
        </select>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/40 border-b border-white/5 text-muted-foreground text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Fatura</th>
              <th className="p-4 font-medium">Cliente</th>
              <th className="p-4 font-medium">Valor</th>
              <th className="p-4 font-medium hidden sm:table-cell">Vencimento</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-mono text-muted-foreground">{inv.id}</td>
                <td className="p-4 font-bold text-foreground">{inv.client}</td>
                <td className="p-4 text-foreground">{inv.amount}</td>
                <td className="p-4 hidden sm:table-cell text-muted-foreground">{inv.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    inv.status === 'Pago' ? 'bg-green-500/20 text-green-500' : 
                    inv.status === 'Atrasado' ? 'bg-destructive/20 text-destructive' : 'bg-orange-500/20 text-orange-500'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Download className="w-5 h-5 text-muted-foreground hover:text-secondary" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
