"use client"

import { useState, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Calendar, Percent, Sparkles } from "lucide-react"

export function ROICalculator() {
    const [propertyPrice, setPropertyPrice] = useState(350000)
    const [nightlyRate, setNightlyRate] = useState(250)
    const [occupancyRate, setOccupancyRate] = useState(75) // Percentage

    const { annualRevenue, annualROI } = useMemo(() => {
        // Simple ROI Logic for demo purposes
        // Revenue = Rate * 365 * Occupancy
        // Expenses (approx 20% management + 5% maintenance) = 25%
        // Net Income = Revenue * 0.75
        // ROI = (Net Income / Price) * 100

        const grossRevenue = nightlyRate * 365 * (occupancyRate / 100)
        const expenses = grossRevenue * 0.25
        const netIncome = grossRevenue - expenses

        const roi = (netIncome / propertyPrice) * 100

        return { annualRevenue: netIncome, annualROI: roi }
    }, [propertyPrice, nightlyRate, occupancyRate])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <div className="relative group/calc">
            {/* Animated glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur opacity-0 group-hover/calc:opacity-20 transition-opacity duration-700" />

            <Card className="relative p-6 md:p-8 bg-white border-2 border-transparent hover:border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover/calc:scale-[1.01]">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-100/50 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl" />

                {/* Floating sparkles */}
                <div className="absolute top-8 right-12 opacity-30">
                    <Sparkles className="w-5 h-5 text-emerald-500 animate-sparkle" />
                </div>
                <div className="absolute bottom-12 left-12 opacity-30">
                    <Sparkles className="w-4 h-4 text-teal-500 animate-sparkle animation-delay-1000" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 group/header">
                        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover/header:scale-110 group-hover/header:rotate-12 transition-all duration-500">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                ROI Calculator
                            </h3>
                            <p className="text-sm text-gray-500">Project your investment returns</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Controls */}
                        <div className="space-y-8">
                            {/* Property Price */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-emerald-600 transition-colors duration-300">
                                        <DollarSign className="w-4 h-4 text-emerald-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Property Price
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {formatCurrency(propertyPrice)}
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[propertyPrice]}
                                        max={1000000}
                                        min={150000}
                                        step={10000}
                                        onValueChange={(val) => setPropertyPrice(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>

                            {/* Nightly Rate */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-green-600 transition-colors duration-300">
                                        <Calendar className="w-4 h-4 text-green-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Avg. Nightly Rate
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {formatCurrency(nightlyRate)}
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[nightlyRate]}
                                        max={1000}
                                        min={100}
                                        step={10}
                                        onValueChange={(val) => setNightlyRate(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>

                            {/* Occupancy Rate */}
                            <div className="space-y-4 group/field">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-sm font-bold text-gray-600 uppercase tracking-wider group-hover/field:text-teal-600 transition-colors duration-300">
                                        <Percent className="w-4 h-4 text-teal-500 group-hover/field:scale-125 transition-transform duration-300" />
                                        Occupancy Rate
                                    </label>
                                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover/field:scale-110 transition-transform duration-300">
                                        {occupancyRate}%
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-x-2 h-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-sm opacity-0 group-hover/field:opacity-100 transition-opacity duration-300" />
                                    <Slider
                                        value={[occupancyRate]}
                                        max={100}
                                        min={40}
                                        step={1}
                                        onValueChange={(val) => setOccupancyRate(val[0])}
                                        className="py-4 relative z-10"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Grid with Animated Background */}
                        <div className="relative bg-gradient-to-br from-secondary via-emerald-900 to-secondary rounded-2xl p-8 text-white flex flex-col justify-center space-y-8 overflow-hidden group/result shadow-2xl">
                            {/* Animated background shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-float-slow" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-float-delayed" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />

                            <div className="relative z-10 group/revenue">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2 group-hover/revenue:text-emerald-300 transition-colors duration-300">
                                    Estimated Annual Net Income
                                </p>
                                <div className="relative inline-block">
                                    <p className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-gradient-x group-hover/revenue:scale-105 transition-transform duration-500">
                                        {formatCurrency(annualRevenue)}
                                    </p>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-lg opacity-0 group-hover/revenue:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full" />

                            <div className="relative z-10 group/roi">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2 group-hover/roi:text-green-300 transition-colors duration-300">
                                    Projected ROI
                                </p>
                                <div className="relative inline-flex items-baseline gap-2">
                                    <div className="relative">
                                        <p className="text-5xl md:text-6xl font-heading font-bold text-white group-hover/roi:scale-110 transition-transform duration-500">
                                            {annualROI.toFixed(1)}
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">%</span>
                                        </p>
                                        {/* Glowing effect for high ROI */}
                                        {annualROI > 10 && (
                                            <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl blur-xl opacity-0 group-hover/roi:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-400 mb-2">per annum</span>
                                </div>

                                {/* ROI Status Badge */}
                                <div className="mt-4">
                                    {annualROI > 15 && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
                                            <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                                            <span className="text-xs font-bold text-green-300 uppercase tracking-wider">Excellent Returns!</span>
                                        </div>
                                    )}
                                    {annualROI > 10 && annualROI <= 15 && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full backdrop-blur-sm">
                                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                                            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Great Investment</span>
                                        </div>
                                    )}
                                    {annualROI > 5 && annualROI <= 10 && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                                            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Good Returns</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative z-10 bg-white/10 rounded-lg p-4 text-xs text-gray-400 leading-relaxed backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300">
                                <div className="flex items-start gap-2">
                                    <span className="text-yellow-400 text-lg">💡</span>
                                    <p>Estimation ranges based on current market performance in Bali. Includes deduction for management fees (20%) and maintenance (5%).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
