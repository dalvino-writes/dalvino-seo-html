"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          tagline: "L’engagement · Comment travailler avec Archoric",
          title:
            "Vous n’avez pas besoin d’un menu de services. Vous avez besoin du bon point d’entrée.",
          subtitle:
            "Le travail avec Archoric ne commence pas par une proposition vague. Il commence par le TDA. Ensuite, si le diagnostic le justifie, OAA devient le système plus profond.",

          cards: [
            {
              label: "Étape 1",
              title: "TDA · Trust Deficit Audit",
              description:
                "Le point d’entrée normal. Un diagnostic structuré pour voir où votre site perd en crédibilité, où la confiance casse, et dans quel ordre les problèmes doivent être traités.",
            },
            {
              label: "Étape 2",
              title: "OAA · Organic Authority Architecture",
              description:
                "L’engagement plus profond. Il intervient après le diagnostic quand une vraie reconstruction du système est nécessaire.",
            },
          ],

          cta: "Voir les engagements",
        }
      : {
          tagline: "The Engagement · How to work with Archoric",
          title:
            "You do not need a services menu. You need the right entry point.",
          subtitle:
            "Working with Archoric does not begin with a vague proposal. It begins with the TDA. Then, if the diagnostic justifies it, OAA becomes the deeper system.",

          cards: [
            {
              label: "Stage 1",
              title: "TDA · Trust Deficit Audit",
              description:
                "The normal entry point. A structured diagnostic to see where your site is losing credibility, where trust is breaking, and in what order problems should be addressed.",
            },
            {
              label: "Stage 2",
              title: "OAA · Organic Authority Architecture",
              description:
                "The deeper engagement. It comes after the diagnostic when a true rebuild of the system is necessary.",
            },
          ],

          cta: "See engagements",
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {copy.tagline}
          </p>
          <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
            {copy.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] border border-black/8 bg-white/34 px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                {card.label}
              </p>

              <h3 className="mb-4 text-xl font-black text-[#163629]">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#2f3e36]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-black/10 bg-white/55 px-7 font-semibold text-[#163629] shadow-none backdrop-blur-xl hover:bg-white/70"
        >
          <Link href="/engagements">{copy.cta}</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesPreview;