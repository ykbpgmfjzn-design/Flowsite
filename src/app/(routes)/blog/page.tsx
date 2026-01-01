import { BlogCard } from "@/components/blog/BlogCard"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Magnum Estate Journal | Bali Real Estate Insights",
    description: "Expert analysis, market trends, and lifestyle guides for investing in Bali property.",
}

const blogs = [
    {
        title: "Why Bali Property Prices Continue to Rise in 2026",
        excerpt: "An in-depth look at the infrastructure projects and tourism growth fueling the real estate boom in Canggu and Uluwatu.",
        category: "Market Analysis",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
        slug: "bali-property-prices-rise-2026"
    },
    {
        title: "The Ultimate Guide to Foreign Ownership in Indonesia",
        excerpt: "Understanding the difference between Hak Pakai and Hak Sewa. Everything a foreign investor needs to know about legal safety.",
        category: "Legal Guide",
        date: "Dec 28, 2025",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop",
        slug: "foreign-ownership-guide-indonesia"
    },
    {
        title: "Uluwatu vs. Canggu: Where Should You Invest?",
        excerpt: "Comparing ROI potential, guest profiles, and lifestyle amenities in Bali's two hottest property markets.",
        category: "Investment Strategy",
        date: "Dec 15, 2025",
        image: "https://images.unsplash.com/photo-1573763161985-7073d32aa285?q=80&w=2874&auto=format&fit=crop",
        slug: "uluwatu-vs-canggu-investment"
    },
    {
        title: "5 Interior Design Trends Defining Luxury Villas",
        excerpt: "From sunken living rooms to sustainable materials, discover what high-end guests are looking for in 2026.",
        category: "Design & Lifestyle",
        date: "Nov 30, 2025",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop",
        slug: "interior-design-trends-2026"
    },
    {
        title: "Understanding ROI: Gross vs Net Income",
        excerpt: "Hidden costs that many developers don't talk about. How to accurately calculate your passive income.",
        category: "Financial Education",
        date: "Nov 12, 2025",
        image: "https://images.unsplash.com/photo-1554224155-984063529017?q=80&w=2940&auto=format&fit=crop",
        slug: "understanding-roi-gross-vs-net"
    },
    {
        title: "Magnum Estate Wins 'Best Sustainable Developer' Award",
        excerpt: "We are proud to announce our recognition at the Southeast Asia Property Awards for our eco-friendly initiatives.",
        category: "Company News",
        date: "Oct 25, 2025",
        image: "https://images.unsplash.com/photo-1531973576160-7125cdcd63e7?q=80&w=2787&auto=format&fit=crop",
        slug: "magnum-wins-sustainable-award"
    }
]

export default function BlogPage() {
    return (
        <div className="pt-20">
            <div className="bg-secondary py-20 text-center text-white">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">The Journal</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Insights & Expertise</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
                    Navigating the Bali real estate market with data-driven analysis and legal expertise.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="h-[450px]">
                            <BlogCard {...blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
