import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export type UserRole = 'ADMIN' | 'CLIENTE' | 'FUNCIONARIO' | 'TECNICO';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const mockUsers: Record<string, User> = {
  'teste1@gmail.com': { id: '1', name: 'Administrador', email: 'teste1@gmail.com', role: 'ADMIN' },
  'teste2@gmail.com': { id: '2', name: 'João Cliente', email: 'teste2@gmail.com', role: 'CLIENTE' },
  'teste3@gmail.com': { id: '3', name: 'Maria Funcionária', email: 'teste3@gmail.com', role: 'FUNCIONARIO' },
  'teste4@gmail.com': { id: '4', name: 'Carlos Técnico', email: 'teste4@gmail.com', role: 'TECNICO' },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load session from localStorage on mount
    const savedUser = localStorage.getItem('rastremix_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user session');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundUser = mockUsers[email];
      if (foundUser && pass === '123456') {
        setUser(foundUser);
        localStorage.setItem('rastremix_user', JSON.stringify(foundUser));
        toast.success(`Bem-vindo, ${foundUser.name}!`);
      } else {
        throw new Error('Credenciais inválidas');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rastremix_user');
    toast.info('Sessão encerrada.');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
