import React from 'react';

export default function Experts() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-[1200px] mx-auto px-6">
                <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Experts across major global platforms</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-all">
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
                        <span className="material-symbols-outlined">photo_camera</span> Instagram
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
                        <span className="material-symbols-outlined">work</span> LinkedIn
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
                        <span className="material-symbols-outlined">alternate_email</span> X / Twitter
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
                        <span className="material-symbols-outlined">play_circle</span> YouTube
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-300">
                        <span className="material-symbols-outlined">music_note</span> TikTok
                    </div>
                </div>
            </div>
        </section>
    );
}
