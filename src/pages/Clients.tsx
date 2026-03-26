import React from "react";
import { Users, MoreVertical, Plus } from "lucide-react";

const clients = [
  { id: 1, name: "João Pereira", email: "joao@exemplo.com", phone: "(11) 99999-9999", status: "Ativo", vehicles: 2 },
  { id: 2, name: "Maria Silva", email: "maria@exemplo.com", phone: "(11) 98888-8888", status: "Inadimplente", vehicles: 1 },
  { id: 3, name: "Empresa Logística SA", email: "contato@logistica.com", phone: "(11) 97777-7777", status: "Ativo", vehicles: 12 },
];

export default function Clients() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-blue flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" /> Gestão de Clientes
          </h1>
          <p className="text-muted-foreground mt-1">Visualize e gerencie a carteira de clientes</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:shadow-neon-blue transition-all">
          <Plus className="w-5 h-5" /> Novo Cliente
        </button>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/40 border-b border-white/5 text-muted-foreground text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Nome</th>
              <th className="p-4 font-medium hidden md:table-cell">Contato</th>
              <th className="p-4 font-medium hidden sm:table-cell">Veículos</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-foreground">{client.name}</p>
                  <p className="text-muted-foreground text-xs md:hidden">{client.email}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p>{client.email}</p>
                  <p className="text-muted-foreground text-xs">{client.phone}</p>
                </td>
                <td className="p-4 hidden sm:table-cell">{client.vehicles} cadastrados</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    client.status === 'Ativo' ? 'bg-green-500/20 text-green-500' : 'bg-destructive/20 text-destructive'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
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
