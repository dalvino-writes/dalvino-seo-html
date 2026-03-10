"use client";

import Image from "next/image";
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
                Using the <strong>Layered Trust Defense Architecture (LTDA)</strong>{" "}
                framework, we evaluated TherapyNotes across four credibility
                layers.
              </p>
            </div>

            {/* SCREENSHOT 1 + SCREENSHOT 2 */}
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
                Evidence: Existing Trust Signals
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Healthcare buyers evaluating software in regulated environments
                are highly sensitive to signals that reduce legal and
                operational risk. TherapyNotes clearly understands this dynamic
                and surfaces multiple trust cues across the site.
              </p>
            </section>

            <section className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  HIPAA-Compliant Messaging
                </h3>

                <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground text-lg leading-relaxed mb-6">
                  “Communicate securely with clients and staff using a
                  HIPAA-compliant messaging system.”
                </blockquote>

                {/* SCREENSHOT 3 */}
                <figure className="border border-border bg-card overflow-hidden mb-6">
                  <Image
                    src="/images/case-studies/therapynotes/therapynotes-hipaa-messaging.png"
                    alt="TherapyNotes secure messaging card highlighting HIPAA-compliant messaging"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                    <strong>Figure 3.</strong> TherapyNotes highlighting
                    HIPAA-compliant messaging as a core platform capability.
                  </figcaption>
                </figure>

                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  This is a meaningful compliance signal because it directly
                  addresses one of the most sensitive risk areas for healthcare
                  buyers: secure communication involving patient-related
                  information.
                </p>

                <p className="text-base md:text-lg text-foreground leading-relaxed mt-6">
                  The signal is strong at the claim layer. But the deeper
                  technical safeguards behind that claim, such as encryption
                  protocols, access controls, or audit logging, are not surfaced
                  here in a way that helps a cautious evaluator verify how the
                  compliance posture is operationalized.
                </p>

                <div className="mt-6 border border-dashed border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground">
                  Optional: if you capture the separate Secure Messaging page
                  with the HITRUST wording visible, place it here as an
                  additional evidence figure.
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Privacy-by-Design Security Architecture
                </h3>

                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  TherapyNotes also emphasizes a security-first design approach
                  through language that frames the platform as protecting PHI
                  from the ground up.
                </p>

                {/* SCREENSHOT 4 */}
                <figure className="border border-border bg-card overflow-hidden mb-6">
                  <Image
                    src="/images/case-studies/therapynotes/therapynotes-privacy-by-design.png"
                    alt="TherapyFuel page showing Privacy-by-Design and HIPAA compliance messaging"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                    <strong>Figure 4.</strong> TherapyFuel emphasizing
                    Privacy-by-Design, PHI safeguarding, and HIPAA-oriented
                    reassurance.
                  </figcaption>
                </figure>

                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  This signals security awareness, PHI sensitivity, and a
                  deliberate attempt to reassure the buyer. But again, the
                  verification layer remains mostly high-level rather than
                  technically demonstrated.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  AI Documentation Compliance
                </h3>

                <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground text-lg leading-relaxed mb-6">
                  “TherapyFuel is your AI-powered productivity partner.”
                </blockquote>

                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  The AI-assisted documentation feature is notable because it
                  introduces a higher level of buyer sensitivity around how data
                  is handled, where processing occurs, and whether AI
                  functionality remains inside the legal and operational
                  safeguards expected in healthcare environments.
                </p>

                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  What matters here is not simply that AI exists, but whether
                  the platform makes governance, PHI handling, and contractual
                  safeguards legible enough for a risk-sensitive evaluator.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                The Key Insight
              </h2>

              <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
                <p>
                  TherapyNotes clearly deploys <strong>multiple layers of trust
                  signals</strong>: regulatory language, security architecture
                  claims, certification references, strong social proof, and
                  operational reassurance.
                </p>

                <p>
                  But those signals largely operate at the level of{" "}
                  <strong>claims and credentials</strong>.
                </p>

                <p>
                  The <strong>verification layer</strong>—where compliance is
                  demonstrated through concrete safeguards, authority routing,
                  and visible proof—remains comparatively thin.
                </p>

                <p>
                  This distinction is subtle, but important for healthcare
                  buyers evaluating legal exposure and implementation risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Where the Trust Break Happens
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                Healthcare software buyers do not evaluate platforms like
                typical SaaS products. In regulated environments, decision logic
                often follows a <strong>risk-first sequence</strong>.
              </p>

              <div className="grid gap-8 md:grid-cols-2 mb-10">
                <div className="border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-4">
                    Likely Buyer Evaluation Path
                  </h3>
                  <div className="space-y-2 text-base text-foreground">
                    <p>Homepage</p>
                    <p>↓</p>
                    <p>Security / Compliance</p>
                    <p>↓</p>
                    <p>Features</p>
                    <p>↓</p>
                    <p>Pricing</p>
                    <p>↓</p>
                    <p>Reviews</p>
                    <p>↓</p>
                    <p>Trial</p>
                  </div>
                </div>

                <div className="border border-border bg-card p-6">
                  <h3 className="text-lg font-bold mb-4">Current Site Routing</h3>
                  <div className="space-y-2 text-base text-foreground">
                    <p>Homepage</p>
                    <p>↓</p>
                    <p>Features</p>
                    <p>↓</p>
                    <p>Security / Compliance</p>
                    <p>↓</p>
                    <p>Pricing</p>
                    <p>↓</p>
                    <p>Reviews</p>
                    <p>↓</p>
                    <p>Trial</p>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                Compliance content is nested inside the features layer rather
                than positioned as a primary trust gateway. This creates a
                structural mismatch: the site prioritizes feature exploration,
                while risk-sensitive buyers may try to validate compliance much
                earlier in the journey.
              </p>

              <div className="border border-dashed border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground">
                Future diagram goes here: Buyer evaluation path vs current site
                routing.
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Understanding the Trust Architecture Gap
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                The LTDA framework views trust as a layered defense system,
                similar to the Swiss Cheese model used in safety engineering.
                Each credibility layer protects the buyer’s decision process.
              </p>

              <div className="border border-border bg-card overflow-hidden mb-10">
                <table className="w-full text-left">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="px-6 py-4 text-base font-bold">Layer</th>
                      <th className="px-6 py-4 text-base font-bold">Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-6 py-4">Regulatory trust</td>
                      <td className="px-6 py-4">Present</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-6 py-4">Security credibility</td>
                      <td className="px-6 py-4">Present</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-6 py-4">Authority routing</td>
                      <td className="px-6 py-4">Weak</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-6 py-4">Verification depth</td>
                      <td className="px-6 py-4">Thin</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
                The platform therefore contains several strong trust layers, but
                the deeper verification layer remains underdeveloped. The result
                is not a total trust failure, but a structural fragility where
                credibility depends more on brand reputation than on explicit
                compliance architecture.
              </p>

              <div className="border border-dashed border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground">
                Future diagram goes here: Swiss-cheese-style LTDA visual showing
                where trust layers hold and where verification breaks.
              </div>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Strategic Direction
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                A stronger trust architecture could include:
              </p>

              <ul className="space-y-3 text-base md:text-lg text-foreground leading-relaxed list-disc pl-6">
                <li>Mapping product features to specific HIPAA safeguard sections</li>
                <li>Linking to primary regulatory sources such as HHS / OCR guidance</li>
                <li>Surfacing compliance authority earlier in the decision path</li>
                <li>
                  Providing visible verification of security controls and
                  governance mechanisms
                </li>
              </ul>

              <p className="text-base md:text-lg text-foreground leading-relaxed mt-6">
                These changes would move compliance signals from{" "}
                <strong>claim-level reassurance</strong> to{" "}
                <strong>structural authority</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Curious What Your Trust Score Would Be?
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Healthcare software buyers evaluate risk long before they commit
                to a platform. If your website doesn’t clearly demonstrate how
                your product protects them, trust can break long before the
                trial stage.
              </p>

              <div className="border border-border bg-card p-8">
                <p className="text-lg font-medium leading-relaxed">
                  Request a Trust Deficit Audit to see where your trust
                  architecture may be weakening your conversion path.
                </p>
              </div>
            </section>

            {/* SCREENSHOT 5 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Additional Operational Reassurance Signal
              </h2>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Beyond regulatory and security-oriented messaging, the site also
                reinforces buyer confidence through service availability and
                human support positioning.
              </p>

              <figure className="border border-border bg-card overflow-hidden">
                <Image
                  src="/images/case-studies/therapynotes/therapynotes-support-availability.png"
                  alt="TherapyNotes support section showing 24/7 availability and human support"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
                <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong>Figure 5.</strong> Operational reassurance signal
                  emphasizing availability, responsiveness, and human support.
                </figcaption>
              </figure>
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