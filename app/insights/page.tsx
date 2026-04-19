"use client";

import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

export default function InsightsPage() {
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          heroTagline: "Les insights",
          heroTitle:
            "Les insights ne remplacent pas le système. Ils l’éclairent.",
          heroSubtitle:
            "Cette page existe comme couche d’orientation. Elle aide à comprendre la logique d’Archoric, mais elle n’est pas le point d’entrée principal du système.",

          archiveTagline: "Le rôle de cette page",
          archiveTitle:
            "Un espace de clarification, pas une archive de contenus.",
          archiveSubtitle:
            "Pour l’instant, Archoric ne maintient pas une bibliothèque publique d’articles ou de notes. Cette page sert uniquement à orienter vers les vraies couches du système : le diagnostic, le cadre et la preuve publique.",

          guidanceTagline: "Comment utiliser cette page",
          guidanceCards: [
            "Comprendre la logique générale",
            "Identifier le bon point d’entrée",
            "Aller vers le diagnostic ou le cadre complet",
          ],

          emptyTitle: "Pas d’archive publique pour le moment",
          emptyBody:
            "Les contenus exploratoires ne sont pas publiés ici pour l’instant. Si vous voulez comprendre le système, les vraies prochaines étapes sont ci-dessous.",

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Si vous cherchez plus qu’un insight, voici les vraies prochaines étapes.",
          routeCards: [
            {
              title: "Voir le point d’entrée",
              description:
                "Si vous voulez partir du diagnostic réel plutôt que d’un contenu, allez vers le TDA.",
              href: "/tda",
              cta: "Voir le TDA",
            },
            {
              title: "Voir le cadre complet",
              description:
                "Si vous voulez comprendre comment la logique devient système, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve publique",
              description:
                "Si vous voulez voir la méthode appliquée à un vrai diagnostic public, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
          ],

          finalTagline: "Commencez ici",
          finalTitle:
            "Les insights peuvent affiner votre compréhension. Le diagnostic, lui, montre où cela casse chez vous.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Voir OAA",
        }
      : {
          heroTagline: "Insights",
          heroTitle:
            "Insights do not replace the system. They help clarify it.",
          heroSubtitle:
            "This page exists as an orientation layer. It helps explain the Archoric logic, but it is not the main entry point into the system.",

          archiveTagline: "The role of this page",
          archiveTitle:
            "A clarification layer, not a public content archive.",
          archiveSubtitle:
            "For now, Archoric does not maintain a public library of articles or notes. This page only exists to route toward the real system layers: the diagnostic, the framework, and the public proof.",

          guidanceTagline: "How to use this page",
          guidanceCards: [
            "Understand the general logic",
            "Identify the right entry point",
            "Move toward the diagnostic or full framework",
          ],

          emptyTitle: "No public archive for now",
          emptyBody:
            "Exploratory content is not being published here at the moment. If you want to understand the system, the real next steps are below.",

          routeTagline: "Where To Go Next",
          routeTitle:
            "If you are looking for more than an insight, these are the real next steps.",
          routeCards: [
            {
              title: "See the entry point",
              description:
                "If you want to begin from the actual diagnostic instead of a content piece, go to the TDA.",
              href: "/tda",
              cta: "See the TDA",
            },
            {
              title: "See the full framework",
              description:
                "If you want to understand how the logic becomes a system, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See public proof",
              description:
                "If you want to see the method applied to a real public diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
          ],

          finalTagline: "Start Here",
          finalTitle:
            "Insights can sharpen understanding. The diagnostic shows where this is actually breaking on your site.",
          finalPrimaryCta: "Start with the Audit",
          finalSecondaryCta: "See OAA",
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
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {ui.heroTagline}
              </p>
              <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                {ui.heroTitle}
              </h1>
              <p className="text-lg leading-relaxed text-[#2f3e36]">
                {ui.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">
                    {locale === "fr" ? "Voir le TDA" : "See the TDA"}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/demonstration-analyses">
                    {locale === "fr"
                      ? "Voir les analyses de démonstration"
                      : "See Demonstration Analyses"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning block */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {ui.archiveTagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {ui.archiveTitle}
                </h2>
                <p className="max-w-3xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                  {ui.archiveSubtitle}
                </p>
              </div>

              <div className="rounded-[28px] border border-black/8 bg-[#f3efe7]/70 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {ui.guidanceTagline}
                </p>

                <div className="flex flex-col gap-4">
                  {ui.guidanceCards.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5"
                    >
                      <p className="text-sm font-semibold text-[#163629]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* No archive state */}
            <div className="mt-12 max-w-4xl">
              <div className="rounded-[22px] border border-dashed border-black/12 bg-white/30 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                <h3 className="mb-3 text-xl font-black text-[#163629]">
                  {ui.emptyTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[#2f3e36]">
                  {ui.emptyBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Routing */}
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
                {ui.finalTagline}
              </p>
              <h2 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {ui.finalTitle}
              </h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{ui.finalPrimaryCta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/oaa">{ui.finalSecondaryCta}</Link>
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