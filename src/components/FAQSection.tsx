"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQSection.module.css";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
        >
          <button 
            className={styles.question} 
            onClick={() => toggleOpen(index)}
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <ChevronDown className={styles.icon} size={20} />
          </button>
          <div className={styles.answer}>
            <div className={styles.answerContent}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
