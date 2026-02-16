'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CardData } from '../../../types/barrier';
import { CheckCircle } from 'lucide-react';
import { BARRIER_CARDS } from '../../../data/barrier';
import { SectionHeader } from '../../Landing Page/SectionHeader'

// --- Components ---

const Card: React.FC<{ data: CardData }> = React.memo(({ data }) => {
  const Icon = data.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          videoRefs.current.forEach((video) => {
            if (video) {
              if (entry.isIntersecting) {
                video.play().catch(() => {
                  // Ignore errors from autoplay restrictions
                });
              } else {
                video.pause();
              }
            }
          });
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-auto md:h-[700px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simplified Container - Removed 3D transforms */}
      <div className="relative h-full w-full">
        {/* Floating Icon Box - Simplified */}
        <div
          className="absolute -top-6 -left-6 z-20 h-20 w-20 rounded-2xl border border-blue-100 bg-white text-primary shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <Icon strokeWidth={1.5} size={36} />
        </div>

        {/* Card Face */}
        <div
          className="
            relative h-full w-full flex flex-col 
            overflow-hidden rounded-xl 
            border-r-[12px] border-r-blue-600 
            border-b-[12px] border-b-indigo-600
            shadow-2xl
            bg-white
            transition-transform duration-300
            hover:-translate-y-2
          "
        >
          {/* Main Content */}
          <div
            className="relative z-10 flex h-full flex-col p-10 pt-24 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.3 : 1 }}
          >
            <h3 className="mb-6 text-3xl font-extrabold text-slate-900 tracking-tight">
              {data.title}
            </h3>

            <div className="mb-auto space-y-4">
              <p className="text-2xl font-medium leading-tight text-slate-600">
                {data.question}
                <br />
                <span className="text-slate-400 text-xl font-normal mt-2 block">
                  {data.subtitle}
                </span>
              </p>
            </div>

            {/* Bottom Video Grid */}
            <div className="mt-8 h-64 w-full rounded-t-lg bg-blue-50/30 p-3">
              <div className="grid h-full w-full grid-cols-1 grid-rows-2 gap-2">
                {data.videos.map((videoUrl, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-lg bg-white shadow-sm">
                    {videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') ? (
                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        src={videoUrl}
                        className="h-full w-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="none"
                      />
                    ) : (
                      <img
                        src={videoUrl}
                        alt=""
                        className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sliding Blue Drawer - Simplified transition */}
          <div
            className="
              absolute bottom-0 left-0 right-0 z-30 
              flex w-full flex-col justify-center 
              bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 p-10 
              transition-all duration-300
              border-t border-white/20
            "
            style={{
              height: isHovered ? '40%' : '0%',
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? 'auto' : 'none'
            }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-100">
              <CheckCircle size={20} />
              <span>{data.solutionTitle}</span>
            </div>
            <p className="text-3xl font-bold leading-tight text-white">
              {data.solutionText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

// Add display name for memo component
Card.displayName = 'Card';

// --- Main App ---

export default function Barrier() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* Simplified Background - Removed heavy gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(#bfdbfe 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <section className="bg-blue-50/30 pt-14 pb-6 relative overflow-hidden">

        <SectionHeader
          badgeText="Discover Our Solutions"
          badgeColor='blue'
          title="Where Do You Feel"
          highlightedText="English Barrier Most"
          description="Every day, global opportunities are lost to simple language gaps. Hover over the cards to see how we solve your specific challenges."
        />

        {/* Card Grid */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pb-8">
            {BARRIER_CARDS.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}