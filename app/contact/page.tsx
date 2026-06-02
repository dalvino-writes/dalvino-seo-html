import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Archoric to discuss your website, explore a diagnostic, or better understand how trust and buyer confidence may be influencing purchasing decisions.",
};

const reachOutReasons = [
  {
    title: "Buyer Hesitation Audit",
    text: "You want fast clarity on up to five important website pages and where buyers may hesitate before contacting sales.",
    href: "/services/buyer-hesitation-audit",
  },
  {
    title: "Trust Deficit Audit",
    text: "You want a structured diagnostic of trust, proof, positioning, credibility, and buyer confidence across the website.",
    href: "/services/trust-deficit-audit",
  },
  {
    title: "Architecture Engagement",
    text: "You need a clear website, content, proof, and positioning roadmap before investing in execution.",
    href: "/services/architecture-engagement",
  },
];

const conversationTopics = [
  "Where buyers may be hesitating before sales engagement",
  "Whether your positioning is creating enough confidence",
  "Where proof, validation, or credibility signals may be missing",
  "How your website supports or weakens buyer decision-making",
  "Which service is the right fit for the problem you are trying to understand",
];

const typicalContacts = [
  "Founders",
  "Marketing leaders",
  "Product marketing teams",
  "Growth and revenue leaders",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2925]">
      <header className="sticky top-0 z-50 border-b border-[#E8E2D5]/60 bg-[#FAF8F5]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <svg
              className="h-8 w-8 text-[#B55A47] transition-transform group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polygon points="50,15 15,80 85,80" />
              <line x1="50" y1="15" x2="50" y2="80" />
              <line x1="15" y1="80" x2="50" y2="45" />
              <line x1="85" y1="80" x2="50" y2="45" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold uppercase tracking-wider text-[#2A2925]">
                Archoric
              </span>
              <span className="-mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#706E69]">
                Marketing & Product Positioning
              </span>
            </div>
          </Link>

          <nav className="hidden items-center space-x-8 text-sm font-semibold tracking-wide md:flex">
            <Link href="/services" className="text-[#706E69] transition-colors hover:text-[#B55A47]">
              Services
            </Link>
            <Link href="/who-we-help" className="text-[#706E69] transition-colors hover:text-[#B55A47]">
              Who We Help
            </Link>
            <Link href="/library" className="text-[#706E69] transition-colors hover:text-[#B55A47]">
              Library
            </Link>
            <Link href="/about" className="text-[#706E69] transition-colors hover:text-[#B55A47]">
              About
            </Link>
            <Link href="/contact" className="text-[#2A2925] transition-colors hover:text-[#B55A47]">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="hidden border-2 border-[#B55A47] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#B55A47] transition-all hover:bg-[#B55A47] hover:text-white sm:inline-flex"
          >
            Discuss Your Website
          </Link>
        </div>
      </header>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-end">
          <div className="space-y-8 lg:col-span-8">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Contact
            </span>
            <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-[#2A2925] sm:text-6xl lg:text-7xl">
              Start with a closer look at your website. 
            </h1>
            <p className="max-w-3xl text-[19px] leading-relaxed text-[#706E69]">
              Whether you are reviewing your website, considering a diagnostic, or trying to understand why buyers hesitate, the first step is a conversation with us.
            </p>
          </div>

          <div className="rounded-sm border border-[#E8E2D5] bg-white p-8 shadow-sm lg:col-span-4">
            <p className="font-serif text-2xl font-normal leading-snug text-[#2A2925]">
              You do not need to know which service you need before reaching out.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-[#706E69]">
              A good starting point can simply be: “We think buyers are hesitating, but we are not sure why.”
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-14">
          <div className="max-w-3xl space-y-5">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              When to Reach Out
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Common reasons to start a conversation.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reachOutReasons.map((reason) => (
              <article key={reason.title} className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
                <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                  {reason.title}
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-[#706E69]">
                  {reason.text}
                </p>
                <Link
                  href={reason.href}
                  className="mt-6 inline-flex text-[12px] font-bold uppercase tracking-[0.18em] text-[#B55A47] hover:text-[#2A2925]"
                >
                  Review Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#F0EDE6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              What the Conversation Is About
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              How we can help you.
            </h2>
          </div>

          <div className="space-y-4 md:col-span-8">
            {conversationTopics.map((topic) => (
              <div key={topic} className="rounded-sm border border-[#E8E2D5] bg-white p-5 text-[17px] leading-relaxed text-[#706E69]">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
                Before You Contact Us
              </span>
              <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
                Bring the question. The project can become clearer later.
              </h2>
            </div>

            <div className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-7">
              <h3 className="font-serif text-2xl font-normal text-[#2A2925]">
                Who usually reaches out
              </h3>
              <div className="mt-5 grid gap-3">
                {typicalContacts.map((contact) => (
                  <div key={contact} className="border-l-2 border-[#B55A47] pl-4 text-[16.5px] text-[#706E69]">
                    {contact}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="rounded-sm border border-[#E8E2D5] bg-[#FAF8F5] p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#706E69]">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full border border-[#E8E2D5] bg-white px-4 py-3 text-[16px] font-normal normal-case tracking-normal text-[#2A2925] outline-none transition-colors focus:border-[#B55A47]"
                  />
                </label>

                <label className="space-y-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#706E69]">
                  Work Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-[#E8E2D5] bg-white px-4 py-3 text-[16px] font-normal normal-case tracking-normal text-[#2A2925] outline-none transition-colors focus:border-[#B55A47]"
                  />
                </label>

                <label className="space-y-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#706E69]">
                  Company
                  <input
                    type="text"
                    name="company"
                    className="mt-2 w-full border border-[#E8E2D5] bg-white px-4 py-3 text-[16px] font-normal normal-case tracking-normal text-[#2A2925] outline-none transition-colors focus:border-[#B55A47]"
                  />
                </label>

                <label className="space-y-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#706E69]">
                  Website
                  <input
                    type="url"
                    name="website"
                    className="mt-2 w-full border border-[#E8E2D5] bg-white px-4 py-3 text-[16px] font-normal normal-case tracking-normal text-[#2A2925] outline-none transition-colors focus:border-[#B55A47]"
                  />
                </label>
              </div>

              <label className="mt-6 block space-y-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[#706E69]">
                What are you trying to understand?
                <textarea
                  name="message"
                  rows={6}
                  className="mt-2 w-full border border-[#E8E2D5] bg-white px-4 py-3 text-[16px] font-normal normal-case tracking-normal text-[#2A2925] outline-none transition-colors focus:border-[#B55A47]"
                />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex w-full justify-center bg-[#B55A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2A2925] sm:w-auto"
              >
                Send Message
              </button>
               <p className="mt-5 text-[14px] leading-relaxed text-[#706E69]">
                Archoric's team thanks you for your trust in us. We will review your message and respond within 1-2 business days. If you have an urgent inquiry, please email us directly at dalvino@archoric.com.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E2D5] bg-[#FAF8F5] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#B55A47]">
              Who You’ll Speak With
            </span>
            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              A conversation with the person leading the work.
            </h2>
          </div>

          <div className="rounded-sm border border-[#E8E2D5] bg-white p-8 md:col-span-8">
            <p className="text-[18px] leading-relaxed text-[#706E69]">
              Every engagement starts with a conversation focused on the questions, uncertainties, and buying challenges specific to your situation.
            </p>
            <div className="mt-7 border-l-2 border-[#B55A47] pl-5">
              <p className="font-serif text-2xl font-normal text-[#2A2925]">Dalvino Luce</p>
              <p className="mt-1 text-[15px] uppercase tracking-[0.18em] text-[#706E69]">
                Founder & Director, Archoric
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3A342F] px-6 py-16 text-[#F7F1EA] lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-semibold uppercase tracking-wider">Archoric</h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#D8CEC2]">
              Helping SaaS vendors improve marketing, product positioning, website strategy, and buyer confidence in complex buying environments.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#D9A08D]">Company</h3>
            <div className="mt-5 space-y-3 text-[15px] text-[#D8CEC2]">
              <Link href="/services" className="block hover:text-white">Services</Link>
              <Link href="/who-we-help" className="block hover:text-white">Who We Help</Link>
              <Link href="/library" className="block hover:text-white">Library</Link>
              <Link href="/about" className="block hover:text-white">About</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#D9A08D]">Contact</h3>
            <div className="mt-5 space-y-3 text-[15px] text-[#D8CEC2]">
              <Link href="/contact" className="block hover:text-white">Contact</Link>
              <a href="mailto:contact@archoric.com" className="block hover:text-white">contact@archoric.com</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-[14px] text-[#BFB4A8]">
          © 2026 Archoric. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
