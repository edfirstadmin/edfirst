import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchOfferingsFromExcel } from "@/lib/offeringsData";
import { OfferingCard } from "@/components/OfferingCard";
import { useNavigate } from "react-router-dom";

const OfferingsSection = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["offerings-excel"],
    queryFn: () => fetchOfferingsFromExcel(),
    staleTime: 1000 * 60 * 5,
  });

  const offerings = data || [];
  const displayedOfferings = offerings.slice(0, 4);

  return (
    <section id="offerings" className="py-20 bg-gradient-to-br from-white to-secondary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational solutions designed to transform learning outcomes and 
            strengthen educational systems through evidence-based approaches
          </p>
        </div>

        {isLoading && (
          <div className="text-center mb-8 text-muted-foreground">Loading offerings...</div>
        )}
        
        {/* Background Context */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-primary-light/10 to-white mb-16 animate-fade-up">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Background</h3>
              <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Education can enrich lives by raising and fulfilling aspirations. Overhauling schools especially 
                in impoverished and underserved neighbourhoods and reaching out to every child with commitment 
                to provide good education ultimately pays off. A close look at the history of education system around the world provide examples of the transformative impact of education. For eg. Japan and Singapore
              </p>
              
              <p>
                Education when delivered will has multifaceted benefits for economies. For a student, education promises 
                employment, earnings and health. It raises self-esteem, belief in oneself and opens new horizons. 
                For society it drives innovation, strengthens institutions and fosters social cohesion.
              </p>
              
              <p>
                The kind of education which imparts everlasting benefit is focused on learning and acquiring skills. 
                Learning conditions and achieving learning outcomes are the most challenging for disadvantaged and 
                marginalised groups. The current deluge of Artificial Intelligence tools requires future workers 
                to have strong basic skills for fostering creative and critical thinking, adaptability and lifelong learning.
              </p>
              
              <div className="bg-accent/10 rounded-lg p-6 mt-8">
                <p className="font-semibold text-primary text-center">
                  The first and foremost strategy for enhancing learning in schools is to prioritize learning, not just schooling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {displayedOfferings.map((offering, index) => (
            <OfferingCard key={index} offering={offering} index={index} />
          ))}
        </div>

        {/* Read More Button */}
        {offerings.length > 4 && (
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/20 hover:bg-primary/5 text-primary"
              onClick={() => navigate('/offerings')}
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Card className="shadow-strong border-0 bg-gradient-primary max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Transform Your Educational Institution
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Partner with Ed-fIRST to implement evidence-based educational solutions that prioritize learning 
                outcomes and drive meaningful systemic change in your educational environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" className="group">
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
