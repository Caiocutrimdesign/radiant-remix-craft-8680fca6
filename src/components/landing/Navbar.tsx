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
    { label: "Assistência 24h", id: "beneficios" },
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
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-gray-200 py-3 shadow-lg"
          : "bg-white border-gray-100 py-5"
      }`}
    >
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
        {/* LOGO (LEFT) */}
        <div className="col-span-1 lg:col-span-2 flex items-center">
          <Link to="/" className="flex items-center group">
            <div className={`relative flex items-center justify-center transition-all duration-700 group-hover:opacity-80 ${isScrolled ? 'h-10' : 'h-12'}`}>
              <img src="/2222.png" alt="Rastremix Logo" className="h-full w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </Link>
        </div>

        {/* MENU (CENTER) - High-end minimalist */}
        <div className="hidden lg:flex col-span-8 justify-center items-center gap-6 xl:gap-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => scrollTo(item.id, e)}
              className="text-gray-800 text-[13px] font-semibold tracking-wide hover:text-red-600 transition-colors uppercase relative group"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a 
            href="#" 
            className="text-gray-800 text-[13px] font-semibold tracking-wide hover:text-red-600 transition-colors uppercase relative group"
          >
            2º Via Boleto
            <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* CTA (RIGHT) */}
        <div className="hidden lg:flex col-span-2 justify-end items-center">
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all shadow-md hover:bg-red-700 hover:shadow-lg"
          >
            <span className="hidden xl:inline">Acesse seu veículo</span>
            <span className="xl:hidden">Entrar</span>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex justify-end lg:hidden col-span-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - High End Drawer/Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => scrollTo(item.id, e)}
                  className="text-left py-4 border-b border-gray-100 text-gray-800 hover:text-red-600 text-sm font-semibold tracking-wider uppercase transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a href="#" className="text-left py-4 border-b border-gray-100 text-gray-800 hover:text-red-600 text-sm font-semibold tracking-wider uppercase transition-colors">
                2º Via Boleto
              </a>
              <Link
                to="/login"
                className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-semibold uppercase text-xs tracking-wider rounded-xl shadow-md hover:bg-red-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Lock className="w-4 h-4" />
                Acesse Seu Veículo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
