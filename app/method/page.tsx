"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Method() {
  const { method } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              {method.hero.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-10">
              {method.hero.subtitle}
            </p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">{method.hero.cta}</Link>
            </Button>
          </div>
        </section>

        {/* Why it exists */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.whyItExists.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {method.whyItExists.title}
            </h2>
            <div className="flex flex-col gap-6">
              {method.whyItExists.body.map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Layers */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.layers.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6">
              {method.layers.title}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-16">
              {method.layers.intro}
            </p>

            <div className="flex flex-col gap-8">
              {method.layers.items.map(
                (item: { name: string; description: string }, index: number) => (
                  <div key={index} className="border-l-2 border-accent pl-6">
                    <h3 className="text-lg font-black text-foreground mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Scoring */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.scoring.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {method.scoring.title}
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              {method.scoring.body.map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {method.scoring.classifications.map(
                (item: { label: string; score: string }, index: number) => (
                  <div key={index} className="border border-white/10 p-6">
                    <h3 className="text-base font-black text-white mb-2">{item.label}</h3>
                    <p className="text-sm text-white/70">{item.score}</p>
                  </div>
                )
              )}
            </div>

            <p className="text-base text-white/80 leading-relaxed">
              {method.scoring.closing}
            </p>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.diagnosis.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
              {method.diagnosis.title}
            </h2>
            <div className="flex flex-col gap-6">
              {method.diagnosis.body.map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverable */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.deliverable.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {method.deliverable.title}
            </h2>
            <ul className="space-y-4 mb-8">
              {method.deliverable.items.map((item: string, index: number) => (
                <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-white/80 leading-relaxed">
              {method.deliverable.closing}
            </p>
          </div>
        </section>

        {/* Flow */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.flow.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
              {method.flow.title}
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              {method.flow.steps.map((step: string, index: number) => (
                <div key={index} className="text-sm font-medium text-foreground">
                  {step}
                  {index < method.flow.steps.length - 1 && (
                    <span className="ml-2 text-accent">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {method.flow.body}
            </p>
          </div>
        </section>

        {/* Clarification */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.clarification.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-white">
              {method.clarification.title}
            </h2>
            <div className="flex flex-col gap-6">
              {method.clarification.body.map((paragraph: string, index: number) => (
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
              {method.cta.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6">
              {method.cta.title}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-10">
              {method.cta.body}
            </p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">{method.cta.cta}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}