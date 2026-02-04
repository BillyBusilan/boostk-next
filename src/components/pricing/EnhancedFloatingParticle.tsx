'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';

interface EnhancedFloatingParticleProps {
    delay?: number;
    color?: string;
    size?: 'small' | 'medium' | 'large';
}

const EnhancedFloatingParticle = ({
    delay = 0,
    color = 'white',
    size = 'small'
}: EnhancedFloatingParticleProps) => {
    // Use deterministic values based on delay to satisfy purity rules
    const x = useMemo(() => (Math.abs(Math.sin(delay * 1000)) * 50) - 25, [delay]);
    const duration = useMemo(() => 3 + (Math.abs(Math.cos(delay * 1000)) * 2), [delay]);
    const particleSize = useMemo(() => {
        const sizeMap = { small: 4, medium: 8, large: 12 };
        return sizeMap[size];
    }, [size]);

    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                backgroundColor: color,
                width: particleSize,
                height: particleSize,
            }}
            initial={{ opacity: 0 }}
            animate={{
                y: [0, -100, 0],
                x: [0, x, 0],
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1],
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

export default EnhancedFloatingParticle;
