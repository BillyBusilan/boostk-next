'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, useSpring, useInView, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { PricingTier } from '@/types/pricing';
import { usePricingStore } from '@/store/usePricingStore';
import FloatingParticle from './FloatingParticle';
import RippleEffect from './RippleEffect';
import AnimatedCheckmark from './AnimatedCheckmark';
import { MagneticButton } from './MagneticButton';
import EnhancedFloatingParticle from './EnhancedFloatingParticle';

interface PricingCardProps {
    tier: PricingTier;
    index: number;
}

const PricingCard = ({ tier, index }: PricingCardProps) => {
    const {
        hoveredCardId,
        setHoveredCardId,
        mousePosition,
        setPreviewModalOpen,
        setSelectedTier
    } = usePricingStore();

    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

    // Motion values for 3D tilt - optimized for performance
    const rotateX = useSpring(0, { stiffness: 200, damping: 25 });
    const rotateY = useSpring(0, { stiffness: 200, damping: 25 });
    const scale = useSpring(1, { stiffness: 200, damping: 25 });

    // Magnetic effect - optimized
    const magneticX = useSpring(0, { stiffness: 100, damping: 25 });
    const magneticY = useSpring(0, { stiffness: 100, damping: 25 });

    // Scroll-based reveal
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    // Calculate magnetic effect
    useEffect(() => {
        if (!isHovered && hoveredCardId === null && cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = mousePosition.x - centerX;
            const dy = mousePosition.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 300;

            if (distance < maxDistance) {
                const strength = 1 - distance / maxDistance;
                magneticX.set(dx * strength * 0.15);
                magneticY.set(dy * strength * 0.15);
            } else {
                magneticX.set(0);
                magneticY.set(0);
            }
        } else {
            magneticX.set(0);
            magneticY.set(0);
        }
    }, [mousePosition, isHovered, hoveredCardId, magneticX, magneticY]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseXRelative = e.clientX - centerX;
        const mouseYRelative = e.clientY - centerY;

        const rotateYValue = (mouseXRelative / rect.width) * 5;
        const rotateXValue = -(mouseYRelative / rect.height) * 5;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);

        // Update custom properties for the spotlight effect
        cardRef.current.style.setProperty('--mouse-x', `${(e.clientX - rect.left) / rect.width * 100}%`);
        cardRef.current.style.setProperty('--mouse-y', `${(e.clientY - rect.top) / rect.height * 100}%`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setHoveredCardId(tier.id);
        scale.set(1.05);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredCardId(null);
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples(prev => [...prev, { id, x, y }]);
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== id));
        }, 600);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative h-full"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{
                x: magneticX,
                y: magneticY,
            }}
        >
            <motion.div
                className="relative h-full flex flex-col backdrop-blur-xl rounded-3xl p-8 overflow-hidden cursor-pointer border border-gray-700/50"
                style={{
                    background: `linear-gradient(135deg, ${tier.accentColor}15, ${tier.accentColor}05)`,
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: 'preserve-3d',
                    transformPerspective: 1000,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                whileHover={{
                    boxShadow: `0 20px 60px -15px ${tier.accentColor}40`
                }}
            >
                {/* Animated gradient border */}
                <motion.div
                    className="absolute inset-0 opacity-0 rounded-3xl"
                    style={{
                        background: `linear-gradient(135deg, ${tier.accentColor}40, transparent)`,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Light ray effect following mouse */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${tier.accentColor}30 0%, transparent 50%)`,
                        }}
                    />
                )}

                {/* Floating particles */}
                {isHovered && (
                    <>
                        {[...Array(4)].map((_, i) => (
                            <EnhancedFloatingParticle
                                key={i}
                                delay={i * 0.15}
                                color={tier.accentColor}
                                size={i % 2 === 0 ? 'medium' : 'small'}
                            />
                        ))}
                    </>
                )}

                {/* Ripple effects */}
                <AnimatePresence>
                    {ripples.map(ripple => (
                        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
                    ))}
                </AnimatePresence>

                {/* Badge */}
                {tier.badge && (
                    <motion.div
                        className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                            backgroundColor: tier.badgeColor,
                            boxShadow: `0 0 20px ${tier.badgeColor}60`
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: [
                                `0 0 20px ${tier.badgeColor}60`,
                                `0 0 30px ${tier.badgeColor}80`,
                                `0 0 20px ${tier.badgeColor}60`,
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {tier.badge}
                    </motion.div>
                )}

                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                    <motion.div
                        className="p-3 rounded-2xl"
                        style={{ backgroundColor: `${tier.iconColor}20` }}
                        animate={isHovered ? {
                            rotate: [0, -5, 5, -5, 0],
                            scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ color: tier.iconColor }}>
                            {tier.icon}
                        </div>
                    </motion.div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                        <p className="text-sm text-gray-400">{tier.subtitle}</p>
                    </div>
                </div>

                {/* Price */}
                <motion.div
                    className="mb-6"
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                >
                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white">${tier.price}</span>
                        <span className="text-gray-400">/mo</span>
                    </div>
                </motion.div>

                {/* Best For */}
                <div className="mb-8 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <p className="text-xs text-gray-400 mb-1">Best for:</p>
                    <p className="text-sm text-white font-medium">{tier.bestFor}</p>
                </div>

                {/* Preview Images */}
                <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-4">What You&apos;ll Get:</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {tier.previewImages.map((preview, idx) => (
                            <motion.div
                                key={idx}
                                className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 border border-gray-700/50"
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                                onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    setSelectedTier(tier);
                                    setPreviewModalOpen(true);
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800"
                                    animate={isHovered ? {
                                        y: [0, -5, 0],
                                    } : {}}
                                    transition={{
                                        duration: 2,
                                        delay: idx * 0.1,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <Sparkles className="w-6 h-6 text-gray-600" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                    {tier.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center gap-3 py-3 border-b border-gray-800/50 last:border-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + idx * 0.05 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.02)' }}
                        >
                            <div className="text-gray-400">
                                {feature.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-white font-medium">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Also Includes */}
                <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-4">Also Includes:</h4>
                    <div className="space-y-1">
                        {tier.includes.map((item, idx) => (
                            <AnimatedCheckmark key={idx} text={item} delay={index * 0.2 + idx * 0.03} />
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className='mt-auto'>
                    {/* CTA Button */}
                    <MagneticButton
                        className="w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden"
                        style={{
                            backgroundColor: tier.ctaColor,
                        }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                            }}
                            initial={{ x: '-100%' }}
                            whileHover={{
                                x: '100%',
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <span className="relative z-10">{tier.ctaText}</span>
                    </MagneticButton>
                </div>

                <p className="text-center text-xs text-gray-500 mt-4">
                    Cancel anytime • No setup fees
                </p>
            </motion.div>
        </motion.div>
    );
};

export default PricingCard;
