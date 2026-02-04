'use client';

import { motion } from "motion/react";
import { useRef, useMemo } from "react";
import { usePricingStore } from '@/store/usePricingStore';

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export function MagneticButton({ children, onClick, className = "", style = {} }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { mousePosition } = usePricingStore();

    // Memoize position calculation
    const position = useMemo(() => {
        if (!buttonRef.current) return { x: 0, y: 0 };

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mousePosition.x - centerX;
        const dy = mousePosition.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
            const strength = 1 - distance / maxDistance;
            return {
                x: dx * strength * 0.3,
                y: dy * strength * 0.3,
            };
        }
        return { x: 0, y: 0 };
    }, [mousePosition]);

    return (
        <motion.button
            ref={buttonRef}
            className={className}
            style={style}
            onClick={onClick}
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
        >
            {children}
        </motion.button>
    );
}
