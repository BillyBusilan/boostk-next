import React from 'react';

const PricingCard = ({ 
  title, 
  price, 
  subtitle, 
  bestFor, 
  icons, 
  features, 
  cta, 
  highlight = false,
  badge
}: { 
  title: string, 
  price: string, 
  subtitle: string, 
  bestFor: string, 
  icons: string[], 
  features: string[], 
  cta: string, 
  highlight?: boolean,
  badge?: string
}) => (
  <div className={`bg-white border p-8 flex flex-col relative shadow-sm hover:shadow-md transition-all ${highlight ? 'border-2 border-primary scale-105 z-10 rounded-lg shadow-xl' : 'border-slate-200'}`}>
    {badge && (
      <div className={`absolute ${highlight ? '-top-4 left-1/2 -translate-x-1/2' : 'top-4 right-4'}`}>
        <span className={`${highlight ? 'bg-primary text-white shadow-lg px-4 py-1.5 rounded-full' : 'bg-blue-50 text-primary px-2 py-1 rounded border border-blue-100'} text-[10px] font-bold uppercase`}>
          {badge}
        </span>
      </div>
    )}
    <div className="mb-4">
      <div className="w-10 h-10 bg-blue-50 text-primary flex items-center justify-center mb-4 rounded">
        <span className="material-symbols-outlined">{icons[0]}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-6">{subtitle}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black text-slate-900">${price}</span>
        <span className="text-slate-400 text-sm">/mo</span>
      </div>
    </div>
    <div className={`${highlight ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'} p-4 mb-6 border rounded-lg`}>
      <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-primary' : 'text-slate-400'}`}>Best for:</p>
      <p className="text-sm font-semibold text-slate-700 leading-tight">{bestFor}</p>
    </div>
    <div className="mb-6">
      <p className="text-xs font-bold text-slate-900 mb-2">What You'll Get:</p>
      <div className="grid grid-cols-2 gap-2">
        {icons.map((icon, i) => (
          <div key={i} className="bg-slate-100 rounded h-12 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-400 text-sm">{icon}</span>
          </div>
        ))}
      </div>
    </div>
    <ul className="space-y-3 mb-10 flex-grow">
      {features.slice(0, 3).map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
           <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">check_circle_outline</span>
           <span>{f}</span>
        </li>
      ))}
      <div className="pt-4 mt-2 border-t border-slate-100">
        <p className="text-xs font-bold text-slate-900 mb-3">Also Includes:</p>
        <div className="space-y-2">
        {features.slice(3).map((f, i) => (
          <div key={i} className="flex items-start gap-3 text-xs font-medium text-slate-500">
            <span className="material-symbols-outlined text-primary text-sm flex-shrink-0">check</span>
            <span>{f}</span>
          </div>
        ))}
        </div>
      </div>
    </ul>
    <button className={`w-full py-4 font-bold text-sm tracking-wide transition-colors rounded ${highlight ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30' : 'bg-primary text-white hover:bg-primary-hover'}`}>
      {cta}
    </button>
    <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">Cancel anytime • No setup fees</p>
  </div>
);

export const Pricing = () => {
  return (
    <section className="py-24 bg-surface-light border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4 tracking-tight">See What You Get</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Not just services—real deliverables you can see and measure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PricingCard 
            title="Starter" 
            price="199" 
            subtitle="Get started with our basic plan" 
            bestFor="Individuals or small businesses"
            icons={['shopping_cart', 'chat_bubble_outline', 'support_agent', 'bolt']}
            features={['Live Chat Support', 'Live chat (Korean office hours)']}
            cta="Get Started"
            badge="Best Value"
          />
          <PricingCard 
            title="Content & Presence" 
            price="399" 
            subtitle="Build your global brand visibility" 
            bestFor="Brands ready to speak English professionally"
            icons={['psychology', 'campaign', 'play_circle', 'edit_document']}
            features={['Social Media Posts', 'Content Variety', 'Video Production', 'Social media content', 'Email marketing', 'Weekly reports']}
            cta="Start Creating Content"
          />
          <PricingCard 
            title="Sales & Commerce" 
            price="999" 
            subtitle="Sell globally with full support" 
            bestFor="Companies actively selling in international markets"
            icons={['trending_up', 'storefront', 'bar_chart', 'language']}
            features={['Product Listings', 'Live Chat Support', 'Multi-Platform Mgmt', 'Marketplace management', 'Competitor analysis', 'Listing optimization']}
            cta="Grow Your Sales"
            highlight={true}
            badge="Most Popular"
          />
          <PricingCard 
            title="Enterprise Growth" 
            price="2599" 
            subtitle="Full partnership development team" 
            bestFor="Businesses expanding aggressively into global markets"
            icons={['rocket_launch', 'handshake', 'folder_open', 'groups']}
            features={['Partnership Pipeline', 'Professional Materials', 'Dedicated Team', 'Active prospecting', 'BD specialists', 'Priority support']}
            cta="Build My Global Team"
            badge="Full-Service"
          />
        </div>
      </div>
    </section>
  );
};