import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Deficit Audit",
  description:
    "A structured 20-point evaluation of trust, proof, positioning, credibility, and buyer confidence across your website. Identify the gaps that may be slowing decisions and reducing trust.",
};
const reviewAreas = [
  {
    title: "Homepage & core positioning",
    description:
      "How clearly the website explains who the product is for, what problem it solves, and why buyers should take it seriously.",
  },
  {
    title: "Product & solution pages",
    description:
      "Whether the product narrative builds buyer confidence instead of only listing features or broad benefits.",
  },
  {
    title: "Proof assets",
    description:
      "How testimonials, case studies, logos, examples, and evidence support important claims across the buyer journey.",
  },
  {
    title: "Demo & contact flow",
    description:
      "Whether the path toward sales feels clear, credible, and supported by enough reassurance.",
  },
  {
    title: "Content & authority structure",
    description:
      "Whether content, internal links, and key resources help buyers resolve doubts before engaging with sales.",
  },
  {
    title: "Buyer-risk signals",
    description:
      "Where implementation concerns, adoption concerns, credibility concerns, or internal justification questions remain unanswered.",
  },
];

const deliverables = [
  {
    title: "Trust Deficit Report",
    description:
      "A full diagnostic report reviewing trust, proof, positioning, credibility, and buyer confidence across the website.",
  },
  {
    title: "20-Point Credibility & Trust Checklist",
    description:
      "A structured evaluation of how well the website reduces perceived buyer risk across four credibility layers.",
  },
  {
    title: "Buyer-Risk Map",
    description:
      "A map of the concerns, objections, and confidence gaps that may slow down buyer decisions.",
  },
  {
    title: "Proof & Evidence Review",
    description:
      "A review of testimonials, case studies, trust signals, validation assets, and supporting evidence.",
  },
  {
    title: "Website Trust Profile",
    description:
      "A summary of the dominant trust pattern affecting the website and how it may influence buyer confidence.",
  },
  {
    title: "Priority Roadmap",
    description:
      "A sequenced list of recommended improvements for website, content, proof, and positioning decisions.",
  },
  {
    title: "Executive Walkthrough",
    description:
      "A focused presentation of the findings, implications, and recommended next steps.",
  },
];

const checklistTiers = [
  {
    tier: "Tier 1",
    title: "Market & Compliance Understanding",
    description:
      "Evaluates whether the website demonstrates a clear understanding of the buyer’s environment, constraints, risks, and decision context.",
    points: [
      "Specific buyer context",
      "Risk-aware messaging",
      "Current market or compliance signals",
      "Credible source references",
      "Segment-specific relevance",
    ],
  },
  {
    tier: "Tier 2",
    title: "Operational Confidence",
    description:
      "Evaluates whether buyers see enough evidence that the product can work in real workflows, teams, and implementation conditions.",
    points: [
      "Workflow language",
      "Implementation clarity",
      "Integration clarity",
      "Specialist differentiation",
      "Product-use evidence",
    ],
  },
  {
    tier: "Tier 3",
    title: "Website Journey & Clarity",
    description:
      "Evaluates whether the website guides buyers logically from interest to confidence without confusion or dead ends.",
    points: [
      "Clear page relationships",
      "Scannable structure",
      "Helpful internal links",
      "Easy access to important content",
      "No isolated content paths",
    ],
  },
  {
    tier: "Tier 4",
    title: "Evidence & Transparency",
    description:
      "Evaluates whether buyers see enough proof, attribution, freshness, and validation to trust what is being claimed.",
    points: [
      "Search visibility signals",
      "Content performance signals",
      "Engagement signals",
      "Credible attribution",
      "Visible update or review signals",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Strategic website review",
    description:
      "Review the key pages, content paths, and proof assets that shape buyer confidence before sales conversations.",
  },
  {
    step: "02",
    title: "Trust & proof assessment",
    description:
      "Identify where credibility is strong, where evidence is missing, and where important claims feel under-supported.",
  },
  {
    step: "03",
    title: "Positioning & messaging analysis",
    description:
      "Assess whether the website communicates the product clearly enough for buyers in complex buying environments.",
  },
  {
    step: "04",
    title: "Buyer-risk evaluation",
    description:
      "Map the hesitation points that may slow buyers down, create uncertainty, or increase internal resistance.",
  },
  {
    step: "05",
    title: "Priority roadmap",
    description:
      "Turn the findings into a clear improvement sequence for website, content, proof, and positioning decisions.",
  },
  {
    step: "06",
    title: "Executive walkthrough",
    description:
      "Walk through the audit so the findings are clear, usable, and connected to business priorities.",
  },
];

const audiences = [
  {
    title: "Founders",
    description: "Preparing for growth, repositioning, or stronger buyer confidence.",
  },
  {
    title: "Marketing leaders",
    description:
      "Reviewing website effectiveness, messaging clarity, and sales readiness.",
  },
  {
    title: "Product marketing teams",
    description:
      "Seeking stronger positioning, sharper proof, and clearer buyer-risk messaging.",
  },
  {
    title: "Growth & revenue teams",
    description:
      "Trying to understand why qualified buyers are not progressing as expected.",
  },
];

const situations = [
  "You are preparing a website redesign and need strategic clarity before changing the site.",
  "You are repositioning the company and need to understand where the current message creates friction.",
  "You are investing in content, but the website does not yet feel sales-ready.",
  "You suspect buyers understand the product but still do not feel confident enough to engage.",
  "Sales keeps answering trust, proof, or implementation questions that the website should help address.",
  "You need an external strategic assessment before committing to a larger architecture or content project.",
];

export default function TrustDeficitAuditPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <section className="border-b border-[#E8E2D5] px-6 py-24 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="space-y-8 lg:col-span-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B55A47] transition-colors hover:text-[#2A2925]"
            >
              <span>&larr;</span>
              <span>All services</span>
            </Link>

            <div className="space-y-5">
              <span className="block text-[12px] font-bold uppercase tracking-[0.22em] text-[#706E69]">
                Core Diagnostic
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#2A2925] sm:text-6xl lg:text-7xl">
                Trust Deficit Audit
              </h1>

              <p className="max-w-4xl font-serif text-2xl font-light italic leading-snug text-[#B55A47] sm:text-3xl">
                Diagnose the trust, proof, positioning, and credibility gaps affecting buyer confidence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-6 border border-[#E8E2D5] bg-white p-7 shadow-sm">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                A structured diagnostic for SaaS teams that want to understand where trust, proof, positioning, and credibility gaps may be reducing buyer confidence across their website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Problem
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Buyer hesitation is rarely caused by one weak page.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] sm:text-[19px] md:col-span-8">
            <p>
              Many SaaS companies invest in marketing, content, SEO, website redesigns, and product messaging, yet qualified buyers still hesitate before speaking with sales.
            </p>
            <p>
              The issue is often the wider system: unclear positioning, weak proof placement, fragmented messaging, missing credibility signals, or unanswered buyer-risk questions across multiple touchpoints.
            </p>
            <div className="border-l-4 border-[#B55A47] bg-[#FAF8F5] p-7">
              <p className="font-serif text-2xl italic leading-relaxed text-[#2A2925] sm:text-3xl">
                “The product may be strong, but the website does not yet make the buyer feel confident enough to move forward.”
              </p>
            </div>
            <p>
              The Trust Deficit Audit identifies where that confidence breaks down and what should be improved first.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What the Audit Reviews
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A broader review of the system shaping buyer confidence.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              Unlike the Buyer Hesitation Audit, which focuses on a smaller set of key pages, the Trust Deficit Audit examines the wider website and content system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewAreas.map((area) => (
              <article key={area.title} className="space-y-4 border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {area.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">
                  {area.description}
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
              What You Receive
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A clear diagnostic of where trust breaks down.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              The audit turns scattered website, content, proof, and positioning issues into a structured set of findings and priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <article key={item.title} className="space-y-4 border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  Deliverable {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {item.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              20-Point Checklist
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              What the 20-Point Credibility & Trust Checklist evaluates.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              The checklist reviews how well your website reduces perceived buyer risk across four areas. The criteria adapt to the company’s market and buying environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {checklistTiers.map((tier) => (
              <article key={tier.title} className="border border-[#E8E2D5] bg-white p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    {tier.tier}
                  </span>
                  <span className="text-[13px] font-medium text-[#706E69]">
                    5 criteria
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-normal text-[#2A2925]">
                  {tier.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[16px] leading-relaxed text-[#2A2925]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B55A47]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              How It Works
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A structured diagnostic process
            </h2>
          </div>

          <div className="space-y-4">
            {process.map((item) => (
              <article key={item.step} className="grid grid-cols-1 gap-6 border border-[#E8E2D5] bg-[#FAF8F5] p-7 md:grid-cols-12">
                <div className="md:col-span-2">
                  <span className="font-serif text-4xl font-light text-[#B55A47]">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-3 md:col-span-10">
                  <h3 className="font-serif text-2xl font-normal text-[#2A2925] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-[#706E69]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Who This Is For
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              For teams preparing to make serious website, positioning, or content decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.title} className="space-y-4 border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {item.title}
                </h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Typical Situations
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              When the Trust Deficit Audit fits.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {situations.map((item) => (
              <div key={item} className="border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl border border-[#E8E2D5] bg-white p-10 text-center sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
            Understand where your website may be weakening buyer confidence.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
            If your website, content, or positioning feels unclear before a larger investment, the Trust Deficit Audit can help identify what should be improved first.
          </p>
          <div className="pt-8">
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
