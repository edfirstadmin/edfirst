import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, HandHeart, ArrowRight, CheckCircle } from "lucide-react";

const SupportSection = () => {
  const volunteerBenefits = [
    "Make a meaningful impact in education",
    "Gain valuable experience in educational technology",
    "Work with diverse communities and learners",
    "Contribute to AI-driven educational innovation",
    "Build professional networks in education",
    "Develop leadership and mentoring skills"
  ];

  const volunteerOpportunities = [
    {
      title: "Teacher Training Assistant",
      description: "Support our master trainers in conducting workshops and training sessions",
      commitment: "4-6 hours per week"
    },
    {
      title: "Content Development Volunteer", 
      description: "Help create educational materials and supplementary resources",
      commitment: "Flexible hours"
    },
    {
      title: "Community Outreach Coordinator",
      description: "Assist in connecting with schools and educational institutions",
      commitment: "8-10 hours per month"
    },
    {
      title: "Technology Support Volunteer",
      description: "Help implement and support AI-driven educational tools",
      commitment: "As needed basis"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gradient-to-br from-heart-light/5 to-primary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-medium">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Support Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us as a volunteer and help transform education through AI-driven innovation. 
            Your contribution can make a lasting impact on learners worldwide.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Why Volunteer */}
          <Card className="shadow-medium border-0 bg-gradient-to-br from-secondary-light/10 to-white animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
                  <HandHeart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Why Volunteer with Us?</h3>
              </div>

              <div className="space-y-4">
                {volunteerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Make a Difference</h4>
                <p className="text-muted-foreground">
                  Every hour you contribute helps us reach more educators and learners, 
                  creating ripple effects that transform educational outcomes globally.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Opportunities */}
          <Card className="shadow-medium border-0 bg-gradient-to-br from-primary-light/10 to-white animate-fade-up">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Volunteer Opportunities</h3>
              </div>

              <div className="space-y-6">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-200">
                    <h4 className="font-semibold text-primary mb-2">{opportunity.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {opportunity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {opportunity.commitment}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Process */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-accent-light/10 to-white mb-16 animate-fade-up">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">How to Get Started</h3>
              <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Apply Online</h4>
                <p className="text-muted-foreground text-sm">
                  Fill out our volunteer application form with your interests and availability
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Interview & Orientation</h4>
                <p className="text-muted-foreground text-sm">
                  Brief interview followed by comprehensive orientation about our mission and methods
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Start Contributing</h4>
                <p className="text-muted-foreground text-sm">
                  Begin your volunteer journey and start making an impact in education
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Card className="shadow-strong border-0 bg-gradient-primary max-w-3xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Make a Difference?</h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Join our community of passionate volunteers and help us transform education through 
                innovative approaches and AI-driven solutions. Together, we can create lasting impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" className="group">
                  <Heart className="group-hover:scale-110 transition-transform" />
                  Become a Volunteer
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;