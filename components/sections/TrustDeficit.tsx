"use client";
import { useContent } from "@/hooks/useContent";

const TrustDeficit = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#2D5A27] mb-6">
          {site.trustDeficit.tagline}
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter mb-12 text-black">
          {site.trustDeficit.title}
        </h2>
        <div className="flex flex-col gap-6 max-w-2xl">
          {site.trustDeficit.body.map((paragraph: string, index: number) => (
            <p key={index} className="text-base md:text-lg text-black leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustDeficit;