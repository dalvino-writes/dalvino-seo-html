import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare SaaS",
  description:
    "How Archoric helps Healthcare SaaS companies improve buyer confidence, communicate credibility, and support complex purchasing decisions through trust-focused website strategy.",
};

const buyerQuestions = [
  {
    question: "Will our teams actually use this?",
    answer:
      "Healthcare buyers need to see that the product fits real clinical, administrative, or operational workflows rather than adding another layer of friction.",
  },
  {
    question: "How difficult will implementation be?",
    answer:
      "A strong page should reduce uncertainty around onboarding, rollout, training, and the practical effort required to get value.",
  },
  {
    question: "Can we trust this vendor?",
    answer:
      "Buyers look for credible signals that the company understands the environment, the risks, and the seriousness of the decision.",
  },
  {
    question: "Where is the proof?",
    answer:
      "Healthcare teams need evidence that supports important claims, especially when the product affects workflows, operations, or decision-making.",
  },
  {
    question: "Will this disrupt our operations?",
    answer:
      "A website should help buyers understand how the product fits into existing teams, processes, systems, and day-to-day work.",
  },
  {
    question: "Can we justify this internally?",
    answer:
      "The internal champion often needs clear positioning, evidence, and decision support to explain why the product is worth evaluating.",
  },
];

const trustChallenges = [
  {
    title: "Proof exists, but it is too far from the claim",
    text:
      "Evidence is often placed on separate pages, while high-risk claims are made without nearby support. Buyers need proof at the moment doubt appears.",
  },
  {
    title: "Positioning sounds too generic",
    text:
      "Many healthcare SaaS websites use broad software language instead of showing clear understanding of the buyer’s workflow, context, and constraints.",
  },
  {
    title: "Implementation reassurance is weak",
    text:
      "Buyers may understand the product but still hesitate if rollout, adoption, training, or operational fit remain unclear.",
  },
  {
    title: "Credibility signals are fragmented",
    text:
      "Trust-building elements are often scattered across the site instead of being connected into a coherent buyer-confidence journey.",
  },
];

const archoricFocus = [
  {
    title: "Buyer confidence",
    text:
      "Identify where healthcare buyers may still feel uncertain before engaging with sales.",
  },
  {
    title: "Positioning clarity",
    text:
      "Clarify whether the website communicates relevance in language that healthcare buyers recognize.",
  },
  {
    title: "Proof placement",
    text:
      "Review whether claims are supported by the right evidence in the right places.",
  },
  {
    title: "Website strategy",
    text:
      "Evaluate whether the site guides buyers from interest to confidence without confusion or dead ends.",
  },
];

const situations = [
  "You are preparing a healthcare SaaS website redesign.",
  "You are repositioning the product for a more specific healthcare buyer.",
  "Buyers understand the product but still hesitate before speaking with sales.",
  "Sales repeatedly answers the same implementation, adoption, or proof questions.",
  "You have proof, but it is not clearly connected to the claims buyers care about.",
  "You want stronger alignment between positioning, proof, content, and buyer confidence.",
];

const fits = [
  "Healthcare SaaS founders",
  "Marketing leaders",
  "Product marketing teams",
  "Growth and revenue teams",
  "Teams preparing website or positioning changes",
  "Companies selling into complex healthcare buying environments",
];

const lessUseful = [
  "Consumer health apps with simple buying decisions",
  "Very early-stage projects still validating the market",
  "Teams looking only for content production",
  "Companies seeking tactical execution without addressing positioning, proof, or buyer confidence",
];

const relevantServices = [
  {
    title: "Buyer Hesitation Audit",
    href: "/services/buyer-hesitation-audit",
    text:
      "Best when you need fast clarity on where key website pages may be creating hesitation before sales engagement.",
  },
  {
    title: "Trust Deficit Audit",
    href: "/services/trust-deficit-audit",
    text:
      "Best when trust, proof, positioning, and credibility gaps may exist across the buyer journey on your website.",
  },
  {
    title: "Architecture Engagement",
    href: "/services/architecture-engagement",
    text:
      "Best when your team needs a strategic website, content, proof, and positioning plan before larger execution work.",
  },
];

export default function HealthcareSaaSPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl space-y-8">
            <Link
              href="/who-we-help"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B55A47] transition-colors hover:text-[#2A2925]"
            >
              <span>&larr;</span>
              <span>Who We Help</span>
            </Link>

            <div className="space-y-5">
              <span className="block text-[12px] font-bold uppercase tracking-[0.22em] text-[#706E69]">
                Healthcare SaaS
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Healthcare buyers rarely move forward on features alone.
              </h1>

              <p className="max-w-3xl font-serif text-2xl font-light italic leading-snug text-[#B55A47] sm:text-3xl">
                They need confidence that the product fits their environment, supports real workflows, and can be justified internally.
              </p>
            </div>

            <p className="max-w-3xl text-[18px] leading-relaxed text-[#706E69] sm:text-[19px]">
              Archoric helps healthcare SaaS teams identify where their website, positioning, proof, and content may leave buyers with unanswered questions before engaging with sales.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Why Healthcare Buying Is Different
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Healthcare software decisions carry more perceived risk.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] md:col-span-8">
            <p>
              Healthcare buyers are not only evaluating features. They are also evaluating operational fit, adoption, workflow impact, implementation effort, vendor credibility, and whether the decision can be defended internally.
            </p>
            <p>
              A website that explains the product but does not reduce those concerns may still lose qualified buyers before a sales conversation begins.
            </p>
            <p>
              The challenge is not to overwhelm the page with regulatory or technical detail. The challenge is to show, clearly and credibly, that the company understands the buyer’s environment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Common Buyer Questions
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              The questions healthcare buyers try to answer before they reach out.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              If the website does not address these questions clearly, buyers may understand the product and still hesitate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buyerQuestions.map((item) => (
              <article key={item.question} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal leading-snug">
                  {item.question}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {item.answer}
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
              Common Trust Challenges
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Where healthcare SaaS websites often lose buyer confidence.
            </h2>
          </div>

          <div className="space-y-6 md:col-span-8">
            {trustChallenges.map((item) => (
              <article key={item.title} className="border-l-2 border-[#B55A47]/40 pl-6">
                <h3 className="font-serif text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-[#706E69]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              How Archoric Thinks About Healthcare Websites
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              The goal is not more information. It is stronger buyer confidence.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Archoric looks at how positioning, proof, content, and website structure work together to help cautious buyers understand whether the product is credible, relevant, and worth discussing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {archoricFocus.map((item) => (
              <article key={item.title} className="rounded-sm border border-[#E8E2D5] bg-white p-7">
                <h3 className="font-serif text-2xl font-normal">
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
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Typical Situations
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              When this page usually becomes relevant.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {situations.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-5 text-[17px] leading-relaxed text-[#706E69]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-8">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Who This Is For
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight">
              Healthcare SaaS teams selling into complex buying environments.
            </h2>
            <div className="space-y-3">
              {fits.map((item) => (
                <div key={item} className="border-t border-[#E8E2D5] pt-3 text-[17px] text-[#706E69]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-8">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Where Archoric Creates Less Value
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight">
              Usually less useful when the buying decision is simple.
            </h2>
            <div className="space-y-3">
              {lessUseful.map((item) => (
                <div key={item} className="border-t border-[#E8E2D5] pt-3 text-[17px] text-[#706E69]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Relevant Services
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Services that support healthcare SaaS buyer confidence.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Depending on the situation, Archoric can help identify where buyers hesitate, diagnose deeper trust gaps, or create the strategic plan for improving the website and content system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relevantServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7 transition-colors hover:border-[#B55A47]"
              >
                <h3 className="font-serif text-2xl font-normal leading-snug text-[#2A2925]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {service.text}
                </p>
                <span className="mt-6 inline-flex text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47] transition-colors group-hover:text-[#2A2925]">
                  Learn More
                </span>
              </Link>
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
            Understand where healthcare buyers may still be hesitating.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-[#706E69]">
            If your website explains the product but buyers still need more confidence before engaging with sales, Archoric can help identify where trust, proof, and positioning may need to improve.
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
  );
}
