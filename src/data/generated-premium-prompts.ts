import type { Prompt } from "./prompts";

export const generatedPremiumPrompts: Prompt[] = [
  {
    "id": "premium-gen-0001",
    "profession": "real-estate-agent",
    "category": "Strategy & Planning",
    "title": "The Real Estate Agent 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Real Estate Agent with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Real Estate Agent initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Real Estate Agent terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0002",
    "profession": "real-estate-agent",
    "category": "Communication",
    "title": "High-Stakes Real Estate Agent Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Real Estate Agent.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0003",
    "profession": "real-estate-agent",
    "category": "Analysis & Research",
    "title": "Deep-Dive Real Estate Agent Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Real Estate Agent Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Real Estate Agent knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0004",
    "profession": "real-estate-agent",
    "category": "Workflow & Automation",
    "title": "The Real Estate Agent Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Real Estate Agent.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0005",
    "profession": "real-estate-agent",
    "category": "Client Management",
    "title": "The Real Estate Agent Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Real Estate Agent known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0006",
    "profession": "real-estate-agent",
    "category": "Content Creation",
    "title": "The Viral Real Estate Agent Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Real Estate Agent.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Real Estate Agent.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0007",
    "profession": "real-estate-agent",
    "category": "Creative & Design",
    "title": "Real Estate Agent Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Real Estate Agent.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0008",
    "profession": "real-estate-agent",
    "category": "Strategy & Planning",
    "title": "The Real Estate Agent Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Real Estate Agent.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0009",
    "profession": "real-estate-agent",
    "category": "Analysis & Research",
    "title": "The Real Estate Agent Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Real Estate Agent.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0010",
    "profession": "real-estate-agent",
    "category": "Workflow & Automation",
    "title": "The Real Estate Agent Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Real Estate Agent.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0011",
    "profession": "software-developer",
    "category": "Strategy & Planning",
    "title": "The Software Developer 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Software Developer with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Software Developer initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Software Developer terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0012",
    "profession": "software-developer",
    "category": "Communication",
    "title": "High-Stakes Software Developer Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Software Developer.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0013",
    "profession": "software-developer",
    "category": "Analysis & Research",
    "title": "Deep-Dive Software Developer Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Software Developer Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Software Developer knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0014",
    "profession": "software-developer",
    "category": "Workflow & Automation",
    "title": "The Software Developer Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Software Developer.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0015",
    "profession": "software-developer",
    "category": "Client Management",
    "title": "The Software Developer Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Software Developer known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0016",
    "profession": "software-developer",
    "category": "Content Creation",
    "title": "The Viral Software Developer Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Software Developer.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Software Developer.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0017",
    "profession": "software-developer",
    "category": "Creative & Design",
    "title": "Software Developer Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Software Developer.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0018",
    "profession": "software-developer",
    "category": "Strategy & Planning",
    "title": "The Software Developer Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Software Developer.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0019",
    "profession": "software-developer",
    "category": "Analysis & Research",
    "title": "The Software Developer Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Software Developer.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0020",
    "profession": "software-developer",
    "category": "Workflow & Automation",
    "title": "The Software Developer Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Software Developer.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0021",
    "profession": "marketing-manager",
    "category": "Strategy & Planning",
    "title": "The Marketing Manager 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Marketing Manager with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Marketing Manager initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Marketing Manager terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0022",
    "profession": "marketing-manager",
    "category": "Communication",
    "title": "High-Stakes Marketing Manager Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Marketing Manager.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0023",
    "profession": "marketing-manager",
    "category": "Analysis & Research",
    "title": "Deep-Dive Marketing Manager Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Marketing Manager Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Marketing Manager knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0024",
    "profession": "marketing-manager",
    "category": "Workflow & Automation",
    "title": "The Marketing Manager Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Marketing Manager.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0025",
    "profession": "marketing-manager",
    "category": "Client Management",
    "title": "The Marketing Manager Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Marketing Manager known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0026",
    "profession": "marketing-manager",
    "category": "Content Creation",
    "title": "The Viral Marketing Manager Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Marketing Manager.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Marketing Manager.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0027",
    "profession": "marketing-manager",
    "category": "Creative & Design",
    "title": "Marketing Manager Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Marketing Manager.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0028",
    "profession": "marketing-manager",
    "category": "Strategy & Planning",
    "title": "The Marketing Manager Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Marketing Manager.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0029",
    "profession": "marketing-manager",
    "category": "Analysis & Research",
    "title": "The Marketing Manager Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Marketing Manager.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0030",
    "profession": "marketing-manager",
    "category": "Workflow & Automation",
    "title": "The Marketing Manager Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Marketing Manager.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0031",
    "profession": "copywriter",
    "category": "Strategy & Planning",
    "title": "The Copywriter 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Copywriter with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Copywriter initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Copywriter terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0032",
    "profession": "copywriter",
    "category": "Communication",
    "title": "High-Stakes Copywriter Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Copywriter.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0033",
    "profession": "copywriter",
    "category": "Analysis & Research",
    "title": "Deep-Dive Copywriter Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Copywriter Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Copywriter knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0034",
    "profession": "copywriter",
    "category": "Workflow & Automation",
    "title": "The Copywriter Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Copywriter.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0035",
    "profession": "copywriter",
    "category": "Client Management",
    "title": "The Copywriter Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Copywriter known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0036",
    "profession": "copywriter",
    "category": "Content Creation",
    "title": "The Viral Copywriter Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Copywriter.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Copywriter.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0037",
    "profession": "copywriter",
    "category": "Creative & Design",
    "title": "Copywriter Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Copywriter.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0038",
    "profession": "copywriter",
    "category": "Strategy & Planning",
    "title": "The Copywriter Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Copywriter.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0039",
    "profession": "copywriter",
    "category": "Analysis & Research",
    "title": "The Copywriter Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Copywriter.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0040",
    "profession": "copywriter",
    "category": "Workflow & Automation",
    "title": "The Copywriter Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Copywriter.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0041",
    "profession": "seo-specialist",
    "category": "Strategy & Planning",
    "title": "The SEO Specialist 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite SEO Specialist with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific SEO Specialist initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional SEO Specialist terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0042",
    "profession": "seo-specialist",
    "category": "Communication",
    "title": "High-Stakes SEO Specialist Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert SEO Specialist.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0043",
    "profession": "seo-specialist",
    "category": "Analysis & Research",
    "title": "Deep-Dive SEO Specialist Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical SEO Specialist Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of SEO Specialist knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0044",
    "profession": "seo-specialist",
    "category": "Workflow & Automation",
    "title": "The SEO Specialist Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a SEO Specialist.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0045",
    "profession": "seo-specialist",
    "category": "Client Management",
    "title": "The SEO Specialist Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class SEO Specialist known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0046",
    "profession": "seo-specialist",
    "category": "Content Creation",
    "title": "The Viral SEO Specialist Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful SEO Specialist.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a SEO Specialist.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0047",
    "profession": "seo-specialist",
    "category": "Creative & Design",
    "title": "SEO Specialist Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative SEO Specialist.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0048",
    "profession": "seo-specialist",
    "category": "Strategy & Planning",
    "title": "The SEO Specialist Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior SEO Specialist.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0049",
    "profession": "seo-specialist",
    "category": "Analysis & Research",
    "title": "The SEO Specialist Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a SEO Specialist.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0050",
    "profession": "seo-specialist",
    "category": "Workflow & Automation",
    "title": "The SEO Specialist Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior SEO Specialist.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0051",
    "profession": "project-manager",
    "category": "Strategy & Planning",
    "title": "The Project Manager 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Project Manager with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Project Manager initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Project Manager terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0052",
    "profession": "project-manager",
    "category": "Communication",
    "title": "High-Stakes Project Manager Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Project Manager.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0053",
    "profession": "project-manager",
    "category": "Analysis & Research",
    "title": "Deep-Dive Project Manager Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Project Manager Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Project Manager knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0054",
    "profession": "project-manager",
    "category": "Workflow & Automation",
    "title": "The Project Manager Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Project Manager.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0055",
    "profession": "project-manager",
    "category": "Client Management",
    "title": "The Project Manager Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Project Manager known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0056",
    "profession": "project-manager",
    "category": "Content Creation",
    "title": "The Viral Project Manager Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Project Manager.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Project Manager.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0057",
    "profession": "project-manager",
    "category": "Creative & Design",
    "title": "Project Manager Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Project Manager.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0058",
    "profession": "project-manager",
    "category": "Strategy & Planning",
    "title": "The Project Manager Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Project Manager.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0059",
    "profession": "project-manager",
    "category": "Analysis & Research",
    "title": "The Project Manager Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Project Manager.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0060",
    "profession": "project-manager",
    "category": "Workflow & Automation",
    "title": "The Project Manager Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Project Manager.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0061",
    "profession": "sales-executive",
    "category": "Strategy & Planning",
    "title": "The Sales Executive 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Sales Executive with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Sales Executive initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Sales Executive terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0062",
    "profession": "sales-executive",
    "category": "Communication",
    "title": "High-Stakes Sales Executive Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Sales Executive.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0063",
    "profession": "sales-executive",
    "category": "Analysis & Research",
    "title": "Deep-Dive Sales Executive Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Sales Executive Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Sales Executive knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0064",
    "profession": "sales-executive",
    "category": "Workflow & Automation",
    "title": "The Sales Executive Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Sales Executive.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0065",
    "profession": "sales-executive",
    "category": "Client Management",
    "title": "The Sales Executive Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Sales Executive known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0066",
    "profession": "sales-executive",
    "category": "Content Creation",
    "title": "The Viral Sales Executive Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Sales Executive.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Sales Executive.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0067",
    "profession": "sales-executive",
    "category": "Creative & Design",
    "title": "Sales Executive Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Sales Executive.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0068",
    "profession": "sales-executive",
    "category": "Strategy & Planning",
    "title": "The Sales Executive Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Sales Executive.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0069",
    "profession": "sales-executive",
    "category": "Analysis & Research",
    "title": "The Sales Executive Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Sales Executive.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0070",
    "profession": "sales-executive",
    "category": "Workflow & Automation",
    "title": "The Sales Executive Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Sales Executive.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0071",
    "profession": "hr-manager",
    "category": "Strategy & Planning",
    "title": "The HR Manager 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite HR Manager with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific HR Manager initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional HR Manager terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0072",
    "profession": "hr-manager",
    "category": "Communication",
    "title": "High-Stakes HR Manager Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert HR Manager.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0073",
    "profession": "hr-manager",
    "category": "Analysis & Research",
    "title": "Deep-Dive HR Manager Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical HR Manager Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of HR Manager knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0074",
    "profession": "hr-manager",
    "category": "Workflow & Automation",
    "title": "The HR Manager Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a HR Manager.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0075",
    "profession": "hr-manager",
    "category": "Client Management",
    "title": "The HR Manager Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class HR Manager known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0076",
    "profession": "hr-manager",
    "category": "Content Creation",
    "title": "The Viral HR Manager Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful HR Manager.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a HR Manager.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0077",
    "profession": "hr-manager",
    "category": "Creative & Design",
    "title": "HR Manager Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative HR Manager.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0078",
    "profession": "hr-manager",
    "category": "Strategy & Planning",
    "title": "The HR Manager Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior HR Manager.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0079",
    "profession": "hr-manager",
    "category": "Analysis & Research",
    "title": "The HR Manager Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a HR Manager.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0080",
    "profession": "hr-manager",
    "category": "Workflow & Automation",
    "title": "The HR Manager Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior HR Manager.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0081",
    "profession": "financial-analyst",
    "category": "Strategy & Planning",
    "title": "The Financial Analyst 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Financial Analyst with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Financial Analyst initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Financial Analyst terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0082",
    "profession": "financial-analyst",
    "category": "Communication",
    "title": "High-Stakes Financial Analyst Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Financial Analyst.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0083",
    "profession": "financial-analyst",
    "category": "Analysis & Research",
    "title": "Deep-Dive Financial Analyst Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Financial Analyst Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Financial Analyst knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0084",
    "profession": "financial-analyst",
    "category": "Workflow & Automation",
    "title": "The Financial Analyst Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Financial Analyst.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0085",
    "profession": "financial-analyst",
    "category": "Client Management",
    "title": "The Financial Analyst Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Financial Analyst known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0086",
    "profession": "financial-analyst",
    "category": "Content Creation",
    "title": "The Viral Financial Analyst Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Financial Analyst.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Financial Analyst.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0087",
    "profession": "financial-analyst",
    "category": "Creative & Design",
    "title": "Financial Analyst Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Financial Analyst.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0088",
    "profession": "financial-analyst",
    "category": "Strategy & Planning",
    "title": "The Financial Analyst Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Financial Analyst.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0089",
    "profession": "financial-analyst",
    "category": "Analysis & Research",
    "title": "The Financial Analyst Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Financial Analyst.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0090",
    "profession": "financial-analyst",
    "category": "Workflow & Automation",
    "title": "The Financial Analyst Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Financial Analyst.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0091",
    "profession": "data-scientist",
    "category": "Strategy & Planning",
    "title": "The Data Scientist 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Data Scientist with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Data Scientist initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Data Scientist terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0092",
    "profession": "data-scientist",
    "category": "Communication",
    "title": "High-Stakes Data Scientist Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Data Scientist.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0093",
    "profession": "data-scientist",
    "category": "Analysis & Research",
    "title": "Deep-Dive Data Scientist Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Data Scientist Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Data Scientist knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0094",
    "profession": "data-scientist",
    "category": "Workflow & Automation",
    "title": "The Data Scientist Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Data Scientist.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0095",
    "profession": "data-scientist",
    "category": "Client Management",
    "title": "The Data Scientist Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Data Scientist known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0096",
    "profession": "data-scientist",
    "category": "Content Creation",
    "title": "The Viral Data Scientist Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Data Scientist.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Data Scientist.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0097",
    "profession": "data-scientist",
    "category": "Creative & Design",
    "title": "Data Scientist Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Data Scientist.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0098",
    "profession": "data-scientist",
    "category": "Strategy & Planning",
    "title": "The Data Scientist Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Data Scientist.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0099",
    "profession": "data-scientist",
    "category": "Analysis & Research",
    "title": "The Data Scientist Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Data Scientist.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0100",
    "profession": "data-scientist",
    "category": "Workflow & Automation",
    "title": "The Data Scientist Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Data Scientist.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0101",
    "profession": "graphic-designer",
    "category": "Strategy & Planning",
    "title": "The Graphic Designer 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Graphic Designer with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Graphic Designer initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Graphic Designer terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0102",
    "profession": "graphic-designer",
    "category": "Communication",
    "title": "High-Stakes Graphic Designer Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Graphic Designer.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0103",
    "profession": "graphic-designer",
    "category": "Analysis & Research",
    "title": "Deep-Dive Graphic Designer Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Graphic Designer Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Graphic Designer knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0104",
    "profession": "graphic-designer",
    "category": "Workflow & Automation",
    "title": "The Graphic Designer Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Graphic Designer.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0105",
    "profession": "graphic-designer",
    "category": "Client Management",
    "title": "The Graphic Designer Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Graphic Designer known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0106",
    "profession": "graphic-designer",
    "category": "Content Creation",
    "title": "The Viral Graphic Designer Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Graphic Designer.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Graphic Designer.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0107",
    "profession": "graphic-designer",
    "category": "Creative & Design",
    "title": "Graphic Designer Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Graphic Designer.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0108",
    "profession": "graphic-designer",
    "category": "Strategy & Planning",
    "title": "The Graphic Designer Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Graphic Designer.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0109",
    "profession": "graphic-designer",
    "category": "Analysis & Research",
    "title": "The Graphic Designer Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Graphic Designer.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0110",
    "profession": "graphic-designer",
    "category": "Workflow & Automation",
    "title": "The Graphic Designer Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Graphic Designer.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0111",
    "profession": "teacher",
    "category": "Strategy & Planning",
    "title": "The Teacher / Educator 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Teacher / Educator with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Teacher / Educator initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Teacher / Educator terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0112",
    "profession": "teacher",
    "category": "Communication",
    "title": "High-Stakes Teacher / Educator Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Teacher / Educator.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0113",
    "profession": "teacher",
    "category": "Analysis & Research",
    "title": "Deep-Dive Teacher / Educator Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Teacher / Educator Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Teacher / Educator knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0114",
    "profession": "teacher",
    "category": "Workflow & Automation",
    "title": "The Teacher / Educator Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Teacher / Educator.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0115",
    "profession": "teacher",
    "category": "Client Management",
    "title": "The Teacher / Educator Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Teacher / Educator known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0116",
    "profession": "teacher",
    "category": "Content Creation",
    "title": "The Viral Teacher / Educator Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Teacher / Educator.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Teacher / Educator.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0117",
    "profession": "teacher",
    "category": "Creative & Design",
    "title": "Teacher / Educator Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Teacher / Educator.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0118",
    "profession": "teacher",
    "category": "Strategy & Planning",
    "title": "The Teacher / Educator Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Teacher / Educator.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0119",
    "profession": "teacher",
    "category": "Analysis & Research",
    "title": "The Teacher / Educator Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Teacher / Educator.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0120",
    "profession": "teacher",
    "category": "Workflow & Automation",
    "title": "The Teacher / Educator Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Teacher / Educator.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0121",
    "profession": "customer-success",
    "category": "Strategy & Planning",
    "title": "The Customer Success Manager 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Customer Success Manager with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Customer Success Manager initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Customer Success Manager terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0122",
    "profession": "customer-success",
    "category": "Communication",
    "title": "High-Stakes Customer Success Manager Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Customer Success Manager.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0123",
    "profession": "customer-success",
    "category": "Analysis & Research",
    "title": "Deep-Dive Customer Success Manager Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Customer Success Manager Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Customer Success Manager knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0124",
    "profession": "customer-success",
    "category": "Workflow & Automation",
    "title": "The Customer Success Manager Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Customer Success Manager.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0125",
    "profession": "customer-success",
    "category": "Client Management",
    "title": "The Customer Success Manager Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Customer Success Manager known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0126",
    "profession": "customer-success",
    "category": "Content Creation",
    "title": "The Viral Customer Success Manager Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Customer Success Manager.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Customer Success Manager.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0127",
    "profession": "customer-success",
    "category": "Creative & Design",
    "title": "Customer Success Manager Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Customer Success Manager.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0128",
    "profession": "customer-success",
    "category": "Strategy & Planning",
    "title": "The Customer Success Manager Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Customer Success Manager.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0129",
    "profession": "customer-success",
    "category": "Analysis & Research",
    "title": "The Customer Success Manager Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Customer Success Manager.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0130",
    "profession": "customer-success",
    "category": "Workflow & Automation",
    "title": "The Customer Success Manager Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Customer Success Manager.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0131",
    "profession": "product-manager",
    "category": "Strategy & Planning",
    "title": "The Product Manager 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Product Manager with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Product Manager initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Product Manager terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0132",
    "profession": "product-manager",
    "category": "Communication",
    "title": "High-Stakes Product Manager Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Product Manager.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0133",
    "profession": "product-manager",
    "category": "Analysis & Research",
    "title": "Deep-Dive Product Manager Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Product Manager Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Product Manager knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0134",
    "profession": "product-manager",
    "category": "Workflow & Automation",
    "title": "The Product Manager Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Product Manager.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0135",
    "profession": "product-manager",
    "category": "Client Management",
    "title": "The Product Manager Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Product Manager known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0136",
    "profession": "product-manager",
    "category": "Content Creation",
    "title": "The Viral Product Manager Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Product Manager.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Product Manager.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0137",
    "profession": "product-manager",
    "category": "Creative & Design",
    "title": "Product Manager Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Product Manager.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0138",
    "profession": "product-manager",
    "category": "Strategy & Planning",
    "title": "The Product Manager Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Product Manager.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0139",
    "profession": "product-manager",
    "category": "Analysis & Research",
    "title": "The Product Manager Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Product Manager.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0140",
    "profession": "product-manager",
    "category": "Workflow & Automation",
    "title": "The Product Manager Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Product Manager.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0141",
    "profession": "event-planner",
    "category": "Strategy & Planning",
    "title": "The Event Planner 90-Day Master Strategy (Premium)",
    "promptText": "ACT AS an Elite Event Planner with 15+ years of industry-leading experience.\nYOUR TASK is to generate a comprehensive, bulletproof 90-Day Strategy for a new initiative.\n\nINPUT VARIABLES:\n- Primary Goal: [Insert Goal]\n- Current Bottleneck: [Insert Bottleneck]\n- Available Resources: [Insert Resources/Budget]\n\nSTEP-BY-STEP INSTRUCTIONS:\n1. The 30-60-90 Roadmap: Break the strategy into three distinct 30-day sprints. Each sprint must have a specific theme, 3 actionable tactics, and a measurable KPI.\n2. Risk Mitigation: Identify the top 3 potential points of failure for this specific Event Planner initiative and provide a pre-mortem solution for each.\n3. The \"Pareto\" Action Plan: Identify the 20% of tasks that will drive 80% of the results in the first 30 days.\n4. Resource Allocation: Provide a recommended breakdown of how to deploy the [Available Resources] for maximum ROI.\n\nFORMATTING: Output as a highly structured Markdown document. Use professional Event Planner terminology. Do not use generic advice; be highly tactical and specific.",
    "tags": [
      "strategy",
      "90-day-plan",
      "tactics"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0142",
    "profession": "event-planner",
    "category": "Communication",
    "title": "High-Stakes Event Planner Negotiation Script (Premium)",
    "promptText": "You are a Master Negotiator and an expert Event Planner.\nI need you to write a high-stakes communication script (email + phone talking points).\n\nSCENARIO:\n- Objective: [Insert what you want to achieve/win]\n- The Counterparty: [Who are you talking to?]\n- Our Leverage: [What is our biggest advantage?]\n- The Risk: [What happens if we lose?]\n\nFRAMEWORK TO FOLLOW (The Voss Empathy Method):\n1. The Tactical Empathy Opener: Acknowledge the counterparty's likely objections immediately to defuse tension.\n2. The \"Calibrated Question\": Formulate 3 open-ended \"How\" or \"What\" questions that force the counterparty to solve our problem for us.\n3. The Anchor: State our position using extreme precision (e.g., $4,215 instead of $4,000) to project authority.\n4. The Email Template: Write a 4-sentence email that sets up the phone call without giving away the leverage.\n\nCONSTRAINT: Write in a calm, authoritative, and empathetic tone. Use short sentences. Provide the exact word-for-word scripts.",
    "tags": [
      "negotiation",
      "script",
      "communication"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0143",
    "profession": "event-planner",
    "category": "Analysis & Research",
    "title": "Deep-Dive Event Planner Audit & Diagnostic (Premium)",
    "promptText": "Act as a highly analytical Event Planner Consultant who specializes in rapid turnarounds.\nGenerate a comprehensive Diagnostic Audit framework.\n\nCONTEXT:\n- Subject of Audit: [Insert Project/Process/Asset to Audit]\n- Historical Performance: [Insert past metrics]\n- Suspected Core Issue: [Insert suspected problem]\n\nDELIVERABLES REQUIRED:\n1. The 5-Whys Root Cause Analysis: Force a breakdown of the [Suspected Core Issue] to find the absolute bedrock problem.\n2. The Quantitative vs Qualitative Matrix: List the exact metrics (Quant) and subjective feedback loops (Qual) I need to measure to verify the problem.\n3. The Triage Protocol: What are the immediate, 24-hour \"bleeding neck\" fixes I must implement right now?\n4. The Long-Term Architecture: Propose a new, optimized system to ensure this issue never happens again.\n\nFORMAT: Use a detailed diagnostic matrix. Be highly specific with actionable tactics. Assume an advanced level of Event Planner knowledge.",
    "tags": [
      "audit",
      "diagnostic",
      "analysis"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0144",
    "profession": "event-planner",
    "category": "Workflow & Automation",
    "title": "The Event Planner Weekly Automation Engine (Premium)",
    "promptText": "Act as a Systems Engineer and Productivity Expert for a Event Planner.\nI want to eliminate 10 hours of manual work from my week.\n\nCURRENT WORKFLOW:\n- Most Time-Consuming Task: [Insert Task]\n- Software Currently Used: [Insert Tech Stack]\n- Frequency: [How often is it done?]\n\nTASK:\nDesign an automated, low-code/no-code workflow architecture to completely bypass the manual labor of [Most Time-Consuming Task].\n\nREQUIRED BREAKDOWN:\n1. Trigger Event: What is the exact digital event that should kick off this automation? (e.g., webhook, scheduled time, email received).\n2. The Middleware Logic: Detail the step-by-step logic map. If X happens, do Y. Include data formatting steps.\n3. Tool Recommendations: Recommend specific integration tools (Zapier, Make, custom scripts) and how they should connect the [Software Currently Used].\n4. Edge Case Handling: What happens if the data is malformed? Provide a fallback/error-handling protocol.\n\nCONSTRAINT: Output the logic map in a clear, numbered sequence. Be highly technical.",
    "tags": [
      "automation",
      "workflow",
      "systems"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0145",
    "profession": "event-planner",
    "category": "Client Management",
    "title": "The Event Planner Client Onboarding Masterclass (Premium)",
    "promptText": "You are a world-class Event Planner known for incredible client retention and zero churn.\nDesign a bulletproof, 14-Day Client Onboarding Sequence.\n\nCLIENT DETAILS:\n- Client Type: [Insert B2B/B2C, Industry]\n- Service Provided: [Insert Service]\n- Client's Biggest Fear: [Insert Fear/Objection]\n\nTHE SEQUENCE:\nGenerate a chronological, day-by-day sequence of touchpoints (Emails, calls, deliverables) for the first 14 days.\n\nREQUIREMENTS:\n- Day 1 (The \"Buyer's Remorse\" Killer): Write the exact welcome email that immediately eliminates [Client's Biggest Fear].\n- Day 3 (The Quick Win): What is a fast, low-effort deliverable we can provide to prove immediate ROI?\n- Day 7 (The Expectations Alignment): A script for the kickoff call to set hard boundaries on scope creep.\n- Day 14 (The Check-in): A survey or feedback loop mechanism.\n\nFORMAT: Deliver as a chronological checklist with the exact scripts and templates nested under each day.",
    "tags": [
      "onboarding",
      "retention",
      "client-management"
    ],
    "difficulty": "intermediate",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0146",
    "profession": "event-planner",
    "category": "Content Creation",
    "title": "The Viral Event Planner Thought Leadership Matrix (Premium)",
    "promptText": "Act as a Top 1% LinkedIn Ghostwriter for a highly successful Event Planner.\nI need a month's worth of thought leadership content that drives inbound leads.\n\nMY PROFILE:\n- My Niche: [Insert Niche]\n- My Contrarian Opinion: [Insert an opinion you hold that others disagree with]\n- My Biggest Success: [Insert Case Study/Win]\n\nGENERATE THE CONTENT MATRIX:\nProvide 4 highly-engineered post templates based on these frameworks:\n1. The \"Tear Down\": Analyze a common mistake people make in [My Niche] and how to fix it.\n2. The \"Hero's Journey\": A storytelling post detailing the struggles before achieving [My Biggest Success]. (Use the PAS - Problem, Agitate, Solution framework).\n3. The \"Polarizing Truth\": A post arguing for [My Contrarian Opinion] using data and logic to spark high-engagement debate.\n4. The \"Value Bomb\": A highly tactical, step-by-step listicle that gives away the \"secrets\" of a Event Planner.\n\nCONSTRAINT: Write the actual posts. Ensure the hooks (first 2 lines) are highly optimized for 'Read More' clicks. Use whitespace and short sentences.",
    "tags": [
      "social-media",
      "linkedin",
      "thought-leadership"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0147",
    "profession": "event-planner",
    "category": "Creative & Design",
    "title": "Event Planner Innovative Brainstorming Protocol (Premium)",
    "promptText": "You are a Creative Director and a highly innovative Event Planner.\nI need to completely reimagine a standard concept using lateral thinking.\n\nTHE TARGET:\n- Core Concept/Problem: [Insert what you are trying to design or solve]\n- Target Audience: [Insert Audience]\n- Boring Standard Solution: [What does everyone else do?]\n\nTHE SCAMPER PROTOCOL:\nApply the SCAMPER brainstorming technique to the [Core Concept/Problem]:\n- Substitute: What elements of the [Boring Standard Solution] can we replace?\n- Combine: What two completely unrelated ideas can we merge here?\n- Adapt: How can we adapt a solution from a completely different industry (e.g., aviation, biology) to this?\n- Modify: What happens if we 10x the scale or shrink it to 10%?\n- Put to another use: How can this be used by someone entirely different?\n- Eliminate: What happens if we remove the most \"essential\" feature?\n- Reverse: What if we did the exact opposite of the [Boring Standard Solution]?\n\nOUTPUT: Generate 5 wildly innovative, non-obvious solutions based on this exercise.",
    "tags": [
      "brainstorming",
      "scamper",
      "innovation"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0148",
    "profession": "event-planner",
    "category": "Strategy & Planning",
    "title": "The Event Planner Crisis Management Blueprint (Premium)",
    "promptText": "Act as a veteran PR Expert and Senior Event Planner.\nWe are facing an imminent crisis and need a containment and resolution strategy.\n\nTHE CRISIS:\n- The Incident: [Describe the failure/crisis]\n- Stakeholders Affected: [Who is angry/impacted?]\n- Worst-Case Scenario: [What happens if we fail to fix this?]\n\nTHE PROTOCOL:\nGenerate a 4-Phase Crisis Blueprint:\n1. The 1-Hour Response: Write the exact holding statement/email to send to [Stakeholders Affected] acknowledging the issue without accepting legal liability.\n2. The War Room Setup: Who needs to be in the room, and what are their specific roles in solving [The Incident]?\n3. The Fix Implementation: A structured framework for deploying the patch/solution while communicating updates.\n4. The Post-Mortem Restitution: How do we rebuild trust and compensate the stakeholders to prevent them from churning/leaving?\n\nTONE: Urgent, highly professional, empathetic but legally defensive.",
    "tags": [
      "crisis",
      "pr",
      "management"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0149",
    "profession": "event-planner",
    "category": "Analysis & Research",
    "title": "The Event Planner Competitive Intelligence Matrix (Premium)",
    "promptText": "Act as a specialized Competitive Intelligence Analyst for a Event Planner.\nI need a brutal, objective teardown of my top competitor.\n\nTHE COMPETITOR:\n- Competitor Name: [Insert Competitor]\n- Their Core Advantage: [What do they do best?]\n- Our Product/Service: [What do we sell?]\n\nTHE ANALYSIS:\nProvide a highly structured strategic teardown:\n1. The Vulnerability Map: Identify 3 critical weaknesses or gaps in the competitor's armor (e.g., poor customer service, outdated tech, high pricing).\n2. The Feature/Service Gap: What do we offer that they completely lack? How do we amplify this in our messaging?\n3. The Judo Strategy: How can we use [Their Core Advantage] against them? (e.g., if they are \"enterprise-grade\", frame us as \"agile and personalized\").\n4. The Attack Plan: 3 specific marketing or sales tactics we can deploy next week to actively poach their dissatisfied clients.\n\nFORMAT: Output as an executive summary. Be ruthless and highly strategic.",
    "tags": [
      "competitor-analysis",
      "strategy",
      "research"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "ChatGPT",
      "Claude"
    ],
    "isPremium": true
  },
  {
    "id": "premium-gen-0150",
    "profession": "event-planner",
    "category": "Workflow & Automation",
    "title": "The Event Planner Ultimate KPI Dashboard Setup (Premium)",
    "promptText": "Act as a Data Scientist and Senior Event Planner.\nI need to build a single \"Source of Truth\" dashboard to monitor performance.\n\nCONTEXT:\n- Primary Objective: [What are you trying to achieve overall?]\n- Data Sources: [Where does the data live? e.g., CRM, Google Analytics, Jira]\n- Team Size: [How many people?]\n\nTHE DASHBOARD ARCHITECTURE:\n1. The North Star Metric: Define the single most important KPI that proves we are achieving [Primary Objective].\n2. Leading vs. Lagging Indicators: Identify 3 Leading Indicators (predictive of future success) and 3 Lagging Indicators (historical results).\n3. The Metric Formulas: Provide the exact mathematical formula to calculate each of the above indicators.\n4. The Review Cadence: Design a framework for the weekly team meeting. Which metrics are reviewed daily, weekly, and monthly? What is the trigger threshold for an \"alert\"?\n\nFORMAT: Present as a data architecture spec sheet. Use professional data analytics terminology.",
    "tags": [
      "data",
      "kpi",
      "dashboard"
    ],
    "difficulty": "advanced",
    "aiTool": [
      "Claude",
      "ChatGPT",
      "Gemini"
    ],
    "isPremium": true
  }
];
