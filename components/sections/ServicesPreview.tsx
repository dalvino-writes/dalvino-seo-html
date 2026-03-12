"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const { site, services } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
            {site.servicesPreview.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
            {site.servicesPreview.title}
          </h2>
          <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed max-w-2xl">
            {site.servicesPreview.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
                {offer.audience}
              </p>

              <h3 className="text-xl font-black mb-4 text-[#163629]">
                {offer.name}
              </h3>

              <p className="text-[#2f3e36] text-sm leading-relaxed mb-3">
                {offer.description}
              </p>

              {offer.descriptionAccent && (
                <p className="text-[#4c5a54] text-sm leading-relaxed">
                  {offer.descriptionAccent}
                </p>
              )}
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="font-semibold rounded-full border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl hover:bg-white/70 shadow-none px-7"
        >
          <Link href="/services">{site.servicesPreview.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesPreview;