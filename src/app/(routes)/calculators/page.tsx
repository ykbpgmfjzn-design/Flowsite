import { CalculatorsSection } from "@/components/calculators/CalculatorsSection"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "ROI & Mortgage Calculator | Magnum Estate Investment Tools",
    description: "Calculate your potential investment returns (ROI) and estimate mortgage payments for Bali property with our interactive tools.",
}

export default function CalculatorsPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary py-16 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Investment Tools</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
                    Make informed decisions with our sophisticated financial planning calculators tailored for the Bali real estate market.
                </p>
            </div>

            <CalculatorsSection />

            <div className="container mx-auto px-4 py-16 max-w-4xl prose prose-lg">
                <h3>How to use these tools</h3>
                <p>
                    Our <strong>ROI Calculator</strong> is designed to estimate the potential annual returns from holiday rental properties.
                    Unlike standard calculators, we factor in local occupancy rates and operational costs specific to Bali.
                </p>
                <p>
                    The <strong>Mortgage Estimator</strong> helps you understand monthly commitments if you choose to finance your purchase.
                    Please note that financing options for foreigners in Indonesia have specific requirements.
                </p>
            </div>
        </div>
    )
}
