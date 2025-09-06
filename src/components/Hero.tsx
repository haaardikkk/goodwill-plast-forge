import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-drums.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Industrial HDPE containers" 
          className="w-full h-full object-cover opacity-30 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-hero animate-glow-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4 animate-entrance">
              <div className="flex items-center space-x-2 text-primary">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-medium">B2B HDPE SOLUTIONS</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-entrance-delay-1">
                Premium 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> HDPE</span>
                <br />Containers
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-entrance-delay-2">
                Leading manufacturer of high-quality HDPE drums, containers, and jars for industrial and commercial applications. Trusted by businesses worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-entrance-delay-3">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">B2B Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in">
              <Button size="lg" className="bg-gradient-primary shadow-industrial hover:shadow-glow hover:scale-105 transition-all duration-300">
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                Request Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="w-full h-96 lg:h-[500px] bg-gradient-surface rounded-2xl shadow-glow animate-float hover:shadow-industrial transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl animate-glow-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-primary rounded-full animate-bounce-in opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;