import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesPreview />
        <CaseStudiesPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}