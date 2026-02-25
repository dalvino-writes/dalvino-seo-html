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
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_type_viewed") {
        setCalendlyFailed(false);
        clearTimeout(timer);
      }
    };
    window.addEventListener("message", handleMessage);
    const timer = setTimeout(() => {
      setCalendlyFailed(true);
    }, 5000);
    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
      clearTimeout(timer);
    };
  }, []);

  const calendlyUrl =
    locale === "fr"
      ? "https://calendly.com/dalvinoseo/new-meeting"
      : "https://calendly.com/dalvinoseo/30min";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {contact.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {contact.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed whitespace-pre-line mb-10">
              {contact.subtitle}
            </p>
            {calendlyFailed ? (
              <div className="border border-border p-8 bg-card">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  {locale === "fr" ? "Calendrier temporairement indisponible" : "Calendar temporarily unavailable"}
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  {locale === "fr"
                    ? "Le calendrier de réservation est momentanément indisponible. Écrivez-moi directement et je vous réponds sous 24h."
                    : "The booking calendar is momentarily unavailable. Write to me directly and I'll get back to you within 24 hours."}
                </p>
                
                  <a href="mailto:dalvinoseo@gmail.com"
                  className="inline-block text-sm font-semibold text-accent underline hover:no-underline"
                >
                  dalvino@dalvinoseo.com
                </a>
              </div>
            ) : (
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: "700px" }}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}