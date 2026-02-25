"use client";
import { useEffect } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";

export default function Faq() {
  const { faq } = useContent();

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("faq-schema");
      if (s) s.remove();
    };
  }, [faq]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {faq.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-10">
              {faq.title}
            </h1>
            <p className="text-foreground text-lg leading-relaxed mb-16">
              {faq.subtitle}
            </p>
            <div className="space-y-10">
              {faq.questions.map((item, index) => (
                <div key={index} className="border-t border-border pt-6">
                  <h2 className="text-lg font-bold mb-2">{item.question}</h2>
                  <p className="text-foreground text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}