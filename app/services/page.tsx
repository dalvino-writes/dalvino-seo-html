"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const { services } = useContent();

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
            <div className="max-w-4xl rounded-[30px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {services.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {services.title}
              </h1>
              <p className="text-lg text-[#2f3e36] leading-relaxed max-w-3xl">
                {services.subtitle}
              </p>
            </div>
          </div>

          <div className="container max-w-5xl mt-20">
            <div className="space-y-8">
              {services.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-[28px] border border-black/8 bg-white/38 backdrop-blur-xl p-8 md:p-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                        {offer.audience}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black mb-4 text-[#163629]">
                        {offer.name}
                      </h2>
                      <p className="text-[#2f3e36] leading-relaxed mb-3">
                        {offer.description}
                      </p>
                      {offer.descriptionAccent && (
                        <p className="text-sm text-[#4c5a54] leading-relaxed mb-6">
                          {offer.descriptionAccent}
                        </p>
                      )}
                      <p className="text-sm text-[#5c6a63] mt-1">
                        {offer.timeline}
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-4">
                        {services.deliverablesLabel}
                      </h3>
                      <ul className="space-y-3">
                        {offer.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-[#2f3e36] text-sm flex items-start gap-3 leading-relaxed"
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

            <div className="max-w-4xl mt-24 rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {services.whoItsFor.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-12 text-[#163629]">
                {services.whoItsFor.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-6">
                    {services.whoItsFor.fitsLabel}
                  </p>
                  <ul className="space-y-4">
                    {services.whoItsFor.fits.map((item, i) => (
                      <li
                        key={i}
                        className="text-[#2f3e36] text-sm flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-accent mt-0.5">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white/30 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.03)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-6">
                    {services.whoItsFor.notFitsLabel}
                  </p>
                  <ul className="space-y-4">
                    {services.whoItsFor.notFits.map((item, i) => (
                      <li
                        key={i}
                        className="text-[#5c6a63] text-sm flex items-start gap-3 leading-relaxed"
                      >
                        <span className="mt-0.5">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mt-24 rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {services.approachLink.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {services.approachLink.title}
              </h2>
              <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed mb-8 max-w-2xl">
                {services.approachLink.description}
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold rounded-full border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl hover:bg-white/70 shadow-none px-7"
              >
                <Link href="/method">{services.approachLink.cta}</Link>
              </Button>
            </div>

            <div className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="font-semibold bg-[#2D5A27] hover:bg-[#1f411c] text-white rounded-full shadow-none border-0 px-7"
              >
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