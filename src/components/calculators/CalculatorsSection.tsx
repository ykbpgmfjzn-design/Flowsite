"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ROICalculator } from "./ROICalculator"
import { MortgageCalculator } from "./MortgageCalculator"

export function CalculatorsSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Financial Tools</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">Plan Your Investment</h2>
                    <p className="text-gray-600">
                        Calculate your potential returns or estimate your monthly mortgage payments with our interactive tools.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Tabs defaultValue="roi" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-white/50 p-1 border border-white/20 shadow-sm">
                                <TabsTrigger value="roi" className="px-8 py-2 text-base">ROI Calculator</TabsTrigger>
                                <TabsTrigger value="mortgage" className="px-8 py-2 text-base">Mortgage Estimator</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="roi" className="animate-in fade-in-50 duration-500 slide-in-from-bottom-2">
                            <ROICalculator />
                        </TabsContent>
                        <TabsContent value="mortgage" className="animate-in fade-in-50 duration-500 slide-in-from-bottom-2">
                            <MortgageCalculator />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
