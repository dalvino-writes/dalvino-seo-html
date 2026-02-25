"use client";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

interface VisualNotePostProps {
  post: {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    htmlContent?: string;
    content?: ContentBlock[];
  };
}

const VisualNotePost = ({ post }: VisualNotePostProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {post.htmlContent ? (
          <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
        ) : (
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
                {post.content?.map((block, index) => {
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
            </div>
          </article>
        )}

        <div className="container max-w-2xl py-8 border-t border-border">
          <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
            ← Back to blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisualNotePost;