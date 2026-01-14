"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Upwork Logo using CDN for reliability
const UpworkLogo = ({ className }: { className?: string }) => (
    <img
        src="https://www.vectorlogo.zone/logos/upwork/upwork-icon.svg"
        alt="Upwork"
        className={className}
    />
)

const testimonials = [
    // Direct Clients
    {
        tempId: 0,
        testimonial: "Ram knows what he is doing. He is one of the few that I can give him a project and let him lead it. He always delivers good results and on time. Very respectful and professional.",
        by: "Patrick Jiri, Founder and Owner at JIRI LLC",
        source: "direct"
    },
    {
        tempId: 1,
        testimonial: "I hired ram to convert some stl scans to step for cnc processing, he was fast and super easy to work with, if you're looking for any 3d modeling or technical drawing work, he's your guy!",
        by: "Alaric Yim, Founder at Yim-Hongkong",
        source: "direct"
    },
    // Upwork Clients
    {
        tempId: 2,
        testimonial: "Ramgoutam is detail oriented and systemic in approaching projects. He is a professional and knowledgeable individual capable of delivering quality service in a timely manner. In this project, he conducted a technical review of an online structural analysis course, a subject well within his field of study and expertise. His summative assessment of the course was clear and well-articulated, and his recommendation for change well placed.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 3,
        testimonial: "We have been working with Ramgoutam on several projects and have developed a solid working relationship. He is a great freelancer.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 4,
        testimonial: "Excellent work! A pleasure to collaborate with.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 5,
        testimonial: "Great freelancer, reliable and good quality work.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 6,
        testimonial: "Ramgoutam is a an excellent freelancer. He completed the work on time and budget. He is thorough and professional.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 7,
        testimonial: "Good work, on time, reasonable price. Thank you!",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 8,
        testimonial: "Job provided in due time as required",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 9,
        testimonial: "Ramgoutam was reliable, skillful and diligent. I highly recommend him for any CAD work. We will be rehiring him for future CAD projects.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 10,
        testimonial: "Ramgoutam is very knowledgeable in the area of model development and 3D printer. I will gladly hire him for other projects.",
        by: "Upwork Client",
        source: "upwork"
    },
    {
        tempId: 11,
        testimonial: "Very easy to communicate with. Understand job desk perfectly. His work is blazing fast and perfect. Will work with him again in the future. Very recommended to work with him.",
        by: "Upwork Client",
        source: "upwork"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;
    const isUpwork = testimonial.source === 'upwork';

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col justify-between",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary"
                    : "z-0 bg-secondary text-secondary-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >


            {/* Content Container */}
            <div className="flex flex-col h-full">
                {/* Header: Upwork info or empty spacer */}
                <div className="mb-4 h-8 flex items-center justify-between">
                    {isUpwork && (
                        <>
                            <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-full border",
                                isCenter ? "bg-white/20 border-white/30" : "bg-[#14a800]/10 border-[#14a800]/20"
                            )}>
                                <ShieldCheck className={cn("w-3.5 h-3.5", isCenter ? "text-white" : "text-[#14a800]")} />
                                <span className={cn("text-xs font-semibold tracking-wide", isCenter ? "text-white" : "text-[#14a800]")}>Verified</span>
                            </div>

                        </>
                    )}
                </div>

                {/* Stars for Upwork */}
                {isUpwork && (
                    <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={cn(
                                    "w-4 h-4 fill-current",
                                    isCenter ? "text-yellow-300" : "text-yellow-500"
                                )}
                            />
                        ))}
                    </div>
                )}

                {/* Testimonial Text */}
                <h3 className={cn(
                    "text-base sm:text-lg font-medium leading-relaxed flex-grow overflow-y-auto custom-scrollbar pr-2",
                    isCenter ? "text-primary-foreground" : "text-foreground"
                )}>
                    "{testimonial.testimonial}"
                </h3>

                {/* Author */}
                <div className={cn("mt-6 pt-4 border-t", isCenter ? "border-primary-foreground/20" : "border-border")}>
                    <div className={cn(
                        "flex items-center gap-2 text-sm font-semibold tracking-wide",
                        isCenter ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}>
                        {isUpwork && <UpworkLogo className={cn("h-5 w-auto object-contain", isCenter ? "brightness-0 invert" : "grayscale opacity-70")} />}
                        <p>{testimonial.by}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 400 : 300); // Slightly increased card size
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-50">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
