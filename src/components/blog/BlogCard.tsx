import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

interface BlogCardProps {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

export function BlogCard({ title, excerpt, category, date, image, slug }: BlogCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full border-none shadow-md group hover:shadow-xl transition-shadow duration-300 bg-white">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Badge className="absolute top-4 left-4 z-10 bg-black/50 text-white backdrop-blur-md border-none hover:bg-primary hover:text-black transition-colors">
                    {category}
                </Badge>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <CardHeader className="pb-2">
                <div className="flex items-center text-xs text-gray-400 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {date}
                </div>
                <h3 className="text-xl font-heading font-bold leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {excerpt}
                </p>
            </CardContent>

            <CardFooter className="pt-0 pb-6">
                <Link href={`/blog/${slug}`} className="text-sm font-semibold flex items-center text-primary group-hover:underline underline-offset-4">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    )
}
