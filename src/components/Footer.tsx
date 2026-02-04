'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedHeart } from "./footer/AnimatedHeart";
import { MagneticLink } from "./footer/MagneticLink";

export default function Footer() {
    const heroRef = useRef(null);
    const footerRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const footerInView = useInView(footerRef, { once: true, amount: 0.3 });

    const companyLinks = ["About Us", "Our Team", "Careers"];
    const legalLinks = ["Terms of Service", "Privacy Policy"];

    return (
        <div className="relative bg-black text-white overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
                {/* Animated Heart */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={heroInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ type: "spring", duration: 1, delay: 0.2 }}
                    className="mb-8 relative z-10"
                >
                    <AnimatedHeart />
                </motion.div>

                {/* Main Heading with letter-by-letter animation */}
                <div className="relative z-10 mb-6">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {"We Believe In You".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="inline-block"
                                whileHover={{ scale: 1.2, color: "#ec4899" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        animate={{
                            x: ["-200%", "200%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Subheading with breathing animation */}
                <motion.p
                    className="text-gray-400 text-lg md:text-xl text-center max-w-2xl relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.span
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-block"
                    >
                        We&apos;ll take the first small step toward the world together.
                    </motion.span>
                </motion.p>
            </div>

            {/* Wave Divider */}
            <div className="relative h-24">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
                        fill="rgba(15, 15, 15, 0.5)"
                        animate={{
                            d: [
                                "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
                                "M0,30 Q300,70 600,30 T1200,30 L1200,120 L0,120 Z",
                                "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
                            ],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* Footer Links Section */}
            <div
                ref={footerRef}
                className="relative px-8 md:px-16 lg:px-24 py-16 bg-gradient-to-b from-black/50 to-black backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* Company Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
                                COMPANY
                                <motion.div
                                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-transparent"
                                    initial={{ width: 0 }}
                                    animate={footerInView ? { width: "100%" } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                />
                            </h3>
                            <div className="flex flex-col space-y-3">
                                {companyLinks.map((link, index) => (
                                    <motion.div
                                        key={link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <MagneticLink href="#">{link}</MagneticLink>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Legal Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
                                LEGAL
                                <motion.div
                                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-transparent"
                                    initial={{ width: 0 }}
                                    animate={footerInView ? { width: "100%" } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                />
                            </h3>
                            <div className="flex flex-col space-y-3">
                                {legalLinks.map((link, index) => (
                                    <motion.div
                                        key={link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <MagneticLink href="#">{link}</MagneticLink>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Empty column for spacing */}
                        <div />
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
                        initial={{ opacity: 0 }}
                        animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {/* BOOSTK Logo */}
                        <motion.div
                            className="mb-4 md:mb-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.h2
                                className="text-2xl font-bold text-white relative cursor-pointer"
                                whileHover={{
                                    textShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
                                }}
                            >
                                BOOSTK
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-0"
                                    whileHover={{ opacity: 0.3 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.h2>
                        </motion.div>

                        {/* Copyright Text */}
                        <motion.p
                            className="text-gray-500 text-sm text-center md:text-right"
                            initial={{ opacity: 0 }}
                            animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <motion.span
                                animate={{
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                © 2025 BOOSTK.
                            </motion.span>{" "}
                            <motion.span
                                className="inline-block"
                                whileHover={{
                                    background: "linear-gradient(90deg, #ec4899, #a855f7)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Connecting Asian Innovation with Global Markets.
                            </motion.span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
