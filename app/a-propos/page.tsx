"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const { site } = useContent();
  const { about } = site;

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
                {about.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {about.title}
              </h1>

              <div className="flex flex-col gap-6">
                {about.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <div className="max-w-4xl grid gap-6 md:grid-cols-3">
                {about.values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-lg font-black mb-3 text-[#163629]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#2f3e36] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <Button
                asChild
                size="lg"
                className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
              >
                <Link href="/contact">{site.newsletterSection.cta}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}