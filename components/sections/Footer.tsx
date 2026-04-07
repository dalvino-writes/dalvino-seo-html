"use client";

import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";

const Footer = () => {
  const { site } = useContent();
  const { locale } = useLocale();

  const footerLinks =
    locale === "fr"
      ? [
          { href: "/authority-architecture", label: "Architecture d’autorité" },
          { href: "/oaa", label: "OAA" },
          { href: "/demonstration-analyses", label: "Analyses de démonstration" },
          { href: "/tda", label: "TDA" },
          { href: "/engagement", label: "Engagement" },
          { href: "/faq", label: "FAQ" },
          { href: "/contact", label: "Contact" },
        ]
      : [
          { href: "/authority-architecture", label: "Authority Architecture" },
          { href: "/oaa", label: "OAA" },
          { href: "/demonstration-analyses", label: "Demonstration Analyses" },
          { href: "/tda", label: "TDA" },
          { href: "/engagement", label: "Engagement" },
          { href: "/faq", label: "FAQ" },
          { href: "/contact", label: "Contact" },
        ];

  return (
    <footer className="border-t border-black/8 bg-white/20 py-12 backdrop-blur-xl">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <Link
            href="/"
            className="font-heading text-base font-bold tracking-tight text-[#163629]"
          >
            {site.brand.name}
          </Link>

          <p className="text-sm leading-relaxed text-[#2f3e36]">
            {site.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5c6a63]">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#163629]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-[#5c6a63]">
          {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;