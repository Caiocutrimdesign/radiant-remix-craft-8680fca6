import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Sobre a Rastremix</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              Solução completa em{" "}
              <span className="text-gradient">rastreamento veicular</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fundada com o propósito de proteger o patrimônio e oferecer mais tranquilidade para motoristas 
              em todo o país. Consolidamos nossa atuação oferecendo soluções práticas, atendimento humanizado 
              e resultados reais.
            </p>
            <div className="space-y-4">
              {[
                "100% de índice de recuperação de veículos",
                "Tecnologia GPS de ponta com atualizações em tempo real",
                "Atendimento personalizado 24 horas por dia",
                "Melhor custo-benefício do mercado",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <img
                src={appMockup}
                alt="Aplicativo Rastremix de rastreamento veicular"
                className="relative w-72 lg:w-80 animate-float"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
