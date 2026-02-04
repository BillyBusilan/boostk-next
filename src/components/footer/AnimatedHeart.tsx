'use client';

import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export function AnimatedHeart() {
    const [isHovered, setIsHovered] = useState(false);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

    const handleClick = () => {
        // Create confetti particles
        const newParticles = Array.from({ length: 12 }, (_, i) => ({
            id: Date.now() + i,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
        }));
        setParticles(newParticles);

        // Clear particles after animation
        setTimeout(() => setParticles([]), 1000);
    };

    return (
        <div className="relative">
            {/* Sparkle particles on hover */}
            {isHovered && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                x: Math.cos((i * Math.PI * 2) / 6) * 60,
                                y: Math.sin((i * Math.PI * 2) / 6) * 60,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-pink-400" />
                        </motion.div>
                    ))}
                </>
            )}

            {/* Click particles (confetti) */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute"
                    initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    animate={{
                        scale: 0,
                        opacity: 0,
                        x: particle.x,
                        y: particle.y,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                </motion.div>
            ))}

            {/* Main heart with animations */}
            <motion.div
                className="relative cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                animate={{
                    scale: isHovered ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Glow effect on hover */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-pink-500 rounded-full blur-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                {/* Heart icon with pulse */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Heart className="w-20 h-20 text-pink-500 stroke-[3] relative z-10" />
                </motion.div>

                {/* Fill animation on hover */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Heart className="w-20 h-20 text-pink-500 fill-pink-500" />
                </motion.div>
            </motion.div>
        </div>
    );
}
