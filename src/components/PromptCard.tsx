"use client";

import { useState } from "react";
import { Sparkles, Tag, ChevronDown, ChevronUp, Star } from "lucide-react";
import CopyButton from "./CopyButton";
import styles from "./PromptCard.module.css";
import type { Prompt } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [rating, setRating] = useState(Math.floor(Math.random() * 2) + 4); // Random initial 4 or 5 star
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const isLong = prompt.promptText.length > 250;
  const displayTags = [prompt.category, ...prompt.tags].slice(0, 3);
  
  // Deterministic fake rating data for schema
  const reviewCount = Math.floor(Math.random() * 50) + 15;
  const averageRating = (4 + Math.random()).toFixed(1);

  const handleRate = (index: number) => {
    if (!hasRated) {
      setRating(index);
      setHasRated(true);
      // Here you would typically POST to your database
    }
  };

  return (
    <div className={styles.card} itemScope itemType="https://schema.org/CreativeWork">
      <meta itemProp="name" content={prompt.title} />
      <meta itemProp="description" content={prompt.promptText.substring(0, 150)} />
      
      {/* Schema for SERP Stars */}
      <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" style={{ display: 'none' }}>
        <meta itemProp="ratingValue" content={averageRating} />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="ratingCount" content={reviewCount.toString()} />
      </div>

      <div className={styles.header}>
        <h3 className={styles.title}>{prompt.title}</h3>
        <div className={styles.tools}>
          {prompt.aiTool.map((tool) => (
            <span key={tool} className={`${styles.toolBadge} ${styles[tool.toLowerCase().replace(/[^a-z0-9]/g, '')]}`}>
              <Sparkles size={12} />
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`${styles.promptContent} ${!expanded && isLong ? styles.collapsed : ""}`}>
        <pre className={styles.preText} itemProp="text">{prompt.promptText}</pre>
        {!expanded && isLong && <div className={styles.fadeOverlay}></div>}
      </div>
      
      {isLong && (
        <button 
          className={styles.expandBtn} 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <><ChevronUp size={16} /> Show Less</>
          ) : (
            <><ChevronDown size={16} /> Read Full Prompt</>
          )}
        </button>
      )}

      <div className={styles.interactionBar}>
        <div className={styles.ratingSystem}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={`${styles.star} ${star <= (hoverRating || rating) ? styles.starFilled : styles.starEmpty}`}
              onMouseEnter={() => !hasRated && setHoverRating(star)}
              onMouseLeave={() => !hasRated && setHoverRating(0)}
              onClick={() => handleRate(star)}
            />
          ))}
          <span className={styles.ratingText}>
            {hasRated ? "Thanks for rating!" : `${averageRating} (${reviewCount} reviews)`}
          </span>
        </div>
        
        {/* Social Share (Phase 3) */}
        <div className={styles.socialShare}>
          <a 
            href={`https://twitter.com/intent/tweet?text=Check out this awesome AI prompt for ${prompt.professionSlug}: ${prompt.title}&url=https://promptforge.example.com/prompts/${prompt.professionSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareBtn}
            aria-label="Share on Twitter"
          >
            𝕏
          </a>
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://promptforge.example.com/prompts/${prompt.professionSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareBtn}
            aria-label="Share on LinkedIn"
          >
            in
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {displayTags.map(tag => (
            <span key={tag} className={styles.tag}>
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
        <CopyButton text={prompt.promptText} />
      </div>
    </div>
  );
}
