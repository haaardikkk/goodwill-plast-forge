import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsImage from "@/assets/products-collection.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "HDPE Drums",
      description: "Heavy-duty drums for chemical storage and industrial applications",
      features: ["200L - 1000L capacity", "Chemical resistant", "UN certified"],
      image: productsImage
    },
    {
      title: "Storage Containers",
      description: "Versatile containers for various industrial storage needs",
      features: ["5L - 500L capacity", "Food grade options", "Stackable design"],
      image: productsImage
    },
    {
      title: "Specialty Jars",
      description: "Custom jars for pharmaceutical and food industries",
      features: ["Wide mouth design", "Tamper-evident", "Custom labeling"],
      image: productsImage
    }
  ];

  return (
    <section id="products" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium">OUR PRODUCTS</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Range of 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> HDPE Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From industrial drums to specialty containers, we provide comprehensive HDPE solutions 
            tailored to your business requirements.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="group bg-card border-border hover:border-primary transition-all duration-500 overflow-hidden hover:shadow-industrial hover-lift animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-primary/20 transition-all duration-500"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-glow transition-all duration-300">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-surface rounded-2xl p-8 shadow-glow animate-fade-in-up hover-lift">
          <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team can design and manufacture custom HDPE products to meet your specific requirements. 
            Contact us for personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-industrial hover:shadow-glow hover:scale-105 transition-all duration-300">
              Request Custom Quote
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;