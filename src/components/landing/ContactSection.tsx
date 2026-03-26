import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-black relative">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Fale com Nossos <span className="neon-text-purple">Especialistas</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Temos uma equipe pronta para tirar todas as suas dúvidas e montar o plano ideal para a sua necessidade de proteção.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 glass-panel rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Central de Atendimento</h4>
                  <p className="text-gray-400">Principal / Comercial: <strong className="text-white">(98) 98599-2136</strong></p>
                  <p className="text-gray-400">Suporte Técnico: <strong className="text-white">(98) 97020-6628</strong></p>
                  <p className="text-gray-400">Setor Financeiro: <strong className="text-white">(98) 98423-8044</strong></p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 glass-panel rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">E-mail Corporativo</h4>
                  <p className="text-gray-400">Para orçamentos, parcerias e dúvidas gerais.</p>
                  <a href="mailto:rastremixsegurancaveicular@gmail.com" className="text-secondary hover:text-primary transition-colors mt-2 inline-block">rastremixsegurancaveicular@gmail.com</a>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 glass-panel rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Assistência Nacional</h4>
                  <p className="text-gray-400">Atendemos clientes em todo território nacional com a mesma qualidade e agilidade.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Fast CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border border-white/10 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-8">
              <div className="w-20 h-20 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto text-[#25D366]">
                <MessageCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white">Pronto para instalar?</h3>
              <p className="text-gray-400 text-lg">
                Fale agora com nosso time pelo WhatsApp e não perca tempo deixando seu veículo desprotegido.
              </p>
              
              <a 
                href="https://wa.me/5598985992136?text=Ol%C3%A1%21+Pode+me+ajudar+com+um+or%C3%A7amento%3F"
                target="_blank"
                rel="noreferrer"
                className="w-full py-5 bg-[#25D366] text-black font-black text-xl rounded-xl hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center gap-3 transform hover:scale-105 duration-300"
              >
                <span>CHAMAR NO WHATSAPP</span>
              </a>
              <p className="text-sm border border-[#25D366]/30 text-[#25D366] bg-[#25D366]/10 py-2 px-4 rounded-full inline-block">
                Resposta garantida em até 5 minutos
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
