"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";

export default function CaseStudies() {
  const { caseStudies } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {caseStudies.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {caseStudies.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-16">
              {caseStudies.subtitle}
            </p>
          </div>

          <div className="container space-y-16">
            {caseStudies.studies.map((study) => (
              <div
                key={study.id}
                className="border border-border p-8 md:p-10 bg-card"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {study.sector}
                </p>
                <h2 className="text-2xl font-bold mb-6">{study.client}</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {caseStudies.labels.challenge}
                    </h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {caseStudies.labels.approach}
                    </h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {caseStudies.labels.results}
                    </h3>
                    <ul className="space-y-1">
                      {study.results.map((r, i) => (
                        <li key={i} className="text-sm font-medium text-accent">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-muted-foreground">
                  "{study.testimonial}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}