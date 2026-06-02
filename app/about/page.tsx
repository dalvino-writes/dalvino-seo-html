import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Archoric, the thinking behind the company, and the approach used to help SaaS companies improve trust, proof, positioning, and buyer confidence.",
};

const beliefs = [
  {
    title: "Buyers evaluate risk before value.",
    text: "In complex SaaS markets, buyers often need to feel confident before they can fully evaluate the value of a product.",
  },
  {
    title: "Proof should appear where uncertainty appears.",
    text: "Evidence is strongest when it sits close to the claim, concern, or decision point it is meant to support.",
  },
  {
    title: "Positioning should reduce confusion.",
    text: "Clear positioning helps buyers understand who the product is for, why it matters, and why it deserves attention.",
  },
  {
    title: "Trust is built across the journey.",
    text: "Confidence is not created by one page. It is built through the relationship between messaging, proof, structure, and buyer context.",
  },
  {
    title: "Website strategy should support sales readiness.",
    text: "A website should help buyers answer important questions before they speak with sales.",
  },
  {
    title: "Complex buying decisions need more than content volume.",
    text: "More pages do not automatically create confidence. The right information needs to appear in the right place.",
  },
];

const studyAreas = [
  "Buyer hesitation",
  "Product positioning",
  "Proof placement",
  "Website credibility",
  "Sales readiness",
  "Buyer journey structure",
  "Trust signals",
  "Content architecture",
];

const notAgency = [
  "Traditional SEO agency",
  "Content production shop",
  "Generic web design agency",
  "Lead-generation vendor",
];

const fitSignals = [
  "SaaS companies with longer buying cycles",
  "Teams preparing a website redesign or repositioning effort",
  "Companies whose buyers need stronger proof before moving forward",
  "Marketing, product marketing, and revenue teams seeking strategic clarity",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
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

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-5xl space-y-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            About Archoric
          </span>

          <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl">
            Built around one question: why do qualified buyers hesitate?
          </h1>

          <p className="mx-auto max-w-3xl text-[19px] leading-relaxed text-[#706E69]">
            Archoric helps SaaS teams understand how trust, proof, positioning, and website structure influence buyer confidence before sales conversations begin.
          </p>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Observation
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              More traffic does not always create more confidence.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] md:col-span-8">
            <p>
              Many SaaS companies invest in marketing, content, SEO, websites, and product messaging. Yet qualified buyers may still hesitate before taking the next step.
            </p>
            <p>
              The issue is often not a lack of information. It is that the website does not fully resolve the questions, doubts, proof requirements, or internal justification needs that appear during a complex buying decision.
            </p>
            <p>
              Archoric was created to study that gap and help teams understand where buyer confidence is strengthened or weakened across the website and buying journey.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
          <div className="space-y-6 md:col-span-4">
            <div className="overflow-hidden rounded-sm border border-[#E8E2D5] bg-white p-4">
              <Image
                src="/images/Dalvino-Archoric.jpg"
                alt="Dalvino Luce, Founder and Lead Consultant at Archoric"
                width={900}
                height={900}
                className="aspect-square w-full rounded-sm object-cover"
                priority={false}
              />
            </div>
            <div>
              <p className="font-serif text-2xl font-normal text-[#2A2925]">
                Dalvino Luce
              </p>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                Founder & Lead Consultant, Archoric
              </p>
            </div>
          </div>

          <div className="space-y-6 md:col-span-8">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              The Question Behind Archoric
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Built from a question I could not ignore.
            </h2>

            <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69]">
              <p>
                Archoric began when I started questioning the way SaaS companies were being told to grow: publish more, use more automation, create more content, and keep filling the funnel.
              </p>
              <p>
                The more I studied that playbook, the more one question kept coming back: does this actually help a cautious buyer make a confident decision?
              </p>
              <p>
                That question became the foundation of Archoric. The company was built around the idea that visibility alone is not enough in complex buying environments. Buyers need structure, proof, context, and confidence before they move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="space-y-5 md:col-span-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                How Archoric Thinks
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                Buyer confidence is not accidental.
              </h2>
            </div>

            <div className="space-y-6 md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                Archoric studies the relationship between buyer behavior, product positioning, proof, website structure, and sales readiness. The goal is to help SaaS teams see where their website may be supporting confidence — and where it may be creating hesitation.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {studyAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-sm border border-[#E8E2D5] bg-white p-4 text-[16.5px] text-[#706E69]"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What Archoric Believes
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              The principles behind the work.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief) => (
              <article
                key={belief.title}
                className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7"
              >
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {belief.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {belief.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What Archoric Is Not
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Not every marketing problem is a trust problem.
            </h2>
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Archoric is not positioned as a broad execution agency. The work is focused on the strategic relationship between positioning, proof, credibility, buyer confidence, and website structure.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {notAgency.map((item) => (
                <div
                  key={item}
                  className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Who Archoric Works Best With
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              SaaS teams facing complex buying decisions.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {fitSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-5 text-[17px] leading-relaxed text-[#706E69]"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-4xl space-y-7 rounded-sm border border-[#E8E2D5] bg-white p-10 sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
            If buyer confidence is part of the problem, the conversation can start there.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#706E69]">
            You do not need a fully defined project brief. If you suspect your website, positioning, or proof is creating hesitation, Archoric can help you examine the problem.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
          >
            Discuss Your Website
          </Link>
        </div>
      </section>

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
    </main>
  );
}
