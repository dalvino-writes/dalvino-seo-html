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
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-transparent text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42]"
          style={{ backgroundImage: "url('/images/archoric-soft-bg.jpg')" }}
        />
        <div className="absolute inset-0 backdrop-blur-[6px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,240,0.24)_0%,rgba(244,241,235,0.36)_100%)]" />
      </div>

      <Header />
      <main className="relative z-10 flex-1">
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