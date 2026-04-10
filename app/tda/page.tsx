"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TDA() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "L’offre · Trust Deficit Audit",
          heroTitle:
            "Voyez exactement où votre site perd la confiance avant que cela ne casse l’évaluation.",
          heroSubtitle:
            "Le TDA n’est pas un appel découverte déguisé. C’est un diagnostic stratégique payant conçu pour montrer où votre structure affaiblit la crédibilité, ralentit l’évaluation acheteur et empêche votre contenu de se capitaliser.",

          heroPrimaryCta: "Nous Contacter Pour l’Audit",
          heroSecondaryCta: "Voir OAA",

          problemTagline: "Pourquoi commencer ici",
          problemTitle:
            "Si votre site ne réduit pas le risque perçu rapidement, vos acheteurs s’arrêtent avant l’essai.",
          problemCards: [
            "Vous publiez, mais la confiance ne s’accumule pas.",
            "Votre conformité est mentionnée, mais pas démontrée là où l’acheteur doute vraiment.",
            "Votre site donne des informations, mais pas assez de conviction pour faire avancer l’évaluation.",
          ],

          whatItIsTagline: "Ce que vous achetez",
          whatItIsTitle:
            "Vous n’achetez pas une opinion vague. Vous achetez une lecture structurée de vos faiblesses de confiance.",
          whatItIsBody: [
            "Le TDA montre où votre système se fragilise : ce que vous affirmez, ce que vos pages rendent visible, ce que votre structure renforce, et ce qu’un acheteur conclut réellement en vous évaluant.",
            "L’objectif n’est pas de vous donner plus de tâches. L’objectif est de vous montrer où votre crédibilité fuit et dans quel ordre corriger les choses.",
          ],

          panelTagline: "Derrière l’Audit",
          panelPoints: [
            "TDA = l’audit présenté au client",
            "TAD = le cadre diagnostique derrière l’audit",
            "Vous voyez les faiblesses structurelles avant qu’elles ne coûtent plus cher",
          ],

          reviewTagline: "Ce que nous examinons",
          reviewTitle:
            "Le premier passage de l’audit lit à la fois la surface visible du site et la structure sous-jacente.",
          reviewIntro:
            "Le diagnostic ne se limite pas à lire quelques pages. Il lit aussi la manière dont ces pages se relient, se renforcent ou se contredisent.",

          surfaceLabel: "Couche 1 · Surface visible",
          surfaceTitle: "Les pages où l’acheteur évalue votre sérieux",
          surfaceItems: [
            "Homepage",
            "Features / product pages",
            "Security / privacy / compliance",
            "Integrations / API",
            "About / team / author pages",
            "Case studies / testimonials",
            "Key blog / resource pages",
            "Contact / demo / onboarding pages",
          ],

          structureLabel: "Couche 2 · Structure sous-jacente",
          structureTitle: "Le système qui soutient ou fragmente la confiance",
          structureItems: [
            "Internal linking",
            "All inlinks",
            "Orphan pages",
            "Sitemap XML",
            "Content inventory",
            "Page titles",
            "H1 structure",
            "Issues overview",
            "Structured data errors",
            "Indexability",
            "Canonicals",
            "Redirects",
            "Crawl depth",
          ],

          auditTagline: "Ce que l’audit cherche à révéler",
          auditTitle:
            "Le diagnostic ne cherche pas seulement des signaux SEO. Il cherche les points où la confiance casse.",
          auditItems: [
            {
              title: "Confiance réglementaire",
              description:
                "Votre site montre-t-il une vraie compréhension du terrain réglementaire ou seulement un langage de réassurance ?",
            },
            {
              title: "Crédibilité opérationnelle",
              description:
                "Votre structure rend-elle visible une compréhension réaliste de l’environnement Healthcare SaaS ?",
            },
            {
              title: "Validation et preuve",
              description:
                "La preuve est-elle placée là où le doute apparaît, ou reste-t-elle isolée et décorative ?",
            },
            {
              title: "Autorité structurelle",
              description:
                "Vos pages renforcent-elles une même conclusion ou laissent-elles l’acheteur assembler seul le sens ?",
            },
          ],

          deliverableTagline: "Ce que vous recevez",
          deliverableTitle:
            "L’audit vous laisse avec un livrable exploitable, pas avec une impression générale.",
          deliverables: [
            "Un scorecard diagnostique rédigé",
            "Une carte priorisée des écarts",
            "Une lecture claire de ce qui affaiblit votre crédibilité",
            "Un ordre de correction logique",
            "Une base solide pour décider si un engagement OAA est nécessaire",
          ],

          decisionTagline: "Ce que cela vous aide à décider",
          decisionTitle:
            "Le but n’est pas seulement de nommer le problème. Le but est de décider plus clairement.",
          decisionItems: [
            "si le vrai problème vient du message, de la structure ou de la preuve",
            "quelles pages ou couches fragilisent réellement l’évaluation",
            "ce qu’il faut corriger en premier",
            "si un engagement plus profond comme OAA est justifié",
          ],

          pricingTagline: "Prix et logique d’entrée",
          pricingTitle:
            "Le TDA est un produit. Pas un prétexte pour vous vendre quelque chose à l’aveugle.",
          pricingBody: [
            "Prix : 3 000 €",
            "Si vous poursuivez avec un engagement OAA dans les 30 jours, ce montant est crédité en intégralité",
            "Vous commencez donc par la clarté, pas par une proposition floue",
          ],

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Vous pouvez partir de trois besoins différents à partir d’ici.",
          routeSubtitle:
            "Si vous voulez comprendre la logique, voir la preuve ou lire le cadre avant de décider, voici les chemins utiles.",
          routeCards: [
            {
              title: "Comprendre la logique",
              description:
                "Si vous voulez voir pourquoi la structure compte autant avant le contenu, allez vers Architecture d’autorité.",
              href: "/authority-architecture",
              cta: "Voir l’architecture d’autorité",
            },
            {
              title: "Voir la preuve",
              description:
                "Si vous voulez voir cette logique appliquée à un site réel, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Lire le cadre",
              description:
                "Si vous voulez comprendre ce qu’un engagement OAA construit après l’audit, allez vers la page OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
          ],

          finalTagline: "Commencez ici",
          finalTitle:
            "Avant de demander plus de contenu, vérifiez d’abord si votre structure mérite d’être renforcée.",
          finalPrimaryCta: "Nous Contacter Pour l'Audit",
          finalSecondaryCta: "Voir OAA",
        }
      : {
          heroTagline: "The Offer · Trust Deficit Audit",
          heroTitle:
            "See exactly where your site is losing trust before it breaks evaluation.",
          heroSubtitle:
            "The TDA is not a disguised discovery call. It is a paid strategic diagnostic built to show where your structure weakens credibility, slows buyer evaluation, and prevents your content from compounding.",

          heroPrimaryCta: " Contact Us For Your Audit",
          heroSecondaryCta: "See OAA",

          problemTagline: "Why Start Here",
          problemTitle:
            "If your site does not reduce perceived risk quickly, buyers stop before the trial.",
          problemCards: [
            "You publish, but trust does not accumulate.",
            "Your compliance is mentioned, but not demonstrated where the buyer is actually doubting.",
            "Your site provides information, but not enough conviction to move evaluation forward.",
          ],

          whatItIsTagline: "What You’re Buying",
          whatItIsTitle:
            "You are not buying a vague opinion. You are buying a structured read of your trust weaknesses.",
          whatItIsBody: [
            "The TDA shows where your system is weakening: what you claim, what your pages make visible, what your structure reinforces, and what a buyer is actually led to conclude while evaluating you.",
            "The goal is not to give you more tasks. The goal is to show you where credibility is leaking and in what order to fix it.",
          ],

          panelTagline: "Behind The Audit",
          panelPoints: [
            "TDA = the client-facing audit",
            "TAD = the diagnostic engine behind the audit",
            "You see structural weaknesses before they become more expensive",
          ],

          reviewTagline: "What We Review",
          reviewTitle:
            "The first pass of the audit reads both the visible trust surface and the underlying site structure.",
          reviewIntro:
            "The diagnostic does not only read a few pages. It also reads the way those pages connect, reinforce each other, or fragment the buyer’s confidence.",

          surfaceLabel: "Layer 1 · Visible surface",
          surfaceTitle: "The pages where the buyer evaluates your seriousness",
          surfaceItems: [
            "Homepage",
            "Features / product pages",
            "Security / privacy / compliance",
            "Integrations / API",
            "About / team / author pages",
            "Case studies / testimonials",
            "Key blog / resource pages",
            "Contact / demo / onboarding pages",
          ],

          structureLabel: "Layer 2 · Underlying structure",
          structureTitle: "The system that supports or fragments trust",
          structureItems: [
            "Internal linking",
            "All inlinks",
            "Orphan pages",
            "Sitemap XML",
            "Content inventory",
            "Page titles",
            "H1 structure",
            "Issues overview",
            "Structured data errors",
            "Indexability",
            "Canonicals",
            "Redirects",
            "Crawl depth",
          ],

          auditTagline: "What The Audit Is Trying To Reveal",
          auditTitle:
            "The diagnostic is not just looking for SEO signals. It is looking for the points where trust breaks.",
          auditItems: [
            {
              title: "Regulatory trust",
              description:
                "Does your site show real regulatory fluency, or does it only use reassurance language?",
            },
            {
              title: "Operational credibility",
              description:
                "Does your structure make a realistic understanding of the Healthcare SaaS environment visible?",
            },
            {
              title: "Validation and proof",
              description:
                "Is proof placed where doubt appears, or does it remain isolated and decorative?",
            },
            {
              title: "Structural authority",
              description:
                "Do your pages reinforce the same conclusion, or do they force the buyer to assemble the meaning alone?",
            },
          ],

          deliverableTagline: "What You Receive",
          deliverableTitle:
            "The audit leaves you with something usable, not a general impression.",
          deliverables: [
            "A written diagnostic scorecard",
            "A prioritized gap map",
            "A clear read of what is weakening your credibility",
            "A logical order of correction",
            "A solid base for deciding whether an OAA engagement is necessary",
          ],

          decisionTagline: "What This Helps You Decide",
          decisionTitle:
            "The point is not only to name the problem better. The point is to decide more clearly.",
          decisionItems: [
            "whether the real issue is messaging, structure, or proof",
            "which pages or layers are actually weakening evaluation",
            "what to fix first",
            "whether deeper work like OAA is justified",
          ],

          pricingTagline: "Pricing And Entry Logic",
          pricingTitle:
            "The TDA is a product. Not a pretext to sell you something blind.",
          pricingBody: [
            "Price: €3,000",
            "If you move forward with an OAA engagement within 30 days, that amount is credited in full",
            "So you start with clarity, not with a vague proposal",
          ],

          routeTagline: "Where To Go Next",
          routeTitle:
            "You can move in three different directions from here.",
          routeSubtitle:
            "If you want to understand the logic, see proof, or read the framework before deciding, these are the useful paths.",
          routeCards: [
            {
              title: "Understand the logic",
              description:
                "If you want to see why structure matters so much before content, go to Authority Architecture.",
              href: "/authority-architecture",
              cta: "See Authority Architecture",
            },
            {
              title: "See the proof",
              description:
                "If you want to see this logic applied against a real site, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Read the framework",
              description:
                "If you want to understand what an OAA engagement builds after the audit, go to the OAA page.",
              href: "/oaa",
              cta: "See OAA",
            },
          ],

          finalTagline: "Start Here",
          finalTitle:
            "Before asking for more content, check whether your structure is worth strengthening first.",
          finalPrimaryCta: "Contact Us for Your Audit",
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
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.heroTagline}
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                {copy.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#2f3e36]">
                {copy.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/contact">{copy.heroPrimaryCta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/oaa">{copy.heroSecondaryCta}</Link>
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
                {copy.problemTagline}
              </p>
              <h2 className="mb-10 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.problemTitle}
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {copy.problemCards.map((card, index) => (
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

        {/* What you are buying */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.whatItIsTagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.whatItIsTitle}
                </h2>

                <div className="flex flex-col gap-5">
                  {copy.whatItIsBody.map((paragraph, index) => (
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
                  {copy.panelTagline}
                </p>
                <div className="flex flex-col gap-4">
                  {copy.panelPoints.map((point, index) => (
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

        {/* Review layers */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.reviewTagline}
                </p>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.reviewTitle}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                  {copy.reviewIntro}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[24px] border border-black/8 bg-white/40 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {copy.surfaceLabel}
                  </p>
                  <h3 className="mb-5 text-2xl font-black tracking-tight text-[#163629]">
                    {copy.surfaceTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.surfaceItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-black/8 bg-white/40 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {copy.structureLabel}
                  </p>
                  <h3 className="mb-5 text-2xl font-black tracking-tight text-[#163629]">
                    {copy.structureTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.structureItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit layers */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.auditTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.auditTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {copy.auditItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <h3 className="mb-4 text-xl font-black tracking-tight text-[#163629]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-black/8 bg-[#e9efe8]/70 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-12">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.deliverableTagline}
                </p>
                <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.deliverableTitle}
                </h2>
              </div>

              <div className="grid gap-4">
                {copy.deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/38 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="text-sm font-semibold leading-relaxed text-[#163629] md:text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Decision support */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.decisionTagline}
              </p>
              <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.decisionTitle}
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {copy.decisionItems.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-black/8 bg-white/38 px-5 py-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.pricingTagline}
              </p>
              <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.pricingTitle}
              </h2>

              <div className="grid gap-5 md:grid-cols-3">
                {copy.pricingBody.map((paragraph, index) => (
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
                  <Link href="/contact">{copy.finalPrimaryCta}</Link>
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