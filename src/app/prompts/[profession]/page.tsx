import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptCard from "@/components/PromptCard";
import ProfessionCard from "@/components/ProfessionCard";
import FAQSection from "@/components/FAQSection";
import { getProfessionBySlug, getAllProfessionSlugs } from "@/data/professions";
import { getPromptsByProfession, promptCategories } from "@/data/prompts";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllProfessionSlugs();
  return slugs.map((slug) => ({ profession: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ profession: string }> }) {
  const { profession: slug } = await params;
  const profession = getProfessionBySlug(slug);
  
  if (!profession) return { title: "Not Found" };
  
  return {
    title: profession.metaTitle,
    description: profession.metaDescription,
    keywords: profession.relatedKeywords.join(", "),
  };
}

export default async function ProfessionPage({ params }: { params: Promise<{ profession: string }> }) {
  const { profession: slug } = await params;
  const profession = getProfessionBySlug(slug);
  
  if (!profession) {
    notFound();
  }
  
  const prompts = getPromptsByProfession(slug);
  const otherProfessions = getAllProfessionSlugs()
    .filter(s => s !== slug)
    .slice(0, 3)
    .map(s => getProfessionBySlug(s)!);

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
            <span style={{ color: "var(--text-primary)" }}>{profession.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="container" style={{ marginBottom: "4rem", textAlign: "center", maxWidth: "800px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{profession.icon}</div>
          <h1 style={{ marginBottom: "1rem" }}>Best ChatGPT Prompts for {profession.name}s</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            {profession.description}
          </p>
          <Link href="/generator" className="btn btn-primary">
            Build Custom {profession.name} Prompt
          </Link>
        </div>

        {/* Prompts List */}
        <div className="container" style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <h2>{prompts.length} Expert Prompts</h2>
          </div>
          
          <div className="grid grid-cols-2">
            {prompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="container" style={{ marginBottom: "5rem", maxWidth: "800px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Frequently Asked Questions</h2>
          <FAQSection faqs={profession.faqs} />
        </div>

        {/* Related */}
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>Explore Other Professions</h2>
          <div className="grid grid-cols-3">
            {otherProfessions.map(prof => (
              <ProfessionCard key={prof.slug} profession={prof} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
