"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MethodPage() {
  const { method } = useContent();

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-transparent text-black">
     <div className="pointer-events-none fixed inset-0 z-0">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42]"
    style={{ backgroundImage: "url('/images/archoric-soft-bg.jpg')" }}
  />
  <div className="absolute inset-0 backdrop-blur-[6px]" />
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,240,0.24)_0%,rgba(244,241,235,0.36)_100%)]" />
</div>

      <Header />
      <main className="relative z-10 flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.hero.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {method.hero.title}
              </h1>
              <p className="text-lg text-[#2f3e36] leading-relaxed mb-10 max-w-2xl">
                {method.hero.subtitle}
              </p>
              <Button
                asChild
                size="lg"
                className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
              >
                <Link href="/contact">{method.hero.cta}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.whyItExists.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {method.whyItExists.title}
              </h2>
              <div className="flex flex-col gap-6">
                {method.whyItExists.body.map((paragraph: string, index: number) => (
                  <p key={index} className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.layers.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {method.layers.title}
              </h2>
              <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                {method.layers.intro}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {method.layers.items.map(
                (item: { name: string; description: string }, index: number) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
                  >
                    <h3 className="text-lg font-black text-[#163629] mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#34433b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  {method.scoring.tagline}
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                  {method.scoring.title}
                </h2>

                <div className="flex flex-col gap-6 mb-12">
                  {method.scoring.body.map((paragraph: string, index: number) => (
                    <p key={index} className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-4xl">
                {method.scoring.classifications.map(
                  (item: { label: string; score: string }, index: number) => (
                    <div
                      key={index}
                      className="rounded-[22px] border border-black/8 bg-white/46 backdrop-blur-xl px-6 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                    >
                      <h3 className="text-base font-black text-[#163629] mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm text-[#34433b]">{item.score}</p>
                    </div>
                  )
                )}
              </div>

              <p className="max-w-3xl text-base text-[#2f3e36] leading-relaxed">
                {method.scoring.closing}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.diagnosis.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {method.diagnosis.title}
              </h2>
              <div className="flex flex-col gap-6">
                {method.diagnosis.body.map((paragraph: string, index: number) => (
                  <p key={index} className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.deliverable.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {method.deliverable.title}
              </h2>
              <ul className="space-y-4 mb-8">
                {method.deliverable.items.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-[#2f3e36] text-sm flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-accent mt-0.5">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-[#2f3e36] leading-relaxed">
                {method.deliverable.closing}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.flow.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {method.flow.title}
              </h2>
            </div>

            <div className="max-w-4xl grid gap-4 md:grid-cols-2 mb-10">
              {method.flow.steps.map((step: string, index: number) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-black/8 bg-white/34 backdrop-blur-xl px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.04)] text-sm font-medium text-[#26352e]"
                >
                  {step}
                </div>
              ))}
            </div>

            <p className="max-w-3xl text-base md:text-lg text-[#2f3e36] leading-relaxed">
              {method.flow.body}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.clarification.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {method.clarification.title}
              </h2>
              <div className="flex flex-col gap-6">
                {method.clarification.body.map((paragraph: string, index: number) => (
                  <p key={index} className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {method.cta.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {method.cta.title}
              </h2>
              <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed mb-10 max-w-2xl">
                {method.cta.body}
              </p>
              <Button
                asChild
                size="lg"
                className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
              >
                <Link href="/contact">{method.cta.cta}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}