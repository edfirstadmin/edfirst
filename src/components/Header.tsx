import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const topLevelItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Our Work" },
    { id: "offerings", label: "Offerings" },
    { id: "feedback", label: "Feedback" },
    { id: "testimonials", label: "Testimonials" },
    { id: "registration", label: "Registration Certifications/Partner" },
  ];

  const aboutUsItems = [
    { id: "about", label: "About" },
    { id: "advisory", label: "Advisory Board" },
    { id: "support", label: "Support" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/edfirst-data/logo.png" 
              alt="Ed-fIRST Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Other top-level items */}
                {topLevelItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <Button
                        variant={activeSection === item.id ? "default" : "ghost"}
                        className="text-sm px-3 py-1.5"
                        onClick={() => onSectionChange(item.id)}
                      >
                        {item.label}
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* About Us dropdown - positioned at the end and anchored under trigger */}
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="text-sm px-3 py-1.5 group"
                        variant={aboutUsItems.some((i) => i.id === activeSection) ? "default" : "ghost"}
                      >
                        About Us
                        <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="end" className="p-3">
                      <div className="space-y-2.5">
                        {aboutUsItems.map((item) => (
                          <DropdownMenuItem key={item.id} asChild>
                            <Button
                              variant={activeSection === item.id ? "default" : "ghost"}
                              className="w-full justify-start py-2"
                              onClick={() => onSectionChange(item.id)}
                            >
                              {item.label}
                            </Button>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="grid gap-2">
              {/* Other top-level items */}
              {topLevelItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}

              {/* About Us group - positioned at the end */}
              <div>
                <div className="text-sm font-medium text-muted-foreground px-2 py-1">
                  About Us
                </div>
                {aboutUsItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
