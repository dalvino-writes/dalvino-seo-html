"use client";
import { useContent } from "@/hooks/useContent";

const Transformation = () => {
  const { site } = useContent();

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#2D5A27] mb-6">
          {site.transformation.tagline}
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter mb-16 text-black">
          {site.transformation.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-black/40 mb-6">
              {site.transformation.before.label}
            </p>
            <ul className="flex flex-col gap-4">
              {site.transformation.before.points.map((point: string, index: number) => (
                <li key={index} className="text-base text-black/50 leading-relaxed pl-4 border-l border-black/20">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#2D5A27] mb-6">
              {site.transformation.after.label}
            </p>
            <ul className="flex flex-col gap-4">
              {site.transformation.after.points.map((point: string, index: number) => (
                <li key={index} className="text-base text-black leading-relaxed pl-4 border-l-2 border-[#2D5A27]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-black/50 leading-relaxed max-w-2xl">
          {site.transformation.footnote}
        </p>
      </div>
    </section>
  );
};

export default Transformation;