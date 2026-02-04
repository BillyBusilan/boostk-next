'use client';

import { motion } from "motion/react";
import { useState, useRef } from "react";

interface MagneticLinkProps {
    href: string;
    children: React.ReactNode;
}

export function MagneticLink({ href, children }: MagneticLinkProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const linkRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!linkRef.current) return;

        const rect = linkRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Magnetic effect: pull toward cursor
        setPosition({
            x: distanceX * 0.3,
            y: distanceY * 0.3,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={linkRef}
            href={href}
            className="relative inline-block text-gray-400 hover:text-white transition-colors cursor-pointer group py-1"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}

            {/* Animated underline */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />

            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg rounded"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
}
