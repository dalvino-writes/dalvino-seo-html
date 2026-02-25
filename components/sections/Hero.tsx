"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { site } = useContent();

  return (
    <section className="pt-20 pb-40 md:pt-28 md:pb-64">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-tighter mb-12 text-black">
          {site.hero.title}
        </h1>
        <p className="text-base md:text-lg text-black leading-relaxed mb-20 max-w-md">
          {site.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-12">
          <Button
            asChild
            size="lg"
            className="font-semibold bg-[#2D5A27] hover:bg-[#1e3d1a] text-white rounded-none shadow-none border-0"
          >
            <Link href="/contact">{site.hero.cta}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-semibold rounded-none border-black text-black bg-white hover:bg-black hover:text-white shadow-none"
          >
            <Link href="/etudes-de-cas">{site.hero.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;