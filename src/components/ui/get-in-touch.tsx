"use client"

import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const ProfessionalConnect = () => {
    const [, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialPlatforms = [
        {
            name: 'Upwork',
            icon: <img src="/upwork-logo-white.png" alt="Upwork" className="w-7 h-7 object-contain scale-150" />,
            gradient: 'from-green-500 to-lime-500',
            shadowColor: 'rgba(132, 204, 22, 0.5)',
            link: 'https://www.upwork.com/fl/ramgoutam',
            description: 'Freelance Profile',
            ctaText: 'Hire Me'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-7 h-7" />,
            gradient: 'from-blue-600 to-blue-400',
            shadowColor: 'rgba(59, 130, 246, 0.5)',
            link: 'https://www.linkedin.com/in/ramgoutam',
            description: 'Professional Network',
            ctaText: 'Connect'
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
            gradient: 'from-green-600 to-emerald-500',
            shadowColor: 'rgba(16, 185, 129, 0.5)',
            link: 'https://wa.me/917026303366',
            description: 'Direct Chat',
            ctaText: 'Chat'
        },
        {
            name: 'Email',
            icon: <Mail className="w-7 h-7" />,
            gradient: 'from-orange-500 to-red-500',
            shadowColor: 'rgba(249, 115, 22, 0.5)',
            link: 'mailto:ram.videc@gmail.com',
            description: 'ram.videc@gmail.com',
            ctaText: 'Email'
        },
        {
            name: 'Phone',
            icon: <Phone className="w-7 h-7" />,
            gradient: 'from-purple-600 to-pink-600',
            shadowColor: 'rgba(147, 51, 234, 0.5)',
            link: 'tel:+917026303366',
            description: '+91 70263 03366',
            ctaText: 'Call'
        }
    ];

    return (
        <div className="gradient-hero relative w-full overflow-hidden py-24">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center container mx-auto px-4">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 rounded-full border border-white/20">
                        <span className="text-sm font-medium text-white/90">
                            Connect & Collaborate
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Join our vibrant community across multiple platforms and stay connected with the latest updates
                    </p>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto w-full px-4">
                    {socialPlatforms.map((platform, index) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            target={platform.link.startsWith('http') ? '_blank' : undefined}
                            rel={platform.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`group relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Container */}
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/30 h-full">
                                {/* Hover Gradient Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                ></div>

                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                                        filter: 'blur(40px)'
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                        {platform.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                                        {platform.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-200">
                                        {platform.description}
                                    </p>

                                    {/* Arrow Icon */}
                                    <div className="mt-4 flex items-center text-gray-400 group-hover:text-white transition-all duration-300">
                                        <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                                            {platform.ctaText}
                                        </span>
                                        <svg
                                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mouse Follow Light */}
            <div
                className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
                    left: `${mousePosition.x - 192}px`,
                    top: `${mousePosition.y - 192}px`,
                }}
            />
        </div>
    );
};
