import React, { type FC, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Footer component.
 */
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /** The source URL for the company logo. */
    logoSrc: string;
    /** The name of the company, displayed next to the logo. */
    companyName?: string;
    /** A short description of the company. */
    description?: string;
    /** An array of objects for generating useful links. */
    usefulLinks?: { label: string; href: string }[];
    /** An array of objects for generating social media links. */
    socialLinks?: { label: string; href: string; icon: ReactNode }[];
}

/**
 * A responsive and theme-adaptive footer component.
 */
export const Footer: FC<FooterProps> = ({
    logoSrc,
    companyName = 'Datally Inc.',
    description = 'Empowering businesses with intelligent financial solutions, designed for the future of finance.',
    usefulLinks = [
        { label: 'Products', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Privacy Policy', href: '#' },
    ],
    socialLinks = [
        { label: 'Twitter (X)', href: '#', icon: <DummyIcon /> },
    ],
    className,
    ...props
}) => {
    return (
        <footer className={cn('bg-muted/50 text-black', className)} {...props}>
            <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-3 lg:gap-12">
                {/* Company Info */}
                <div className="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
                    <div className="flex items-center">
                        <img src="/videc-logo-black.png" alt="VIDEC Logo" className="h-12 w-auto object-contain dark:hidden" />
                        <img src="/videc-logo-white.png" alt="VIDEC Logo" className="h-12 w-auto object-contain hidden dark:block" />
                        <div className="ml-2 flex flex-col leading-none">
                            <span className="text-sm font-bold text-black">Tech</span>
                            <span className="text-sm font-bold text-black">Solutions</span>
                        </div>
                    </div>
                    <p className="text-sm text-black">{description}</p>
                </div>

                {/* Follow Us */}
                <div className="md:justify-self-center">
                    <h3 className="mb-4 text-base font-semibold">Follow Us</h3>
                    <ul className="space-y-2">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="flex items-center gap-2 text-sm text-black transition-colors hover:text-primary"
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="md:justify-self-center">
                    <h3 className="mb-4 text-base font-semibold">Useful Link</h3>
                    <ul className="space-y-2">
                        {usefulLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm text-black transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-black/10 mt-0 py-4 text-center">
                <p className="text-sm text-black">
                    &copy; {new Date().getFullYear()} VIDEC Tech Solutions. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

// Dummy Icon
const DummyIcon: FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-muted-foreground"
    >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
    </svg>
);
