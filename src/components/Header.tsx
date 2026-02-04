"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-white/10 bg-black/20 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between">
            <h2 className="text-xl font-extrabold leading-tight tracking-[-0.015em] text-white">BOOSTK</h2>

            <nav className="hidden md:flex flex-1 justify-center gap-8">
                <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-200" href="#">Services</Link>
                <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-200" href="#">Solution</Link>
                <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-200" href="#">Pricing</Link>
                <Link className="text-sm font-semibold hover:text-primary transition-colors text-slate-200" href="#">Contact</Link>
            </nav>

            <div className="flex gap-3">
                {/* 🌗 Dark/Light Mode Button */}
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary hover:bg-primary/30 transition-all cursor-pointer"
                    title="Toggle dark mode"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isDarkMode ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>

                <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-bold transition-all hover:bg-white/20">
                    🌐 English
                </button>
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:scale-105">
                    Request Consultation
                </button>
            </div>
        </header>
    );
}
