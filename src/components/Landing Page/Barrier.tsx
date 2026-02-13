'use client';
import React, { useState } from 'react';
import { MessageSquare, Megaphone, Zap, Globe, CheckCircle, TrendingUp, Anchor, LayoutGrid, Users, FileText, BarChart3, PieChart, Map, PenTool } from 'lucide-react';

// --- Types ---

interface CardData {
  id: string;
  title: string;
  question: React.ReactNode;
  subtitle: string;
  solutionTitle: string;
  solutionText: string;
  icon: React.ElementType;
  iconDelay: string;
  cardDelay: string;
  images: string[];
}

// --- Data ---

const CARDS: CardData[] = [
  {
    id: 'global-comm',
    title: 'Global Communication',
    question: (
      <>
        Hesitant proposals?<br />Unclear emails?
      </>
    ),
    subtitle: 'Communicate fluently with global buyers.',
    solutionTitle: 'The Solution',
    solutionText: 'Professional English communication — handled for you.',
    icon: MessageSquare,
    iconDelay: '0s',
    cardDelay: '0s',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300&h=200', // Document
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=200', // Meeting
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300&h=200', // Video call
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300&h=200', // Proposal
    ]
  },
  {
    id: 'social-content',
    title: 'Social & Content',
    question: (
      <>
        Lost content?<br />Disconnected visuals?
      </>
    ),
    subtitle: 'Reach western audiences effectively.',
    solutionTitle: 'The Solution',
    solutionText: 'Engaging, global-ready social content and strategy.',
    icon: Megaphone,
    iconDelay: '0.5s',
    cardDelay: '0.2s',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=300&h=200', // Social feed
      'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=300&h=200', // Planning
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200', // Analytics
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=300&h=200', // Branding
    ]
  },
  {
    id: 'sales-market',
    title: 'Sales & Market',
    question: (
      <>
        Lost buyers?<br />Unclear pitches?
      </>
    ),
    subtitle: 'Build a high-revenue global pipeline.',
    solutionTitle: 'The Solution',
    solutionText: 'Turning language into your primary sales advantage.',
    icon: Zap,
    iconDelay: '1s',
    cardDelay: '0.4s',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300&h=200', // Handshake
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=200', // Pitch
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300&h=200', // Strategy
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200', // Growth
    ]
  },
  {
    id: 'global-strategy',
    title: 'Global Strategy',
    question: (
      <>
        Limited insights?<br />Local-only decks?
      </>
    ),
    subtitle: 'Master your international market entry.',
    solutionTitle: 'The Solution',
    solutionText: 'Data-driven global strategy from research to pitch.',
    icon: Globe,
    iconDelay: '1.5s',
    cardDelay: '0.6s',
    images: [
      'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=300&h=200', // Map
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=200', // Team
      'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=300&h=200', // Global
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300&h=200', // Meeting
    ]
  }
];

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
        {/* Floating Icon Box - Positioned absolutely relative to container but transformed */}
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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fcfdfe] font-sans text-slate-900">

      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(#bfdbfe 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-blue-50/50 via-transparent to-white"></div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 uppercase">Our Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Where Do You Feel the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">English Barrier</span> Most?
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every day, global opportunities are lost to simple language gaps.
            Hover over the cards to see how we solve your specific challenges.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-2 pb-20">
          {CARDS.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>

      </main>

      {/* Global Styles for custom animations/utilities that Tailwind doesn't cover easily inline */}
      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}