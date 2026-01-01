import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="block mb-6">
                            <span className="font-heading font-bold text-2xl tracking-widest uppercase text-primary">
                                Magnum Estate
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            Leading developer of luxury real estate in Bali. Trusted by investors worldwide for delivering premium villas and high ROI.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Management</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-lg">Resources</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Insights</Link></li>
                            <li><Link href="/investment-guide" className="hover:text-primary transition-colors">Investment Guide</Link></li>
                            <li><Link href="/roi-calculator" className="hover:text-primary transition-colors">ROI Calculator</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/scam-alerts" className="hover:text-primary transition-colors">Scam Alerts</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-lg">Stay Updated</h4>
                        <p className="text-gray-400 mb-4 text-sm">
                            Get exclusive offers and new project launch alerts.
                        </p>
                        <form className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                            />
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                {/* Trending Search - SEO Section (Tier 0) */}
                <div className="border-t border-white/10 pt-10 pb-10">
                    <h5 className="font-heading font-medium text-white/80 mb-6 text-sm uppercase tracking-wider">Trending Searches</h5>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                        <Link href="/villas-bali" className="hover:text-primary transition-colors">Villas for Sale in Bali</Link>
                        <Link href="/apartments-changgu" className="hover:text-primary transition-colors">Apartments in Canggu</Link>
                        <Link href="/luxury-villas-berawa" className="hover:text-primary transition-colors">Luxury Villas Berawa</Link>
                        <Link href="/investment-bali" className="hover:text-primary transition-colors">Bali Property Investment</Link>
                        <Link href="/property-sanur" className="hover:text-primary transition-colors">Sanur Real Estate</Link>
                        <Link href="/off-plan-bali" className="hover:text-primary transition-colors">Off-plan Projects Bali</Link>
                        <Link href="/high-roi-investment" className="hover:text-primary transition-colors">High ROI Villas</Link>
                        <Link href="/ocean-view-bali" className="hover:text-primary transition-colors">Ocean View Property</Link>
                        <Link href="/buy-villa-crypto" className="hover:text-primary transition-colors">Buy Villa with Crypto</Link>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Magnum Estate. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
