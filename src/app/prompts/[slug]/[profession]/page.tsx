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
    title: `Best ${tool.name} Prompts for ${profession.name}s | Copy & Paste`,
    description: `Unlock the ultimate database of 50+ ${tool.name} prompts specifically engineered for ${profession.name}s. Automate tasks, write better content, and save hours of work.`,
    keywords: `${tool.name} prompts for ${profession.name}, best ${tool.name} ${profession.name} prompts, ai for ${profession.name}s`,
    alternates: {
      canonical: `https://promptforge.example.com/prompts/${toolSlug}/${profSlug}`
    }
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://promptforge.example.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prompts", "item": "https://promptforge.example.com/categories" },
      { "@type": "ListItem", "position": 3, "name": profession.name, "item": `https://promptforge.example.com/prompts/${profSlug}` },
      { "@type": "ListItem", "position": 4, "name": tool.name, "item": `https://promptforge.example.com/prompts/${toolSlug}/${profSlug}` }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
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

        {/* Semantic SEO Content Block */}
        <div className="container" style={{ marginBottom: "4rem", maxWidth: "800px" }}>
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Why Use {tool.name} for {profession.name} Tasks?</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1rem" }}>
              As a {profession.name}, your time is valuable. Leveraging {tool.name} allows you to automate repetitive tasks, brainstorm creative solutions, and generate high-quality deliverables in a fraction of the time. The secret to getting the best results from {tool.name} lies in <strong>Prompt Engineering</strong>. By using highly structured, professionally vetted prompts, you ensure the AI understands your context, constraints, and desired output format.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
              Our database of {tool.name} prompts for {profession.name}s is continuously updated to reflect the latest capabilities of the AI model, ensuring you always have a competitive edge in your industry.
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>{tool.name} + {profession.name} FAQs</h2>
            <FAQSection faqs={[
              {
                question: `What is the best way to write a ${tool.name} prompt for a ${profession.name}?`,
                answer: `The most effective framework is: 1) Assign a persona ("Act as a Senior ${profession.name}"), 2) Define the specific task clearly, 3) Provide context or constraints, and 4) Specify the output format (e.g., Markdown table, bulleted list).`
              },
              {
                question: `Can I use these ${tool.name} prompts for commercial purposes?`,
                answer: `Yes! All the free and premium prompts in our library are designed for professional, commercial use. They are specifically crafted to generate outputs that you can use in your daily workflow.`
              },
              {
                question: `Does ${tool.name} understand advanced ${profession.name} terminology?`,
                answer: `Absolutely. ${tool.name} has been trained on a massive corpus of text and understands industry-specific jargon. Using precise terminology in your prompt actually helps the AI generate more accurate and professional responses.`
              }
            ]} />
          </section>
        </div>

        {/* Cross-Linking / Spider Web Architecture */}
        <div className="container" style={{ marginBottom: "5rem", borderTop: "1px solid var(--border-color)", paddingTop: "4rem" }}>
          <div className="grid grid-cols-2" style={{ gap: "2rem" }}>
            <div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Other AI Tools for {profession.name}s</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {aiTools.filter(t => t.id !== toolSlug).slice(0, 4).map(t => (
                  <li key={t.id}>
                    <Link href={`/prompts/${t.id}/${profSlug}`} style={{ color: "var(--accent-secondary)", textDecoration: "underline" }}>
                      {t.name} Prompts for {profession.name}s
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Explore Other Professions</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li style={{ color: "var(--text-secondary)" }}>Looking for a different role? Check out our <Link href="/categories" style={{ color: "var(--accent-secondary)" }}>full categories list</Link>.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
