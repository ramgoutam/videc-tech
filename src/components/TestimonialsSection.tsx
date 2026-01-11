import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonials Component */}
        <div className="w-full">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
