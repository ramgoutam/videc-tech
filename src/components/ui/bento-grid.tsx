"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border border-border justify-between flex flex-col space-y-4 hover:border-primary/50 relative overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />

            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 m-2">
                <div className="mb-4 text-primary bg-primary/10 w-fit p-3 rounded-xl group-hover/bento:scale-110 transition-transform duration-200">
                    {icon}
                </div>
                <div className="font-bold font-sans text-xl mb-2 mt-2 text-foreground">
                    {title}
                </div>
                <div className="font-sans font-normal text-muted-foreground text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
