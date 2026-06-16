import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllGuides, getGuideBySlug } from "@/data/guides";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) return { title: "Not Found" };
  
  return {
    title: `${guide.title} | PromptForge Guides`,
    description: guide.description,
  };
}

export default async function GuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) {
    notFound();
  }

  // Very basic Markdown parser for this example
  const parseMarkdown = (md: string) => {
    let html = md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
      .replace(/<\/ul>\n<ul>/gim, '');
      
    // Handle paragraphs (lines not starting with HTML tags)
    html = html.split('\n').map(line => {
      if (line.trim() === '') return '';
      if (line.trim().startsWith('<')) return line;
      return `<p>${line}</p>`;
    }).join('\n');

    return html;
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Breadcrumbs */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-tertiary)", marginBottom: "3rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/guides" style={{ color: "var(--text-secondary)" }}>Guides</Link>
            <ChevronRight size={14} />
            <span style={{ color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>
              {guide.title}
            </span>
          </nav>

          <article>
            <header style={{ marginBottom: "3rem", textAlign: "center" }}>
              <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{guide.title}</h1>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", color: "var(--text-tertiary)", fontSize: "0.9rem" }}>
                <span>By {guide.author}</span>
                <span>•</span>
                <span>{guide.date}</span>
                <span>•</span>
                <span>{guide.readTime}</span>
              </div>
            </header>

            {/* Article Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": guide.title,
                  "description": guide.description,
                  "author": {
                    "@type": "Organization",
                    "name": guide.author
                  },
                  "datePublished": guide.date,
                }),
              }}
            />

            <div 
              className="markdown-body"
              style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "var(--text-secondary)" }}
              dangerouslySetInnerHTML={{ __html: parseMarkdown(guide.content) }} 
            />
          </article>
          
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
            <h3 style={{ marginBottom: "1rem" }}>Ready to apply what you learned?</h3>
            <Link href="/generator" className="btn btn-primary">
              Open AI Prompt Generator
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
