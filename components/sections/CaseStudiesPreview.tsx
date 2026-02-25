"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const CaseStudiesPreview = () => {
  const { site, caseStudies } = useContent();

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {site.caseStudiesPreview.tagline}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
          {site.caseStudiesPreview.title}
        </h2>
        <p className="text-foreground text-lg mb-12 max-w-xl">
          {site.caseStudiesPreview.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.studies.map((study) => (
            <div key={study.id} className="border border-border p-6 bg-card">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {study.sector}
              </p>
              <h3 className="text-lg font-bold mb-3">{study.client}</h3>
              <p className="text-foreground text-sm leading-relaxed mb-4">
                {study.challenge}
              </p>
              <ul className="space-y-1">
                {study.results.map((r, i) => (
                  <li key={i} className="text-sm font-medium text-accent">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button asChild variant="outline" size="lg" className="font-semibold">
          <Link href="/etudes-de-cas">{site.caseStudiesPreview.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;