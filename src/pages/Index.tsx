import { useEffect, useState } from "react";
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
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsProgrammaticScroll(true);
    
    // Smooth scroll to section
    const headerHeight = 80; // Approximate header height
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Adjust for sticky header after initial scroll
        setTimeout(() => {
          window.scrollBy({ top: -headerHeight, left: 0, behavior: "instant" as ScrollBehavior });
        }, 180);
      }
    }
    // Release programmatic state after scroll
    setTimeout(() => setIsProgrammaticScroll(false), 800);
  };

  useEffect(() => {
    const headerHeight = 80;
    const sectionIds = [
      "home",
      "about",
      "advisory",
      "work",
      "offerings",
      "support",
      "careers",
      "feedback",
      "testimonials",
      "registration",
      "contact",
    ];

    const elements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: string; el: HTMLElement } => Boolean(x.el));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const id = visible.target.id;
          if (id && id !== activeSection) {
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        rootMargin: `-${headerHeight}px 0px -40% 0px`,
        threshold: [0.3, 0.5, 0.7],
      }
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeSection, isProgrammaticScroll]);

  // Fallback scroll spy using scroll position
  useEffect(() => {
    const headerHeight = 80;
    const sectionIds = [
      "home",
      "about",
      "advisory",
      "work",
      "offerings",
      "support",
      "careers",
      "feedback",
      "testimonials",
      "registration",
      "contact",
    ];

    let ticking = false;

    const computeActive = () => {
      const pos = window.scrollY + headerHeight + 10;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          current = id;
        }
      }
      if (!isProgrammaticScroll && current !== activeSection) {
        setActiveSection(current);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(computeActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Initialize on mount
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeSection, isProgrammaticScroll]);

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
