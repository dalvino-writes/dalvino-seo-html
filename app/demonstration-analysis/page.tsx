"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DemonstrationAnalysisPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "Le format · Demonstration Analysis",
          heroTitle:
            "Montrez la méthode publiquement avant même d’avoir besoin d’un cas client officiel.",
          heroSubtitle:
            "Une Demonstration Analysis n’est pas une étude de cas maquillée. C’est une preuve publique de la manière dont Archoric lit la confiance, la structure, la conformité et le risque acheteur sur un site réel.",

          heroPrimaryCta: "Voir les analyses de démonstration",
          heroSecondaryCta: "Commencer par l’Audit",

          problemTagline: "Le problème",
          problemTitle:
            "Quand vous n’avez pas encore de cas client publiable, vous avez quand même besoin d’une vraie preuve.",
          problemCards: [
            "Une promesse seule ne suffit pas à installer la confiance.",
            "Un cadre seul peut sembler intelligent sans sembler prouvé.",
            "Une belle copie ne montre pas forcément la qualité réelle du diagnostic.",
          ],

          definitionTagline: "Ce que c’est",
          definitionTitle:
            "Une Demonstration Analysis rend votre méthode visible sur un site réel.",
          definitionBody: [
            "Vous prenez une entreprise réelle, vous lisez sa structure publiquement, vous montrez où la confiance tient, où elle casse, et ce qu’un acheteur est poussé à conclure pendant son évaluation.",
            "Le but n’est pas de jouer au consultant en public. Le but est de rendre votre logique crédible avant même qu’un prospect vous parle.",
          ],

          sidePanelTagline: "Ce que cela change",
          sidePanelPoints: [
            "Vous remplacez la promesse par la démonstration.",
            "Vous montrez votre regard avant de vendre l’audit.",
            "Vous créez une preuve de méthode même sans cas client officiel.",
          ],

          distinctionTagline: "La distinction",
          distinctionTitle:
            "Ce format n’est ni un faux cas client, ni un simple article d’opinion.",
          distinctionLeftTitle: "Ce que ce format est",
          distinctionLeftPoints: [
            "Une preuve publique de lecture stratégique",
            "Un diagnostic visible sur un site réel",
            "Une démonstration de méthode",
            "Un actif de crédibilité avant la preuve client",
          ],
          distinctionRightTitle: "Ce que ce format n’est pas",
          distinctionRightPoints: [
            "Un engagement client présenté comme tel",
            "Une pseudo étude de cas",
            "Un simple article de commentaire",
            "Une page pensée seulement pour remplir le site",
          ],

          whyItWorksTagline: "Pourquoi cela fonctionne",
          whyItWorksTitle:
            "Parce qu’un prospect peut enfin voir comment vous pensez au lieu de devoir vous croire sur parole.",
          whyItWorksCards: [
            {
              title: "La méthode devient visible",
              description:
                "Le prospect voit comment vous lisez une structure réelle, pas seulement comment vous parlez de votre cadre.",
            },
            {
              title: "La preuve devient plus crédible",
              description:
                "Le format montre un vrai raisonnement appliqué, ce qui crée plus de confiance qu’une promesse abstraite.",
            },
            {
              title: "Le passage vers l’audit devient naturel",
              description:
                "Une fois la logique visible, le TDA devient l’étape logique pour appliquer cette lecture à son propre site.",
            },
          ],

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Ce format vous aide à entrer dans le système Archoric par plusieurs portes.",
          routeSubtitle:
            "Vous pouvez voir la preuve, comprendre la logique, ou revenir directement à l’offre d’audit.",
          routeCards: [
            {
              title: "Voir les diagnostics publics",
              description:
                "Si vous voulez voir la méthode appliquée immédiatement, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Comprendre la logique de catégorie",
              description:
                "Si vous voulez comprendre pourquoi cette preuve existe dans le système, allez vers Architecture d’autorité.",
              href: "/authority-architecture",
              cta: "Voir l’architecture d’autorité",
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
            "Quand la méthode est visible publiquement, le prochain pas logique est le diagnostic de votre propre site.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Voir OAA",
        }
      : {
          heroTagline: "The Format · Demonstration Analysis",
          heroTitle:
            "Make the method visible in public before you ever need an official client case study.",
          heroSubtitle:
            "A Demonstration Analysis is not disguised client work. It is public proof of how Archoric reads trust, structure, compliance, and buyer risk across a real site.",

          heroPrimaryCta: "See Demonstration Analyses",
          heroSecondaryCta: "Start with the Audit",

          problemTagline: "The Problem",
          problemTitle:
            "When you do not yet have a publishable client case study, you still need real proof.",
          problemCards: [
            "A promise alone does not build enough trust.",
            "A framework alone can sound smart without sounding proven.",
            "Polished copy does not necessarily show the quality of the diagnostic.",
          ],

          definitionTagline: "What It Is",
          definitionTitle:
            "A Demonstration Analysis makes your method visible on a real site.",
          definitionBody: [
            "You take a real company, read its public structure, show where trust holds, where it breaks, and what a buyer is naturally being led to conclude during evaluation.",
            "The goal is not to perform consulting in public. The goal is to make your logic believable before a prospect ever talks to you.",
          ],

          sidePanelTagline: "What This Changes",
          sidePanelPoints: [
            "You replace promise with demonstration.",
            "You show your thinking before selling the audit.",
            "You create proof of method even without an official client case study.",
          ],

          distinctionTagline: "The Distinction",
          distinctionTitle:
            "This format is neither fake client work nor a simple opinion article.",
          distinctionLeftTitle: "What this format is",
          distinctionLeftPoints: [
            "Public proof of strategic reading",
            "A visible diagnostic on a real site",
            "A demonstration of method",
            "A credibility asset before client proof exists",
          ],
          distinctionRightTitle: "What this format is not",
          distinctionRightPoints: [
            "A client engagement presented as one",
            "A pseudo case study",
            "A simple commentary article",
            "A page created only to fill the site",
          ],

          whyItWorksTagline: "Why It Works",
          whyItWorksTitle:
            "Because a prospect can finally see how you think instead of being asked to trust you on faith.",
          whyItWorksCards: [
            {
              title: "The method becomes visible",
              description:
                "The prospect sees how you read a real structure, not just how you talk about your framework.",
            },
            {
              title: "The proof becomes more credible",
              description:
                "The format shows applied reasoning, which creates more trust than an abstract promise.",
            },
            {
              title: "The path to the audit becomes natural",
              description:
                "Once the logic is visible, the TDA becomes the obvious next step for applying that same reading to their own site.",
            },
          ],

          routeTagline: "Where To Go Next",
          routeTitle:
            "This format lets a prospect enter the Archoric system through multiple doors.",
          routeSubtitle:
            "They can see the proof, understand the category logic, or move directly back to the audit offer.",
          routeCards: [
            {
              title: "See the public diagnostics",
              description:
                "If you want to see the method applied immediately, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Understand the category logic",
              description:
                "If you want to understand why this proof format exists inside the system, go to Authority Architecture.",
              href: "/authority-architecture",
              cta: "See Authority Architecture",
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
            "Once the method is visible in public, the next logical step is the diagnostic on your own site.",
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
                  <Link href="/demonstration-analyses">{copy.heroPrimaryCta}</Link>
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

        {/* Problem */}
        <section className="py-20 md:py-24">
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

        {/* Definition + side panel */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.definitionTagline}
                </p>
                <h2 className="mb-8 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.definitionTitle}
                </h2>

                <div className="flex flex-col gap-5">
                  {copy.definitionBody.map((paragraph, index) => (
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
                  {copy.sidePanelTagline}
                </p>

                <div className="flex flex-col gap-4">
                  {copy.sidePanelPoints.map((point, index) => (
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

        {/* Why it works */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.whyItWorksTagline}
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.whyItWorksTitle}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {copy.whyItWorksCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                >
                  <h3 className="mb-4 text-xl font-black tracking-tight text-[#163629]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                    {card.description}
                  </p>
                </div>
              ))}
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