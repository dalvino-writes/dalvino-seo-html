"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";

export default function BuildInPublic() {
  const { site } = useContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
              {site.buildInPublic.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              {site.buildInPublic.description}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}