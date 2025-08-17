import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Target, FileText, Languages } from "lucide-react";
import { useState } from "react";

const supplementaryImages = [
  "/lovable-uploads/191a6a71-b3f4-4a0c-9054-320c59dacd8e.png",
  "/lovable-uploads/298f05da-de21-4e91-9ec0-952064730f0a.png",
];

const bilingualImages = [
  "/lovable-uploads/ed426868-d309-4bcf-a37f-a4f4e6ab601c.png",
  "/lovable-uploads/298f05da-de21-4e91-9ec0-952064730f0a.png"
];

const lecImages = [
  "/lovable-uploads/LEC_1.png",
  "/lovable-uploads/LEC_2.png",
  "/lovable-uploads/LEC_3.png"
];

const WorkSection = () => {
  const workCategories = [
    {
      title: "Training Workshops",
      icon: Users,
      color: "primary",
      items: [
        {
          name: "Awareness Raising Workshop on Effective Pedagogical and Assessment Practices",
          image: "/lovable-uploads/3a9aa7e1-cbdd-47bf-9dbe-b6a5a868292c.png",
          description: "Comprehensive workshops focused on improving teaching methodologies and assessment strategies"
        },
        {
          name: "Effective Pedagogical Practices in Preparatory Classes",
          description: "Specialized training conducted at N.P. Boys Sr. Sec. School, Mandir Marg, New Delhi"
        },
        {
          name: "In-Service Teacher Training for Secondary Classes",
          image: "/lovable-uploads/381fa553-4f73-4334-b540-fe3b65517d1a.png",
          description: "Professional development programs for secondary school educators"
        }
      ]
    },
    {
      title: "Hub and Spoke ‘Mentoring the Mentor’", 
      icon: Award,
      color: "secondary",
      items: [
        {
          name: "Master Trainer Workshop on Achieving Learning Outcomes at Preparatory and Middle Level",
          image: "/lovable-uploads/108ebe96-ca48-4854-bd44-03c1ce3d208e.png",
          description: "Advanced training for education leaders and master trainers"
        },
        {
          name: "Training on the Use of Learning Enhancement Cards",
          description: "Innovative tools and methods for enhanced learning experiences"
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: BookOpen, 
      color: "educational-blue",
      items: [
        {
          name: "Science for Little Learners",
          image: "/lovable-uploads/ed426868-d309-4bcf-a37f-a4f4e6ab601c.png",
          description: "Engaging science curriculum designed for young learners"
        },
        {
          name: "Fun with Grammar",
          image: "/lovable-uploads/191a6a71-b3f4-4a0c-9054-320c59dacd8e.png", 
          description: "Interactive grammar learning materials for Grade 4 students"
        },
        {
          name: "Word Search Activities",
          image: "/lovable-uploads/298f05da-de21-4e91-9ec0-952064730f0a.png",
          description: "Level-1 word search puzzles for vocabulary development"
        }
      ]
    },
    {
      title: "Publications",
      icon: FileText,
      color: "accent",
      items: [
        {
          name: "Supplementary Books",
          description: "Comprehensive educational materials supporting curriculum objectives"
        },
        {
          name: "Bilingual Books/ Multilingual Books", 
          description: "Multi-language educational resources promoting inclusive learning"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary': return 'from-primary/20 to-primary-light/30';
      case 'secondary': return 'from-secondary/20 to-secondary-light/30'; 
      case 'educational-blue': return 'from-educational-blue/20 to-educational-blue-light/30';
      case 'accent': return 'from-accent/20 to-accent-light/30';
      default: return 'from-primary/20 to-primary-light/30';
    }
  };

  const [galleryOpen, setGalleryOpen] = useState<null | "supplementary" | "bilingual">(null);
  const [lecGalleryOpen, setLecGalleryOpen] = useState(false);

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-accent-light/5 to-primary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs and resources driving educational excellence across all levels
          </p>
        </div>

        {/* Work Categories */}
        <div className="space-y-16">
          {workCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="animate-fade-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${category.color} to-${category.color}/80 rounded-xl flex items-center justify-center shadow-medium`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary">{category.title}</h3>
                    <div className="w-24 h-1 bg-gradient-accent rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Category Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => {
                    // Special handling for "Training on the Use of Learning Enhancement Cards"
                    if (
                      category.title === "Hub and Spoke ‘Mentoring the Mentor’" &&
                      item.name === "Training on the Use of Learning Enhancement Cards"
                    ) {
                      return (
                        <div key={itemIndex} className="shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-gradient-to-br from-secondary/20 to-secondary-light/30 hover:scale-105 group rounded-lg p-6 flex flex-col items-center">
                          <div
                            className="mb-4 overflow-hidden rounded-lg cursor-pointer w-full"
                            onClick={() => setLecGalleryOpen(true)}
                          >
                            <img
                              src={lecImages[0]}
                              alt="Learning Enhancement Card"
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="space-y-3 text-center">
                            <h4 className="text-lg font-bold text-primary leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    }
                    // Default rendering for other items
                    return (
                      <Card
                        key={itemIndex}
                        className={`shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-gradient-to-br ${getColorClasses(category.color)} hover:scale-105 group`}
                      >
                        <CardContent className="p-6">
                          {item.image && (
                            <div className="mb-4 overflow-hidden rounded-lg">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="space-y-3">
                            <h4 className="text-lg font-bold text-primary leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="shadow-medium border-0 bg-gradient-primary max-w-3xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">Join Our Educational Journey</h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Discover how our comprehensive programs and innovative resources can transform 
                educational outcomes in your institution. Let us work together to raise better schools and create lasting impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" className="group">
                  <Languages className="group-hover:scale-110 transition-transform" />
                  View Resources
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Target className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Supplementary Books Gallery Modal */}
      {galleryOpen === "supplementary" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={() => setGalleryOpen(null)}
              aria-label="Close Gallery"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Supplementary Books Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {supplementaryImages.map((src, idx) => (
                <div key={idx} className="rounded overflow-hidden shadow">
                  <img
                    src={src}
                    alt={`Supplementary Book ${idx + 1}`}
                    width={200}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bilingual/Multilingual Books Gallery Modal */}
      {galleryOpen === "bilingual" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={() => setGalleryOpen(null)}
              aria-label="Close Gallery"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Bilingual/Multilingual Books Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bilingualImages.map((src, idx) => (
                <div key={idx} className="rounded overflow-hidden shadow">
                  <img
                    src={src}
                    alt={`Bilingual/Multilingual Book ${idx + 1}`}
                    width={200}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LEC Image Gallery Modal */}
      {lecGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={() => setLecGalleryOpen(false)}
              aria-label="Close Gallery"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Learning Enhancement Cards Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {lecImages.map((src, idx) => (
                <div key={idx} className="rounded overflow-hidden shadow">
                  <img
                    src={src}
                    alt={`LEC ${idx + 1}`}
                    width={200}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;