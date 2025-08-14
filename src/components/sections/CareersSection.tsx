import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Users, Lightbulb, ArrowRight, CheckCircle, Star } from "lucide-react";

const CareersSection = () => {
  const benefits = [
    "Competitive compensation packages",
    "Professional development opportunities", 
    "Work with cutting-edge AI educational technologies",
    "Make meaningful impact in education"
  ];

  const openPositions = [
    {
      title: "AI Learning Specialist", 
      department: "Technology",
      type: "Full-time", 
      location: "Gurgaon",
      description: "Develop and implement AI-driven educational tools and assessment frameworks",
      requirements: ["Computer Science/AI background", "Educational technology experience", "Python/ML skills"]
    },
    {
      title: "Research Associate",
      department: "Assessment & Evaluation", 
      type: "Contract",
      location: "Gurgaon",
      description: "Support state assessment surveys and educational effectiveness research",
      requirements: ["Research methodology", "Statistical analysis", "Education background preferred"]
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative approaches to solve educational challenges",
      icon: Lightbulb
    },
    {
      title: "Collaborative Growth",
      description: "We believe in learning together and supporting each other's professional development", 
      icon: Users
    },
    {
      title: "Excellence in Education",
      description: "We are committed to the highest standards in educational quality and outcomes",
      icon: Star
    },
    {
      title: "Inclusive Impact",
      description: "We strive to create equitable opportunities for all learners and educators",
      icon: GraduationCap
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-educational-blue-light/5 to-accent-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-educational-blue rounded-full flex items-center justify-center shadow-medium">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career with Ed-fIRST and help shape the future of education through 
            innovation, technology, and meaningful impact.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className="shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-gradient-to-br from-white to-primary-light/5 group hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Work With Us */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-secondary-light/10 to-white mb-16 animate-fade-up">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-6">Why Work With Ed-fIRST?</h3>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Join a mission-driven organization that's at the forefront of educational innovation. 
                  We offer more than just a job – we provide a platform to create lasting impact in 
                  the lives of educators and learners worldwide.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-1">Innovation Hub</h4>
                      <p className="text-sm text-muted-foreground">Work with AI-driven educational tools</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-1">Global Impact</h4>
                      <p className="text-sm text-muted-foreground">Transform education worldwide</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-1">Growth Focused</h4>
                      <p className="text-sm text-muted-foreground">Continuous learning opportunities</p>
                    </div>
                    <div className="bg-educational-blue/10 rounded-lg p-4">
                      <h4 className="font-semibold text-educational-blue mb-1">Collaborative</h4>
                      <p className="text-sm text-muted-foreground">Work with expert teams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Open Positions */}
        <div className="mb-16 animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Current Openings</h3>
            <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-gradient-to-br from-white to-accent-light/5 group"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h4 className="text-xl font-bold text-primary">{position.title}</h4>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                          {position.location}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">{position.description}</p>
                      
                      <div>
                        <h5 className="font-semibold text-primary mb-2">Key Requirements:</h5>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <span key={reqIndex} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <span className="text-sm text-muted-foreground font-medium">{position.department}</span>
                      <Button className="group w-full">
                        Apply Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Card className="shadow-strong border-0 bg-gradient-primary max-w-3xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">Don't See the Right Role?</h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                We're always looking for passionate individuals who share our vision for transforming education. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" className="group">
                  <GraduationCap className="group-hover:scale-110 transition-transform" />
                  Submit Your Resume
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View All Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;