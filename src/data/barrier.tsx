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
    videos: [
      '/videos/hello13.mp4',
      '/videos/frustrated.mp4'
    ]
  },
  {
    id: 'social-content',
    title: 'Social & Content Strategy',
    question: (
      <>
        Lost content?<br />Disconnected visuals?
      </>
    ),
    subtitle: 'Reach global audiences effectively.',
    solutionTitle: 'The Solution',
    solutionText: 'Engaging, global-ready social content and strategy.',
    icon: Megaphone,
    iconDelay: '0.5s',
    cardDelay: '0.2s',
    videos: [
      '/videos/socialmedia.mp4',
      '/videos/socialmedia2.mp4'
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
    videos: [
      '/videos/marketing.mp4',
      'videos/marketing2.mp4'
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
    videos: [
      '/videos/planning.mp4',
      '/videos/planning2.mp4'
    ]
  }
];