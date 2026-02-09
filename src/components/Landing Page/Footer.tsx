import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#3b82f5] rounded-3xl p-12 md:p-16 border border-blue-600 max-w-4xl mx-auto shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-white/20">
                <span className="material-symbols-outlined text-[#ec4899] text-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">favorite</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight">
                We Believe In You
              </h2>
              <p className="text-lg text-blue-100 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                We’ll take the first small step toward the world together. Join high-performing teams already using BOOSTK to drive global growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
                <button className="px-8 py-3.5 bg-white text-[#3b82f5] font-bold text-base rounded-lg hover:bg-blue-50 transition-all shadow-md active:scale-95">
                  Get Started Now
                </button>
                <button className="px-8 py-3.5 bg-transparent border border-white/50 text-white font-bold text-base rounded-lg hover:bg-white/10 hover:border-white transition-all active:scale-95">
                  Contact Sales
                </button>
              </div>
              <p className="text-[11px] text-blue-100 font-medium tracking-wide opacity-80">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-16 font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-3 flex flex-col justify-between h-full space-y-8">
              <div>
                <Image src="/images/logo.webp" alt="BOOSTK" width={120} height={40} className="h-10 w-auto object-contain" />
              </div>
              <div className="space-y-2 text-slate-500">
                <p>System v3.14</p>
                <p>Seoul, Korea</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold text-primary uppercase tracking-wider">Platform</h4>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Services</a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-end">
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6 w-full max-w-md">
                <h4 className="font-bold text-primary mb-4 tracking-wide uppercase text-xs">System Status</h4>
                <p className="text-slate-600">All systems operational. Network latency &lt; 20ms.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button aria-label="Chat Support" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 rounded-full group">
        <span className="material-symbols-outlined text-2xl">chat_bubble</span>
      </button>
    </>
  );
};