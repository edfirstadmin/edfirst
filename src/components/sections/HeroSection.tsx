import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-educational-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Advancing Education through{" "}
                <span className="text-accent">AI-Driven Innovation</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Empowering educators, leaders, and learners from preschool to beyond with 
                cutting-edge interventions, innovative pedagogy, and inclusive learning environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Removed Learn More button */}
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onSectionChange("contact")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-white/80 text-sm">Programs + Projects</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-2xl font-bold text-white">60K+</p>
                <p className="text-white/80 text-sm">Educators</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-educational-blue/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="w-6 h-6 text-educational-blue" />
                </div>
                <p className="text-2xl font-bold text-white">AI-Driven</p>
                <p className="text-white/80 text-sm">Innovation</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                    <h3 className="text-white font-semibold mb-2">Foundational Literacy</h3>
                    <p className="text-white/80 text-sm">Building strong basic skills</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                    <h3 className="text-white font-semibold mb-2">AI Integration</h3>
                    <p className="text-white/80 text-sm">Cutting-edge tools to enhance teaching learning in the classroom</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                    <h3 className="text-white font-semibold mb-2">Equity Focus</h3>
                    <p className="text-white/80 text-sm">Inclusive, high-quality education for all</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-medium">
                    <h3 className="text-white font-semibold mb-2">Teacher Training</h3>
                    <p className="text-white/80 text-sm">Empowering educators with best practices</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
