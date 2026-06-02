import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Hesitation Audit",
  description:
    "A focused diagnostic that reviews up to five key website pages to identify trust gaps, missing proof, and buyer-confidence issues that may be creating hesitation.",
};

const pricingOptions = [
  {
    name: "Pilot Review",
    price: "From €500",
    scope: "1 key page",
    bestFor: "Fast clarity on one important website page before larger decisions are made.",
    includes: [
      "Short diagnostic summary",
      "Buyer hesitation observations",
      "Proof-placement notes",
      "Priority fixes",
    ],
  },
  {
    name: "Focused Audit",
    price: "From €950",
    scope: "3 key pages",
    bestFor: "A clearer view of the buyer journey across the homepage, product page, and demo or proof path.",
    includes: [
      "Buyer Hesitation Report",
      "Buyer Question Map",
      "Proof Placement Review",
      "Priority Fix List",
      "Walkthrough session",
    ],
  },
  {
    name: "Extended Audit",
    price: "From €1,500",
    scope: "Up to 5 key pages",
    bestFor: "A stronger pre-sales confidence review across the most important buyer decision pages.",
    includes: [
      "Expanded diagnostic report",
      "Key page review",
      "Buyer hesitation map",
      "Proof placement review",
      "Primary bottleneck finding",
      "Priority roadmap",
      "Walkthrough session",
    ],
  },
];

const reviewedPages = [
  {
    title: "Homepage",
    text: "First impressions, positioning clarity, and whether buyers quickly understand who the product is for.",
  },
  {
    title: "Product or solution page",
    text: "How clearly the offer is explained and whether important buyer questions are addressed before sales.",
  },
  {
    title: "Demo or contact page",
    text: "Whether buyers have enough confidence, reassurance, and context to take the next step.",
  },
  {
    title: "Proof or case study page",
    text: "Whether evidence appears near the claims it is meant to support and answers the right buyer concerns.",
  },
  {
    title: "Other critical pages",
    text: "Any additional page that influences trust, confidence, or conversion before a sales conversation.",
  },
];

const deliverables = [
  {
    title: "Buyer Hesitation Report",
    text: "A clear diagnostic report showing where qualified buyers may hesitate before engaging with sales.",
  },
  {
    title: "Key Page Review",
    text: "Review of 1, 3, or up to 5 important pages depending on the selected audit format.",
  },
  {
    title: "Buyer Question Map",
    text: "A map of unanswered questions that may be creating uncertainty or slowing down buyer decisions.",
  },
  {
    title: "Proof Placement Review",
    text: "A review of where evidence is missing, weak, or too far from the claims buyers need to trust.",
  },
  {
    title: "Primary Bottleneck Finding",
    text: "A focused diagnosis of the main issue most likely reducing buyer confidence on the reviewed pages.",
  },
  {
    title: "Priority Fix List",
    text: "A short list of recommended improvements to address first, ordered by expected usefulness.",
  },
  {
    title: "Walkthrough Session",
    text: "A 45–60 minute session or async video reviewing the findings and explaining the recommended next steps.",
  },
];

const process = [
  {
    step: "01",
    title: "Select the pages",
    text: "We define the 1, 3, or up to 5 key pages that matter most to buyer confidence before sales engagement.",
  },
  {
    step: "02",
    title: "Review buyer hesitation points",
    text: "We identify places where uncertainty, unclear messaging, weak reassurance, or missing proof may slow buyers down.",
  },
  {
    step: "03",
    title: "Analyze proof and positioning",
    text: "We assess whether important claims are supported by the right evidence in the right place.",
  },
  {
    step: "04",
    title: "Prioritize fixes",
    text: "We separate quick clarity improvements from deeper issues that may require a broader diagnostic or architecture engagement.",
  },
  {
    step: "05",
    title: "Walk through the findings",
    text: "You receive a clear explanation of what is creating hesitation and what should be addressed first.",
  },
];

const audiences = [
  {
    title: "Founders",
    text: "For teams preparing for growth, repositioning, or stronger pre-sales confidence.",
  },
  {
    title: "Marketing Leaders",
    text: "For teams trying to improve website effectiveness, positioning clarity, and buyer confidence.",
  },
  {
    title: "Product Marketing",
    text: "For teams that need sharper messaging, better proof placement, and clearer buyer-risk coverage.",
  },
  {
    title: "Growth Teams",
    text: "For teams looking to improve conversion without guessing where the friction is coming from.",
  },
];

const situations = [
  "Traffic exists, but demo requests remain inconsistent.",
  "The product is strong, but the website does not feel clear or convincing enough.",
  "Sales repeatedly answers questions that the website should help address earlier.",
  "Proof exists, but it is not placed where buyers need it most.",
  "A redesign is being considered, but the team wants clarity before investing.",
  "The company wants a focused external perspective before larger website, positioning, or content decisions.",
];

const exclusions = [
  "Full website redesign",
  "Technical SEO audit",
  "Legal or regulatory review",
  "Compliance certification",
  "Content production",
  "Implementation services",
  "Generic CRO checklist",
  "Advertising campaign management",
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E2D5] bg-[#FAF8F5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="space-y-1">
          <div className="font-serif text-2xl tracking-tight text-[#2A2925]">
            Archoric
          </div>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#6F675D]">
            Marketing & Product Positioning
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] text-[#6F675D] lg:flex">
          <Link href="/services" className="text-[#2A2925]">
            Services
          </Link>
          <Link href="/who-we-help" className="hover:text-[#2A2925]">
            Who We Help
          </Link>
          <Link href="/library" className="hover:text-[#2A2925]">
            Library
          </Link>
          <Link href="/about" className="hover:text-[#2A2925]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#2A2925]">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden bg-[#2A2925] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#B55A47] lg:inline-flex"
        >
          Discuss Your Website
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#4A423A] bg-[#3A342F] text-[#F7F1EA]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="font-serif text-3xl">Archoric</div>
            <p className="max-w-md text-[16px] leading-relaxed text-[#D8CEC2]">
              Helping SaaS vendors improve marketing, product positioning,
              website strategy, and buyer confidence in complex buying
              environments.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#D9A08D]">
              Company
            </h4>
            <Link href="/services" className="block text-[15px] text-[#D8CEC2] hover:text-white">
              Services
            </Link>
            <Link href="/who-we-help" className="block text-[15px] text-[#D8CEC2] hover:text-white">
              Who We Help
            </Link>
            <Link href="/library" className="block text-[15px] text-[#D8CEC2] hover:text-white">
              Library
            </Link>
          </div>

          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#D9A08D]">
              Contact
            </h4>
            <Link href="/about" className="block text-[15px] text-[#D8CEC2] hover:text-white">
              About
            </Link>
            <Link href="/contact" className="block text-[15px] text-[#D8CEC2] hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-[14px] text-[#BFB4A8]">
          © 2026 Archoric. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function BuyerHesitationAuditPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <Header />

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="space-y-8 lg:col-span-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B55A47] transition-colors hover:text-[#2A2925]"
            >
              <span>&larr;</span>
              <span>All Services</span>
            </Link>

            <div className="space-y-5">
              <span className="block text-[12px] font-bold uppercase tracking-[0.22em] text-[#6F675D]">
                Entry Diagnostic
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#2A2925] sm:text-6xl lg:text-7xl">
                Buyer Hesitation Audit
              </h1>

              <p className="max-w-4xl font-serif text-2xl font-light italic leading-snug text-[#B55A47] sm:text-3xl">
                Identify where qualified buyers hesitate before engaging with sales.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-7 shadow-sm">
              <p className="text-[18px] leading-relaxed text-[#6F675D]">
                A focused diagnostic for SaaS teams that want to understand where up to five key website pages may be creating uncertainty, missing proof, or reducing buyer confidence.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Problem
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Your website can explain the product and still create buyer hesitation.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px] md:col-span-8">
            <p>
              Many SaaS companies invest in their product, marketing, and website. Yet qualified buyers often leave with unanswered questions before contacting sales.
            </p>
            <p>
              The issue is not always traffic or awareness. It is often confidence: unclear positioning, weak proof placement, implementation concerns, adoption concerns, or buyer questions that remain unresolved.
            </p>
            <div className="border-l-4 border-[#B55A47] bg-[#FAF8F5] p-7">
              <p className="font-serif text-2xl italic leading-relaxed text-[#2A2925] sm:text-3xl">
                “The buyer may understand what you do, but still not feel ready to take the next step.”
              </p>
            </div>
            <p>
              The Buyer Hesitation Audit identifies the friction points that may be slowing down buyer confidence on your most important website pages.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Audit Formats
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Three focused ways to review buyer hesitation.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px]">
              The audit can start with one important page or expand across up to five key pages depending on how much of the buyer journey needs review.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingOptions.map((option) => (
              <article key={option.name} className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-7">
                <div className="space-y-2">
                  <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    {option.scope}
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-[#2A2925]">
                    {option.name}
                  </h3>
                  <p className="text-xl font-semibold text-[#2A2925]">
                    {option.price}
                  </p>
                </div>

                <p className="text-[16.5px] leading-relaxed text-[#6F675D]">
                  {option.bestFor}
                </p>

                <div className="space-y-3 border-t border-[#E8E2D5] pt-5">
                  {option.includes.map((item) => (
                    <div key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-[#6F675D]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B55A47]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What the Audit Reviews
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Focused review of key decision pages.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px]">
              Rather than reviewing an entire website, the audit focuses on the pages most likely to influence confidence before a buyer engages with sales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewedPages.map((page) => (
              <article key={page.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {page.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#6F675D]">
                  {page.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What You Receive
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Clear findings. Actionable priorities.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px]">
              The audit turns buyer uncertainty into a structured set of observations, deliverables, and practical next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <article key={item.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-white p-7">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  Deliverable 0{index + 1}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {item.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#6F675D]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              How It Works
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A focused process for finding buyer hesitation.
            </h2>
          </div>

          <div className="space-y-4">
            {process.map((item) => (
              <article key={item.step} className="grid grid-cols-1 gap-6 rounded-sm border border-[#E8E2D5] bg-white p-7 md:grid-cols-12">
                <div className="md:col-span-2">
                  <span className="font-serif text-4xl font-light text-[#B55A47]">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-3 md:col-span-10">
                  <h3 className="font-serif text-2xl font-normal text-[#2A2925] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-[#6F675D]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Who This Is For
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Designed for teams seeking clarity before larger investments.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <article key={audience.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {audience.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#6F675D]">
                  {audience.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Typical Situations
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Common reasons companies request this audit.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {situations.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#6F675D]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-7 rounded-sm border border-[#E8E2D5] bg-white p-10 text-center sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
            Understand where buyers may be hesitating.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px]">
            If you are unsure whether your website is creating confidence or creating doubt, a focused review can provide clarity before larger investments are made.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
          >
            Discuss Your Website
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
