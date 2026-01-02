"use client"

import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 group/sticky">
            {/* Decorative sparkle */}
            <div className="absolute -top-2 -left-2 opacity-0 group-hover/sticky:opacity-100 transition-opacity duration-300 animate-sparkle">
                <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>

            {/* WhatsApp Button with multiple animation layers */}
            <div className="relative">
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30" />

                {/* Rotating glow ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] opacity-0 group-hover/sticky:opacity-60 blur-lg transition-opacity duration-500 animate-spin-slow" />

                {/* Main button */}
                <Button
                    size="lg"
                    className="relative rounded-full h-14 w-14 shadow-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#0D7A6D] p-0 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-12 active:scale-95 overflow-hidden group/btn"
                    onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                    aria-label="Contact on WhatsApp"
                >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                    {/* Icon with animation */}
                    <MessageCircle
                        className="w-7 h-7 text-white relative z-10 group-hover/btn:scale-110 transition-transform duration-300"
                        fill="white"
                    />

                    {/* Inner glow pulse */}
                    <div className="absolute inset-2 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 animate-pulse-slow" />
                </Button>

                {/* Notification badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white shadow-lg animate-bounce">
                    <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75" />
                </div>

                {/* Hover tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover/sticky:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    <div className="relative">
                        {/* Glow behind tooltip */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg blur opacity-30" />

                        <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium">
                            Chat with us on WhatsApp!
                            {/* Arrow */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#128C7E]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
