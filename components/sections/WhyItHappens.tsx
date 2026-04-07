"use client";

import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";

const WhyItHappens = () => {
  const { site } = useContent();
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          mechanismTagline: "Le mécanisme",
          mechanismPoints: [
            {
              title: "Le signal existe, mais il ne se connecte pas",
              description:
                "Vous avez parfois de bons éléments de preuve, de conformité ou de crédibilité, mais ils restent isolés au lieu de renforcer un même système lisible.",
            },
            {
              title: "L’acheteur doit faire trop de travail mental",
              description:
                "Quand la structure n’aide pas assez, l’acheteur doit lui-même relier le message, le risque, la preuve et la capacité du produit à tenir dans son environnement.",
            },
            {
              title: "Le doute s’installe avant la prise de contact",
              description:
                "Le problème ne se voit pas toujours comme un rejet clair. Il se voit souvent comme une hésitation, une inertie ou un abandon silencieux avant l’appel.",
            },
          ],
          routeTitle:
            "Quand vous comprenez le mécanisme, vous pouvez ensuite choisir la bonne porte.",
          routeLinks: [
            {
              href: "/authority-architecture",
              label: "Voir l’architecture d’autorité",
            },
            {
              href: "/tda",
              label: "Commencer par l’Audit",
            },
          ],
        }
      : {
          mechanismTagline: "The Mechanism",
          mechanismPoints: [
            {
              title: "The signal exists, but it does not connect",
              description:
                "You may already have strong proof, compliance, or credibility signals, but they remain isolated instead of reinforcing one readable system.",
            },
            {
              title: "The buyer has to do too much mental work",
              description:
                "When the structure is not helping enough, the buyer has to connect the message, the risk, the proof, and the product’s fit on their own.",
            },
            {
              title: "Doubt settles in before contact happens",
              description:
                "The problem does not always show up as an explicit rejection. It often appears as hesitation, inertia, or silent drop-off before the call.",
            },
          ],
          routeTitle:
            "Once you understand the mechanism, you can choose the right next door.",
          routeLinks: [
            {
              href: "/authority-architecture",
              label: "See Authority Architecture",
            },
            {
              href: "/tda",
              label: "Start with the Audit",
            },
          ],
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="rounded-[30px] border border-black/12 bg-[#0f1512] px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:px-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#6f9d87]">
                {site.whyItHappens.tagline}
              </p>

              <h2 className="mb-10 max-w-3xl text-3xl font-black leading-[1.08] tracking-tighter text-white md:text-5xl">
                {site.whyItHappens.title}
              </h2>

              <div className="flex max-w-3xl flex-col gap-6">
                {site.whyItHappens.body.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-white/85 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[24px] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#87b29d]">
                  {ui.mechanismTagline}
                </p>

                <div className="flex flex-col gap-4">
                  {ui.mechanismPoints.map((point, index) => (
                    <div
                      key={index}
                      className="rounded-[18px] border border-white/8 bg-white/5 px-5 py-5"
                    >
                      <h3 className="mb-2 text-base font-black tracking-tight text-white">
                        {point.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/75">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl">
                <h3 className="mb-5 text-xl font-black tracking-tight text-white">
                  {ui.routeTitle}
                </h3>

                <div className="flex flex-col gap-3">
                  {ui.routeLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-sm font-semibold text-[#9fceb8] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItHappens;