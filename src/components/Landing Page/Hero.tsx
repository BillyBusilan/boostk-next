'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';


import { Globe } from './Globe';
import { ScrollReveal } from '../ui/ScrollReveal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 I border-border-light bg-white/95 backdrop-blur-md h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image src="/images/logo.webp" alt="BOOSTK" width={100} height={30} className="h-8 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {['Services', 'Solution', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium text-slate-600 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-primary hover:bg-primary-hover shadow-sm transition-all">
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white border-b border-border-light shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {['Services', 'Solution', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

interface MetricData {
  title: string;
  value: string;
  subtext: string;
  icon: string;
  delay: string;
  stagger: string;
  accent: 'graph' | 'globe' | 'bolt';
}

const METRICS: MetricData[] = [
  { title: 'Lead Growth', value: '180%', subtext: 'Year over year', icon: 'trending_up', delay: '0s', stagger: 'md:mt-0', accent: 'graph' },
  { title: 'Global Partners', value: '94+', subtext: 'Added this quarter', icon: 'public', delay: '1.5s', stagger: 'md:mt-12', accent: 'globe' },
  { title: 'Deal Velocity', value: '3x', subtext: 'Faster to close', icon: 'bolt', delay: '0.7s', stagger: 'md:mt-24', accent: 'bolt' },
];

const MetricPlatform = ({ metric }: { metric: MetricData }) => (
  <div className={`relative group ${metric.stagger}`}>
    {/* Floating Icon */}
    <div
      className="absolute -left-6 -top-16 z-40 animate-bob pointer-events-none [transform-style:preserve-3d]"
      style={{ animationDelay: metric.delay }}
    >
      <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-blue-50 w-16 h-16 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
        <span className="material-symbols-outlined text-4xl text-primary">{metric.icon}</span>
      </div>
    </div>

    {/* 3D Platform Box */}
    <div className="relative w-full aspect-[4/3] [transform-style:preserve-3d] [transform:rotateX(35deg)_rotateZ(-5deg)_skewY(2deg)] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:[transform:rotateX(30deg)_rotateZ(-3deg)_skewY(2deg)_translateY(-20px)]">
      {/* Glow Shadow */}
      <div className="absolute top-24 left-8 w-11/12 h-5/6 bg-blue-500/40 filter blur-[60px] rounded-[40%] z-0 opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:blur-[80px] group-hover:scale-110"></div>

      {/* Top Surface */}
      <div className="relative w-full h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-slate-100 shadow-inner z-10 overflow-hidden [transform:translateZ(20px)]">
        {/* Decorative Accents */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.12] pointer-events-none">
          {metric.accent === 'graph' && (
            <svg className="w-full h-full absolute right-[-15%] top-[-5%] transform rotate-6" viewBox="0 0 200 200">
              <path className="animate-draw" style={{ stroke: '#3b82f5' }} d="M10,150 Q50,100 90,140 T190,50" fill="none" strokeWidth="8" strokeLinecap="round" />
            </svg>
          )}
          {metric.accent === 'globe' && (
            <div className="absolute -top-12 -right-12 w-[14rem] h-[14rem] opacity-60 pointer-events-none">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
                <circle cx="100" cy="100" r="90" className="animate-draw text-sky-500" strokeWidth="8" strokeDasharray="600" />
                <ellipse cx="100" cy="100" rx="90" ry="30" className="animate-draw text-sky-400" strokeWidth="8" strokeDasharray="600" style={{ animationDelay: '1s' }} />
                <ellipse cx="100" cy="100" rx="90" ry="30" className="animate-draw text-sky-300" strokeWidth="8" strokeDasharray="600" style={{ animationDelay: '2s', transform: 'rotate(60deg)', transformOrigin: 'center' }} />
                <ellipse cx="100" cy="100" rx="90" ry="30" className="animate-draw text-sky-300" strokeWidth="8" strokeDasharray="600" style={{ animationDelay: '3s', transform: 'rotate(120deg)', transformOrigin: 'center' }} />
              </svg>
            </div>
          )}
          {metric.accent === 'bolt' && (
            <div className="absolute top-0 right-0 p-8 w-[12rem] h-[12rem] opacity-60 pointer-events-none">
              <svg className="w-full h-full animate-pulse-glow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
                <path d="M110 10 L10 110 H90 L80 190 L180 90 H100 L110 10Z" className="animate-draw text-sky-500" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>

        <div className="relative z-20 mt-6">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">{metric.title}</h3>
          <div className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter">{metric.value}</div>
        </div>

        <div className="relative z-20 border-t-2 border-slate-50 pt-6">
          <p className="text-sm font-bold text-primary flex items-center">
            <span className="material-symbols-outlined text-base mr-2">
              {metric.accent === 'graph' ? 'arrow_upward' : metric.accent === 'globe' ? 'add_circle' : 'speed'}
            </span>
            {metric.subtext}
          </p>
        </div>
      </div>

      {/* 3D Sides */}
      <div className="absolute top-full left-0 w-full h-[60px] bg-gradient-to-b from-sky-400 to-sky-600 rounded-b-[2rem] z-0 [transform-origin:top] [transform:rotateX(-90deg)] overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-full h-full w-[60px] bg-gradient-to-r from-sky-600 to-sky-700 rounded-r-[2rem] z-[-1] [transform-origin:left] [transform:rotateY(90deg)]"></div>
    </div>
  </div>
);

const SmallInfoCard = ({ icon, title, sub }: { icon: string, title: string, sub: string }) => (
  <div className="bg-white shadow-[0_10px_40px_-10px_rgba(59,130,245,0.1)] border-none relative p-3 h-28 w-full flex flex-col justify-between transition-all duration-300 rounded-lg hover:-translate-y-1">
    <div className="flex flex-col h-full justify-between">
      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-1">
        <span className="material-symbols-outlined text-sm">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold text-slate-800 text-xs leading-tight text-left mb-0.5">{title}</h3>
        <p className="text-[9px] text-slate-500 font-medium leading-tight">{sub}</p>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <>
      <Navbar />
      <header className="pt-20 pb-8 lg:pt-24 lg:pb-12 overflow-hidden relative bg-gradient-to-b from-blue-100 to-white">
        <Globe />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start mb-8">
            <div className="lg:col-span-5 pt-4">
              <div className="inline-flex items-center space-x-2 bg-sky-50 rounded-full px-3 py-1 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-sky-600 text-xs font-bold tracking-wide uppercase">Global Access Live</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Speak Local.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">Sell Global.</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Don't let the language barrier act as a glass ceiling. We act as your
                in-house global department for sales, marketing, and strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-primary/25 text-lg">
                  Request Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-1"></div>

            <div className="lg:col-span-6 relative mt-8 lg:mt-0">

              <div className="lg:col-span-7 mt-8 lg:mt-0 relative flex flex-col gap-0">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-[21/9] bg-slate-100 relative group overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                    >
                      <source src="/videos/herovideo1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-black uppercase tracking-wider whitespace-nowrap">THE SILENT BARRIER</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <SmallInfoCard icon="mail" title="Unanswered Emails" sub="Average 40% drop-off" />
                <SmallInfoCard icon="chat_bubble" title="Lost Conversations" sub="Misunderstood intent" />
                <SmallInfoCard icon="notifications" title="Missed Deals" sub="Delayed response" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-blue-50/50 py-12 pb-24 border-t border-blue-100 relative overflow-hidden">
        <ScrollReveal animation="fade-up" delay={600} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">Global Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
              Elevating Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">Into New Dimensions</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Our platform provides the structural foundation for exponential growth,
              visualized through our core impact metrics.
            </p>
          </div>
          <div className="[perspective:2500px] relative w-full pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-6">
              {METRICS.map((metric, i) => (
                <MetricPlatform key={i} metric={metric} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};