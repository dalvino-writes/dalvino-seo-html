"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function TherapyNotesAnalysisPage() {
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
                DEMONSTRATION ANALYSIS · TRUST ARCHITECTURE AUDIT
              </p>

              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                TherapyNotes
              </h1>

              <p className="text-xl md:text-2xl text-[#2f3e36] leading-relaxed mb-10">
                When compliance signals stop at the claim layer.
              </p>

              <div className="space-y-6 text-base md:text-lg text-[#2f3e36] leading-relaxed mb-12">
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

              <div className="grid gap-6 md:grid-cols-2">
                <figure className="rounded-[22px] border border-black/8 bg-white/34 backdrop-blur-xl overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <Image
                    src="/images/case-studies/therapynotes/therapynotes-home-authority.png"
                    alt="TherapyNotes homepage highlighting brand authority and trust positioning"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                  <figcaption className="p-4 text-sm text-[#4c5a54] leading-relaxed">
                    <strong>Figure 1.</strong> TherapyNotes positioning itself as
                    a trusted behavioral health EHR, supported by recognizable
                    authority and market-facing trust signals.
                  </figcaption>
                </figure>

                <figure className="rounded-[22px] border border-black/8 bg-white/34 backdrop-blur-xl overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <Image
                    src="/images/case-studies/therapynotes/therapynotes-trustpilot-reviews.png"
                    alt="TherapyNotes Trustpilot review section showing strong social proof"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                  <figcaption className="p-4 text-sm text-[#4c5a54] leading-relaxed">
                    <strong>Figure 2.</strong> Social proof signals reinforcing
                    market trust through high review ratings and large review
                    volume.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container max-w-5xl space-y-20">
            <section>
              <div className="rounded-[28px] border border-black/8 bg-white/38 backdrop-blur-xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <table className="w-full text-left">
                  <thead className="bg-white/45">
                    <tr>
                      <th className="px-6 py-4 text-lg font-black text-[#163629]">Layer</th>
                      <th className="px-6 py-4 text-lg font-black text-[#163629]">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-black/8">
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">Regulatory Depth</td>
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">1.5 / 5</td>
                    </tr>
                    <tr className="border-t border-black/8">
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">Operational Fluency</td>
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">2 / 5</td>
                    </tr>
                    <tr className="border-t border-black/8">
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">Authority Routing</td>
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">1.5 / 5</td>
                    </tr>
                    <tr className="border-t border-black/8">
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">
                        Validation & Transparency
                      </td>
                      <td className="px-6 py-4 text-lg text-[#2f3e36]">1 / 5</td>
                    </tr>
                  </tbody>
                </table>

                <div className="border-t border-black/8 px-6 py-5 text-2xl font-semibold text-[#163629] bg-white/45">
                  Total: 6 / 16 — Critical Trust Gap
                </div>
              </div>
            </section>

            <section>
              <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <div className="space-y-6 text-base md:text-lg text-[#2f3e36] leading-relaxed">
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

            <section>
              <div className="max-w-4xl mb-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-[#163629]">
                  Where the Trust Break Happens
                </h2>

                <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                  Healthcare software buyers do not evaluate platforms like
                  typical SaaS products. In regulated environments, decision logic
                  often follows a <strong>risk-first sequence</strong>.
                </p>
              </div>

              <figure className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <Image
                  src="/images/case-studies/therapynotes/buyer-routing-gap.png"
                  alt="Comparison between buyer evaluation path and current site routing"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-[#4c5a54] leading-relaxed">
                  <strong>Diagram 1.</strong> Healthcare buyers often validate
                  compliance risk before exploring product features. When site
                  routing prioritizes features first, the trust validation path
                  can break early in the evaluation process.
                </figcaption>
              </figure>
            </section>

            <section>
              <div className="max-w-4xl mb-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-[#163629]">
                  Understanding the Trust Architecture Gap
                </h2>

                <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                  The LTDA framework views trust as a layered defense system,
                  similar to the Swiss Cheese model used in safety engineering.
                  Each credibility layer protects the buyer’s decision process.
                </p>
              </div>

              <figure className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <Image
                  src="/images/case-studies/therapynotes/ltda-trust-architecture.png"
                  alt="Layered Trust Defense Architecture diagram showing trust layers"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-[#4c5a54] leading-relaxed">
                  <strong>Diagram 2.</strong> The Layered Trust Defense
                  Architecture illustrates how credibility depends on stacked
                  verification layers. When verification depth and authority
                  routing are weak, trust can break despite strong surface
                  signals.
                </figcaption>
              </figure>
            </section>

            <section>
              <div className="rounded-[30px] border border-black/8 bg-white/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  Curious what your trust architecture is actually signaling?
                </p>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5 text-[#163629]">
                  Request a Trust Deficit Audit
                </h2>

                <div className="space-y-5 text-base md:text-lg text-[#2f3e36] leading-relaxed mb-8 max-w-3xl">
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
                    className="inline-flex items-center justify-center px-7 py-3 bg-[#2D5A27] text-white font-semibold rounded-full transition-colors hover:bg-[#1f411c]"
                  >
                    Request a Trust Deficit Audit
                  </Link>

                  <Link
                    href="/method"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl font-semibold transition-colors hover:bg-white/70"
                  >
                    Explore the Method
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  Note on classification
                </p>
                <p className="text-base text-[#2f3e36] leading-relaxed">
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