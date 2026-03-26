import React from "react";
import { Settings, Wrench, CheckCircle, Clock } from "lucide-react";

const tickets = [
  { id: "TK-1002", title: "Instalação de Rastreador", client: "João Pereira", date: "Hoje, 14:00", status: "Pendente", type: "Instalação" },
  { id: "TK-1003", title: "Manutenção Preventiva", client: "Frota Logística SA", date: "Amanhã, 10:00", status: "Em Andamento", type: "Manutenção" },
  { id: "TK-1004", title: "Troca de Bateria", client: "Maria Silva", date: "Ontem, 16:00", status: "Finalizado", type: "Manutenção" },
];

export default function Tickets() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-blue flex items-center gap-3">
            <Settings className="w-8 h-8 text-primary" /> Chamados Técnicos
          </h1>
          <p className="text-muted-foreground mt-1">Gestão de instalações e manutenções</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((t) => (
          <div key={t.id} className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
            {/* Status indicator line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              t.status === 'Finalizado' ? 'bg-green-500' : 
              t.status === 'Em Andamento' ? 'bg-secondary' : 'bg-primary'
            }`} />

            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-mono text-muted-foreground mb-1 block">{t.id}</span>
                <h3 className="font-bold text-lg leading-tight">{t.title}</h3>
              </div>
              <div className={`p-2 rounded-lg ${
                t.status === 'Finalizado' ? 'bg-green-500/10 text-green-500' : 
                t.status === 'Em Andamento' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
              }`}>
                {t.status === 'Finalizado' ? <CheckCircle className="w-5 h-5" /> : 
                 t.status === 'Em Andamento' ? <Wrench className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
              </div>
            </div>

            <div className="space-y-2 mb-6 text-sm">
              <p className="text-muted-foreground">Cliente: <span className="text-foreground font-medium">{t.client}</span></p>
              <p className="text-muted-foreground">Data/Hora: <span className="text-foreground font-medium">{t.date}</span></p>
            </div>

            <div className="flex gap-2">
              <button className={`w-full py-2 rounded-lg font-medium text-sm transition-colors ${
                t.status === 'Finalizado' 
                  ? 'bg-transparent border border-white/10 text-muted-foreground cursor-not-allowed'
                  : 'bg-primary/20 text-primary hover:bg-primary hover:text-black border border-primary/50'
              }`}>
                {t.status === 'Finalizado' ? 'Concluído' : 'Atualizar Status'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
