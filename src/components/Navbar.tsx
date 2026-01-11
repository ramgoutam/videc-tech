import { useState, useEffect } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Layers, FileText, Briefcase, User, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services', icon: Layers },
    { name: 'Process', url: '#process', icon: FileText },
    { name: 'Portfolio', url: '#portfolio', icon: Briefcase },
    { name: 'Testimonials', url: '#testimonials', icon: User },
    { name: 'Contact', url: '#contact', icon: Phone }
  ];

  return (
    <>
      {/* Logo - Fixed Position */}
      {/* Logo - Fixed Position */}
      <a href="#home" className="fixed top-4 left-4 z-50 flex items-center gap-2 md:top-6 md:left-6 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-4 rounded-full shadow-lg hover:bg-black/60 transition-all duration-300">
        <div className="flex items-center">
          <img
            src="/videc-logo-white.png"
            alt="VIDEC Tech Solutions"
            className="h-8 w-auto md:h-10 object-contain"
          />
          <div className="ml-2 flex flex-col leading-none">
            <span className="text-xs md:text-sm font-bold text-white/90">Tech</span>
            <span className="text-xs md:text-sm font-bold text-white/90">Solutions</span>
          </div>
        </div>
      </a>

      {/* Tubelight Navbar */}
      <NavBar items={navItems} />
    </>
  );
};

export default Navbar;
