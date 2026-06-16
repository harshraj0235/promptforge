import Link from "next/link";
import { Zap } from "lucide-react";
import styles from "./Footer.module.css";
import { getAllProfessionSlugs, getProfessionBySlug } from "@/data/professions";

export default function Footer() {
  const topProfessions = getAllProfessionSlugs().slice(0, 5).map(slug => getProfessionBySlug(slug)!);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <Zap className={styles.logoIcon} />
            <span>PromptForge</span>
          </Link>
          <p className={styles.description}>
            The ultimate library of professional AI prompts. Supercharge your workflow with ChatGPT, Claude, and Midjourney.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">Git</a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h3>Top Professions</h3>
          <ul>
            {topProfessions.map(prof => (
              <li key={prof.slug}>
                <Link href={`/prompts/${prof.slug}`}>
                  {prof.name} Prompts
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h3>Resources</h3>
          <ul>
            <li><Link href="/generator">AI Prompt Generator</Link></li>
            <li><Link href="/categories">All Categories</Link></li>
            <li><Link href="/blog">Blog & Guides</Link></li>
            <li><Link href="/premium">Premium Prompt Packs</Link></li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PromptForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
