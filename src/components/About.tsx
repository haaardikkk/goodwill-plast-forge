import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Factory, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "State-of-the-Art Manufacturing",
      description: "Advanced production facilities with latest technology and quality control systems"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Team",
      description: "15+ years of industry experience with dedicated engineers and quality specialists"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Serving B2B clients worldwide with reliable supply chain and logistics network"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified Manufacturing",
    "UN Certified Packaging Solutions",
    "Food Grade Material Compliance",
    "Environmental Safety Standards",
    "24/7 Quality Assurance Testing",
    "Custom Design Capabilities"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="flex items-center space-x-2 text-primary mb-4">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-medium">ABOUT US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Leading 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> HDPE</span>
                <br />Manufacturer
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                GoodWill Plast has been at the forefront of HDPE container manufacturing for over 15 years, 
                providing premium quality drums, containers, and jars to businesses across various industries.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {features.map((feature, index) => (
            <Card key={index} className="bg-surface-dark border-border hover:border-primary transition-all duration-500 group hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-surface rounded-lg flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;