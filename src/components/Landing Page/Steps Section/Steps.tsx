import React from "react";
import { growthSteps } from "../../../data/steps";
import { StepsCard } from "./StepsCard";
import { Arrow } from "./Arrow";

export const Steps: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-slate-50 flex flex-col items-center justify-center min-h-[800px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">
                Upward Growth Plan
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Simple, Fast,{" "}
            <span className="relative inline-block text-blue-600">
              Effective
              <svg
                className="absolute w-full h-3 bottom-0 left-0 text-blue-200 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            We've distilled the complex process of global expansion into three
            actionable steps. Watch your business climb to new heights.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* SVG Connector */}
          <Arrow />

          {/* Grid Layout for Staircase Effect */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 min-h-[400px]">
            {/* Step 1: Bottom */}
            <div className="md:self-end md:mb-0">
               <StepsCard 
                  step={growthSteps[0]} 
                  animationClass="animate-float-slow" 
               />
            </div>

            {/* Step 2: Middle */}
            <div className="md:self-end md:mb-24">
                <StepsCard 
                  step={growthSteps[1]} 
                  animationClass="animate-float-medium" 
               />
            </div>

            {/* Step 3: Top */}
            <div className="md:self-end md:mb-48">
                <StepsCard 
                  step={growthSteps[2]} 
                  animationClass="animate-float-fast" 
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
