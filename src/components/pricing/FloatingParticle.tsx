'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';

const FloatingParticle = ({ delay = 0, color = 'white' }: { delay?: number; color?: string }) => {
    // Use deterministic values based on delay to satisfy purity rules
    const x = useMemo(() => (Math.abs(Math.sin(delay * 1000)) * 50) - 25, [delay]);
    const duration = useMemo(() => 3 + (Math.abs(Math.cos(delay * 1000)) * 2), [delay]);

    return (
        <motion.div
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0 }}
            animate={{
                y: [0, -100, 0],
                x: [0, x, 0],
                opacity: [0, 0.5, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
};

export default FloatingParticle;
