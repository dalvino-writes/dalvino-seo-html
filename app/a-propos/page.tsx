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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {about.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-10">
              {about.title}
            </h1>

            <div className="space-y-5 mb-16">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {about.values.map((value) => (
                <div key={value.title} className="border border-border p-6 bg-card">
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="font-semibold bg-[#2D5A27] hover:bg-[#1e3d1a] text-white rounded-none shadow-none border-0"
            >
              <Link href="/contact">{site.newsletterSection.cta}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}