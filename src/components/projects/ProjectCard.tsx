"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Maximize2, MapPin, BedDouble } from "lucide-react"

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
    return (
        <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">

            {/* Image Carousel */}
            <div className="relative aspect-[4/3] bg-gray-100">
                <Badge className={`absolute top-4 left-4 z-10 font-bold border-none
                ${project.status === 'Ready' ? 'bg-green-500 hover:bg-green-600' :
                        project.status === 'Sold Out' ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-yellow-500 text-black'}`}>
                    {project.status}
                </Badge>

                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {project.images.map((img, idx) => (
                            <CarouselItem key={idx}>
                                <img src={img} alt={`${project.title} - View ${idx + 1}`} className="w-full h-full object-cover" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Carousel>

                {/* Quick View Trigger (Bottom Right) */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon" variant="secondary" className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110">
                            <Maximize2 className="w-4 h-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-heading font-bold">{project.title}</DialogTitle>
                            <DialogDescription>{project.location} • {project.type}</DialogDescription>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-8 mt-4">
                            <div className="overflow-hidden rounded-xl">
                                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/20 rounded-lg">
                                        <p className="text-sm text-gray-500">Starting Price</p>
                                        <p className="text-xl font-bold font-heading">{project.price}</p>
                                    </div>
                                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                                        <p className="text-sm text-gray-500">Projected ROI</p>
                                        <p className="text-xl font-bold text-primary font-heading">{project.roi}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Key Features</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 leading-relaxed">
                                        <li>Prime location in {project.location}</li>
                                        <li>Includes {project.beds} bedrooms</li>
                                        <li>Full management service available</li>
                                        <li>Premium finishing included</li>
                                    </ul>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button className="flex-1" asChild>
                                        <Link href={`/projects/${project.slug}`}>View Full Details</Link>
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        Download Brochure
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Content */}
            <CardContent className="pt-6 relative">
                <div className="absolute -top-10 left-6 bg-white shadow-lg p-2 rounded-lg flex items-center gap-2">
                    <Badge variant="outline" className="font-normal text-gray-600 bg-gray-50">
                        <MapPin className="w-3 h-3 mr-1" /> {project.location}
                    </Badge>
                    <Badge variant="outline" className="font-normal text-gray-600 bg-gray-50">
                        <BedDouble className="w-3 h-3 mr-1" /> {project.beds}
                    </Badge>
                </div>

                <div className="mb-2">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">{project.type}</span>
                </div>

                <Link href={`/projects/${project.slug}`} className="block group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-heading font-bold mb-1 truncate">{project.title}</h3>
                </Link>

                <div className="flex justify-between items-end mt-4">
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase">Starting From</p>
                        <p className="text-lg font-bold text-gray-900">{project.price}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-400 font-medium uppercase">ROI</p>
                        <p className="text-lg font-bold text-primary">{project.roi}</p>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-0 pb-6">
                <Button className="w-full bg-black text-white hover:bg-zinc-800 group-hover:bg-primary group-hover:text-black transition-colors" asChild>
                    <Link href={`/projects/${project.slug}`}>
                        Details <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
