import React from "react";
import { ShieldAlert, Plus, ShieldCheck, Wifi } from "lucide-react";

const vehicles = [
  { id: "V-778X", plate: "RST-2026", model: "Tesla Model S", client: "João Pereira", status: "Ativo" },
  { id: "V-123Y", plate: "ABC-1234", model: "Fiat Toro", client: "Maria Silva", status: "Bloqueado" },
  { id: "V-999Z", plate: "XYZ-9999", model: "Mercedes Actros", client: "Empresa Logística SA", status: "Em Risco" },
];

export default function Vehicles() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-blue flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-primary" /> Frota Registrada
          </h1>
          <p className="text-muted-foreground mt-1">Controle e bloqueio remoto da frota</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:shadow-neon-blue transition-all">
          <Plus className="w-5 h-5" /> Instalar Rastreador
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="glass-panel p-6 rounded-2xl hover:shadow-glow transition-all duration-300 relative overflow-hidden group">
            {v.status === 'Em Risco' && <div className="absolute inset-0 bg-orange-500/10 animate-pulse pointer-events-none" />}
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display font-bold text-xl">{v.model}</h3>
                <p className="text-sm font-mono text-muted-foreground">{v.plate}</p>
              </div>
              <Wifi className={`w-5 h-5 ${v.status === 'Bloqueado' ? 'text-destructive' : 'text-primary animate-pulse'}`} />
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cliente</span>
                <span className="font-medium text-foreground">{v.client}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status do Módulo</span>
                <span className={`font-bold ${
                  v.status === 'Ativo' ? 'text-primary' : 
                  v.status === 'Bloqueado' ? 'text-destructive' : 'text-orange-500'
                }`}>
                  {v.status}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg transition-colors font-medium text-sm">
                Histórico
              </button>
              {v.status !== 'Bloqueado' ? (
                <button className="flex-1 bg-destructive/20 text-destructive border border-destructive/50 hover:bg-destructive text-white py-2 rounded-lg transition-colors font-medium text-sm">
                  BLOQUEAR
                </button>
              ) : (
                <button className="flex-1 bg-primary/20 text-primary border border-primary/50 hover:bg-primary text-black py-2 rounded-lg transition-colors font-medium text-sm">
                  DESBLOQUEAR
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
