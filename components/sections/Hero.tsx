"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { site } = useContent();

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter mb-8 text-black">
          {site.hero.title}
        </h1>
        <p className="text-base md:text-lg text-black leading-relaxed mb-10 max-w-md">
          {site.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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