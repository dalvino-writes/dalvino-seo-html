"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function TherapyNotesAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              DEMONSTRATION ANALYSIS · TRUST ARCHITECTURE AUDIT
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              TherapyNotes
            </h1>

            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-10">
              When compliance signals stop at the claim layer.
            </p>

            <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed mb-12">
              <p>
                TherapyNotes is one of the most recognized behavioral health EHR
                platforms in the United States. With thousands of reviews and
                strong market recognition, it dominates the therapy practice
                management category through brand authority and reputation.
              </p>

              <p>
                But when we evaluated its <strong>trust architecture</strong>,
                we found a structural gap between the way healthcare buyers
                validate regulatory risk and the way the website routes them
                through its content.
              </p>

              <p>
                Using the{" "}
                <strong>Layered Trust Defense Architecture (LTDA)</strong>{" "}
                framework, we evaluated TherapyNotes across four credibility
                layers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-14">
              <figure className="border border-border bg-card overflow-hidden">
                <Image
                  src="/images/case-studies/therapynotes/therapynotes-home-authority.png"
                  alt="TherapyNotes homepage highlighting brand authority and trust positioning"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong>Figure 1.</strong> TherapyNotes positioning itself as
                  a trusted behavioral health EHR, supported by recognizable
                  authority and market-facing trust signals.
                </figcaption>
              </figure>

              <figure className="border border-border bg-card overflow-hidden">
                <Image
                  src="/images/case-studies/therapynotes/therapynotes-trustpilot-reviews.png"
                  alt="TherapyNotes Trustpilot review section showing strong social proof"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong>Figure 2.</strong> Social proof signals reinforcing
                  market trust through high review ratings and large review
                  volume.
                </figcaption>
              </figure>
            </div>

            <div className="border border-border bg-card overflow-hidden mb-14">
              <table className="w-full text-left">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="px-6 py-4 text-lg font-bold">Layer</th>
                    <th className="px-6 py-4 text-lg font-bold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-6 py-4 text-lg">Regulatory Depth</td>
                    <td className="px-6 py-4 text-lg">1.5 / 5</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-6 py-4 text-lg">Operational Fluency</td>
                    <td className="px-6 py-4 text-lg">2 / 5</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-6 py-4 text-lg">Authority Routing</td>
                    <td className="px-6 py-4 text-lg">1.5 / 5</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-6 py-4 text-lg">
                      Validation & Transparency
                    </td>
                    <td className="px-6 py-4 text-lg">1 / 5</td>
                  </tr>
                </tbody>
              </table>

              <div className="border-t border-border px-6 py-5 text-2xl font-semibold">
                Total: 6 / 16 — Critical Trust Gap
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
              <p>
                This does not mean the platform lacks credibility signals. In
                fact, the homepage presents several strong indicators of trust.
              </p>

              <p>
                But the deeper <strong>verification layer</strong> behind those
                signals is not fully surfaced in the decision path.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-4xl space-y-20">

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Where the Trust Break Happens
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                Healthcare software buyers do not evaluate platforms like
                typical SaaS products. In regulated environments, decision logic
                often follows a <strong>risk-first sequence</strong>.
              </p>

              <figure className="border border-border bg-card overflow-hidden">
                <Image
                  src="/images/case-studies/therapynotes/buyer-routing-gap.png"
                  alt="Comparison between buyer evaluation path and current site routing"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong>Diagram 1.</strong> Healthcare buyers often validate
                  compliance risk before exploring product features. When site
                  routing prioritizes features first, the trust validation path
                  can break early in the evaluation process.
                </figcaption>
              </figure>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Understanding the Trust Architecture Gap
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                The LTDA framework views trust as a layered defense system,
                similar to the Swiss Cheese model used in safety engineering.
                Each credibility layer protects the buyer’s decision process.
              </p>

              <figure className="border border-border bg-card overflow-hidden">
                <Image
                  src="/images/case-studies/therapynotes/ltda-trust-architecture.png"
                  alt="Layered Trust Defense Architecture diagram showing trust layers"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong>Diagram 2.</strong> The Layered Trust Defense
                  Architecture illustrates how credibility depends on stacked
                  verification layers. When verification depth and authority
                  routing are weak, trust can break despite strong surface
                  signals.
                </figcaption>
              </figure>
            </section>

            <section>
              <div className="border border-border bg-card p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  Curious what your trust architecture is actually signaling?
                </p>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">
                   Request a Trust Deficit Audit
                </h2>

                <div className="space-y-5 text-base md:text-lg text-foreground leading-relaxed mb-8">
                  <p>
                        See where regulated buyers lose confidence in your product site.
                        The Trust Deficit Audit identifies where credibility signals break,
                        where compliance proof is missing, and where trust gaps silently
                        reduce demo requests and trials.
                  </p>

                  <p>
                    The Trust Deficit Audit helps identify where your site is
                    relying on claims instead of structural proof, where buyer
                    validation paths break down, and where credibility signals
                    need to be surfaced earlier in the journey.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold transition-opacity hover:opacity-90"
                  >
                    Request a Trust Deficit Audit
                  </Link>

                  <Link
                    href="/method"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border font-semibold transition-colors hover:bg-muted"
                  >
                    Explore the Method
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <div className="border border-border bg-card p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  Note on classification
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  This page is published as an independent demonstration
                  analysis. It is not presented as client work and does not
                  claim a commercial engagement with TherapyNotes. Its purpose
                  is to demonstrate method, structural reasoning, and how
                  Archoric evaluates trust architecture in practice.
                </p>
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}