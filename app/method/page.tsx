import { Metadata } from "next";
import MethodPage from "./MethodPage";

export const metadata: Metadata = {
  title: "How the Trust Deficit Audit Works",
  description:
    "Learn how Archoric evaluates Healthcare SaaS credibility across compliance, operational fluency, authority structure, and validation.",
  alternates: {
    canonical: "/method",
  },
  openGraph: {
    title: "How the Trust Deficit Audit Works · Archoric",
    description:
      "Learn how Archoric evaluates Healthcare SaaS credibility across compliance, operational fluency, authority structure, and validation.",
    url: "https://archoric.com/method",
    siteName: "Archoric",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How the Trust Deficit Audit Works · Archoric",
    description:
      "Learn how Archoric evaluates Healthcare SaaS credibility across compliance, operational fluency, authority structure, and validation.",
  },
};

export default function Page() {
  return <MethodPage />;
}