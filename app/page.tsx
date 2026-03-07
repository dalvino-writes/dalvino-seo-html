import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustDeficit from "@/components/sections/TrustDeficit";
import WhyItHappens from "@/components/sections/WhyItHappens";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Transformation from "@/components/sections/Transformation";
import WhyArchoric from "@/components/sections/WhyArchoric";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustDeficit />
        <WhyItHappens />
        <ServicesPreview />
        <Transformation />
        <WhyArchoric />
        <CaseStudiesPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}