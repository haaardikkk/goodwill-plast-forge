import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border animate-slide-in-up">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce-in">
              <span className="text-primary-foreground font-bold text-lg">GP</span>
            </div>
            <div className="animate-fade-in-up">
              <h1 className="text-xl font-bold text-foreground">GoodWill Plast</h1>
              <p className="text-xs text-muted-foreground">HDPE Solutions</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-up">
            <a href="#home" className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300">Home</a>
            <a href="#products" className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300">Products</a>
            <a href="#about" className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300">About</a>
            <a href="#contact" className="text-foreground hover:text-primary hover:scale-110 transition-all duration-300">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;