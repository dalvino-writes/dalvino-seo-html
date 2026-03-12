"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { site } = useContent();

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container max-w-5xl">
        <div className="max-w-4xl rounded-[30px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter mb-8 text-[#163629]">
            {site.hero.title}
          </h1>

          <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed mb-10 max-w-2xl whitespace-pre-line">
            {site.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
            >
              <Link href="/contact">{site.hero.cta}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold rounded-full border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl hover:bg-white/70 shadow-none px-7"
            >
              <Link href="/etudes-de-cas">{site.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;