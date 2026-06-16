import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfessionCard from "@/components/ProfessionCard";
import PromptCard from "@/components/PromptCard";
import { getAllProfessionSlugs, getProfessionBySlug } from "@/data/professions";
import { getFeaturedPrompts } from "@/data/prompts";
import styles from "./page.module.css";

export default function Home() {
  const topProfessions = getAllProfessionSlugs()
    .slice(0, 8)
    .map(slug => getProfessionBySlug(slug)!);
    
  const featuredPrompts = getFeaturedPrompts().slice(0, 3);

  return (
    <>
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className="badge badge-purple mb-4">✨ Over 500+ Prompts Added</div>
              <h1 className={styles.heroTitle}>
                The Ultimate AI Prompt Library for <span className="text-gradient">Professionals</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Stop writing generic prompts. Get 500+ expert-crafted prompts for ChatGPT, Claude, and Midjourney tailored specifically to your profession.
              </p>
              
              <div className={styles.heroCta}>
                <Link href="/generator" className="btn btn-primary btn-lg">
                  Try Prompt Generator <Zap size={18} />
                </Link>
                <Link href="/categories" className="btn btn-secondary btn-lg">
                  Browse Categories
                </Link>
              </div>
              
              <div className={styles.heroFeatures}>
                <span><CheckCircle size={16} className={styles.checkIcon} /> Copy-paste ready</span>
                <span><CheckCircle size={16} className={styles.checkIcon} /> Tested for ChatGPT & Claude</span>
                <span><CheckCircle size={16} className={styles.checkIcon} /> 100% Free</span>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Professions Grid */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Find Prompts for Your Role</h2>
              <Link href="/categories" className={styles.viewAllLink}>
                View all 20+ roles <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-4">
              {topProfessions.map(prof => (
                <ProfessionCard key={prof.slug} profession={prof} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={`${styles.section} ${styles.bgDarker}`}>
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2>How PromptForge Works</h2>
              <p>Get better AI results in seconds, not hours.</p>
            </div>
            
            <div className="grid grid-cols-3">
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Select Your Role</h3>
                <p>Choose your profession from our curated library. We've mapped out the exact workflows you need to automate.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Find or Generate</h3>
                <p>Browse our hand-crafted prompt templates or use our intelligent generator to create a custom prompt for your specific task.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Copy & Paste</h3>
                <p>Click to copy and paste directly into ChatGPT, Claude, or Gemini. Watch as the AI delivers expert-level results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Prompts */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2>Featured Prompts</h2>
              <p>A sneak peek at some of our most popular prompt templates.</p>
            </div>
            
            <div className="grid grid-cols-3">
              {featuredPrompts.map(prompt => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <h2>Ready to 10x your productivity?</h2>
              <p>Stop wasting time staring at a blank chat window. Let our AI Prompt Generator do the heavy lifting.</p>
              <Link href="/generator" className="btn btn-primary">
                Open AI Prompt Generator <Zap size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PromptForge",
            "url": "https://promptforge.example.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://promptforge.example.com/categories?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
