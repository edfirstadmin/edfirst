import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, BookOpen, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";

const OfferingsSection = () => {
  const offerings = [
    {
      title: "State Assessment Survey (SAS)",
      icon: BarChart3,
      color: "primary",
      description: "Comprehensive assessment surveys to evaluate learning outcomes and educational effectiveness across state education systems. Our SAS provides critical data insights for evidence-based policy making and educational improvements.",
      features: [
        "Data-driven insights for policy makers",
        "Comprehensive learning outcome evaluation", 
        "Evidence-based intervention strategies",
        "Scalable assessment frameworks"
      ]
    },
    {
      title: "Teacher Assessment and Motivation Program (TAMP)",
      icon: Users,
      color: "secondary", 
      description: "Innovative programs designed to assess teacher effectiveness and enhance motivation. TAMP focuses on strengthening teachers who prioritize evidence-based approaches to deepen classroom learning experiences.",
      features: [
        "Teacher effectiveness evaluation",
        "Evidence-based teaching strategies",
        "Professional motivation enhancement",
        "Performance improvement frameworks"
      ]
    },
    {
      title: "Comprehensive Teacher Professional Development Program",
      icon: GraduationCap,
      color: "educational-blue",
      description: "Extensive professional development initiatives that integrate AI tools with foundational literacy and numeracy skills training, designed to enhance educator capabilities across all educational levels.",
      features: [
        "AI-integrated training modules",
        "Foundational Literacy & Numeracy focus",
        "Continuous professional growth",
        "Modern pedagogical approaches"
      ]
    },
    {
      title: "Contextualised Supplementary Books and Pedagogical Resources",
      icon: BookOpen,
      color: "accent",
      description: "Strengthening education through locally relevant supplementary materials and innovative pedagogical resources designed to support diverse learning environments and cultural contexts.",
      features: [
        "Culturally relevant content",
        "Innovative pedagogical tools",
        "Diverse learning support",
        "Context-specific materials"
      ]
    },
    {
      title: "CUET Practice Series", 
      icon: Lightbulb,
      color: "primary",
      description: "Specialized preparation materials and practice series designed to help students excel in the Common University Entrance Test (CUET), ensuring comprehensive readiness for higher education.",
      features: [
        "Comprehensive CUET preparation",
        "Practice test series",
        "Higher education readiness",
        "Strategic exam preparation"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary/10 to-primary-light/20',
      'secondary': 'from-secondary/10 to-secondary-light/20',
      'educational-blue': 'from-educational-blue/10 to-educational-blue-light/20',
      'accent': 'from-accent/10 to-accent-light/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      'primary': 'text-primary',
      'secondary': 'text-secondary', 
      'educational-blue': 'text-educational-blue',
      'accent': 'text-accent'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="offerings" className="py-20 bg-gradient-to-br from-white to-secondary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational solutions designed to transform learning outcomes and 
            strengthen educational systems through evidence-based approaches
          </p>
        </div>

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
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <Card 
                key={index}
                className={`shadow-medium hover:shadow-strong transition-all duration-500 border-0 bg-gradient-to-br ${getColorClasses(offering.color)} group hover:-translate-y-2 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${offering.color} to-${offering.color}/80 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-primary/80 transition-colors">
                        {offering.title}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-accent rounded-full mt-2"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${offering.color}`}></div>
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    className={`w-full mt-auto group/btn border-${offering.color}/30 hover:bg-${offering.color}/5 ${getIconColor(offering.color)} hover:${getIconColor(offering.color)}/80`}
                  >
                    Learn More
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

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