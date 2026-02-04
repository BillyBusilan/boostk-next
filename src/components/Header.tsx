"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
    else setLanguage("English");
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setShowDropdown(false); 
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-white/10 bg-black/20 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between">
      <h2 className="text-xl font-extrabold leading-tight tracking-[-0.015em] text-white">
        BOOSTK
      </h2>

      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <Link
          className="text-sm font-semibold hover:text-primary transition-colors text-slate-200"
          href="#"
        >
          Services
        </Link>
        <Link
          className="text-sm font-semibold hover:text-primary transition-colors text-slate-200"
          href="#"
        >
          Solution
        </Link>
        <Link
          className="text-sm font-semibold hover:text-primary transition-colors text-slate-200"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-semibold hover:text-primary transition-colors text-slate-200"
          href="#"
        >
          Contact
        </Link>
      </nav>

      <div className="flex gap-3 items-center">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary hover:bg-primary/30 transition-all cursor-pointer"
          title="Toggle dark mode"
        >
          <span className="material-symbols-outlined text-2xl">
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </button>

        <div className="relative hidden sm:block">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex min-w-[120px] items-center justify-between rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-bold transition-all hover:bg-white/20"
          >
            🌐 {language}
            <span className="material-symbols-outlined text-sm ml-1">
              expand_more
            </span>
          </button>

          {showDropdown && (
            <div className="absolute top-12 left-0 w-full bg-white/20 backdrop-blur-md text-white rounded-lg shadow-lg overflow-hidden z-10">
              <button
                onClick={() => handleLanguageChange("English")}
                className="w-full text-left px-4 py-2 hover:bg-white/30 transition-all"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("한국어")}
                className="w-full text-left px-4 py-2 hover:bg-white/30 transition-all"
              >
                  한국어 
              </button>
            </div>
          )}
        </div>

        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:scale-105">
          Request Consultation
        </button>
      </div>
    </header>
  );
}
