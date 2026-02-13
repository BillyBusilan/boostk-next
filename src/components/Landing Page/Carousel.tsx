'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const carouselData: Record<string, string[]> = {
  'Videos': [
    'https://placehold.co/280x520/1e293b/white/png?text=Videos+1',
    'https://placehold.co/280x520/334155/white/png?text=Videos+2',
    'https://placehold.co/280x520/0f172a/white/png?text=Videos+3',
    'https://placehold.co/280x520/22d3ee/white/png?text=Videos+4',
    'https://placehold.co/280x520/8b5cf6/white/png?text=Videos+5',
  ],
  'Images': [
    'https://placehold.co/280x520/1e293b/white/png?text=Images+1',
    'https://placehold.co/280x520/334155/white/png?text=Images+2',
    'https://placehold.co/280x520/0f172a/white/png?text=Images+3',
    'https://placehold.co/280x520/22d3ee/white/png?text=Images+4',
    'https://placehold.co/280x520/8b5cf6/white/png?text=Images+5',
  ],
  'SNS': [
    'https://placehold.co/280x520/1e293b/white/png?text=SNS+1',
    'https://placehold.co/280x520/334155/white/png?text=SNS+2',
    'https://placehold.co/280x520/0f172a/white/png?text=SNS+3',
    'https://placehold.co/280x520/22d3ee/white/png?text=SNS+4',
    'https://placehold.co/280x520/8b5cf6/white/png?text=SNS+5',
  ],
  'Emails': [
    '/images/emails/email1.png',
    '/images/emails/email2.png',
    '/images/emails/email3.png',
    '/images/emails/email4.png',
    '/images/emails/email5.png',
    '/images/emails/email6.png',
    '/images/emails/email7.png',
    '/images/emails/email8.png',
  ],
  'News': [
    'https://placehold.co/280x520/1e293b/white/png?text=News+1',
    'https://placehold.co/280x520/334155/white/png?text=News+2',
    'https://placehold.co/280x520/0f172a/white/png?text=News+3',
    'https://placehold.co/280x520/22d3ee/white/png?text=News+4',
    'https://placehold.co/280x520/8b5cf6/white/png?text=News+5',
  ],
};

export const Carousel = () => {
  const [activeTab, setActiveTab] = useState('Emails');
  const [position, setPosition] = useState(0); // Continuous position value
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const animationRef = useRef<number>();

  const images = carouselData[activeTab];
  const totalImages = images.length;

  // Smooth continuous animation
  useEffect(() => {
    if (isDragging || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    let lastTime = performance.now();
    const speed = 0.0006; // Adjust speed here (lower = slower)

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setPosition((prev) => {
        const newPos = prev + speed * deltaTime;
        // Keep position within bounds for smooth looping
        return newPos % totalImages;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isPaused, totalImages]);

  // Reset position when tab changes
  useEffect(() => {
    setPosition(0);
  }, [activeTab]);

  const getCardStyle = (index: number): React.CSSProperties => {
    // Calculate offset from current position (including fractional position for smooth movement)
    let offset = index - position - (dragOffset / 150);

    // Handle wrap-around for continuous effect
    while (offset > totalImages / 2) offset -= totalImages;
    while (offset < -totalImages / 2) offset += totalImages;

    // Only show 5 cards (-2 to +2)
    if (Math.abs(offset) > 2.5) {
      return { display: 'none' };
    }

    const absOffset = Math.abs(offset);

    const translateX = offset * 200;
    const translateZ = -absOffset * 120;
    const rotateY = offset * -18;
    const scale = 1 - absOffset * 0.12;
    const opacity = 1 - absOffset * 0.25;
    const zIndex = 10 - Math.round(absOffset);

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: Math.max(0.3, opacity),
      zIndex,
      transition: isDragging ? 'none' : 'opacity 0.3s, z-index 0s',
    };
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  }, [isDragging, startX]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    // Apply drag to position
    if (Math.abs(dragOffset) > 30) {
      const moveAmount = dragOffset / 150;
      setPosition((prev) => {
        let newPos = prev - moveAmount;
        while (newPos < 0) newPos += totalImages;
        return newPos % totalImages;
      });
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, totalImages]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    if (Math.abs(dragOffset) > 30) {
      const moveAmount = dragOffset / 150;
      setPosition((prev) => {
        let newPos = prev - moveAmount;
        while (newPos < 0) newPos += totalImages;
        return newPos % totalImages;
      });
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section className="py-12 lg:py-24 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">Reach New Heights</span>
          </div>


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">Showcase Your Reach</span> 
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Visualize your global content strategy across multiple channels with our integrated tools.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative h-[500px] md:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: '1000px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => { handleMouseUp(); setIsPaused(false); }}
          onMouseEnter={() => setIsPaused(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {images.map((img, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="absolute w-[220px] md:w-[300px] h-[380px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50"
                style={getCardStyle(index)}
              >
                <Image
                  src={img}
                  alt={`${activeTab} ${index + 1}`}
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Drag hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 text-xs pointer-events-none">
            <span className="material-symbols-outlined text-sm">swipe</span>
            <span>Click and drag to navigate</span>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center items-center gap-4 md:gap-12 mt-8 border-t border-slate-100 pt-6 max-w-2xl mx-auto overflow-x-auto no-scrollbar">
          {Object.keys(carouselData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition-colors py-2 relative px-2 whitespace-nowrap ${activeTab === tab
                ? 'text-base font-bold text-primary'
                : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};