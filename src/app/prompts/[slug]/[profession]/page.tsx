import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import FAQSection from "@/components/FAQSection";
import { getProfessionBySlug, getAllProfessionSlugs } from "@/data/professions";
import { getPromptsByProfessionAndTool } from "@/data/prompts";
import { aiTools } from "@/data/generator-options";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllProfessionSlugs();
  const toolIds = aiTools.map(t => t.id);
  
  const params = [];
  for (const profession of slugs) {
    for (const slug of toolIds) {
      params.push({ slug, profession });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, profession: string }> }) {
  const { slug: toolSlug, profession: profSlug } = await params;
  const profession = getProfessionBySlug(profSlug);
  const tool = aiTools.find(t => t.id === toolSlug);
  
  if (!profession || !tool) return { title: "Not Found" };
  
  return {
    title: `Best ${tool.name} Prompts for ${profession.name}s | PromptForge`,
    description: `Discover the ultimate collection of ${tool.name} prompts specifically designed for ${profession.name}s. Enhance your workflow today.`,
    keywords: `${tool.name} prompts for ${profession.name}, ${tool.name} ${profession.name}, best ai prompts`,
  };
}

export default async function ToolProfessionPage({ params }: { params: Promise<{ slug: string, profession: string }> }) {
  const { slug: toolSlug, profession: profSlug } = await params;
  const profession = getProfessionBySlug(profSlug);
  const tool = aiTools.find(t => t.id === toolSlug);
  
  if (!profession || !tool) {
    notFound();
  }
  
  const prompts = getPromptsByProfessionAndTool(profSlug, tool.name);

  return (
    <>
      <Header />
      <main className="main-content">
        {/* Breadcrumbs */}
        <div className="container">
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-tertiary)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/categories" style={{ color: "var(--text-secondary)" }}>Categories</Link>
            <ChevronRight size={14} />
            <Link href={`/prompts/${profSlug}`} style={{ color: "var(--text-secondary)" }}>{profession.name}</Link>
            <ChevronRight size={14} />
            <span style={{ color: "var(--text-primary)" }}>{tool.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="container" style={{ marginBottom: "4rem", textAlign: "center", maxWidth: "800px" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", fontSize: "4rem", marginBottom: "1rem" }}>
            <span>{profession.icon}</span>
            <span style={{ fontSize: "2rem", color: "var(--text-tertiary)" }}>+</span>
            <span>{tool.icon}</span>
          </div>
          <h1 style={{ marginBottom: "1rem" }}>{tool.name} Prompts for {profession.name}s</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Unlock the full potential of {tool.name} in your career. Here are the top prompts used by expert {profession.name}s to save time and automate their daily tasks.
          </p>
          <Link href="/generator" className="btn btn-primary">
            Generate Custom {tool.name} Prompt
          </Link>
        </div>

        {/* Prompts List */}
        <div className="container" style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <h2>{prompts.length} Verified {tool.name} Prompts</h2>
          </div>
          
          {prompts.length > 0 ? (
            <div className="grid grid-cols-2">
              {prompts.map(prompt => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ marginBottom: "1rem" }}>We're adding more {tool.name} prompts soon!</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                In the meantime, you can use our AI Generator to create any custom prompt for {tool.name}.
              </p>
              <Link href="/generator" className="btn btn-primary">Open Generator</Link>
            </div>
          )}
        </div>

        {/* FAQs - Dynamically adjusting FAQs for the tool */}
        <div className="container" style={{ marginBottom: "5rem", maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{tool.name} + {profession.name} FAQs</h2>
          <FAQSection faqs={[
            {
              question: `Why is ${tool.name} good for ${profession.name}s?`,
              answer: `${tool.name} is excellent for ${profession.name}s because it can rapidly automate standard tasks, generate new ideas based on specific frameworks, and improve overall productivity.`
            },
            {
              question: `How do I write a good ${tool.name} prompt for this role?`,
              answer: `Always specify your role ("Act as an expert ${profession.name}"), define the output format (e.g., bullet points, table), and provide sufficient context. Use our Prompt Generator to build these automatically.`
            }
          ]} />
        </div>
      </main>
      <Footer />
    </>
  );
}
