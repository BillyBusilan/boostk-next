'use client';

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function ChatWidget() {
    const [showPrompt, setShowPrompt] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Speech bubble prompt */}
            {showPrompt && (
                <motion.div
                    className="absolute bottom-full right-0 mb-4 bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                >
                    Need help? Chat with us!
                    <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
                </motion.div>
            )}

            {/* Chat button */}
            <motion.button
                className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg flex items-center justify-center group"
                onHoverStart={() => setShowPrompt(true)}
                onHoverEnd={() => setShowPrompt(false)}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Pulsing rings */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-pink-500"
                    animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
                <motion.div
                    className="absolute inset-0 rounded-full bg-pink-500"
                    animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1,
                    }}
                />

                {/* Notification badge */}
                <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                    }}
                >
                    1
                </motion.div>

                {/* Icon with rotation on hover */}
                <motion.div
                    animate={{
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-pink-400 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            </motion.button>
        </div>
    );
}
