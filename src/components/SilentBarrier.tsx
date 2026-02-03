import React from 'react';

export default function SilentBarrier() {
    return (
        <section className="px-6 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight dark:text-slate-100">The Silent Barrier</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Every day, opportunities pass by...
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="pop-card bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-pop flex flex-col gap-6 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 dark:text-slate-700/20 z-0">1</div>

                        {/* Email Icon */}
                        <div className="w-14 h-14 bg-sky-100 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 dark:text-slate-200">Unanswered Emails</h3>
                        </div>
                    </div>
                    <div className="pop-card bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-pop flex flex-col gap-6 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 dark:text-slate-700/20 z-0">2</div>

                        {/* Message Icon */}
                        <div className="w-14 h-14 bg-sky-100 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 dark:text-slate-200">Lost Conversations</h3>
                        </div>
                    </div>

                    <div className="pop-card bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-pop flex flex-col gap-6 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 dark:text-slate-700/20 z-0">3</div>

                        {/* Increasing Graph Icon */}
                        <div className="w-14 h-14 bg-sky-100 text-primary rounded-xl flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-3xl">trending_up</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 dark:text-slate-200">Missed Deal</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
