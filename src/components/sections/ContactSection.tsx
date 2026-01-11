import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "support@edfirst.in",
      action: "mailto:support@edfirst.in"
    },
    {
      icon: Phone, 
      title: "Phone",
      detail: "0124-5181339",
      action: "tel:01245181339"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "212, Tower 2, DLF Corporate Greens, Sector 74, Gurgaon 122004",
      action: null
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/edfirstindia", color: "from-blue-600 to-blue-700" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/edfirstindia", color: "from-pink-500 to-purple-500" },
    { name: "X (Twitter)", icon: Twitter, href: "https://x.com/edfirstindia", color: "from-gray-800 to-black" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-light/5 to-secondary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform education together? Get in touch with our team to discuss 
            how Ed-fIRST can support your educational goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <Card className="shadow-strong border-0 bg-gradient-to-br from-white to-accent-light/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="Your phone number"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Organization/Institution
                    </label>
                    <Input 
                      placeholder="Your organization name"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <Input 
                      placeholder="What is this regarding?"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your needs, questions, or how we can help..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full group"
                    size="lg"
                  >
                    <Send className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    * Required fields. We'll get back to you within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <Card className="shadow-strong border-0 bg-gradient-primary max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're an educator, institution, or organization, we're here to support 
                your educational goals with innovative, AI-driven solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Download Our Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;