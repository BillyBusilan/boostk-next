import { create } from 'zustand';
import { PricingTier } from '@/types/pricing';

interface PricingStore {
    hoveredCardId: string | null;
    setHoveredCardId: (id: string | null) => void;

    mousePosition: { x: number; y: number };
    normalizedMousePosition: { x: number; y: number };
    setMousePosition: (x: number, y: number) => void;

    previewModalOpen: boolean;
    setPreviewModalOpen: (open: boolean) => void;

    selectedTier: PricingTier | null;
    setSelectedTier: (tier: PricingTier | null) => void;

    // Initialize mouse tracking
    initMouseTracking: () => void;
    cleanupMouseTracking: () => void;
}

let rafId: number | null = null;
let pendingMouseUpdate: { x: number; y: number } | null = null;

export const usePricingStore = create<PricingStore>((set, get) => ({
    hoveredCardId: null,
    setHoveredCardId: (id) => set({ hoveredCardId: id }),

    mousePosition: { x: 0, y: 0 },
    normalizedMousePosition: { x: 0, y: 0 },
    setMousePosition: (x, y) => {
        // Throttle with requestAnimationFrame
        pendingMouseUpdate = { x, y };

        if (rafId === null) {
            rafId = requestAnimationFrame(() => {
                if (pendingMouseUpdate) {
                    set({
                        mousePosition: pendingMouseUpdate,
                        normalizedMousePosition: {
                            x: pendingMouseUpdate.x / window.innerWidth,
                            y: pendingMouseUpdate.y / window.innerHeight,
                        }
                    });
                    pendingMouseUpdate = null;
                }
                rafId = null;
            });
        }
    },

    previewModalOpen: false,
    setPreviewModalOpen: (open) => set({ previewModalOpen: open }),

    selectedTier: null,
    setSelectedTier: (tier) => set({ selectedTier: tier }),

    initMouseTracking: () => {
        const handleMouseMove = (e: MouseEvent) => {
            get().setMousePosition(e.clientX, e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Store cleanup function
        (window as any).__pricingMouseCleanup = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };
    },

    cleanupMouseTracking: () => {
        if ((window as any).__pricingMouseCleanup) {
            (window as any).__pricingMouseCleanup();
            delete (window as any).__pricingMouseCleanup;
        }
    },
}));
