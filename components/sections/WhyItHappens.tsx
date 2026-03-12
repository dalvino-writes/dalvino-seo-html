"use client";
import { useContent } from "@/hooks/useContent";

const WhyItHappens = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="max-w-4xl rounded-[30px] border border-black/12 bg-[#0f1512] px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-[#6f9d87] mb-4">
            {site.whyItHappens.tagline}
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-tighter mb-10 text-white max-w-3xl">
            {site.whyItHappens.title}
          </h2>

          <div className="flex flex-col gap-6 max-w-3xl">
            {site.whyItHappens.body.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-base md:text-lg text-white/85 leading-relaxed"
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

export default WhyItHappens;