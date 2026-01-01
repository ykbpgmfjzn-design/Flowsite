"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <Button
                size="lg"
                className="rounded-full h-14 w-14 shadow-xl bg-[#25D366] hover:bg-[#128C7E] p-0 flex items-center justify-center animate-bounce-short"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" fill="white" />
            </Button>
        </div>
    )
}
