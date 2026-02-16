export interface PricingPlan {
    title: string;
    price: string;
    subtitle: string;
    bestFor: string;
    icons: string[];
    features: string[];
    cta: string;
    highlight?: boolean;
    badge?: string;
}

export const pricingPlans: PricingPlan[] = [
    {
        title: "Starter",
        price: "199",
        subtitle: "Get started with our basic plan",
        bestFor: "Individuals or small businesses",
        icons: ['shopping_cart', 'chat_bubble_outline', 'support_agent', 'bolt'],
        features: ['Live Chat Support', '', '', 'Live chat (Korean office hours)'],
        cta: "Get Started",
        badge: "Best Value"
    },
    {
        title: "Content & Presence",
        price: "399",
        subtitle: "Build your global brand visibility",
        bestFor: "Brands ready to speak English professionally",
        icons: ['psychology', 'campaign', 'play_circle', 'edit_document'],
        features: [
            'Social Media Posts',
            'Content Variety',
            'Video Production',
            'Social media content (Facebook, Instagram, TikTok)',
            'Email marketing campaigns',
            'Video production & editing',
            'Catalogue & ad design',
            'Weekly performance reports'
        ],
        cta: "Start Creating Content"
    },
    {
        title: "Sales & Commerce",
        price: "999",
        subtitle: "Sell globally with full support",
        bestFor: "Companies actively selling in international markets",
        icons: ['trending_up', 'storefront', 'bar_chart', 'language'],
        features: [
            'Product Listings',
            'Live Chat Support',
            'Multi-Platform Management',
            'Marketplace management (Amazon, Shopee, Lazada)',
            'Competitor analysis',
            'Live chat (Korean office hours)',
            'Product listing optimization',
            'Social media content (Facebook, Instagram, TikTok)',
            'Email marketing campaigns',
            'Video production & editing',
            'Catalogue & ad design',
            'Weekly performance reports'
        ],
        cta: "Grow Your Sales",
        highlight: true,
        badge: "Most Popular"
    },
    {
        title: "Startups. Teams. Enterprise. That's it.",
        price: "2599",
        subtitle: "Full partnership development team",
        bestFor: "Businesses expanding aggressively into global markets",
        icons: ['rocket_launch', 'handshake', 'folder_open', 'groups'],
        features: [
            'Partnership Pipeline',
            'Professional Materials',
            'Your Dedicated Team',
            'Active buyer prospecting',
            '2 dedicated BD specialists',
            'Partnership negotiation support',
            'Enterprise priority support',
            'Marketplace management (Amazon, Shopee, Lazada)',
            'Market research & competitor analysis',
            'Live chat (Korean office hours)',
            'Product listing optimization',
            'Social media content (Facebook, Instagram, TikTok)',
            'Email marketing campaigns',
            'Video production & editing',
            'Catalogue & ad design',
            'Weekly performance reports'
        ],
        cta: "Build My Global Team",
        badge: "Full-Service"
    }
];
