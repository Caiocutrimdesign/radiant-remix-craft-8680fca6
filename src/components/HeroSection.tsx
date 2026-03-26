import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5598985992136&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+atrav%C3%A9s+do+site+e+gostaria+de+proteger+o+meu+ve%C3%ADculo.&type=phone_number&app_absent=0";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Proteção veicular 24 horas</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Rastreamento
            <br />
            Veicular{" "}
            <span className="text-gradient">Inteligente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Proteja seu veículo com tecnologia de ponta. Monitoramento em tempo real, 
            bloqueio remoto e assistência 24h com a melhor relação custo-benefício do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 shadow-glow">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Proteja seu Veículo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8">
              <a href="#recursos">Conheça os Recursos</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-8 flex-wrap"
          >
            <PriceBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PriceBadge = () => (
  <div className="glass rounded-2xl px-6 py-4 flex items-center gap-4">
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">Planos a partir de</p>
      <div className="flex items-baseline gap-1">
        <span className="text-sm text-muted-foreground">R$</span>
        <span className="font-display text-4xl font-bold text-gradient">50</span>
        <span className="text-sm text-muted-foreground">/mês</span>
      </div>
    </div>
    <div className="w-px h-10 bg-border" />
    <p className="text-xs text-muted-foreground max-w-[140px]">Instalação grátis nos planos anuais*</p>
  </div>
);

export default HeroSection;
