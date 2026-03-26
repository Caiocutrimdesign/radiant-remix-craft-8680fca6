import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Car, CreditCard, ShieldAlert, LogOut, Settings } from "lucide-react";

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: "Painel Principal", icon: LayoutDashboard, path: "/dashboard", roles: ["ADMIN", "FUNCIONARIO"] },
    { label: "Monitoramento", icon: Car, path: "/dashboard/monitor", roles: ["ADMIN", "CLIENTE", "FUNCIONARIO"] },
    { label: "Clientes", icon: Users, path: "/dashboard/clients", roles: ["ADMIN", "FUNCIONARIO"] },
    { label: "Veículos", icon: ShieldAlert, path: "/dashboard/vehicles", roles: ["ADMIN", "FUNCIONARIO", "TECNICO"] },
    { label: "Financeiro", icon: CreditCard, path: "/dashboard/finance", roles: ["ADMIN", "CLIENTE"] },
    { label: "Chamados", icon: Settings, path: "/dashboard/tickets", roles: ["ADMIN", "TECNICO", "CLIENTE"] },
  ];

  const allowedNavItems = navItems.filter((item) => user && item.roles.includes(user.role));

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col hidden md:flex">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-2xl font-display font-bold neon-text-blue flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-primary" />
          RASTREMIX
        </h2>
        <p className="text-xs text-muted-foreground uppercase mt-1 tracking-wider">Control Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {allowedNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-glow border border-primary/20" 
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border bg-black/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold shadow-glow">
            {user?.name.charAt(0)}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Encerrar Sessão
        </button>
      </div>
    </aside>
  );
};
