import React from 'react';
import { Footer as UI_Footer } from '@/components/ui/footer';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinksData = [
    { label: 'Upwork', href: 'https://www.upwork.com/fl/ramgoutam', icon: <img src="/upwork-logo-black.png" alt="Upwork" className="w-5 h-5 object-contain" /> },
    { label: 'WhatsApp', href: 'https://wa.me/917026303366', icon: <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5 object-contain" /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramgoutam', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'GitHub', href: '', icon: <Github className="w-5 h-5" /> },
  ];

  const usefulLinksData = [
    { label: '3D Modeling', href: '#services' },
    { label: 'Industrial Design', href: '#services' },
    { label: 'Tool Design', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <UI_Footer
      logoSrc="https://static.wixstatic.com/media/b06cc2_1d78298064bf4593856114eb360696a2~mv2.png/v1/fill/w_134,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Videc%20Tech%20Logo.png"
      companyName="VIDEC Tech Solutions"
      description="Professional 3D design and engineering solutions that transform your ideas into reality. Innovation meets precision."
      usefulLinks={usefulLinksData}
      socialLinks={socialLinksData}
      className="bg-background text-black border-t border-border/10"
    />
  );
};

export default Footer;
