"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OAA() {
  const { oaa } = useContent();

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
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {oaa.title}
              </h1>
              <p className="text-lg text-[#2f3e36] leading-relaxed max-w-2xl">
                {oaa.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Why It Exists */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.whyItExists.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {oaa.whyItExists.title}
              </h2>
              <div className="flex flex-col gap-6">
                {oaa.whyItExists.body.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* One Term Worth Defining */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.definition.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {oaa.definition.title}
              </h2>
              <div className="flex flex-col gap-6">
                {oaa.definition.body.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Two Structural Pillars */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  {oaa.pillars.tagline}
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#163629]">
                  {oaa.pillars.title}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
                <div className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">
                    {oaa.pillars.pillar1.label}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight mb-6 text-[#163629]">
                    {oaa.pillars.pillar1.name}
                  </h3>
                  <div className="flex flex-col gap-6">
                    {oaa.pillars.pillar1.body.map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="text-base text-[#2f3e36] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">
                    {oaa.pillars.pillar2.label}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight mb-6 text-[#163629]">
                    {oaa.pillars.pillar2.name}
                  </h3>
                  <div className="flex flex-col gap-6">
                    {oaa.pillars.pillar2.body.map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="text-base text-[#2f3e36] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Stages of Evaluation */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.intentFramework.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {oaa.intentFramework.title}
              </h2>
              <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed">
                {oaa.intentFramework.intro}
              </p>
            </div>

            <div className="max-w-4xl grid gap-4 md:grid-cols-2">
              {oaa.intentFramework.tiers.map(
                (
                  tier: { label: string; name: string; description: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/34 backdrop-blur-xl px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
                      {tier.label}
                    </p>
                    <h3 className="text-lg font-black text-[#163629] mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-[#34433b] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  {oaa.deliverables.tagline}
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#163629]">
                  {oaa.deliverables.title}
                </h2>
              </div>

              <div className="grid gap-6 max-w-4xl">
                {oaa.deliverables.items.map(
                  (item: { name: string; description: string }, index: number) => (
                    <div
                      key={index}
                      className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] grid md:grid-cols-3 gap-4"
                    >
                      <h3 className="text-base font-black tracking-tight text-[#163629]">
                        {item.name}
                      </h3>
                      <p className="md:col-span-2 text-sm text-[#2f3e36] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Compounding Logic */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.compounding.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {oaa.compounding.title}
              </h2>
              <div className="flex flex-col gap-6">
                {oaa.compounding.body.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {oaa.cta.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {oaa.cta.title}
              </h2>
              <Button
                asChild
                size="lg"
                className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
              >
                <Link href="/contact">{oaa.cta.cta}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}