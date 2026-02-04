import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative px-6 md:px-20 lg:px-40 py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                        <span className="material-symbols-outlined text-sm">public</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Connecting Everyone to the World</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em] space-grotesk text-white">
                            Speak Local <span className="text-primary">Sell Global</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-[500px]">
                            Exceptional products. World-class technology. Outstanding service. Don't let the English language barrier become the glass ceiling between your business and international opportunities.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex min-w-[450px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/40 hover:scale-105 transition-transform hover:bg-primary-dark">
                            Request Free Consultation
                        </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden relative">
                                <Image alt="User avatar" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOZKQf_VjmfqZSEGSQPTR76BvGuRbfurHLa08bxn9-y8Xpggp17dv-ZzP9Kb8sDGivmWdLgOZ6w9O-spUT3WBZk3cz29DqNilaVSIp-Q7kznIJoFQ1KMCssu-TFxZc9uFgMYtWLoJQXnO_EQae4YTk_Yvl6X36grEHqxhmPywwhq-PMADxcH1wdcBb21G1bBa2sGrOqV1rd_hFCxZb01Xj9DNaG0sOEnfNkXhRHTyzpQ-dnPFDBwCch4DUxYt2nS49R1keVg2bAo0" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center overflow-hidden relative">
                                <Image alt="User avatar" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3PT-GzasGfojTL0GHt1TH8NK55owEGnoW6KRITMwsJFJQcIW0XXMoPpdLDptlmlDoJdd7TkgwSoDUOPigXoLfMLtZdqtelAycutr4YGyolUuZr0voam_vJHIZVG89498FJqV_58l9l0QFpeo7dEq5fCajKz_e4XAT9t9L1SWgxRixlhk4QCn82KB0X0wvFo4c2eX4nedrmmqYyMu1PlAsgLV_Coxj3irt3sQOHwEybrIHp9knPhv2JfBh3_Ke5xhPq4yCBybSLf4" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300 flex items-center justify-center overflow-hidden relative">
                                <Image alt="User avatar" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0u-RNuvNx11mDTqbIDZk5c4olCtz-ZEoDcpypNJnc2JInsdpvpOshwCAC6mzRUxb75rdQVHJTta0OUI2aohKnNsg22r6lMZnubMzQT_GbEIDGMYTezFQZlWiJ1q0fZkXWtcKyZr-WOh_ZDfrLbTib7LCe6nqsvBAwuXSMhn1Lc7YO1t69sQlNS0WVtIeiTPYNusLcyvXyy5kPcSwFUv4pStzM4cXMy_jbIU9gI8DplQhSKs2U0JuIVmXBgByXKlKkW63LpEh0xL8" />
                            </div>
                        </div>
                        <p><span className="text-primary"></span> <span className="italic">It's not just your company, all small and medium-sized Korean companies are in the same situation.</span></p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="relative rounded-2xl bg-white/10 backdrop-blur-md p-2 shadow-2xl border border-white/20 rotate-0 hover:rotate-0 transition-all duration-500">
                        <div className="rounded-xl overflow-hidden aspect-[4/3] relative transform-none">
                            <Image
                                alt="Diverse team of social media managers working in a modern office"
                                fill
                                className="object-cover transform-none"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC8bHutw1giQgx0pGGLFTbNqOzbLd5nnj2QG7np-vWp9mAv7Nqj7p2c5M_-c-HFSD3FJfc1YeEwXSWrQJVQYmdl055VXlTXdwD041zAQUu8chAkWh2Ai5XTk14bhq9Nk6QVVoTZIxYX2VpuhiveQ8G6UfDzBzgPKwXJMdsDAdfbd5vPHZ3wloRv2VQxN1re1ugRnKjgS9PL7EG-_gbqaTi5s_y4f4IyEj4fn4EwIQWG7QeSVfZgp8EiNGqOxq2dHvcc3cn2r2S1TE"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
