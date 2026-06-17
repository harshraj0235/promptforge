import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Sparkles } from "lucide-react";

export const metadata = {
  title: "Premium AI Prompts | PromptForge Masterclass",
  description: "Unlock 500+ highly-engineered premium AI prompts and master the art of prompt engineering.",
};

export default function PremiumPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ display: "inline-block", background: "rgba(168, 85, 247, 0.1)", color: "var(--accent-secondary)", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem" }}>
              <Sparkles size={14} style={{ display: "inline", marginRight: "0.5rem", verticalAlign: "middle" }} />
              Limited Time Offer
            </span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
              Stop Writing <span className="text-gradient">Basic Prompts.</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
              Unlock the exact step-by-step Prompt Engineering frameworks used by top 1% professionals to automate their workflows.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: "4rem", alignItems: "center", marginBottom: "5rem" }}>
            <div style={{ background: "var(--bg-tertiary)", padding: "3rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--accent-secondary)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-15px", right: "-15px", background: "var(--accent-primary)", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontWeight: "bold", transform: "rotate(5deg)" }}>
                Save 70%
              </div>
              <h2 style={{ marginBottom: "0.5rem" }}>The Masterclass Bundle</h2>
              <div style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                $15 <span style={{ fontSize: "1.5rem", color: "var(--text-tertiary)", textDecoration: "line-through" }}>$49</span>
              </div>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>One-time payment. Lifetime access.</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Check size={20} color="var(--accent-secondary)" />
                  <span><strong>500+ Premium Prompts</strong> across all professions</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Check size={20} color="var(--accent-secondary)" />
                  <span><strong>Advanced Frameworks</strong> (PAS, AIDA, MECE, Few-Shot)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Check size={20} color="var(--accent-secondary)" />
                  <span><strong>Notion Database</strong> export for easy organization</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Check size={20} color="var(--accent-secondary)" />
                  <span><strong>Lifetime Updates</strong> as new AI models are released</span>
                </li>
              </ul>

              <a href="#" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "1rem" }}>
                Unlock Instant Access
              </a>
              <p style={{ textAlign: "center", color: "var(--text-tertiary)", fontSize: "0.8rem", marginTop: "1rem" }}>
                Secure checkout via Stripe. 30-day money-back guarantee.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "1.5rem" }}>What's inside the Premium Pack?</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>1. The Megaprompt Architecture</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Learn how to string together constraints, persona injections, and step-by-step logic to force the AI to produce flawless results every time.</p>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>2. Copy & Paste Templates</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>No more guessing. Just copy our exact variables, fill in the blanks, and get agency-level output in 30 seconds.</p>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>3. Bypass AI Detectors</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Exclusive prompts that break the standard "AI tone" and write with high perplexity and burstiness.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
