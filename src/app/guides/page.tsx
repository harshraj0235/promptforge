import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllGuides } from "@/data/guides";

export const metadata = {
  title: "AI & Prompt Engineering Guides | PromptForge",
  description: "Learn how to master ChatGPT, Midjourney, and AI tools with our expert guides and tutorials.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>
              Prompt Engineering <span className="text-gradient">Guides</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Master AI tools with our expert-written tutorials and frameworks. Learn how to 10x your productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            {guides.map(guide => (
              <Link href={`/guides/${guide.slug}`} key={guide.slug} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--transition-fast)'
                }}
                className="guide-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-tertiary)', fontSize: '0.8rem', marginBottom: '1rem' }}>
                    <span>{guide.date}</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{guide.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{guide.description}</p>
                  <span style={{ color: 'var(--accent-secondary)', fontWeight: 500 }}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
