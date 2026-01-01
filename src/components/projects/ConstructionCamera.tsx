"use client"

import { Badge } from "@/components/ui/badge"
import { Video } from "lucide-react"

interface ConstructionCameraProps {
    streamUrl: string;
    location: string;
    status: string;
}

export function ConstructionCamera({ streamUrl, location, status }: ConstructionCameraProps) {
    return (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">

            {/* Live Indicator */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
                <Badge variant="destructive" className="animate-pulse bg-red-600 text-white border-none flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE
                </Badge>
                <Badge className="bg-black/50 text-white backdrop-blur-md border-none">
                    {location}
                </Badge>
            </div>

            {/* Placeholder for HLS Stream - using loop video for demo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
            >
                <source src={streamUrl} type="video/mp4" />
            </video>

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
                <div className="flex items-center gap-2 text-white/80 text-xs">
                    <Video className="w-4 h-4" />
                    <span>Camera 01 • Construction Zone A</span>
                </div>
            </div>
        </div>
    )
}
