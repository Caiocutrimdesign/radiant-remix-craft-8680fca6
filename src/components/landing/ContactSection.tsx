import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border-primary/20 shadow-[0_0_50px_rgba(0,243,255,0.05)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Pronto para <span className="neon-text-blue">Zerar o Risco?</span></h2>
              <p className="text-gray-400 mb-8 text-lg">
                Fale com nossos consultores agora mesmo e agende a instalação do equipamento mais invisível e eficiente do mercado.
              </p>
              
              <div className="space-y-6">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-green-500 transition-colors">WhatsApp 24h</h4>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">Central de Vendas</h4>
                    <p className="text-gray-400">0800 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" placeholder="exemplo@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Veículo (Modelo/Ano)</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all" placeholder="Ex: Corolla 2022" />
              </div>
              <button className="w-full py-4 bg-primary text-black font-bold flex items-center justify-center gap-2 rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all mt-4">
                <Send className="w-5 h-5" /> SOLICITAR ORÇAMENTO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
