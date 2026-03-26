import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  MonitorSmartphone,
  Layers,
  Globe,
  Rocket,
  Mail,
  ChevronRight,
  Terminal,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Smooth fade in variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

const glassCard =
  "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Force dark mode on body for landing page
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      // Revert if navigating away, but for this SaaS we keep it dark!
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-50 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Dynamic Background Noise & Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-cyan-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[40%] bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-[#030303]/50 backdrop-blur-md border-b border-white/10 z-50 flex items-center px-6 md:px-12 transition-all duration-300">
        <div className="flex-1 flex justify-start items-center gap-3">
          {/* Logo Brand */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <span className="font-bold text-white text-lg tracking-tighter">CC</span>
            <div className="absolute inset-0 border border-white/20 rounded-xl rounded-tl-sm" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold tracking-widest uppercase text-white leading-none mt-1">
              Caio Cutrim
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-cyan-400 uppercase leading-relaxed">
              Designer & Dev
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Planos
          </a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Contato
          </a>
        </div>

        <div className="flex-1 flex justify-end gap-4">
          <Link
            to="/login"
            className="hidden sm:flex text-sm font-medium text-zinc-300 hover:text-white transition-colors items-center"
          >
            Login
          </Link>
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Link to="/register">Iniciar Projeto</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 md:pt-56 md:pb-40 max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 mb-8 backdrop-blur-md"
        >
          <span className="flex w-2 h-2 rounded-full bg-cyan-400 mr-3 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          Soluções 100% Personalizadas
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.05]"
        >
          Elevando sua marca
          <br className="hidden md:block" />
          ao{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500">
            Futuro.
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Desenvolvimento de sites e sistemas sob medida com design premium, animações fluidas e arquitetura de ponta.
          Domínio grátis e deploy inclusos.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-0 shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
          >
            <a href="#services">
              Explorar Serviços <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-medium border-white/20 hover:bg-white/10 transition-all text-white bg-transparent"
          >
            <a href="#contact">Falar com Especialista</a>
          </Button>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Futuristic Dashboard Preview / 3D Element */}
      <section className="relative w-full max-w-6xl mx-auto px-6 z-10 -mt-10 mb-32 hidden md:block">
        <motion.div
          style={{ y: yHero }}
          className="w-full h-[400px] md:h-[600px] rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative"
        >
          <div className="absolute top-0 inset-x-0 h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <div className="p-10 pt-20 h-full flex flex-col justify-center items-center text-center">
            <Cpu className="w-16 h-16 text-white/10 mb-6" />
            <h3 className="text-2xl font-semibold text-white/40 max-w-lg">
              Sistema Padrão de Alta Performance.
              <br />
              Preparado para Supabase Backend.
            </h3>
          </div>

          {/* Decorative glows inside the frame */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">Serviços Premium</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Tudo o que você precisa para dominar o digital.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={glassCard}>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Sites Sob Medida</h4>
              <p className="text-zinc-400 leading-relaxed font-light">
                Landing pages corporativas, institucionais e e-commerces. Design exclusivo que converte e encanta.
              </p>
            </div>

            <div className={glassCard}>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Sistemas Web</h4>
              <p className="text-zinc-400 leading-relaxed font-light">
                Automação, dashboards, painéis administrativos e portais SaaS. Seu negócio otimizado em nuvem.
              </p>
            </div>

            <div className={glassCard}>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Deploy Completo</h4>
              <p className="text-zinc-400 leading-relaxed font-light">
                Da criação do código à configuração dos servidores. Domínio grátis incluso no pacote inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative z-10 px-6 border-t border-white/5">
        {/* Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 uppercase mb-4">Investimento</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">Escale sem barreiras de preço.</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all text-left flex flex-col relative overflow-hidden group">
              <h4 className="text-2xl font-semibold text-white mb-2">Starter</h4>
              <p className="text-zinc-500 text-sm mb-8">Perfeito para MVP e validação.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white tracking-tight">Sob Medida</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> Design Exclusivo
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> Landing Page 1-3 Sessões
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> Domínio Grátis (.com.br)
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-cyan-500" /> Formulário de Contato
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-zinc-200 rounded-xl h-12">
                Solicitar Orçamento
              </Button>
            </div>

            {/* Professional */}
            <div className="bg-[#0D0D0F] border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] rounded-3xl p-8 transition-all text-left flex flex-col relative overflow-hidden scale-100 md:scale-105 z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
              <div className="absolute top-6 right-6 px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full border border-purple-500/30">
                Mais Popular
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">Professional</h4>
              <p className="text-zinc-500 text-sm mb-8">Para negócios em crescimento estruturado.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white tracking-tight">Sob Medida</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-500" /> Tudo do plano Starter
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-500" /> Painel Administrativo
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-500" /> Integração Banco de Dados
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-500" /> Autenticação de Usuários
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-0 text-white rounded-xl h-12">
                Solicitar Orçamento
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all text-left flex flex-col relative overflow-hidden">
              <h4 className="text-2xl font-semibold text-white mb-2">Enterprise</h4>
              <p className="text-zinc-500 text-sm mb-8">Sistemas complexos e robustos.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white tracking-tight">Sob Medida</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Tudo do plano Pro
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Arquitetura SaaS Escalonável
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> Pagamentos e Assinaturas
                </li>
                <li className="flex items-center text-zinc-300 text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" /> API Personalizada
                </li>
              </ul>
              <Button className="w-full bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl h-12">
                Falar com Vendas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 relative z-10 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-20 bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10" />
          <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[150%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para transformar
            <br /> sua ideia em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              realidade?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10">
            Entre em contato hoje e agende uma consultoria sem compromisso. Vamos desenhar o futuro da sua empresa.
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 h-14 bg-white text-black hover:bg-zinc-200 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Mail className="mr-2 w-5 h-5" /> Enviar E-mail
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#030303] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-white text-xs">CC</span>
            </div>
            <span className="font-semibold text-white">Caio Cutrim</span>
          </div>
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Caio Cutrim Designer. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
