"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                    <span
                        className={cn(
                            "font-heading font-bold text-2xl tracking-widest uppercase",
                            isScrolled ? "text-primary" : "text-white"
                        )}
                    >
                        Magnum Estate
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                                isScrolled ? "text-foreground" : "text-white/90"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant={isScrolled ? "default" : "secondary"}
                        className={cn(
                            "font-medium tracking-wide",
                            !isScrolled && "bg-white text-black hover:bg-white/90"
                        )}
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Request a Call
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-8 mt-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button className="w-full mt-4">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Request a Call
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
