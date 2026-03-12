"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const CaseStudiesPreview = () => {
  const { site, caseStudies } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
            {site.caseStudiesPreview.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
            {site.caseStudiesPreview.title}
          </h2>
          <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed max-w-2xl">
            {site.caseStudiesPreview.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.studies.map((study) => (
            <div
              key={study.id}
              className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                {study.sector}
              </p>

              <h3 className="text-lg font-black mb-4 text-[#163629]">
                {study.client}
              </h3>

              <p className="text-[#2f3e36] text-sm leading-relaxed mb-5">
                {study.challenge}
              </p>

              <ul className="space-y-2">
                {study.results.map((r, i) => (
                  <li key={i} className="text-sm font-medium text-accent leading-relaxed">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="font-semibold rounded-full border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl hover:bg-white/70 shadow-none px-7"
        >
          <Link href="/etudes-de-cas">{site.caseStudiesPreview.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;