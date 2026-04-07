"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { locale } = useLocale();

  /**
   * CALENDLY SETUP
   *
   * English link is live now.
   * French link is prepared but hidden until you are ready.
   *
   * To activate the French Calendly button later:
   * 1. Replace the frenchCalendlyUrl value
   * 2. Set showFrenchCalendlyButton to true
   */
  const englishCalendlyUrl = "https://calendly.com/dalvino-archoric/30min";
  const frenchCalendlyUrl = "https://calendly.com/"; // TODO: replace with real FR Calendly link later
  const showFrenchCalendlyButton = false;

  const copy =
    locale === "fr"
      ? {
          eyebrow: "Contact",
          title: "Réserver une conversation de qualification",
          subtitle:
            "Si votre site n’inspire pas assez de confiance pour soutenir l’évaluation acheteur, cette conversation permet de voir rapidement si un TDA a du sens pour vous.",
          topPrimaryCta: "Réserver sur Calendly",
          topSecondaryCta: "Voir le TDA",

          fitTitle: "Cette conversation est utile si :",
          fitItems: [
            "vous vendez un logiciel à des cliniques, cabinets ou structures de soins",
            "vous sentez que la confiance, la conformité ou la crédibilité ralentissent l’évaluation",
            "votre site décrit le produit sans assez sécuriser l’acheteur",
            "vous voulez savoir si le problème vient du message, de la structure ou du territoire de recherche",
          ],

          callTitle: "Ce que nous faisons pendant l’échange",
          callItems: [
            "clarifier votre situation actuelle",
            "identifier les principaux angles morts de confiance ou d’autorité",
            "voir si un diagnostic structuré est réellement utile",
            "déterminer si le TDA est la bonne prochaine étape",
          ],

          reassuranceTitle: "Ce que cet échange n’est pas",
          reassuranceText:
            "Ce n’est pas un appel commercial agressif. Si je ne vois pas de problème clair ou pas d’alignement, je vous le dirai simplement.",

          tdaTitle: "Le point d’entrée normal reste le TDA",
          tdaText:
            "Cette conversation existe pour vérifier l’alignement. Mais dans votre système, le vrai point d’entrée reste l’Audit du Déficit de Confiance.",
          tdaButton: "Voir le TDA",

          bookingTitle: "Réserver un créneau",
          bookingText:
            "Pour éviter les problèmes techniques liés à l’intégration Calendly, la réservation se fait directement sur la page de prise de rendez-vous.",
          bookingEnglishLabel: "Version anglaise",
          bookingFrenchLabel: "Version française",
          bookingEnglishButton: "Réserver en anglais",
          bookingFrenchButton: "Réserver en français",
          bookingFrenchComingSoon: "Lien français bientôt disponible",
          emailLabel: "Écrire directement",

          routeTitle: "Vous pouvez aussi partir d’ici dans d’autres directions",
          routeCards: [
            {
              title: "Voir le cadre complet",
              description:
                "Si vous voulez comprendre ce qu’Archoric construit après le diagnostic, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve publique",
              description:
                "Si vous voulez voir comment la méthode s’applique à un vrai diagnostic public, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
          ],
        }
      : {
          eyebrow: "Contact",
          title: "Book a qualification conversation",
          subtitle:
            "If your site is not creating enough trust to support buyer evaluation, this conversation helps determine quickly whether a TDA makes sense for you.",
          topPrimaryCta: "Book on Calendly",
          topSecondaryCta: "See the TDA",

          fitTitle: "This conversation is useful if:",
          fitItems: [
            "you sell software to clinics, private practices, or care operators",
            "trust, compliance, or credibility are slowing evaluation",
            "your website explains the product without fully reducing buyer risk",
            "you want to know whether the problem comes from messaging, structure, or search territory",
          ],

          callTitle: "What we do on the call",
          callItems: [
            "clarify your current situation",
            "identify the main trust or authority blind spots",
            "see whether a structured diagnostic is actually useful",
            "determine whether the TDA is the right next step",
          ],

          reassuranceTitle: "What this conversation is not",
          reassuranceText:
            "This is not a hard sales call. If I do not see a clear problem or a real fit, I will say so directly.",

          tdaTitle: "The normal entry point is still the TDA",
          tdaText:
            "This conversation exists to confirm alignment. But in your system, the real entry point remains the Trust Deficit Audit.",
          tdaButton: "See the TDA",

          bookingTitle: "Book a time",
          bookingText:
            "To avoid technical issues with the Calendly embed, booking now happens directly on the Calendly booking page.",
          bookingEnglishLabel: "English version",
          bookingFrenchLabel: "French version",
          bookingEnglishButton: "Book in English",
          bookingFrenchButton: "Book in French",
          bookingFrenchComingSoon: "French link coming soon",
          emailLabel: "Write directly",

          routeTitle: "You can also move from here in other directions",
          routeCards: [
            {
              title: "See the full framework",
              description:
                "If you want to understand what Archoric builds after the diagnostic, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See public proof",
              description:
                "If you want to see how the method applies to a real public diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
          ],
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
          <div className="container max-w-6xl">
            <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-8">
                <div className="rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    {copy.eyebrow}
                  </p>

                  <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                    {copy.title}
                  </h1>

                  <p className="max-w-2xl text-base leading-relaxed text-[#2f3e36] md:text-lg">
                    {copy.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                    >
                      <a href={englishCalendlyUrl} target="_blank" rel="noreferrer">
                        {copy.topPrimaryCta}
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                    >
                      <Link href="/tda">{copy.topSecondaryCta}</Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-10 md:py-10">
                  <h2 className="mb-5 text-2xl font-bold text-[#163629] md:text-3xl">
                    {copy.fitTitle}
                  </h2>

                  <ul className="space-y-3 leading-relaxed text-[#2f3e36]">
                    {copy.fitItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                    <h2 className="mb-4 text-xl font-bold text-[#163629] md:text-2xl">
                      {copy.callTitle}
                    </h2>

                    <ul className="space-y-3 leading-relaxed text-[#2f3e36]">
                      {copy.callItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#163629]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                    <h2 className="mb-4 text-xl font-bold text-[#163629] md:text-2xl">
                      {copy.reassuranceTitle}
                    </h2>

                    <p className="leading-relaxed text-[#2f3e36]">
                      {copy.reassuranceText}
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-[#f3efe7]/70 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl md:px-10 md:py-10">
                  <h2 className="mb-4 text-2xl font-bold text-[#163629] md:text-3xl">
                    {copy.tdaTitle}
                  </h2>

                  <p className="mb-6 max-w-2xl leading-relaxed text-[#2f3e36]">
                    {copy.tdaText}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                  >
                    <Link href="/tda">{copy.tdaButton}</Link>
                  </Button>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white/34 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-10 md:py-10">
                  <h2 className="mb-6 text-2xl font-bold text-[#163629] md:text-3xl">
                    {copy.routeTitle}
                  </h2>

                  <div className="grid gap-5 md:grid-cols-2">
                    {copy.routeCards.map((card) => (
                      <div
                        key={card.href}
                        className="rounded-[20px] border border-black/8 bg-white/50 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl"
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

              <div className="space-y-6">
                <div className="rounded-[28px] border border-black/8 bg-white/40 px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    {copy.bookingTitle}
                  </p>

                  <p className="mb-6 leading-relaxed text-[#2f3e36]">
                    {copy.bookingText}
                  </p>

                  <div className="space-y-5">
                    <div className="rounded-[20px] border border-black/8 bg-white/50 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                        {copy.bookingEnglishLabel}
                      </p>

                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                      >
                        <a href={englishCalendlyUrl} target="_blank" rel="noreferrer">
                          {copy.bookingEnglishButton}
                        </a>
                      </Button>
                    </div>

                    {showFrenchCalendlyButton ? (
                      <div className="rounded-[20px] border border-black/8 bg-white/50 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                          {copy.bookingFrenchLabel}
                        </p>

                        <Button
                          asChild
                          size="lg"
                          className="w-full rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                        >
                          <a href={frenchCalendlyUrl} target="_blank" rel="noreferrer">
                            {copy.bookingFrenchButton}
                          </a>
                        </Button>
                      </div>
                    ) : null}

                    <div className="rounded-[20px] border border-dashed border-black/12 bg-white/30 px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                        {copy.bookingFrenchLabel}
                      </p>
                      <p className="text-sm leading-relaxed text-[#2f3e36]">
                        {copy.bookingFrenchComingSoon}
                      </p>
                    </div>

                    <a
                      href="mailto:dalvino@archoric.com"
                      className="inline-flex items-center justify-center rounded-full border border-[#163629]/15 px-5 py-3 text-sm font-semibold text-[#163629] transition hover:bg-white/60"
                    >
                      {copy.emailLabel}: dalvino@archoric.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}