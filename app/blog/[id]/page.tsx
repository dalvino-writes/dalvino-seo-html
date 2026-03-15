"use client";

import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import VisualNotePost from "@/components/sections/VisualNotePost";
import { useLocale } from "@/context/LocaleContext";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams();
  const { locale } = useLocale();
  const [post, setPost] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`@/content/${locale}/posts/${id}.ts`);
        if (!module.post) {
          setNotFound(true);
          return;
        }
        setPost(module.post);
      } catch (err) {
        setNotFound(true);
      }
    };

    if (id && locale) loadPost();
  }, [id, locale]);

  if (notFound) {
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
        <main className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)] text-center">
            <h1 className="text-2xl md:text-3xl font-black mb-4 text-[#163629]">
              Post not found
            </h1>
            <Link
              href="/blog"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  if (post.type === "visual-note") {
    return <VisualNotePost post={post} />;
  }

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
        <article className="py-24 md:py-32">
          <div className="container max-w-5xl">
            <div className="max-w-3xl rounded-[28px] border border-black/8 bg-white/40 backdrop-blur-xl px-8 py-10 md:px-12 md:py-14 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {post.category}
                </span>
                <span className="text-xs text-[#5c6a63]">{post.readTime}</span>
                <span className="text-xs text-[#5c6a63]">{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-10 text-[#163629]">
                {post.title}
              </h1>

              <div className="flex flex-col gap-6">
                {post.content.map((block: any, index: number) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-2xl md:text-3xl font-black mt-6 text-[#163629]"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg text-[#2f3e36] leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <div className="mt-16 pt-8 border-t border-black/8">
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  ← Back to blog
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;