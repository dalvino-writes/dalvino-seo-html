import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Confidence Strategy for Complex SaaS",
  description:
    "Archoric helps SaaS companies improve website strategy, product positioning, proof, and buyer confidence in complex buying environments.",
};

const services = [
  {
    title: "Buyer Hesitation Audit",
    role: "Entry diagnostic",
    price: "Starting at €500",
    description:
      "A focused review of key website pages to identify where qualified buyers may hesitate before engaging with sales.",
    href: "/services/buyer-hesitation-audit",
  },
  {
    title: "Trust Deficit Audit",
    role: "Core diagnostic",
    price: "Starting at €3,000",
    description:
      "A deeper diagnostic of trust, proof, positioning, credibility, and buyer-risk gaps across the website and buyer journey.",
    href: "/services/trust-deficit-audit",
  },
  {
    title: "Architecture Engagement",
    role: "Strategic architecture",
    price: "Starting at €8,000",
    description:
      "A strategic website, content, proof, and positioning blueprint showing what to improve, create, rewrite, connect, and prioritize.",
    href: "/services/architecture-engagement",
  },
];

const problems = [
  {
    title: "Buyer hesitation",
    text: "Qualified visitors understand the product but still do not feel confident enough to take the next step.",
  },
  {
    title: "Weak proof placement",
    text: "Evidence exists, but it is too far from the claims, objections, or decisions it needs to support.",
  },
  {
    title: "Positioning friction",
    text: "The product may be valuable, but the website does not make the value clear enough for the right buyer.",
  },
  {
    title: "Sales-readiness gaps",
    text: "Sales keeps answering questions the website should already help prepare, reduce, or resolve.",
  },
  {
    title: "Trust gaps",
    text: "Credibility signals, implementation reassurance, and validation are not strong enough across the buyer journey.",
  },
  {
    title: "Unclear website structure",
    text: "Important pages, proof assets, and content paths do not guide buyers toward confidence in a coherent way.",
  },
];

const markets = [
  {
    title: "Healthcare SaaS",
    text: "For SaaS vendors selling into clinical, operational, or care environments where trust, validation, adoption, and implementation confidence matter.",
    href: "/who-we-help/healthcare",
  },
  {
    title: "Construction SaaS",
    text: "For SaaS vendors selling into field, project, and operational environments where buyers evaluate adoption, workflow impact, and rollout risk.",
    href: "/who-we-help/construction",
  },
  {
    title: "Other complex buying environments",
    text: "For SaaS companies whose buyers face longer sales cycles, internal approvals, implementation concerns, and higher proof requirements.",
    href: "/who-we-help",
  },
];

const principles = [
  "Buyers evaluate risk before value.",
  "Proof matters most when uncertainty is highest.",
  "Positioning should reduce confusion, not create more terminology.",
  "Trust is built systematically across the buyer journey.",
  "A website should help sales by answering confidence questions before the call.",
];

const libraryItems = [
  {
    type: "Archoric Analysis",
    title: "Why buyers hesitate even when they like the product",
    text: "A look at the difference between product understanding and buyer confidence.",
  },
  {
    type: "Diagnostic Finding",
    title: "When proof is present but invisible",
    text: "Why evidence often fails when it is disconnected from the claims buyers care about.",
  },
  {
    type: "Field Note",
    title: "The difference between traffic problems and trust problems",
    text: "Why more visibility does not always create more qualified sales conversations.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E2D5]/70 bg-[#FAF8F5]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B55A47]/40 text-[#B55A47]">
            A
          </div>
          <div>
            <div className="font-serif text-2xl leading-none tracking-tight text-[#2A2925]">
              Archoric
            </div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[#706E69]">
              Marketing & Product Positioning
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] text-[#706E69] lg:flex">
          <Link href="/services" className="hover:text-[#2A2925]">
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
    <footer className="border-t border-[#E8E2D5] bg-[#3A342F] text-[#F7F1EA]">
      <div className="mx-auto max-w-7xl px-6 py-14">
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
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <Header />

      <section className="border-b border-[#E8E2D5]/60 bg-[#FAF8F5] px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-5xl space-y-10">
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.25em] text-[#B55A47]">
            Marketing Strategy & Product Positioning
          </span>

          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-light leading-tight tracking-tight text-[#2A2925] sm:text-7xl">
            We help SaaS vendors improve how buyers understand, trust, and act on their positioning.
          </h1>

          <p className="mx-auto max-w-3xl font-serif text-xl font-light leading-relaxed text-[#706E69] sm:text-2xl">
            Archoric works with SaaS vendors in healthcare, construction, and other complex buying environments to identify the trust gaps, proof gaps, and positioning issues that make qualified buyers hesitate before engaging with sales.
          </p>

          <div className="flex justify-center pt-6">
  <Link
    href="/services"
    className="w-full border-2 border-[#E8E2D5] bg-white px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#2A2925] transition-colors hover:border-[#B55A47] sm:w-auto"
  >
    Review Our Services
  </Link>
</div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
              Buyer Hesitation & Sales Readiness
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925]">
              Many buyers do not reject a product because they lack information.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] md:col-span-8">
            <p>
              They hesitate because they lack confidence. Your website may explain the product, list the features, and describe the benefits — while still leaving important buying questions unanswered.
            </p>
            <p>
              In complex SaaS purchases, buyers often need reassurance around implementation, adoption, proof, credibility, internal justification, and operational fit before they are ready to speak with sales.
            </p>
            <blockquote className="border-l-4 border-[#B55A47] py-2 pl-6 font-serif text-2xl italic leading-relaxed text-[#2A2925]">
              “The product may be interesting, but the website does not yet make the buyer feel confident enough to move forward.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
              What We Help Solve
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Website, positioning, and proof problems that slow buyer confidence.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">{item.title}</h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-5 lg:col-span-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
                Services
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
                Three ways to diagnose, understand, and improve buyer confidence.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/services" className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#B55A47] hover:text-[#2A2925]">
                Explore services →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-[340px] flex-col justify-between rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-8 transition-colors hover:border-[#B55A47]"
              >
                <div className="space-y-5">
                  <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    {service.role}
                  </span>
                  <h3 className="font-serif text-3xl font-normal leading-tight text-[#2A2925]">
                    {service.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-[#706E69]">
                    {service.description}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-[#E8E2D5] pt-6">
                  <span className="text-[15px] font-semibold text-[#2A2925]">{service.price}</span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-[#F0EDE6] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
              Who We Help
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Built for SaaS companies where buyers need confidence before they move.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {markets.map((market) => (
              <Link key={market.title} href={market.href} className="rounded-sm border border-[#E8E2D5] bg-white p-8 transition-colors hover:border-[#B55A47]">
                <h3 className="font-serif text-3xl font-normal text-[#2A2925]">{market.title}</h3>
                <p className="mt-5 text-[17px] leading-relaxed text-[#706E69]">{market.text}</p>
                <div className="mt-8 text-[13px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
              How We Think
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Archoric studies the confidence layer behind SaaS buying decisions.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              The work is based on a simple idea: a website should not only explain the product. It should help the buyer feel ready to keep moving.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {principles.map((principle, index) => (
              <div key={principle} className="grid grid-cols-[64px_1fr] gap-5 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-6">
                <span className="font-serif text-3xl font-light text-[#B55A47]">0{index + 1}</span>
                <p className="text-[18px] leading-relaxed text-[#2A2925]">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-5 lg:col-span-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
                Library
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
                Strategic notes on buyer confidence, positioning, proof, and trust.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/library" className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#B55A47] hover:text-[#2A2925]">
                Visit the library →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {libraryItems.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E8E2D5] bg-white p-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">{item.type}</span>
                <h3 className="mt-5 font-serif text-3xl font-normal leading-tight text-[#2A2925]">{item.title}</h3>
                <p className="mt-5 text-[17px] leading-relaxed text-[#706E69]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5]/60 bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-7">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#B55A47]">
              Why Archoric Exists
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#2A2925] sm:text-5xl">
              Many companies invest in traffic, content, SEO, and websites. Buyers still hesitate.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Archoric was built to study that hesitation: where it appears, what causes it, and how website strategy, positioning, proof, and content architecture can reduce it.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link href="/about" className="inline-flex border-2 border-[#E8E2D5] bg-[#FAF8F5] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#2A2925] transition-colors hover:border-[#B55A47]">
              About Archoric
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="font-serif text-4xl font-light leading-tight text-[#2A2925] sm:text-5xl">
            Want to understand where your website may be creating buyer hesitation?
          </h2>
          <p className="mx-auto max-w-xl text-[18px] leading-relaxed text-[#706E69]">
            Let’s determine whether there is a meaningful fit and what kind of review would be most useful.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="inline-flex bg-[#B55A47] px-10 py-5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]">
              Discuss Your Website
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
