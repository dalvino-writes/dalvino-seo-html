"use client";

import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

type DiagnosticItem = {
  id: string;
  href: string;
  categoryEn: string;
  categoryFr: string;
  title: string;
  summaryEn: string;
  summaryFr: string;
  challengeEn: string;
  challengeFr: string;
  approachEn: string;
  approachFr: string;
  statusEn: string;
  statusFr: string;
};

type AdditionalDiagnosticItem = {
  id: string;
  href: string;
  titleEn: string;
  titleFr: string;
  summaryEn: string;
  summaryFr: string;
  statusEn: string;
  statusFr: string;
};

const featuredDiagnostic: DiagnosticItem = {
  id: "client-medbridgepro",
  href: "/private-diagnostics/client-medbridgepro/index.html",
  categoryEn: "Healthcare SaaS · Public Diagnostic",
  categoryFr: "Healthcare SaaS · Diagnostic public",
  title: "MedBridgePro Trust Architecture Diagnostic",
  summaryEn:
    "A public-facing strategic diagnostic showing how Archoric reads structural trust, regulatory credibility, buyer risk, and authority breakdown across a real Healthcare SaaS company.",
  summaryFr:
    "Un diagnostic stratégique public montrant comment Archoric lit la confiance structurelle, la crédibilité réglementaire, le risque acheteur et les ruptures d’autorité à travers une vraie entreprise Healthcare SaaS.",
  challengeEn:
    "Show what Archoric actually does before a prospect ever becomes a client, using a real audited company under a fictional public-facing name.",
  challengeFr:
    "Montrer concrètement ce qu’Archoric fait avant même qu’un prospect ne devienne client, à partir d’une vraie entreprise auditée sous un nom fictif public.",
  approachEn:
    "Structured as a public Trust Architecture Diagnostic with linked sections, allowing the reader to move through the diagnosis the way a real evaluation unfolds.",
  approachFr:
    "Structuré comme un Trust Architecture Diagnostic public avec plusieurs sections liées, afin que le lecteur avance dans le diagnostic comme une vraie évaluation se déroule.",
  statusEn: "Featured Diagnostic",
  statusFr: "Diagnostic principal",
};

const additionalDiagnostics: AdditionalDiagnosticItem[] = [
  // Add future public diagnostics here
  // Example:
  // {
  //   id: "client-example",
  //   href: "/private-diagnostics/client-example/index.html",
  //   titleEn: "Example Trust Architecture Diagnostic",
  //   titleFr: "Exemple de Trust Architecture Diagnostic",
  //   summaryEn: "Short summary in English.",
  //   summaryFr: "Résumé court en français.",
  //   statusEn: "Live Diagnostic",
  //   statusFr: "Diagnostic en ligne",
  // },
];

export default function DemonstrationAnalysesPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "La preuve · Analyses de démonstration",
          heroTitle:
            "Voyez la méthode sur un vrai diagnostic public, pas seulement dans une promesse.",
          heroSubtitle:
            "Cette page rassemble les diagnostics publics qui montrent comment Archoric lit la crédibilité, le risque acheteur, la conformité et la structure sur des entreprises réelles. Le but n’est pas de raconter une belle histoire. Le but est de rendre la méthode visible.",

          heroPrimaryCta: "Voir le diagnostic MedBridgePro",
          heroSecondaryCta: "Commencer par l’Audit",

          introTagline: "Pourquoi cette page existe",
          introTitle:
            "Vous ne devriez pas avoir à imaginer comment le diagnostic fonctionne.",
          introCards: [
            "Vous voyez comment Archoric pense sur un vrai cas.",
            "Vous voyez la logique avant d’acheter l’audit.",
            "Vous voyez la différence entre une belle copie et une vraie lecture structurelle.",
          ],

          explainerTagline: "Ce que cette page montre vraiment",
          explainerTitle:
            "Ici, la preuve ne prend pas la forme d’un faux cas client. Elle prend la forme d’un diagnostic public.",
          explainerBody: [
            "Un diagnostic public montre la manière dont Archoric lit un site réel : ce qu’il affirme, ce qu’il rend visible, où la confiance tient, où elle casse, et ce qu’un acheteur est naturellement poussé à conclure.",
            "C’est un format plus fidèle à ce que vous vendez aujourd’hui. Il montre la qualité du regard stratégique avant même qu’un prospect entre dans votre processus.",
          ],

          featuredTagline: "Diagnostic principal",
          featuredTitle:
            "MedBridgePro est désormais votre preuve publique la plus forte.",
          challengeLabel: "Pourquoi ce diagnostic existe",
          approachLabel: "Comment il a été structuré",
          readAnalysis: "Voir le diagnostic",

          additionalTagline: "Diagnostics suivants",
          additionalTitle:
            "Cette section est prête à accueillir les prochains diagnostics publics.",
          additionalEmpty:
            "Pour l’instant, MedBridgePro est le diagnostic public principal. Les prochains audits publics pourront être ajoutés ici sans changer toute la page.",

          distinctionTagline: "La distinction",
          distinctionTitle:
            "Un diagnostic public est aujourd’hui une preuve plus fidèle qu’une pseudo étude de cas.",
          distinctionLeftTitle: "Diagnostics publics",
          distinctionLeftPoints: [
            "Montrent directement la qualité du diagnostic",
            "Rendent visible la méthode Archoric",
            "Peuvent être publiés avant d’avoir des cas clients officiels",
            "Correspondent mieux à votre entrée par l’audit",
          ],
          distinctionRightTitle: "Études de cas classiques",
          distinctionRightPoints: [
            "Dépendent d’engagements clients publiables",
            "Montrent surtout l’après-coup",
            "Sont moins proches de votre logique d’entrée actuelle",
            "Peuvent venir plus tard sans remplacer ce format",
          ],

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Vous pouvez partir d’ici dans trois directions différentes.",
          routeSubtitle:
            "Voir la logique de catégorie, lire le cadre complet, ou revenir à l’offre d’audit selon votre niveau de conviction.",
          routeCards: [
            {
              title: "Comprendre la logique de catégorie",
              description:
                "Si vous voulez comprendre pourquoi la structure compte autant avant la copie, allez vers Architecture d’autorité.",
              href: "/authority-architecture",
              cta: "Voir l’architecture d’autorité",
            },
            {
              title: "Lire le cadre complet",
              description:
                "Si vous voulez comprendre ce qu’un engagement OAA construit après le diagnostic, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Commencer par votre propre audit",
              description:
                "Si votre vraie question est “où est-ce que cela casse chez nous ?”, revenez au TDA.",
              href: "/tda",
              cta: "Commencer par l’Audit",
            },
          ],

          finalTagline: "Commencez ici",
          finalTitle:
            "Quand la preuve publique vous montre déjà la méthode, le prochain pas logique est le diagnostic sur votre propre site.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Voir OAA",
        }
      : {
          heroTagline: "The Proof · Demonstration Analyses",
          heroTitle:
            "See the method on a real public diagnostic, not just inside a promise.",
          heroSubtitle:
            "This page brings together public diagnostics that show how Archoric reads credibility, buyer risk, compliance, and structure across real companies. The goal is not to tell a nice story. The goal is to make the method visible.",

          heroPrimaryCta: "See the MedBridgePro diagnostic",
          heroSecondaryCta: "Start with the Audit",

          introTagline: "Why This Page Exists",
          introTitle:
            "You should not have to imagine how the diagnostic works.",
          introCards: [
            "You see how Archoric thinks against a real case.",
            "You see the logic before buying the audit.",
            "You see the difference between polished copy and real structural reading.",
          ],

          explainerTagline: "What This Page Actually Shows",
          explainerTitle:
            "The proof here is not a fake client case study. It is a public diagnostic.",
          explainerBody: [
            "A public diagnostic shows how Archoric reads a real site: what it claims, what it makes visible, where trust holds, where it breaks, and what a buyer is naturally led to conclude.",
            "It is a more faithful format for what you sell now. It shows the quality of the strategic reading before a prospect ever enters your process.",
          ],

          featuredTagline: "Featured Diagnostic",
          featuredTitle:
            "MedBridgePro is now your strongest public proof asset.",
          challengeLabel: "Why this diagnostic exists",
          approachLabel: "How it was structured",
          readAnalysis: "See diagnostic",

          additionalTagline: "Next Diagnostics",
          additionalTitle:
            "This section is ready for the next public diagnostics.",
          additionalEmpty:
            "For now, MedBridgePro is the lead public diagnostic. Future public audits can be added here without rebuilding the whole page.",

          distinctionTagline: "The Distinction",
          distinctionTitle:
            "A public diagnostic is now a better proof format than a pseudo case study.",
          distinctionLeftTitle: "Public diagnostics",
          distinctionLeftPoints: [
            "Show the quality of the diagnostic directly",
            "Make the Archoric method visible",
            "Can be published before official client case studies exist",
            "Match your audit-first entry logic better",
          ],
          distinctionRightTitle: "Classic case studies",
          distinctionRightPoints: [
            "Depend on publishable client engagements",
            "Mostly show the after-the-fact story",
            "Are less aligned with your current entry logic",
            "Can come later without replacing this format",
          ],

          routeTagline: "Where To Go Next",
          routeTitle: "You can move in three different directions from here.",
          routeSubtitle:
            "See the category logic, read the full framework, or return to the audit offer depending on your level of conviction.",
          routeCards: [
            {
              title: "Understand the category logic",
              description:
                "If you want to understand why structure matters so much before copy, go to Authority Architecture.",
              href: "/authority-architecture",
              cta: "See Authority Architecture",
            },
            {
              title: "Read the full framework",
              description:
                "If you want to understand what an OAA engagement builds after the diagnostic, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "Start your own audit",
              description:
                "If your real question is ‘where is this breaking for us?’, go back to the TDA.",
              href: "/tda",
              cta: "Start with the Audit",
            },
          ],

          finalTagline: "Start Here",
          finalTitle:
            "When public proof already shows the method, the next logical step is the diagnostic on your own site.",
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
            <div className="max-w-4xl rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.heroTagline}
              </p>

              <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                {copy.heroTitle}
              </h1>

              <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[#2f3e36]">
                {copy.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href={featuredDiagnostic.href}>{copy.heroPrimaryCta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/tda">{copy.heroSecondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro cards */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.introTagline}
              </p>
              <h2 className="mb-10 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.introTitle}
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {copy.introCards.map((card, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/38 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {card}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What this page shows */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.explainerTagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.explainerTitle}
                </h2>

                <div className="flex flex-col gap-5">
                  {copy.explainerBody.map((paragraph, index) => (
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
                  {locale === "fr" ? "Ce que cela vous donne" : "What This Gives You"}
                </p>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Une preuve publique directe de la méthode."
                        : "Direct public proof of the method."}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Une meilleure démonstration que l’ancien format TherapyNotes."
                        : "A stronger demonstration than the older TherapyNotes format."}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-black/8 bg-white/65 px-5 py-5">
                    <p className="text-sm font-semibold text-[#163629]">
                      {locale === "fr"
                        ? "Une structure prête pour accueillir les prochains diagnostics publics."
                        : "A structure ready for future public diagnostics."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured diagnostic */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.featuredTagline}
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.featuredTitle}
              </h2>
            </div>

            <article className="rounded-[28px] border border-black/8 bg-white/38 p-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:p-10">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {locale === "fr"
                      ? featuredDiagnostic.categoryFr
                      : featuredDiagnostic.categoryEn}
                  </p>
                  <h3 className="mb-4 text-2xl font-black tracking-tight text-[#163629] md:text-3xl">
                    {featuredDiagnostic.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#2f3e36]">
                    {locale === "fr"
                      ? featuredDiagnostic.summaryFr
                      : featuredDiagnostic.summaryEn}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-full border border-black/8 bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-xl">
                    {locale === "fr"
                      ? featuredDiagnostic.statusFr
                      : featuredDiagnostic.statusEn}
                  </span>
                </div>
              </div>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {copy.challengeLabel}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#2f3e36]">
                    {locale === "fr"
                      ? featuredDiagnostic.challengeFr
                      : featuredDiagnostic.challengeEn}
                  </p>
                </div>

                <div className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {copy.approachLabel}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#2f3e36]">
                    {locale === "fr"
                      ? featuredDiagnostic.approachFr
                      : featuredDiagnostic.approachEn}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href={featuredDiagnostic.href}>{copy.readAnalysis}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/tda">
                    {locale === "fr"
                      ? "Commencer par l’Audit"
                      : "Start with the Audit"}
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Additional diagnostics */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-10 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.additionalTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.additionalTitle}
                </h2>
              </div>

              {additionalDiagnostics.length === 0 ? (
                <div className="rounded-[22px] border border-dashed border-black/12 bg-white/30 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                  <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                    {copy.additionalEmpty}
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {additionalDiagnostics.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                    >
                      <h3 className="mb-4 text-xl font-black tracking-tight text-[#163629]">
                        {locale === "fr" ? item.titleFr : item.titleEn}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                        {locale === "fr" ? item.summaryFr : item.summaryEn}
                      </p>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-[#163629] transition-colors hover:text-[#2D5A27]"
                      >
                        {copy.readAnalysis}
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Distinction */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.distinctionTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.distinctionTitle}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h3 className="mb-5 text-xl font-black tracking-tight text-[#163629]">
                    {copy.distinctionLeftTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.distinctionLeftPoints.map((point, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-dashed border-black/12 bg-white/30 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                  <h3 className="mb-5 text-xl font-black tracking-tight text-[#163629]">
                    {copy.distinctionRightTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.distinctionRightPoints.map((point, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
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
                  {copy.routeTagline}
                </p>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.routeTitle}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                  {copy.routeSubtitle}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {copy.routeCards.map((card, index) => (
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
                {copy.finalTagline}
              </p>
              <h2 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.finalTitle}
              </h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{copy.finalPrimaryCta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/oaa">{copy.finalSecondaryCta}</Link>
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