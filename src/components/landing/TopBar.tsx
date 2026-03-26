import { Phone, Store } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#cc0000] text-white h-9 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LEFT: 0800 */}
        <a
          href="tel:08000420009"
          className="flex items-center gap-2 text-xs font-semibold tracking-wide hover:text-white/80 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 fill-white" />
          <span className="hidden sm:inline font-medium">Roubo e Furto:</span>
          <span className="font-bold tracking-wider">0800 042 0009</span>
          <span className="ml-2 text-white/60 text-[10px] hidden md:inline uppercase tracking-widest">Gratuito · 24h</span>
        </a>

        {/* RIGHT: Franqueado */}
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-xs font-semibold tracking-wide hover:text-white/80 transition-colors group"
        >
          <Store className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span>Seja um Franqueado</span>
        </a>
      </div>
    </div>
  );
};
