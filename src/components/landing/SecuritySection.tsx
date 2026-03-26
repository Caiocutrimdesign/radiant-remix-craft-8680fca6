import { motion } from "framer-motion";
import { ShieldCheck, Server, Eye, Fingerprint } from "lucide-react";

export const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-24 bg-card relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path fill="none" stroke="#fff" strokeWidth="1" d="M25,0l25,14.4v28.9L25,57.7L0,43.4V14.4z"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Segurança de <span className="text-red-500">Nível Militar</span></h2>
          <p className="text-gray-400">Proteção robusta contra roubo de dados, ataques cibernéticos e invasão de sistema.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
             { icon: ShieldCheck, title: "Criptografia SSL", desc: "Todo acesso é trafegado com certificados de segurança de 256 bits, garantindo integridade." },
             { icon: Server, title: "Servidores em Nuvem", desc: "Instâncias com balanceamento de carga auto-escalável. O rastreamento não para nunca." },
             { icon: Eye, title: "Auditoria Contínua", desc: "Nossos sistemas monitoram cada acesso e cada ação de bloqueio enviado ao veículo." },
             { icon: Fingerprint, title: "Controle de Acessos", desc: "Separação por perfis: dono, funcionário, técnico. Cada um acessa só o que deve acessar." }
          ].map((item, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all group"
            >
               <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <item.icon className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
               <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
