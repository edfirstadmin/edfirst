import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from "lucide-react";
import { useState } from "react";

const supplementaryImages = [
  "/edfirst-data/191a6a71-b3f4-4a0c-9054-320c59dacd8e.png",
  "/edfirst-data/298f05da-de21-4e91-9ec0-952064730f0a.png",
];

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

  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 py-16">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <img 
                      src="/edfirst-data/logo.png" 
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
                  <li
                    key={index}
                    className={`text-white/80 text-sm leading-relaxed ${
                      program === "Supplementary Books" ? "cursor-pointer hover:underline" : ""
                    }`}
                    onClick={() => {
                      if (program === "Supplementary Books") setGalleryOpen(true);
                    }}
                  >
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
                      Sector 74, Gurgaon 122004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="w-full flex justify-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <p className="text-white/80">
                    © 2025 Ed-fIRST. All rights reserved.
                  </p>
                </div>
              </div>
              
              {/* <div className="flex items-center space-x-2 text-white/80">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent fill-current" />
                <span>for better education</span>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Image Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={() => setGalleryOpen(false)}
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
    </>
  );
};

export default Footer;