import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VRTourEmbed } from "@/components/projects/VRTourEmbed"
import { ConstructionCamera } from "@/components/projects/ConstructionCamera"
import { ROICalculator } from "@/components/calculators/ROICalculator"
import { ArrowLeft, Check, Download, MapPin } from "lucide-react"

// Dummy data fetching simulation
const getProject = (slug: string) => {
    // In a real app, fetch from CMS/DB
    return {
        title: "Magnum Resort Berawa",
        location: "Berawa, North Kuta",
        price: "$350,000",
        roi: "12-15%",
        status: "Under Construction",
        type: "Apartment",
        description: "The largest and most ambitious project in Berawa. Featuring the world's longest pool (190m) and premium amenities.",
        images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2940&auto=format&fit=crop"],
        features: ["190m Swimming Pool", "Rooftop Beach Club", "Coworking Space", "Gym & Spa", "24/7 Security"],
        vrUrl: "https://my.matterport.com/show/?m=example", // Replace with real URL
        camUrl: "https://cdn.pixabay.com/video/2019/04/23/23011-332483109_large.mp4", // Replace with real HLS stream
    }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = getProject(params.slug)

    return (
        <div className="pt-20">

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px]">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white container mx-auto">
                    <Link href="/projects" className="inline-flex items-center text-sm mb-6 hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
                    </Link>
                    <div className="flex gap-4 mb-4">
                        <Badge className="bg-primary text-black hover:bg-white">{project.status}</Badge>
                        <Badge variant="outline" className="text-white border-white/30">{project.type}</Badge>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{project.title}</h1>
                    <p className="text-xl flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-2 text-primary" /> {project.location}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Overview */}
                    <div>
                        <h2 className="text-2xl font-bold font-heading mb-4">Project Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            {project.features.map(f => (
                                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                                    <Check className="w-4 h-4 text-primary" /> {f}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Immersive Tabs */}
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-6">Experience the Property</h3>
                        <Tabs defaultValue="vr" className="w-full">
                            <TabsList className="bg-gray-100 p-1 mb-6">
                                <TabsTrigger value="vr" className="px-6">Virtual Tour</TabsTrigger>
                                <TabsTrigger value="cam" className="px-6">Live Camera</TabsTrigger>
                                <TabsTrigger value="roi" className="px-6">ROI Projection</TabsTrigger>
                            </TabsList>

                            <TabsContent value="vr" className="animate-in fade-in-50">
                                <VRTourEmbed url={project.vrUrl} title={project.title} />
                            </TabsContent>

                            <TabsContent value="cam" className="animate-in fade-in-50">
                                <ConstructionCamera streamUrl={project.camUrl} location={project.location} status="Live Feed" />
                            </TabsContent>

                            <TabsContent value="roi" className="animate-in fade-in-50">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <ROICalculator />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Starting Price</p>
                        <p className="text-3xl font-heading font-bold text-black mb-6">{project.price}</p>

                        <div className="space-y-3">
                            <Button size="lg" className="w-full font-bold text-lg">Request Floor Plans</Button>
                            <Button variant="outline" size="lg" className="w-full">
                                <Download className="w-4 h-4 mr-2" /> Brochure
                            </Button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-sm font-semibold mb-2">Projected ROI</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-primary">{project.roi}</span>
                                <span className="text-xs text-gray-400">Net per annum</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
