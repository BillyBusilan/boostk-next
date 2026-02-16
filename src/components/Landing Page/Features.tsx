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
  <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
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
  <div className="w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] bg-white border-0 shadow-[0_10px_30px_-5px_rgba(59,130,245,0.08)] p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 lg:gap-5 flex-shrink-0 rounded-lg">
    <div className="flex justify-between items-start">
      <div className="flex text-primary gap-0.5">
        {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>)}
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
      &quot;{quote}&quot;
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
    <section className="py-12 lg:py-24 bg-blue-50/20 border-y border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-16 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 mb-3">When Your Team Speaks English, Opportunity Arrives</h2>
        <p className="text-sm lg:text-base text-slate-500 max-w-lg mx-auto">Proven results from companies just like yours across global channels.</p>
      </div>
      <div className="relative w-full">
        <div className="flex overflow-hidden w-full no-scrollbar justify-center">
          <div className="animate-marquee py-6 space-x-6 flex justify-center">
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
