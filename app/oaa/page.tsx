"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OAA() {
  const { oaa } = useContent();
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          secondaryHeroCta: "Voir les analyses de démonstration",
          routeAuthority: "Voir l’architecture d’autorité",
          routeAnalyses: "Voir les analyses de démonstration",
          routeAudit: "Commencer par l’Audit",
          routeTagline: "Où aller ensuite",
          routeTitle:
            "Vous n’avez pas besoin de tout lire dans l’ordre pour avancer.",
          routeSubtitle:
            "Cette page doit vous aider à aller vers la suite la plus utile selon votre doute actuel : comprendre la logique, voir la preuve, ou commencer par le diagnostic.",
          routeCards: [
            {
              title: "Comprendre la logique de catégorie",
              description:
                "Si vous avez besoin de comprendre pourquoi la structure compte avant même la copie, passez par la page Architecture d’autorité.",
              href: "/authority-architecture",
              cta: "Voir l’architecture d’autorité",
            },
            {
              title: "Voir la preuve sur un site réel",
              description:
                "Si vous voulez voir à quoi ressemble cette logique face à une vraie entreprise, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Identifier où votre système fuit",
              description:
                "Si votre question est surtout “où est-ce que ça casse chez nous ?”, commencez directement par le TDA.",
              href: "/tda",
              cta: "Commencer par l’Audit",
            },
          ],
        }
      : {
          secondaryHeroCta: "See Demonstration Analyses",
          routeAuthority: "See Authority Architecture",
          routeAnalyses: "See Demonstration Analyses",
          routeAudit: "Start with the Audit",
          routeTagline: "Where To Go Next",
          routeTitle:
            "You do not need to read everything in order to move forward.",
          routeSubtitle:
            "This page should help you move to the next step that matches your current doubt: understand the logic, see the proof, or start with the diagnostic.",
          routeCards: [
            {
              title: "Understand the category logic",
              description:
                "If you need to understand why structure matters before copy ever enters the picture, go to Authority Architecture.",
              href: "/authority-architecture",
              cta: "See Authority Architecture",
            },
            {
              title: "See proof against a real site",
              description:
                "If you want to see what this logic looks like against an actual company, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Find where your system is leaking",
              description:
                "If your real question is ‘where is this breaking for us?’, start directly with the TDA.",
              href: "/tda",
              cta: "Start with the Audit",
            },
          ],
        };

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
        {/* Hero */}
        <section className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {oaa.tagline}
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                {oaa.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#2f3e36]">
                {oaa.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{oaa.cta.cta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/demonstration-analyses">{ui.secondaryHeroCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {oaa.whyItExists.tagline}
              </p>
              <h2 className="mb-10 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {oaa.whyItExists.title}
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {oaa.whyItExists.body.map((paragraph: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/38 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {oaa.definition.tagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {oaa.definition.title}
                </h2>

                <div className="flex flex-col gap-5">
                  {oaa.definition.body.map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-[#2f3e36] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-black/8 bg-[#f3efe7]/70 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {locale === "fr" ? "Ce que cela change" : "What This Changes"}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Votre crédibilité n’est plus éparpillée."
                        : "Your credibility stops feeling scattered."}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Vos acheteurs n’ont plus à assembler la preuve eux-mêmes."
                        : "Your buyers stop having to assemble the proof on their own."}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Votre site commence à réduire le risque perçu au lieu de l’ajouter."
                        : "Your site starts reducing perceived risk instead of adding to it."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layers */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {oaa.pillars.tagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {oaa.pillars.title}
                </h2>
              </div>

              <div className="grid max-w-5xl gap-6 md:grid-cols-2">
                <div className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {oaa.pillars.pillar1.label}
                  </p>
                  <h3 className="mb-6 text-2xl font-black tracking-tight text-[#163629]">
                    {oaa.pillars.pillar1.name}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {oaa.pillars.pillar1.body.map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-[#2f3e36]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {oaa.pillars.pillar2.label}
                  </p>
                  <h3 className="mb-6 text-2xl font-black tracking-tight text-[#163629]">
                    {oaa.pillars.pillar2.name}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {oaa.pillars.pillar2.body.map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-[#2f3e36]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {oaa.intentFramework.tagline}
              </p>
              <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {oaa.intentFramework.title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                {oaa.intentFramework.intro}
              </p>
            </div>

            <div className="grid max-w-5xl gap-5 md:grid-cols-3">
              {oaa.intentFramework.tiers.map(
                (
                  tier: { label: string; name: string; description: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {tier.label}
                    </p>
                    <h3 className="mb-3 text-lg font-black text-[#163629]">
                      {tier.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#34433b]">
                      {tier.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {oaa.deliverables.tagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {oaa.deliverables.title}
                </h2>
              </div>

              <div className="grid max-w-5xl gap-5">
                {oaa.deliverables.items.map(
                  (item: { name: string; description: string }, index: number) => (
                    <div
                      key={index}
                      className="grid gap-3 rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl md:grid-cols-[220px_1fr]"
                    >
                      <h3 className="text-base font-black tracking-tight text-[#163629]">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Compounding + transition rhythm */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-black/8 bg-[#e9efe8]/70 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-12">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {oaa.compounding.tagline}
                </p>
                <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {oaa.compounding.title}
                </h2>
                <div className="h-px w-full bg-black/8" />
                <div className="mt-6 flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                    {locale === "fr"
                      ? "Si votre site ne réduit pas le risque perçu rapidement, votre contenu ne portera pas la vente."
                      : "If your site does not reduce perceived risk quickly, your content will not carry the sale."}
                  </p>
                  <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                    {locale === "fr"
                      ? "C’est là que l’infrastructure commence à compter plus que le volume."
                      : "That is where infrastructure starts to matter more than volume."}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {oaa.compounding.body.map((paragraph: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/38 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-directional routing */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {ui.routeTagline}
                </p>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {ui.routeTitle}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                  {ui.routeSubtitle}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {ui.routeCards.map((card, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-black/8 bg-white/50 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <h3 className="mb-4 text-xl font-black tracking-tight text-[#163629]">
                      {card.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
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
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {oaa.cta.tagline}
              </p>
              <h2 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {oaa.cta.title}
              </h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{ui.routeAudit}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/authority-architecture">{ui.routeAuthority}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/demonstration-analyses">{ui.routeAnalyses}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}