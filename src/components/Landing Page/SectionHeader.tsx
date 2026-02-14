import React from 'react';

interface SectionHeaderProps {
  // Badge props
  badgeText: string;
  badgeColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  showPulse?: boolean;
  
  // Heading props
  title: string;
  highlightedText?: string;
  gradientColors?: string;
  
  // Description props
  description: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const colorConfig = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    dot: 'bg-blue-500',
    text: 'text-blue-600',
    gradient: 'from-blue-600 via-indigo-500 to-blue-400'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    dot: 'bg-purple-500',
    text: 'text-purple-600',
    gradient: 'from-purple-600 via-indigo-500 to-purple-400'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    dot: 'bg-green-500',
    text: 'text-green-600',
    gradient: 'from-green-600 via-emerald-500 to-green-400'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-100',
    dot: 'bg-red-500',
    text: 'text-red-600',
    gradient: 'from-red-600 via-rose-500 to-red-400'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    dot: 'bg-orange-500',
    text: 'text-orange-600',
    gradient: 'from-orange-600 via-amber-500 to-orange-400'
  }
};

const maxWidthConfig = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl'
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeColor = 'blue',
  showPulse = true,
  title,
  highlightedText,
  gradientColors,
  description,
  maxWidth = '2xl'
}) => {
  const colors = colorConfig[badgeColor];
  const gradient = gradientColors || colors.gradient;

  return (
    <div className="text-center mb-16">
      {/* Badge */}
      <div className={`inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
        <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} mr-2.5 ${showPulse ? 'animate-pulse' : ''}`} />
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
          {badgeText}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
        {highlightedText ? (
          <>
            {title}{' '}
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {highlightedText}
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* Description */}
      <p className={`text-base md:text-lg text-slate-500 ${maxWidthConfig[maxWidth]} mx-auto leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;