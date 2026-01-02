"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/projects", label: "Projects" },
        { href: "/investment", label: "Investment" },
        { href: "/about", label: "About Us" },
        { href: "/journal", label: "Journal" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100/20 py-4"
                    : "bg-transparent py-6"
            )}
        >
            {/* Animated gradient line at top */}
            <div className={cn(
                "absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 transition-opacity duration-500",
                isScrolled && "opacity-100 animate-gradient-x"
            )} />

            <div className="container mx-auto px-4 flex items-center justify-between relative">
                {/* Logo with enhanced effects */}
                <Link href="/" className="relative z-10 group/logo">
                    <div className="relative">
                        {/* Glow effect behind logo */}
                        <div className={cn(
                            "absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500",
                            !isScrolled && "from-white/20 to-white/10"
                        )} />

                        <div className="relative transition-all duration-300 group-hover/logo:scale-110">
                            <Logo 
                                className={cn(
                                    "h-12 w-auto",
                                    isScrolled ? "text-foreground" : "text-white"
                                )}
                            />
                        </div>

                        {/* Sparkle decoration */}
                        <Sparkles className={cn(
                            "absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300",
                            isScrolled ? "text-purple-500" : "text-yellow-300"
                        )} />
                    </div>
                </Link>

                {/* Desktop Nav with enhanced effects */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setActiveLink(link.href)}
                            onMouseLeave={() => setActiveLink("")}
                            className="relative group/link px-4 py-2"
                        >
                            {/* Hover background */}
                            <div className={cn(
                                "absolute inset-0 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-300",
                                isScrolled
                                    ? "bg-gradient-to-r from-purple-50 to-pink-50"
                                    : "bg-white/10 backdrop-blur-sm"
                            )} />

                            <span className={cn(
                                "relative text-sm font-medium tracking-wide transition-all duration-300",
                                isScrolled
                                    ? "text-foreground group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:from-purple-600 group-hover/link:to-pink-600"
                                    : "text-white/90 group-hover/link:text-white group-hover/link:drop-shadow-lg"
                            )}>
                                {link.label}
                            </span>

                            {/* Animated underline */}
                            <div className={cn(
                                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/link:w-3/4 transition-all duration-300 rounded-full",
                                isScrolled
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : "bg-white"
                            )} />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA with enhanced button */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative group/cta">
                        {/* Glow effect */}
                        <div className={cn(
                            "absolute -inset-1 rounded-full blur opacity-0 group-hover/cta:opacity-60 transition-opacity duration-500",
                            isScrolled
                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                : "bg-white"
                        )} />

                        <Button
                            className={cn(
                                "relative font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group-hover/cta:scale-110",
                                isScrolled
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                                    : "bg-white text-black hover:bg-white/90"
                            )}
                        >
                            {/* Shimmer effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000" />

                            <Phone className="w-4 h-4 mr-2 relative z-10 group-hover/cta:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Request a Call</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu with enhanced trigger */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "relative group/menu",
                                    isScrolled ? "text-foreground hover:bg-purple-50" : "text-white hover:bg-white/10"
                                )}
                            >
                                {/* Pulse effect on hover */}
                                <div className={cn(
                                    "absolute inset-0 rounded-full opacity-0 group-hover/menu:opacity-100 transition-opacity duration-300",
                                    isScrolled
                                        ? "bg-gradient-to-r from-purple-100 to-pink-100"
                                        : "bg-white/20 backdrop-blur-sm"
                                )} />

                                <Menu className="w-6 h-6 relative z-10 group-hover/menu:rotate-90 transition-transform duration-300" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
                            <div className="flex flex-col gap-6 mt-10">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="group/mobile relative px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 animate-fade-in-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <span className="text-xl font-heading font-medium text-foreground group-hover/mobile:text-transparent group-hover/mobile:bg-clip-text group-hover/mobile:bg-gradient-to-r group-hover/mobile:from-purple-600 group-hover/mobile:to-pink-600 transition-all duration-300">
                                            {link.label}
                                        </span>

                                        {/* Decorative arrow */}
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/mobile:opacity-100 group-hover/mobile:translate-x-1 transition-all duration-300 text-purple-500">
                                            →
                                        </span>
                                    </Link>
                                ))}

                                <div className="relative group/mobile-cta mt-4">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover/mobile-cta:opacity-60 transition-opacity duration-500" />

                                    <Button className="relative w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover/mobile-cta:scale-105">
                                        {/* Shimmer */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/mobile-cta:translate-x-full transition-transform duration-1000" />

                                        <Phone className="w-4 h-4 mr-2 relative z-10" />
                                        <span className="relative z-10">Request a Call</span>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Bottom glow effect when scrolled */}
            <div className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 transition-opacity duration-500",
                isScrolled && "opacity-50"
            )} />
        </header>
    )
}
