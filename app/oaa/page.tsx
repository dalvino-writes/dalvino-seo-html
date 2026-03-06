"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OAA() {
  const { oaa } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              {oaa.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              {oaa.subtitle}
            </p>
          </div>
        </section>

        {/* Why It Exists */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.whyItExists.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {oaa.whyItExists.title}
            </h2>
            <div className="flex flex-col gap-6">
              {oaa.whyItExists.body.map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Two Structural Pillars */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.pillars.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-16">
              {oaa.pillars.title}
            </h2>
            <div className="flex flex-col gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {oaa.pillars.pillar1.label}
                </p>
                <h3 className="text-2xl font-black tracking-tight mb-8">
                  {oaa.pillars.pillar1.name}
                </h3>
                <div className="flex flex-col gap-6">
                  {oaa.pillars.pillar1.body.map((paragraph: string, index: number) => (
                    <p key={index} className="text-base text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {oaa.pillars.pillar2.label}
                </p>
                <h3 className="text-2xl font-black tracking-tight mb-8">
                  {oaa.pillars.pillar2.name}
                </h3>
                <div className="flex flex-col gap-6">
                  {oaa.pillars.pillar2.body.map((paragraph: string, index: number) => (
                    <p key={index} className="text-base text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Tier Intent Framework */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.intentFramework.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-white">
              {oaa.intentFramework.title}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-16">
              {oaa.intentFramework.intro}
            </p>
            <div className="flex flex-col gap-8">
              {oaa.intentFramework.tiers.map((tier: { label: string; name: string; description: string }, index: number) => (
                <div key={index} className="border-l-2 border-accent pl-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                    {tier.label}
                  </p>
                  <h3 className="text-lg font-black text-white mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.deliverables.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-16">
              {oaa.deliverables.title}
            </h2>
            <div className="flex flex-col divide-y divide-border">
              {oaa.deliverables.items.map((item: { name: string; description: string }, index: number) => (
                <div key={index} className="py-8 grid md:grid-cols-3 gap-4">
                  <h3 className="text-base font-black tracking-tight">
                    {item.name}
                  </h3>
                  <p className="md:col-span-2 text-sm text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compounding Logic */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.compounding.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {oaa.compounding.title}
            </h2>
            <div className="flex flex-col gap-6">
              {oaa.compounding.body.map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {oaa.cta.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
              {oaa.cta.title}
            </h2>
            <Button
              asChild
              size="lg"
              className="font-semibold bg-[#2D5A27] hover:bg-[#1e3d1a] text-white rounded-none shadow-none border-0"
            >
              <Link href="/contact">{oaa.cta.cta}</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}