import React from 'react';

const Step = ({ 
  num, 
  icon, 
  title, 
  desc, 
  stats 
}: { 
  num: string, 
  icon: string, 
  title: string, 
  desc: string, 
  stats: { label: string, value: string, color?: string }[] 
}) => (
  <div className="flex gap-8 group">
    <div className="relative z-10 flex-shrink-0">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-2 border-primary rounded-lg shadow-sm flex items-center justify-center relative transition-transform group-hover:scale-105">
        <span className="text-2xl md:text-4xl font-black text-primary font-mono">{num}</span>
      </div>
    </div>
    <div className="flex-grow pt-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">{icon}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>
      <p className="text-slate-500 text-base md:text-lg mb-4 max-w-2xl leading-relaxed">{desc}</p>
      <div className="flex gap-6 font-mono text-xs md:text-sm text-slate-400">
        {stats.map((stat, i) => (
          <span key={i} className="flex items-center gap-2">
            {stat.label}: <span className={`font-bold ${stat.color || 'text-slate-600'}`}>{stat.value}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Steps = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-3 tracking-tight">Simple. Fast. Effective.</h2>
          <p className="text-lg text-slate-500 font-medium">3 steps to global growth</p>
        </div>
        <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 timeline-line-glow hidden md:block"></div>
          <div className="space-y-16 relative">
            <Step 
              num="01" 
              icon="chat_bubble" 
              title="Chat & Configure" 
              desc="Tell us your story. Our AI analyzes your inputs to structure the initial campaign parameters."
              stats={[
                { label: 'Status', value: 'Ready', color: 'text-emerald-500' },
                { label: 'Latency', value: '12ms' }
              ]}
            />
            <Step 
              num="02" 
              icon="groups" 
              title="Match Team" 
              desc="Meet your dedicated growth squad. Experts are assigned based on your industry vertical."
              stats={[
                { label: 'Status', value: 'Waiting' },
                { label: 'Available', value: '4/5', color: 'text-primary' }
              ]}
            />
            <Step 
              num="03" 
              icon="rocket_launch" 
              title="Execute Growth" 
              desc="Watch it happen. Real-time dashboards light up as leads and conversions start flowing."
              stats={[
                { label: 'Status', value: 'Locked' },
                { label: 'Est. Yield', value: '+240%', color: 'text-primary' }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};