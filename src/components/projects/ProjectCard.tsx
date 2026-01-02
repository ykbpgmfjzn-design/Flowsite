"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Maximize2, MapPin, BedDouble, Sparkles, TrendingUp } from "lucide-react"

export interface ProjectData {
    id: string;
    title: string;
    location: string;
    price: string;
    roi: string;
    status: "Under Construction" | "Ready" | "Sold Out";
    type: "Villa" | "Apartment" | "Penthouse";
    beds: string;
    images: string[];
    slug: string;
    completion?: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated glow border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-gradient-x" />

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl group-hover:scale-[1.02]">

                {/* Image Carousel with Enhanced Effects */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {/* Animated status badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <Badge className={`font-bold border-none shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110
                            ${project.status === 'Ready'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400' :
                            project.status === 'Sold Out'
                                ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400'
                                : 'bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black'}`}>
                            <span className="relative z-10">{project.status}</span>
                            {project.status === 'Ready' && (
                                <Sparkles className="w-3 h-3 ml-1 animate-pulse" />
                            )}
                        </Badge>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse animation-delay-300" />
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse animation-delay-500" />
                        </div>
                    </div>

                    <Carousel className="w-full h-full">
                        <CarouselContent>
                            {project.images.map((img, idx) => (
                                <CarouselItem key={idx}>
                                    <div className="relative w-full h-full overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`${project.title} - View ${idx + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                        {/* Image overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 backdrop-blur-sm" />
                        <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 backdrop-blur-sm" />
                    </Carousel>

                    {/* Quick View Trigger with Enhanced Animation */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="icon"
                                className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl hover:shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0 hover:scale-125 hover:rotate-12"
                            >
                                <Maximize2 className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    {project.title}
                                </DialogTitle>
                                <DialogDescription>{project.location} • {project.type}</DialogDescription>
                            </DialogHeader>
                            <div className="grid md:grid-cols-2 gap-8 mt-4">
                                <div className="overflow-hidden rounded-xl ring-2 ring-purple-100">
                                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:scale-105 transition-transform duration-300">
                                            <p className="text-sm text-gray-500 font-medium">Starting Price</p>
                                            <p className="text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                {project.price}
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 hover:scale-105 transition-transform duration-300">
                                            <p className="text-sm text-gray-500 font-medium">Projected ROI</p>
                                            <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-heading">
                                                {project.roi}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-purple-500" />
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-0.5">✓</span>
                                                Prime location in {project.location}
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-0.5">✓</span>
                                                Includes {project.beds} bedrooms
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-0.5">✓</span>
                                                Full management service available
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-500 mt-0.5">✓</span>
                                                Premium finishing included
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                                            <Link href={`/projects/${project.slug}`}>View Full Details</Link>
                                        </Button>
                                        <Button variant="outline" className="flex-1 border-2 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                                            Download Brochure
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Content with Floating Info Cards */}
                <CardContent className="pt-6 relative">
                    {/* Floating info badges with animation */}
                    <div className="absolute -top-10 left-6 flex gap-2 animate-fade-in-up">
                        <div className="group/badge">
                            <Badge variant="outline" className="font-medium text-gray-700 bg-white shadow-lg backdrop-blur-sm border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-110">
                                <MapPin className="w-3 h-3 mr-1 text-purple-500 group-hover/badge:scale-125 transition-transform duration-300" />
                                {project.location}
                            </Badge>
                        </div>
                        <div className="group/badge">
                            <Badge variant="outline" className="font-medium text-gray-700 bg-white shadow-lg backdrop-blur-sm border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 hover:scale-110">
                                <BedDouble className="w-3 h-3 mr-1 text-pink-500 group-hover/badge:scale-125 transition-transform duration-300" />
                                {project.beds}
                            </Badge>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-widest uppercase">
                            {project.type}
                        </span>
                    </div>

                    <Link
                        href={`/projects/${project.slug}`}
                        className="block group-hover:text-purple-600 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-heading font-bold mb-1 truncate group-hover:scale-105 transition-transform duration-300 origin-left">
                            {project.title}
                        </h3>
                    </Link>

                    {/* Pricing section with gradient backgrounds */}
                    <div className="flex justify-between items-end mt-6 gap-4">
                        <div className="flex-1 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group/price">
                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Starting From</p>
                            <p className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover/price:from-purple-600 group-hover/price:to-pink-600 transition-all duration-300">
                                {project.price}
                            </p>
                        </div>
                        <div className="flex-1 p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group/roi">
                            <p className="text-xs text-gray-500 font-medium uppercase mb-1 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-emerald-500" />
                                ROI
                            </p>
                            <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover/roi:scale-110 transition-transform duration-300 origin-left">
                                {project.roi}
                            </p>
                        </div>
                    </div>
                </CardContent>

                {/* Footer with Enhanced Button */}
                <CardFooter className="pt-0 pb-6 relative">
                    <div className="w-full relative group/btn">
                        {/* Button glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl blur opacity-0 group-hover/btn:opacity-40 transition-opacity duration-500" />

                        <Button
                            className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group-hover/btn:scale-105"
                            asChild
                        >
                            <Link href={`/projects/${project.slug}`}>
                                {/* Shimmer effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10">View Details</span>
                                <ExternalLink className="w-4 h-4 ml-2 relative z-10 group-hover/btn:rotate-45 transition-transform duration-300" />
                            </Link>
                        </Button>
                    </div>
                </CardFooter>

                {/* Hover indicator - corner shine */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
        </div>
    )
}
