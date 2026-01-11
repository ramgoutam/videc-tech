import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Professional 3D Design Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Unlock Your{" "}
            <span className="gradient-text">Imagination</span>
            <br />
            with Our 3D Design
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up stagger-1">
            Expert engineering and design solutions tailored to bring your ideas to life. 
            From concept to production, we deliver precision and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <Button variant="hero" size="xl" className="glow" asChild>
              <a href="#services">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in stagger-3">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">100+</div>
              <div className="text-primary-foreground/60 text-sm md:text-base">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</div>
              <div className="text-primary-foreground/60 text-sm md:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">5+</div>
              <div className="text-primary-foreground/60 text-sm md:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
