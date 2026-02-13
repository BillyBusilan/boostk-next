import React from 'react';
import { MessageSquare, Users, Rocket } from 'lucide-react';

// --- Types ---
interface StepData {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Data ---
const steps: StepData[] = [
  {
    id: 1,
    title: "Chat & Configure",
    description: "Tell us your story. Our AI analyzes your inputs to structure the initial campaign parameters.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Match Team",
    description: "Meet your dedicated growth squad. Experts are assigned based on your industry vertical.",
    icon: Users,
  },
  {
    id: 3,
    title: "Execute Growth",
    description: "Watch it happen. Real-time dashboards light up as leads and conversions start flowing.",
    icon: Rocket,
  },
];

// --- Components ---

const Header: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">Three Step Plan</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
        Simple, Fast,
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400"> Effective</span>
      </h2>
    </div>
  );
};

interface StepItemProps {
  step: StepData;
  isLast: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
  const Icon = step.icon;
  const formattedId = step.id.toString().padStart(2, '0');

  return (
    <div className="relative flex items-start gap-6 md:gap-10 group min-h-[140px]">
      {/* Connecting Line */}
      {!isLast && (
        <div
          className="absolute left-[55px] top-[110px] -bottom-6 md:-bottom-2 w-[2px] bg-blue-100 -translate-x-1/2 -z-10"
          aria-hidden="true"
        />
      )}

      {/* Step Card */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-[110px] h-[110px] bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border border-blue-100 flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)] group-hover:border-blue-200">
          <Icon className="w-9 h-9 text-primary mb-0.5" strokeWidth={2} />
          <span className="font-display font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400">
            {formattedId}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="pt-2 md:pt-3 max-w-md">
        <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-primary transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed font-sans">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const ProcessList: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 relative">
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

export const Steps: React.FC = () => {
  return (
    <main
      className="flex flex-col items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F8FAFC]"
      style={{
        backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    >
      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-2xl mx-auto w-full z-10">
        <Header />
        <ProcessList />
      </div>
    </main>
  );
};
