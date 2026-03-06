"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const { services } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {services.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {services.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-16">
              {services.subtitle}
            </p>
          </div>

          <div className="container">
            <div className="space-y-12">
              {services.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="border border-border p-8 md:p-10 bg-card"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                        {offer.audience}
                      </p>
                      <h2 className="text-2xl font-bold mb-4">{offer.name}</h2>
                      <p className="text-foreground leading-relaxed mb-2">
                        {offer.description}
                      </p>
                      {offer.descriptionAccent && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {offer.descriptionAccent}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {offer.timeline}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                        {services.deliverablesLabel}
                      </h3>
                      <ul className="space-y-2">
                        {offer.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-0.5">+</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="container max-w-3xl mt-24">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                {services.whoItsFor.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12">
                {services.whoItsFor.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
                    {services.whoItsFor.fitsLabel}
                  </p>
                  <ul className="space-y-4">
                    {services.whoItsFor.fits.map((item, i) => (
                      <li
                        key={i}
                        className="text-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                    {services.whoItsFor.notFitsLabel}
                  </p>
                  <ul className="space-y-4">
                    {services.whoItsFor.notFits.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="mt-0.5">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">{services.cta}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}