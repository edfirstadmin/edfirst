import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const missionObjectives = [
    "Equip educators and leaders with transformative AI tools",
    "Improve student outcomes through data-driven strategies", 
    "Promote equity, inclusion, and lifelong learning",
    "Drive scalable, research-based systemic change"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Ed-fIRST</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Believe to Achieve - Transforming education through innovation and excellence
          </p>
        </div>

        {/* Main About Content */}
        <div className="mb-16 animate-fade-up">
          <Card className="shadow-medium border-0 bg-gradient-to-br from-white to-primary-light/5">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Who We Are</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Ed- fIRST as an independent leader in advancing academic excellence across school and higher education, is dedicated to empowering educators, leaders, and learners from preschool to beyond. Through targeted teacher capacity-building programs, we strengthen skills in Foundational Literacy, Numeracy, higher order thinking skills, problem solving skills, formative and summative assessments, curriculum design, and innovative pedagogy.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    Committed to addressing gender and equity challenges, we integrate cutting-edge interventions, 
                    including Artificial Intelligence and whole-school assessment strategies, to foster inclusive, 
                    high-quality learning environments. Our vision—transforming education through AI-driven 
                    innovation—champions excellence and equity by pioneering adaptive curricula, holistic 
                    assessments, and inclusive pedagogies, nurturing the whole child and driving lasting, 
                    equitable impact across the educational spectrum.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <Card className="shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-up border-0 bg-gradient-to-br from-secondary-light/20 to-white">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Advancing Education through AI-Driven Innovation across School and higher education. Our vision focuses on nurturing each learner and redefining knowledge frameworks to promote lifelong learning and integrate sustainable, equitable outcomes, both in school and Higher education.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-up border-0 bg-gradient-to-br from-primary-light/20 to-white">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Ed-first aims to transform education by driving innovation in curriculum designEffective Pedagogical Practices at Preparatory Level, assessment, 
                and pedagogy, powered by artificial intelligence. Committed to excellence and equity, 
                we at Ed-first strive to nurture the whole child and reimagine school systems for 
                lasting and meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Objectives */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-accent-light/10 to-white animate-fade-up">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Mission Objectives</h3>
              <p className="text-muted-foreground text-lg">We aim to achieve transformative change through these key objectives</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {missionObjectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;