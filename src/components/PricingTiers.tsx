'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { usePricingStore } from '@/store/usePricingStore';
import { pricingTiers } from '@/data/pricing-data';
import PricingCard from './pricing/PricingCard';
import ImagePreviewModal from './pricing/ImagePreviewModal';
import { EnhancedBackground } from './pricing/EnhancedBackground';

export default function PricingTiers() {
  const { hoveredCardId, initMouseTracking, cleanupMouseTracking } = usePricingStore();

  useEffect(() => {
    initMouseTracking();
    return () => cleanupMouseTracking();
  }, [initMouseTracking, cleanupMouseTracking]);

  // Background color shift based on hovered card
  const backgroundColor = hoveredCardId
    ? pricingTiers.find(t => t.id === hoveredCardId)?.accentColor + '10'
    : 'transparent';

  return (
    <div className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated background */}
      <EnhancedBackground />

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #fff, #fff)',
                'linear-gradient(90deg, #fff, #60a5fa, #fff)',
                'linear-gradient(90deg, #fff, #fff)',
              ],
            }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            } as React.CSSProperties}
            transition={{ duration: 3, repeat: Infinity }}
          >
            See What You Get
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Not just services—real deliverables you can see and measure
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal />
    </div>
  );
}