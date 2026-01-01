"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2, Loader2 } from "lucide-react"

interface VRTourEmbedProps {
    url: string;
    title: string;
}

export function VRTourEmbed({ url, title }: VRTourEmbedProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group">

            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black">
                    <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
                    <p className="text-sm tracking-widest uppercase">Loading 360° Experience...</p>
                </div>
            )}

            {/* Placeholder functionality for actual embed */}
            <iframe
                src={url}
                title={title}
                className="w-full h-full border-none"
                onLoad={() => setIsLoading(false)}
                allowFullScreen
                allow="vr; xr; accelerometer; gyroscope; sensor"
            />

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" className="bg-black/50 text-white hover:bg-primary hover:text-black">
                    <Maximize2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
