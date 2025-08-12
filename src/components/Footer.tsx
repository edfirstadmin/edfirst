import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Advisory Board", href: "#advisory" },
    { name: "Our Work", href: "#work" },
    { name: "Offerings", href: "#offerings" },
    { name: "Support", href: "#support" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    "State Assessment Survey (SAS)",
    "Teacher Assessment & Motivation (TAMP)",
    "Teacher Professional Development",
    "CUET Practice Series",
    "Supplementary Books",
    "Bilingual Educational Resources"
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "X (Twitter)", icon: Twitter, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <img 
                    src="/lovable-uploads/logo.png" 
                    alt="Ed-fIRST Logo" 
                    className="w-28 h-28 object-contain"
                  />
              </div>
              <p className="text-white/90 leading-relaxed">
                Advancing education through AI-driven innovation across school and higher education. 
                Transforming learning outcomes with cutting-edge interventions and inclusive pedagogies.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Services */}
          <div>
            <h4 className="font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-white/80 text-sm leading-relaxed">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Email</p>
                  <a href="mailto:support@edfirst.in" className="text-white/80 hover:text-white transition-colors">
                    support@edfirst.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Phone</p>
                  <a href="tel:01245181339" className="text-white/80 hover:text-white transition-colors">
                    0124-5181339
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Address</p>
                  <p className="text-white/80 leading-relaxed">
                    212, Tower 2, DLF Corporate Greens,<br />
                    Sector 74, Gurgaon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on educational innovation, 
              AI-driven learning solutions, and upcoming programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent"
              />
              <Button variant="accent" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-white/80">
                © 2024 Ed-fIRST. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-white/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>for better education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;