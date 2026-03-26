import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Empresa", id: "sobre" },
    { label: "Planos", id: "planos" },
    { label: "Nossas Unidades", id: "contato" },
    { label: "Assistência 24 Horas", id: "beneficios" },
    { label: "Depoimentos", id: "depoimentos" },
  ];

  const scrollTo = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'inicio') {
       window.scrollTo({ top: 0, behavior: "smooth" });
       return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020202]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
        {/* LOGO - Exactly as requested (Only logo, no text) */}
        <div className="col-span-1 lg:col-span-2 flex items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <img src="/2222.png" alt="Rastremix Logo" className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </Link>
        </div>

        {/* DESKTOP MENU - Elite Minimalist Style */}
        <div className="hidden lg:flex col-span-8 justify-center items-center gap-6 xl:gap-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => scrollTo(item.id, e)}
              className="text-[#9CA3AF] text-[13px] font-medium tracking-wide hover:text-white hover:text-shadow-glow transition-all uppercase relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          <a 
            href="#" 
            className="text-[#9CA3AF] text-[13px] font-medium tracking-wide hover:text-white transition-all uppercase relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
          >
            2º Via Boleto
          </a>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex col-span-2 justify-end items-center">
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Lock className="w-3.5 h-3.5" />
            Acesse Seu Veículo
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex justify-end lg:hidden col-span-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl overflow-hidden"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => scrollTo(item.id, e)}
                className="text-left text-gray-300 hover:text-white text-sm font-medium tracking-wider uppercase py-3 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <a href="#" className="text-left text-gray-300 hover:text-white text-sm font-medium tracking-wider uppercase py-3 border-b border-white/5">
              2º Via Boleto
            </a>
            <Link
              to="/login"
              className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold uppercase text-xs tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Lock className="w-4 h-4" />
              Acesse Seu Veículo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
