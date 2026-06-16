"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button 
      onClick={handleCopy} 
      className={`${styles.copyBtn} ${copied ? styles.copied : ""} ${className}`}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {label && <span>{copied ? "Copied!" : label}</span>}
    </button>
  );
}
