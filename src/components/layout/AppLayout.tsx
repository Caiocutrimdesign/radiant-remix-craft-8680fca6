import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Menu, Bell } from "lucide-react";

export const AppLayout = () => {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Background glow for the content area */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
        
        {/* Header mobile/TopBar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-background/80 backdrop-blur-md z-10">
          <button className="md:hidden text-muted-foreground hover:text-foreground">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-background"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 z-10 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
