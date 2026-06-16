import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromptGenerator from "@/components/PromptGenerator";

export const metadata = {
  title: "AI Prompt Generator",
  description: "Create custom, professional AI prompts for ChatGPT, Claude, and Midjourney with our interactive prompt builder.",
};

export default function GeneratorPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>
              AI Prompt <span className="text-gradient">Generator</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Build the perfect prompt for your specific task in seconds. Our generator uses proven frameworks to get the best results from any AI.
            </p>
          </div>
          
          <PromptGenerator />
        </div>
      </main>
      <Footer />
    </>
  );
}
