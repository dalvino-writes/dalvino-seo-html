"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Phase = {
  title: string;
  description: string;
  points: string[];
};

export default function Method() {
  const { method } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {method.tagline}
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {method.title}
            </h1>

            <p className="text-lg text-foreground leading-relaxed mb-16">
              {method.subtitle}
            </p>

          </div>

          <div className="container space-y-12">

            {method.phases.map((phase: Phase, index: number) => (
              <div
                key={index}
                className="border border-border p-8 md:p-10 bg-card"
              >
                <h2 className="text-2xl font-bold mb-4">{phase.title}</h2>

                <p className="text-foreground leading-relaxed mb-6">
                  {phase.description}
                </p>

                <ul className="space-y-2">
                  {phase.points.map((point: string, i: number) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5">+</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="container max-w-3xl mt-20">

              <h2 className="text-3xl font-black mb-4">
                {method.outcome.title}
              </h2>

              <p className="text-lg leading-relaxed mb-10">
                {method.outcome.description}
              </p>

              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">{method.cta}</Link>
              </Button>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}