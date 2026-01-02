"use client"

import { Search, MapPin, Home, Bed, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export function PropertySearchWidget() {
    return (
        <div className="relative group/widget">
            {/* Animated Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover/widget:opacity-40 transition-opacity duration-700 animate-gradient-x" />

            <Card className="relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                    {/* Location */}
                    <div className="space-y-2 group/field">
                        <label className="flex items-center gap-1.5 text-xs font-bold text-white/70 uppercase tracking-wider ml-1 group-hover/field:text-white transition-colors duration-300">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400 group-hover/field:scale-110 transition-transform duration-300" />
                            Location
                        </label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover/field:opacity-30 transition-opacity duration-500" />
                            <Select>
                                <SelectTrigger className="relative bg-white/95 hover:bg-white border-0 h-12 text-black font-medium focus:ring-2 focus:ring-cyan-400/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    <SelectValue placeholder="All Locations" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                                    <SelectItem value="all" className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50">All Locations</SelectItem>
                                    <SelectItem value="berawa" className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50">Berawa</SelectItem>
                                    <SelectItem value="sanur" className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50">Sanur</SelectItem>
                                    <SelectItem value="umalas" className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50">Umalas</SelectItem>
                                    <SelectItem value="uluwatu" className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50">Uluwatu</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Property Type */}
                    <div className="space-y-2 group/field">
                        <label className="flex items-center gap-1.5 text-xs font-bold text-white/70 uppercase tracking-wider ml-1 group-hover/field:text-white transition-colors duration-300">
                            <Home className="w-3.5 h-3.5 text-purple-400 group-hover/field:scale-110 transition-transform duration-300" />
                            Type
                        </label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/50 to-pink-500/50 rounded-lg blur opacity-0 group-hover/field:opacity-30 transition-opacity duration-500" />
                            <Select>
                                <SelectTrigger className="relative bg-white/95 hover:bg-white border-0 h-12 text-black font-medium focus:ring-2 focus:ring-purple-400/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    <SelectValue placeholder="Property Type" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                                    <SelectItem value="all" className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">Any Type</SelectItem>
                                    <SelectItem value="villa" className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">Villa</SelectItem>
                                    <SelectItem value="apartment" className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">Apartment</SelectItem>
                                    <SelectItem value="penthouse" className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">Penthouse</SelectItem>
                                    <SelectItem value="land" className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">Land</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="space-y-2 group/field">
                        <label className="flex items-center gap-1.5 text-xs font-bold text-white/70 uppercase tracking-wider ml-1 group-hover/field:text-white transition-colors duration-300">
                            <Bed className="w-3.5 h-3.5 text-pink-400 group-hover/field:scale-110 transition-transform duration-300" />
                            Bedrooms
                        </label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400/50 to-orange-500/50 rounded-lg blur opacity-0 group-hover/field:opacity-30 transition-opacity duration-500" />
                            <Select>
                                <SelectTrigger className="relative bg-white/95 hover:bg-white border-0 h-12 text-black font-medium focus:ring-2 focus:ring-pink-400/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    <SelectValue placeholder="Any" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                                    <SelectItem value="any" className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50">Any</SelectItem>
                                    <SelectItem value="1" className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50">1 Bedroom</SelectItem>
                                    <SelectItem value="2" className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50">2 Bedrooms</SelectItem>
                                    <SelectItem value="3" className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50">3 Bedrooms</SelectItem>
                                    <SelectItem value="4+" className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50">4+ Bedrooms</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2 group/field">
                        <label className="flex items-center gap-1.5 text-xs font-bold text-white/70 uppercase tracking-wider ml-1 group-hover/field:text-white transition-colors duration-300">
                            <DollarSign className="w-3.5 h-3.5 text-yellow-400 group-hover/field:scale-110 transition-transform duration-300" />
                            Budget
                        </label>
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/50 to-orange-500/50 rounded-lg blur opacity-0 group-hover/field:opacity-30 transition-opacity duration-500" />
                            <Select>
                                <SelectTrigger className="relative bg-white/95 hover:bg-white border-0 h-12 text-black font-medium focus:ring-2 focus:ring-yellow-400/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                    <SelectValue placeholder="Any Price" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                                    <SelectItem value="any" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50">Any Price</SelectItem>
                                    <SelectItem value="under-200k" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50">&lt; $200k</SelectItem>
                                    <SelectItem value="200k-500k" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50">$200k - $500k</SelectItem>
                                    <SelectItem value="500k-1m" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50">$500k - $1M</SelectItem>
                                    <SelectItem value="1m+" className="hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50">$1M+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-end">
                        <div className="relative w-full group/btn">
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />

                            <Button
                                size="lg"
                                className="relative w-full h-12 font-heading font-bold tracking-wide text-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white border-0 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden group/btn"
                            >
                                {/* Shimmer effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                                <Search className="w-5 h-5 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                                <span className="relative z-10">Search</span>

                                {/* Animated border */}
                                <span className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover/btn:border-white/40 transition-all duration-300" />
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Floating particles decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-1000" />
                <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-40 animation-delay-500" />
            </Card>
        </div>
    )
}
