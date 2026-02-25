import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Dalvino Luce · SEO Web Copywriter & Content Strategist",
  description:
    "Dalvino Luce helps startups and small businesses turn their expertise into structured SEO content, to generate qualified leads consistently, without spending on ads.",
  authors: [{ name: "Dalvino Luce" }],
  openGraph: {
    title: "Dalvino Luce · SEO Web Copywriter & Content Strategist",
    description:
      "Dalvino Luce helps startups and small businesses turn their expertise into structured SEO content, to generate qualified leads consistently, without spending on ads.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dalvinoseo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EQMQGSTNR4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQMQGSTNR4');
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}