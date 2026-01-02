
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects Inventory | Magnum Estate Bali",
    description: "Browse our exclusive collection of luxury villas and apartments in Bali's most prime locations.",
}

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary py-16 text-center text-white">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Our Portfolio</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Curated Luxury Properties</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
                    Discover investment-grade real estate with projected ROIs of 11-15%.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <ProjectsGrid />
            </div>
        </div>
    )
}
