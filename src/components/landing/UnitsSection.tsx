import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Instagram, MessageCircle, Search } from "lucide-react";

const states = [
  { id: "AC", name: "Acre" }, { id: "AL", name: "Alagoas" }, { id: "AP", name: "Amapá" },
  { id: "AM", name: "Amazonas" }, { id: "BA", name: "Bahia" }, { id: "CE", name: "Ceará" },
  { id: "DF", name: "Distrito Federal" }, { id: "ES", name: "Espírito Santo" }, { id: "GO", name: "Goiás" },
  { id: "MA", name: "Maranhão" }, { id: "MT", name: "Mato Grosso" }, { id: "MS", name: "Mato Grosso do Sul" },
  { id: "MG", name: "Minas Gerais" }, { id: "PA", name: "Pará" }, { id: "PB", name: "Paraíba" },
  { id: "PR", name: "Paraná" }, { id: "PE", name: "Pernambuco" }, { id: "PI", name: "Piauí" },
  { id: "RJ", name: "Rio de Janeiro" }, { id: "RN", name: "Rio Grande do Norte" }, { id: "RS", name: "Rio Grande do Sul" },
  { id: "RO", name: "Rondônia" }, { id: "RR", name: "Roraima" }, { id: "SC", name: "Santa Catarina" },
  { id: "SP", name: "São Paulo" }, { id: "SE", name: "Sergipe" }, { id: "TO", name: "Tocantins" }
];

const unitsData: Record<string, any[]> = {
  MA: [
    {
      name: "Rastremix: Vila Flamengo",
      city: "São Luís - MA",
      address: "Av. Tancredo Neves, N° 45 - Loja 04 - Vila Flamengo, São José de Ribamar - MA, 65110-000",
      phone: "(98) 98599-2136",
      instagram: "@rastremix",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Rastremix: UEMA",
      city: "São Luís - MA",
      address: "Centro comercial Bitcoin - Loja 03 - Jardim São Cristóvão II, São Luís - MA, 65055-378",
      phone: "(98) 98599-2136",
      instagram: "@rastremix",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Rastremix: DETRAN",
      city: "São Luís - MA",
      address: "Centro Comercial Castelão - Av. dos Franceses, N° 188 - Vila Palmeira, São Luís - MA, 65037-417",
      phone: "(98) 98599-2136",
      instagram: "@rastremix",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Rastremix: ANIL",
      city: "São Luís - MA",
      address: "Posto J.R - Av. Casemiro Júnior, N° 80 - Anil, São Luís - MA, 65045-180",
      phone: "(98) 98599-2136",
      instagram: "@rastremix",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Rastremix: AFRICANOS",
      city: "São Luís - MA",
      address: "Av. dos Africanos, 156 - Coroado, São Luís - MA, 65042-245",
      phone: "(98) 98599-2136",
      instagram: "@rastremix",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    }
  ]
};

// Simplified but visually accurate Brazil SVG Paths
const BrazilPaths = ({ selected, onSelect }: { selected: string, onSelect: (id: string) => void }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl translate-x-4">
      <g className="transition-all duration-500">
        {/* Simplified Brazil Map Structure (Representative) */}
        <motion.path 
          d="M 250 50 L 350 70 L 400 150 L 420 250 L 380 350 L 300 450 L 200 480 L 120 420 L 50 300 L 40 150 L 100 80 Z"
          fill={selected === "MA" ? "#cc0000" : "#d1d5db"}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-red-500"
          onClick={() => onSelect("MA")}
        />
        <text x="320" y="160" className="pointer-events-none fill-black/40 text-[12px] font-bold">MA</text>
        <text x="250" y="250" className="pointer-events-none fill-white text-[20px] font-bold uppercase tracking-widest" textAnchor="middle">Brasil</text>
      </g>
    </svg>
  );
};

export const UnitsSection = () => {
  const [selectedState, setSelectedState] = useState("MA");

  const units = unitsData[selectedState] || [];

  return (
    <section id="unidades" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: Map & Header */}
          <div className="lg:w-[40%] space-y-10 lg:sticky lg:top-32">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-light text-[#111] leading-tight mb-6">
                Nossas <span className="font-bold text-red-600 block sm:inline">Unidades</span>
              </h2>
              <p className="text-gray-500 text-lg font-light max-w-sm">
                Selecione o estado para visualizar as unidades dessa localização.
              </p>
            </div>

            <div className="relative group p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner">
               <BrazilPaths selected={selectedState} onSelect={setSelectedState} />
            </div>

            <div className="relative">
               <div className="absolute left-6 top-1/2 -translate-y-1/2 text-red-600">
                 <Search className="w-5 h-5" />
               </div>
               <select 
                 value={selectedState}
                 onChange={(e) => setSelectedState(e.target.value)}
                 className="w-full pl-14 pr-10 py-5 bg-white border border-gray-200 rounded-3xl text-gray-900 font-semibold appearance-none focus:outline-none focus:ring-4 focus:ring-red-600/10 shadow-lg transition-all cursor-pointer"
               >
                 {states.map(state => (
                   <option key={state.id} value={state.id}>{state.name}</option>
                 ))}
               </select>
               <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                 <ChevronRight className="w-5 h-5 rotate-90" />
               </div>
            </div>
          </div>

          {/* RIGHT: Units List */}
          <div className="lg:w-[60%]">
             <div className="space-y-10">
               <div className="flex items-center gap-4 border-b border-gray-100 pb-8">
                 <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-600/20">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {states.find(s => s.id === selectedState)?.name}
                 </h3>
                 <span className="ml-auto bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-sm font-medium">
                   {units.length} UNIDADES
                 </span>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <AnimatePresence mode="wait">
                   {units.length > 0 ? (
                     units.map((unit, idx) => (
                       <motion.div
                         key={unit.name}
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.4, delay: idx * 0.1 }}
                         className="bg-white border border-gray-100 rounded-[32px] shadow-xl overflow-hidden group hover:border-red-600 transition-all hover:shadow-2xl flex flex-col h-full"
                       >
                         <div className="h-56 overflow-hidden relative">
                           <img src={unit.image} alt={unit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                           <div className="absolute bottom-6 left-8 right-8">
                             <h4 className="text-white font-bold text-xl leading-tight">{unit.name}</h4>
                           </div>
                         </div>
                         
                         <div className="p-8 space-y-6 flex-grow flex flex-col">
                           <div className="space-y-4 flex-grow">
                             <div className="flex items-start gap-3">
                               <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                               <div>
                                 <p className="text-gray-900 font-bold text-sm tracking-wide">Cidade: {unit.city}</p>
                                 <p className="text-gray-500 text-xs mt-1.5 leading-relaxed font-light">{unit.address}</p>
                               </div>
                             </div>
                             
                             <div className="flex items-center gap-3">
                               <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                               <p className="text-gray-700 text-sm font-semibold tracking-wide">Telefone: {unit.phone}</p>
                             </div>

                             <div className="flex items-center gap-3">
                               <Instagram className="w-5 h-5 text-red-600 flex-shrink-0" />
                               <p className="text-gray-700 text-sm font-semibold tracking-wide">Instagram: {unit.instagram}</p>
                             </div>
                           </div>

                           <a 
                             href={`https://wa.me/5598985992136?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+unidade+${unit.name}`}
                             target="_blank"
                             rel="noreferrer"
                             className="w-full py-4 bg-[#25D366]/10 text-[#128C7E] font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
                           >
                             <MessageCircle className="w-5 h-5" />
                             FALE CONOSCO
                           </a>
                         </div>
                       </motion.div>
                     ))
                   ) : (
                     <div className="col-span-2 py-32 text-center bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
                        <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                        <h4 className="text-xl font-bold text-gray-500 mb-2">Expansão em Breve</h4>
                        <p className="text-gray-400 font-light max-w-xs mx-auto text-sm">Estamos trabalhando para levar a Rastremix para todo o Brasil. Fique atento às novidades!</p>
                     </div>
                   )}
                 </AnimatePresence>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
