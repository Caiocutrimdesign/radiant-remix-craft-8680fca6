import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, CheckCircle } from "lucide-react";

const differentials = [
  "Melhor custo-benefício",
  "Segurança para sua família",
  "Atendimento 24h",
  "Monitoramento em todos dispositivos",
  "Tudo em um só lugar"
];

export const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="glass-panel p-8 rounded-3xl border border-red-500/20 shadow-[0_0_50px_rgba(255,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-red-500">
                 <AlertTriangle className="w-48 h-48" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Atenção aos números reais</h4>
                    <p className="text-gray-400">Os índices de roubo em nossa região estão aumentando a cada ano. A ausência de um rastreador eleva o risco de perda total em mais de 70%.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Necessidade de prevenção</h4>
                    <p className="text-gray-400">Não espere a dor de cabeça acontecer para buscar ajuda. Ter proteção veicular é um investimento garantido na prevenção de desgastes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Proteção Patrimonial</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Proteja seu veículo contra furto ou roubo
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              A Rastremix oferece uma solução <span className="text-white font-bold">acessível e extremamente eficiente</span> desenvolvida para garantir a segurança da sua família sem pesar no bolso.
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Nossos Diferenciais:</h3>
              {differentials.map((diff, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 font-medium">{diff}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/5598985992136?text=Quero+proteger+meu+carro+com+a+Rastremix."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:shadow-glow transition-all inline-block hover:scale-105 transform duration-300"
            >
              FALAR COM UM CONSULTOR
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
