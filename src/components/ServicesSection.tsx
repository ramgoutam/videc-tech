import { Boxes, Cog, FileText, Printer, Wrench, Gauge } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const services = [
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "3D Modeling",
    description: "Precise 3D CAD models for manufacturing, visualization, and prototyping with industry-leading accuracy.",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Industrial Design",
    description: "Innovative product designs that blend aesthetics with functionality for market-ready solutions.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Tool Design",
    description: "Custom tooling solutions including molds, fixtures, and jigs optimized for production efficiency.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Technical Drawings",
    description: "Detailed engineering drawings with GD&T specifications ready for manufacturing.",
  },
  {
    icon: <Printer className="h-6 w-6" />,
    title: "3D Print Design",
    description: "Optimized designs for additive manufacturing with support for all major 3D printing technologies.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Mold Flow Analysis",
    description: "Advanced simulation to optimize injection molding processes and prevent defects.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Engineering Excellence
            <br />
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to production, we provide comprehensive design and engineering services
            tailored to meet your specific needs.
          </p>
        </div>

        {/* Hover Effect Features Section */}
        <div className="max-w-7xl mx-auto">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
