'use client';
import React from 'react';
import { CardData } from '../../../types/barrier';
import { CheckCircle } from 'lucide-react';
import { BARRIER_CARDS } from '../../../data/barrier';
import { SectionHeader } from '../../Landing Page/SectionHeader'
 
// --- Components ---

const Card: React.FC<{ data: CardData }> = ({ data }) => {
  const Icon = data.icon;

  return (
    <div
      className="group relative h-[700px] w-full perspective-2000"
      style={{ perspective: '2000px' }}
    >
      {/* 3D Container */}
      <div
        className="
          relative h-full w-full 
          transition-all duration-500 ease-out 
          [transform-style:preserve-3d] 
          [transform:rotateX(4deg)_rotateY(-2deg)] 
          group-hover:[transform:rotateX(2deg)_rotateY(-1deg)_translateY(-8px)]
        "
      >
        {/* Floating Icon Box */}
        <div
          className="absolute -top-6 -left-6 z-20 h-20 w-20 rounded-2xl border border-blue-100 bg-white text-primary shadow-xl flex items-center justify-center animate-float"
          style={{ animationDelay: data.iconDelay, transform: 'translateZ(40px)' }}
        >
          <Icon strokeWidth={1.5} size={36} />
        </div>

        {/* Card Face */}
        <div
          className="
            absolute inset-0 z-10 
            flex h-full w-full flex-col 
            overflow-hidden rounded-xl 
            bg-white 
            border-t border-l border-blue-100
            border-r-[12px] border-r-blue-600 
            border-b-[12px] border-b-indigo-600
            shadow-2xl
          "
        >
          {/* Main Content */}
          <div className="relative z-10 flex h-full flex-col p-10 pt-24 transition-opacity duration-300 group-hover:opacity-30">
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

            {/* Bottom Image Grid */}
            <div className="mt-8 h-64 w-full rounded-t-lg border-t border-blue-100 bg-blue-50/30 p-3">
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
                {data.images.map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-blue-100">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sliding Blue Drawer */}
          <div
            className="
              absolute bottom-0 left-0 right-0 z-30 
              flex h-[40%] w-full flex-col justify-center 
              bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 p-10 
              translate-y-full transition-transform duration-500 cubic-bezier(0.16,1,0.3,1)
              group-hover:translate-y-0
              border-t border-white/20
            "
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
};

// --- Main App ---

export default function Barrier() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fcfdfe]">

      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(#bfdbfe 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-blue-50/50 via-transparent to-white"></div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">

        <SectionHeader
          badgeText="Discover Solutions"
          badgeColor='blue'
          title="Where Do You Feel"
          highlightedText="English Barrier Most"
          description="Every day, global opportunities are lost to simple language gaps. Hover over the cards to see how we solve your specific challenges."
        />

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-2 pb-20">
          {BARRIER_CARDS.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>

      </main>

      {/* Global Styles */}
      <style>{`
        .perspective-2000{
          perspective: 2000px;
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}