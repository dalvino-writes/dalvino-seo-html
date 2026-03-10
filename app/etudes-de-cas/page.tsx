"use client";

import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const demonstrationAnalyses = [
  {
    id: "therapynotes",
    href: "/etudes-de-cas/demonstration-analyses/therapynotes",
    category: "Healthcare SaaS · EHR / Clinical Operations",
    title: "TherapyNotes Trust Architecture Analysis",
    summary:
      "An independent structural analysis of how TherapyNotes communicates trust, compliance, and credibility across the buyer journey.",
    challenge:
      "Evaluate whether a healthcare SaaS platform communicates enough visible trust signals to reduce buyer hesitation in a regulated environment.",
    approach:
      "Applied the Archoric Trust Deficit Audit to public-facing pages, documentation pathways, and structural credibility signals.",
    status: "Demonstration Analysis",
  },
];

const clientCaseStudies = [
  {
    id: "placeholder-client-work",
    category: "Client Engagements",
    title: "Client case studies coming soon",
    summary:
      "This section will feature real engagements, documented transformations, and measurable outcomes once client projects are published.",
    challenge:
      "Future client work will be documented with clear context, structural diagnosis, intervention logic, and outcomes.",
    approach:
      "Each engagement will distinguish the trust deficit identified, the architecture designed, and the operational impact observed.",
    status: "Coming Soon",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              CASE STUDIES · CREDIBILITY ARCHITECTURE IN PRACTICE
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              A library of structural credibility analyses.
            </h1>

            <p className="text-lg text-foreground leading-relaxed mb-8 max-w-3xl">
              This library documents how trust architecture appears in practice
              across Healthcare SaaS environments. It is designed to separate
              independent demonstration analyses from future client case
              studies, so the thinking, the method, and the proof remain clear.
            </p>

            <div className="grid gap-6 md:grid-cols-2 border-y border-border py-8 mb-20">
              <div>
                <h2 className="text-base font-bold mb-2">
                  Demonstration Analyses
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Independent structural analyses of real companies, published
                  to demonstrate audit thinking, credibility diagnosis, and
                  framework application.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold mb-2">
                  Client Case Studies
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real client engagements, documented separately to show how
                  trust architecture translates into execution, transformation,
                  and measurable business outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="container max-w-6xl space-y-24">
            <section>
              <div className="max-w-3xl mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  Category 01
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Demonstration Analyses
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  These are independent analyses of public-facing Healthcare
                  SaaS properties. They are not presented as client work. Their
                  purpose is to make the audit method visible, test the
                  framework against real market examples, and show how
                  structural trust signals shape perception.
                </p>
              </div>

              <div className="space-y-8">
                {demonstrationAnalyses.map((study) => (
                  <article
                    key={study.id}
                    className="border border-border bg-card p-8 md:p-10"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
                      <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          {study.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                          {study.title}
                        </h3>
                        <p className="text-base text-foreground leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center border border-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                          {study.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          What was being examined
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          How the analysis was approached
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={study.href}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        Read analysis →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="max-w-3xl mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  Category 02
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Client Case Studies
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  This section is reserved for real engagements. When published,
                  each case study will document the initial trust deficit, the
                  architecture or intervention designed, and the outcomes that
                  followed. Until then, this category remains intentionally
                  separate from demonstration analyses.
                </p>
              </div>

              <div className="space-y-8">
                {clientCaseStudies.map((study) => (
                  <article
                    key={study.id}
                    className="border border-dashed border-border bg-card p-8 md:p-10"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
                      <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          {study.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                          {study.title}
                        </h3>
                        <p className="text-base text-foreground leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center border border-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {study.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          What will be documented
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          What readers should expect
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}