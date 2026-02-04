'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check } from 'lucide-react';

const AnimatedCheckmark = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className="flex items-center gap-2 py-1 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.4 }}
            whileHover={{ x: 5 }}
        >
            <motion.div
                className="relative flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: delay + 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
                <Check className="w-4 h-4 text-blue-400" />
                <motion.div
                    className="absolute inset-0 bg-blue-400/20 rounded-full"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
            <motion.span
                className="text-sm text-gray-300 group-hover:text-white transition-colors"
                whileHover={{ color: '#60a5fa' }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
};

export default AnimatedCheckmark;
