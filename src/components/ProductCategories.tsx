import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, CheckCircle, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import productsImage from "@/assets/products-collection.jpg";

const ProductCategories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categories = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: "High-quality product for industrial applications",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    image: productsImage,
    specifications: {
      Capacity: "100L",
      Material: "HDPE",
      Certification: "ISO",
    },
    applications: ["Industry", "Food", "Pharma"],
    benefits: ["Durable", "Reliable", "Easy to use"],
    phone: "+911234567890",
  }));

  const scroll = (direction: "left" | "right") => {
    if (!ref.current) return;
    const scrollAmount = ref.current.offsetWidth * 0.7;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkArrows = () => {
    if (!ref.current) return;
    setCanScrollLeft(ref.current.scrollLeft > 0);
    setCanScrollRight(
      ref.current.scrollLeft + ref.current.clientWidth <
        ref.current.scrollWidth - 1
    );
  };

  useEffect(() => {
    checkArrows();
    const div = ref.current;
    if (!div) return;
    div.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", checkArrows);
    return () => {
      div.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, []);

  const handleDownload = (id: number) => {
    // Simple download functionality - could be enhanced with actual PDF generation
    const link = document.createElement("a");
    link.download = `product-${id}-specs.txt`;
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(`Product ${id} Specifications\n\nContact us for detailed specifications.`);
    link.click();
  };

  return (
    <section className="py-24 bg-surface-dark relative">
      <div className="container mx-auto px-4 relative">
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
          )}

          {/* Scrollable Cards */}
          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar px-[10%]" 
            // px-[10%] centers first and last cards
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-[320px] snap-center relative z-10"
                style={{ 
                  transformOrigin: "center",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                      <Card className="group bg-card border border-border hover:border-primary transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl h-full rounded-2xl">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                        <CardContent className="p-4 flex flex-col h-full">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-all duration-300">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm flex-grow">
                            {category.description}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {category.features.map((f, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2 text-xs"
                              >
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto">
                            <Button
                              variant="outline"
                              className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-glow transition-all duration-300 text-sm"
                            >
                              View Details
                              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>

                  {/* Dialog Content */}
                  <DialogContent
                    id={`card-dialog-${category.id}`}
                    className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 bg-surface-dark rounded-xl"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary mb-4">
                        {category.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Key Features
                          </h4>
                          {category.features.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm mb-1"
                            >
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Specifications
                          </h4>
                          {Object.entries(category.specifications).map(
                            ([k, v]) => (
                              <div
                                key={k}
                                className="flex justify-between py-1 border-b border-border/50 text-sm"
                              >
                                <span className="capitalize">{k}</span>
                                <span>{v}</span>
                              </div>
                            )
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Applications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.applications.map((app, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Benefits
                          </h4>
                          {category.benefits.map((b, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm mb-1"
                            >
                              <Star className="w-4 h-4 text-primary" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button
                            className="flex-1 bg-gradient-primary hover:shadow-glow text-sm"
                            onClick={() =>
                              (window.location.href = `tel:${category.phone}`)
                            }
                          >
                            Get Quote
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 text-sm"
                            onClick={() => handleDownload(category.id)}
                          >
                            Download Specs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          )}
        </div>

        {/* Custom Scrollbar */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            height: 0;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProductCategories;
