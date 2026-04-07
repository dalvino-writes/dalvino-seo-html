"use client";

import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

const TrustDeficit = () => {
  const { site } = useContent();
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          panelTagline: "Ce que cela provoque",
          panelPoints: [
            "vos pages existent sans renforcer une même conclusion",
            "vos signaux de confiance restent trop faibles ou trop dispersés",
            "l’acheteur doute avant même de demander une démo",
          ],
          routeTagline: "Où aller ensuite",
          routeTitle:
            "Le déficit de confiance est le problème. Voici les trois prochaines portes utiles.",
          routeCards: [
            {
              title: "Comprendre la logique",
              description:
                "Si vous voulez comprendre pourquoi ce problème est structurel avant d’être éditorial, allez vers Architecture d’autorité.",
              href: "/authority-architecture",
              cta: "Voir l’architecture d’autorité",
            },
            {
              title: "Voir la preuve publique",
              description:
                "Si vous voulez voir comment cette logique se lit sur un vrai diagnostic public, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Diagnostiquer votre site",
              description:
                "Si votre vraie question est “où est-ce que cela casse chez nous ?”, commencez par le TDA.",
              href: "/tda",
              cta: "Commencer par l’Audit",
            },
          ],
          bottomCtaPrimary: "Commencer par l’Audit",
          bottomCtaSecondary: "Voir l’architecture d’autorité",
        }
      : {
          panelTagline: "What This Creates",
          panelPoints: [
            "your pages exist without reinforcing the same conclusion",
            "your trust signals stay too weak or too scattered",
            "the buyer doubts you before they ever ask for a demo",
          ],
          routeTagline: "Where To Go Next",
          routeTitle:
            "The trust deficit is the problem. These are the three most useful next doors.",
          routeCards: [
            {
              title: "Understand the logic",
              description:
                "If you want to understand why this problem is structural before it is editorial, go to Authority Architecture.",
              href: "/authority-architecture",
              cta: "See Authority Architecture",
            },
            {
              title: "See public proof",
              description:
                "If you want to see how this logic reads on a real public diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Diagnose your site",
              description:
                "If your real question is ‘where is this breaking for us?’, start with the TDA.",
              href: "/tda",
              cta: "Start with the Audit",
            },
          ],
          bottomCtaPrimary: "Start with the Audit",
          bottomCtaSecondary: "See Authority Architecture",
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              {site.trustDeficit.tagline}
            </p>

            <h2 className="mb-10 text-3xl font-black leading-[1.08] tracking-tighter text-[#163629] md:text-5xl">
              {site.trustDeficit.title}
            </h2>

            <div className="flex max-w-2xl flex-col gap-6">
              {site.trustDeficit.body.map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-[#2f3e36] md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
              >
                <Link href="/tda">{ui.bottomCtaPrimary}</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
              >
                <Link href="/authority-architecture">{ui.bottomCtaSecondary}</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-black/8 bg-[#f3efe7]/70 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {ui.panelTagline}
              </p>

              <div className="flex flex-col gap-4">
                {ui.panelPoints.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5"
                  >
                    <p className="text-sm font-semibold text-[#163629]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-10 md:py-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {ui.routeTagline}
              </p>

              <h3 className="mb-6 text-2xl font-black leading-tight tracking-tight text-[#163629]">
                {ui.routeTitle}
              </h3>

              <div className="flex flex-col gap-5">
                {ui.routeCards.map((card, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/50 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <h4 className="mb-3 text-lg font-black tracking-tight text-[#163629]">
                      {card.title}
                    </h4>
                    <p className="mb-4 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="text-sm font-semibold text-[#163629] transition-colors hover:text-[#2D5A27]"
                    >
                      {card.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDeficit;