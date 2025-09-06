import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: ["sales@goodwillplast.com", "info@goodwillplast.com"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Address",
      details: ["123 Industrial Park", "Manufacturing District, State 12345"]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium">GET IN TOUCH</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact our expert team for custom quotes, product inquiries, or technical support. 
            We're here to help you find the perfect HDPE solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 animate-fade-in-up">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-500 group hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-surface rounded-lg flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-all duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="bg-card border-border hover:shadow-glow transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <Input placeholder="Your company name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Person *</label>
                      <Input placeholder="Your full name" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input placeholder="Your phone number" className="bg-background border-border" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Product Interest</label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select product category</option>
                      <option>HDPE Drums</option>
                      <option>Storage Containers</option>
                      <option>Specialty Jars</option>
                      <option>Custom Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your requirements, quantities, specifications, etc."
                      className="min-h-32 bg-background border-border"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-industrial hover:shadow-glow hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;