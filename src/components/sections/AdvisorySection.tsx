import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users } from "lucide-react";

const AdvisorySection = () => {
  const advisoryMembers = [
    {
      name: "Professor Manoj K. Harbola",
      image: "/lovable-uploads/1e0440e1-b322-467c-a356-d9f4a6a5ac21.png",
      description: "Professor Manoj K. Harbola is a renowned theoretical physicist and faculty member at the Indian Institute of Technology (IIT) Kanpur. With expertise in density functional theory and quantum mechanics, he has made significant contributions to the study of electronic structure in atoms, molecules, and solids. A recipient of the Excellence in Teaching Award at IIT Kanpur, Professor Harbola is also a popular educator through NPTEL and Swayam platforms. His deep academic insight and commitment to scientific education make him a valuable member of our advisory board.",
      icon: GraduationCap
    },
    {
      name: "Professor Gautam Biswas", 
      image: "/lovable-uploads/12da7085-2c4e-48ad-9d18-a022e4534ad1.png",
      description: "Professor Gautam Biswas is currently Senior Professor Emeritus at BITS Pilani, K.K. Birla Goa Campus. He is a former Director of IIT Guwahati and CSIR-CMERI, Durgapur, and has served as Dean and Chair Professor at IIT Kanpur. A J.C. Bose National Fellow, he is a Fellow of all major Indian science and engineering academies (INSA, IAS, NASI, INAE) and ASME. Widely respected for his pioneering research in fluid mechanics, heat transfer, and microfluidics, Professor Biswas received the 2023 ASME Heat Transfer Memorial Award. With over 150 publications and decades of academic leadership, he brings invaluable expertise to our advisory board.",
      icon: Award
    },
    {
      name: "Professor K. C. Patra",
      image: "/lovable-uploads/590f6bdc-b0f1-4088-a06c-52e66ec07c7a.png", 
      description: "Professor K. C. Patra is a senior faculty member in Civil Engineering at NIT Rourkela, with expertise in Water Resources, Hydraulics, and Fluid Mechanics. A PhD from IIT Kharagpur, he received the Samanta Chandrasekhar Award for his contributions to science and engineering. With over two decades of academic and research experience, he brings valuable technical and strategic insight to our advisory board.",
      icon: Users
    },
    {
      name: "Danny Bharat",
      image: "/lovable-uploads/danny-bharat.png",
      description: "Danny Bharat, Founder & President of Arkimetrix Analytics, brings three decades of CFO and senior finance leadership across organizations ranging from global Fortune 500 companies to high-growth enterprises. A graduate of IIT BHU (Biochemical Engineering) with an MBA from Ivey School of Business, Danny has held senior finance roles at PepsiCo, Wolseley, and other leading organizations spanning manufacturing, distribution, and services sectors. He is known for driving financial transformation, operational excellence, and strategic growth initiatives that bridge finance, operations, and executive leadership.",
      icon: GraduationCap
    },
    {
      name: "Dr. Navina Jafa",
      image: "/lovable-uploads/navina-jafa.png",
      description: "Dr. Navina Jafa, acclaimed Kathak dancer, cultural scholar, and Fulbright Scholar, has worked extensively with the Ministry of Tourism, Government of India. She pioneered “Performance Heritage”, blending storytelling with live artistic displays to create immersive cultural experiences. Author of Exhibiting India: Art of Heritage Walks, she has curated journeys for global leaders, royalty, and corporate executives, integrating culture, education, and sustainability to connect grassroots communities with global audiences.",
      icon: GraduationCap
    },
    {
      name: "Professor Chand Kiran Saluja",
      image: "/lovable-uploads/chand-kiran.png",
      description: "Professor Chand Kiran Saluja, an eminent Sanskrit scholar and President’s Certificate of Honour awardee, served nearly three decades at the University of Delhi pioneering the Communicative Approach to Sanskrit teaching. As Director–Academics at the Samskrit Promotion Foundation, he has led the creation of over 70 “Sanskrit for Specific Purpose” titles across fields like Yoga, Ayurveda, and Arts. Recipient of the Vishwabharati Award, he continues to shape innovative pedagogy and curriculum to make Sanskrit accessible and relevant.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="advisory" className="py-20 bg-gradient-to-br from-secondary-light/10 to-educational-blue-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Advisory Board</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished academics and thought leaders guiding our mission for educational excellence
          </p>
        </div>

        {/* Advisory Members */}
        <div className="space-y-12">
          {advisoryMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className={`shadow-medium hover:shadow-strong transition-all duration-500 border-0 animate-fade-up bg-gradient-to-br from-white to-${index % 2 === 0 ? 'primary' : 'secondary'}-light/5`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 lg:p-12">
                  <div className={`grid lg:grid-cols-${index % 2 === 0 ? '3' : '3'} gap-8 items-center`}>
                    {/* Image */}
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'} flex justify-center`}>
                      <div className="relative group">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-medium group-hover:shadow-strong transition-all duration-300">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                          {member.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-accent rounded-full mb-4"></div>
                      </div>
                      
                      <p className="text-lg text-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="shadow-medium border-0 bg-gradient-primary max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
              <p className="text-white/90 text-lg">
                Our advisory board brings decades of academic excellence and research expertise 
                to guide Ed-fIRST's mission of transforming education through innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;