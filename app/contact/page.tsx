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
    if (
      !document.querySelector(
        "script[src='https://assets.calendly.com/assets/external/widget.js']"
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const timer = setTimeout(() => {
      setCalendlyFailed(true);
    }, 5000);

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
    };
  }, []);

  const calendlyUrl =
    locale === "fr"
      ? "https://calendly.com/" // todo: replace with fr calendly link
      : "https://calendly.com/dalvino-archoric/30min";

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
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)] mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {contact.tagline}
              </p>

              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {contact.title}
              </h1>

              <p className="text-base md:text-lg text-[#2f3e36] leading-relaxed whitespace-pre-line max-w-2xl">
                {contact.subtitle}
              </p>
            </div>

            {calendlyFailed ? (
              <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  {locale === "fr"
                    ? "Calendrier temporairement indisponible"
                    : "Calendar temporarily unavailable"}
                </p>

                <p className="text-base text-[#2f3e36] leading-relaxed mb-6 max-w-2xl">
                  {locale === "fr"
                    ? "Le calendrier de réservation est momentanément indisponible. Écrivez-moi directement et je vous répondrai sous 24h."
                    : "The booking calendar is momentarily unavailable. Write to me directly and I will respond within 24 hours."}
                </p>

                <a
                  href="mailto:dalvino@archoric.com"
                  className="inline-block text-sm font-semibold text-accent hover:underline"
                >
                  dalvino@archoric.com
                </a>
              </div>
            ) : (
              <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl p-4 md:p-5 shadow-[0_12px_28px_rgba(0,0,0,0.05)] overflow-hidden">
                <div
                  className="calendly-inline-widget rounded-[22px]"
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}