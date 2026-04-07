"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegulatoryFluencyPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "Le signal · Maîtrise réglementaire",
          heroTitle:
            "Ne vous contentez pas de dire que vous êtes conforme. Faites sentir que vous comprenez réellement le terrain.",
          heroSubtitle:
            "Dans le Healthcare SaaS, un acheteur ne cherche pas seulement à être rassuré. Il cherche des signes concrets que votre entreprise comprend les contraintes réglementaires, les implications opérationnelles et le niveau de sérieux attendu dans son environnement.",

          heroPrimaryCta: "Commencer par l’Audit",
          heroSecondaryCta: "Voir OAA",

          problemTagline: "Le problème",
          problemTitle:
            "Mentionner HIPAA, RGPD ou PIPEDA ne suffit pas à créer la confiance.",
          problemCards: [
            "Une mention de conformité sans profondeur ressemble vite à un simple argument marketing.",
            "Un acheteur expérimenté repère rapidement la différence entre langage de réassurance et compréhension réelle.",
            "Quand cette maîtrise n’apparaît pas clairement, le doute reste vivant même si votre produit semble bon.",
          ],

          definitionTagline: "Ce que cela veut dire",
          definitionTitle:
            "La maîtrise réglementaire est un signal de crédibilité, pas une case à cocher.",
          definitionBody: [
            "Votre acheteur ne vous demande pas forcément une démonstration juridique complète. Il cherche plutôt à sentir que vous comprenez la réalité dans laquelle il opère.",
            "Cela veut dire que votre site doit montrer plus qu’une déclaration. Il doit montrer une compréhension suffisante du contexte, du risque et des implications concrètes pour que la confiance commence à se former.",
          ],

          panelTagline: "Ce que cela change",
          panelPoints: [
            "Votre conformité paraît moins décorative et plus crédible.",
            "Votre produit semble moins risqué à évaluer.",
            "Votre entreprise paraît plus sérieuse avant même l’appel.",
          ],

          signsTagline: "Ce que l’acheteur lit vraiment",
          signsTitle:
            "La maîtrise réglementaire se lit à travers plusieurs signaux visibles.",
          signs: [
            {
              title: "Le niveau de précision",
              description:
                "Votre site reste-t-il vague, ou montre-t-il une compréhension concrète des exigences que vos acheteurs vivent réellement ?",
            },
            {
              title: "Le placement de la preuve",
              description:
                "Les signaux de conformité apparaissent-ils seulement sur une page dédiée, ou là où l’acheteur évalue vraiment votre sérieux ?",
            },
            {
              title: "La cohérence du discours",
              description:
                "Votre crédibilité réglementaire renforce-t-elle le reste du site, ou disparaît-elle dès que l’on quitte la page sécurité ou conformité ?",
            },
            {
              title: "La crédibilité opérationnelle",
              description:
                "Votre langage donne-t-il l’impression que vous comprenez le quotidien des équipes qui doivent vivre avec votre produit ?",
            },
          ],

          contrastTagline: "La différence",
          contrastTitle:
            "La différence entre parler de conformité et inspirer une vraie confiance réglementaire.",
          leftTitle: "Langage de conformité superficiel",
          leftPoints: [
            "Affiche des badges ou des mentions vagues",
            "Rassure en surface sans démontrer de profondeur",
            "Isole la conformité sur quelques pages",
            "Laisse l’acheteur avec du doute",
          ],
          rightTitle: "Maîtrise réglementaire crédible",
          rightPoints: [
            "Montre une vraie compréhension du contexte",
            "Intègre les bons signaux là où ils comptent",
            "Renforce la confiance à travers plusieurs pages",
            "Réduit le risque perçu pendant l’évaluation",
          ],

          whyItMattersTagline: "Pourquoi cela compte",
          whyItMattersTitle:
            "Quand la maîtrise réglementaire est faible, tout le reste devient plus dur à croire.",
          whyItMattersBody:
            "Votre produit peut être solide. Votre positionnement peut être intelligent. Votre site peut même être bien designé. Mais si un acheteur sent que votre compréhension du terrain réglementaire est légère, alors tout le reste perd en poids. Dans un environnement sensible au risque, la crédibilité réglementaire ne renforce pas seulement une page. Elle stabilise la confiance dans l’ensemble du système.",

          routingTagline: "Où aller ensuite",
          routingTitle:
            "Cette page vous aide à aller vers la logique, la preuve ou le diagnostic.",
          routingCards: [
            {
              title: "Voir le cadre complet",
              description:
                "Si vous voulez comprendre comment cette maîtrise s’intègre dans un système complet, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve sur un vrai diagnostic",
              description:
                "Si vous voulez voir comment ces signaux apparaissent ou échouent sur un site réel, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Vérifier votre propre site",
              description:
                "Si vous voulez savoir où votre crédibilité réglementaire s’affaiblit aujourd’hui, commencez par le TDA.",
              href: "/tda",
              cta: "Commencer par l’Audit",
            },
          ],

          ctaTagline: "Commencez ici",
          ctaTitle:
            "Quand votre site montre une vraie maîtrise réglementaire, la confiance commence plus tôt et résiste mieux.",
          ctaPrimary: "Commencer par l’Audit",
          ctaSecondary: "Voir les analyses de démonstration",
        }
      : {
          heroTagline: "The Signal · Regulatory Fluency",
          heroTitle:
            "Do not just say you are compliant. Make buyers feel that you actually understand the terrain.",
          heroSubtitle:
            "In Healthcare SaaS, a buyer is not only looking for reassurance. They are looking for visible signs that your company understands regulatory constraints, operational consequences, and the level of seriousness expected in their environment.",

          heroPrimaryCta: "Start with the Audit",
          heroSecondaryCta: "See OAA",

          problemTagline: "The Problem",
          problemTitle:
            "Mentioning HIPAA, GDPR, or PIPEDA is not enough to create trust.",
          problemCards: [
            "A compliance mention without depth quickly feels like marketing language.",
            "An experienced buyer can tell the difference between reassurance wording and real understanding.",
            "When that fluency does not appear clearly, doubt stays alive even if the product looks strong.",
          ],

          definitionTagline: "What This Means",
          definitionTitle:
            "Regulatory fluency is a credibility signal, not a box to tick.",
          definitionBody: [
            "Your buyer is not necessarily asking for a full legal demonstration. What they are looking for is the feeling that you understand the reality they operate inside.",
            "That means your site has to show more than a declaration. It has to show enough understanding of context, risk, and real implications for trust to start forming.",
          ],

          panelTagline: "What This Changes",
          panelPoints: [
            "Your compliance feels less decorative and more credible.",
            "Your product feels less risky to evaluate.",
            "Your company feels more serious before the call even starts.",
          ],

          signsTagline: "What The Buyer Is Actually Reading",
          signsTitle:
            "Regulatory fluency is read through multiple visible signals.",
          signs: [
            {
              title: "Level of precision",
              description:
                "Does your site stay vague, or does it show concrete understanding of the requirements your buyers actually live with?",
            },
            {
              title: "Placement of proof",
              description:
                "Do compliance signals only appear on a dedicated page, or where the buyer is actively evaluating whether to trust you?",
            },
            {
              title: "Coherence of the message",
              description:
                "Does your regulatory credibility reinforce the rest of the site, or disappear the moment someone leaves the security or compliance page?",
            },
            {
              title: "Operational credibility",
              description:
                "Does your language make it feel like you understand the day-to-day reality of the teams who will have to live with your product?",
            },
          ],

          contrastTagline: "The Difference",
          contrastTitle:
            "The difference between talking about compliance and creating real regulatory trust.",
          leftTitle: "Surface-level compliance language",
          leftPoints: [
            "Displays badges or vague mentions",
            "Reassures at the surface without depth",
            "Isolates compliance on a few pages",
            "Leaves the buyer with unresolved doubt",
          ],
          rightTitle: "Credible regulatory fluency",
          rightPoints: [
            "Shows real understanding of the context",
            "Places the right signals where they matter",
            "Reinforces trust across multiple pages",
            "Reduces perceived risk during evaluation",
          ],

          whyItMattersTagline: "Why It Matters",
          whyItMattersTitle:
            "When regulatory fluency is weak, everything else becomes harder to believe.",
          whyItMattersBody:
            "Your product can be strong. Your positioning can be smart. Your site can even look polished. But if a buyer feels that your understanding of their regulatory environment is thin, everything else starts carrying less weight. In a risk-sensitive environment, regulatory credibility does not just strengthen one page. It stabilizes trust across the entire system.",

          routingTagline: "Where To Go Next",
          routingTitle:
            "This page should help you move toward the logic, the proof, or the diagnostic.",
          routingCards: [
            {
              title: "See the full framework",
              description:
                "If you want to understand how this fluency fits into a complete authority system, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See proof on a real diagnostic",
              description:
                "If you want to see how these signals appear or fail on a real site, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Check your own site",
              description:
                "If you want to see where your regulatory credibility is weakening today, start with the TDA.",
              href: "/tda",
              cta: "Start with the Audit",
            },
          ],

          ctaTagline: "Start Here",
          ctaTitle:
            "When your site shows real regulatory fluency, trust starts earlier and holds longer.",
          ctaPrimary: "Start with the Audit",
          ctaSecondary: "See Demonstration Analyses",
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

        {/* Visible signs */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.signsTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.signsTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {copy.signs.map((item, index) => (
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

        {/* Why it matters */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {copy.whyItMattersTagline}
              </p>
              <h2 className="mb-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {copy.whyItMattersTitle}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                {copy.whyItMattersBody}
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
                  <Link href="/demonstration-analyses">{copy.ctaSecondary}</Link>
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