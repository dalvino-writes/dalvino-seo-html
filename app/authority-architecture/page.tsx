"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export default function AuthorityArchitecturePage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "La catégorie · Architecture d’autorité",
          heroTitle:
            "Faites en sorte qu’un acheteur vous fasse confiance avant même de réserver l’appel.",
          heroSubtitle:
            "Dans le Healthcare SaaS, votre acheteur ne juge pas seulement vos fonctionnalités. Il juge si votre site, vos preuves, votre maîtrise réglementaire et votre structure réduisent assez le risque pour avancer avec confiance.",

          heroPrimaryCta: "Commencer par l’Audit",
          heroSecondaryCta: "Voir les analyses de démonstration",

          problemTagline: "Le problème",
          problemTitle:
            "Publier du contenu ne suffit pas si votre site ne construit pas la crédibilité qui le rend croyable.",
          problemCards: [
            "Vos pages existent, mais elles ne renforcent pas toutes la même conclusion.",
            "Votre conformité est mentionnée, mais rarement démontrée là où l’acheteur doute vraiment.",
            "Votre contenu peut attirer du trafic sans créer une conviction durable ni une préférence claire.",
          ],

          definitionTagline: "Ce que cela veut dire",
          definitionTitle:
            "L’architecture d’autorité organise votre crédibilité comme un système lisible.",
          definitionBody: [
            "Le sujet n’est pas seulement le contenu. Le sujet est la manière dont le contenu, la hiérarchie, la preuve, les signaux réglementaires et les chemins internes travaillent ensemble.",
            "Quand cette architecture est bien construite, un acheteur peut passer de son doute à votre crédibilité sans devoir tout reconstituer lui-même.",
          ],

          panelTagline: "Ce que cela change",
          panelPoints: [
            "Votre site arrête de disperser la confiance.",
            "Vos preuves apparaissent là où l’acheteur en a besoin.",
            "Votre structure commence à réduire le risque perçu au lieu d’en ajouter.",
          ],

          principlesTagline: "Les principes",
          principlesTitle:
            "Une architecture d’autorité solide repose sur quatre règles simples.",
          principles: [
            {
              label: "Principe 1",
              title: "La crédibilité doit être lisible",
              description:
                "Un acheteur doit comprendre rapidement ce que vous maîtrisez, ce que vous prouvez et pourquoi votre produit paraît sérieux.",
            },
            {
              label: "Principe 2",
              title: "La preuve doit apparaître au bon endroit",
              description:
                "La confiance ne se construit pas sur une page isolée. Elle se construit là où le doute apparaît réellement.",
            },
            {
              label: "Principe 3",
              title: "La structure doit réduire le risque perçu",
              description:
                "Dans le Healthcare SaaS, la confiance vient aussi du fait que votre entreprise paraît comprendre les contraintes réelles du terrain.",
            },
            {
              label: "Principe 4",
              title: "Chaque page doit renforcer le reste du site",
              description:
                "Une bonne page ne suffit pas. Chaque page doit laisser derrière elle un résidu de crédibilité qui renforce le système entier.",
            },
          ],

          contrastTagline: "La différence",
          contrastTitle:
            "La différence entre une stratégie de contenu classique et une architecture d’autorité.",
          leftTitle: "Stratégie de contenu classique",
          leftPoints: [
            "Optimise des pages ou des mots-clés isolés",
            "Mesure surtout l’activité et la production",
            "Mentionne la conformité comme langage de réassurance",
            "Laisse l’acheteur assembler lui-même la preuve",
          ],
          rightTitle: "Architecture d’autorité",
          rightPoints: [
            "Construit un environnement de crédibilité lisible",
            "Mesure la cohérence, la preuve et la progression de confiance",
            "Intègre le contexte réglementaire là où il renforce vraiment la crédibilité",
            "Réduit l’effort mental nécessaire pour croire et avancer",
          ],

          entryTagline: "Pourquoi cela compte",
          entryTitle:
            "Un acheteur peut entrer par plusieurs portes. Votre structure doit tenir à chaque point d’entrée.",
          entryBody:
            "Un prospect peut arriver par une analyse, une page cadre, une ressource de conformité ou une page liée au produit. Si ce point d’entrée est faible, il affaiblit tout ce qu’il voit ensuite. Une architecture d’autorité rend chaque entrée assez forte pour soutenir la suite du parcours.",

          routingTagline: "Où aller ensuite",
          routingTitle:
            "L’architecture d’autorité donne la logique. OAA donne le système d’exécution.",
          routingCards: [
            {
              title: "Voir le cadre",
              description:
                "Si vous voulez comprendre comment Archoric transforme cette logique en système concret, allez vers OAA.",
              cta: "Voir OAA",
              href: "/oaa",
            },
            {
              title: "Voir la preuve en pratique",
              description:
                "Si vous voulez voir comment cette logique s’applique sur un vrai diagnostic public, allez vers les analyses de démonstration.",
              cta: "Voir les analyses de démonstration",
              href: "/demonstration-analyses",
            },
            {
              title: "Commencer par le diagnostic",
              description:
                "Si votre vraie question est “où est-ce que cela casse chez nous ?”, commencez par le TDA.",
              cta: "Commencer par l’Audit",
              href: "/tda",
            },
          ],

          ctaTagline: "Commencez ici",
          ctaTitle:
            "Si votre structure ne réduit pas le risque perçu, le contenu seul ne portera pas la vente.",
          ctaPrimary: "Commencer par l’Audit",
          ctaSecondary: "Voir OAA",
        }
      : {
          heroTagline: "The Category · Authority Architecture",
          heroTitle:
            "Make buyers trust your company before they ever book the call.",
          heroSubtitle:
            "In Healthcare SaaS, your buyer is not only judging features. They are judging whether your site, your proof, your regulatory fluency, and your structure reduce enough risk for them to move forward with confidence.",

          heroPrimaryCta: "Start with the Audit",
          heroSecondaryCta: "See Demonstration Analyses",

          problemTagline: "The Problem",
          problemTitle:
            "Publishing content is not enough if your site does not build the credibility that makes it believable.",
          problemCards: [
            "Your pages exist, but they do not reinforce the same conclusion.",
            "Your compliance is mentioned, but rarely demonstrated where the buyer is actually doubting.",
            "Your content may generate traffic without creating durable conviction or clear preference.",
          ],

          definitionTagline: "What This Means",
          definitionTitle:
            "Authority Architecture organizes your credibility as a readable system.",
          definitionBody: [
            "This is not just about content. It is about how content, hierarchy, proof, regulatory signals, and internal pathways work together.",
            "When that architecture is built well, a buyer can move from doubt to confidence without having to assemble the proof on their own.",
          ],

          panelTagline: "What This Changes",
          panelPoints: [
            "Your site stops scattering trust.",
            "Your proof appears where the buyer actually needs it.",
            "Your structure starts reducing perceived risk instead of adding to it.",
          ],

          principlesTagline: "The Principles",
          principlesTitle:
            "A strong authority architecture rests on four simple rules.",
          principles: [
            {
              label: "Principle 1",
              title: "Credibility must be readable",
              description:
                "A buyer should quickly understand what you know, what you prove, and why your product feels serious.",
            },
            {
              label: "Principle 2",
              title: "Proof must appear in the right place",
              description:
                "Trust is not built on one isolated page. It is built where doubt actually appears.",
            },
            {
              label: "Principle 3",
              title: "Structure must reduce perceived risk",
              description:
                "In Healthcare SaaS, trust also comes from whether your company appears to understand real-world operating constraints.",
            },
            {
              label: "Principle 4",
              title: "Every page must reinforce the rest of the site",
              description:
                "One good page is not enough. Every page should leave behind credibility residue that strengthens the whole system.",
            },
          ],

          contrastTagline: "The Difference",
          contrastTitle:
            "The difference between a standard content strategy and authority architecture.",
          leftTitle: "Standard content strategy",
          leftPoints: [
            "Optimizes isolated pages or keywords",
            "Measures mostly activity and output",
            "Mentions compliance as reassurance language",
            "Leaves the buyer to assemble the proof alone",
          ],
          rightTitle: "Authority architecture",
          rightPoints: [
            "Builds a readable credibility environment",
            "Measures coherence, proof, and trust progression",
            "Integrates regulatory context where it actually strengthens confidence",
            "Reduces the mental effort required to believe and move forward",
          ],

          entryTagline: "Why It Matters",
          entryTitle:
            "A buyer can enter through multiple doors. Your structure has to hold at every entry point.",
          entryBody:
            "A prospect may arrive through an analysis, a framework page, a compliance resource, or a product-adjacent page. If that entry point is weak, it weakens everything they see next. Authority Architecture makes each entry strong enough to support the rest of the journey.",

          routingTagline: "Where To Go Next",
          routingTitle:
            "Authority Architecture gives the logic. OAA gives the execution system.",
          routingCards: [
            {
              title: "See the framework",
              description:
                "If you want to understand how Archoric turns this logic into a concrete build system, go to OAA.",
              cta: "See OAA",
              href: "/oaa",
            },
            {
              title: "See proof in practice",
              description:
                "If you want to see how this logic plays out on a real public diagnostic, go to Demonstration Analyses.",
              cta: "See Demonstration Analyses",
              href: "/demonstration-analyses",
            },
            {
              title: "Start with the diagnostic",
              description:
                "If your real question is ‘where is this breaking for us?’, start with the TDA.",
              cta: "Start with the Audit",
              href: "/tda",
            },
          ],

          ctaTagline: "Start Here",
          ctaTitle:
            "If your structure does not reduce perceived risk, content alone will not carry the sale.",
          ctaPrimary: "Start with the Audit",
          ctaSecondary: "See OAA",
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
                  <Link href="/demonstration-analyses">{copy.heroSecondaryCta}</Link>
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

        {/* Definition + side panel */}
        <section className="py-20 md:py-28">
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

        {/* Principles */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.principlesTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.principlesTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {copy.principles.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {item.label}
                    </p>
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

        {/* Contrast */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.contrastTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.contrastTitle}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h3 className="mb-5 text-xl font-black tracking-tight text-[#163629]">
                    {copy.leftTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.leftPoints.map((point, index) => (
                      <p
                        key={index}
                        className="text-sm leading-relaxed text-[#2f3e36] md:text-[15px]"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white/38 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                  <h3 className="mb-5 text-xl font-black tracking-tight text-[#163629]">
                    {copy.rightTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {copy.rightPoints.map((point, index) => (
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

        {/* Multi-entry reality */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.entryTagline}
              </p>
              <h2 className="mb-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.entryTitle}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                {copy.entryBody}
              </p>
            </div>
          </div>
        </section>

        {/* Routing */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.routingTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.routingTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {copy.routingCards.map((card, index) => (
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

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.ctaTagline}
              </p>
              <h2 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.ctaTitle}
              </h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{copy.ctaPrimary}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/oaa">{copy.ctaSecondary}</Link>
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