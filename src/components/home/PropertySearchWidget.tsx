"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export function PropertySearchWidget() {
    return (
        <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20 shadow-2xl rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                {/* Location */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">Location</label>
                    <Select>
                        <SelectTrigger className="bg-white/90 border-0 h-12 text-black font-medium focus:ring-primary/50">
                            <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            <SelectItem value="berawa">Berawa</SelectItem>
                            <SelectItem value="sanur">Sanur</SelectItem>
                            <SelectItem value="umalas">Umalas</SelectItem>
                            <SelectItem value="uluwatu">Uluwatu</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Property Type */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">Type</label>
                    <Select>
                        <SelectTrigger className="bg-white/90 border-0 h-12 text-black font-medium focus:ring-primary/50">
                            <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Any Type</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Bedrooms */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">Bedrooms</label>
                    <Select>
                        <SelectTrigger className="bg-white/90 border-0 h-12 text-black font-medium focus:ring-primary/50">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4+">4+ Bedrooms</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">Budget</label>
                    <Select>
                        <SelectTrigger className="bg-white/90 border-0 h-12 text-black font-medium focus:ring-primary/50">
                            <SelectValue placeholder="Any Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any Price</SelectItem>
                            <SelectItem value="under-200k">&lt; $200k</SelectItem>
                            <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                            <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                            <SelectItem value="1m+">$1M+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                    <Button size="lg" className="w-full h-12 font-heading font-semibold tracking-wide text-lg shadow-lg">
                        <Search className="w-5 h-5 mr-2" />
                        Search
                    </Button>
                </div>

            </div>
        </Card>
    )
}
