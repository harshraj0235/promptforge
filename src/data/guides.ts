export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export const guides: Guide[] = [
  {
    slug: "chatgpt-prompt-engineering-guide",
    title: "The Ultimate Guide to ChatGPT Prompt Engineering",
    description: "Learn the core frameworks (PAS, AIDA, RTF) to get 10x better results from ChatGPT.",
    author: "PromptForge Team",
    date: "2023-10-01",
    readTime: "8 min read",
    content: `
## Why Prompt Engineering Matters

The difference between a generic ChatGPT response and an expert-level output is entirely dependent on your prompt.

### 1. The RTF Framework (Role, Task, Format)
The most fundamental framework for business prompts:
- **Role**: "Act as a Senior Data Analyst"
- **Task**: "Analyze these sales numbers and find anomalies"
- **Format**: "Present the findings in a Markdown table"

### 2. Context is King
Always provide background information. The AI doesn't know your company's tone of voice, target audience, or constraints unless you tell it.

### 3. Iterative Refinement
Don't expect perfection on the first try. Ask the AI to tweak the output: "Make it punchier," "Expand on point 3," or "Change the tone to be more academic."
    `
  },
  {
    slug: "midjourney-v6-architecture-prompts",
    title: "Midjourney v6 for Architects: A Visual Guide",
    description: "How to use Midjourney to generate stunning architectural concepts and renders.",
    author: "PromptForge Team",
    date: "2023-10-05",
    readTime: "6 min read",
    content: `
## Midjourney for Concept Design

Midjourney v6 is incredibly photorealistic, making it the perfect tool for early-stage architectural mood boards.

### Key Prompt Elements for Renders
- **Lighting**: "volumetric lighting, golden hour, cinematic lighting"
- **Style**: "brutalism, biophilic design, parametric architecture"
- **Medium**: "unreal engine 5 render, octane render, architectural photography"

### Example Prompt
> A modern biophilic skyscraper in Tokyo, covered in lush greenery, glass facade reflecting the sunset, volumetric lighting, photorealistic, 8k, architectural photography --ar 16:9 --v 6.0
    `
  },
  {
    slug: "ai-for-seo-content",
    title: "How to Use AI for SEO Content Without Getting Penalized",
    description: "A strategic guide to using AI tools for content marketing while maintaining high quality.",
    author: "PromptForge Team",
    date: "2023-10-10",
    readTime: "10 min read",
    content: `
## The Truth About AI and Google

Google's official stance is that they reward high-quality content, regardless of how it is produced. However, generic AI spam will not rank.

### 1. Use AI for Outlining, Not Writing
The best use case for ChatGPT is creating comprehensive content briefs and outlines.
> "Create a MECE (Mutually Exclusive, Collectively Exhaustive) outline for an article about 'Best CRM Software'."

### 2. Inject Original Data
AI cannot conduct original research. You must inject your own statistics, expert quotes, and case studies into the AI-generated drafts.

### 3. Programmatic SEO
Using AI to generate structured data for hundreds of programmatic pages (like this PromptForge directory) is highly effective when the data provides real value to the user.
    `
  }
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}
