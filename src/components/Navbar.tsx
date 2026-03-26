import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5598985992136&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+atrav%C3%A9s+do+site+e+gostaria+de+proteger+o+meu+ve%C3%ADculo.&type=phone_number&app_absent=0";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Recursos", href: "#recursos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">R</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Rastre<span className="text-gradient">mix</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:08000420009" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              0800 042 0009
            </a>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com Consultor
              </a>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
