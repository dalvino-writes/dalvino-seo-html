"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useContent } from "@/hooks/useContent";

export default function VisualNotesArchive() {
  const { blog } = useContent();
  const notes = blog.posts.filter((p) => p.type === "visual-note");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              {blog.visualNotesArchive.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-12">
              {blog.visualNotesArchive.subtitle}
            </p>

            <div className="space-y-6">
              {notes.map((note) => (
                <article
                  key={note.id}
                  className="border border-border p-6 bg-card"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {note.date} · {note.readTime}
                  </p>
                  <h2 className="text-lg font-bold mb-2">{note.title}</h2>
                  <p className="text-foreground text-sm leading-relaxed">
                    {note.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}