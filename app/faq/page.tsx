"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQPage() {
  const { locale } = useLocale();

  const copy =
    locale === "fr"
      ? {
          heroTagline: "FAQ · Questions fréquentes",
          heroTitle:
            "Les questions à clarifier avant de vous engager dans le mauvais chantier.",
          heroSubtitle:
            "Cette page existe pour enlever les ambiguïtés les plus fréquentes autour du TDA, de OAA, de la logique d’engagement et de la manière dont Archoric travaille.",

          heroPrimaryCta: "Voir le TDA",
          heroSecondaryCta: "Voir OAA",

          introTagline: "Pourquoi cette page existe",
          introTitle:
            "Si la logique n’est pas claire, la bonne décision devient plus difficile à prendre.",
          introCards: [
            "Vous comprenez mieux le rôle du TDA.",
            "Vous voyez quand OAA intervient réellement.",
            "Vous évitez de confondre preuve publique, diagnostic et engagement profond.",
          ],

          faqTagline: "Questions fréquentes",
          faqTitle:
            "Les réponses les plus importantes avant d’avancer.",
          faqs: [
            {
              question: "Quelle est la vraie porte d’entrée pour travailler avec Archoric ?",
              answer:
                "La porte d’entrée normale est le TDA. C’est le diagnostic payant qui montre où votre site perd en crédibilité, où la structure affaiblit l’évaluation et dans quel ordre les problèmes doivent être traités.",
            },
            {
              question: "OAA est-il la même chose que le TDA ?",
              answer:
                "Non. Le TDA est l’offre d’entrée et le diagnostic. OAA est l’engagement plus profond qui intervient après, si le diagnostic montre qu’une reconstruction structurelle est réellement nécessaire.",
            },
            {
              question: "Pourquoi ne pas commencer directement par l’exécution ?",
              answer:
                "Parce qu’exécuter trop tôt crée souvent plus de volume que de clarté. Si le vrai problème est structurel, produire plus de contenu ou modifier quelques pages ne corrige pas le système.",
            },
            {
              question: "Est-ce que vous faites du SEO classique ?",
              answer:
                "Le travail d’Archoric ne commence pas par le SEO classique. Il commence par la structure de confiance qui rend ensuite la visibilité, l’autorité et l’évaluation acheteur plus cohérentes. Cette couche peut ensuite renforcer le SEO, mais elle ne se réduit pas à lui.",
            },
            {
              question: "À quoi servent les analyses de démonstration ?",
              answer:
                "Elles servent de preuve publique de la méthode. Elles montrent comment Archoric lit un site réel, où la confiance tient, où elle casse, et ce qu’un acheteur est poussé à conclure pendant l’évaluation.",
            },
            {
              question: "Les analyses de démonstration sont-elles des cas clients ?",
              answer:
                "Non. Ce ne sont pas des cas clients déguisés. Ce sont des diagnostics publics qui rendent la méthode visible avant même d’avoir besoin de cas clients publiables.",
            },
            {
              question: "Pour quel type d’entreprise ce travail est-il fait ?",
              answer:
                "Le système est conçu pour des entreprises Healthcare SaaS, surtout celles qui vendent à des cliniques, cabinets, structures de soins ou environnements où la crédibilité, la conformité et le risque perçu influencent fortement la décision.",
            },
            {
              question: "Et si mon problème vient surtout du message ou du positionnement ?",
              answer:
                "Justement, le TDA aide à distinguer ce qui relève du message, de la structure, de la preuve, du territoire de recherche ou du risque perçu. Le but n’est pas de présumer le problème. Le but est de le diagnostiquer clairement.",
            },
            {
              question: "Que se passe-t-il après le TDA ?",
              answer:
                "Après le TDA, deux possibilités existent : soit le diagnostic suffit à orienter vos prochaines décisions, soit il montre qu’un engagement plus profond comme OAA est justifié pour reconstruire le système.",
            },
            {
              question: "Est-ce que cette approche remplace complètement les futurs cas clients ?",
              answer:
                "Non. Les diagnostics publics permettent de rendre la méthode crédible maintenant. Des cas clients pourront venir plus tard, mais ils ne remplacent pas la fonction actuelle de preuve publique.",
            },
          ],

          routeTagline: "Où aller ensuite",
          routeTitle:
            "Vous pouvez utiliser cette page pour comprendre, vérifier ou passer à l’étape suivante.",
          routeCards: [
            {
              title: "Voir le point d’entrée",
              description:
                "Si vous voulez repartir vers l’offre de diagnostic, allez vers le TDA.",
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
                "Si vous voulez voir la méthode appliquée sur un vrai diagnostic public, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
          ],

          finalTagline: "Commencez ici",
          finalTitle:
            "Quand la confusion baisse, la bonne prochaine étape devient plus évidente.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Nous contacter",
        }
      : {
          heroTagline: "FAQ · Frequently Asked Questions",
          heroTitle:
            "The questions worth clarifying before you commit to the wrong kind of work.",
          heroSubtitle:
            "This page exists to remove the most common ambiguities around the TDA, OAA, the engagement logic, and how Archoric works.",

          heroPrimaryCta: "See the TDA",
          heroSecondaryCta: "See OAA",

          introTagline: "Why This Page Exists",
          introTitle:
            "If the logic is unclear, the right next decision becomes harder to make.",
          introCards: [
            "You understand the role of the TDA more clearly.",
            "You see when OAA actually comes in.",
            "You avoid confusing public proof, diagnosis, and deeper engagement.",
          ],

          faqTagline: "Frequently Asked Questions",
          faqTitle:
            "The answers that matter most before moving forward.",
          faqs: [
            {
              question: "What is the real entry point for working with Archoric?",
              answer:
                "The normal entry point is the TDA. It is the paid diagnostic that shows where your site is losing credibility, where structure is weakening evaluation, and in what order problems should be addressed.",
            },
            {
              question: "Is OAA the same thing as the TDA?",
              answer:
                "No. The TDA is the entry offer and diagnostic. OAA is the deeper engagement that comes after, if the diagnostic shows that a structural rebuild is actually necessary.",
            },
            {
              question: "Why not start directly with execution?",
              answer:
                "Because executing too early often creates more volume than clarity. If the real problem is structural, publishing more content or adjusting a few pages does not fix the system.",
            },
            {
              question: "Is this just classic SEO?",
              answer:
                "Archoric’s work does not begin with classic SEO. It begins with the trust structure that makes visibility, authority, and buyer evaluation more coherent. That layer can strengthen SEO afterward, but it is not reducible to it.",
            },
            {
              question: "What are Demonstration Analyses for?",
              answer:
                "They act as public proof of the method. They show how Archoric reads a real site, where trust holds, where it breaks, and what a buyer is being led to conclude during evaluation.",
            },
            {
              question: "Are Demonstration Analyses client case studies?",
              answer:
                "No. They are not disguised client case studies. They are public diagnostics that make the method visible before official publishable client work exists.",
            },
            {
              question: "What kind of company is this built for?",
              answer:
                "The system is built for Healthcare SaaS companies, especially those selling to clinics, private practices, care operators, or environments where credibility, compliance, and perceived risk strongly shape the buying decision.",
            },
            {
              question: "What if my problem is mostly messaging or positioning?",
              answer:
                "That is exactly what the TDA helps distinguish. It clarifies what belongs to messaging, structure, proof, search territory, or perceived risk. The point is not to assume the problem. The point is to diagnose it clearly.",
            },
            {
              question: "What happens after the TDA?",
              answer:
                "After the TDA, two paths usually exist: either the diagnostic gives you enough clarity to guide next decisions, or it shows that a deeper engagement like OAA is justified to rebuild the system properly.",
            },
            {
              question: "Does this approach replace future client case studies entirely?",
              answer:
                "No. Public diagnostics make the method credible now. Client case studies can come later, but they do not replace the current role of public proof.",
            },
          ],

          routeTagline: "Where To Go Next",
          routeTitle:
            "You can use this page to understand, verify, or move to the next step.",
          routeCards: [
            {
              title: "See the entry point",
              description:
                "If you want to return to the diagnostic offer, go to the TDA.",
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
                "If you want to see the method applied on a real public diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
          ],

          finalTagline: "Start Here",
          finalTitle:
            "When the confusion drops, the right next step becomes easier to see.",
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

        {/* FAQ list */}
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {copy.faqTagline}
                </p>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.faqTitle}
                </h2>
              </div>

              <div className="grid gap-5">
                {copy.faqs.map((item: FaqItem, index: number) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-black/8 bg-white/45 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="mb-4 text-xl font-black tracking-tight text-[#163629]">
                      {item.question}
                    </h3>
                    <p className="max-w-3xl text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
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
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {copy.routeTitle}
                </h2>
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
                  <Link href="/contact">{copy.finalSecondaryCta}</Link>
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