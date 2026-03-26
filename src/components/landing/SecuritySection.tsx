import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, CheckCircle, MessageCircle } from "lucide-react";

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
            <div className="bg-white/[0.02] backdrop-blur-md p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20 group">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-gray-500 transform group-hover:scale-110 transition-transform duration-700">
                 <AlertTriangle className="w-64 h-64" />
              </div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-3 tracking-wide">Atenção aos números reais</h4>
                    <p className="text-[#888] font-light leading-relaxed">Os índices de roubo em nossa região crescem a cada ano. A ausência de um rastreador eleva o risco de perda total em mais de 70%.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-3 tracking-wide">Necessidade de prevenção</h4>
                    <p className="text-[#888] font-light leading-relaxed">Não espere a dor de cabeça acontecer para buscar ajuda. Segurança veicular é um investimento garantido na prevenção de desgastes e na tranquilidade da sua família.</p>
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
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-8 leading-[1.1]">
              Proteja seu veículo contra <span className="font-semibold block mt-2">furto ou roubo</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-[#888] mb-12 font-light leading-relaxed">
              A Rastremix oferece uma solução <strong className="text-white font-medium">acessível e rigorosamente eficiente</strong>, desenvolvida com tecnologia de ponta europeia para garantir controle total na palma da sua mão.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {[
                "Melhor custo-benefício",
                "App p/ Multi-dispositivos",
                "Segurança p/ sua família",
                "Tudo em um só lugar",
                "Assistência Auto 24h",
                "Cobertura Nacional"
              ].map((diff, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300 font-light text-[15px]">{diff}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/5598985992136?text=Quero+saber+mais+sobre+como+proteger+meu+carro+com+a+Rastremix."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-fit px-8 py-4 bg-primary text-black font-semibold text-[14px] uppercase tracking-wide rounded-xl hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              Falar com um Consultor
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
