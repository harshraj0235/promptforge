import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfessionCard from "@/components/ProfessionCard";
import { getAllProfessionSlugs, getProfessionBySlug } from "@/data/professions";

export const metadata = {
  title: "Browse All Prompt Categories",
  description: "Browse our complete library of 500+ AI prompts organized by 20+ professional categories.",
};

export default function CategoriesPage() {
  const professions = getAllProfessionSlugs().map(slug => getProfessionBySlug(slug)!);
  
  // Sort alphabetically
  professions.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto 4rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>
              Browse <span className="text-gradient">Categories</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Find expertly crafted prompt templates for your specific role. Select your profession to see all available prompts.
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            {professions.map(prof => (
              <ProfessionCard key={prof.slug} profession={prof} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
