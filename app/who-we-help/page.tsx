import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Explore the types of SaaS companies Archoric works with, including organizations operating in complex buying environments where trust, proof, and buyer confidence influence decisions.",
};

const sharedConditions = [
  {
    title: "Longer buying cycles",
    text: "Buyers need time, internal alignment, and enough confidence before they move forward.",
  },
  {
    title: "Multiple stakeholders",
    text: "Marketing, operations, product, finance, security, and leadership may all influence the decision.",
  },
  {
    title: "Higher perceived risk",
    text: "The product affects workflows, teams, implementation, operations, or strategic performance.",
  },
  {
    title: "Greater proof requirements",
    text: "Buyers need evidence, reassurance, and clear positioning before they speak with sales.",
  },
];

const markets = [
  {
    label: "Primary market",
    title: "Healthcare SaaS",
    href: "/who-we-help/healthcare",
    text: "For SaaS vendors selling into clinical, care, administrative, or healthcare operations environments where credibility, workflow fit, and buyer confidence matter before sales engagement.",
    points: [
      "Clinical or operational credibility",
      "Implementation reassurance",
      "Proof and validation requirements",
      "Longer evaluation cycles",
    ],
    cta: "Explore Healthcare SaaS",
  },
  {
    label: "Adjacent market",
    title: "Construction SaaS",
    href: "/who-we-help/construction",
    text: "For SaaS vendors selling into field, project, contractor, or operational construction environments where adoption, disruption, and reliability shape buying decisions.",
    points: [
      "Field adoption concerns",
      "Operational disruption risk",
      "Multi-stakeholder decisions",
      "Proof from similar environments",
    ],
    cta: "Explore Construction SaaS",
  },
  {
    label: "Selective fit",
    title: "Other High-Consideration SaaS Markets",
    href: "/contact",
    text: "For SaaS companies in other complex buying environments where buyers need confidence before they commit, even if the market is not healthcare or construction.",
    points: [
      "Complex buying decisions",
      "High-value contracts",
      "Operational or strategic consequences",
      "Need for stronger buyer reassurance",
    ],
    cta: "Discuss Fit",
  },
];

const notFor = [
  "Very early-stage projects with no market validation",
  "Low-cost self-serve products with simple buying decisions",
  "Teams looking only for content production or tactical execution",
  "Companies seeking high-volume lead generation without addressing positioning or buyer confidence",
];

const situations = [
  "Buyers understand the product but still hesitate before booking a demo.",
  "The website explains features but does not create enough confidence.",
  "Sales repeatedly answers questions the website should help address.",
  "The company is preparing a redesign, repositioning, or content investment.",
  "Proof exists, but buyers may not see it at the moment they need it.",
  "The team needs clarity before making larger marketing or website decisions.",
];

export default function WhoWeHelpPage() {
  return (
    <>
      <header className="border-b border-[#E8E2D5] bg-[#FAF8F5]/95 px-6 py-5 backdrop-blur lg:px-12">
              <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="space-y-1">
                  <div className="font-serif text-2xl font-normal tracking-tight text-[#2A2925]">
                    Archoric
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-[#706E69]">
                    Marketing & Product Positioning
                  </div>
                </Link>
      
                <nav className="hidden items-center gap-8 text-[15px] text-[#706E69] lg:flex">
                  <Link href="/services" className="transition-colors hover:text-[#2A2925]">
                    Services
                  </Link>
                  <Link href="/who-we-help" className="transition-colors hover:text-[#2A2925]">
                    Who We Help
                  </Link>
                  <Link href="/library" className="transition-colors hover:text-[#2A2925]">
                    Library
                  </Link>
                  <Link href="/about" className="text-[#2A2925]">
                    About
                  </Link>
                  <Link href="/contact" className="transition-colors hover:text-[#2A2925]">
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

      <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <section className="border-b border-[#E8E2D5] px-6 py-24 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-7">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                Who We Help
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#2A2925] sm:text-6xl lg:text-7xl">
                SaaS companies whose buyers need confidence before they move forward.
              </h1>

              <p className="max-w-3xl text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
                Archoric works best with SaaS vendors in markets where trust, proof,
                credibility, implementation concerns, and operational understanding
                influence buying decisions.
              </p>
            </div>

            <div className="rounded-sm border border-[#E8E2D5] bg-white p-7 shadow-sm">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                The industries may differ, but the buying conditions are often similar:
                buyers need reassurance before they commit budget, time, and internal
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Shared Pattern
            </span>

            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Archoric is not defined by one industry. It is defined by buying conditions.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] md:col-span-8 sm:text-[19px]">
            <p>
              Some SaaS products are easy to buy. The perceived risk is low, the
              decision is simple, and the buyer can move quickly.
            </p>
            <p>
              Other SaaS products affect workflows, teams, implementation, operations,
              compliance-related concerns, or strategic performance. In those markets,
              buyers need more than information. They need confidence.
            </p>
            <p>
              Archoric is designed for those higher-consideration buying environments.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What These Markets Have In Common
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              The best fit is not just about sector. It is about buyer complexity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sharedConditions.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {item.text}
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
              Current Focus Areas
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Markets where buyer confidence is part of the sale.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              These pages are gateways. They explain how buyer hesitation, proof,
              positioning, and website credibility show up in specific markets.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {markets.map((market) => (
              <article key={market.title} className="flex flex-col rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  {market.label}
                </span>

                <h3 className="mt-5 font-serif text-3xl font-normal text-[#2A2925]">
                  {market.title}
                </h3>

                <p className="mt-5 text-[17px] leading-relaxed text-[#706E69]">
                  {market.text}
                </p>

                <ul className="mt-7 space-y-3">
                  {market.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15.5px] leading-relaxed text-[#706E69]">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#B55A47]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Link
                    href={market.href}
                    className="inline-flex border border-[#B55A47] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#B55A47] transition-colors hover:bg-[#B55A47] hover:text-white"
                  >
                    {market.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
  <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
    <div className="space-y-5 md:col-span-4">
      <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
        Where Archoric Creates the Most Value
      </span>
      <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
        Archoric is most useful when the buying decision is complex.
      </h2>
    </div>

    <div className="space-y-4 md:col-span-8">
      <p className="text-[18px] leading-relaxed text-[#706E69]">
        It is usually less useful for:
      </p>

      {notFor.map((item) => (
        <div
          key={item}
          className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Typical Situations
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              When teams usually reach this problem.
            </h2>
          </div>

          <div className="grid gap-4 md:col-span-8">
            {situations.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-5 text-[17px] leading-relaxed text-[#706E69]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-sm border border-[#E8E2D5] bg-white p-10 text-center sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>

          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight sm:text-5xl">
            Not sure whether Archoric fits your market?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
            If your buyers need more confidence before they engage with sales, the
            underlying problem may be similar even if your industry is different.
          </p>

          <div className="mt-8">
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

      <footer className="bg-[#3A342F] px-6 py-14 text-[#F7F1EA] lg:px-12">
              <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 md:grid-cols-4">
                  <div className="space-y-4 md:col-span-2">
                    <div className="font-serif text-3xl">Archoric</div>
                    <p className="max-w-md text-[16px] leading-relaxed text-[#D8CEC2]">
                      Helping SaaS vendors improve marketing, product positioning, website strategy, and buyer confidence in complex buying environments.
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
    </>
  );
}
    