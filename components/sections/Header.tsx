"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { site } = useContent();
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks =
    locale === "fr"
      ? [
          { to: "/authority-architecture", label: "Architecture d’autorité" },
          { to: "/oaa", label: "OAA" },
          { to: "/demonstration-analyses", label: "Analyses de démonstration" },
          { to: "/tda", label: "TDA" },
          { to: "/about", label: "À propos" },
        ]
      : [
          { to: "/authority-architecture", label: "Authority Architecture" },
          { to: "/oaa", label: "OAA" },
          { to: "/demonstration-analyses", label: "Demonstration Analyses" },
          { to: "/tda", label: "TDA" },
          { to: "/about", label: "About" },
        ];

  const isActiveLink = (to: string) => {
    if (to === "/demonstration-analyses") {
      return pathname === to || pathname.startsWith("/demonstration-analyses/");
    }
    return pathname === to;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ef]/78 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f6f4ef]/62">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-[#163629]"
        >
          {site.brand.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors hover:text-[#163629] ${
                isActiveLink(link.to) ? "text-[#163629]" : "text-[#5c6a63]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-sm font-semibold uppercase tracking-wide text-[#5c6a63] transition-colors hover:text-[#163629]"
            aria-label="Switch language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-sm font-semibold uppercase tracking-wide text-[#5c6a63]"
            aria-label="Switch language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="text-[#163629]"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-black/8 px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium ${
                isActiveLink(link.to) ? "text-[#163629]" : "text-[#5c6a63]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;