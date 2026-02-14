import { CardData } from '../types/barrier';
import { MessageSquare, Megaphone, Zap, Globe } from 'lucide-react';

export const BARRIER_CARDS: CardData[] = [
  {
    id: 'global-comm',
    title: 'Global Communication',
    question: (
      <>
        Hesitant proposals?<br />Unclear emails?
      </>
    ),
    subtitle: 'Communicate fluently with global buyers.',
    solutionTitle: 'The Solution',
    solutionText: 'Professional English communication — handled for you.',
    icon: MessageSquare,
    iconDelay: '0s',
    cardDelay: '0s',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300&h=200',
    ]
  },
  {
    id: 'social-content',
    title: 'Social & Content',
    question: (
      <>
        Lost content?<br />Disconnected visuals?
      </>
    ),
    subtitle: 'Reach western audiences effectively.',
    solutionTitle: 'The Solution',
    solutionText: 'Engaging, global-ready social content and strategy.',
    icon: Megaphone,
    iconDelay: '0.5s',
    cardDelay: '0.2s',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=300&h=200',
    ]
  },
  {
    id: 'sales-market',
    title: 'Sales & Market',
    question: (
      <>
        Lost buyers?<br />Unclear pitches?
      </>
    ),
    subtitle: 'Build a high-revenue global pipeline.',
    solutionTitle: 'The Solution',
    solutionText: 'Turning language into your primary sales advantage.',
    icon: Zap,
    iconDelay: '1s',
    cardDelay: '0.4s',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200',
    ]
  },
  {
    id: 'global-strategy',
    title: 'Global Strategy',
    question: (
      <>
        Limited insights?<br />Local-only decks?
      </>
    ),
    subtitle: 'Master your international market entry.',
    solutionTitle: 'The Solution',
    solutionText: 'Data-driven global strategy from research to pitch.',
    icon: Globe,
    iconDelay: '1.5s',
    cardDelay: '0.6s',
    images: [
      'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=300&h=200',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300&h=200',
    ]
  }
];