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
  titleEn: string;
  titleFr: string;
  summaryEn: string;
  summaryFr: string;
  scoreEn: string;
  scoreFr: string;
  leakageEn: string;
  leakageFr: string;
  bottleneckEn: string;
  bottleneckFr: string;
  proofEn: string;
  proofFr: string;
  statusEn: string;
  statusFr: string;
  isFeatured?: boolean;
};

const diagnostics: DiagnosticItem[] = [
  {
    id: "client-medbridgepro",
    href: "/private-diagnostics/client-medbridgepro/index.html",
    categoryEn: "Healthcare SaaS · Public Diagnostic",
    categoryFr: "Healthcare SaaS · Diagnostic public",
    titleEn: "MedBridgePro Trust Architecture Diagnostic",
    titleFr: "Diagnostic d’Architecture de Confiance MedBridgePro",
    summaryEn:
      "A public-facing diagnostic showing how Archoric reads trust leakage, buyer friction, structural authority, and validation weakness across a real Healthcare SaaS company.",
    summaryFr:
      "Un diagnostic public montrant comment Archoric lit les fuites de confiance, la friction acheteur, l’autorité structurelle et la faiblesse de validation à travers une vraie entreprise Healthcare SaaS.",
    scoreEn: "12.5/20 · Moderate Trust",
    scoreFr: "12,5/20 · Confiance modérée",
    leakageEn: "44% estimated leakage",
    leakageFr: "44 % de fuite estimée",
    bottleneckEn: "Trust framing deficiency",
    bottleneckFr: "Déficit de cadrage de confiance",
    proofEn:
      "Shows how a product-centric site can still lose conviction when validation and proof are too thin at decision stage.",
    proofFr:
      "Montre comment un site centré produit peut encore perdre en conviction quand la validation et la preuve restent trop faibles au moment de décider.",
    statusEn: "Featured Diagnostic",
    statusFr: "Diagnostic principal",
    isFeatured: true,
  },
  {
    id: "client-clinicflow",
    href: "/private-diagnostics/client-clinicflow/index.html",
    categoryEn: "Healthcare SaaS · Public Diagnostic",
    categoryFr: "Healthcare SaaS · Diagnostic public",
    titleEn: "ClinicFlow Trust Architecture Diagnostic",
    titleFr: "Diagnostic d’Architecture de Confiance ClinicFlow",
    summaryEn:
      "A public diagnostic showing a site with decent structural order but weak proof density, under-contextualized compliance, and unfinished trust maturity.",
    summaryFr:
      "Un diagnostic public montrant un site avec une structure plutôt cohérente mais une preuve faible, une conformité sous-contextualisée et une maturité de confiance encore incomplète.",
    scoreEn: "12/20 · Moderate Trust",
    scoreFr: "12/20 · Confiance modérée",
    leakageEn: "27% estimated leakage",
    leakageFr: "27 % de fuite estimée",
    bottleneckEn: "General trust immaturity",
    bottleneckFr: "Immaturité générale de la confiance",
    proofEn:
      "Shows how a structurally coherent site can still lose momentum when validation and proof packaging remain underdeveloped.",
    proofFr:
      "Montre comment un site structurellement cohérent peut encore perdre en momentum quand la validation et l’emballage de preuve restent sous-développés.",
    statusEn: "Live Diagnostic",
    statusFr: "Diagnostic en ligne",
  },
  {
    id: "client-theracare",
    href: "/private-diagnostics/client-theracare/index.html",
    categoryEn: "Healthcare SaaS · Public Diagnostic",
    categoryFr: "Healthcare SaaS · Diagnostic public",
    titleEn: "TheraCare Trust Architecture Diagnostic",
    titleFr: "Diagnostic d’Architecture de Confiance TheraCare",
    summaryEn:
      "A public diagnostic showing how compliance-heavy positioning can still fail when operational translation, proof, and structural authority remain too weak.",
    summaryFr:
      "Un diagnostic public montrant comment un positionnement très centré conformité peut encore échouer quand la traduction opérationnelle, la preuve et l’autorité structurelle restent trop faibles.",
    scoreEn: "9/20 · Fragile Trust",
    scoreFr: "9/20 · Confiance fragile",
    leakageEn: "44% estimated leakage",
    leakageFr: "44 % de fuite estimée",
    bottleneckEn: "Operational translation deficit",
    bottleneckFr: "Déficit de traduction opérationnelle",
    proofEn:
      "Shows how visible safety language is not enough when buyers still cannot see workflow fit, structural stability, or convincing external proof.",
    proofFr:
      "Montre qu’un langage de sécurité visible ne suffit pas quand l’acheteur ne voit toujours ni l’adéquation opérationnelle, ni la stabilité structurelle, ni une preuve externe convaincante.",
    statusEn: "Live Diagnostic",
    statusFr: "Diagnostic en ligne",
  },
];

export default function DemonstrationAnalysesPage() {
  const { locale } = useLocale();

  const featuredDiagnostic = diagnostics.find((item) => item.isFeatured)!;
  const additionalDiagnostics = diagnostics.filter((item) => !item.isFeatured);

  const copy =
    locale === "fr"
      ? {
          heroTagline: "La preuve · Analyses de démonstration",
          heroTitle:
            "Voyez ce que la méthode révèle sur de vraies entreprises, pas seulement comment elle est décrite.",
          heroSubtitle:
            "Cette page rassemble des diagnostics publics qui rendent la méthode Archoric visible. Vous pouvez y inspecter comment la confiance se forme, où elle casse, et comment cette rupture se traduit en friction acheteur, en perte de momentum et en priorités de récupération.",

          heroPrimaryCta: "Voir le diagnostic MedBridgePro",
          heroSecondaryCta: "Commencer par l’Audit",

          introTagline: "Pourquoi cette page existe",
          introTitle:
            "Vous ne devriez pas avoir à imaginer comment le diagnostic fonctionne.",
          introCards: [
            "Vous voyez comment Archoric lit une entreprise réelle.",
            "Vous voyez la méthode avant d’acheter l’audit.",
            "Vous voyez ce qu’un diagnostic révèle concrètement, pas seulement la manière dont il est décrit.",
          ],

          explainerTagline: "Ce que cette page vous permet de vérifier",
          explainerTitle:
            "Ici, la preuve ne prend pas la forme d’une promesse. Elle prend la forme d’un diagnostic inspectable.",
          explainerBody: [
            "Chaque diagnostic public permet de vérifier comment Archoric lit la structure visible d’un site, ses couches de confiance, ses points de rupture, et la manière dont ces faiblesses se traduisent en friction commerciale.",
            "Vous ne voyez pas seulement un cadre. Vous voyez un score, une fuite estimée, un bottleneck principal, une logique de récupération, et la manière dont le diagnostic transforme cela en lecture exploitable.",
          ],

          proofTagline: "Ce que vous pouvez voir dedans",
          proofPoints: [
            "Un trust score global",
            "Une estimation de trust leakage",
            "Une lecture des quatre couches de confiance",
            "Une friction map à travers le parcours acheteur",
            "Une traduction en impact commercial",
            "Une recovery roadmap priorisée",
          ],

          featuredTagline: "Diagnostic principal",
          featuredTitle:
            "MedBridgePro est aujourd’hui votre preuve publique la plus forte.",
          readAnalysis: "Voir le diagnostic",
          startAudit: "Commencer par l’Audit",
          trustScoreLabel: "Trust score",
          estimatedLeakageLabel: "Fuite estimée",
          bottleneckLabel: "Bottleneck principal",

          additionalTagline: "Diagnostics suivants",
          additionalTitle:
            "Les prochains diagnostics publics étendent la preuve au lieu de la répéter.",
          additionalSubtitle:
            "Chaque diagnostic montre une forme différente de faiblesse structurelle, ce qui rend la méthode plus crédible qu’un simple exemple unique.",

          distinctionTagline: "La distinction",
          distinctionTitle:
            "Un diagnostic public vous montre mieux la méthode qu’une pseudo étude de cas.",
          distinctionLeftTitle: "Diagnostics publics",
          distinctionLeftPoints: [
            "Montrent directement la qualité du diagnostic",
            "Rendent visible la lecture stratégique",
            "Peuvent être publiés avant des cas clients officiels",
            "Correspondent mieux à une entrée par l’audit",
          ],
          distinctionRightTitle: "Études de cas classiques",
          distinctionRightPoints: [
            "Dépendent d’engagements clients publiables",
            "Montrent surtout l’après-coup",
            "Disent moins comment le diagnostic fonctionne",
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
            "See what the method reveals on real companies, not just how it is described.",
          heroSubtitle:
            "This page brings together public diagnostics that make the Archoric method visible. You can inspect how trust forms, where it breaks, and how that breakdown translates into buyer friction, lost momentum, and recovery priorities.",

          heroPrimaryCta: "See the MedBridgePro diagnostic",
          heroSecondaryCta: "Start with the Audit",

          introTagline: "Why This Page Exists",
          introTitle:
            "You should not have to imagine how the diagnostic works.",
          introCards: [
            "You see how Archoric reads a real company.",
            "You see the method before buying the audit.",
            "You see what a diagnostic actually reveals, not just how it is described.",
          ],

          explainerTagline: "What This Lets You Verify",
          explainerTitle:
            "The proof here is not a promise. It is an inspectable diagnostic.",
          explainerBody: [
            "Each public diagnostic lets you verify how Archoric reads a site’s visible structure, its trust layers, its break points, and the way those weaknesses translate into commercial friction.",
            "You do not just see a framework. You see a trust score, an estimated leakage level, a primary bottleneck, a recovery logic, and the way the diagnostic turns that into an actionable reading.",
          ],

          proofTagline: "What You Can Inspect Inside",
          proofPoints: [
            "A global trust score",
            "An estimated trust leakage level",
            "A reading of the four trust layers",
            "A friction map across the buyer journey",
            "A commercial translation layer",
            "A prioritized recovery sequence",
          ],

          featuredTagline: "Featured Diagnostic",
          featuredTitle:
            "MedBridgePro is now your strongest public proof asset.",
          readAnalysis: "See diagnostic",
          startAudit: "Start with the Audit",
          trustScoreLabel: "Trust score",
          estimatedLeakageLabel: "Estimated leakage",
          bottleneckLabel: "Primary bottleneck",

          additionalTagline: "Next Diagnostics",
          additionalTitle:
            "The next public diagnostics extend the proof instead of repeating it.",
          additionalSubtitle:
            "Each diagnostic shows a different kind of structural weakness, which makes the method more credible than relying on a single example.",

          distinctionTagline: "The Distinction",
          distinctionTitle:
            "A public diagnostic shows the method better than a pseudo case study does.",
          distinctionLeftTitle: "Public diagnostics",
          distinctionLeftPoints: [
            "Show the quality of the diagnostic directly",
            "Make the strategic reading visible",
            "Can be published before official client case studies exist",
            "Fit an audit-first entry point better",
          ],
          distinctionRightTitle: "Classic case studies",
          distinctionRightPoints: [
            "Depend on publishable client engagements",
            "Mostly show the after-the-fact story",
            "Say less about how the diagnostic works",
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
                  {copy.proofTagline}
                </p>

                <div className="flex flex-col gap-4">
                  {copy.proofPoints.map((point, index) => (
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
            </div>
          </div>
        </section>

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
                    {locale === "fr"
                      ? featuredDiagnostic.titleFr
                      : featuredDiagnostic.titleEn}
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

              <div className="mb-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {copy.trustScoreLabel}
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-[#163629]">
                    {locale === "fr"
                      ? featuredDiagnostic.scoreFr
                      : featuredDiagnostic.scoreEn}
                  </p>
                </div>

                <div className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {copy.estimatedLeakageLabel}
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-[#163629]">
                    {locale === "fr"
                      ? featuredDiagnostic.leakageFr
                      : featuredDiagnostic.leakageEn}
                  </p>
                </div>

                <div className="rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {copy.bottleneckLabel}
                  </h4>
                  <p className="text-sm font-semibold leading-relaxed text-[#163629]">
                    {locale === "fr"
                      ? featuredDiagnostic.bottleneckFr
                      : featuredDiagnostic.bottleneckEn}
                  </p>
                </div>
              </div>

              <div className="mb-8 rounded-[20px] border border-black/8 bg-white/34 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                  {locale === "fr"
                    ? featuredDiagnostic.proofFr
                    : featuredDiagnostic.proofEn}
                </p>
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
                  <Link href="/tda">{copy.startAudit}</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-10 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.additionalTagline}
                </p>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.additionalTitle}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                  {copy.additionalSubtitle}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {additionalDiagnostics.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-black tracking-tight text-[#163629]">
                        {locale === "fr" ? item.titleFr : item.titleEn}
                      </h3>
                      <span className="inline-flex items-center rounded-full border border-black/8 bg-white/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                        {locale === "fr" ? item.statusFr : item.statusEn}
                      </span>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {locale === "fr" ? item.summaryFr : item.summaryEn}
                    </p>

                    <div className="mb-5 flex flex-col gap-2">
                      <p className="text-sm font-semibold text-[#163629]">
                        {locale === "fr" ? item.scoreFr : item.scoreEn}
                      </p>
                      <p className="text-sm font-semibold text-[#163629]">
                        {locale === "fr" ? item.leakageFr : item.leakageEn}
                      </p>
                      <p className="text-sm text-[#2f3e36]">
                        {locale === "fr" ? item.bottleneckFr : item.bottleneckEn}
                      </p>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {locale === "fr" ? item.proofFr : item.proofEn}
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
            </div>
          </div>
        </section>

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