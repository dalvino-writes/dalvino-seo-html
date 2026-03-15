"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";

export default function Blog() {
  const { blog } = useContent();
  const [filter, setFilter] = useState("all");

  const filteredPosts =
    filter === "all"
      ? blog.posts
      : filter === "visualNotes"
      ? blog.posts.filter((p) => p.type === "visual-note")
      : blog.posts.filter((p) => p.category === filter);

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
        <section className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                {blog.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6 text-[#163629]">
                {blog.title}
              </h1>
              <p className="text-lg text-[#2f3e36] leading-relaxed">
                {blog.subtitle}
              </p>
            </div>

            <div className="mt-16 flex flex-wrap gap-3 max-w-4xl">
              {Object.entries(blog.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full border backdrop-blur-xl transition-colors shadow-none ${
                    filter === key
                      ? "bg-[#2D5A27] text-white border-[#2D5A27]"
                      : "bg-white/55 text-[#163629] border-black/10 hover:bg-white/70"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-12 max-w-4xl space-y-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="rounded-[22px] border border-black/8 bg-white/38 backdrop-blur-xl px-6 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] hover:bg-white/45 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c6a63]">
                        {blog.postTypeLabels[post.type as keyof typeof blog.postTypeLabels]}
                      </span>
                      <span className="text-xs text-[#5c6a63]">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-black mb-3 text-[#163629]">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#2f3e36] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}