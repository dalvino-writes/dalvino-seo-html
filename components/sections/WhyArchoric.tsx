"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const WhyArchoric = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="rounded-[30px] border border-black/12 bg-[#0f1512] px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-[#6f9d87] mb-4">
              {site.whyArchoric.tagline}
            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-tighter text-white">
              {site.whyArchoric.title}
            </h2>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/[0.03] overflow-hidden mb-12">
            <div className="grid grid-cols-3 gap-8 px-6 md:px-8 py-5 border-b border-white/8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/25"></p>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/30">
                Generic Agency
              </p>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6f9d87]">
                Archoric
              </p>
            </div>

            <div className="flex flex-col divide-y divide-white/8">
              {site.whyArchoric.comparison.map(
                (
                  row: { dimension: string; generic: string; Archoric: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-8 py-6"
                  >
                    <p className="text-sm font-semibold text-white/55 leading-relaxed">
                      {row.dimension}
                    </p>

                    <p className="text-sm text-white/45 leading-relaxed">
                      {row.generic}
                    </p>

                    <p className="text-sm text-white leading-relaxed">
                      {row.Archoric}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
          >
            <Link href="/contact">{site.newsletterSection.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyArchoric;