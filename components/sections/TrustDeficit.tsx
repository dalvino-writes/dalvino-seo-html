"use client";
import { useContent } from "@/hooks/useContent";

const TrustDeficit = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-accent mb-4">
            {site.trustDeficit.tagline}
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-tighter mb-10 text-[#163629]">
            {site.trustDeficit.title}
          </h2>

          <div className="flex flex-col gap-6 max-w-2xl">
            {site.trustDeficit.body.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDeficit;