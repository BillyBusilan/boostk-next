'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { usePricingStore } from '@/store/usePricingStore';

const ImagePreviewModal = () => {
    const { previewModalOpen, setPreviewModalOpen, selectedTier } = usePricingStore();

    if (!selectedTier) return null;

    return (
        <AnimatePresence>
            {previewModalOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setPreviewModalOpen(false)}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-gray-900 rounded-3xl p-8 max-w-4xl w-full border border-gray-700"
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setPreviewModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <h2 className="text-3xl font-bold text-white mb-6">{selectedTier.name} - Preview Gallery</h2>

                        <div className="grid grid-cols-2 gap-6">
                            {selectedTier.previewImages.map((preview, idx) => (
                                <motion.div
                                    key={idx}
                                    className="aspect-video rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-gray-600"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Sparkles className="w-12 h-12 text-gray-500" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImagePreviewModal;
