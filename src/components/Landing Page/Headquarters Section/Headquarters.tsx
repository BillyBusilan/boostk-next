'use client'
import React, { useState } from 'react';
import { ModuleId, ModuleContentData } from '../../../types/headquarters';
import { moduleContentData, MODULES } from '@/data/headquarters';
import { SectionHeader } from '../SectionHeader';

// Helper to map complex icon names if needed, though standard Material Symbols usually work directly
const getIcon = (iconName: string) => {
    if (iconName === 'strategy') return 'flag'; // Fallback for strategy
    return iconName;
}

// --- Components ---

const FloatingNodes = () => {
    return (
        <div className="absolute inset-0 bg-grid-tech pointer-events-none z-0 overflow-hidden">
            {[
                { left: '10%', top: '80%', delay: '0s' },
                { left: '20%', top: '60%', delay: '2s' },
                { left: '80%', top: '90%', delay: '4s' },
                { left: '70%', top: '50%', delay: '1s' },
                { left: '40%', top: '75%', delay: '3s' },
                { left: '90%', top: '85%', delay: '5s' },
            ].map((pos, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f5] opacity-60 animate-node"
                    style={{ ...pos, animationDelay: pos.delay }}
                />
            ))}
        </div>
    );
};

// --- Left Card Content Components ---
interface ContentRendererProps {
    data: ModuleContentData;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ data }) => (
    <div className="flex flex-col h-full justify-between animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-slate-100 pb-6">
            <div>
                <div className="text-xs  text-blue-500 uppercase tracking-widest mb-2">{data.title}</div>
                {data.quote ? <p className="text-slate-600 mb-6">&quot;{data.quote}&quot;</p> : null}


            </div>
            <div className="bg-blue-50 p-3 rounded-xl">
                <span className="material-symbols-outlined text-3xl text-blue-600">{getIcon(data.icon)}</span>
            </div>
        </div>

        {/* Metrics */}
        {data.metrics && (
            <div className="grid grid-cols-2 gap-4 mt-8">
                {data.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                        <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wide">{metric.label}</div>
                    </div>
                ))}
            </div>
        )}

        {/* Strategy Icon Display */}
        {data.id === 'strategy' && (
            <div className="mt-8 relative h-40 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-blue-500/20 animate-ping"></div>
                </div>
                <span className="material-symbols-outlined text-5xl text-blue-600 relative z-10 drop-shadow-xl">flag</span>
            </div>
        )}

        {/* Time Zones */}
        {data.timeZones && (
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {data.timeZones.map((tz, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-2xl font-bold mb-1">{tz.flag}</div>
                        <div className="text-xs uppercase font-bold text-slate-500">{tz.code}</div>
                        <div className="text-[10px] text-blue-500 font-mono mt-1">{tz.time}</div>
                    </div>
                ))}
            </div>
        )}

        {/* Progress Bars or Milestones */}
        <div className="mt-8 flex-grow">
            {data.progressBars && (
                <>
                    <h4 className="font-bold text-slate-700 mb-3">
                        {data.id === 'sales' ? 'Translation Fidelity' : 'Campaign Performance'}
                    </h4>
                    <div className="space-y-4">
                        {data.progressBars.map((bar, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                                    <span>{bar.label}</span>
                                    <span>{bar.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {data.milestones && (
                <>
                    <h4 className="font-bold text-slate-700 mb-3">Key Milestones</h4>
                    <ul className="space-y-4">
                        {data.milestones.map((milestone, i) => (
                            <li key={i} className="flex items-center p-3 rounded-lg bg-slate-50">
                                <span className={`material-symbols-outlined ${milestone.completed ? 'text-blue-500' : 'text-slate-400'} mr-3 text-xl`}>
                                    {milestone.completed ? 'check_circle' : 'radio_button_unchecked'}
                                </span>
                                <span className="text-sm font-medium text-slate-700">{milestone.label}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {data.inboxMessage && (
                <>
                    <h4 className="font-bold text-slate-700 mb-4">Latest Inquiries</h4>
                    <div className="flex items-start space-x-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-indigo-500/30">AI</div>
                        <div className="bg-blue-50 p-4 rounded-r-2xl rounded-bl-2xl text-sm text-slate-700 shadow-sm border border-slate-100">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="material-symbols-outlined text-xs text-blue-500">translate</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Translated from Japanese</span>
                            </div>
                            &quot;{data.inboxMessage}&quot;
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-slate-400 italic">Unified inbox for all client communications across timezones.</p>
                    </div>
                </>
            )}

            {data.description && (
                <p className="text-sm text-slate-600 leading-relaxed mt-6">{data.description}</p>
            )}
        </div>
    </div>
);

// --- Main App Component ---

export const Headquarters: React.FC = () => {
    const [activeModule, setActiveModule] = useState<ModuleId>('sales');

    const renderContent = () => {
        const contentData = moduleContentData.find(m => m.id === activeModule);
        if (!contentData) {
            const defaultData = moduleContentData.find(m => m.id === 'sales');
            return defaultData ? <ContentRenderer data={defaultData} /> : null;
        }
        return <ContentRenderer data={contentData} />;
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center overflow-x-hidden relative">
            <FloatingNodes />

            {/* Background Glows */}
            <div className="fixed top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[120px] -z-10"></div>

            <main className="w-full relative pt-0 pb-12 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-7xl mx-auto w-full px-4">

                    <div className="relative z-10 mb-12 w-full">
                        <SectionHeader
                            badgeText="Global Headquarters"
                            badgeColor='blue'
                            title="BOOSTK — Your Global"
                            highlightedText="Business Headquarters"
                            description="We're not just another outsourcing company. Our English-proficient professionals in the BOOSTK act as your in-house Global Department, handling all English-driven operations such as marketing, sales, business planning, and client communication. You focus on your product. We'll handle your global communication."
                            align="left"
                        />
                    </div>


                    {/* Two-Column Layout: Small Cards (left) + Large Card (right) */}
                    <div className="perspective-2000 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* LEFT COLUMN: Module Selector Cards */}
                        <div className="lg:col-span-5 flex flex-col order-1 space-y-4">
                            {MODULES.map((module) => {
                                const isActive = activeModule === module.id;

                                return (
                                    <div
                                        key={module.id}
                                        onClick={() => setActiveModule(module.id)}
                                        className="w-full relative group cursor-pointer"
                                        style={{
                                            height: '120px',
                                            perspective: '1000px',
                                        }}
                                    >
                                        <div className={`relative w-full h-full preserve-3d transition-all duration-300 ease-out rotate-x-10 ${isActive ? 'translate-y-[-5px]' : 'hover:translate-y-[-5px]'}`}>

                                            {/* Floating Icon Bob */}
                                            <div className={`absolute -top-[30px] -left-[10px] z-50 transform translate-z-[40px] transition-transform duration-500 ${!isActive ? 'animate-bob' : ''}`}>
                                                <div className="bg-white p-3 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] w-14 h-14 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-3xl text-[#3b82f5]">{getIcon(module.icon)}</span>
                                                </div>
                                            </div>

                                            {/* Card Shadow */}
                                            <div className={`absolute top-[20px] left-[5%] w-[90%] h-full bg-slate-900/40 blur-xl transform translate-z-[-30px] rounded-[20px] transition-all duration-500 ${isActive ? 'opacity-70 scale-105' : 'opacity-40 group-hover:opacity-60'}`}></div>

                                            {/* Card Top Face */}
                                            <div className={`
                        absolute inset-0 rounded-xl overflow-hidden translate-z-[10px] 
                        transition-all duration-300 bg-white
                        ${isActive
                                                    ? 'border border-slate-300 shadow-2xl'
                                                    : 'border border-slate-200 group-hover:border-blue-300'
                                                }
                      `}>
                                                <div className="relative w-full h-full p-6 flex items-center justify-center z-10">
                                                    {/* Centered Headers */}
                                                    <div className={`w-full flex items-center justify-center h-full transition-transform duration-500 ${isActive || 'group-hover:translate-x-1'}`}>
                                                        <h3 className={`text-center  text-2xl leading-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-blue-600'}`}>
                                                            {module.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT COLUMN: Large Display Card */}
                        <div className="lg:col-span-7 flex flex-col items-center order-2">
                            <div className="relative w-full max-w-2xl animate-float-master">
                                <div className="relative preserve-3d transition-transform duration-500 ease-out cursor-default md:rotate-x-10 h-auto md:h-[600px]">

                                    {/* Shadow */}
                                    <div className="hidden md:block absolute top-[20px] left-[5%] w-[90%] h-full bg-slate-900/40 blur-2xl transform translate-z-[-40px] rounded-[20px] opacity-50"></div>

                                    {/* Main Face */}
                                    <div className="relative md:absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden translate-z-[10px] p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50">
                                        {/* Content Fade Animation Wrapper */}
                                        <div key={activeModule} className="h-full animate-[fadeIn_0.5s_ease-in-out]">
                                            {renderContent()}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};