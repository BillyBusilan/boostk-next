import React from 'react';

// --- Barrier Grid Component ---

const BarrierCard = ({ 
  icon, 
  title, 
  questions, 
  solution, 
  visual 
}: { 
  icon: string, 
  title: string, 
  questions: string[], 
  solution: string, 
  visual: React.ReactNode 
}) => (
  <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <span className="material-symbols-outlined text-9xl text-primary">{icon}</span>
    </div>
    <div className="flex items-center gap-3 mb-6 relative z-10">
      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    </div>
    <div className="space-y-4 mb-8 flex-grow relative z-10">
      {questions.map((q, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">help</span>
          <p className="text-slate-600 text-sm">{q}</p>
        </div>
      ))}
    </div>
    <div className="mt-auto relative z-10">
      <div className="h-40 w-full bg-slate-50 rounded-lg border border-slate-100 mb-6 relative overflow-hidden grid-pattern-small">
        <div className="absolute inset-0 flex items-center justify-center opacity-80">
          {visual}
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex gap-3 items-center">
        <div className="bg-primary rounded-full p-1 flex-shrink-0">
          <span className="material-symbols-outlined text-white text-xs">check</span>
        </div>
        <p className="text-xs font-medium text-slate-700">{solution}</p>
      </div>
    </div>
  </div>
);

export const Barriers = () => (
  <section className="py-24 bg-surface-light relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-extrabold text-primary mb-2">Where Do You Feel the English Barrier Most?</h2>
        <p className="text-base text-slate-500 max-w-lg mx-auto">Self-diagnose the gap stopping your global growth</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BarrierCard 
          icon="mail" 
          title="Global Communication" 
          questions={["When you receive an English email, do you hesitate before replying?", "Are your proposals written in clear, confident English that impresses buyers?"]}
          solution="BOOSTK writes, designs, and communicates in fluent business English — for you."
          visual={
            <div className="w-3/4 bg-white shadow-lg rounded-lg p-3 border border-slate-100">
              <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
              <div className="h-2 w-full bg-slate-100 rounded mb-1"></div>
            </div>
          }
        />
        <BarrierCard 
          icon="campaign" 
          title="Social & Strategy" 
          questions={["Do your social posts speak only to local audiences?", "Do you struggle to create scroll-stopping content for global markets?"]}
          solution="BOOSTK creates scroll-stopping, English-ready content for your global market."
          visual={
            <div className="w-2/3 bg-white shadow-lg rounded-lg p-4 border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
              <div className="flex-grow space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded"></div>
                <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
              </div>
            </div>
          }
        />
        <BarrierCard 
          icon="trending_up" 
          title="Sales & Market Development" 
          questions={["Have you lost interested buyers because your English explanations weren't clear?", "Does your sales pipeline stall when communication switches to English?"]}
          solution="BOOSTK drives your sales funnel with native-level English negotiation."
          visual={
             <div className="w-3/4 bg-white shadow-lg rounded-lg p-4 border border-slate-100 flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <div className="h-2 w-1/4 bg-slate-200 rounded"></div>
                <div className="h-2 w-1/4 bg-green-100 rounded"></div>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
              <div className="h-2 w-1/2 bg-slate-100 rounded mt-1"></div>
            </div>
          }
        />
        <BarrierCard 
          icon="public" 
          title="Global Strategy & Planning" 
          questions={["Are competitors already marketing effectively in the U.S. and Europe?", "Is your investor deck ready for top-tier international VC review?"]}
          solution="BOOSTK builds your roadmap for seamless expansion into new territories."
          visual={
             <div className="w-3/4 h-24 bg-white shadow-lg rounded-lg p-2 border border-slate-100 flex items-center justify-center relative">
              <div className="absolute inset-0 m-auto w-24 h-24 border-[16px] border-blue-50 rounded-full border-t-primary rotate-45"></div>
              <div className="absolute text-center">
                <span className="text-xs font-bold text-primary">Global</span>
              </div>
            </div>
          }
        />
      </div>
    </div>
  </section>
);

// --- HQ Component ---

const ServiceItem = ({ icon, title, sub }: { icon: string, title: string, sub: string }) => (
  <div className="service-card group cursor-pointer p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
    <div className="flex items-center gap-4 relative z-10">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center service-icon-bg transition-colors duration-300">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-[11px] text-slate-500 font-medium">{sub}</p>
      </div>
    </div>
  </div>
);

export const Headquarters = () => (
  <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden" id="hq-section">
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern height="20" id="grid-sm" patternUnits="userSpaceOnUse" width="20">
            <circle cx="1" cy="1" fill="#3b82f5" r="1"></circle>
          </pattern>
        </defs>
        <rect fill="url(#grid-sm)" height="100%" width="100%"></rect>
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 mb-10 lg:mb-0">
          <h2 className="text-3xl font-display font-extrabold text-primary mb-3 leading-tight">
            BOOSTK — <span className="text-primary">Your Global Business Headquarters</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
            We act as your in-house Global Department. Select a division below to see how we integrate with your team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServiceItem icon="ads_click" title="Marketing & Content Strategy" sub="Strategy & Execution" />
            <ServiceItem icon="trending_up" title="Sales & Leads" sub="Generation & Closing" />
            <ServiceItem icon="business_center" title="Business Planning & Strategy" sub="Roadmap & Development" />
            <ServiceItem icon="language" title="Global Client Communication" sub="Translation & Outreach" />
          </div>
        </div>
        <div className="lg:col-span-5 h-full relative">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 lg:p-10 text-center shadow-lg min-h-[340px] flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[#3b82f5]/5 flex items-center justify-center mx-auto mb-6 border border-[#3b82f5]/10">
              <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Partnership Model</h3>
            <p className="text-slate-500 text-sm leading-relaxed mx-auto">
              We're embedded in your business as a remote extension of your team, not a vendor. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Marquee Component ---

const SuccessCard = ({ 
  tag, 
  title, 
  images, 
  quote, 
  author 
}: { 
  tag: string, 
  title: string, 
  images: { before: string, after?: string }, 
  quote: string, 
  author: string 
}) => (
  <div className="w-[400px] bg-white border-0 shadow-[0_10px_30px_-5px_rgba(59,130,245,0.08)] p-8 flex flex-col gap-5 flex-shrink-0 rounded-lg">
    <div className="flex justify-between items-start">
      <div className="flex text-primary gap-0.5">
        {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>)}
      </div>
      <span className="px-2.5 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase tracking-wider border border-blue-100">{tag}</span>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      <div className="relative bg-slate-50 overflow-hidden aspect-[4/3] rounded border border-slate-100">
        <img alt="Before" className="w-full h-full object-cover grayscale opacity-40" src={images.before} />
        <div className="absolute inset-0 flex items-center justify-center bg-white/20">
          <span className="text-[9px] bg-white/90 px-1.5 py-0.5 rounded-sm font-bold text-slate-500 uppercase border border-slate-200">Local</span>
        </div>
      </div>
      <div className="relative bg-slate-50 overflow-hidden aspect-[4/3] rounded border-2 border-primary/20">
        <img alt="After" className="w-full h-full object-cover" src={images.after || images.before} />
        <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
          <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded-sm font-bold uppercase">Global</span>
        </div>
      </div>
    </div>
    <blockquote className="text-sm text-slate-600 leading-relaxed font-medium italic border-l-3 border-primary/30 pl-4 border-l-4 border-primary/20">
      "{quote}"
    </blockquote>
    <div className="mt-auto pt-4 border-t border-slate-50">
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{author}</p>
    </div>
  </div>
);

export const Marquee = () => {
  const cards = [
    {
      tag: "SNS",
      title: "20% OFF campaign",
      images: { before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoFjVO2QeykdMHBNGX25x8ovP8J43hrJnKhr0Rz9LnVS9jICoVHa4CM2GX9Sn6bG5Tw7DAXSu_R8hufqJDnhf0Xov42u2ki4ts_ZSZDVzmEkZhbsX69-B5AxyvsyrM96VcyT9tuYWlLmUxfWhadZvwiCp0s6Eeqm92V96iNQsYtW8f0XuAQ4tSnwiZKC3QIOOyqd6i7d4QTG8WYAVJqFP-48w2XDgYxdEsCEb3S0lWx92gnFBcklMMV9URq5yAyuTxY7TN-1wLf69X", after: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WXM1F2i7-ifsqMmKgon4f36K_AWHTWVOTrSHj0Yw-DYg4J4av9Ad6viMd8ksmaHMPIMwH4DNo80ShJY57c_zEMhkpSOFugEZNncIgREHlS3AUnWnyZ8vlqJ1rlUxG7Z3UvwuMvvl_RwNgxgEf_eBPwLqn1GzCr9LH94nkQ8NfD53xVAjE5Blcz4VNYEgzfb80iVWHAjta2xi1lX61FObAFnTfIE32l2w-R4m355PYk7GWdQpUkS3c1UNFCWNVz1jfIj7sVI5MwpN" },
      quote: "The engagement doubled within 24 hours of the English launch.",
      author: "Alex Kim — CEO of Glasses"
    },
    {
      tag: "Sales",
      title: "$52K Direct Sales",
      images: { before: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WXM1F2i7-ifsqMmKgon4f36K_AWHTWVOTrSHj0Yw-DYg4J4av9Ad6viMd8ksmaHMPIMwH4DNo80ShJY57c_zEMhkpSOFugEZNncIgREHlS3AUnWnyZ8vlqJ1rlUxG7Z3UvwuMvvl_RwNgxgEf_eBPwLqn1GzCr9LH94nkQ8NfD53xVAjE5Blcz4VNYEgzfb80iVWHAjta2xi1lX61FObAFnTfIE32l2w-R4m355PYk7GWdQpUkS3c1UNFCWNVz1jfIj7sVI5MwpN", after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoFjVO2QeykdMHBNGX25x8ovP8J43hrJnKhr0Rz9LnVS9jICoVHa4CM2GX9Sn6bG5Tw7DAXSu_R8hufqJDnhf0Xov42u2ki4ts_ZSZDVzmEkZhbsX69-B5AxyvsyrM96VcyT9tuYWlLmUxfWhadZvwiCp0s6Eeqm92V96iNQsYtW8f0XuAQ4tSnwiZKC3QIOOyqd6i7d4QTG8WYAVJqFP-48w2XDgYxdEsCEb3S0lWx92gnFBcklMMV9URq5yAyuTxY7TN-1wLf69X" },
      quote: "Finally communicating clearly with international distributors.",
      author: "Sarah J. — Sales Director"
    },
    {
      tag: "Email",
      title: "340% ROI increase",
      images: { before: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI0LcWAYjbWfbbBzhXT6wMtDH5L1-AAStRfzwf1GrZ9IS938fjaB40cdbgMbRoC2CkcIXRm5YN4ApdfnRn80TQmhTIyc9ONK0KLdu4mcSsV8_iwmCORc9lQh61RE7V43grMeDRxO09EtwahwpSIi85lkzwhPApkCW3wCQ0gFa1SYeCYAIvc820eOLq1pHVxs2OhzZ4j3tSy3SJ8-7eFVGf84bNMUxRaa5OXQUWLqt6-66LqvMtpFBMazgwbjCXkmnqqqzggkNhMoLo" },
      quote: "BOOSTK rewrote our entire funnel into native-level copy.",
      author: "Marc Dupont — Tech Founder"
    }
  ];

  // duplicate for continuous scroll
  const allCards = [...cards, ...cards, ...cards]; 

  return (
    <section className="py-24 bg-blue-50/20 border-y border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-3">When Your Team Speaks English, Opportunity Arrives</h2>
        <p className="text-base text-slate-500 max-w-lg mx-auto">Proven results from companies just like yours across global channels.</p>
      </div>
      <div className="relative w-full">
        <div className="flex overflow-hidden w-full no-scrollbar">
          <div className="animate-marquee py-6 space-x-6 flex">
            {allCards.map((card, i) => (
              <SuccessCard 
                key={i} 
                tag={card.tag}
                title={card.title}
                images={card.images}
                quote={card.quote}
                author={card.author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
