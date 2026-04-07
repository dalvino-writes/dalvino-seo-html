"use client";

import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { site } = useContent();
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          identity: "Dalvino Luce",
          role: "Healthcare SaaS Trust Architecture Strategist",
          primaryCta: "Commencer par l’Audit",
          secondaryCta: "Voir les analyses de démonstration",
          supportLine:
            "La visibilité ne casse pas toujours parce que le contenu est faible. Elle casse souvent parce que la confiance n’est pas assez structurée pour soutenir l’évaluation.",
        }
      : {
          identity: "Dalvino Luce",
          role: "Healthcare SaaS Trust Architecture Strategist",
          primaryCta: "Start with the Audit",
          secondaryCta: "See Demonstration Analyses",
          supportLine:
            "Visibility does not always break because the content is weak. It often breaks because trust is not structured strongly enough to support evaluation.",
        };

  return (
    <section className="pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="container max-w-5xl">
        <div className="max-w-4xl rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
          {/* Identity Bar */}
          <div className="mb-6">
            <p className="text-sm font-semibold tracking-wide text-[#163629]">
              {ui.identity}
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-[#4f635a]">
              {ui.role}
            </p>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-3xl font-black leading-[1.05] tracking-tighter text-[#163629] md:text-5xl lg:text-6xl">
            {site.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mb-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-[#2f3e36] md:text-lg">
            {site.hero.subtitle}
          </p>

          {/* Support line */}
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#5c6a63] md:text-base">
            {ui.supportLine}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
            >
              <Link href="/tda">{ui.primaryCta}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-black/10 bg-white/55 px-7 font-semibold text-[#163629] shadow-none backdrop-blur-xl hover:bg-white/70"
            >
              <Link href="/demonstration-analyses">{ui.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;