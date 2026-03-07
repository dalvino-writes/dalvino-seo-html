import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://archoric.com"),
  alternates: {
    canonical: "/",
  },
  title: "Archoric · Organic Authority Architecture for Healthcare SaaS",
  description:
    "Archoric builds the content infrastructure Healthcare SaaS companies need to close their trust deficit and compound organic authority. Start with the Trust Deficit Audit.",
  authors: [{ name: "Archoric" }],
  openGraph: {
    title: "Archoric · Organic Authority Architecture for Healthcare SaaS",
    description:
      "Archoric builds the content infrastructure Healthcare SaaS companies need to close their trust deficit and compound organic authority. Start with the Trust Deficit Audit.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@archoric",
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
