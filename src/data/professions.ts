export interface Profession {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  relatedKeywords: string[];
  promptCount?: number;
  faqs: { question: string; answer: string }[];
}

export const professions: Profession[] = [
  {
    slug: "real-estate-agent",
    name: "Real Estate Agent",
    icon: "🏠",
    shortDescription: "Property listings, client outreach & market analysis prompts",
    description:
      "Discover powerful AI prompts tailored for real estate professionals. Generate compelling property descriptions, craft client emails, analyze market trends, create social media content, and streamline your real estate workflow with ChatGPT, Claude, and other AI tools.",
    metaTitle: "150+ Best AI Prompts for Real Estate Agents (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for real estate agents. Generate property listings, client emails, market analysis reports & more. Copy-paste ready for ChatGPT, Claude & Gemini.",
    relatedKeywords: [
      "chatgpt prompts for real estate",
      "ai prompts real estate agents",
      "real estate chatgpt",
      "property description generator",
      "real estate email templates ai",
    ],
    faqs: [
      {
        question: "What are the best ChatGPT prompts for real estate agents?",
        answer:
          "The best prompts include property description generators, market analysis templates, client follow-up email drafts, social media content for listings, and neighborhood comparison reports. Our library has 30+ tested prompts specifically designed for real estate professionals.",
      },
      {
        question: "Can AI help me write property listings?",
        answer:
          "Absolutely. AI tools like ChatGPT can generate compelling property descriptions in seconds. Use prompts that include the property's key features, location highlights, and target buyer persona for the best results.",
      },
      {
        question: "How do I use AI for real estate lead generation?",
        answer:
          "Use AI prompts to create personalized outreach emails, social media ad copy, neighborhood guides, and market reports. These establish your expertise and attract potential buyers and sellers.",
      },
    ],
  },
  {
    slug: "software-developer",
    name: "Software Developer",
    icon: "💻",
    shortDescription: "Code generation, debugging & architecture prompts",
    description:
      "Boost your development workflow with AI prompts designed for software engineers. Get help with code generation, debugging, code reviews, architecture decisions, documentation, and technical writing using ChatGPT, Claude, and GitHub Copilot.",
    metaTitle: "200+ Best AI Prompts for Software Developers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for developers. Code generation, debugging, architecture design, code reviews & documentation. Works with ChatGPT, Claude, Copilot & Gemini.",
    relatedKeywords: [
      "chatgpt prompts for developers",
      "ai prompts for coding",
      "programming prompts chatgpt",
      "developer ai prompts",
      "code generation prompts",
    ],
    faqs: [
      {
        question: "What are the best AI prompts for coding?",
        answer:
          "Effective coding prompts include specifying the programming language, framework, input/output requirements, and edge cases. Our library includes prompts for code generation, refactoring, debugging, testing, and documentation across multiple languages.",
      },
      {
        question: "Can ChatGPT help with debugging?",
        answer:
          "Yes. Paste your error message and code snippet into ChatGPT with context about what you expected vs. what happened. Our debugging prompt templates help you structure these requests for the most accurate solutions.",
      },
      {
        question: "How do I use AI for code reviews?",
        answer:
          "Use prompts that ask the AI to review your code for security vulnerabilities, performance issues, code smells, and adherence to best practices. Specify the language and any coding standards your team follows.",
      },
    ],
  },
  {
    slug: "marketing-manager",
    name: "Marketing Manager",
    icon: "📊",
    shortDescription: "Campaign strategy, copywriting & analytics prompts",
    description:
      "Supercharge your marketing with AI prompts for campaign planning, copywriting, A/B testing, market research, brand strategy, and performance analytics. Perfect for digital marketing managers and CMOs.",
    metaTitle: "180+ Best AI Prompts for Marketing Managers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for marketing managers. Campaign strategy, ad copy, email marketing, SEO content, social media & analytics. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for marketing",
      "ai marketing prompts",
      "digital marketing ai prompts",
      "marketing chatgpt templates",
      "ai for marketing strategy",
    ],
    faqs: [
      {
        question: "How can marketing managers use ChatGPT effectively?",
        answer:
          "Marketing managers can use ChatGPT for writing ad copy, creating content calendars, analyzing competitor strategies, drafting email campaigns, generating social media posts, and brainstorming campaign ideas. Our prompts are structured to give you actionable, ready-to-use outputs.",
      },
      {
        question: "What AI prompts work best for ad copywriting?",
        answer:
          "The best ad copy prompts include your target audience, unique selling proposition, desired tone, platform (Google Ads, Facebook, etc.), and character limits. Our library includes proven frameworks like AIDA, PAS, and BAB built into the prompts.",
      },
      {
        question: "Can AI help with marketing analytics?",
        answer:
          "Yes. Use AI to interpret campaign data, identify trends, create executive summaries of performance reports, and suggest optimization strategies based on your KPIs.",
      },
    ],
  },
  {
    slug: "teacher",
    name: "Teacher & Educator",
    icon: "📚",
    shortDescription: "Lesson planning, assessment & student engagement prompts",
    description:
      "Transform your teaching with AI prompts for lesson planning, creating assessments, generating educational content, managing classrooms, and engaging students. Works for K-12 teachers, professors, and online educators.",
    metaTitle: "150+ Best AI Prompts for Teachers & Educators (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for teachers. Lesson plans, quizzes, rubrics, student feedback, differentiated instruction & more. Copy-paste ready for ChatGPT, Claude & Gemini.",
    relatedKeywords: [
      "chatgpt prompts for teachers",
      "ai prompts education",
      "teacher ai prompts",
      "lesson plan generator ai",
      "chatgpt for educators",
    ],
    faqs: [
      {
        question: "How can teachers use ChatGPT in the classroom?",
        answer:
          "Teachers can use ChatGPT to create lesson plans, generate quizzes and assessments, write rubrics, provide differentiated instruction materials, create engaging activities, and draft parent communication. Our prompts ensure age-appropriate, curriculum-aligned outputs.",
      },
      {
        question: "Can AI create lesson plans?",
        answer:
          "Yes. Provide the grade level, subject, learning objectives, and time duration, and AI can generate detailed lesson plans complete with activities, discussion questions, and assessment ideas.",
      },
      {
        question: "Is it ethical for teachers to use AI?",
        answer:
          "Using AI as a planning and productivity tool is widely accepted. The key is using AI to enhance your teaching, not replace your expertise. AI helps with the administrative burden so you can focus on student interaction.",
      },
    ],
  },
  {
    slug: "lawyer",
    name: "Lawyer & Legal Professional",
    icon: "⚖️",
    shortDescription: "Legal research, document drafting & case analysis prompts",
    description:
      "Streamline your legal practice with AI prompts for legal research, contract drafting, case analysis, client communication, and compliance reviews. Designed for attorneys, paralegals, and legal consultants.",
    metaTitle: "120+ Best AI Prompts for Lawyers & Legal Professionals (2026)",
    metaDescription:
      "Free AI prompts for lawyers. Legal research, contract drafting, case briefs, client emails & compliance analysis. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for lawyers",
      "ai prompts legal",
      "legal ai prompts",
      "chatgpt for attorneys",
      "ai legal research prompts",
    ],
    faqs: [
      {
        question: "Can lawyers use ChatGPT for legal research?",
        answer:
          "AI can help with preliminary legal research, summarizing case law, identifying relevant statutes, and drafting initial memoranda. However, always verify AI outputs against primary legal sources, as AI can hallucinate citations.",
      },
      {
        question: "What are the best AI prompts for contract drafting?",
        answer:
          "Effective contract prompts specify the type of agreement, jurisdiction, key terms, parties involved, and any specific clauses needed. Our prompts help generate first drafts that you can then review and customize.",
      },
      {
        question: "Are there ethical concerns with AI in law?",
        answer:
          "Yes. Always review AI-generated content for accuracy, maintain client confidentiality by not sharing sensitive information with AI tools, and disclose AI use when required by your jurisdiction's ethics rules.",
      },
    ],
  },
  {
    slug: "doctor",
    name: "Doctor & Healthcare Professional",
    icon: "🩺",
    shortDescription: "Patient communication, research & documentation prompts",
    description:
      "Enhance your medical practice with AI prompts for patient education materials, clinical documentation, research summaries, health content creation, and practice management. For physicians, nurses, and healthcare administrators.",
    metaTitle: "100+ Best AI Prompts for Doctors & Healthcare Professionals (2026)",
    metaDescription:
      "Free AI prompts for healthcare professionals. Patient education, clinical notes, research summaries, health content & practice management. ChatGPT & Claude ready.",
    relatedKeywords: [
      "chatgpt prompts for doctors",
      "ai prompts healthcare",
      "medical ai prompts",
      "chatgpt for physicians",
      "ai healthcare documentation",
    ],
    faqs: [
      {
        question: "How can doctors use AI in their practice?",
        answer:
          "Doctors can use AI for drafting patient education materials, summarizing research papers, creating clinical documentation templates, generating differential diagnosis checklists, and improving patient communication. Always verify medical information with clinical guidelines.",
      },
      {
        question: "Is it safe to use ChatGPT for medical information?",
        answer:
          "AI should be used as a productivity tool, not a diagnostic tool. Use it for drafting communications, summarizing literature, and administrative tasks. Never rely solely on AI for clinical decision-making.",
      },
      {
        question: "What AI prompts help with patient communication?",
        answer:
          "Prompts for explaining complex diagnoses in simple language, creating treatment plan summaries, drafting follow-up instructions, and writing empathetic messages for difficult conversations are all highly useful.",
      },
    ],
  },
  {
    slug: "financial-advisor",
    name: "Financial Advisor",
    icon: "💰",
    shortDescription: "Financial planning, client reports & market analysis prompts",
    description:
      "Elevate your financial advisory practice with AI prompts for financial planning, portfolio analysis, client reporting, market research, retirement planning, and compliance documentation.",
    metaTitle: "120+ Best AI Prompts for Financial Advisors (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for financial advisors. Financial plans, client reports, market analysis, retirement planning & compliance. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for financial advisors",
      "ai prompts finance",
      "financial planning ai prompts",
      "chatgpt for wealth management",
      "ai financial analysis",
    ],
    faqs: [
      {
        question: "How can financial advisors use AI?",
        answer:
          "Financial advisors can use AI to draft client reports, create financial plan summaries, analyze market trends, generate educational content, and streamline compliance documentation. AI helps with the administrative side so you can focus on client relationships.",
      },
      {
        question: "Can AI help with financial planning?",
        answer:
          "AI can help structure financial plans, generate scenario analyses, create budget templates, and draft retirement planning guides. Always apply your professional judgment and comply with regulatory requirements.",
      },
      {
        question: "What are the compliance considerations for AI in finance?",
        answer:
          "Ensure you don't share client PII with AI tools, review all AI-generated financial advice for accuracy, maintain records of AI-assisted work, and comply with your firm's technology policies.",
      },
    ],
  },
  {
    slug: "content-writer",
    name: "Content Writer & Copywriter",
    icon: "✍️",
    shortDescription: "Blog posts, SEO content & copywriting prompts",
    description:
      "Supercharge your writing with AI prompts for blog posts, SEO content, sales copy, email newsletters, social media captions, and brand storytelling. For freelance writers, content strategists, and copywriters.",
    metaTitle: "200+ Best AI Prompts for Content Writers & Copywriters (2026)",
    metaDescription:
      "Free AI prompts for content writers. Blog posts, SEO articles, ad copy, email newsletters, social media & brand stories. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for writers",
      "ai writing prompts",
      "copywriting ai prompts",
      "content writing chatgpt",
      "ai prompts for blog posts",
    ],
    faqs: [
      {
        question: "What are the best ChatGPT prompts for content writing?",
        answer:
          "The best prompts specify the topic, target audience, tone, word count, SEO keywords, and content structure. Our library includes prompts for blog intros, listicles, how-to guides, product descriptions, and email sequences.",
      },
      {
        question: "Can AI replace content writers?",
        answer:
          "AI is a powerful assistant but cannot replace human creativity, expertise, and nuance. The best approach is using AI for first drafts, research, and ideation, then adding your unique voice and insights.",
      },
      {
        question: "How do I use AI for SEO content?",
        answer:
          "Use prompts that include target keywords, search intent, competitor analysis, and content structure. AI can help generate keyword-rich content, meta descriptions, and content outlines optimized for search engines.",
      },
    ],
  },
  {
    slug: "graphic-designer",
    name: "Graphic Designer",
    icon: "🎨",
    shortDescription: "Midjourney, DALL-E & design concept prompts",
    description:
      "Unlock creative possibilities with AI prompts for Midjourney, DALL-E, Stable Diffusion, and design concept generation. Create logos, illustrations, UI mockups, brand identities, and artistic compositions.",
    metaTitle: "150+ Best AI Prompts for Graphic Designers (2026) — Midjourney & DALL-E",
    metaDescription:
      "Free AI image prompts for graphic designers. Midjourney, DALL-E & Stable Diffusion prompts for logos, illustrations, UI design & brand identity. Copy-paste ready.",
    relatedKeywords: [
      "midjourney prompts for designers",
      "ai art prompts",
      "dall-e prompts graphic design",
      "ai design prompts",
      "midjourney prompts for logos",
    ],
    faqs: [
      {
        question: "What are the best Midjourney prompts for graphic design?",
        answer:
          "Effective Midjourney prompts include style references (e.g., minimalist, flat design), color palettes, composition details, and aspect ratios. Our library includes prompts for logos, illustrations, UI elements, and brand assets.",
      },
      {
        question: "Can AI generate professional logos?",
        answer:
          "AI can generate logo concepts and inspiration, but professional logos typically require human refinement for brand alignment, scalability, and trademark considerations. Use AI for rapid ideation and concept exploration.",
      },
      {
        question: "What's the difference between Midjourney, DALL-E, and Stable Diffusion?",
        answer:
          "Midjourney excels at artistic and aesthetic images, DALL-E is great for photorealistic and conceptual images, and Stable Diffusion offers the most customization. Our prompts are tagged by the AI tool they work best with.",
      },
    ],
  },
  {
    slug: "hr-manager",
    name: "HR Manager",
    icon: "👥",
    shortDescription: "Recruitment, policies & employee engagement prompts",
    description:
      "Streamline HR operations with AI prompts for job descriptions, interview questions, performance reviews, employee handbooks, onboarding materials, and workplace policies.",
    metaTitle: "120+ Best AI Prompts for HR Managers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for HR managers. Job descriptions, interview questions, performance reviews, policies & onboarding. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for hr",
      "ai prompts human resources",
      "hr ai prompts",
      "chatgpt for recruitment",
      "ai hr management",
    ],
    faqs: [
      {
        question: "How can HR managers use ChatGPT?",
        answer:
          "HR managers can use AI for writing job descriptions, creating interview question banks, drafting performance review templates, developing training materials, and generating workplace policy documents.",
      },
      {
        question: "Can AI write job descriptions?",
        answer:
          "Yes. Provide the job title, key responsibilities, required qualifications, company culture, and benefits. AI can generate inclusive, compelling job postings that attract qualified candidates.",
      },
      {
        question: "Is AI useful for employee engagement?",
        answer:
          "AI can help create engagement surveys, analyze feedback themes, draft recognition messages, plan team-building activities, and generate internal communication content.",
      },
    ],
  },
  {
    slug: "sales-representative",
    name: "Sales Representative",
    icon: "🤝",
    shortDescription: "Cold outreach, proposals & sales strategy prompts",
    description:
      "Close more deals with AI prompts for cold emails, sales scripts, proposal templates, objection handling, CRM updates, and competitive analysis. For SDRs, AEs, and sales managers.",
    metaTitle: "130+ Best AI Prompts for Sales Representatives (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for sales reps. Cold emails, sales scripts, proposals, objection handling & CRM. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for sales",
      "ai sales prompts",
      "sales email ai prompts",
      "chatgpt for cold outreach",
      "ai sales scripts",
    ],
    faqs: [
      {
        question: "What are the best ChatGPT prompts for sales?",
        answer:
          "Top sales prompts include cold email sequences, LinkedIn outreach messages, discovery call scripts, proposal templates, and objection-handling frameworks. Our prompts are designed using proven sales methodologies like SPIN and Challenger Sale.",
      },
      {
        question: "Can AI help with cold outreach?",
        answer:
          "Absolutely. AI can personalize cold emails at scale by incorporating prospect details, company research, and relevant pain points. Our prompts help you craft messages that feel personal, not templated.",
      },
      {
        question: "How do I use AI for sales proposals?",
        answer:
          "Use prompts that include the prospect's needs, your solution's benefits, pricing structure, and competitive advantages. AI can generate polished proposal drafts that you can customize for each deal.",
      },
    ],
  },
  {
    slug: "accountant",
    name: "Accountant & CPA",
    icon: "🧮",
    shortDescription: "Tax planning, financial reports & compliance prompts",
    description:
      "Optimize your accounting workflow with AI prompts for tax planning, financial statement analysis, audit preparation, client communication, and regulatory compliance. For CPAs, bookkeepers, and tax professionals.",
    metaTitle: "100+ Best AI Prompts for Accountants & CPAs (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for accountants. Tax planning, financial analysis, audit prep, client reports & compliance. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for accountants",
      "ai prompts accounting",
      "tax planning ai prompts",
      "chatgpt for cpas",
      "ai accounting automation",
    ],
    faqs: [
      {
        question: "How can accountants use AI effectively?",
        answer:
          "Accountants can use AI for drafting client advisory letters, creating financial report summaries, generating tax planning checklists, preparing audit documentation, and explaining complex tax concepts to clients in plain language.",
      },
      {
        question: "Can AI help with tax planning?",
        answer:
          "AI can help identify potential deductions, create tax planning checklists, draft client questionnaires, and generate educational content about tax strategies. Always verify against current tax codes and regulations.",
      },
      {
        question: "Is AI accurate for financial analysis?",
        answer:
          "AI is useful for structuring analyses and creating frameworks, but should not be relied upon for calculations or specific financial data. Use it for drafting reports and communication, then verify all numbers independently.",
      },
    ],
  },
  {
    slug: "social-media-manager",
    name: "Social Media Manager",
    icon: "📱",
    shortDescription: "Content calendars, captions & engagement prompts",
    description:
      "Dominate social media with AI prompts for content calendars, platform-specific captions, hashtag strategies, community management, influencer outreach, and social media analytics. For Instagram, TikTok, LinkedIn, Twitter/X, and more.",
    metaTitle: "180+ Best AI Prompts for Social Media Managers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for social media managers. Content calendars, captions, hashtags, engagement strategies & analytics. Instagram, TikTok, LinkedIn & X. ChatGPT ready.",
    relatedKeywords: [
      "chatgpt prompts for social media",
      "ai social media prompts",
      "social media content ai",
      "instagram caption generator ai",
      "ai social media strategy",
    ],
    faqs: [
      {
        question: "What AI prompts work best for social media?",
        answer:
          "The best prompts are platform-specific. Include the platform, brand voice, target audience, content type (carousel, reel, story), and any trending topics. Our prompts cover Instagram, TikTok, LinkedIn, Twitter/X, and Facebook.",
      },
      {
        question: "Can AI create a content calendar?",
        answer:
          "Yes. Provide your industry, posting frequency, content pillars, and upcoming events. AI can generate a full month's content calendar with post ideas, captions, and hashtag suggestions for each platform.",
      },
      {
        question: "How do I use AI for hashtag research?",
        answer:
          "Use prompts that specify your niche, content type, and target reach. AI can suggest a mix of high-volume and niche-specific hashtags tailored to maximize visibility on each platform.",
      },
    ],
  },
  {
    slug: "project-manager",
    name: "Project Manager",
    icon: "📋",
    shortDescription: "Project planning, status reports & team management prompts",
    description:
      "Manage projects like a pro with AI prompts for project charters, status reports, risk assessments, stakeholder communication, sprint planning, and retrospectives. For Agile, Scrum, and Waterfall methodologies.",
    metaTitle: "120+ Best AI Prompts for Project Managers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for project managers. Project plans, status reports, risk assessments, sprint planning & stakeholder updates. Agile & Scrum ready. ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for project managers",
      "ai prompts project management",
      "project management ai",
      "chatgpt for scrum masters",
      "ai project planning",
    ],
    faqs: [
      {
        question: "How can project managers use ChatGPT?",
        answer:
          "Project managers can use AI for creating project charters, writing status reports, generating risk registers, drafting stakeholder communications, planning sprints, and facilitating retrospectives. Our prompts work for Agile, Scrum, and Waterfall methodologies.",
      },
      {
        question: "Can AI help with project risk assessment?",
        answer:
          "Yes. Provide your project scope, timeline, team size, and known constraints. AI can generate a comprehensive risk register with probability, impact, and mitigation strategies.",
      },
      {
        question: "What AI tools are best for project management?",
        answer:
          "ChatGPT and Claude are excellent for text-based PM tasks. Combine them with tools like Notion AI, Monday.com, or Jira for a complete workflow. Our prompts are optimized for copy-paste into any AI tool.",
      },
    ],
  },
  {
    slug: "photographer",
    name: "Photographer",
    icon: "📸",
    shortDescription: "Client proposals, editing workflows & business prompts",
    description:
      "Grow your photography business with AI prompts for client proposals, pricing guides, social media content, editing workflow descriptions, portfolio presentations, and email templates for booking inquiries.",
    metaTitle: "100+ Best AI Prompts for Photographers (2026) — ChatGPT & Midjourney",
    metaDescription:
      "Free AI prompts for photographers. Client proposals, pricing, portfolio content, social media & booking emails. Plus Midjourney prompts for creative concepts.",
    relatedKeywords: [
      "chatgpt prompts for photographers",
      "ai prompts photography business",
      "photographer ai prompts",
      "midjourney photography prompts",
      "ai for photography business",
    ],
    faqs: [
      {
        question: "How can photographers use AI?",
        answer:
          "Photographers can use AI for writing client proposals, creating pricing packages, generating social media captions for portfolio posts, drafting contracts, and creating marketing materials. Midjourney can also help with creative concept visualization.",
      },
      {
        question: "Can AI help with photography business management?",
        answer:
          "Yes. Use AI to draft booking confirmations, create client questionnaires, write follow-up emails, generate blog posts about your work, and create pricing comparison guides.",
      },
      {
        question: "What Midjourney prompts work for photographers?",
        answer:
          "Photographers can use Midjourney for mood board creation, concept visualization, background generation for composite work, and exploring creative styles for inspiration before shoots.",
      },
    ],
  },
  {
    slug: "data-analyst",
    name: "Data Analyst",
    icon: "📈",
    shortDescription: "Data analysis, visualization & reporting prompts",
    description:
      "Accelerate your data work with AI prompts for SQL queries, Python/R scripts, data visualization, executive dashboards, statistical analysis, and data storytelling. For analysts, data scientists, and BI professionals.",
    metaTitle: "130+ Best AI Prompts for Data Analysts (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for data analysts. SQL queries, Python scripts, data visualization, dashboards & reporting. Copy-paste ready for ChatGPT, Claude & Gemini.",
    relatedKeywords: [
      "chatgpt prompts for data analysis",
      "ai prompts data analyst",
      "sql prompts chatgpt",
      "python data analysis ai",
      "ai data visualization",
    ],
    faqs: [
      {
        question: "What are the best AI prompts for data analysis?",
        answer:
          "Top prompts include SQL query generation, Python/Pandas data manipulation scripts, statistical test selection, chart type recommendations, and executive summary writing. Specify your dataset structure and analysis goal for best results.",
      },
      {
        question: "Can AI write SQL queries?",
        answer:
          "Yes. Describe your data schema and the question you want to answer. AI can generate complex SQL queries including JOINs, subqueries, window functions, and CTEs. Always test queries in a safe environment first.",
      },
      {
        question: "How do I use AI for data storytelling?",
        answer:
          "Use prompts that include your key findings, target audience (executives vs. technical), and desired narrative arc. AI can help structure your data story, suggest visualizations, and write compelling summaries.",
      },
    ],
  },
  {
    slug: "ux-designer",
    name: "UX Designer",
    icon: "🖌️",
    shortDescription: "User research, wireframing & design system prompts",
    description:
      "Design better user experiences with AI prompts for user research plans, persona creation, usability testing scripts, design critiques, accessibility audits, and UX writing. For UX/UI designers and product designers.",
    metaTitle: "120+ Best AI Prompts for UX Designers (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for UX designers. User research, personas, wireframe feedback, usability testing, accessibility & UX writing. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for ux design",
      "ai prompts ux designers",
      "ux design ai prompts",
      "chatgpt for product design",
      "ai ux research prompts",
    ],
    faqs: [
      {
        question: "How can UX designers use AI?",
        answer:
          "UX designers can use AI for creating user personas, writing research plans, generating usability test scripts, getting design critiques, writing microcopy, conducting accessibility reviews, and creating design documentation.",
      },
      {
        question: "Can AI help with user research?",
        answer:
          "AI can help draft interview scripts, create survey questions, generate persona frameworks, analyze user feedback themes, and write research summaries. It's excellent for structuring research processes.",
      },
      {
        question: "What AI prompts help with UX writing?",
        answer:
          "Prompts for error messages, onboarding flows, empty states, button labels, tooltips, and notification copy. Specify the context, user emotion, and desired action for the best microcopy results.",
      },
    ],
  },
  {
    slug: "recruiter",
    name: "Recruiter & Talent Acquisition",
    icon: "🔍",
    shortDescription: "Sourcing, outreach & candidate assessment prompts",
    description:
      "Find and hire top talent faster with AI prompts for candidate sourcing, outreach messages, interview evaluation, job posting optimization, employer branding, and offer letter drafting.",
    metaTitle: "110+ Best AI Prompts for Recruiters (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for recruiters. Candidate sourcing, outreach messages, interview questions, job postings & offer letters. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for recruiters",
      "ai prompts recruitment",
      "recruiting ai prompts",
      "chatgpt for talent acquisition",
      "ai hiring prompts",
    ],
    faqs: [
      {
        question: "How can recruiters use ChatGPT?",
        answer:
          "Recruiters can use AI for writing personalized outreach messages, creating boolean search strings, generating interview questions, drafting job descriptions, writing rejection letters empathetically, and creating candidate evaluation rubrics.",
      },
      {
        question: "Can AI help with candidate sourcing?",
        answer:
          "AI can generate boolean search strings for LinkedIn, write personalized InMail messages, create ideal candidate profiles, and suggest alternative job titles to broaden your search.",
      },
      {
        question: "What AI prompts work for interview preparation?",
        answer:
          "Use prompts to generate role-specific behavioral questions, technical assessments, case study scenarios, and evaluation scorecards. Specify the seniority level and company culture for tailored results.",
      },
    ],
  },
  {
    slug: "consultant",
    name: "Business Consultant",
    icon: "💼",
    shortDescription: "Strategy frameworks, client deliverables & analysis prompts",
    description:
      "Deliver exceptional consulting engagements with AI prompts for strategy frameworks, market analysis, client presentations, workshop facilitation, competitive intelligence, and change management plans.",
    metaTitle: "110+ Best AI Prompts for Business Consultants (2026) — ChatGPT & Claude",
    metaDescription:
      "Free AI prompts for consultants. Strategy frameworks, market analysis, client presentations, workshops & competitive intel. Copy-paste ready for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for consultants",
      "ai prompts consulting",
      "business consulting ai",
      "strategy consulting prompts",
      "chatgpt for management consulting",
    ],
    faqs: [
      {
        question: "How can consultants use AI effectively?",
        answer:
          "Consultants can use AI for developing strategy frameworks, creating market analyses, drafting client proposals, generating workshop agendas, building competitive intelligence reports, and structuring presentations using frameworks like MECE and Porter's Five Forces.",
      },
      {
        question: "Can AI replace management consultants?",
        answer:
          "AI augments consulting work but cannot replace the client relationship, industry expertise, and strategic judgment that consultants provide. Use AI to accelerate analysis and deliverable creation.",
      },
      {
        question: "What frameworks can AI help apply?",
        answer:
          "AI excels at applying SWOT, Porter's Five Forces, PESTLE, BCG Matrix, McKinsey 7S, and value chain analysis. Provide your industry context and AI will structure the analysis accordingly.",
      },
    ],
  },
  {
    slug: "entrepreneur",
    name: "Entrepreneur & Startup Founder",
    icon: "🚀",
    shortDescription: "Business plans, pitching & growth strategy prompts",
    description:
      "Launch and grow your business with AI prompts for business plans, pitch decks, investor outreach, product-market fit analysis, growth strategies, and operational planning. For founders, solopreneurs, and startup teams.",
    metaTitle: "150+ Best AI Prompts for Entrepreneurs & Startup Founders (2026)",
    metaDescription:
      "Free AI prompts for entrepreneurs. Business plans, pitch decks, investor emails, growth strategy, product-market fit & operations. Copy-paste for ChatGPT & Claude.",
    relatedKeywords: [
      "chatgpt prompts for entrepreneurs",
      "ai prompts startups",
      "startup ai prompts",
      "chatgpt for business planning",
      "ai entrepreneur tools",
    ],
    faqs: [
      {
        question: "How can entrepreneurs use ChatGPT?",
        answer:
          "Entrepreneurs can use AI for writing business plans, creating pitch deck narratives, drafting investor emails, analyzing competitors, generating marketing strategies, creating financial projections frameworks, and planning product launches.",
      },
      {
        question: "Can AI help write a business plan?",
        answer:
          "Yes. Provide your business idea, target market, revenue model, and competitive landscape. AI can generate comprehensive business plan sections including executive summary, market analysis, and go-to-market strategy.",
      },
      {
        question: "What AI prompts help with fundraising?",
        answer:
          "Use prompts for crafting investor pitch narratives, writing cold outreach emails to VCs, creating one-pagers, preparing for due diligence questions, and structuring term sheet negotiations.",
      },
    ],
  },
];

export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug);
}

export function getAllProfessionSlugs(): string[] {
  return professions.map((p) => p.slug);
}
