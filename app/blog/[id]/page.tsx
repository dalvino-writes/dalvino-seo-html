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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-accent underline">Back to blog</Link>
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-24 md:py-32">
          <div className="container max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-10">
              {post.title}
            </h1>
            <div className="space-y-6">
              {post.content.map((block: any, index: number) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-10">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-foreground text-lg leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
            <div className="mt-16 border-t border-border pt-8">
              <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
                ← Back to blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;