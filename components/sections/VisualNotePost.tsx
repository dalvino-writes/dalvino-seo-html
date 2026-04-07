"use client";

import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";

interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

interface VisualNotePostProps {
  post: {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    htmlContent?: string;
    content?: ContentBlock[];
  };
}

const VisualNotePost = ({ post }: VisualNotePostProps) => {
  const { locale } = useLocale();

  const ui =
    locale === "fr"
      ? {
          articleTagline: "Note visuelle",
          backToInsights: "← Retour aux insights",
          routeTagline: "Où aller ensuite",
          routeTitle:
            "Une note peut ouvrir une idée. Le reste du système vous aide à l’appliquer.",
          routeCards: [
            {
              title: "Voir le point d’entrée",
              description:
                "Si vous voulez repartir du diagnostic au lieu de rester dans le contenu, allez vers le TDA.",
              href: "/tda",
              cta: "Voir le TDA",
            },
            {
              title: "Voir le cadre complet",
              description:
                "Si vous voulez comprendre comment cette logique devient système, allez vers OAA.",
              href: "/oaa",
              cta: "Voir OAA",
            },
            {
              title: "Voir la preuve publique",
              description:
                "Si vous voulez voir la méthode appliquée à un vrai diagnostic public, allez vers les analyses de démonstration.",
              href: "/demonstration-analyses",
              cta: "Voir les analyses de démonstration",
            },
          ],
          finalTagline: "Commencez ici",
          finalTitle:
            "Une note peut clarifier une intuition. Le diagnostic montre ce qui se passe réellement sur votre site.",
          finalPrimaryCta: "Commencer par l’Audit",
          finalSecondaryCta: "Retour aux insights",
        }
      : {
          articleTagline: "Visual Note",
          backToInsights: "← Back to insights",
          routeTagline: "Where To Go Next",
          routeTitle:
            "A note can open an idea. The rest of the system helps apply it.",
          routeCards: [
            {
              title: "See the entry point",
              description:
                "If you want to return to the diagnostic instead of staying in content, go to the TDA.",
              href: "/tda",
              cta: "See the TDA",
            },
            {
              title: "See the full framework",
              description:
                "If you want to understand how this logic becomes a system, go to OAA.",
              href: "/oaa",
              cta: "See OAA",
            },
            {
              title: "See public proof",
              description:
                "If you want to see the method applied to a real public diagnostic, go to Demonstration Analyses.",
              href: "/demonstration-analyses",
              cta: "See Demonstration Analyses",
            },
          ],
          finalTagline: "Start Here",
          finalTitle:
            "A note can clarify an intuition. The diagnostic shows what is actually happening on your site.",
          finalPrimaryCta: "Start with the Audit",
          finalSecondaryCta: "Back to insights",
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
        {post.htmlContent ? (
          <article className="py-24 md:py-32">
            <div className="container max-w-5xl">
              <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {ui.articleTagline}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#5c6a63]">{post.readTime}</span>
                  <span className="text-xs text-[#5c6a63]">{post.date}</span>
                </div>

                <h1 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                  {post.title}
                </h1>

                <div
                  className="prose prose-neutral max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                />

                <div className="mt-16 border-t border-black/8 pt-8">
                  <Link
                    href="/insights"
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    {ui.backToInsights}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <article className="py-24 md:py-32">
            <div className="container max-w-5xl">
              <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {ui.articleTagline}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#5c6a63]">{post.readTime}</span>
                  <span className="text-xs text-[#5c6a63]">{post.date}</span>
                </div>

                <h1 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[#163629] md:text-5xl">
                  {post.title}
                </h1>

                <div className="flex flex-col gap-6">
                  {post.content?.map((block, index) => {
                    if (block.type === "heading") {
                      return (
                        <h2
                          key={index}
                          className="mt-6 text-2xl font-black text-[#163629] md:text-3xl"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    return (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-[#2f3e36] md:text-lg"
                      >
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-16 border-t border-black/8 pt-8">
                  <Link
                    href="/insights"
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    {ui.backToInsights}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="rounded-[30px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {ui.routeTagline}
                </p>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                  {ui.routeTitle}
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {ui.routeCards.map((card, index) => (
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

        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="max-w-4xl rounded-[28px] border border-black/8 bg-white/40 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-12 md:py-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {ui.finalTagline}
              </p>
              <h2 className="mb-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#163629] md:text-4xl">
                {ui.finalTitle}
              </h2>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 bg-[#2D5A27] px-7 font-semibold text-white shadow-none hover:bg-[#1f411c]"
                >
                  <Link href="/tda">{ui.finalPrimaryCta}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/10 bg-white/70 px-7 font-semibold text-[#163629] hover:bg-white"
                >
                  <Link href="/insights">{ui.finalSecondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisualNotePost;