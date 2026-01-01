"use client"

import Image from "next/image"

// Helper to generate a placeholder text image URL if needed, or use simple text/svgs
// For now, I will use text representation styled to look like logos for simplicity and speed, 
// or simple SVG placeholders if possible. Text is safest to avoid broken images.
const logos = [
    { name: "Forbes", width: 120 },
    { name: "Bloomberg", width: 140 },
    { name: "CNBC", width: 80 },
    { name: "Financial Times", width: 160 },
    { name: "TechCrunch", width: 130 },
]

export function TrustStrip() {
    return (
        <section className="bg-white border-b border-gray-100 py-10">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                    As Featured In
                </p>

                <div className="flex flex-wrapjustify-center items-center justify-between gap-8 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                    {/* 
              Using text-based logos for now to ensure no broken images. 
              In a real project, these would be SVG assets.
           */}
                    <h3 className="text-2xl font-serif font-bold text-gray-800">Forbes</h3>
                    <h3 className="text-2xl font-sans font-black tracking-tighter text-gray-800">Bloomberg</h3>
                    <h3 className="text-2xl font-serif font-bold italic text-gray-800">CNBC</h3>
                    <h3 className="text-2xl font-serif uppercase tracking-widest text-gray-800 border-b-2 border-black pb-1">Yahoo! Finance</h3>
                    <h3 className="text-2xl font-sans font-bold text-gray-800">BUSINESS INSIDER</h3>
                </div>
            </div>
        </section>
    )
}
