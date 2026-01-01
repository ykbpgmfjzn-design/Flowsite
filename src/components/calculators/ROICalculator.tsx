"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp, Percent } from "lucide-react"

export function ROICalculator() {
    const [propertyPrice, setPropertyPrice] = useState(350000)
    const [nightlyRate, setNightlyRate] = useState(250)
    const [occupancyRate, setOccupancyRate] = useState(75) // Percentage
    const [annualROI, setAnnualROI] = useState(0)
    const [annualRevenue, setAnnualRevenue] = useState(0)

    useEffect(() => {
        // Simple ROI Logic for demo purposes
        // Revenue = Rate * 365 * Occupancy
        // Expenses (approx 20% management + 5% maintenance) = 25%
        // Net Income = Revenue * 0.75
        // ROI = (Net Income / Price) * 100

        const grossRevenue = nightlyRate * 365 * (occupancyRate / 100)
        const expenses = grossRevenue * 0.25
        const netIncome = grossRevenue - expenses

        const roi = (netIncome / propertyPrice) * 100

        setAnnualRevenue(netIncome)
        setAnnualROI(roi)
    }, [propertyPrice, nightlyRate, occupancyRate])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
    }

    return (
        <Card className="p-6 md:p-8 bg-white border-none shadow-xl">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-primary" />
                ROI Calculator
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Controls */}
                <div className="space-y-8">
                    {/* Property Price */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Property Price</label>
                            <span className="text-xl font-bold font-heading">{formatCurrency(propertyPrice)}</span>
                        </div>
                        <Slider
                            defaultValue={[propertyPrice]}
                            max={1000000}
                            min={150000}
                            step={10000}
                            onValueChange={(val) => setPropertyPrice(val[0])}
                            className="py-4"
                        />
                    </div>

                    {/* Nightly Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Avg. Nightly Rate</label>
                            <span className="text-xl font-bold font-heading">{formatCurrency(nightlyRate)}</span>
                        </div>
                        <Slider
                            defaultValue={[nightlyRate]}
                            max={1000}
                            min={100}
                            step={10}
                            onValueChange={(val) => setNightlyRate(val[0])}
                            className="py-4"
                        />
                    </div>

                    {/* Occupancy Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Occupancy Rate</label>
                            <span className="text-xl font-bold font-heading">{occupancyRate}%</span>
                        </div>
                        <Slider
                            defaultValue={[occupancyRate]}
                            max={100}
                            min={40}
                            step={1}
                            onValueChange={(val) => setOccupancyRate(val[0])}
                            className="py-4"
                        />
                    </div>
                </div>

                {/* Results Grid */}
                <div className="bg-secondary rounded-xl p-8 text-white flex flex-col justify-center space-y-8">
                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Annual Net Income</p>
                        <p className="text-4xl md:text-5xl font-heading font-bold text-primary">
                            {formatCurrency(annualRevenue)}
                        </p>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Projected ROI</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-5xl md:text-6xl font-heading font-bold text-white">
                                {annualROI.toFixed(1)}%
                            </p>
                            <span className="text-sm text-gray-400">per annum</span>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 text-xs text-gray-400 leading-relaxed">
                        *Estimation ranges based on current market performance in Bali. Includes deduction for management fees (20%) and maintenance (5%).
                    </div>
                </div>
            </div>
        </Card>
    )
}
