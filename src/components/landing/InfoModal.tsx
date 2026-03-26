import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const InfoModal = ({ isOpen, onClose, title, subtitle, content }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-8 border-b border-white/5 bg-[#0a0a0a]">
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-1">
                {title}
              </h3>
              {subtitle && (
                 <p className="text-sm text-gray-400 font-light tracking-wide">{subtitle}</p>
              )}
            </div>
            <button 
              onClick={onClose} 
              className="p-2 -mr-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8 overflow-y-auto text-gray-300 font-light leading-relaxed space-y-6">
             {content}
          </div>
          
          {/* Footer Action */}
          <div className="p-6 border-t border-white/5 bg-[#0a0a0a] flex justify-end">
             <button 
               onClick={onClose}
               className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
             >
               Fechar Detalhes
             </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
