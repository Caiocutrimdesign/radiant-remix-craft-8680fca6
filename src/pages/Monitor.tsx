import React, { useState, useEffect } from "react";
import { Car, Navigation, ShieldCheck, ShieldAlert, MapPin, Power, Activity } from "lucide-react";
import { toast } from "sonner";

// Mock vehicle data
const MOCK_VEHICLE = {
  id: "V-778X",
  plate: "RST-2026",
  model: "Tesla Model S",
  speed: 65,
  status: "active" as "active" | "blocked" | "risk",
  driver: "Carlos Silva",
  lastUpdate: new Date().toISOString(),
};

export default function Monitor() {
  const [vehicle, setVehicle] = useState(MOCK_VEHICLE);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // percentages

  // Simulate movement
  useEffect(() => {
    if (vehicle.status !== "active") return;

    const interval = setInterval(() => {
      setPosition(prev => ({
        x: Math.max(10, Math.min(90, prev.x + (Math.random() - 0.5) * 2)),
        y: Math.max(10, Math.min(90, prev.y + (Math.random() - 0.5) * 2))
      }));
      setVehicle(prev => ({ ...prev, speed: Math.floor(Math.random() * 40) + 40 }));
    }, 2000);

    return () => clearInterval(interval);
  }, [vehicle.status]);

  const toggleBlock = () => {
    const isBlocked = vehicle.status === "blocked";
    setVehicle(prev => ({ 
      ...prev, 
      status: isBlocked ? "active" : "blocked",
      speed: isBlocked ? prev.speed : 0
    }));
    toast.success(isBlocked ? "Veículo desbloqueado com sucesso!" : "Veículo bloqueado remotamente!");
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6">
      {/* 
        MAP SIMULATION AREA 
        Using a dark grid background to simulate a futuristic radar/map.
      */}
      <div className="flex-1 rounded-2xl border border-border bg-black/40 relative overflow-hidden shadow-card group">
        {/* Radar grids */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-hero-gradient opacity-20 pointer-events-none" />

        {/* Floating marker */}
        <div 
          className="absolute w-12 h-12 -ml-6 -mt-6 transition-all duration-1000 ease-linear z-10 flex flex-col items-center"
          style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
          <div className="relative">
            {/* Ping animation effect */}
            {vehicle.status === "active" && (
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
            )}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-glow z-10 relative
              ${vehicle.status === "blocked" ? "bg-destructive/20 border-destructive text-destructive" : 
                vehicle.status === "risk" ? "bg-orange-500/20 border-orange-500 text-orange-500" : 
                "bg-primary/20 border-primary text-primary"}`}
            >
              <Navigation className={`w-4 h-4 ${vehicle.status === "active" ? "animate-pulse" : ""}`} />
            </div>
          </div>
          
          <div className="mt-2 px-2 py-1 glass rounded text-[10px] font-bold tracking-wider whitespace-nowrap">
            {vehicle.plate}
          </div>
        </div>

        {/* Map Overlay Stats */}
        <div className="absolute top-4 left-4 p-3 glass rounded-xl flex items-center gap-3">
          <Activity className="w-5 h-5 text-primary animate-pulse" />
          <div>
            <p className="text-xs text-muted-foreground uppercase">Radar Sync</p>
            <p className="text-sm font-medium text-primary">Sinal Estável</p>
          </div>
        </div>
      </div>

      {/* SIDEBAR VEHICLE CONTROLS */}
      <div className="w-full lg:w-80 flex flex-col gap-4">
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-xl">{vehicle.model}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.plate}</p>
            </div>
            <div className={`p-2 rounded-lg ${
              vehicle.status === 'blocked' ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'
            }`}>
              {vehicle.status === 'blocked' ? <ShieldAlert className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Car className="w-4 h-4" /> Velocidade
              </span>
              <span className="font-display font-bold text-lg text-primary">{vehicle.speed} km/h</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Latitude
              </span>
              <span className="font-mono text-sm whitespace-nowrap text-right overflow-hidden">-23.{Math.floor(position.y * 1000)}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Longitude
              </span>
              <span className="font-mono text-sm whitespace-nowrap text-right overflow-hidden">-46.{Math.floor(position.x * 1000)}</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={toggleBlock}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${
                vehicle.status === 'blocked' 
                  ? 'bg-primary/10 text-primary border border-primary hover:bg-primary/20 hover:shadow-neon-blue' 
                  : 'bg-destructive/10 text-destructive border border-destructive hover:bg-destructive/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]'
              }`}
            >
              <Power className="w-5 h-5" />
              {vehicle.status === 'blocked' ? 'DESBLOQUEAR VEÍCULO' : 'BLOQUEAR VEÍCULO'}
            </button>
            <p className="text-center text-[10px] text-muted-foreground mt-3 uppercase tracking-wider">
              Comando executado vis satélite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
