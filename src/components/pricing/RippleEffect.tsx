'use client';

import { motion } from 'motion/react';

const RippleEffect = ({ x, y }: { x: number; y: number }) => {
    return (
        <motion.div
            className="absolute rounded-full border-2 border-white/30 pointer-events-none"
            style={{
                left: x,
                top: y,
                x: '-50%',
                y: '-50%',
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{
                width: 300,
                height: 300,
                opacity: 0
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        />
    );
};

export default RippleEffect;
