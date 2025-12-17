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
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
      {/* Brochure Button - below header, extreme right */}
      <div className="fixed right-4 top-20 z-40">
        <a
          href="/edfirst-data/brochure/Ed_fIRST_Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Ed-fIRST Brochure"
        >
          <Button variant="accent" className="shadow-medium">
            <FileText className="mr-2 h-4 w-4" />
            EdfIrst Brochure
          </Button>
        </a>
      </div>
      
      <main>
        <HeroSection onSectionChange={handleSectionChange} />
        <AboutSection />
        <AdvisorySection />
        <WorkSection />
        <OfferingsSection />
        <SupportSection />
        <CareersSection />
        <FeedbackSection />
        <TestimonialsSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
