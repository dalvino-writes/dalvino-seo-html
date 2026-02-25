"use client";
import { useContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {site.newsletterSection.tagline}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {site.newsletterSection.title}
        </h2>
        <p className="text-foreground text-lg mb-8">
          {site.newsletterSection.subtitle}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="email"
            placeholder={site.newsletterSection.placeholder}
            className="flex-1 bg-card border-border"
          />
          <Button type="submit" className="font-semibold">
            {site.newsletterSection.cta}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
