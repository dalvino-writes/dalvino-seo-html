"use client";

import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

const Transformation = () => {
  const { site } = useContent();
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          bridgeTagline: "Ce que cela change vraiment",
          bridgeText:
            "Le sujet n’est pas seulement d’avoir un meilleur site. Le sujet est de passer d’un environnement qui laisse vivre le doute à un environnement qui aide l’acheteur à croire, comparer et avancer plus sereinement.",
          routePrimary: "Commencer par l’Audit",
          routeSecondary: "Voir OAA",
        }
      : {
          bridgeTagline: "What This Actually Changes",
          bridgeText:
            "The point is not just to have a better website. The point is to move from an environment that leaves doubt alive to one that helps the buyer believe, compare, and move forward with less friction.",
          routePrimary: "Start with the Audit",
          routeSecondary: "See OAA",
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="rounded-[30px] border border-black/8 bg-white/34 px-8 py-10 shadow-[0_12px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl md:px-12 md:py-14">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              {site.transformation.tagline}
            </p>
            <h2 className="mb-6 text-3xl font-black leading-[1.08] tracking-tighter text-[#163629] md:text-5xl">
              {site.transformation.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#5c6a63] md:text-base">
              {site.transformation.footnote}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[24px] border border-black/8 bg-white/38 px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-black/35">
                {site.transformation.before.label}
              </p>

              <ul className="flex flex-col gap-4">
                {site.transformation.before.points.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="border-l border-black/15 pl-4 text-base leading-relaxed text-[#5e6963]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-black/8 bg-white/44 px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {site.transformation.after.label}
              </p>

              <ul className="flex flex-col gap-4">
                {site.transformation.after.points.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="border-l-2 border-[#2D5A27] pl-4 text-base leading-relaxed text-[#22322b]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[24px] border border-black/8 bg-[#f3efe7]/70 px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {ui.bridgeTagline}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-[#2f3e36] md:text-[15px]">
                {ui.bridgeText}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-[24px] border border-black/8 bg-white/38 px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <Button
                asChild
                size="lg"
                className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
              >
                <Link href="/tda">{ui.routePrimary}</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
              >
                <Link href="/oaa">{ui.routeSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;