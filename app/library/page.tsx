import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Explore trust profiles, buyer-confidence patterns, diagnostic frameworks, and strategic observations that influence how SaaS buyers evaluate risk before making a decision.",
};

const featuredThinking = [
  {
    label: "Buyer Behavior",
    title: "Why buyers hesitate even when they understand the product",
    text: "A look at the difference between product comprehension and buyer confidence in complex SaaS buying environments.",
  },
  {
    label: "Trust Profiles",
    title: "The Product-Centric Blind Spot",
    text: "A recurring pattern where a website explains the product clearly but does not answer the buyer-risk questions that slow sales engagement.",
  },
  {
    label: "Diagnostic Pattern",
    title: "When proof is present but invisible",
    text: "Why testimonials, validation assets, and case examples often fail when they are disconnected from the claims they are meant to support.",
  },
];

const libraryCategories = [
  {
    title: "Trust Profiles",
    text: "Recurring patterns that describe how buyer confidence breaks down across SaaS websites.",
  },
  {
    title: "Diagnostic Patterns",
    text: "Common trust, proof, positioning, and buyer-risk issues observed through Archoric's diagnostic thinking.",
  },
  {
    title: "Buyer Confidence Paths",
    text: "How buyers move from interest to confidence before they are ready to speak with sales.",
  },
  {
    title: "Buyer Confidence Signals",
    text: "Examples of the questions, concerns, and validation points buyers look for before moving forward.",
  },
  {
    title: "Industry Observations",
    text: "Patterns from healthcare, construction, and other complex buying environments where trust matters before conversion.",
  },
  {
    title: "Field Notes",
    text: "Short strategic observations about positioning, proof placement, website structure, and buyer behavior.",
  },
];

const trustProfiles = [
  {
    title: "High-Trust Engine",
    color: "#2E8B57",
    description:
      "Strong trust, proof, positioning, and validation signals work together across the website and buying journey.",
    fingerprint: {
      R: 4,
      O: 4,
      S: 4,
      V: 4,
    },
  },
  {
    title: "Validation-Constrained",
    color: "#4F46E5",
    description:
      "The company demonstrates expertise and operational understanding, but buyers do not see enough proof, validation, or supporting evidence.",
    fingerprint: {
      R: 4,
      O: 4,
      S: 3,
      V: 1,
    },
  },
  {
    title: "Compliance-Heavy",
    color: "#D97706",
    description:
      "The website focuses heavily on standards, regulations, and compliance requirements but does not provide enough operational or buying confidence.",
    fingerprint: {
      R: 4,
      O: 2,
      S: 2,
      V: 2,
    },
  },
  {
    title: "Product-Centric Blind Spot",
    color: "#2563EB",
    description:
      "The product is explained well, but buyers are left to connect the dots themselves. Trust, proof, and credibility signals are underdeveloped.",
    fingerprint: {
      R: 2,
      O: 4,
      S: 2,
      V: 1,
    },
  },
  {
    title: "Fragmented Authority",
    color: "#C65D3A",
    description:
      "Useful information exists, but it is disconnected. Buyers struggle to build confidence because evidence, expertise, and key pages do not reinforce one another.",
    fingerprint: {
      R: 3,
      O: 3,
      S: 1,
      V: 1,
    },
  },
  {
    title: "Surface Trust System",
    color: "#6B7280",
    description:
      "The website appears credible on the surface but lacks the depth needed to answer important buyer questions or reduce perceived risk.",
    fingerprint: {
      R: 2,
      O: 2,
      S: 2,
      V: 2,
    },
  },
];

const sampleDiagnostics = [
  {
    title: "Buyer Hesitation Mapping",
    text: "A framework for understanding where uncertainty, unanswered questions, and decision friction may appear throughout a buying journey.",
  },
  {
    title: "Proof Placement Analysis",
    text: "A method for evaluating whether evidence and validation appear where buyers need them most.",
  },
  {
    title: "Trust Leakage Model",
    text: "A structured model for identifying where trust, proof, or credibility weaknesses may increase buyer-confidence risk.",
  },
];

const insightCards = [
  "The difference between traffic problems and confidence problems",
  "Why buyers need reassurance before features",
  "How weak proof placement creates decision friction",
  "When validation exists but does not influence the buying journey",
  "Why complex SaaS buyers evaluate risk before value",
  "How website structure can either support or weaken sales readiness",
];

const tierLabels = {
  R: "Market & compliance",
  O: "Operational confidence",
  S: "Website journey",
  V: "Evidence & transparency",
};

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <header className="border-b border-[#E8E2D5] bg-[#FAF8F5]/95 px-6 py-5 backdrop-blur lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
          <Link href="/" className="space-y-1">
            <div className="font-serif text-2xl tracking-tight text-[#2A2925]">Archoric</div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#706E69]">
              Buyer Confidence Strategy
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] text-[#706E69] lg:flex">
            <Link href="/services" className="transition-colors hover:text-[#2A2925]">Services</Link>
            <Link href="/who-we-help" className="transition-colors hover:text-[#2A2925]">Who We Help</Link>
            <Link href="/library" className="transition-colors hover:text-[#2A2925]">Library</Link>
            <Link href="/about" className="transition-colors hover:text-[#2A2925]">About</Link>
            <Link href="/contact" className="transition-colors hover:text-[#2A2925]">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden bg-[#2A2925] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#B55A47] lg:inline-flex"
          >
            Discuss Your Website
          </Link>
        </div>
      </header>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            The Thinking Library
          </span>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight sm:text-7xl">
            How Archoric studies buyer confidence, proof, positioning, and trust.
          </h1>
          <p className="mx-auto max-w-3xl text-[19px] leading-relaxed text-[#706E69]">
            A curated collection of strategic observations, trust profiles, diagnostic patterns, and buyer-confidence models for complex SaaS markets.
          </p>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Featured Thinking
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Patterns that explain why buyers hesitate.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredThinking.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  {item.label}
                </span>
                <h3 className="mt-5 font-serif text-3xl font-normal leading-tight text-[#2A2925]">
                  {item.title}
                </h3>
                <p className="mt-5 text-[16.5px] leading-relaxed text-[#706E69]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="space-y-5 md:col-span-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                Library Categories
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                Quality of thinking over quantity of content.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {libraryCategories.map((category) => (
              <article key={category.title} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {category.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {category.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Trust Profiles
            </span>

            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Six recurring patterns of buyer confidence.
            </h2>

            <p className="text-[18px] leading-relaxed text-[#706E69]">
              These profiles describe common ways trust, proof, positioning, and validation can strengthen or weaken buyer confidence across SaaS websites.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustProfiles.map((profile) => (
              <article key={profile.title} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <div
                  className="mb-6 h-3 w-3 rounded-full"
                  style={{ backgroundColor: profile.color }}
                  aria-hidden="true"
                />

                <h3 className="font-serif text-3xl font-normal leading-tight text-[#2A2925]">
                  {profile.title}
                </h3>

                <p className="mt-5 text-[17px] leading-relaxed text-[#706E69]">
                  {profile.description}
                </p>

                <div className="mt-8 space-y-3 border-t border-[#E8E2D5] pt-6">
                  {Object.entries(profile.fingerprint).map(([tier, score]) => (
                    <div key={tier} className="flex items-center justify-between gap-4">
                      <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#706E69]" title={tierLabels[tier as keyof typeof tierLabels]}>
                        {tier}
                      </span>

                      <div className="flex gap-1.5" aria-label={`${tierLabels[tier as keyof typeof tierLabels]} strength ${score} out of 4`}>
                        {[1, 2, 3, 4].map((dot) => (
                          <span
                            key={dot}
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: dot <= score ? profile.color : "#D9D4CA",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] leading-relaxed text-[#706E69]">
                  <span>R — Market</span>
                  <span>O — Operations</span>
                  <span>S — Structure</span>
                  <span>V — Validation</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="space-y-5 md:col-span-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                How Archoric Evaluates Buyer Confidence
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                A practical view of what buyers need to see before they move forward.
              </h2>
            </div>

            <div className="space-y-5 md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                The Library explains the concepts, patterns, and evaluation methods Archoric uses to understand where buyer confidence is strengthened or weakened across a website.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sampleDiagnostics.map((sample) => (
              <article key={sample.title} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {sample.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {sample.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Trust Leakage Model
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              A structured way to prioritize buyer-confidence risk.
            </h2>
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Archoric uses this model to identify where trust, proof, or credibility weaknesses may create friction in the buying journey.
            </p>
            <div className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
              <p className="font-serif text-2xl italic leading-relaxed text-[#2A2925]">
                The goal is not to claim exact revenue loss. The goal is to help teams understand which trust gaps may deserve attention first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Field Notes
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Topics the Library will develop over time.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insightCards.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Why the Library Exists
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              To make buyer confidence easier to understand.
            </h2>
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              The Library is where Archoric studies the patterns that influence how buyers evaluate SaaS companies before they speak with sales.
            </p>

            <p className="text-[18px] leading-relaxed text-[#706E69]">
              It focuses on the questions, signals, proof points, positioning choices, and website structures that can either strengthen or weaken buyer confidence.
            </p>

            <p className="text-[18px] leading-relaxed text-[#706E69]">
              The goal is to help teams better understand how trust is formed, where hesitation appears, and why some websites create confidence while others leave buyers uncertain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-4xl space-y-7">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
            If these patterns sound familiar, the next step is a focused conversation.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#706E69]">
            We can discuss whether your website is creating confidence, creating doubt, or leaving important buyer questions unanswered.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
          >
            Discuss Your Website
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#E8E2D5] bg-[#3A342F] px-6 py-14 text-[#F7F1EA] lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="font-serif text-3xl">Archoric</div>
            <p className="max-w-md text-[16px] leading-relaxed text-[#D8CEC2]">
              Helping SaaS vendors improve website strategy, product positioning, proof, and buyer confidence in complex buying environments.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#D9A08D]">Explore</h4>
            <Link href="/services" className="block text-[15px] text-[#D8CEC2] hover:text-white">Services</Link>
            <Link href="/who-we-help" className="block text-[15px] text-[#D8CEC2] hover:text-white">Who We Help</Link>
            <Link href="/library" className="block text-[15px] text-[#D8CEC2] hover:text-white">Library</Link>
          </div>

          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#D9A08D]">Company</h4>
            <Link href="/about" className="block text-[15px] text-[#D8CEC2] hover:text-white">About</Link>
            <Link href="/contact" className="block text-[15px] text-[#D8CEC2] hover:text-white">Contact</Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-[14px] text-[#BFB4A8]">
          © 2026 Archoric. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
