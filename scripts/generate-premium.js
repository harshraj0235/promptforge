const fs = require('fs');
const path = require('path');

const professions = [
  { slug: "real-estate-agent", name: "Real Estate Agent" },
  { slug: "software-developer", name: "Software Developer" },
  { slug: "marketing-manager", name: "Marketing Manager" },
  { slug: "copywriter", name: "Copywriter" },
  { slug: "seo-specialist", name: "SEO Specialist" },
  { slug: "project-manager", name: "Project Manager" },
  { slug: "sales-executive", name: "Sales Executive" },
  { slug: "hr-manager", name: "HR Manager" },
  { slug: "financial-analyst", name: "Financial Analyst" },
  { slug: "data-scientist", name: "Data Scientist" },
  { slug: "graphic-designer", name: "Graphic Designer" },
  { slug: "teacher", name: "Teacher / Educator" },
  { slug: "customer-success", name: "Customer Success Manager" },
  { slug: "product-manager", name: "Product Manager" },
  { slug: "event-planner", name: "Event Planner" }
];

const frameworks = [
  {
    category: "Strategy & Planning",
    titleTemplate: "The [Profession] 90-Day Master Strategy (Premium)",
    promptTemplate: `ACT AS an Elite [Profession] with 15+ years of industry-leading experience.
YOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.

INPUT VARIABLES:
- Primary Goal: [Insert Goal]
- Current Bottleneck: [Insert Bottleneck]
- Available Resources: [Insert Resources/Budget]

STEP-BY-STEP INSTRUCTIONS:
1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.
2. Risk Mitigation: Identify the top 3 potential points of failure for this specific [Profession] initiative and provide a pre-mortem solution for each.
3. The "Pareto" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.
4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.

FORMATTING: Output as a highly structured Markdown document. Use professional [Profession] terminology. Do not use generic advice; be highly tactical and specific.`,
    tags: ["strategy", "90-day-plan", "tactics"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"]
  },
  {
    category: "Communication",
    titleTemplate: "High-Stakes [Profession] Negotiation Script (Premium)",
    promptTemplate: `You are a Master Negotiator and an expert [Profession].
I need you to write a high-stakes communication script (email + phone talking points).

SCENARIO:
- Objective: [Insert what you want to achieve/win]
- The Counterparty: [Who are you talking to?]
- Our Leverage: [What is our biggest advantage?]
- The Risk: [What happens if we lose?]

FRAMEWORK TO FOLLOW (The Voss Empathy Method):
1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.
2. The "Calibrated Question": Formulate 3 open-ended "How" or "What" questions that force the counterparty to solve our problem for us.
3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.
4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.

CONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.`,
    tags: ["negotiation", "script", "communication"],
    difficulty: "advanced",
    aiTool: ["Claude", "ChatGPT"]
  },
  {
    category: "Analysis & Research",
    titleTemplate: "Deep-Dive [Profession] Audit & Diagnostic (Premium)",
    promptTemplate: `Act as a highly analytical [Profession] Consultant who specializes in rapid turnarounds.
Generate a comprehensive Diagnostic Audit framework.

CONTEXT:
- Subject of Audit: [Insert Project/Process/Asset to Audit]
- Historical Performance: [Insert past metrics]
- Suspected Core Issue: [Insert suspected problem]

DELIVERABLES REQUIRED:
1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.
2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.
3. The Triage Protocol: What are the immediate, 24-hour "bleeding neck" fixes I must implement right now?
4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.

FORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of [Profession] knowledge.`,
    tags: ["audit", "diagnostic", "analysis"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Gemini", "Claude"]
  },
  {
    category: "Workflow & Automation",
    titleTemplate: "The [Profession] Weekly Automation Engine (Premium)",
    promptTemplate: `Act as a Systems Engineer and Productivity Expert for a [Profession].
I want to eliminate 10 hours of manual work from my week.

CURRENT WORKFLOW:
- Most Time-Consuming Task: [Insert Task]
- Software Currently Used: [Insert Tech Stack]
- Frequency: [How often is it done?]

TASK:
Design an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].

REQUIRED BREAKDOWN:
1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).
2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.
3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].
4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.

CONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.`,
    tags: ["automation", "workflow", "systems"],
    difficulty: "advanced",
    aiTool: ["Claude", "ChatGPT"]
  },
  {
    category: "Client Management",
    titleTemplate: "The [Profession] Client Onboarding Masterclass (Premium)",
    promptTemplate: `You are a world-class [Profession] known for incredible client retention and zero churn.
Design a bulletproof, 14-Day Client Onboarding Sequence.

CLIENT DETAILS:
- Client Type: [Insert B2B/B2C, Industry]
- Service Provided: [Insert Service]
- Client's Biggest Fear: [Insert Fear/Objection]

THE SEQUENCE:
Generate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.

REQUIREMENTS:
- Day 1 (The "Buyer's Remorse" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].
- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?
- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.
- Day 14 (The Check-in): A survey or feedback loop mechanism.

FORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.`,
    tags: ["onboarding", "retention", "client-management"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"]
  },
  {
    category: "Content Creation",
    titleTemplate: "The Viral [Profession] Thought Leadership Matrix (Premium)",
    promptTemplate: `Act as a Top 1% LinkedIn Ghostwriter for a highly successful [Profession].
I need a month's worth of thought leadership content that drives inbound leads.

MY PROFILE:
- My Niche: [Insert Niche]
- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]
- My Biggest Success: [Insert Case Study/Win]

GENERATE THE CONTENT MATRIX:
Provide 4 highly-engineered post templates based on these frameworks:
1. The "Tear Down": Analyze a common mistake people make in [My Niche] and how to fix it.
2. The "Hero's Journey": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).
3. The "Polarizing Truth": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.
4. The "Value Bomb": A highly tactical, step-by-step listicle that gives away the "secrets" of a [Profession].

CONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.`,
    tags: ["social-media", "linkedin", "thought-leadership"],
    difficulty: "advanced",
    aiTool: ["Claude", "ChatGPT"]
  },
  {
    category: "Creative & Design",
    titleTemplate: "[Profession] Innovative Brainstorming Protocol (Premium)",
    promptTemplate: `You are a Creative Director and a highly innovative [Profession].
I need to completely reimagine a standard concept using lateral thinking.

THE TARGET:
- Core Concept/Problem: [Insert what you are trying to design or solve]
- Target Audience: [Insert Audience]
- Boring Standard Solution: [What does everyone else do?]

THE SCAMPER PROTOCOL:
Apply the SCAMPER brainstorming technique to the [Core Concept/Problem]:
- Substitute: What elements of the [Boring Standard Solution] can we replace?
- Combine: What two completely unrelated ideas can we merge here?
- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?
- Modify: What happens if we 10x the scale or shrink it to 10%?
- Put to another use: How can this be used by someone entirely different?
- Eliminate: What happens if we remove the most "essential" feature?
- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?

OUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.`,
    tags: ["brainstorming", "scamper", "innovation"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Gemini"]
  },
  {
    category: "Strategy & Planning",
    titleTemplate: "The [Profession] Crisis Management Blueprint (Premium)",
    promptTemplate: `Act as a veteran PR Expert and Senior [Profession].
We are facing an imminent crisis and need a containment and resolution strategy.

THE CRISIS:
- The Incident: [Describe the failure/crisis]
- Stakeholders Affected: [Who is angry/impacted?]
- Worst-Case Scenario: [What happens if we fail to fix this?]

THE PROTOCOL:
Generate a 4-Phase Crisis Blueprint:
1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.
2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?
3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.
4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?

TONE: Urgent, highly professional, empathetic but legally defensive.`,
    tags: ["crisis", "pr", "management"],
    difficulty: "advanced",
    aiTool: ["Claude", "ChatGPT"]
  },
  {
    category: "Analysis & Research",
    titleTemplate: "The [Profession] Competitive Intelligence Matrix (Premium)",
    promptTemplate: `Act as a specialized Competitive Intelligence Analyst for a [Profession].
I need a brutal, objective teardown of my top competitor.

THE COMPETITOR:
- Competitor Name: [Insert Competitor]
- Their Core Advantage: [What do they do best?]
- Our Product/Service: [What do we sell?]

THE ANALYSIS:
Provide a highly structured strategic teardown:
1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).
2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?
3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are "enterprise-grade", frame us as "agile and personalized").
4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.

FORMAT: Output as an executive summary. Be ruthless and highly strategic.`,
    tags: ["competitor-analysis", "strategy", "research"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"]
  },
  {
    category: "Workflow & Automation",
    titleTemplate: "The [Profession] Ultimate KPI Dashboard Setup (Premium)",
    promptTemplate: `Act as a Data Scientist and Senior [Profession].
I need to build a single "Source of Truth" dashboard to monitor performance.

CONTEXT:
- Primary Objective: [What are you trying to achieve overall?]
- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]
- Team Size: [How many people?]

THE DASHBOARD ARCHITECTURE:
1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].
2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).
3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.
4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an "alert"?

FORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.`,
    tags: ["data", "kpi", "dashboard"],
    difficulty: "advanced",
    aiTool: ["Claude", "ChatGPT", "Gemini"]
  }
];

let generatedPrompts = [];
let idCounter = 1;

for (const prof of professions) {
  for (const framework of frameworks) {
    // Inject profession name into titles and text
    const title = framework.titleTemplate.replace(/\[Profession\]/g, prof.name);
    let text = framework.promptTemplate.replace(/\[Profession\]/g, prof.name);
    
    generatedPrompts.push({
      id: `premium-gen-${idCounter.toString().padStart(4, '0')}`,
      profession: prof.slug,
      category: framework.category,
      title: title,
      promptText: text,
      tags: framework.tags,
      difficulty: framework.difficulty,
      aiTool: framework.aiTool,
      isPremium: true
    });
    idCounter++;
  }
}

const fileContent = `import type { Prompt } from "./prompts";

export const generatedPremiumPrompts: Prompt[] = ${JSON.stringify(generatedPrompts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'generated-premium-prompts.ts'), fileContent);
console.log(`Successfully generated ${generatedPrompts.length} premium prompts!`);
