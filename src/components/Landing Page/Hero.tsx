import Image from 'next/image';

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 border-b border-border-light bg-white/95 backdrop-blur-md h-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex justify-between items-center h-full">
        <div className="flex-shrink-0 flex items-center gap-2">
          <Image src="/images/logo.webp" alt="BOOSTK" width={100} height={30} className="h-8 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {['Services', 'Solution', 'Pricing', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium text-slate-600 hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-primary hover:bg-primary-hover shadow-sm transition-all">
            Start Now
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const StatCard = ({ icon, title, value, sub }: { icon: string, title: string, value: string, sub: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(59,130,245,0.1)] border border-blue-50 hover:border-blue-100 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-4">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
    <p className="text-3xl font-display font-extrabold text-primary mb-2">{value}</p>
    <p className="text-xs text-slate-500 uppercase tracking-wide">{sub}</p>
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
      <header className="pt-20 pb-8 lg:pt-24 lg:pb-12 overflow-hidden relative dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start mb-8">
            <div className="lg:col-span-5 pt-4">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-wide uppercase mb-4 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                Global Access Live
              </div>
              <h1 className="text-3xl lg:text-5xl font-display font-extrabold tracking-tight text-primary mb-4 leading-tight">
                Speak Local. <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Sell Global.</span>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                Don't let the language barrier act as a glass ceiling. We act as your in-house global department for sales, marketing, and strategy.
              </p>
              <div className="flex gap-3 mb-8">
                <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover shadow-lg transition-transform active:scale-95">
                  Consultation
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 mt-8 lg:mt-0 relative flex flex-col gap-0">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="aspect-[21/9] bg-slate-100 relative group overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAI0LcWAYjbWfbbBzhXT6wMtDH5L1-AAStRfzwf1GrZ9IS938fjaB40cdbgMbRoC2CkcIXRm5YN4ApdfnRn80TQmhTIyc9ONK0KLdu4mcSsV8_iwmCORc9lQh61RE7V43grMeDRxO09EtwahwpSIi85lkzwhPApkCW3wCQ0gFa1SYeCYAIvc820eOLq1pHVxs2OhzZ4j3tSy3SJ8-7eFVGf84bNMUxRaa5OXQUWLqt6-66LqvMtpFBMazgwbjCXkmnqqqzggkNhMoLo"
                  >
                    <source src="/videos/herovideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/50 mt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-[1px] bg-slate-200 flex-grow mr-4"></div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">THE SILENT BARRIER</p>
                  <div className="h-[1px] bg-slate-200 flex-grow ml-4"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <SmallInfoCard icon="mail" title="Unanswered Emails" sub="Average 40% drop-off" />
                  <SmallInfoCard icon="chat_bubble" title="Lost Conversations" sub="Misunderstood intent" />
                  <SmallInfoCard icon="notifications" title="Missed Deals" sub="Delayed response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-blue-50/50 py-12 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] bg-blue-200 w-12 mr-4"></div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider text-center">GLOBAL IMPACT</p>
            <div className="h-[1px] bg-blue-200 w-12 ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StatCard icon="trending_up" title="Lead Growth" value="180%" sub="Increase in pipeline" />
            <StatCard icon="public" title="New Partners" value="94+" sub="Added this quarter" />
            <StatCard icon="bolt" title="Faster Sales" value="3x" sub="Deal velocity speed" />
          </div>
        </div>
      </section>
    </>
  );
};