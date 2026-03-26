import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { verificarVencimento } from '@/services/paymentService';
import { BlockScreen } from './BlockScreen';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-glow-blue w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // Verificar Bloqueio Financeiro para CLIENTES
  // (Mas não bloqueia se já estiver na página de subscription, para permitir que ele pague)
  const isFinanceAtrasado = user.role === 'CLIENTE' && verificarVencimento(user.id) === 'atrasado';
  if (isFinanceAtrasado && !location.pathname.includes('/subscription')) {
     return <BlockScreen />;
  }

  return <Outlet />;
};
