import { MessageSquare, Lightbulb, RefreshCw, Package } from "lucide-react";
import { ContainerScroll, CardsContainer, CardTransformed } from "@/components/ui/animated-cards-stack";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We discuss your vision, requirements, timeline, and budget to fully understand your project needs.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Concept Development",
    description: "Our designers create detailed sketches and renders using cutting-edge software to visualize your ideas.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Review & Refine",
    description: "We collaborate closely, gathering feedback and iterating until the design perfectly matches your vision.",
  },
  {
    icon: Package,
    number: "04",
    title: "Final Delivery",
    description: "Receive your finished 3D models, documentation, and ongoing support to ensure complete satisfaction.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-muted/30">
      <ContainerScroll className="h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-24 pb-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 relative z-10 px-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and complete client satisfaction at every step.
            </p>
          </div>

          <CardsContainer className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-xl h-[400px]">
            {steps.map((step, index) => (
              <CardTransformed
                key={step.number}
                arrayLength={steps.length}
                index={index + 1}
                variant="dark"
                className="group bg-neutral-900/95 border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
                incrementRotation={index * 2 - 3} // subtle rotation
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none opacity-50" />

                <div className="flex flex-col items-center text-center h-full justify-center relative z-10 w-full px-8">
                  {/* Glowing Icon */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                      <step.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 tracking-tight relative z-20 drop-shadow-lg">{step.title}</h3>

                  <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-8 opacity-90 shadow-[0_0_10px_2px_rgba(var(--primary),0.3)]" />

                  <p className="text-neutral-300 text-xl leading-relaxed relative z-20 font-medium tracking-wide max-w-[90%]">
                    {step.description}
                  </p>

                  {/* Watermark Number */}
                  <div className="absolute -bottom-16 -right-8 text-[12rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none z-10 transition-transform duration-700 group-hover:scale-110 group-hover:text-white/[0.06]">
                    {step.number}
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ProcessSection;
