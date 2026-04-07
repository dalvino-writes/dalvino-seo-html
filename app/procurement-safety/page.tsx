"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProcurementSafetyPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "Le risque · Sécurité d’achat",
          heroTitle:
            "Aidez l’acheteur à se sentir en sécurité avant même qu’il demande une démo.",
          heroSubtitle:
            "Dans le Healthcare SaaS, un acheteur ne choisit pas seulement un outil. Il choisit un niveau de risque. Si votre site ne l’aide pas à se projeter sans danger, il ralentit, doute, ou se tourne vers une option qui paraît plus sûre.",

          heroPrimaryCta: "Commencer par l’Audit",
          heroSecondaryCta: "Voir OAA",

          problemTagline: "Le problème",
          problemTitle:
            "Un bon produit ne suffit pas si l’acheteur ne se sent pas en sécurité au moment d’évaluer.",
          problemCards: [
            "Votre site peut sembler informatif sans sembler suffisamment rassurant pour soutenir la décision.",
            "L’acheteur cherche des signes concrets que votre solution n’ajoutera pas de friction, de confusion ou de risque politique en interne.",
            "Quand cette sécurité d’achat ne se ressent pas vite, même un bon produit devient plus difficile à défendre.",
          ],

          definitionTagline: "Ce que cela veut dire",
          definitionTitle:
            "La sécurité d’achat, c’est la sensation que choisir votre solution reste défendable, lisible et moins risqué.",
          definitionBody: [
            "Un acheteur Healthcare n’évalue pas seulement ce que fait votre produit. Il évalue aussi ce que son choix pourrait lui coûter si quelque chose se passe mal : friction d’implémentation, doute réglementaire, manque de clarté, ou difficulté à justifier la décision en interne.",
            "Votre site doit donc faire plus qu’informer. Il doit réduire ce risque perçu suffisamment tôt pour que l’acheteur continue à avancer au lieu de se protéger.",
          ],

          panelTagline: "Ce que cela change",
          panelPoints: [
            "Votre site devient plus facile à défendre en interne.",
            "Votre produit semble moins risqué à adopter.",
            "La progression vers l’appel ou la démo devient plus naturelle.",
          ],

          signalsTagline: "Ce que l’acheteur cherche vraiment",
          signalsTitle:
            "La sécurité d’achat se construit à travers plusieurs signaux.",
          signals: [
            {
              title: "Clarté de l’implémentation",
              description:
                "Votre site aide-t-il l’acheteur à imaginer une adoption maîtrisée, ou laisse-t-il trop de zones floues autour du déploiement ?",
            },
            {
              title: "Lisibilité du risque",
              description:
                "Votre crédibilité réglementaire, opérationnelle et produit travaille-t-elle ensemble pour réduire le doute ?",
            },
            {
              title: "Capacité à être défendu en interne",
              description:
                "Un champion interne trouvera-t-il chez vous assez d’éléments pour soutenir la décision face à sa direction ou à son équipe ?",
            },
            {
              title: "Stabilité perçue",
              description:
                "Votre entreprise paraît-elle suffisamment sérieuse, cohérente et structurée pour rassurer au-delà du simple produit ?",
            },
          ],

          contrastTagline: "La différence",
          contrastTitle:
            "La différence entre sembler utile et sembler sûr à acheter.",
          leftTitle: "Produit utile, mais achat risqué",
          leftPoints: [
            "Explique les fonctionnalités sans réduire le risque perçu",
            "Laisse trop de zones floues autour de l’implémentation",
            "Donne peu d’éléments à défendre en interne",
            "Fait hésiter l’acheteur au moment de s’engager",
          ],
          rightTitle: "Produit utile et achat défendable",
          rightPoints: [
            "Réduit le doute pendant l’évaluation",
            "Rend l’adoption plus facile à imaginer",
            "Donne des points d’appui concrets au champion interne",
            "Accélère la progression vers la décision",
          ],

          whyItMattersTagline: "Pourquoi cela compte",
          whyItMattersTitle:
            "Si votre site n’aide pas l’acheteur à se protéger, il ralentira même s’il aime votre produit.",
          whyItMattersBody:
            "Dans un environnement sensible au risque, la question n’est pas seulement “est-ce une bonne solution ?”. La vraie question devient vite “est-ce un choix que je peux défendre sans me mettre en danger ?”. La sécurité d’achat répond à cette question avant même la démo.",

          routingTagline: "Où aller ensuite",
          routingTitle:
            "Cette page vous aide à aller vers la logique, la preuve ou le diagnostic.",
          routingCards: [
            {
              title: "Voir le cadre complet",
              description:
                "Si vous voulez comprendre comment cette sécurité d’achat s’intègre dans un système complet, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve sur un vrai diagnostic",
              description:
                "Si vous voulez voir comment le risque acheteur apparaît sur un site réel, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
            {
              title: "Vérifier votre propre site",
              description:
                "Si vous voulez savoir où votre site fait encore hésiter l’acheteur, commencez par le TDA.",
              href: "/tda",
              cta: "Commencer par l’Audit",
            },
          ],

          ctaTagline: "Commencez ici",
          ctaTitle:
            "Quand votre site réduit le risque perçu, l’acheteur avance plus facilement vers la décision.",
          ctaPrimary: "Commencer par l’Audit",
          ctaSecondary: "Voir les analyses de démonstration",
        }
      : {
          heroTagline: "The Risk · Procurement Safety",
          heroTitle:
            "Help the buyer feel safe choosing you before they ever ask for a demo.",
          heroSubtitle:
            "In Healthcare SaaS, a buyer is not only choosing a tool. They are choosing a level of risk. If your site does not help them picture a safer decision, they slow down, doubt, or drift toward an option that feels easier to defend.",

          heroPrimaryCta: "Start with the Audit",
          heroSecondaryCta: "See OAA",

          problemTagline: "The Problem",
          problemTitle:
            "A good product is not enough if the buyer does not feel safe during evaluation.",
          problemCards: [
            "Your site can feel informative without feeling safe enough to support the decision.",
            "The buyer is looking for signs that your solution will not add friction, confusion, or internal political risk.",
            "When that sense of safety does not show up quickly, even a strong product becomes harder to defend.",
          ],

          definitionTagline: "What This Means",
          definitionTitle:
            "Procurement safety is the feeling that choosing your solution is defensible, understandable, and less risky.",
          definitionBody: [
            "A Healthcare buyer is not only judging what your product does. They are also judging what their choice could cost them if something goes wrong: implementation friction, regulatory doubt, unclear ownership, or internal difficulty justifying the decision.",
            "So your site has to do more than inform. It has to reduce perceived risk early enough that the buyer keeps moving instead of protecting themselves.",
          ],

          panelTagline: "What This Changes",
          panelPoints: [
            "Your site becomes easier to defend internally.",
            "Your product feels less risky to adopt.",
            "Progression toward the call or demo becomes more natural.",
          ],

          signalsTagline: "What The Buyer Is Actually Looking For",
          signalsTitle:
            "Procurement safety is built through multiple visible signals.",
          signals: [
            {
              title: "Implementation clarity",
              description:
                "Does your site help the buyer imagine a controlled adoption, or leave too many unknowns around rollout and change?",
            },
            {
              title: "Readable risk",
              description:
                "Do your regulatory, operational, and product signals work together to reduce doubt?",
            },
            {
              title: "Internal defensibility",
              description:
                "Will an internal champion find enough material on your site to support the choice in front of leadership or peers?",
            },
            {
              title: "Perceived stability",
              description:
                "Does your company feel serious, coherent, and structured enough to reassure beyond the product itself?",
            },
          ],

          contrastTagline: "The Difference",
          contrastTitle:
            "The difference between looking useful and feeling safe to buy.",
          leftTitle: "Useful product, risky purchase",
          leftPoints: [
            "Explains features without reducing perceived risk",
            "Leaves too many unknowns around implementation",
            "Gives little material for internal defense",
            "Makes the buyer hesitate at the moment of commitment",
          ],
          rightTitle: "Useful product, defensible purchase",
          rightPoints: [
            "Reduces doubt during evaluation",
            "Makes adoption easier to picture",
            "Gives the internal champion concrete support",
            "Accelerates movement toward decision",
          ],

          whyItMattersTagline: "Why It Matters",
          whyItMattersTitle:
            "If your site does not help the buyer protect themselves, they will slow down even if they like your product.",
          whyItMattersBody:
            "In a risk-sensitive environment, the question is not only ‘is this a good solution?’. The real question quickly becomes ‘is this a choice I can defend without putting myself at risk?’. Procurement safety answers that question before the demo ever happens.",

          routingTagline: "Where To Go Next",
          routingTitle:
            "This page should help you move toward the logic, the proof, or the diagnostic.",
          routingCards: [
            {
              title: "See the full framework",
              description:
                "If you want to understand how procurement safety fits into a complete authority system, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See proof on a real diagnostic",
              description:
                "If you want to see how buyer risk appears on a real site, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
            {
              title: "Check your own site",
              description:
                "If you want to see where your site is still making the buyer hesitate, start with the TDA.",
              href: "/tda",
              cta: "Start with the Audit",
            },
          ],

          ctaTagline: "Start Here",
          ctaTitle:
            "When your site reduces perceived risk, the buyer moves more easily toward the decision.",
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

        {/* Signals */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.signalsTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.signalsTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {copy.signals.map((item, index) => (
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