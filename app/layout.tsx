import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://archoric.com"),
  title: {
    default: "Archoric · Buyer Confidence Strategy for Complex SaaS",
    template: "%s · Archoric",
  },
  description:
    "Archoric helps SaaS companies improve website strategy, product positioning, proof, and buyer confidence in complex buying environments.",
  authors: [{ name: "Archoric" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Archoric · Buyer Confidence Strategy for Complex SaaS",
    description:
      "Archoric helps SaaS companies improve website strategy, product positioning, proof, and buyer confidence in complex buying environments.",
    type: "website",
    url: "https://archoric.com",
    siteName: "Archoric",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archoric · Buyer Confidence Strategy for Complex SaaS",
    description:
      "Archoric helps SaaS companies improve website strategy, product positioning, proof, and buyer confidence in complex buying environments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}