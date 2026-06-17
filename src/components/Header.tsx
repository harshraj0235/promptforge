"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ background: 'var(--accent-primary)', color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
        🎉 Launch Special: Unlock the Premium Prompt Masterclass Bundle for 70% Off! <Link href="/premium" style={{ color: 'white', textDecoration: 'underline', fontWeight: 'bold', marginLeft: '0.5rem' }}>Claim Offer →</Link>
      </div>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Zap className={styles.logoIcon} />
          <span>PromptForge</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/generator" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Generator</Link>
          <Link href="/categories" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
          <Link href="/guides" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Guides</Link>
          <Link href="/generator" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Start Generating
          </Link>
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
    </>
  );
}
