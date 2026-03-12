"use client";
import { useContent } from "@/hooks/useContent";

const Transformation = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="rounded-[30px] border border-black/8 bg-white/34 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              {site.transformation.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-tighter mb-6 text-[#163629]">
              {site.transformation.title}
            </h2>
            <p className="text-sm md:text-base text-[#5c6a63] leading-relaxed max-w-2xl">
              {site.transformation.footnote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[24px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-black/35 mb-6">
                {site.transformation.before.label}
              </p>
              <ul className="flex flex-col gap-4">
                {site.transformation.before.points.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="text-base text-[#5e6963] leading-relaxed pl-4 border-l border-black/15"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-black/8 bg-white/44 backdrop-blur-xl px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-accent mb-6">
                {site.transformation.after.label}
              </p>
              <ul className="flex flex-col gap-4">
                {site.transformation.after.points.map((point: string, index: number) => (
                  <li
                    key={index}
                    className="text-base text-[#22322b] leading-relaxed pl-4 border-l-2 border-[#2D5A27]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;