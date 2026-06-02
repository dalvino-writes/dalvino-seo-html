import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Engagement",
  description:
    "A strategic engagement designed to improve buyer confidence across the entire website through trust architecture, positioning, proof placement, and decision-support content.",
};

const coverageAreas = [
  {
    title: "Website strategy",
    text: "Clarifies what the website needs to communicate, prioritize, and support before buyers engage with sales.",
  },
  {
    title: "Content strategy",
    text: "Defines which content assets should exist, what they should answer, and how they should support buyer confidence.",
  },
  {
    title: "Product positioning",
    text: "Translates the product’s value into clearer buyer-facing messages, page priorities, and proof requirements.",
  },
  {
    title: "Buyer journey structure",
    text: "Maps how visitors should move from first touch to confidence, proof, and sales engagement.",
  },
  {
    title: "Proof placement",
    text: "Shows where evidence should appear so that claims are supported at the moment buyers need reassurance.",
  },
  {
    title: "Priority planning",
    text: "Turns broad website and content questions into a practical sequence of actions your team can discuss and execute.",
  },
];

const deliverables = [
  {
    title: "Website & Content Architecture Blueprint",
    text: "The master strategy document explaining the recommended website, content, proof, and positioning structure.",
  },
  {
    title: "Page Architecture Plan",
    text: "A page-by-page plan showing which pages should exist, which pages should be revised, and what each page needs to accomplish.",
  },
  {
    title: "Buyer Journey Map",
    text: "A map of how different visitors should move from interest to confidence to sales engagement.",
  },
  {
    title: "Content Priority Matrix",
    text: "A prioritized list of content assets to create, update, consolidate, or remove.",
  },
  {
    title: "Proof Asset Plan",
    text: "A plan showing what proof is needed, where it should appear, and which buyer questions it should support.",
  },
  {
    title: "Content & Page Connection Plan",
    text: "A practical map of how pages, articles, proof assets, and service pages should connect across the website.",
  },
  {
    title: "90-Day Execution Roadmap",
    text: "A phased plan showing what to address first, second, and third after the strategy is complete.",
  },
  {
    title: "Executive Handoff Deck",
    text: "A concise presentation version of the strategy designed to help internal stakeholders align around the plan.",
  },
];

const process = [
  {
    step: "01",
    title: "Review diagnostic findings",
    text: "We start from what has already been learned about buyer hesitation, trust gaps, proof gaps, and positioning issues.",
  },
  {
    step: "02",
    title: "Identify strategic opportunities",
    text: "We clarify which website, content, and proof improvements are most likely to support buyer confidence.",
  },
  {
    step: "03",
    title: "Design the architecture",
    text: "We map recommended pages, content assets, proof placement, and buyer journey pathways.",
  },
  {
    step: "04",
    title: "Prioritize the plan",
    text: "We separate urgent improvements from larger strategic initiatives so the roadmap feels usable.",
  },
  {
    step: "05",
    title: "Build the blueprint",
    text: "We package the recommendations into a clear strategic blueprint your team can review and execute from.",
  },
  {
    step: "06",
    title: "Executive handoff",
    text: "We walk through the strategy, priorities, and recommended next steps with the people responsible for execution.",
  },
];

const audiences = [
  {
    title: "Founders",
    text: "For leaders preparing for repositioning, growth, or a more credible website strategy.",
  },
  {
    title: "VP Marketing",
    text: "For marketing leaders planning website, content, positioning, or sales-readiness improvements.",
  },
  {
    title: "Product Marketing",
    text: "For teams that need clearer positioning, stronger proof, and a better buyer journey structure.",
  },
  {
    title: "Revenue Teams",
    text: "For teams that need the website to support sales conversations more effectively.",
  },
];

const situations = [
  "You are planning a website redesign and need strategic clarity before execution.",
  "You are repositioning the company and need the website to reflect the new direction.",
  "You are investing in content but need a clearer content and page architecture first.",
  "You want stronger alignment between positioning, proof, content, and conversion.",
  "You need clarity before hiring designers, writers, agencies, or internal execution resources.",
  "You have diagnostic findings but need to turn them into a practical plan.",
];

const leaveWith = [
  "A clearer website structure",
  "A prioritized content plan",
  "A proof placement strategy",
  "A buyer journey map",
  "A 90-day execution roadmap",
  "A strategic blueprint your team can implement from",
];

export default function ArchitectureEngagementPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
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
              <span className="block text-[12px] font-bold uppercase tracking-[0.22em] text-[#706E69]">
                Strategic Architecture
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#2A2925] sm:text-6xl lg:text-7xl">
                Architecture Engagement
              </h1>

              <p className="max-w-4xl font-serif text-2xl font-light italic leading-snug text-[#B55A47] sm:text-3xl">
                A strategic blueprint for your website, content, proof, and positioning system.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-7 shadow-sm">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                The Architecture Engagement turns diagnostic findings into a clear plan for what should be improved, created, rewritten, connected, and prioritized before larger investments are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Challenge
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              The challenge is often not effort. It is direction.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] sm:text-[19px] md:col-span-8">
            <p>
              Many SaaS teams know their website, content, proof, or positioning needs to improve. But they do not always know what should change first.
            </p>
            <p>
              Should the team rewrite core pages, create more proof, change the buyer journey, reorganize content, reposition the offer, or rebuild the website entirely?
            </p>
            <div className="border-l-4 border-[#B55A47] bg-[#FAF8F5] p-7">
              <p className="font-serif text-2xl italic leading-relaxed text-[#2A2925] sm:text-3xl">
                “Before execution, the team needs a clear plan for what the website must prove, explain, and connect.”
              </p>
            </div>
            <p>
              The Architecture Engagement creates that plan so larger investments are guided by a clear strategic structure.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What the Engagement Covers
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              The planning layer between diagnosis and execution.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              This engagement clarifies the website, content, proof, and positioning decisions that shape buyer confidence before teams move into execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverageAreas.map((area) => (
              <article key={area.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">{area.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What You Receive
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Concrete planning assets your team can use.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              The deliverables are designed to help your team understand what to build, change, prioritize, and connect across the website and content system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, index) => (
              <article key={item.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  Deliverable {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">{item.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">{item.text}</p>
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
              A strategy process designed for decision clarity.
            </h2>
          </div>

          <div className="space-y-4">
            {process.map((item) => (
              <article key={item.step} className="grid grid-cols-1 gap-6 rounded-sm border border-[#E8E2D5] bg-white p-7 md:grid-cols-12">
                <div className="md:col-span-2">
                  <span className="font-serif text-4xl font-light text-[#B55A47]">{item.step}</span>
                </div>
                <div className="space-y-3 md:col-span-10">
                  <h3 className="font-serif text-2xl font-normal text-[#2A2925] sm:text-3xl">{item.title}</h3>
                  <p className="text-[17px] leading-relaxed text-[#706E69]">{item.text}</p>
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
              For teams preparing to invest in website, content, or positioning execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">{item.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">{item.text}</p>
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
              When this engagement fits.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {situations.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What You Leave With
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A plan your team can actually discuss, sequence, and execute.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leaveWith.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-5 text-[17px] font-medium leading-relaxed text-[#2A2925]">
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
            Create a clearer plan before investing in execution.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
            If your team is preparing a redesign, repositioning effort, content investment, or website strategy project, the Architecture Engagement can help clarify what should happen first.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
            >
              Discuss Your Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
