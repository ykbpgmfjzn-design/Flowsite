"use client"

import { Sparkles } from "lucide-react"

export function TrustStrip() {
    const logos = [
        { name: "Forbes", className: "text-2xl font-serif font-bold" },
        { name: "Bloomberg", className: "text-2xl font-sans font-black tracking-tighter" },
        { name: "CNBC", className: "text-2xl font-serif font-bold italic" },
        { name: "Yahoo! Finance", className: "text-xl font-serif uppercase tracking-widest" },
        { name: "BUSINESS INSIDER", className: "text-xl font-sans font-bold tracking-wide" }
    ]

    return (
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-white border-y border-gray-100 py-12 overflow-hidden">
            {/* Subtle background animation */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-100 to-transparent rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced title */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-300" />
                    <p className="text-center text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="bg-gradient-to-r from-gray-400 via-purple-400 to-gray-400 bg-clip-text text-transparent">
                            As Featured In
                        </span>
                        <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
                </div>

                {/* Logos grid with stagger animation */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="group/logo relative animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover/logo:opacity-100 blur transition-opacity duration-500" />

                            {/* Floating animation wrapper */}
                            <div className="relative group-hover/logo:animate-float">
                                <h3
                                    className={`${logo.className} text-gray-600 group-hover/logo:text-transparent group-hover/logo:bg-clip-text group-hover/logo:bg-gradient-to-r group-hover/logo:from-purple-600 group-hover/logo:via-pink-600 group-hover/logo:to-cyan-600 transition-all duration-500 cursor-default filter grayscale group-hover/logo:grayscale-0 group-hover/logo:scale-110`}
                                >
                                    {logo.name}
                                </h3>

                                {/* Underline animation */}
                                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover/logo:w-full transition-all duration-500" />
                            </div>

                            {/* Decorative sparkle */}
                            <div className="absolute -top-1 -right-1 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
                                <Sparkles className="w-3 h-3 text-yellow-400 animate-sparkle" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative particles */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse opacity-40" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse opacity-40 animation-delay-500" />
                <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-cyan-300 animate-pulse opacity-30 animation-delay-1000" />
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        </section>
    )
}
