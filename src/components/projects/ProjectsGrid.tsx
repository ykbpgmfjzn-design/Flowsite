"use client"

import { useState } from "react"
import { ProjectCard, ProjectData } from "./ProjectCard"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

const projectsData: ProjectData[] = [
    {
        id: "1",
        title: "Magnum Resort Berawa",
        location: "Berawa",
        price: "$350,000",
        roi: "12-15%",
        status: "Under Construction",
        type: "Apartment",
        beds: "1-2 Beds",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2940&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop"
        ],
        slug: "magnum-resort-berawa"
    },
    {
        id: "2",
        title: "The Umalas Signature",
        location: "Umalas",
        price: "$450,000",
        roi: "11-13%",
        status: "Ready",
        type: "Villa",
        beds: "2-3 Beds",
        images: [
            "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?q=80&w=2950&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop"
        ],
        slug: "umalas-signature"
    },
    {
        id: "3",
        title: "Sky Stars Ocean View",
        location: "Uluwatu",
        price: "$290,000",
        roi: "10-12%",
        status: "Under Construction",
        type: "Penthouse",
        beds: "1 Bed",
        images: [
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940&auto=format&fit=crop"
        ],
        slug: "sky-stars-ocean"
    },
    {
        id: "4",
        title: "Sanur Beachfront Residences",
        location: "Sanur",
        price: "$550,000",
        roi: "9-11%",
        status: "Sold Out",
        type: "Villa",
        beds: "3 Beds",
        images: [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2940&auto=format&fit=crop"
        ],
        slug: "sanur-beachfront"
    },
    {
        id: "5",
        title: "Canggu Minimalist Haven",
        location: "Canggu",
        price: "$210,000",
        roi: "13%",
        status: "Ready",
        type: "Apartment",
        beds: "Studio",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2880&auto=format&fit=crop"
        ],
        slug: "canggu-minimalist"
    }
]

export function ProjectsGrid() {
    const [filterType, setFilterType] = useState("all")

    const filteredProjects = filterType === "all"
        ? projectsData
        : projectsData.filter(p => p.type.toLowerCase() === filterType)

    return (
        <div className="flex flex-col lg:flex-row gap-8">

            {/* Filters Sidebar (Desktop) */}
            <aside className="hidden lg:block w-64 space-y-8 flex-shrink-0">
                <div>
                    <h3 className="font-heading font-bold mb-4">Location</h3>
                    <div className="space-y-2">
                        {["Berawa", "Canggu", "Umalas", "Sanur", "Uluwatu"].map(loc => (
                            <label key={loc} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                {loc}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-heading font-bold mb-4">Property Type</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Villa", "Apartment", "Penthouse", "Land"].map(type => (
                            <Badge
                                key={type}
                                variant="outline"
                                className="cursor-pointer hover:bg-primary hover:text-black hover:border-primary transition-colors"
                                onClick={() => setFilterType(type.toLowerCase() === filterType ? "all" : type.toLowerCase())}
                            >
                                {type}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-heading font-bold mb-4">Budget Range ($)</h3>
                    <Slider defaultValue={[1000000]} max={2000000} step={50000} />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>$150k</span>
                        <span>$2M+</span>
                    </div>
                </div>
            </aside>

            {/* Mobile Filter Trigger */}
            <div className="lg:hidden mb-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                            <Filter className="w-4 h-4 mr-2" /> Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filter Projects</SheetTitle>
                        </SheetHeader>
                        {/* Add filter content here similar to desktop */}
                        <div className="py-8">
                            <p className="text-gray-500">Filters coming for mobile...</p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-500 text-sm">Showing <strong>{filteredProjects.length}</strong> properties</p>
                    <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer">
                        <option>Sort by: Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>ROI: High to Low</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
