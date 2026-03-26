import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
  Shield,
  HeartPulse,
  MessageCircle,
  Sparkles,
  Stethoscope,
  Smile,
} from "lucide-react";
import { SchedulingModal } from "@/components/SchedulingModal";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const WhatsAppLink = "https://wa.me/5598984154556?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação!";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-primary">
              <Smile size={28} />
            </span>{" "}
            BCLINIC
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-glow cursor-pointer"
          >
            <MessageCircle size={20} />
            Agendar Avaliação
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 bg-hero-gradient opacity-40 z-0"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase"
            >
              Clínica Odontológica & Estética Orofacial
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display leading-tight"
            >
              Sorrir <span className="text-gradient">muda tudo.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Descubra um novo conceito em odontologia com o Dr. Bergson Lindoso. Unimos tecnologia, estética e um
              atendimento verdadeiramente humanizado.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-glow hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={22} />
                Agendar Avaliação
              </button>
              <a
                href="#servicos"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10"
              >
                Conheça os serviços <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-card-gradient relative border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Mais que um consultório, <span className="text-primary">um espaço de cuidado.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A <strong>BCLINIC</strong> é uma clínica odontológica voltada para saúde, estética e bem-estar do seu
                sorriso. Nosso compromisso é oferecer um atendimento humanizado, com técnica, cuidado e atenção
                individualizada.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Trabalhamos com foco na prevenção, reabilitação e estética, sempre respeitando as necessidades
                exclusivas de cada paciente para entregar os melhores resultados.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Atendimento Humanizado", icon: HeartPulse },
                  { title: "Técnica Atualizada", icon: Shield },
                  { title: "Planejamento Individual", icon: Star },
                  { title: "Ambiente Premium", icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass relative group">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 flex items-center justify-center p-12 text-center group-hover:scale-105 transition-transform duration-700">
                  <Smile size={120} className="text-primary/20 absolute" />
                  <div className="relative z-10 glass p-8 rounded-2xl border-primary/20">
                    <h3 className="text-2xl font-bold mb-2">Dr. Bergson Lindoso</h3>
                    <p className="text-primary font-medium mb-4">CRO-MA 3898</p>
                    <p className="text-muted-foreground text-sm">
                      Responsável Técnico e especialista em transformar sorrisos com excelência e conforto.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xl text-primary font-medium tracking-wider uppercase mb-3">Nossas Especialidades</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-display">Tudo para o seu sorriso</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Estética",
                desc: "Facetas em resina, lentes de contato dental e clareamento para um sorriso perfeito.",
                icon: Sparkles,
              },
              {
                title: "Implantes & Próteses",
                desc: "Reabilitação oral completa para devolver a função e a segurança ao mastigar e sorrir.",
                icon: Shield,
              },
              {
                title: "Prevenção",
                desc: "Manutenção da saúde bucal com limpezas profissionais e avaliações periódicas.",
                icon: HeartPulse,
              },
              {
                title: "Ortodontia",
                desc: "Aparelhos convencionais e alinhadores invisíveis para o alinhamento ideal.",
                icon: CheckCircle2,
              },
              {
                title: "Clínica Geral",
                desc: "Restaurações, tratamentos de canal e extrações com máximo conforto.",
                icon: Stethoscope,
              },
              {
                title: "Limpeza 360°",
                desc: "Higiene profissional intensiva com foco na saúde completa e manutenção do sorriso.",
                icon: Star,
                featured: true,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-3xl border ${service.featured ? "bg-primary/5 border-primary/50 shadow-glow relative overflow-hidden" : "glass border-white/5"} transition-all hover:bg-white/5 group`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    DESTAQUE
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.featured ? "bg-primary text-primary-foreground" : "bg-white/5 text-primary group-hover:scale-110 transition-transform"}`}
                >
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto relative z-10 glass p-12 md:p-20 rounded-3xl border-primary/20 text-center max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Pronto para transformar seu sorriso?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma avaliação e descubra o plano ideal para a sua saúde e estética bucal com planejamento
            individualizado.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-glow hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle size={24} />
            Agende sua avaliação
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                <span className="text-primary">
                  <Smile size={28} />
                </span>{" "}
                BCLINIC
              </div>
              <p className="text-muted-foreground mb-6">
                Clínica Odontológica e Estética Orofacial dedicada a transformar vidas através do sorriso.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contatos</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-primary mt-1" />
                  <div>
                    <strong className="block text-white">WhatsApp & Telefone</strong>
                    <a href={WhatsAppLink} className="hover:text-primary transition-colors hover:underline">
                      (98) 98415-4556
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 text-lg">Nossas Unidades</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass p-5 rounded-2xl border-white/5">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={24} className="text-primary shrink-0" />
                    <div>
                      <strong className="block text-white mb-1">Unidade Coque</strong>
                      <p className="text-sm">Atendimento de excelência na região do Coque.</p>
                    </div>
                  </div>
                </div>
                <div className="glass p-5 rounded-2xl border-white/5">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={24} className="text-primary shrink-0" />
                    <div>
                      <strong className="block text-white mb-1">Unidade Vitória do Mearim</strong>
                      <p className="text-sm">Nosso espaço completo em Vitória do Mearim.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} BCLINIC - Dr. Bergson Lindoso | CRO-MA 3898. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <HeartPulse size={14} className="text-primary" /> para o seu sorriso.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform z-50 group hover:bg-[#20bd5a] cursor-pointer"
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle size={32} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none origin-right hidden md:block">
          Agende sua avaliação!
          {/* Arrow */}
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></span>
        </span>
      </motion.button>

      <SchedulingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
