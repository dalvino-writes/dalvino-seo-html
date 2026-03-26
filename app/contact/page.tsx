"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";

export default function Contact() {
  const { site } = useContent();
  const { contact } = site;
  const { locale } = useLocale();
  const [calendlyFailed, setCalendlyFailed] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const existingScript = document.querySelector(
      "script[src='https://assets.calendly.com/assets/external/widget.js']"
    ) as HTMLScriptElement | null;

    const startFailureTimer = () => {
      timer = setTimeout(() => {
        setCalendlyFailed(true);
      }, 5000);
    };

    const handleScriptReady = () => {
      setCalendlyFailed(false);
      startFailureTimer();
    };

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        handleScriptReady();
      } else {
        existingScript.addEventListener("load", handleScriptReady, { once: true });
      }
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.dataset.loaded = "false";

      script.onload = () => {
        script.dataset.loaded = "true";
        handleScriptReady();
      };

      script.onerror = () => {
        setCalendlyFailed(true);
      };

      document.body.appendChild(script);
    }

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_type_viewed") {
        setCalendlyFailed(false);
        clearTimeout(timer);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);

      if (existingScript && existingScript.dataset.loaded !== "true") {
        existingScript.removeEventListener("load", handleScriptReady);
      }
    };
  }, []);

  const calendlyUrl = "https://calendly.com/dalvino-archoric/30min";

  const copy =
    locale === "fr"
      ? {
          eyebrow: "Contact",
          title: "Réserver une conversation stratégique",
          subtitle:
            "Cette conversation est conçue pour les équipes SaaS santé qui veulent comprendre où la confiance, la conformité et l’architecture de contenu influencent réellement la visibilité et le cycle de vente.",
          fitTitle: "Cette conversation est utile si :",
          fitItems: [
            "vous vendez un logiciel à des cliniques, cabinets ou structures de soins",
            "la conformité, la crédibilité ou la confiance ralentissent le cycle de vente",
            "vous sentez que votre site décrit le produit sans assez sécuriser l’acheteur",
            "vous voulez un regard stratégique sur votre positionnement organique"
          ],
          callTitle: "Ce que nous faisons pendant l’échange",
          callItems: [
            "clarifier votre situation actuelle",
            "identifier les principaux angles morts de confiance ou d’autorité",
            "voir si le problème vient du message, de la structure ou du territoire de recherche",
            "déterminer si un audit structuré a du sens pour vous"
          ],
          reassuranceTitle: "Ce que cet appel n’est pas",
          reassuranceText:
            "Ce n’est pas un appel commercial agressif. S’il n’y a pas d’alignement ou pas d’enjeu clair, je vous le dirai simplement.",
          calendlyTitle: "Choisissez un créneau",
          calendlyText:
            "Sélectionnez l’horaire qui vous convient. Une fois réservé, vous recevrez une confirmation par email.",
          fallbackEyebrow: "Calendrier temporairement indisponible",
          fallbackText:
            "Le calendrier de réservation est momentanément indisponible. Écrivez-moi directement et je vous répondrai sous 24h.",
          emailLabel: "Écrire directement"
        }
      : {
          eyebrow: "Contact",
          title: "Book a strategic conversation",
          subtitle:
            "This conversation is designed for healthcare SaaS teams that want clarity on how trust, compliance, and content architecture are shaping visibility and the sales path.",
          fitTitle: "This conversation is useful if:",
          fitItems: [
            "you sell software to clinics, private practices, or care operators",
            "compliance, credibility, or trust are affecting the sales cycle",
            "your website explains the product but does not fully reduce buyer risk",
            "you want a strategic view of your organic positioning"
          ],
          callTitle: "What we do on the call",
          callItems: [
            "clarify your current position",
            "identify the main trust or authority blind spots",
            "see whether the issue comes from messaging, structure, or search territory",
            "determine whether a structured audit would actually be useful"
          ],
          reassuranceTitle: "What this call is not",
          reassuranceText:
            "This is not a hard sales call. If there is no clear fit or no meaningful problem to solve, I will say so directly.",
          calendlyTitle: "Choose a time",
          calendlyText:
            "Select a time that works for you. Once booked, you will receive a confirmation by email.",
          fallbackEyebrow: "Calendar temporarily unavailable",
          fallbackText:
            "The booking calendar is momentarily unavailable. Write to me directly and I will respond within 24 hours.",
          emailLabel: "Write directly"
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
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
              <div className="space-y-8">
                <div className="rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                    {copy.eyebrow}
                  </p>

                  <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                    {copy.title}
                  </h1>

                  <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed max-w-2xl">
                    {copy.subtitle}
                  </p>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-8 md:px-10 md:py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#163629] mb-5">
                    {copy.fitTitle}
                  </h2>

                  <ul className="space-y-3 text-[#2f3e36] leading-relaxed">
                    {copy.fitItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                    <h2 className="text-xl md:text-2xl font-bold text-[#163629] mb-4">
                      {copy.callTitle}
                    </h2>

                    <ul className="space-y-3 text-[#2f3e36] leading-relaxed">
                      {copy.callItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#163629] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                    <h2 className="text-xl md:text-2xl font-bold text-[#163629] mb-4">
                      {copy.reassuranceTitle}
                    </h2>

                    <p className="text-[#2f3e36] leading-relaxed">
                      {copy.reassuranceText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-3">
                    {copy.calendlyTitle}
                  </p>

                  <p className="text-[#2f3e36] leading-relaxed">
                    {copy.calendlyText}
                  </p>
                </div>

                {calendlyFailed ? (
                  <div className="rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-10 md:py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                      {copy.fallbackEyebrow}
                    </p>

                    <p className="text-base text-[#2f3e36] leading-relaxed mb-6">
                      {copy.fallbackText}
                    </p>

                    <a
                      href="mailto:dalvino@archoric.com"
                      className="inline-flex items-center rounded-full border border-[#163629]/15 px-5 py-3 text-sm font-semibold text-[#163629] transition hover:bg-white/60"
                    >
                      {copy.emailLabel}: dalvino@archoric.com
                    </a>
                  </div>
                ) : (
                  <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl p-4 md:p-5 shadow-[0_12px_28px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div
                      className="calendly-inline-widget rounded-[22px]"
                      data-url={calendlyUrl}
                      style={{ minWidth: "320px", height: "760px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}