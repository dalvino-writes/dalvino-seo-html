import Link from "next/link";

const challenges = [
  {
    title: "Operational complexity",
    text: "Construction software often supports workflows that affect projects, field teams, documentation, coordination, and delivery. Buyers need to understand how the product fits into real operations before they move forward.",
  },
  {
    title: "Multiple stakeholders",
    text: "A construction SaaS purchase may involve operations, project leaders, finance, IT, field users, and executives. The website has to help each group understand why the product is credible and relevant.",
  },
  {
    title: "Implementation confidence",
    text: "Buyers often want to know what rollout looks like, how much disruption to expect, and whether their teams can adopt the product without slowing down work.",
  },
  {
    title: "Proof requirements",
    text: "Generic claims are rarely enough. Buyers need proof that speaks to similar operational environments, real project constraints, and practical adoption concerns.",
  },
];

const buyerQuestions = [
  "Will this fit how our teams actually work?",
  "How difficult will implementation be?",
  "Will field teams adopt it?",
  "Will this create disruption during active projects?",
  "Has this worked for companies or teams like ours?",
  "Can we justify this internally?",
];

const trustGaps = [
  {
    title: "Feature-heavy positioning",
    text: "The website explains what the software does, but not enough about why the buyer should trust it in a real operational environment.",
  },
  {
    title: "Unclear implementation story",
    text: "Buyers do not get enough clarity on rollout, onboarding, team adoption, or what happens after the first sales conversation.",
  },
  {
    title: "Weak proof placement",
    text: "Evidence may exist, but it is not placed close enough to the claims, concerns, or decision points it is meant to support.",
  },
  {
    title: "Generic buyer reassurance",
    text: "The website uses broad credibility language instead of addressing the specific risks construction buyers are trying to reduce.",
  },
];

const howArchoricHelps = [
  "Identify where buyer confidence breaks down across key website pages.",
  "Review whether positioning speaks to operational and implementation concerns.",
  "Assess where proof should appear to support important claims.",
  "Clarify which buyer questions remain unanswered before sales engagement.",
  "Prioritize website, content, proof, and positioning improvements.",
];

const situations = [
  "You are preparing a website redesign or messaging refresh.",
  "Buyers understand the product but still hesitate before engaging with sales.",
  "Sales repeatedly answers the same questions about rollout, adoption, or proof.",
  "Your website explains features but does not yet build enough buyer confidence.",
  "You need clearer positioning before investing in content or demand generation.",
  "You want to connect proof, website structure, and buyer concerns more effectively.",
];

const services = [
  {
    title: "Buyer Hesitation Audit",
    href: "/services/buyer-hesitation-audit",
    text: "A focused review of key pages to identify where construction SaaS buyers may hesitate before engaging with sales.",
  },
  {
    title: "Trust Deficit Audit",
    href: "/services/trust-deficit-audit",
    text: "A broader diagnostic of trust, proof, positioning, credibility, and buyer-confidence gaps across the website.",
  },
  {
    title: "Architecture Engagement",
    href: "/services/architecture-engagement",
    text: "A strategic website, content, proof, and positioning blueprint for teams preparing larger improvements.",
  },
];

export default function ConstructionSaaSPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-end">
          <div className="space-y-8 lg:col-span-8">
            <Link
              href="/who-we-help"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B55A47] transition-colors hover:text-[#2A2925]"
            >
              <span>&larr;</span>
              <span>Who We Help</span>
            </Link>

            <div className="space-y-5">
              <span className="block text-[12px] font-bold uppercase tracking-[0.22em] text-[#706E69]">
                Construction SaaS
              </span>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                When construction buyers need confidence before they commit.
              </h1>

              <p className="max-w-4xl font-serif text-2xl font-light italic leading-snug text-[#B55A47] sm:text-3xl">
                Construction software often supports complex operational decisions involving multiple stakeholders, longer evaluation cycles, and meaningful implementation concerns.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-6 rounded-sm border border-[#E8E2D5] bg-white p-7 shadow-sm">
              <p className="text-[18px] leading-relaxed text-[#706E69]">
                Archoric helps construction SaaS teams identify where trust, proof, positioning, and buyer-confidence gaps may exist across the website and buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Why Construction Buying Is Different
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Construction buyers evaluate more than software features.
            </h2>
          </div>

          <div className="space-y-6 text-[18px] leading-relaxed text-[#706E69] md:col-span-8">
            <p>
              A construction SaaS purchase can affect project coordination, field adoption, reporting, documentation, workflows, and operational accountability. That makes the buying decision more sensitive than a simple software subscription.
            </p>
            <p>
              Buyers may like the product and still hesitate if the website does not answer practical questions about implementation, adoption, proof, and fit inside their operating environment.
            </p>
            <div className="border-l-4 border-[#B55A47] bg-[#FAF8F5] p-7">
              <p className="font-serif text-2xl italic leading-relaxed text-[#2A2925] sm:text-3xl">
                “The product may look useful, but buyers still need confidence that it can work inside real construction operations.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Common Buyer Questions
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Questions buyers often need answered before sales.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              The website does not need to answer every detail, but it should reduce uncertainty before the buyer reaches out.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buyerQuestions.map((question) => (
              <div key={question} className="rounded-sm border border-[#E8E2D5] bg-white p-6 text-[17px] leading-relaxed text-[#706E69]">
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Common Trust Challenges
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Where construction SaaS websites often create hesitation.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustGaps.map((gap) => (
              <article key={gap.title} className="space-y-4 rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <h3 className="font-serif text-2xl font-normal">{gap.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">{gap.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              How Archoric Helps
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              We review the website through the lens of buyer confidence.
            </h2>
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              The goal is not more traffic. The goal is helping qualified buyers move forward with greater confidence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {howArchoricHelps.map((item) => (
              <div key={item} className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]">
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
              When construction SaaS teams usually need this work.
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
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Relevant Services
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Ways Archoric can support construction SaaS teams.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group space-y-5 rounded-sm border border-[#E8E2D5] bg-white p-7 transition-colors hover:border-[#B55A47]">
                <h3 className="font-serif text-2xl font-normal group-hover:text-[#B55A47]">{service.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-[#706E69]">{service.text}</p>
                <span className="inline-block text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47]">
                  Explore service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-7 rounded-sm border border-[#E8E2D5] bg-white p-10 text-center sm:p-14">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
            Next Step
          </span>
          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
            Understand where construction buyers may be hesitating.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#706E69]">
            If your website explains the product but does not yet create enough confidence, Archoric can help identify what may be slowing buyers down.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925]"
          >
            Discuss Your Website
          </Link>
        </div>
      </section>
    </main>
  );
}
