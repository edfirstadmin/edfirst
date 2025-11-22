import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AdvisorySection from "@/components/sections/AdvisorySection";
import WorkSection from "@/components/sections/WorkSection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import SupportSection from "@/components/sections/SupportSection";
import CareersSection from "@/components/sections/CareersSection";
import ContactSection from "@/components/sections/ContactSection";
import FeedbackSection from "@/components/sections/FeedbackSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <HeroSection onSectionChange={handleSectionChange} />
        <AboutSection />
        <AdvisorySection />
        <WorkSection />
        <OfferingsSection />
        <SupportSection />
        <CareersSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
