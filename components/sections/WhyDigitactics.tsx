"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const WhyDigitactics = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#2D5A27] mb-6">
          {site.whyDigitactics.tagline}
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter mb-16 text-white">
          {site.whyDigitactics.title}
        </h2>
        <div className="flex flex-col divide-y divide-white/10 mb-16">
          <div className="grid grid-cols-3 gap-8 pb-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30"></p>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30">Generic Agency</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2D5A27]">Digitactics</p>
          </div>
          {site.whyDigitactics.comparison.map((row: { dimension: string; generic: string; digitactics: string }, index: number) => (
            <div key={index} className="grid grid-cols-3 gap-8 py-6">
              <p className="text-sm font-semibold text-white/50 leading-relaxed">
                {row.dimension}
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                {row.generic}
              </p>
              <p className="text-sm text-white leading-relaxed">
                {row.digitactics}
              </p>
            </div>
          ))}
        </div>
        <Button
          asChild
          size="lg"
          className="font-semibold bg-[#2D5A27] hover:bg-[#1e3d1a] text-white rounded-none shadow-none border-0"
        >
          <Link href="/contact">{site.newsletterSection.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default WhyDigitactics;