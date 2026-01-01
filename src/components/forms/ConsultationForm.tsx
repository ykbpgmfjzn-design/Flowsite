"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calendar, Phone } from "lucide-react"

export function ConsultationForm() {
    return (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <div className="space-y-8">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">Private Consultation</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                            Start Your Investment Journey Today
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Schedule a private call with our senior investment advisors. We'll discuss your goals, explain legal ownership structures for foreigners, and present off-market opportunities.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Direct Line</p>
                                    <p className="text-gray-400">+62 812 3456 7890 (WhatsApp Available)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Office Hours</p>
                                    <p className="text-gray-400">Mon - Fri, 9:00 AM - 6:00 PM (GMT+8)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <Card className="p-8 bg-white text-black shadow-2xl border-none">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="interest">I am interested in...</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Topic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="investment">Investment (High ROI)</SelectItem>
                                        <SelectItem value="living">Relocation / Living</SelectItem>
                                        <SelectItem value="selling">Selling Property</SelectItem>
                                        <SelectItem value="partnership">Partnership</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Tell us about your investment goals..." className="min-h-[100px]" />
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-xs text-gray-500 leading-tight cursor-pointer">
                                    I agree to the processing of my personal data and confirm I have read the privacy policy.
                                </Label>
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg font-bold h-12">
                                Book Consultation
                            </Button>
                        </form>
                    </Card>

                </div>
            </div>
        </section>
    )
}
