"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContent } from "@/hooks/useContent";
import { useLocale } from "@/context/LocaleContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { site } = useContent();
  const { locale, setLocale } = useLocale();

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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f4ef]/78 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] supports-[backdrop-filter]:bg-[#f6f4ef]/62">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-primary">
          {site.brand.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            aria-label="Switch language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
            aria-label="Switch language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-primary"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                isActiveLink(link.to) ? "text-primary" : "text-muted-foreground"
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