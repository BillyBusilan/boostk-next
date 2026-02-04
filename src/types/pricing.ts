export interface Feature {
    icon: React.ReactNode;
    text: string;
    description?: string;
}

export interface PricingTier {
    id: string;
    name: string;
    price: number;
    badge?: string;
    badgeColor: string;
    icon: React.ReactNode;
    iconColor: string;
    subtitle: string;
    bestFor: string;
    previewImages: string[];
    features: Feature[];
    includes: string[];
    ctaText: string;
    ctaColor: string;
    accentColor: string;
}
