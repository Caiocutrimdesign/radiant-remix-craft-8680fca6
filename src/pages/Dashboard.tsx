import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Car, Users, CreditCard, ShieldAlert, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', ativos: 400, receita: 2400 },
  { name: 'Fev', ativos: 300, receita: 1398 },
  { name: 'Mar', ativos: 200, receita: 9800 },
  { name: 'Abr', ativos: 278, receita: 3908 },
  { name: 'Mai', ativos: 189, receita: 4800 },
  { name: 'Jun', ativos: 239, receita: 3800 },
  { name: 'Jul', ativos: 349, receita: 4300 },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold neon-text-blue">Painel Administrativo</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo de volta, {user?.name}</p>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary hover:shadow-neon-blue transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Veículos Ativos</p>
              <h3 className="text-3xl font-bold font-display text-foreground">1,248</h3>
            </div>
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Car className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-primary mt-4 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +12% desde o último mês
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-secondary hover:shadow-neon-purple transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Clientes</p>
              <h3 className="text-3xl font-bold font-display text-foreground">846</h3>
            </div>
            <div className="p-3 rounded-full bg-secondary/10 text-secondary">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-secondary mt-4 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +5% desde o último mês
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Receita Mensal</p>
              <h3 className="text-3xl font-bold font-display text-foreground">R$ 142k</h3>
            </div>
            <div className="p-3 rounded-full bg-green-500/10 text-green-500">
              <CreditCard className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +8% desde o último mês
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-destructive hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Alertas (24h)</p>
              <h3 className="text-3xl font-bold font-display text-foreground">23</h3>
            </div>
            <div className="p-3 rounded-full bg-destructive/10 text-destructive">
              <ShieldAlert className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-destructive mt-4">
            -4% desde ontem
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="glass-panel p-6 rounded-2xl">
          <h3 className="text-lg font-display font-bold mb-6">Crescimento de Veículos Ativos</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAtivos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(183, 100%, 50%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'hsl(183, 100%, 50%)', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(183, 100%, 50%)' }}
                />
                <Area type="monotone" dataKey="ativos" stroke="hsl(183, 100%, 50%)" strokeWidth={3} fillOpacity={1} fill="url(#colorAtivos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl">
          <h3 className="text-lg font-display font-bold mb-6">Rendimento Financeiro</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(283, 100%, 50%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(283, 100%, 50%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'hsl(283, 100%, 50%)', borderRadius: '8px' }}
                  itemStyle={{ color: 'hsl(283, 100%, 50%)' }}
                />
                <Area type="monotone" dataKey="receita" stroke="hsl(283, 100%, 50%)" strokeWidth={3} fillOpacity={1} fill="url(#colorReceita)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
