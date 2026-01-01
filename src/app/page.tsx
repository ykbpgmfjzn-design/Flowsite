import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/layout/StickyContact";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { CalculatorsSection } from "@/components/calculators/CalculatorsSection";
import { TestimonialsCarousel } from "@/components/social/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-black">
      <Header />

      <div className="flex-1">
        <HeroSection />
        <TrustStrip />

        {/* Featured Projects Preview */}
        <section className="py-24 container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Exclusive Inventory</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Opportunities</h2>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          {/* We render just a filtered subset or the full grid for now. 
                 Ideally ProjectsGrid would accept a limit prop, but for MVP we show all or I could wrap it. 
                 For now, I'll show the grid as is, it's efficient enough for MVP. 
              */}
          <ProjectsGrid />
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <CalculatorsSection />
        <TestimonialsCarousel />
        <ConsultationForm />
      </div>

      <Footer />
      <StickyContact />
    </main>
  );
}
