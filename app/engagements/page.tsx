"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EngagementPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "L’engagement · Travailler avec Archoric",
          heroTitle:
            "Vous n’avez pas besoin d’un menu de services. Vous avez besoin du bon point d’entrée, puis du bon système.",
          heroSubtitle:
            "Archoric ne commence pas par une proposition vague. Le point d’entrée normal est le TDA. Ensuite, si le diagnostic montre qu’un travail plus profond est justifié, OAA devient le système de reconstruction.",

          heroPrimaryCta: "Voir le TDA",
          heroSecondaryCta: "Voir OAA",

          introTagline: "Comment cela fonctionne",
          introTitle:
            "Le travail avec Archoric suit une progression simple et lisible.",
          introCards: [
            "Vous commencez par clarifier où la confiance s’affaiblit.",
            "Vous évitez de construire ou corriger à l’aveugle.",
            "Vous avancez ensuite vers un travail plus profond seulement si le diagnostic le justifie.",
          ],

          stageTagline: "Les deux étapes",
          stageTitle:
            "Le point d’entrée et l’engagement plus profond ne sont pas la même chose.",

          stage1Label: "Étape 1",
          stage1Title: "TDA · Trust Deficit Audit",
          stage1Text:
            "Le TDA est l’offre d’entrée. C’est le diagnostic payant qui montre où votre site perd en crédibilité, où la structure affaiblit l’évaluation acheteur, et dans quel ordre les problèmes doivent être traités.",
          stage1Points: [
            "montre où la confiance casse",
            "clarifie si le problème vient du message, de la structure, de la preuve ou du risque perçu",
            "aide à décider quoi corriger en premier",
            "crée une base avant toute exécution",
          ],

          stage2Label: "Étape 2",
          stage2Title: "OAA · Organic Authority Architecture",
          stage2Text:
            "Si le diagnostic montre qu’une vraie reconstruction est nécessaire, OAA devient l’engagement plus profond. C’est là que la structure, les territoires, la preuve, les signaux réglementaires et le routing d’autorité sont reconstruits en système.",
          stage2Points: [
            "intervient après le diagnostic",
            "transforme les constats en système",
            "organise crédibilité, preuve et progression",
            "donne une séquence de construction cohérente",
          ],

          panelTagline: "Ce que cela évite",
          panelPoints: [
            "commencer trop tôt par l’exécution",
            "acheter une recommandation floue",
            "empiler du contenu sans corriger la faiblesse structurelle",
          ],

          practicalTagline: "Ce que cela vous donne concrètement",
          practicalTitle:
            "Le but n’est pas seulement de mieux nommer le problème. Le but est de mieux décider.",
          practicalItems: [
            "une meilleure lecture de ce qui ralentit réellement l’évaluation",
            "une vue plus claire de ce qu’il faut corriger en premier",
            "une distinction plus nette entre problème de message et problème de structure",
            "une base plus crédible pour décider si un travail plus profond est nécessaire",
          ],

          fitTagline: "Quand ce travail est le plus utile",
          fitTitle:
            "Ce mode d’engagement est particulièrement fort quand votre entreprise doit être crue avant d’être choisie.",
          fitItems: [
            "logiciels vendus à des cliniques, cabinets ou opérateurs de soins",
            "cycle de vente freiné par la confiance, la conformité ou le risque perçu",
            "site qui décrit le produit sans assez sécuriser l’acheteur",
            "besoin d’un système, pas d’une série d’actions isolées",
          ],

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Vous pouvez utiliser cette page pour comprendre, vérifier ou avancer.",
          routeCards: [
            {
              title: "Commencer par le diagnostic",
              description:
                "Si vous voulez voir le vrai point d’entrée, allez vers le TDA.",
              href: "/tda",
              cta: "Voir le TDA",
            },
            {
              title: "Voir le système complet",
              description:
                "Si vous voulez comprendre ce qu’OAA construit après le diagnostic, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve publique",
              description:
                "Si vous voulez voir comment la méthode se manifeste sur un vrai diagnostic, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
          ],

          finalTagline: "Commencez ici",
          finalTitle:
            "Le meilleur engagement commence rarement par une exécution immédiate. Il commence par le bon diagnostic.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Nous contacter",
        }
      : {
          heroTagline: "The Engagement · Work with Archoric",
          heroTitle:
            "You do not need a services menu. You need the right entry point, then the right system.",
          heroSubtitle:
            "Archoric does not begin with a vague proposal. The normal entry point is the TDA. Then, if the diagnostic shows deeper work is justified, OAA becomes the reconstruction system.",

          heroPrimaryCta: "See the TDA",
          heroSecondaryCta: "See OAA",

          introTagline: "How It Works",
          introTitle:
            "Working with Archoric follows a simple, readable progression.",
          introCards: [
            "You begin by clarifying where trust is weakening.",
            "You avoid building or fixing blind.",
            "You move into deeper work only if the diagnostic justifies it.",
          ],

          stageTagline: "The Two Stages",
          stageTitle:
            "The entry point and the deeper engagement are not the same thing.",

          stage1Label: "Stage 1",
          stage1Title: "TDA · Trust Deficit Audit",
          stage1Text:
            "The TDA is the entry offer. It is the paid diagnostic that shows where your site is losing credibility, where structure is weakening buyer evaluation, and in what order problems should be addressed.",
          stage1Points: [
            "shows where trust is breaking",
            "clarifies whether the issue is messaging, structure, proof, or perceived risk",
            "helps decide what to fix first",
            "creates a base before execution",
          ],

          stage2Label: "Stage 2",
          stage2Title: "OAA · Organic Authority Architecture",
          stage2Text:
            "If the diagnostic shows that a real rebuild is needed, OAA becomes the deeper engagement. This is where structure, territories, proof, regulatory signals, and authority routing are rebuilt into a coherent system.",
          stage2Points: [
            "comes after the diagnostic",
            "turns findings into a system",
            "organizes credibility, proof, and progression",
            "provides a coherent build sequence",
          ],

          panelTagline: "What This Avoids",
          panelPoints: [
            "starting execution too early",
            "buying a vague recommendation",
            "publishing more content without fixing the structural weakness",
          ],

          practicalTagline: "What This Gives You In Practice",
          practicalTitle:
            "The point is not only to name the problem better. The point is to decide better.",
          practicalItems: [
            "a clearer reading of what is actually slowing evaluation",
            "a sharper view of what needs to be fixed first",
            "a stronger distinction between a messaging problem and a structural problem",
            "a more credible basis for deciding whether deeper work is necessary",
          ],

          fitTagline: "When This Work Is Most Useful",
          fitTitle:
            "This engagement model is strongest when your company needs to be believed before it is chosen.",
          fitItems: [
            "software sold to clinics, private practices, or care operators",
            "sales cycles slowed by trust, compliance, or perceived risk",
            "a site that explains the product without sufficiently de-risking the buyer",
            "a need for a system, not a pile of disconnected actions",
          ],

          routeTagline: "Where To Go Next",
          routeTitle:
            "You can use this page to understand, verify, or move forward.",
          routeCards: [
            {
              title: "Start with the diagnostic",
              description:
                "If you want to see the real entry point, go to the TDA.",
              href: "/tda",
              cta: "See the TDA",
            },
            {
              title: "See the full system",
              description:
                "If you want to understand what OAA builds after the diagnostic, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See public proof",
              description:
                "If you want to see how the method appears on a real diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
          ],

          finalTagline: "Start Here",
          finalTitle:
            "The best engagement rarely starts with immediate execution. It starts with the right diagnostic.",
          finalPrimaryCta: "Start with the Audit",
          finalSecondaryCta: "Contact us",
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
                  <Link href="/tda">{copy.heroPrimaryCta}</Link>
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

        {/* Two stages */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.stageTagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.stageTitle}
                </h2>

                <div className="space-y-8">
                  <div className="rounded-[22px] border border-black/8 bg-white/45 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {copy.stage1Label}
                    </p>
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-[#163629]">
                      {copy.stage1Title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {copy.stage1Text}
                    </p>
                    <div className="flex flex-col gap-2">
                      {copy.stage1Points.map((point, index) => (
                        <p
                          key={index}
                          className="text-sm font-medium leading-relaxed text-[#163629]"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-black/8 bg-white/45 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {copy.stage2Label}
                    </p>
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-[#163629]">
                      {copy.stage2Title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {copy.stage2Text}
                    </p>
                    <div className="flex flex-col gap-2">
                      {copy.stage2Points.map((point, index) => (
                        <p
                          key={index}
                          className="text-sm font-medium leading-relaxed text-[#163629]"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
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

                <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-10 md:py-12">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    {copy.practicalTagline}
                  </p>
                  <h3 className="mb-6 text-2xl font-black leading-tight tracking-tight text-[#163629]">
                    {copy.practicalTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.practicalItems.map((item, index) => (
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

        {/* Fit */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-10 md:py-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.fitTagline}
              </p>
              <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.fitTitle}
              </h2>
              <div className="flex flex-col gap-3">
                {copy.fitItems.map((item, index) => (
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
        </section>

        {/* Routing */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.routeTagline}
                </p>