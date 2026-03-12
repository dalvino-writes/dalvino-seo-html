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
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-transparent text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42]"
          style={{ backgroundImage: "url('/images/archoric-soft-bg.jpg')" }}
        />
        <div className="absolute inset-0 backdrop-blur-[6px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,240,0.24)_0%,rgba(244,241,235,0.36)_100%)]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[30px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                CASE STUDIES · CREDIBILITY ARCHITECTURE IN PRACTICE
              </p>

              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                A library of structural credibility analyses.
              </h1>

              <p className="text-lg text-[#2f3e36] leading-relaxed mb-10 max-w-3xl">
                This library documents how trust architecture appears in practice
                across Healthcare SaaS environments. It is designed to separate
                independent demonstration analyses from future client case
                studies, so the thinking, the method, and the proof remain clear.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[22px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <h2 className="text-base font-black mb-3 text-[#163629]">
                    Demonstration Analyses
                  </h2>
                  <p className="text-sm text-[#4c5a54] leading-relaxed">
                    Independent structural analyses of real companies, published
                    to demonstrate audit thinking, credibility diagnosis, and
                    framework application.
                  </p>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <h2 className="text-base font-black mb-3 text-[#163629]">
                    Client Case Studies
                  </h2>
                  <p className="text-sm text-[#4c5a54] leading-relaxed">
                    Real client engagements, documented separately to show how
                    trust architecture translates into execution,
                    transformation, and measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-5xl space-y-24 mt-24">
            <section>
              <div className="max-w-3xl mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  Category 01
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#163629]">
                  Demonstration Analyses
                </h2>
                <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
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
                    className="rounded-[28px] border border-black/8 bg-white/38 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
                      <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          {study.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#163629]">
                          {study.title}
                        </h3>
                        <p className="text-base text-[#2f3e36] leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center rounded-full border border-black/8 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-xl">
                          {study.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="rounded-[20px] border border-black/8 bg-white/34 backdrop-blur-xl px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          What was being examined
                        </h4>
                        <p className="text-sm text-[#2f3e36] leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-[20px] border border-black/8 bg-white/34 backdrop-blur-xl px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          How the analysis was approached
                        </h4>
                        <p className="text-sm text-[#2f3e36] leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={study.href}
                        className="inline-flex items-center text-sm font-semibold text-[#163629] hover:text-accent transition-colors"
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
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  Category 02
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#163629]">
                  Client Case Studies
                </h2>
                <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
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
                    className="rounded-[28px] border border-dashed border-black/12 bg-white/30 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
                      <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          {study.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#163629]">
                          {study.title}
                        </h3>
                        <p className="text-base text-[#2f3e36] leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center rounded-full border border-black/8 bg-white/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5c6a63] backdrop-blur-xl">
                          {study.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-[20px] border border-black/8 bg-white/30 backdrop-blur-xl px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.03)]">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          What will be documented
                        </h4>
                        <p className="text-sm text-[#2f3e36] leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-[20px] border border-black/8 bg-white/30 backdrop-blur-xl px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.03)]">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                          What readers should expect
                        </h4>
                        <p className="text-sm text-[#2f3e36] leading-relaxed">
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