import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Archoric's diagnostic and strategic services for improving buyer confidence, website strategy, proof, and product positioning in complex SaaS markets.",
};

const services = [
  {
    number: "01",
    title: "Buyer Hesitation Audit",
    role: "Entry diagnostic",
    price: "Starting at €500",
    summary:
      "A focused diagnostic of key website pages to identify where qualified buyers may hesitate before booking a demo or engaging with sales.",
    href: "/services/buyer-hesitation-audit",
    deliverables: [
      "Buyer Hesitation Report",
      "Key Page Review",
      "Buyer Question Map",
      "Proof Placement Review",
      "Priority Fix List",
    ],
  },
  {
    number: "02",
    title: "Trust Deficit Audit",
    role: "Core diagnostic",
    price: "Starting at €3,000",
    summary:
      "A deeper review of trust, proof, positioning, credibility, and buyer-risk gaps across the website and buyer journey.",
    href: "/services/trust-deficit-audit",
    deliverables: [
      "Trust Deficit Report",
      "20-Point Credibility & Trust Review",
      "Buyer-Risk Map",
      "Proof & Evidence Review",
      "Priority Roadmap",
    ],
  },
  {
    number: "03",
    title: "Architecture Engagement",
    role: "Strategic architecture",
    price: "Starting at €8,000",
    summary:
      "A strategic website, content, proof, and positioning blueprint showing what to improve, create, rewrite, connect, and prioritize.",
    href: "/services/architecture-engagement",
    deliverables: [
      "Strategic Architecture Blueprint",
      "Page Architecture Plan",
      "Buyer Journey Map",
      "Content Priority Matrix",
      "90-Day Execution Roadmap",
    ],
  },
];

const fitScenarios = [
  {
    situation: "You need fast clarity on up to 5 important website pages.",
    service: "Buyer Hesitation Audit",
    detail: "Best when you want a focused review before making larger website decisions.",
  },
  {
    situation: "You suspect the problem is wider than one page.",
    service: "Trust Deficit Audit",
    detail: "Best when trust, proof, positioning, and credibility gaps may exist across the buyer journey on your website.",
  },
  {
    situation: "You need a strategic plan before execution.",
    service: "Architecture Engagement",
    detail: "Best when you are planning a redesign, repositioning, content strategy, or sales-readiness initiative.",
  },
];

const commonDeliverables = [
  "Diagnostic reports",
  "Buyer-risk observations",
  "Proof-placement reviews",
  "Positioning recommendations",
  "Website and content priorities",
  "Strategic roadmaps",
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <Header />

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-7">
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.24em] text-[#B55A47]">
            Services
          </span>

          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-[#2A2925] sm:text-6xl">
            Strategic diagnostics for buyer confidence, positioning, and website clarity.
          </h1>

          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px]">
            Archoric helps SaaS vendors understand where their website, proof,
            positioning, and content structure may be creating buyer hesitation
            before sales conversations begin.
          </p>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Common Problem
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Buyers can understand the product and still hesitate.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#6F675D] sm:text-[19px] md:col-span-8">
            <p>
              Many SaaS companies have strong products, active marketing, and
              clear feature pages. But when the product affects important
              workflows, buyer decisions require more than information.
            </p>
            <p>
              Buyers look for confidence: proof that the vendor understands
              their context, reassurance that implementation will be manageable,
              and clarity that the product can support real operational needs.
            </p>
            <p>
              When those confidence signals are weak, buyers often delay,
              compare alternatives, or leave without engaging with sales.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              How Archoric Engages
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              A focused service ladder, not an open-ended retainer.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#6F675D]">
              Each engagement is designed to create a specific level of clarity:
              from page-level buyer hesitation, to deeper trust diagnosis, to a
              strategic website and content architecture plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col border border-[#E8E2D5] bg-white p-7 shadow-sm"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <span className="font-serif text-5xl font-light text-[#D8CEC2]">
                    {service.number}
                  </span>
                  <span className="text-right text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    {service.role}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-normal leading-tight text-[#2A2925]">
                  {service.title}
                </h3>

                <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#B55A47]">
                  {service.price}
                </p>

                <p className="mt-5 text-[17px] leading-relaxed text-[#6F675D]">
                  {service.summary}
                </p>

                <div className="mt-7 space-y-3">
                  {service.deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="border-t border-[#E8E2D5] pt-3 text-[15.5px] text-[#4D4841]"
                    >
                      {deliverable}
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex text-[12px] font-bold uppercase tracking-widest text-[#2A2925] transition-colors hover:text-[#B55A47]"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Which Service Fits
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Choose based on the decision you need to make.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {fitScenarios.map((item) => (
              <article
                key={item.situation}
                className="grid grid-cols-1 gap-6 border border-[#E8E2D5] bg-[#FAF8F5] p-7 md:grid-cols-12"
              >
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                    {item.situation}
                  </h3>
                </div>
                <div className="space-y-2 md:col-span-7">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    {item.service}
                  </p>
                  <p className="text-[17px] leading-relaxed text-[#6F675D]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What You Receive
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Concrete assets your team can review, discuss, and act on.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#6F675D]">
              The exact scope depends on the engagement, but the work is always
              designed to produce structured findings and practical next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:col-span-7 sm:grid-cols-2">
            {commonDeliverables.map((item) => (
              <div
                key={item}
                className="border border-[#DED6CA] bg-white p-5 text-[16.5px] text-[#4D4841]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-5xl border border-[#E8E2D5] bg-white p-10 text-center sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
            Not sure which engagement fits?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-[#6F675D]">
            You do not need to know which service you need before reaching out.
            A first conversation can clarify whether the issue is page-level
            hesitation, a deeper trust deficit, or a broader architecture
            challenge.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
          >
            Discuss Your Website
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
