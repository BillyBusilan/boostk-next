'use client';

import React, { useState } from 'react';

export const Showcase = () => {
  const [activeTab, setActiveTab] = useState('Emails');

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Showcase Your Reach</h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto">Visualize your global content strategy across multiple channels with our integrated tools.</p>
        </div>

        <div className="perspective-container relative h-[520px] w-full flex justify-center items-center mt-8">

          {/* Card Far Left */}
          <div className="absolute w-[280px] h-[520px] bg-white rounded-xl shadow-lg border border-slate-100 card-3d-left-far flex flex-col overflow-hidden transition-all duration-500">
            <div className="h-24 bg-[#00A3FF] flex flex-col p-6 text-white justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <span className="material-symbols-outlined text-6xl">chat</span>
              </div>
              <h3 className="font-bold text-xl uppercase leading-tight relative z-10">Cut<br />Response<br />Times.</h3>
            </div>
            <div className="p-4 flex-grow bg-slate-50 flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-3 rounded shadow-sm flex gap-3 items-start border border-slate-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0"></div>
                  <div className="space-y-1 w-full">
                    <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
                <span>Live Chat</span>
                <span className="text-emerald-500">Active</span>
              </div>
            </div>
          </div>

          {/* Card Left */}
          <div className="absolute w-[280px] h-[520px] bg-white rounded-xl shadow-xl border border-slate-100 card-3d-left flex flex-col overflow-hidden group transition-all duration-500">
            <div className="h-full bg-slate-50 relative">
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2 opacity-80">
                <div className="bg-white border border-slate-200 rounded-lg h-32 shadow-sm"></div>
                <div className="bg-white border border-slate-200 rounded-lg h-24 mt-8 shadow-sm"></div>
                <div className="bg-white border border-slate-200 rounded-lg h-28 shadow-sm"></div>
                <div className="bg-white border border-slate-200 rounded-lg h-32 shadow-sm"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-6 right-6">
                <div className="w-10 h-10 rounded-full border border-slate-200 mb-3 bg-white flex items-center justify-center shadow-lg shadow-blue-500/10 text-primary">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <p className="text-slate-900 font-display font-bold text-xl leading-tight tracking-tight">Connect the<br />End to End.</p>
              </div>
            </div>
          </div>

          {/* Center Card (Hero) */}
          <div className="absolute w-[340px] h-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200 card-3d-center flex flex-col overflow-hidden ring-4 ring-slate-50 transition-all duration-500 hover:scale-105">
            <div className="relative h-full flex flex-col">
              <div className="absolute inset-0 bg-slate-50 opacity-50" style={{ backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[80px] opacity-10 rounded-full pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full p-8 justify-center items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mb-8 flex items-center justify-center border border-slate-100 shadow-md text-primary">
                  <span className="material-symbols-outlined text-3xl">mark_email_read</span>
                </div>
                <h3 className="text-3xl font-display font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                  STOP<br />TRACKING,<br />START<br /><span className="text-primary">CLOSING.</span>
                </h3>
                <p className="text-slate-500 text-xs font-medium max-w-[200px] leading-relaxed mb-8">
                  Is your sales process a confusing mess of spreadsheets? There's a better way.
                </p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Right */}
          <div className="absolute w-[280px] h-[520px] bg-white rounded-xl shadow-xl border border-slate-100 card-3d-right flex flex-col overflow-hidden transition-all duration-500">
            <div className="bg-[#00B4D8] p-6 h-full text-white flex flex-col relative overflow-hidden">
              <div className="absolute bottom-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-9xl">help</span>
              </div>
              <h3 className="font-bold text-lg mb-6 relative z-10">Confusion.</h3>
              <div className="space-y-2 relative z-10">
                <div className="h-1 bg-white/30 rounded w-full"></div>
                <div className="h-1 bg-white/30 rounded w-2/3"></div>
                <div className="h-1 bg-white/30 rounded w-4/5"></div>
              </div>
            </div>
          </div>

          {/* Card Far Right */}
          <div className="absolute w-[280px] h-[520px] bg-white rounded-xl shadow-lg border border-slate-100 card-3d-right-far flex flex-col overflow-hidden transition-all duration-500">
            <div className="h-1/3 bg-[#1E1B4B] p-6 text-white flex flex-col justify-end relative">
              <h3 className="font-bold text-2xl uppercase leading-none relative z-10">See Every<br />Deal<br /><span className="text-indigo-400">Clearly</span></h3>
            </div>
            <div className="flex-grow bg-slate-50 p-4">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-900"></div>
                <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
                <div className="w-8 h-8 rounded-full bg-indigo-100"></div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center gap-4 md:gap-12 mt-20 border-t border-slate-100 pt-6 max-w-2xl mx-auto overflow-x-auto no-scrollbar">
          {['Videos', 'Images', 'SNS', 'Emails', 'News'].map((tab) => (
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