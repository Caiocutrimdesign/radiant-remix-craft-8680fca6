import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldAlert } from "lucide-react";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const autofill = (mail: string) => {
    setEmail(mail);
    setPassword("123456");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="w-full max-w-md animate-float custom-delay">
        <div className="glass-panel p-8 rounded-2xl shadow-neon-blue relative z-10">
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full border border-primary/50 shadow-glow">
                <ShieldAlert className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-display font-bold neon-text-blue mb-2">RASTREMIX</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Sistema de Rastreamento</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-3 glass rounded-lg border-destructive/50 text-destructive text-sm text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="Email Profissional"
                  className="w-full bg-black/50 border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full bg-black/50 border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-neon-blue hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? "Acessando..." : "ACESSO RESTRITO"}
            </button>
          </form>

          {/* Quick Login Buttons for Simulation */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center mb-4">Acesso Rápido (Simulação)</p>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => autofill('teste1@gmail.com')} className="text-xs bg-sidebar-accent text-sidebar-foreground py-2 rounded border border-border hover:border-primary transition-colors">Admin</button>
              <button type="button" onClick={() => autofill('teste2@gmail.com')} className="text-xs bg-sidebar-accent text-sidebar-foreground py-2 rounded border border-border hover:border-primary transition-colors">Cliente</button>
              <button type="button" onClick={() => autofill('teste3@gmail.com')} className="text-xs bg-sidebar-accent text-sidebar-foreground py-2 rounded border border-border hover:border-primary transition-colors">Funcionário</button>
              <button type="button" onClick={() => autofill('teste4@gmail.com')} className="text-xs bg-sidebar-accent text-sidebar-foreground py-2 rounded border border-border hover:border-primary transition-colors">Técnico</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
