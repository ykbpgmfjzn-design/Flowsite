"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

const testimonials = [
    {
        name: "Alexey Volkov",
        location: "Moscow, Russia",
        role: "Investor",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        text: "Magnum Estate provided legal transparency that I didn't find elsewhere in Bali. The ROI on my Umalas villa has exceeded 14% this year.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        location: "Sydney, Australia",
        role: "Villa Owner",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        text: "The construction quality is European standard. I visited the site weekly and was impressed by the attention to detail. Highly recommended.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        location: "Singapore",
        role: "Investor",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        text: "Buying off-plan was scary, but the team's weekly video reports gave me peace of mind. The capital appreciation has already hit 20% before handover.",
        rating: 5,
    },
    {
        name: "Elena Rossi",
        location: "Milan, Italy",
        role: "Second Home Owner",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        text: "We wanted a holiday home that pays for itself. The management team handles everything - bookings, maintenance, guests. True passive income.",
        rating: 5,
    }
]

export function TestimonialsCarousel() {
    return (
        <section className="py-24 bg-secondary text-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 flex flex-col items-center text-center">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Social Proof</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Trusted by 800+ Investors</h2>
                <div className="flex gap-8">
                    <div className="text-center">
                        <p className="text-3xl font-bold font-heading">4.9/5</p>
                        <div className="flex text-primary gap-1 justify-center mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Google Reviews</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold font-heading">100%</p>
                        <div className="flex text-primary gap-1 justify-center mt-1">
                            <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-0.5 rounded">Verified</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Completion Rate</p>
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar flex gap-6 px-4 md:px-0 md:justify-center">
                {testimonials.map((t, idx) => (
                    <Card key={idx} className="snap-center shrink-0 w-[90vw] md:w-[400px] bg-white/5 border-white/10 p-8 rounded-2xl relative">
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />

                        <div className="flex items-center gap-4 mb-6">
                            <Avatar className="w-14 h-14 border-2 border-primary">
                                <AvatarImage src={t.image} />
                                <AvatarFallback>{t.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-heading font-bold text-lg leading-tight">{t.name}</p>
                                <p className="text-sm text-gray-400">{t.role} • {t.location}</p>
                            </div>
                        </div>

                        <div className="flex text-primary mb-4">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>

                        <p className="text-gray-300 leading-relaxed italic">
                            "{t.text}"
                        </p>
                    </Card>
                ))}
            </div>

        </section>
    )
}
