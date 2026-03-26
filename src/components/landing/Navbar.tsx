import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShieldAlert } from "lucide-react";
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

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Planos", href: "#planos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-primary/20 py-3 shadow-glow" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 flex items-center justify-center overflow-hidden transition-all group-hover:scale-105">
            <img src="/2222.png" alt="Rastremix Logo" className="h-full w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <span className="font-display font-bold text-2xl tracking-wider text-white hidden sm:block">
            RASTRE<span className="text-red-500">MIX</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-neon-blue"></span>
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-6 py-2.5 bg-transparent border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)]"
          >
            ENTRAR NO SISTEMA
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MOBILE MENU overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-primary tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-primary text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)]"
              >
                ENTRAR NO SISTEMA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
