"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "./Logo"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-br from-secondary via-purple-950 to-secondary text-white pt-20 pb-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 group/brand">
                        <Link href="/" className="block mb-6 group/logo">
                            <div className="relative inline-block">
                                {/* Glow effect */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                                <div className="relative transition-all duration-500 group-hover/logo:scale-110">
                                    <Logo className="h-12 w-auto text-white" />
                                </div>

                                <Sparkles className="absolute -top-1 -right-6 w-4 h-4 text-yellow-400 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 animate-sparkle" />
                            </div>
                        </Link>

                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed group-hover/brand:text-gray-300 transition-colors duration-300">
                            Leading developer of luxury real estate in Bali. Trusted by investors worldwide for delivering premium villas and high ROI.
                        </p>

                        {/* Social Icons with enhanced effects */}
                        <div className="flex gap-3">
                            {[
                                { Icon: Instagram, color: "from-pink-500 to-purple-500", href: "#" },
                                { Icon: Facebook, color: "from-blue-500 to-cyan-500", href: "#" },
                                { Icon: Youtube, color: "from-red-500 to-pink-500", href: "#" },
                                { Icon: Linkedin, color: "from-blue-600 to-cyan-600", href: "#" }
                            ].map(({ Icon, color, href }, idx) => (
                                <Link
                                    key={idx}
                                    href={href}
                                    className="group/social relative"
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-lg blur opacity-0 group-hover/social:opacity-60 transition-opacity duration-500`} />

                                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-r ${color} opacity-80 group-hover/social:opacity-100 flex items-center justify-center transition-all duration-300 group-hover/social:scale-110 group-hover/social:rotate-12`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="group/links">
                        <h4 className="font-heading font-semibold mb-6 text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {["About Us", "Our Projects", "Management", "Careers", "Contact"].map((item, idx) => (
                                <li key={idx} className="group/item">
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group-hover/item:translate-x-2"
                                    >
                                        <ArrowRight className="w-0 h-4 opacity-0 group-hover/item:w-4 group-hover/item:opacity-100 transition-all duration-300 text-purple-400" />
                                        <span className="group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-pink-400">
                                            {item}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="group/resources">
                        <h4 className="font-heading font-semibold mb-6 text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Resources
                        </h4>
                        <ul className="space-y-4">
                            {["Blog & Insights", "Investment Guide", "ROI Calculator", "FAQ", "Scam Alerts"].map((item, idx) => (
                                <li key={idx} className="group/item">
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group-hover/item:translate-x-2"
                                    >
                                        <ArrowRight className="w-0 h-4 opacity-0 group-hover/item:w-4 group-hover/item:opacity-100 transition-all duration-300 text-cyan-400" />
                                        <span className="group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-400 group-hover/item:to-blue-400">
                                            {item}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="group/newsletter">
                        <h4 className="font-heading font-semibold mb-6 text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
                            Stay Updated
                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                        </h4>
                        <p className="text-gray-400 mb-4 text-sm group-hover/newsletter:text-gray-300 transition-colors duration-300">
                            Get exclusive offers and new project launch alerts.
                        </p>
                        <form className="space-y-3">
                            <div className="relative group/input">
                                {/* Glow effect on focus */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-focus-within/input:opacity-30 transition-opacity duration-500" />

                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="relative bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-500 transition-all duration-300 hover:bg-white/10"
                                />
                            </div>

                            <div className="relative group/subscribe">
                                {/* Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-lg blur opacity-30 group-hover/subscribe:opacity-60 transition-opacity duration-500" />

                                <Button className="relative w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover/subscribe:scale-105">
                                    {/* Shimmer effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/subscribe:translate-x-full transition-transform duration-1000" />
                                    <span className="relative z-10">Subscribe</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Trending Search - SEO Section with enhanced styling */}
                <div className="border-t border-white/10 pt-10 pb-10">
                    <h5 className="font-heading font-medium mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Trending Searches
                        </span>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse animation-delay-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse animation-delay-500" />
                        </div>
                    </h5>
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm">
                        {[
                            "Villas for Sale in Bali",
                            "Apartments in Canggu",
                            "Luxury Villas Berawa",
                            "Bali Property Investment",
                            "Sanur Real Estate",
                            "Off-plan Projects Bali",
                            "High ROI Villas",
                            "Ocean View Property",
                            "Buy Villa with Crypto"
                        ].map((term, idx) => (
                            <Link
                                key={idx}
                                href={`/${term.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group/tag relative text-gray-500 hover:text-white transition-all duration-300"
                            >
                                {/* Pill background on hover */}
                                <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 border border-purple-500/20 group-hover/tag:border-purple-500/40" />

                                <span className="relative group-hover/tag:text-transparent group-hover/tag:bg-clip-text group-hover/tag:bg-gradient-to-r group-hover/tag:from-purple-400 group-hover/tag:to-pink-400">
                                    {term}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar with gradient divider */}
                <div className="border-t border-gradient-to-r from-transparent via-white/10 to-transparent pt-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                        <p className="group/copy hover:text-gray-300 transition-colors duration-300">
                            &copy; {currentYear} Magnum Estate. All rights reserved.
                            <span className="inline-block ml-2 opacity-0 group-hover/copy:opacity-100 transition-opacity duration-300">✨</span>
                        </p>
                        <div className="flex gap-6">
                            {["Privacy Policy", "Terms of Service"].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group/policy relative hover:text-white transition-colors duration-300"
                                >
                                    <span className="group-hover/policy:text-transparent group-hover/policy:bg-clip-text group-hover/policy:bg-gradient-to-r group-hover/policy:from-purple-400 group-hover/policy:to-pink-400">
                                        {item}
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover/policy:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom particles */}
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400 animate-pulse opacity-40" />
            <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-pink-400 animate-pulse opacity-40 animation-delay-500" />
            <div className="absolute bottom-6 left-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse opacity-40 animation-delay-1000" />
        </footer>
    )
}
