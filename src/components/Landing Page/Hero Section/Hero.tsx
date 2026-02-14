'use client';

import { Globe } from './Globe';
import { Navbar } from './Navbar';


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


              {/* <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-black uppercase tracking-wider whitespace-nowrap">THE SILENT BARRIER</p>
              </div> */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <SmallInfoCard icon="mail" title="Unanswered Emails" sub="Average 40% drop-off" />
                <SmallInfoCard icon="chat_bubble" title="Lost Conversations" sub="Misunderstood intent" />
                <SmallInfoCard icon="notifications" title="Missed Deals" sub="Delayed response" />
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};