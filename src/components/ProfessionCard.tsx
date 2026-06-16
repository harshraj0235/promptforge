import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProfessionCard.module.css";
import type { Profession } from "@/data/professions";
import { getPromptCountByProfession } from "@/data/prompts";

interface ProfessionCardProps {
  profession: Profession;
}

export default function ProfessionCard({ profession }: ProfessionCardProps) {
  const promptCount = getPromptCountByProfession(profession.slug);

  return (
    <Link href={`/prompts/${profession.slug}`} className={styles.card}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{profession.icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{profession.name}</h3>
        <p className={styles.description}>{profession.shortDescription}</p>
        <div className={styles.footer}>
          <span className={styles.count}>{promptCount}+ Prompts</span>
          <span className={styles.arrow}><ArrowRight size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
