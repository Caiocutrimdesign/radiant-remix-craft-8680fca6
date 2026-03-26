import { AlertTriangle, Home, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const BlockScreen = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow RED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="glass-panel p-10 rounded-3xl max-w-lg w-full text-center border-red-500/20 shadow-[0_0_50px_rgba(255,0,0,0.1)] relative z-10">
        <div className="w-20 h-20 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6 animate-pulse">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-display font-bold text-white mb-4">Acesso Bloqueado</h1>
        
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-8">
          <p className="text-red-400 font-medium">
            Seu plano está vencido. Regularize para continuar usando o RASTREMIX e manter seu veículo protegido.
          </p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/dashboard/subscription')}
            className="w-full py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all"
          >
            <CreditCard className="w-5 h-5" />
            PAGAR MENSALIDADE
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => logout()}
              className="py-3 px-4 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              Sair da conta
            </button>
            <Link 
              to="/" 
              className="py-3 px-4 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Início
            </Link>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mt-8">
          Cliente {user?.name} ({user?.email})<br/>
          Caso já tenha pago, o sistema será liberado em instantes.
        </p>
      </div>
    </div>
  );
};
