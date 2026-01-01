"use client"

import { PropertySearchWidget } from "./PropertySearchWidget"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dimming Overlay */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1510662145379-13537db782dc?q=80&w=2832&auto=format&fit=crop"
                >
                    {/* Placeholder video - replace with actual Bali luxury real estate footage */}
                    <source src="https://cdn.pixabay.com/video/2020/05/25/40123-424930066_large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">

                <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6">
                        Bali's Premier Developer
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                        Leading Developer of <br />
                        <span className="text-primary italic">Luxury Real Estate</span> in Bali
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                        Invest in premium villas and apartments with <span className="text-primary font-semibold">11-15% ROI</span>.
                        Experience the perfect blend of luxury and tropical living.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                            Explore Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black">
                            Calculate ROI
                        </Button>
                    </div>
                </div>

                {/* Search Widget - Tier 0 Feature */}
                <div className="w-full max-w-5xl animate-fade-in-up delay-200">
                    <PropertySearchWidget />
                </div>

                {/* Trust Metrics */}
                <div className="mt-16 flex flex-wrap gap-8 md:gap-16 justify-center text-white/80 animate-fade-in-up delay-300">
                    <div className="text-center">
                        <p className="text-3xl font-heading font-bold text-white">13.7%</p>
                        <p className="text-xs uppercase tracking-wider">Avg. ROI</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-heading font-bold text-white">150k+</p>
                        <p className="text-xs uppercase tracking-wider">m² Built</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-heading font-bold text-white">12%</p>
                        <p className="text-xs uppercase tracking-wider">Capital Growth</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
