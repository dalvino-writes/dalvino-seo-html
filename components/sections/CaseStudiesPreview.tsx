"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

const CaseStudiesPreview = () => {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          tagline: "La preuve · Diagnostics publics",
          title:
            "Montrez comment Archoric pense sur un vrai diagnostic public.",
          subtitle:
            "La preuve la plus forte n’est plus une pseudo étude de cas. C’est un diagnostic public qui rend la méthode visible avant même qu’un prospect vous parle.",
          featuredLabel: "Diagnostic principal",
          featuredCategory: "Healthcare SaaS · Diagnostic public",
          featuredTitle: "MedBridgePro Trust Architecture Diagnostic",
          featuredSummary:
            "Un diagnostic public structuré qui montre comment Archoric lit la crédibilité, la conformité, le risque acheteur et les ruptures d’autorité sur une vraie entreprise Healthcare SaaS.",
          featuredPoint1: "Preuve publique de la méthode",
          featuredPoint2: "Lecture structurelle appliquée à un cas réel",
          featuredPoint3: "Entrée plus forte dans le système Archoric",
          primaryCta: "Voir le diagnostic MedBridgePro",
          secondaryCta: "Voir toutes les analyses de démonstration",
        }
      : {
          tagline: "The Proof · Public Diagnostics",
          title: "Show how Archoric thinks through a real public diagnostic.",
          subtitle:
            "The strongest proof is no longer a pseudo case study. It is a public diagnostic that makes the method visible before a prospect ever talks to you.",
          featuredLabel: "Featured Diagnostic",
          featuredCategory: "Healthcare SaaS · Public Diagnostic",
          featuredTitle: "MedBridgePro Trust Architecture Diagnostic",
          featuredSummary:
            "A structured public diagnostic showing how Archoric reads credibility, compliance, buyer risk, and authority breakdown across a real Healthcare SaaS company.",
          featuredPoint1: "Public proof of the method",
          featuredPoint2: "Structural reading applied to a real case",
          featuredPoint3: "Stronger entry into the Archoric system",
          primaryCta: "See the MedBridgePro diagnostic",
          secondaryCta: "See all Demonstration Analyses",
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
            {copy.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
            {copy.title}
          </h2>
          <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed max-w-2xl">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] mb-12">
          <div className="rounded-[24px] border border-black/8 bg-white/34 backdrop-blur-xl px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)] md:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">
              {copy.featuredLabel}
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63] mb-3">
              {copy.featuredCategory}
            </p>

            <h3 className="text-xl md:text-2xl font-black mb-4 text-[#163629]">
              {copy.featuredTitle}
            </h3>

            <p className="text-[#2f3e36] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              {copy.featuredSummary}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="font-semibold rounded-full border-0 bg-[#2D5A27] text-white hover:bg-[#1f411c] shadow-none px-7"
              >
                <Link href="/private-diagnostics/client-medbridgepro/index.html">
                  {copy.primaryCta}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold rounded-full border-black/10 text-[#163629] bg-white/55 backdrop-blur-xl hover:bg-white/70 shadow-none px-7"
              >
                <Link href="/demonstration-analyses">{copy.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[24px] border border-black/8 bg-[#f3efe7]/70 backdrop-blur-xl px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.04)] md:px-8 md:py-8">
            <div className="flex flex-col gap-4">
              <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                <p className="text-sm font-semibold text-[#163629]">
                  {copy.featuredPoint1}
                </p>
              </div>

              <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                <p className="text-sm font-semibold text-[#163629]">
                  {copy.featuredPoint2}
                </p>
              </div>

              <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                <p className="text-sm font-semibold text-[#163629]">
                  {copy.featuredPoint3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;