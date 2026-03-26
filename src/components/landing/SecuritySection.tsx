import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, CheckCircle } from "lucide-react";

export const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-32 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-500">
                 <AlertTriangle className="w-64 h-64" />
              </div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-3">Atenção aos números reais</h4>
                    <p className="text-gray-400 font-light leading-relaxed">Os índices de roubo em nossa região estão aumentando a cada ano. A ausência de um rastreador eleva o risco de perda total em mais de 70%.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-3">Necessidade de prevenção</h4>
                    <p className="text-gray-400 font-light leading-relaxed">Não espere a dor de cabeça acontecer para buscar ajuda. Ter proteção veicular é um investimento garantido na prevenção de desgastes e na paz de espírito.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs tracking-widest uppercase font-medium mb-8">
              <ShieldCheck className="w-4 h-4" />
              <span>Proteção Patrimonial Integrada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-8 leading-tight">
              Proteja seu veículo contra <span className="font-medium">furto ou roubo</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-12 font-light leading-relaxed">
              A Rastremix oferece uma solução <strong className="text-white font-medium">acessível e rigorosamente eficiente</strong>, desenvolvida para garantir a segurança da sua família unindo tecnologia de ponta e facilidade de uso.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                "Melhor custo-benefício",
                "Monitoramento Multi-dispositivos",
                "Segurança para sua família",
                "Tudo em um só lugar",
                "Atendimento Emergencial 24h",
                "Cobertura Nacional"
              ].map((diff, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-300 font-light text-sm">{diff}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/5598985992136?text=Quero+proteger+meu+carro+com+a+Rastremix."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white text-black font-semibold text-[15px] hover:bg-gray-200 transition-colors inline-block tracking-wide"
            >
              FALAR COM UM CONSULTOR
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
