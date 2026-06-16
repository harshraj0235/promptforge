"use client";

import { useState } from "react";
import { Sparkles, Tag, ChevronDown, ChevronUp } from "lucide-react";
import CopyButton from "./CopyButton";
import styles from "./PromptCard.module.css";
import type { Prompt } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = prompt.promptText.length > 250;

  const displayTags = [prompt.category, ...prompt.tags].slice(0, 3);

  return (
    <div className={styles.card}>
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
        <pre className={styles.preText}>{prompt.promptText}</pre>
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
