"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const { site, services } = useContent();

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {site.servicesPreview.tagline}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
          {site.servicesPreview.title}
        </h2>
        <p className="text-foreground text-lg mb-12 max-w-xl">
          {site.servicesPreview.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {services.offers.map((offer) => (
            <div key={offer.id} className="border border-border p-6 bg-card">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {offer.audience}
              </p>
              <h3 className="text-xl font-bold mb-3">{offer.name}</h3>
              <p className="text-foreground text-sm leading-relaxed mb-1">
                {offer.description}
              </p>
              {offer.descriptionAccent && (
                <p className="text-foreground text-sm leading-relaxed underline mb-4">
                  {offer.descriptionAccent}
                </p>
              )}
            </div>
          ))}
        </div>

        <Button asChild variant="outline" size="lg" className="font-semibold">
          <Link href="/contact">{site.servicesPreview.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesPreview;