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

  const navLinks = [
    { to: "/", label: site.nav.home },
    { to: "/services", label: site.nav.services },
    { to: "/oaa", label: site.nav.caseStudies },
    { to: "/a-propos", label: site.nav.about },
    { to: "/blog", label: site.nav.blog },
    { to: "/contact", label: site.nav.contact },
  ];

  return (
    <header className="border-b border-border bg-background">
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
                pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
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
                pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
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