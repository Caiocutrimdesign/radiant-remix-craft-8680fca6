import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5598985992136&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+atrav%C3%A9s+do+site+e+gostaria+de+proteger+o+meu+ve%C3%ADculo.&type=phone_number&app_absent=0";

const CtaSection = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 lg:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Proteja seu veículo <span className="text-gradient">agora</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Entre em contato com nossos consultores e descubra o melhor plano para proteger 
            seu carro ou moto com tecnologia de rastreamento de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 shadow-glow">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com Consultor
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8">
              <a href="tel:08000420009">
                Ligar: 0800 042 0009
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
