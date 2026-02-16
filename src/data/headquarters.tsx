import { ModuleData, ModuleContentData } from '../types/headquarters';

export const MODULES: ModuleData[] = [
  {
    id: 'marketing',
    title: 'Marketing and Content Strategy',
    icon: 'campaign',
    delay: '0.1s',
  },
  {
    id: 'sales',
    title: 'Sales and Lead Generation',
    icon: 'translate',
    delay: '0.25s',
  },
  {
    id: 'strategy',
    title: 'Business Planning Strategy',
    icon: 'strategy',
    delay: '0.4s',
  },
  {
    id: 'comms',
    title: 'Global Communication',
    icon: 'language',
    delay: '0.55s',
  },
];

export const moduleContentData: ModuleContentData[] = [
  {
    id: 'sales',
    title: 'Sales and Lead Generation',
    icon: 'translate',
    quote: "Turn language barriers into revenue bridges. Sell to other locals like a local.",
    metrics: [
      { value: '99.8%', label: 'Contextual Accuracy' },
      { value: '45+', label: 'Business Dialects' }
    ],
    progressBars: [
      { label: 'English to Local', percentage: 99, color: 'bg-blue-500' },
      { label: 'Local to Professional English', percentage: 98, color: 'bg-indigo-500' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing and Content Strategy',
    icon: 'campaign',
    quote: "Resonate, don't just reach. Content that strikes a chord in every culture.",
    metrics: [
      { value: '45%', label: 'Click-through Rate' },
      { value: '2.4M', label: 'Impressions' }
    ],
    progressBars: [
      { label: 'Asia', percentage: 82, color: 'bg-blue-500' },
      { label: 'Europe', percentage: 65, color: 'bg-indigo-500' }
    ],
  },
  {
    id: 'strategy',
    title: 'Business Planning Strategy',
    icon: 'flag',
    quote: "We don't just translate. We transplant your business into a new market.",
    milestones: [
      { label: 'Q3 Market Expansion', completed: true },
      { label: 'Resource Allocation', completed: true },
      { label: 'Fiscal Year Projection', completed: false }
    ]
  },
  {
    id: 'comms',
    title: 'Global Communication',
    icon: 'language',
    quote: "Real-time connection, zero translation lag. Your voice, globally understood.",
    timeZones: [
      { flag: '🇺🇸', code: 'NYC', time: '09:42 AM' },
      { flag: '🇬🇧', code: 'LDN', time: '02:42 PM' },
      { flag: '🇯🇵', code: 'TYO', time: '11:42 PM' }
    ],
    inboxMessage: "We would like to request a demo of the enterprise tier for our Tokyo branch."
  }
];