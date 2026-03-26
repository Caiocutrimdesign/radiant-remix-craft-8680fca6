import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PlansSection } from "@/components/landing/PlansSection";
import { SystemPreviewSection } from "@/components/landing/SystemPreviewSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection"; // Added import
import { ContactSection } from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden pt-20">
      <Navbar />
      
      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PlansSection />
        <SystemPreviewSection />
        <SecuritySection />
        <TestimonialsSection /> {/* Added component */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
