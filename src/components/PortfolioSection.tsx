import { useState } from "react";
import { ExternalLink, Calendar, User, Tag, CheckCircle2, X, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    title: "Enclosure Design",
    category: "Industrial",
    image: "https://static.wixstatic.com/media/b06cc2_9f4bc9a3ad754c18bbdc62760fedb9be~mv2.png",
    description: "Custom industrial enclosure design optimized for thermal management and durability in harsh environments. This project involved complex surfacing and validation.",
    client: "TechCorp Industries",
    year: "2024",
    tags: ["SolidWorks", "Thermal Analysis", "DFM"],
    deliverables: ["3D CAD Models", "Thermal Simulation Report", "2D Dxf Files"]
  },
  {
    title: "Fixture Nest Block",
    category: "Tooling",
    image: "https://static.wixstatic.com/media/b06cc2_1fa2fb07988c4695abb7bbac6c3c8462~mv2.png",
    description: "Precision fixture nest block tailored for high-volume automated assembly processes. Engineered to hold components with zero tolerance deviation.",
    client: "AutoMate Systems",
    year: "2023",
    tags: ["CNC Programming", "Fixture Design", "Metrology"],
    deliverables: ["Assembly Fixture", "G-Code", "Setup Sheet"]
  },
  {
    title: "Mold Flow Analysis",
    category: "Analysis",
    image: "https://static.wixstatic.com/media/b06cc2_b558e4135ebf452e90d093bc2df064cc~mv2.jpg",
    description: "Comprehensive mold flow analysis to predict filling patterns, weld lines, and potential air traps, ensuring a defect-free injection molding process.",
    client: "Plastico Solutions",
    year: "2024",
    tags: ["Moldflow Insight", "Process Optimization", "Rheology"],
    deliverables: ["Flow Analysis Report", "Cooling Optimization", "Warpage Prediction"]
  },
  {
    title: "CAM/CNC Programming",
    category: "Manufacturing",
    image: "https://static.wixstatic.com/media/b06cc2_b2e975ac88af4d0f9c78f5726f05c67e~mv2.png",
    description: "Advanced CAM/CNC programming for complex geometries and tight tolerances. Utilized 5-axis strategies to reduce setup time and improve surface finish.",
    client: "AeroParts Mfg",
    year: "2023",
    tags: ["Mastercam", "5-Axis", "High-Speed Machining"],
    deliverables: ["NC Programs", "Tool List", "Simulation Verification"]
  },
  {
    title: "Technical Drawing",
    category: "Documentation",
    image: "https://static.wixstatic.com/media/b06cc2_233c6fe2b72b42539762ad0533780339~mv2.png",
    description: "Detailed GD&T technical drawings ensuring manufacturing precision. Follows ASME Y14.5 standards for clear communication of design intent.",
    client: "Precision Gearworks",
    year: "2024",
    tags: ["GD&T", "Drafting", "ASME Y14.5"],
    deliverables: ["Manufacturing Prints", "Assembly Drawings", "BOM"]
  },
  {
    title: "Injection Mold Design",
    category: "Tooling",
    image: "https://static.wixstatic.com/media/b06cc2_69ad1842e2804878b664206f18f93ea3~mv2.png",
    description: "High-efficiency injection mold design for scalable plastic component production. Features conformal cooling and rapid ejection systems.",
    client: "ConsumerPlast Inc.",
    year: "2023",
    tags: ["Mold Design", "Injection Molding", "Multi-Cavity"],
    deliverables: ["3D Mold Design", "Electrode Design", "Component Drawings"]
  },
];

const categories = ["All", "Industrial", "Tooling", "Analysis", "Manufacturing", "Documentation"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleProjectClick = (item: typeof portfolioItems[0]) => {
    setImageLoading(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The Possibilities Are <span className="gradient-text">Endless</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of precision engineering projects across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.title}
              onClick={() => handleProjectClick(item)}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-500 animate-scale-in opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-medium mb-2">{item.category}</span>
                <h3 className="text-primary-foreground text-xl font-bold mb-3">{item.title}</h3>
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Item Dialog */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && handleClose()}>
          <DialogContent className="max-w-7xl w-full bg-card border-border p-0 overflow-hidden sm:rounded-2xl max-h-[95vh] flex flex-col sm:block ring-1 ring-border/50 shadow-2xl">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:bg-background transition-all"
            >
              <span className="sr-only">Close</span>
              <X className="w-5 h-5" />
            </button>

            {selectedItem && (
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section - Main visual focus */}
                <div className="w-full lg:w-9/12 h-[40vh] lg:h-auto relative bg-gradient-to-br from-muted/30 to-background flex items-center justify-center p-8 lg:p-16 overflow-hidden group">
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                  {/* Decorative glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />

                  {/* Loader */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    </div>
                  )}

                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    onLoad={() => setImageLoading(false)}
                    className={cn(
                      "relative z-10 w-full h-full object-contain drop-shadow-2xl transition-all duration-700 ease-out rounded-2xl",
                      imageLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    )}
                  />

                  <div className={cn(
                    "absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2 pointer-events-none transition-opacity duration-500",
                    imageLoading ? "opacity-0" : "opacity-100"
                  )}>
                    {selectedItem.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-md text-foreground border-border/50 shadow-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Details Section - Information & Context */}
                <div className="w-full lg:w-3/12 p-6 lg:p-8 flex flex-col bg-card/50 backdrop-blur-xl border-l border-border h-full overflow-y-auto">
                  <DialogHeader className="text-left space-y-4 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                        <Tag className="w-4 h-4" />
                        {selectedItem.category}
                      </div>
                      <DialogTitle className="text-3xl font-bold leading-tight">
                        <span className="gradient-text">{selectedItem.title}</span>
                      </DialogTitle>
                    </div>
                  </DialogHeader>

                  <div className="space-y-8 flex-grow">
                    <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                      {selectedItem.description}
                    </DialogDescription>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 gap-4 py-6 border-y border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                          <User className="w-4 h-4" /> Client
                        </span>
                        <p className="font-medium text-foreground text-sm">{selectedItem.client}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> Year
                        </span>
                        <p className="font-medium text-foreground text-sm">{selectedItem.year}</p>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div>
                      <span className="text-sm font-semibold text-foreground mb-4 block">Key Deliverables</span>
                      <ul className="space-y-3">
                        {selectedItem.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm group/item">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
