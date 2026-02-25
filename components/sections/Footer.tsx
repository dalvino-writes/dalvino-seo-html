"use client";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";

const Footer = () => {
  const { site } = useContent();

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-4">
        <Link href="/" className="font-heading text-base font-bold text-primary">
          {site.brand.name}
        </Link>
        <p className="text-sm text-muted-foreground">
          {site.footer.tagline}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-primary transition-colors">
            {site.nav.services}
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            {site.nav.blog}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {site.nav.contact}
          </Link>
          <Link href="/faq" className="hover:text-primary transition-colors">
            {site.nav.faq}
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;