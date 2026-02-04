'use client';

import { motion } from "motion/react";
import { usePricingStore } from '@/store/usePricingStore';

export function EnhancedBackground() {
    const { normalizedMousePosition } = usePricingStore();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient mesh */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(circle at ${normalizedMousePosition.x * 100}% ${normalizedMousePosition.y * 100}%, 
              rgba(236, 72, 153, 0.15) 0%, 
              transparent 50%),
            radial-gradient(circle at ${(1 - normalizedMousePosition.x) * 100}% ${(1 - normalizedMousePosition.y) * 100}%, 
              rgba(168, 85, 247, 0.15) 0%, 
              transparent 50%)
          `,
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Shifting gradient overlay */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, transparent 100%)",
                        "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%)",
                        "linear-gradient(225deg, rgba(236, 72, 153, 0.1) 0%, transparent 100%)",
                        "linear-gradient(315deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%)",
                        "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, transparent 100%)",
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Scanning light ray */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(236, 72, 153, 0.2) 50%, 
            transparent 100%)`,
                    transformOrigin: "center",
                }}
                animate={{
                    x: ["-100%", "200%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
