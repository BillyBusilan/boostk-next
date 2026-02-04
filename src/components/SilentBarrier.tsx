import React from 'react';

export default function SilentBarrier() {
    return (
        <section className="px-6 md:px-20 lg:px-40 py-20 bg-black/40 backdrop-blur-md">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">The Silent Barrier</h2>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Every day, opportunities pass by...
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="pop-card bg-white/5 p-8 rounded-2xl border border-white/10 shadow-pop flex flex-col gap-6 relative overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors">

                        {/* Email Icon */}
                        <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 text-white">Unanswered Emails</h3>
                        </div>
                    </div>
                    <div className="pop-card bg-white/5 p-8 rounded-2xl border border-white/10 shadow-pop flex flex-col gap-6 relative overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors">
                        {/* Message Icon */}
                        <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 text-white">Lost Conversations</h3>
                        </div>
                    </div>

                    <div className="pop-card bg-white/5 p-8 rounded-2xl border border-white/10 shadow-pop flex flex-col gap-6 relative overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors">
                        {/* Increasing Graph Icon */}
                        <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">trending_up</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 text-white">Missed Deal</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
