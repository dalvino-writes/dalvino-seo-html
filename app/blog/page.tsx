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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {blog.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-10">
              {blog.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {Object.entries(blog.categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
                    filter === key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="border border-border p-6 bg-card hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {blog.postTypeLabels[post.type as keyof typeof blog.postTypeLabels]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-foreground text-sm leading-relaxed">
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