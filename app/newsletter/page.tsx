import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}