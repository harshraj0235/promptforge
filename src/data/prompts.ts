export interface Prompt {
  id: string;
  profession: string; // slug
  category: string;
  title: string;
  promptText: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  aiTool: ("ChatGPT" | "Claude" | "Gemini" | "Midjourney" | "DALL-E")[];
  isPremium?: boolean;
}

export const promptCategories = [
  "Email & Communication",
  "Strategy & Planning",
  "Content Creation",
  "Analysis & Research",
  "Client Management",
  "Automation & Workflow",
  "Creative & Design",
  "Documentation",
  "Social Media",
  "Sales & Outreach",
] as const;

export const prompts: Prompt[] = [
  // ============================================================
  // REAL ESTATE AGENT (25 prompts)
  // ============================================================
  {
    id: "re-001",
    profession: "real-estate-agent",
    category: "Content Creation",
    title: "Luxury Property Listing Description",
    promptText: `Write a compelling, luxury property listing description for a [PROPERTY TYPE] located in [NEIGHBORHOOD/CITY]. The property features: [LIST KEY FEATURES - e.g., 4 bedrooms, 3 bathrooms, pool, ocean view]. 

Target buyer persona: [e.g., affluent families, investors, retirees].

Include:
- An attention-grabbing opening headline
- Vivid, sensory language that paints a picture
- Neighborhood highlights and lifestyle appeal
- A strong call-to-action for scheduling a showing

Tone: Sophisticated yet approachable. Word count: 250-350 words.`,
    tags: ["property listing", "luxury", "copywriting", "MLS"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "re-002",
    profession: "real-estate-agent",
    category: "Email & Communication",
    title: "Buyer Follow-Up Email After Showing",
    promptText: `Write a personalized follow-up email to a potential buyer after a property showing. 

Details:
- Property address: [ADDRESS]
- Key features they seemed interested in: [FEATURES]
- Any concerns they mentioned: [CONCERNS]
- Next steps you want them to take: [e.g., schedule second showing, make an offer]

The email should:
1. Reference specific moments from the showing to show attentiveness
2. Address any concerns they raised
3. Create urgency without being pushy
4. Include a clear call-to-action

Tone: Warm, professional, helpful. Keep under 200 words.`,
    tags: ["follow-up", "buyer", "email", "client communication"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "re-003",
    profession: "real-estate-agent",
    category: "Analysis & Research",
    title: "Comparative Market Analysis Report",
    promptText: `Create a Comparative Market Analysis (CMA) report summary for a property at [ADDRESS] in [CITY, STATE]. 

Include these sections:
1. **Executive Summary** — Property overview and recommended listing price range
2. **Market Overview** — Current market conditions in the area (buyer's vs seller's market)
3. **Comparable Properties** — Framework for analyzing 3-5 similar recently sold properties (within 6 months, similar sq ft, same neighborhood)
4. **Price Adjustment Factors** — How to adjust for differences in features, condition, and lot size
5. **Recommended Pricing Strategy** — Suggested list price with rationale
6. **Marketing Recommendations** — How to position this property

Format as a professional report that can be presented to the homeowner.`,
    tags: ["CMA", "market analysis", "pricing", "valuation"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "re-004",
    profession: "real-estate-agent",
    category: "Social Media",
    title: "Instagram Carousel — Neighborhood Guide",
    promptText: `Create content for a 10-slide Instagram carousel about the [NEIGHBORHOOD NAME] neighborhood in [CITY]. 

Each slide should have:
- A catchy headline (max 6 words)
- 2-3 bullet points of key information
- An emoji to match the theme

Cover these topics across slides:
1. Neighborhood intro & vibe
2. Average home prices & market trends
3. Top restaurants & dining
4. Parks & outdoor activities
5. Schools & education
6. Shopping & entertainment
7. Commute & transportation
8. Community events
9. Hidden gems locals love
10. CTA — "Thinking about moving here? DM me!"

Also suggest 20 relevant hashtags for maximum reach.`,
    tags: ["instagram", "neighborhood guide", "social media", "carousel"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "re-005",
    profession: "real-estate-agent",
    category: "Client Management",
    title: "First-Time Home Buyer Consultation Script",
    promptText: `Create a comprehensive consultation script for a first meeting with first-time home buyers. 

The script should cover:
1. **Welcome & rapport building** — Icebreaker questions
2. **Needs assessment** — Budget, location preferences, must-haves vs nice-to-haves, timeline
3. **Education segment** — Brief explanation of the buying process, pre-approval, inspections, closing costs
4. **Setting expectations** — Current market conditions, realistic timelines
5. **Your value proposition** — What you offer as their agent
6. **Next steps** — Action items for both parties

Include transition phrases between sections. Format as a conversation guide with suggested questions and talking points, not a rigid word-for-word script.`,
    tags: ["consultation", "first-time buyers", "script", "client meeting"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "re-006",
    profession: "real-estate-agent",
    category: "Email & Communication",
    title: "Expired Listing Prospecting Letter",
    promptText: `Write a prospecting letter to a homeowner whose listing just expired after [X] days on market without selling.

Address: [ADDRESS]
Original list price: [PRICE]
Days on market: [DAYS]

The letter should:
1. Acknowledge their frustration without criticizing the previous agent
2. Briefly explain common reasons homes don't sell (pricing, marketing, staging)
3. Highlight what you would do differently with specific strategies
4. Include a compelling statistic about your success rate
5. Offer a free, no-obligation market analysis
6. Include a soft but clear call-to-action

Tone: Empathetic, confident, not salesy. Keep under 300 words.`,
    tags: ["prospecting", "expired listing", "lead generation", "letter"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "re-007",
    profession: "real-estate-agent",
    category: "Strategy & Planning",
    title: "Annual Marketing Plan for Real Estate Agent",
    promptText: `Create a comprehensive 12-month marketing plan for a real estate agent specializing in [AREA/NICHE - e.g., luxury homes in Miami, first-time buyers in Austin].

Include for each quarter:
- **Digital Marketing:** Social media campaigns, email newsletters, paid ads
- **Content Calendar:** Blog topics, video ideas, social media themes
- **Community Engagement:** Events, sponsorships, networking
- **Lead Generation:** Open houses, referral programs, partnerships
- **Budget Allocation:** Suggested percentage split across channels

Also include:
- Annual goals (transactions, revenue, lead targets)
- KPIs to track monthly
- Seasonal marketing opportunities (spring selling season, back-to-school, holidays)

Format as a structured plan with monthly action items.`,
    tags: ["marketing plan", "annual strategy", "lead generation", "branding"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "re-008",
    profession: "real-estate-agent",
    category: "Content Creation",
    title: "Open House Invitation Email",
    promptText: `Write an engaging open house invitation email for the property at [ADDRESS].

Property highlights: [KEY FEATURES]
Open house date: [DATE] from [TIME] to [TIME]
Special features: [e.g., refreshments, raffle, neighborhood tour]

The email should:
1. Create excitement about the property
2. Mention 3-4 standout features
3. Include date, time, and address clearly
4. Add a reason to attend beyond just viewing (e.g., neighborhood info, market insights)
5. RSVP call-to-action

Subject line options: Provide 3 subject line alternatives. Keep email under 150 words.`,
    tags: ["open house", "email", "invitation", "event"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "re-009",
    profession: "real-estate-agent",
    category: "Sales & Outreach",
    title: "FSBO Outreach Script",
    promptText: `Write a phone script for reaching out to For Sale By Owner (FSBO) homeowners.

The script should:
1. Open with a friendly, non-threatening introduction
2. Ask about their experience selling on their own
3. Provide value by sharing a relevant market insight
4. Address common FSBO objections (commission, "I can do it myself")
5. Offer a free service (market analysis, professional photos) as a foot in the door
6. Close with a low-pressure meeting request

Include objection handlers for:
- "I don't want to pay commission"
- "I already have buyers interested"
- "I've sold homes before"

Keep natural and conversational, not robotic.`,
    tags: ["FSBO", "cold calling", "script", "objection handling"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "re-010",
    profession: "real-estate-agent",
    category: "Content Creation",
    title: "Monthly Market Update Newsletter",
    promptText: `Write a monthly real estate market update newsletter for [CITY/AREA] for [MONTH, YEAR].

Include these sections:
1. **Market Snapshot** — Median home price, inventory levels, days on market, year-over-year changes
2. **What This Means for Buyers** — 2-3 actionable insights
3. **What This Means for Sellers** — 2-3 actionable insights
4. **Featured Listing** — Placeholder for a highlighted property
5. **Local News & Events** — 2-3 community updates
6. **Mortgage Rate Update** — Current rates and trend
7. **Tip of the Month** — One practical real estate tip

Tone: Authoritative yet accessible. Format with headers and short paragraphs for easy scanning. Total: 400-500 words.`,
    tags: ["newsletter", "market update", "email marketing", "content"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },

  // ============================================================
  // SOFTWARE DEVELOPER (30 prompts)
  // ============================================================
  {
    id: "dev-001",
    profession: "software-developer",
    category: "Automation & Workflow",
    title: "Code Review Checklist Generator",
    promptText: `Generate a comprehensive code review checklist for a [LANGUAGE/FRAMEWORK] project. The codebase is a [TYPE - e.g., REST API, React frontend, microservice].

Include checks for:
1. **Code Quality** — Naming conventions, DRY principle, single responsibility
2. **Security** — Input validation, SQL injection, XSS, authentication
3. **Performance** — N+1 queries, memory leaks, unnecessary re-renders
4. **Error Handling** — Try-catch blocks, error logging, graceful degradation
5. **Testing** — Test coverage, edge cases, mocking
6. **Documentation** — Comments, README updates, API docs
7. **Architecture** — Separation of concerns, dependency injection, SOLID principles
8. **Accessibility** — (for frontend) ARIA labels, keyboard navigation, color contrast

Format as a markdown checklist that can be added to a PR template.`,
    tags: ["code review", "checklist", "quality", "best practices"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "dev-002",
    profession: "software-developer",
    category: "Documentation",
    title: "API Documentation Generator",
    promptText: `Generate comprehensive API documentation for the following endpoint:

Endpoint: [METHOD] [URL]
Description: [WHAT IT DOES]
Authentication: [AUTH TYPE]

Request body/parameters:
[PASTE YOUR SCHEMA OR DESCRIBE FIELDS]

Response format:
[PASTE EXAMPLE RESPONSE OR DESCRIBE]

Generate documentation including:
1. **Endpoint Overview** — Description and use case
2. **Authentication** — Required headers/tokens
3. **Request Parameters** — Table with name, type, required/optional, description
4. **Request Body** — JSON schema with examples
5. **Response** — Success and error response examples
6. **Error Codes** — Table of possible error codes and meanings
7. **Code Examples** — cURL, JavaScript (fetch), and Python (requests)
8. **Rate Limiting** — If applicable

Format in OpenAPI/Swagger-compatible markdown.`,
    tags: ["api", "documentation", "swagger", "rest"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "dev-003",
    profession: "software-developer",
    category: "Analysis & Research",
    title: "Debug This Error — Systematic Approach",
    promptText: `I'm encountering the following error in my [LANGUAGE/FRAMEWORK] project:

\`\`\`
[PASTE ERROR MESSAGE/STACK TRACE]
\`\`\`

Relevant code:
\`\`\`
[PASTE RELEVANT CODE SNIPPET]
\`\`\`

Context:
- Runtime: [e.g., Node.js 20, Python 3.12, Java 21]
- This started happening after: [WHAT CHANGED]
- I've already tried: [WHAT YOU'VE ATTEMPTED]

Please:
1. Explain what this error means in plain English
2. Identify the most likely root cause
3. Provide a step-by-step fix with code
4. Explain why the fix works
5. Suggest how to prevent this error in the future
6. Are there any related issues I should watch for?`,
    tags: ["debugging", "error", "troubleshooting", "fix"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "dev-004",
    profession: "software-developer",
    category: "Strategy & Planning",
    title: "System Design Document",
    promptText: `Create a system design document for a [SYSTEM TYPE - e.g., real-time chat application, e-commerce platform, URL shortener].

Requirements:
- Expected users: [NUMBER]
- Read/write ratio: [e.g., 100:1]
- Key features: [LIST FEATURES]
- Non-functional requirements: [e.g., <100ms latency, 99.9% uptime]

Include:
1. **High-Level Architecture** — Components and their interactions (describe a diagram)
2. **Database Design** — Schema, choice of SQL vs NoSQL with rationale
3. **API Design** — Key endpoints with request/response formats
4. **Scalability** — Horizontal scaling, caching strategy, CDN usage
5. **Data Flow** — How data moves through the system
6. **Trade-offs** — Decisions made and alternatives considered
7. **Monitoring & Alerting** — Key metrics to track
8. **Capacity Estimation** — Storage, bandwidth, QPS calculations

Format as a structured technical document suitable for an architecture review.`,
    tags: ["system design", "architecture", "scalability", "design doc"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "dev-005",
    profession: "software-developer",
    category: "Automation & Workflow",
    title: "Unit Test Generator",
    promptText: `Generate comprehensive unit tests for the following function/class:

\`\`\`[LANGUAGE]
[PASTE YOUR CODE HERE]
\`\`\`

Testing framework: [e.g., Jest, Pytest, JUnit, RSpec]

Generate tests that cover:
1. **Happy path** — Normal expected inputs and outputs
2. **Edge cases** — Empty inputs, null/undefined, boundary values
3. **Error cases** — Invalid inputs, exceptions, error handling
4. **Type validation** — Wrong data types (if applicable)
5. **Integration points** — Mock external dependencies

For each test:
- Use descriptive test names following "should [expected behavior] when [condition]" pattern
- Include arrange-act-assert structure
- Add comments explaining what's being tested and why

Also suggest any additional test scenarios I might have missed.`,
    tags: ["testing", "unit tests", "TDD", "quality assurance"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "dev-006",
    profession: "software-developer",
    category: "Content Creation",
    title: "Technical Blog Post Outline",
    promptText: `Create a detailed outline for a technical blog post about [TOPIC - e.g., "Implementing Rate Limiting in Node.js"].

Target audience: [e.g., intermediate developers, senior engineers]
Estimated reading time: [e.g., 10 minutes]

Include:
1. **Title options** — 3 SEO-optimized title alternatives
2. **Meta description** — 155 characters for SEO
3. **Introduction** — Hook, problem statement, what readers will learn
4. **Section breakdown** — 4-6 main sections with:
   - H2/H3 headings
   - Key points to cover
   - Code examples to include
   - Diagrams/visuals to create
5. **Conclusion** — Summary, next steps, call-to-action
6. **SEO keywords** — Primary and secondary keywords to target

Format as a structured outline that I can fill in with content.`,
    tags: ["blog", "technical writing", "content", "SEO"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "dev-007",
    profession: "software-developer",
    category: "Analysis & Research",
    title: "Code Refactoring Advisor",
    promptText: `Review the following code and suggest refactoring improvements:

\`\`\`[LANGUAGE]
[PASTE YOUR CODE HERE]
\`\`\`

Focus areas:
1. **Readability** — Naming, structure, comments
2. **Performance** — Time/space complexity improvements
3. **Design Patterns** — Applicable patterns (Strategy, Observer, Factory, etc.)
4. **SOLID Principles** — Single Responsibility, Open/Closed, etc.
5. **DRY/KISS** — Eliminate duplication, simplify complexity
6. **Modern Language Features** — Utilize newer syntax/APIs

For each suggestion:
- Show the original code
- Show the refactored version
- Explain the benefit (readability, performance, maintainability)
- Rate the priority (high/medium/low)

Don't rewrite everything — focus on the most impactful improvements.`,
    tags: ["refactoring", "clean code", "design patterns", "optimization"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "dev-008",
    profession: "software-developer",
    category: "Documentation",
    title: "README.md Generator",
    promptText: `Generate a professional README.md for my project:

Project name: [NAME]
Description: [BRIEF DESCRIPTION]
Tech stack: [LANGUAGES, FRAMEWORKS, TOOLS]
Key features: [LIST FEATURES]

Include these sections:
1. **Project Title & Badges** — Name, build status, license, version badges
2. **Description** — What it does, why it exists, who it's for
3. **Screenshots/Demo** — Placeholder for visuals
4. **Quick Start** — Installation in 3-5 steps
5. **Prerequisites** — Required software and versions
6. **Installation** — Step-by-step setup guide
7. **Usage** — Basic usage examples with code
8. **API Reference** — Key functions/endpoints (if applicable)
9. **Configuration** — Environment variables, config files
10. **Contributing** — How to contribute, code of conduct
11. **Testing** — How to run tests
12. **License** — License type
13. **Acknowledgments** — Credits and references

Use proper markdown formatting with code blocks, tables, and collapsible sections.`,
    tags: ["readme", "documentation", "open source", "project setup"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "dev-009",
    profession: "software-developer",
    category: "Strategy & Planning",
    title: "Database Schema Designer",
    promptText: `Design a database schema for a [APPLICATION TYPE - e.g., social media app, inventory management system, booking platform].

Core entities: [LIST MAIN ENTITIES]
Key relationships: [DESCRIBE RELATIONSHIPS]
Expected scale: [NUMBER OF USERS/RECORDS]

Please provide:
1. **Entity-Relationship Diagram** — Describe tables and relationships in text
2. **Table Definitions** — Each table with columns, types, constraints
3. **Indexes** — Recommended indexes for common queries
4. **SQL Migration Script** — CREATE TABLE statements for [PostgreSQL/MySQL]
5. **Sample Queries** — 5 common queries with joins
6. **Normalization** — Current normal form and justification
7. **Scalability Notes** — Partitioning, sharding considerations

Include both the normalized design and any strategic denormalization for performance.`,
    tags: ["database", "schema", "SQL", "data modeling"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "dev-010",
    profession: "software-developer",
    category: "Email & Communication",
    title: "Technical Decision Document (ADR)",
    promptText: `Write an Architecture Decision Record (ADR) for the following technical decision:

Decision: [e.g., "Use PostgreSQL instead of MongoDB for our user data"]
Context: [WHY THIS DECISION IS NEEDED]
Team size: [NUMBER]
Current stack: [CURRENT TECHNOLOGIES]

ADR Format:
1. **Title** — ADR-[NUMBER]: [Decision Title]
2. **Status** — Proposed/Accepted/Deprecated
3. **Context** — What situation led to this decision
4. **Decision** — What we decided to do
5. **Alternatives Considered** — At least 3 alternatives with pros/cons
6. **Consequences** — Positive, negative, and neutral outcomes
7. **Compliance** — How we'll ensure the decision is followed
8. **Review Date** — When to revisit this decision

Write in clear, objective technical language. Avoid opinion — focus on measurable criteria.`,
    tags: ["ADR", "architecture", "decision", "documentation"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // MARKETING MANAGER (25 prompts)
  // ============================================================
  {
    id: "mkt-001",
    profession: "marketing-manager",
    category: "Content Creation",
    title: "Email Marketing Campaign Sequence",
    promptText: `Create a 5-email drip campaign sequence for [PRODUCT/SERVICE] targeting [AUDIENCE].

Campaign goal: [e.g., convert free trial users, nurture leads, onboard new customers]

For each email, provide:
1. **Subject line** — 3 A/B test options
2. **Preview text** — 90 characters
3. **Email body** — Full copy with personalization tokens
4. **CTA button** — Text and placement
5. **Send timing** — Days after trigger/previous email
6. **Goal** — What this email should achieve

Email sequence structure:
- Email 1: Welcome / Value introduction
- Email 2: Problem agitation + solution
- Email 3: Social proof / Case study
- Email 4: Overcome objections
- Email 5: Final offer + urgency

Use the [AIDA/PAS/BAB] framework. Tone: [TONE].`,
    tags: ["email marketing", "drip campaign", "automation", "conversion"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "mkt-002",
    profession: "marketing-manager",
    category: "Strategy & Planning",
    title: "Content Calendar Generator",
    promptText: `Create a detailed 30-day content calendar for [BRAND/BUSINESS] in the [INDUSTRY] space.

Target audience: [DESCRIBE AUDIENCE]
Content pillars: [LIST 3-5 THEMES]
Platforms: [e.g., Instagram, LinkedIn, Blog, Twitter/X, TikTok]
Posting frequency: [e.g., daily on Instagram, 3x/week on LinkedIn]

For each day, include:
- **Platform** — Where to post
- **Content type** — Reel, carousel, story, blog, tweet, etc.
- **Topic/Theme** — What it's about
- **Caption idea** — Brief summary or hook
- **Hashtags** — 5-10 relevant hashtags
- **Optimal posting time** — Based on platform best practices

Also include:
- Weekly themes that tie content together
- 4 promotional posts (not more than 20% of content)
- 2 user-generated content (UGC) prompts
- 2 trending/timely content hooks

Format as a table for easy implementation.`,
    tags: ["content calendar", "social media", "planning", "scheduling"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "mkt-003",
    profession: "marketing-manager",
    category: "Analysis & Research",
    title: "Competitor Analysis Framework",
    promptText: `Create a comprehensive competitor analysis for [YOUR COMPANY] in the [INDUSTRY] market.

Main competitors to analyze: [LIST 3-5 COMPETITORS]

Cover these dimensions:
1. **Product/Service Comparison** — Features, pricing, unique selling propositions
2. **Market Positioning** — Brand messaging, target audience, value proposition
3. **Digital Presence** — Website quality, SEO rankings, content strategy
4. **Social Media** — Platforms, follower counts, engagement rates, content types
5. **Advertising** — Ad channels, messaging, estimated spend
6. **Customer Reviews** — Strengths and weaknesses from user feedback
7. **SWOT Analysis** — For each competitor
8. **Gap Analysis** — Opportunities they're missing that you can exploit

Deliverable: A structured report with comparison tables and actionable recommendations for how [YOUR COMPANY] can differentiate.`,
    tags: ["competitor analysis", "market research", "strategy", "SWOT"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "mkt-004",
    profession: "marketing-manager",
    category: "Content Creation",
    title: "Google Ads Copy Generator",
    promptText: `Write Google Search Ads copy for [PRODUCT/SERVICE] targeting the keyword [PRIMARY KEYWORD].

Target audience: [DESCRIBE]
Unique selling points: [LIST 3-5 USPs]
Landing page URL: [URL]

Create 5 ad variations, each with:
1. **Headlines** (max 30 characters each) — 3 headlines
2. **Descriptions** (max 90 characters each) — 2 descriptions  
3. **Display path** — 2 path segments
4. **Ad extensions** — Sitelinks (4), callouts (4), structured snippets

Best practices to follow:
- Include the keyword naturally in headline 1
- Use numbers and specifics (not vague claims)
- Include a clear CTA in one headline
- Test emotional vs. rational appeals
- Use dynamic keyword insertion where appropriate

Also suggest negative keywords to add.`,
    tags: ["Google Ads", "PPC", "ad copy", "search ads"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "mkt-005",
    profession: "marketing-manager",
    category: "Strategy & Planning",
    title: "Product Launch Marketing Plan",
    promptText: `Create a comprehensive go-to-market (GTM) plan for launching [PRODUCT NAME] in the [INDUSTRY] market.

Product: [DESCRIPTION]
Target market: [DESCRIPTION]
Launch date: [DATE]
Budget: [AMOUNT OR RANGE]

Include these phases:
**Pre-Launch (4-6 weeks before):**
- Teaser campaign strategy
- Email list building
- Influencer/partner outreach
- PR strategy

**Launch Week:**
- Day-by-day activity plan
- Content release schedule
- Paid advertising strategy
- Social media blitz plan

**Post-Launch (4 weeks after):**
- Performance tracking metrics
- Retargeting strategy
- Customer feedback collection
- Iteration plan

Include KPIs for each phase, budget allocation percentages, and a RACI matrix for team responsibilities.`,
    tags: ["product launch", "GTM", "marketing plan", "strategy"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "mkt-006",
    profession: "marketing-manager",
    category: "Content Creation",
    title: "Landing Page Copy — High Converting",
    promptText: `Write high-converting landing page copy for [PRODUCT/SERVICE].

Target audience: [DESCRIPTION]
Primary CTA: [e.g., Start Free Trial, Book a Demo, Buy Now]
Key pain point: [WHAT PROBLEM DOES IT SOLVE]

Structure:
1. **Hero Section** — Headline (max 10 words), subheadline (max 25 words), CTA button text
2. **Problem Section** — Agitate the pain point (3 bullet points)
3. **Solution Section** — How your product solves it
4. **Features/Benefits** — 4-6 features with benefit-driven descriptions
5. **Social Proof** — 3 testimonial templates + trust badges
6. **How It Works** — 3-step process
7. **Pricing** — Pricing section copy (if applicable)
8. **FAQ** — 5 common objections answered
9. **Final CTA** — Urgency-driven closing section

Use the PAS (Problem-Agitate-Solution) framework throughout. Include power words for conversion.`,
    tags: ["landing page", "conversion", "copywriting", "sales page"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "mkt-007",
    profession: "marketing-manager",
    category: "Analysis & Research",
    title: "SEO Content Brief Generator",
    promptText: `Create a detailed SEO content brief for the target keyword: "[TARGET KEYWORD]"

Include:
1. **Primary keyword** and search intent (informational/commercial/transactional)
2. **Secondary keywords** — 10-15 related terms to include naturally
3. **Recommended title** — H1 tag (include keyword, under 60 characters)
4. **Meta description** — 155 characters, compelling with keyword
5. **Content structure** — H2/H3 outline with recommended topics per section
6. **Word count target** — Based on competing content analysis
7. **Internal linking** — Suggest 3-5 pages to link to/from
8. **External references** — Types of sources to cite
9. **Content angle** — How to differentiate from existing top results
10. **Featured snippet opportunity** — Format recommendation for position zero

Target audience: [DESCRIPTION]
Website: [YOUR SITE]
Content type: [Blog/Guide/Comparison/How-to]`,
    tags: ["SEO", "content brief", "keyword strategy", "content planning"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "mkt-008",
    profession: "marketing-manager",
    category: "Social Media",
    title: "LinkedIn Thought Leadership Posts",
    promptText: `Write 5 LinkedIn thought leadership posts for a [TITLE - e.g., VP of Marketing, CMO] at a [INDUSTRY] company.

Each post should:
- Open with a bold statement or counterintuitive insight (hook)
- Be 150-200 words (optimal LinkedIn length)
- Use short paragraphs (1-2 sentences each)
- Include a personal story or specific example
- End with a question to drive engagement
- Have relevant emojis (sparingly)

Post themes:
1. A lesson learned from a marketing failure
2. An unpopular opinion about [INDUSTRY TREND]
3. A behind-the-scenes look at a campaign
4. Career advice for junior marketers
5. A prediction about the future of marketing

Also include 3-5 relevant hashtags per post. Avoid corporate jargon — write conversationally.`,
    tags: ["LinkedIn", "thought leadership", "personal brand", "social media"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },

  // ============================================================
  // TEACHER & EDUCATOR (25 prompts)
  // ============================================================
  {
    id: "edu-001",
    profession: "teacher",
    category: "Strategy & Planning",
    title: "Detailed Lesson Plan Generator",
    promptText: `Create a detailed lesson plan for a [GRADE LEVEL] [SUBJECT] class.

Topic: [SPECIFIC TOPIC]
Duration: [e.g., 45 minutes, 90 minutes]
Learning objectives: [LIST 2-3 OBJECTIVES]
Standards alignment: [e.g., Common Core, NGSS, state standards]

Include:
1. **Warm-Up Activity** (5-10 min) — Engaging opener that activates prior knowledge
2. **Direct Instruction** (10-15 min) — Key concepts with explanations
3. **Guided Practice** (10-15 min) — Teacher-led activity with student participation
4. **Independent Practice** (10-15 min) — Student-driven activity
5. **Assessment** — Formative assessment to check understanding
6. **Closure** (5 min) — Summary and preview of next lesson
7. **Differentiation** — Modifications for advanced, on-level, and struggling students
8. **Materials Needed** — Complete list
9. **Extension Activities** — For early finishers

Format with clear timing for each section.`,
    tags: ["lesson plan", "curriculum", "instruction", "classroom"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "edu-002",
    profession: "teacher",
    category: "Content Creation",
    title: "Multiple Choice Quiz Generator",
    promptText: `Create a [NUMBER]-question multiple choice quiz for [GRADE LEVEL] students on [TOPIC].

Requirements:
- Each question should have 4 answer options (A, B, C, D)
- Include a mix of difficulty levels: 40% recall, 40% application, 20% analysis (Bloom's Taxonomy)
- Avoid trick questions or double negatives
- All distractors should be plausible but clearly wrong
- Questions should progress from easier to harder

Please provide:
1. The quiz (formatted for printing)
2. Answer key with explanations for each correct answer
3. A rubric for grading
4. Suggested time allotment

Also flag any questions that test higher-order thinking skills.`,
    tags: ["quiz", "assessment", "multiple choice", "testing"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "edu-003",
    profession: "teacher",
    category: "Content Creation",
    title: "Rubric Creator",
    promptText: `Create a detailed grading rubric for a [ASSIGNMENT TYPE - e.g., research paper, presentation, science project] in [SUBJECT] for [GRADE LEVEL] students.

Assignment description: [BRIEF DESCRIPTION]
Total points: [POINTS]

Rubric requirements:
1. **4 performance levels** — Exceeds Expectations, Meets Expectations, Approaching, Below Expectations
2. **5-6 criteria categories** — e.g., Content, Organization, Creativity, Mechanics, Presentation
3. **Descriptive indicators** — Specific, observable behaviors for each cell
4. **Point distribution** — Clear point values per category

Format as a table that can be printed and attached to the assignment. Include:
- Student-friendly language
- Space for teacher comments per category
- Total score calculation guide`,
    tags: ["rubric", "grading", "assessment", "evaluation"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "edu-004",
    profession: "teacher",
    category: "Email & Communication",
    title: "Parent Communication Templates",
    promptText: `Write 5 parent communication email templates for common school situations:

1. **Positive Progress Report** — Sharing good news about student achievement
2. **Behavior Concern** — Addressing a behavioral issue diplomatically
3. **Missing Assignments** — Notifying parents about incomplete work
4. **Conference Invitation** — Inviting parents to a parent-teacher conference
5. **Field Trip Permission** — Permission slip cover letter with details

For each email:
- Subject line
- Greeting (with personalization tokens)
- Body (clear, concise, empathetic)
- Suggested next steps or action items
- Professional closing

Tone: Warm, professional, partnership-focused. Avoid educational jargon. Each email should be under 150 words. Grade level: [GRADE LEVEL].`,
    tags: ["parent communication", "email", "family engagement", "school"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "edu-005",
    profession: "teacher",
    category: "Strategy & Planning",
    title: "Differentiated Instruction Plan",
    promptText: `Create a differentiated instruction plan for teaching [TOPIC] to a diverse [GRADE LEVEL] classroom.

Student profiles:
- Advanced learners: [NUMBER] students
- On-grade-level: [NUMBER] students
- Below grade level / struggling: [NUMBER] students  
- English Language Learners: [NUMBER] students
- Students with IEP accommodations: [NUMBER] students

Provide:
1. **Core Lesson** — Base instruction for all students
2. **Tiered Activities** — 3 versions (basic, proficient, advanced) of the practice activity
3. **Flexible Grouping** — Suggestions for group formation
4. **Choice Board** — 9-square choice board with activity options
5. **Scaffolding Strategies** — For struggling students (graphic organizers, word banks, etc.)
6. **Extension Challenges** — For advanced students
7. **ELL Supports** — Visual aids, simplified instructions, peer support
8. **Assessment Modifications** — How to fairly assess all levels`,
    tags: ["differentiation", "inclusion", "diverse learners", "equity"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "edu-006",
    profession: "teacher",
    category: "Content Creation",
    title: "Discussion Questions — Bloom's Taxonomy",
    promptText: `Generate 18 discussion questions about [TOPIC/TEXT/CONCEPT] for [GRADE LEVEL] students, organized by Bloom's Taxonomy levels:

**Remembering (3 questions)** — Recall facts and basic concepts
**Understanding (3 questions)** — Explain ideas or concepts
**Applying (3 questions)** — Use information in new situations
**Analyzing (3 questions)** — Draw connections and compare
**Evaluating (3 questions)** — Justify a stance or decision
**Creating (3 questions)** — Produce new or original work

For each question:
- Mark the Bloom's level
- Provide a brief "look for" guide (what a strong answer includes)
- Suggest a follow-up question to deepen discussion

Also include 3 Socratic seminar questions that combine multiple Bloom's levels.`,
    tags: ["discussion", "Blooms taxonomy", "critical thinking", "Socratic"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "edu-007",
    profession: "teacher",
    category: "Client Management",
    title: "IEP Goal Writer",
    promptText: `Write 5 measurable IEP (Individualized Education Program) goals for a [GRADE LEVEL] student with [DISABILITY/AREA OF NEED - e.g., specific learning disability in reading, ADHD, autism spectrum].

Current performance levels:
- Academic: [DESCRIBE CURRENT LEVEL]
- Behavioral/Social: [DESCRIBE]
- Communication: [DESCRIBE]

Each goal should:
1. Be **SMART** — Specific, Measurable, Achievable, Relevant, Time-bound
2. Include a **baseline** — "Currently, the student can..."
3. Include a **target** — "By [DATE], the student will..."
4. Include **measurement criteria** — How progress will be measured
5. Include **3 short-term objectives/benchmarks** that build toward the goal

Cover these areas: [e.g., reading fluency, math computation, written expression, behavior, social skills]

Format to comply with IDEA requirements.`,
    tags: ["IEP", "special education", "goals", "IDEA compliance"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // LAWYER & LEGAL (20 prompts)
  // ============================================================
  {
    id: "law-001",
    profession: "lawyer",
    category: "Documentation",
    title: "Contract Clause Drafter",
    promptText: `Draft the following contract clause for a [CONTRACT TYPE - e.g., SaaS Agreement, Employment Contract, NDA]:

Clause type: [e.g., Limitation of Liability, Indemnification, Non-Compete, Force Majeure]
Jurisdiction: [STATE/COUNTRY]
Parties: [PARTY A] and [PARTY B]
Specific requirements: [ANY SPECIAL TERMS]

Please provide:
1. **The clause** — Written in formal legal language
2. **Plain English explanation** — What this clause means in simple terms
3. **Key considerations** — What each party should pay attention to
4. **Alternative versions** — A more favorable version for Party A and Party B
5. **Common negotiation points** — What's typically negotiated in this clause
6. **Related clauses** — Other clauses that should accompany this one

Note: This is for drafting purposes only. All clauses should be reviewed by a licensed attorney before use.`,
    tags: ["contract", "clause", "drafting", "legal writing"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "law-002",
    profession: "lawyer",
    category: "Analysis & Research",
    title: "Case Brief Generator",
    promptText: `Create a case brief for the following legal case:

Case name: [CASE NAME]
Citation: [CITATION]
Court: [COURT]
Year: [YEAR]

Brief format:
1. **Case Title & Citation**
2. **Facts** — Key facts of the case (who, what, when, where)
3. **Procedural History** — How the case reached this court
4. **Issue(s)** — The legal question(s) the court addressed
5. **Rule** — The legal rule or standard applied
6. **Holding** — The court's decision
7. **Reasoning** — The court's rationale for its decision
8. **Concurrence/Dissent** — Key points from any concurring or dissenting opinions
9. **Significance** — Why this case matters, its precedential value
10. **Application** — How this case applies to [YOUR SITUATION/TOPIC]

Keep the brief to 1-2 pages. Use precise legal terminology.`,
    tags: ["case brief", "legal research", "case analysis", "precedent"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "law-003",
    profession: "lawyer",
    category: "Email & Communication",
    title: "Client Update Letter",
    promptText: `Write a professional client update letter for a [CASE TYPE - e.g., personal injury, business litigation, family law] case.

Client name: [NAME]
Case status: [CURRENT STATUS]
Recent developments: [WHAT HAPPENED]
Next steps: [UPCOMING ACTIONS]
Timeline: [EXPECTED TIMELINE]

The letter should:
1. Provide a clear, jargon-free summary of where the case stands
2. Explain recent developments and their significance
3. Outline next steps with expected timelines
4. Address any action items required from the client
5. Reassure the client while maintaining realistic expectations
6. Include a professional closing with contact information

Tone: Professional, empathetic, transparent. Length: 300-400 words.`,
    tags: ["client communication", "case update", "letter", "client management"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "law-004",
    profession: "lawyer",
    category: "Documentation",
    title: "Legal Memorandum Template",
    promptText: `Write a legal memorandum analyzing the following issue:

Issue: [LEGAL QUESTION]
Jurisdiction: [STATE/FEDERAL]
Relevant facts: [KEY FACTS]
Client position: [WHAT OUTCOME CLIENT WANTS]

Memorandum format:
1. **Heading** — To, From, Date, Re
2. **Question Presented** — The specific legal question
3. **Brief Answer** — Concise conclusion (2-3 sentences)
4. **Statement of Facts** — Relevant facts in narrative form
5. **Discussion** — Legal analysis applying law to facts
   - Start with the applicable rule
   - Apply the rule to the facts
   - Address counterarguments
   - Use IRAC (Issue, Rule, Application, Conclusion) for each sub-issue
6. **Conclusion** — Recommendation with level of confidence

Use objective, analytical tone. This is an internal memo, not advocacy.`,
    tags: ["legal memo", "analysis", "IRAC", "legal writing"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "law-005",
    profession: "lawyer",
    category: "Strategy & Planning",
    title: "Deposition Preparation Outline",
    promptText: `Create a deposition preparation outline for deposing [WITNESS TYPE - e.g., opposing party, expert witness, corporate representative] in a [CASE TYPE] case.

Case summary: [BRIEF CASE DESCRIPTION]
Key issues: [MAIN ISSUES IN DISPUTE]
Known facts about witness: [WHAT YOU KNOW]

Include:
1. **Deposition objectives** — What you want to establish
2. **Topic outline** — Major subject areas to cover
3. **Question sequences** — For each topic area:
   - Foundation/background questions
   - Substantive questions (open-ended → narrow)
   - Impeachment questions (if applicable)
   - Document-related questions
4. **Exhibits list** — Documents to use during deposition
5. **Objection traps** — Questions designed to test witness credibility
6. **Red flags** — Warning signs to watch for in answers
7. **Do's and Don'ts** — Reminders for deposition conduct

Order questions strategically — don't reveal your theory too early.`,
    tags: ["deposition", "litigation", "trial prep", "witness examination"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // DOCTOR & HEALTHCARE (20 prompts)
  // ============================================================
  {
    id: "doc-001",
    profession: "doctor",
    category: "Content Creation",
    title: "Patient Education Handout",
    promptText: `Create a patient education handout about [CONDITION/PROCEDURE - e.g., Type 2 Diabetes Management, Post-Surgery Recovery, Managing Hypertension].

Reading level: [e.g., 6th grade, general adult]
Language: English

Include:
1. **What is [Condition]?** — Simple, clear explanation
2. **Common Symptoms** — Bullet point list
3. **Treatment Options** — Overview of treatments
4. **Lifestyle Modifications** — Diet, exercise, habits
5. **Medications** — Common medications and what they do (general info only)
6. **When to Seek Immediate Care** — Red flag symptoms
7. **Daily Management Tips** — Practical, actionable advice
8. **Frequently Asked Questions** — 5 common patient questions
9. **Resources** — Where to find more information

Use plain language (no medical jargon without explanation). Include visual-friendly formatting. Add a disclaimer: "This information is for educational purposes only. Consult your healthcare provider for medical advice."`,
    tags: ["patient education", "health literacy", "handout", "patient communication"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "doc-002",
    profession: "doctor",
    category: "Documentation",
    title: "Clinical Note Template (SOAP Format)",
    promptText: `Create a clinical note template in SOAP format for a [VISIT TYPE - e.g., initial consultation, follow-up, annual physical] for a patient presenting with [CHIEF COMPLAINT].

SOAP Note sections:
1. **Subjective** — Template fields for:
   - Chief complaint
   - History of present illness (HPI) using OLDCARTS
   - Review of systems (ROS)
   - Past medical/surgical/family/social history
   - Current medications and allergies

2. **Objective** — Template for:
   - Vital signs
   - Physical exam findings by system
   - Lab/imaging results

3. **Assessment** — Template for:
   - Diagnosis/differential diagnoses
   - Clinical reasoning

4. **Plan** — Template for:
   - Treatment plan
   - Medications prescribed
   - Labs/imaging ordered
   - Referrals
   - Patient education provided
   - Follow-up plan

Format as a fillable template that can be customized per visit.`,
    tags: ["SOAP note", "clinical documentation", "EHR", "charting"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "doc-003",
    profession: "doctor",
    category: "Email & Communication",
    title: "Empathetic Bad News Communication Script",
    promptText: `Create a communication script for delivering difficult medical news to a patient and their family.

Situation: [e.g., cancer diagnosis, chronic condition, unfavorable test results]
Patient context: [AGE, GENERAL BACKGROUND]

Use the SPIKES protocol:
1. **Setting** — How to prepare the environment
2. **Perception** — Questions to assess what the patient already knows
3. **Invitation** — How to ask permission to share information
4. **Knowledge** — How to deliver the information clearly and compassionately
5. **Emotions** — How to respond to patient's emotional reaction
6. **Strategy & Summary** — How to discuss next steps and provide hope

Include:
- Specific phrases to use and avoid
- Pausing techniques
- How to handle different emotional responses (anger, denial, tears, silence)
- Follow-up communication plan
- Resource referrals (support groups, counseling)

Tone: Compassionate, honest, supportive.`,
    tags: ["communication", "bad news", "empathy", "SPIKES", "patient care"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // FINANCIAL ADVISOR (20 prompts)
  // ============================================================
  {
    id: "fin-001",
    profession: "financial-advisor",
    category: "Client Management",
    title: "Client Financial Review Meeting Agenda",
    promptText: `Create a comprehensive annual financial review meeting agenda for a client.

Client profile:
- Age: [AGE]
- Family status: [e.g., married with 2 children]
- Risk tolerance: [Conservative/Moderate/Aggressive]
- Portfolio size: [RANGE]
- Goals: [e.g., retirement in 15 years, college funding, estate planning]

Meeting agenda:
1. **Welcome & Relationship Check-in** (5 min) — Personal updates
2. **Year in Review** (10 min) — Market recap, portfolio performance vs benchmarks
3. **Goal Progress** (10 min) — Review each goal, on-track vs off-track
4. **Portfolio Review** (15 min) — Asset allocation, rebalancing needs, tax-loss harvesting
5. **Life Changes** (10 min) — Any changes affecting the plan
6. **Tax Planning** (10 min) — Year-end tax strategies, Roth conversions, etc.
7. **Insurance Review** (5 min) — Coverage adequacy
8. **Estate Planning** (5 min) — Beneficiary updates, documents review
9. **Action Items** (5 min) — Clear next steps with deadlines
10. **Q&A** (5 min)

Include pre-meeting checklist for advisor and materials to prepare.`,
    tags: ["client meeting", "financial review", "portfolio", "planning"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "fin-002",
    profession: "financial-advisor",
    category: "Content Creation",
    title: "Market Commentary Newsletter",
    promptText: `Write a monthly market commentary newsletter for my financial advisory clients.

Month/Year: [MONTH YEAR]
Key market events: [LIST RECENT EVENTS]
Target audience: Individual investors (not institutional)

Sections:
1. **Market Summary** — Major index performance, key economic indicators
2. **What Happened** — 3-4 significant market events explained simply
3. **What It Means for You** — Practical implications for personal portfolios
4. **Sector Spotlight** — One sector analysis with outlook
5. **Planning Tip of the Month** — One actionable financial planning tip
6. **Looking Ahead** — Key dates and events to watch next month
7. **FAQ** — Address one common client question

Tone: Informative, reassuring, not alarmist. Avoid specific investment recommendations. Include appropriate disclaimers. Total: 500-600 words.`,
    tags: ["newsletter", "market commentary", "client communication", "investing"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "fin-003",
    profession: "financial-advisor",
    category: "Sales & Outreach",
    title: "Prospect Discovery Meeting Script",
    promptText: `Create a discovery meeting script for an initial meeting with a prospective financial advisory client.

My practice focus: [e.g., retirement planning, wealth management, young professionals]
Typical client: [DESCRIPTION]

Script sections:
1. **Opening & Rapport** (5 min) — Build trust, set agenda
2. **Discovery Questions** (20 min):
   - Current financial situation (income, assets, liabilities)
   - Financial goals (short-term, long-term)
   - Risk tolerance and investment experience
   - Current advisors or DIY approach
   - Pain points and frustrations
   - Decision-making process
3. **Value Presentation** (10 min) — Your services and approach
4. **Fee Discussion** (5 min) — Transparent fee explanation
5. **Next Steps** (5 min) — Onboarding process

Include transition phrases, open-ended questions, and how to handle common objections like "I need to think about it" and "What are your fees?"`,
    tags: ["discovery meeting", "prospecting", "client acquisition", "sales"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // CONTENT WRITER (25 prompts)
  // ============================================================
  {
    id: "cw-001",
    profession: "content-writer",
    category: "Content Creation",
    title: "SEO Blog Post Writer",
    promptText: `Write a comprehensive, SEO-optimized blog post on the topic: "[TOPIC]"

Target keyword: [PRIMARY KEYWORD]
Secondary keywords: [LIST 5-8 SECONDARY KEYWORDS]
Word count: [e.g., 1500-2000 words]
Target audience: [DESCRIPTION]
Search intent: [Informational/Commercial/Transactional]

Requirements:
1. **Title** — Include primary keyword, under 60 characters, compelling
2. **Meta description** — 150-155 characters with keyword and CTA
3. **Introduction** — Hook reader in first 2 sentences, include keyword in first 100 words
4. **Body** — Use H2 and H3 subheadings with keywords naturally incorporated
5. **Formatting** — Short paragraphs (2-3 sentences), bullet points, numbered lists
6. **Internal linking** — Suggest 3-5 places to add internal links
7. **Conclusion** — Summary with clear CTA
8. **Schema suggestion** — Recommended structured data type

Write in a [TONE] tone. Use active voice. Include data points and examples.`,
    tags: ["SEO", "blog post", "content marketing", "organic traffic"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "cw-002",
    profession: "content-writer",
    category: "Content Creation",
    title: "Product Description Writer",
    promptText: `Write compelling product descriptions for an e-commerce website.

Product: [PRODUCT NAME]
Category: [CATEGORY]
Key features: [LIST FEATURES]
Target customer: [DESCRIPTION]
Price point: [PRICE RANGE]
Brand voice: [e.g., playful, luxurious, technical, minimalist]

Provide:
1. **Short description** (50-75 words) — For product listing/category pages
2. **Long description** (150-250 words) — For the product detail page
3. **Bullet point features** — 5-7 benefit-driven feature bullets
4. **SEO meta title** — Under 60 characters
5. **SEO meta description** — Under 155 characters

Use sensory language. Focus on benefits, not just features. Include power words that drive conversions. Avoid clichés like "high-quality" and "best-in-class" — be specific instead.`,
    tags: ["product description", "e-commerce", "copywriting", "conversion"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "cw-003",
    profession: "content-writer",
    category: "Strategy & Planning",
    title: "Content Pillar Strategy Builder",
    promptText: `Create a content pillar strategy for a [INDUSTRY/NICHE] website.

Website: [DESCRIPTION]
Target audience: [DESCRIPTION]
Business goals: [e.g., lead generation, brand awareness, sales]

Deliverables:
1. **3-5 Content Pillars** — Broad topic categories that define your expertise
2. **For each pillar:**
   - Pillar page topic and outline (comprehensive, 3000+ word guide)
   - 10 cluster content ideas (blog posts that link to the pillar)
   - Target keywords for each piece
   - Content type recommendations (how-to, listicle, comparison, etc.)
   - Internal linking structure (hub-and-spoke model)
3. **Content gap analysis** — Topics competitors cover that you don't
4. **Editorial calendar** — Suggested publishing order to build topical authority
5. **KPIs** — How to measure success of each pillar

This strategy should build topical authority over 6-12 months.`,
    tags: ["content strategy", "pillar pages", "topical authority", "SEO strategy"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "cw-004",
    profession: "content-writer",
    category: "Content Creation",
    title: "Email Newsletter Writer",
    promptText: `Write an engaging email newsletter for [BRAND/COMPANY] in the [INDUSTRY] space.

Newsletter type: [e.g., weekly digest, monthly update, product announcement]
Audience: [DESCRIPTION]
Key content to include: [LIST TOPICS/NEWS]

Provide:
1. **Subject lines** — 5 options (mix of curiosity, benefit, urgency)
2. **Preview text** — 90 characters
3. **Header/Hero** — Opening hook (2-3 sentences)
4. **Main content** — 3-4 sections with subheadings
5. **CTA** — Primary call-to-action
6. **Quick links/Resources** — 3-4 curated links
7. **Personal sign-off** — Warm, branded closing

Keep total word count under 500. Use short sentences and paragraphs. Include emoji sparingly for visual interest. Tone: [TONE].`,
    tags: ["newsletter", "email", "content marketing", "engagement"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },

  // ============================================================
  // GRAPHIC DESIGNER (20 prompts)
  // ============================================================
  {
    id: "gd-001",
    profession: "graphic-designer",
    category: "Creative & Design",
    title: "Midjourney Logo Concept Generator",
    promptText: `Generate 5 Midjourney prompts for creating logo concepts for:

Brand name: [BRAND NAME]
Industry: [INDUSTRY]
Brand personality: [e.g., modern, playful, luxurious, minimal, bold]
Color preferences: [COLORS OR "open to suggestions"]
Style preferences: [e.g., wordmark, icon, combination, emblem]

For each prompt include:
1. **The Midjourney prompt** — Complete with style modifiers, aspect ratio, and version
2. **Concept description** — What the logo represents
3. **Style tags** — Midjourney-specific quality tags (--stylize, --chaos, etc.)
4. **Variations** — 2 prompt variations for different interpretations

Best practices to include in prompts:
- "vector logo design"
- "simple, scalable"
- "white background"
- Appropriate aspect ratio (--ar 1:1 for icon, --ar 3:1 for wordmark)
- "--v 6" or latest version
- "--stylize" value recommendation`,
    tags: ["midjourney", "logo design", "ai art", "branding"],
    difficulty: "intermediate",
    aiTool: ["Midjourney"],
  },
  {
    id: "gd-002",
    profession: "graphic-designer",
    category: "Creative & Design",
    title: "Brand Color Palette Generator",
    promptText: `Create a comprehensive brand color palette for [BRAND NAME] in the [INDUSTRY].

Brand personality: [e.g., trustworthy, innovative, warm, energetic]
Target audience: [DESCRIPTION]
Existing brand elements: [ANY EXISTING COLORS/ASSETS]
Competitors' colors to differentiate from: [COMPETITOR COLORS]

Provide:
1. **Primary Color** — Hex code, RGB, HSL + psychology/reasoning
2. **Secondary Color** — Complementary color with reasoning
3. **Accent Color** — For CTAs and highlights
4. **Neutral Palette** — 5 neutrals (dark to light) for text and backgrounds
5. **Semantic Colors** — Success (green), Warning (yellow), Error (red), Info (blue)
6. **Color Combinations** — 5 recommended pairings with accessibility contrast ratios
7. **Usage Guidelines** — Percentage split (60-30-10 rule)
8. **Dark Mode Variants** — Adjusted palette for dark theme
9. **Gradient Suggestions** — 3 gradient combinations

Include WCAG 2.1 AA contrast ratio compliance notes.`,
    tags: ["color palette", "branding", "design system", "accessibility"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "gd-003",
    profession: "graphic-designer",
    category: "Creative & Design",
    title: "Social Media Template Suite Prompts",
    promptText: `Generate AI image prompts for creating a social media template suite for [BRAND].

Brand style: [DESCRIBE AESTHETIC]
Colors: [BRAND COLORS]
Platforms needed: Instagram (post, story, reel cover), LinkedIn, Twitter/X, Facebook

For each template type, provide:
1. **Instagram Post (1080x1080):**
   - Quote/text post template prompt
   - Product showcase template prompt
   - Testimonial template prompt

2. **Instagram Story (1080x1920):**
   - Announcement template prompt
   - Poll/Question template prompt
   - Behind-the-scenes template prompt

3. **LinkedIn Post (1200x627):**
   - Article share template prompt
   - Data/stat visualization template prompt

4. **Twitter/X (1600x900):**
   - Blog header template prompt
   - Thread header template prompt

Each prompt should specify exact dimensions, style consistency, text placement areas, and brand element integration.`,
    tags: ["social media", "templates", "midjourney", "brand assets"],
    difficulty: "intermediate",
    aiTool: ["Midjourney", "DALL-E"],
  },

  // ============================================================
  // HR MANAGER (20 prompts)
  // ============================================================
  {
    id: "hr-001",
    profession: "hr-manager",
    category: "Content Creation",
    title: "Inclusive Job Description Writer",
    promptText: `Write an inclusive, compelling job description for a [JOB TITLE] position.

Department: [DEPARTMENT]
Reports to: [TITLE]
Location: [LOCATION/REMOTE/HYBRID]
Salary range: [RANGE]
Company: [BRIEF COMPANY DESCRIPTION]

Include:
1. **Job Title** — Clear, standard title (avoid internal jargon)
2. **About Us** (3-4 sentences) — Company culture and mission
3. **The Role** (3-4 sentences) — Impact and purpose of this position
4. **Key Responsibilities** — 6-8 bullet points using action verbs
5. **Required Qualifications** — Must-haves only (keep minimal)
6. **Preferred Qualifications** — Nice-to-haves
7. **What We Offer** — Benefits, perks, growth opportunities
8. **How to Apply** — Clear next steps

Inclusive language guidelines:
- Use "you" instead of "the ideal candidate"
- Replace gendered language with neutral alternatives
- Use growth mindset language ("develop" vs. "expert in")
- Avoid unnecessary requirements (exact years of experience)
- Include EEO statement`,
    tags: ["job description", "recruitment", "inclusive hiring", "DEI"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "hr-002",
    profession: "hr-manager",
    category: "Content Creation",
    title: "Behavioral Interview Questions Bank",
    promptText: `Create a comprehensive behavioral interview question bank for hiring a [JOB TITLE].

Key competencies to assess:
1. [COMPETENCY 1 - e.g., Leadership]
2. [COMPETENCY 2 - e.g., Problem Solving]  
3. [COMPETENCY 3 - e.g., Communication]
4. [COMPETENCY 4 - e.g., Teamwork]
5. [COMPETENCY 5 - e.g., Adaptability]

For each competency, provide:
- 3 behavioral questions (STAR format prompts)
- What to listen for in answers (green flags)
- Red flags to watch for
- Follow-up probing questions
- Scoring rubric (1-5 scale with descriptors)

Also include:
- 3 situational/hypothetical questions
- 2 culture-fit questions
- 1 creative/unconventional question
- Illegal questions to avoid (for reference)

Format as a printable interview scorecard.`,
    tags: ["interview", "behavioral questions", "hiring", "assessment"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "hr-003",
    profession: "hr-manager",
    category: "Documentation",
    title: "Employee Performance Review Template",
    promptText: `Create a comprehensive performance review template for [REVIEW TYPE - e.g., annual, mid-year, probation end].

Employee level: [e.g., individual contributor, manager, senior leader]
Industry: [INDUSTRY]

Template sections:
1. **Employee Information** — Name, title, department, review period, manager
2. **Goal Achievement** — Table for each goal (goal, target, actual, rating)
3. **Core Competencies Assessment** — Rate each on 1-5 scale:
   - Job knowledge & technical skills
   - Communication
   - Teamwork & collaboration
   - Initiative & problem-solving
   - Time management & reliability
   - [Add role-specific competencies]
4. **Achievements & Highlights** — Space for top accomplishments
5. **Areas for Development** — Growth opportunities (constructive)
6. **Manager Narrative** — Overall assessment paragraph
7. **Goals for Next Period** — 3-5 SMART goals
8. **Professional Development Plan** — Training, mentoring, stretch assignments
9. **Employee Self-Assessment** — Space for employee input
10. **Signatures** — Employee, manager, HR

Include example phrases for each rating level (1-5).`,
    tags: ["performance review", "evaluation", "feedback", "talent management"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // SALES REPRESENTATIVE (20 prompts)
  // ============================================================
  {
    id: "sales-001",
    profession: "sales-representative",
    category: "Sales & Outreach",
    title: "Cold Email Sequence (B2B)",
    promptText: `Write a 4-email cold outreach sequence for selling [PRODUCT/SERVICE] to [TARGET BUYER PERSONA] at [TARGET COMPANY TYPE].

Unique value proposition: [YOUR UVP]
Common pain points: [LIST 3 PAIN POINTS]
Social proof: [e.g., "Used by 500+ companies" or specific case study]

Email sequence:
**Email 1 — The Hook (Day 1)**
- Personalized opening referencing their company/role
- One pain point identified
- Brief value proposition (1 sentence)
- Soft CTA (reply or quick question)

**Email 2 — The Value Add (Day 3)**
- Share a relevant insight, stat, or resource
- Connect it to their likely situation
- Mention the solution briefly
- CTA: Share a case study or book a call

**Email 3 — Social Proof (Day 7)**
- Lead with a customer success story
- Specific metrics/results achieved
- "Is this relevant to you?" CTA

**Email 4 — The Breakup (Day 14)**
- Acknowledge their busy schedule
- Restate value in one line
- Final CTA or offer to reconnect later

Each email: Under 100 words. No attachments. Mobile-friendly formatting.`,
    tags: ["cold email", "B2B", "outreach", "prospecting"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "sales-002",
    profession: "sales-representative",
    category: "Sales & Outreach",
    title: "Objection Handling Playbook",
    promptText: `Create a comprehensive objection handling playbook for selling [PRODUCT/SERVICE].

For each of the following common objections, provide:
1. **The Objection** — Exact words the prospect says
2. **What They Really Mean** — The underlying concern
3. **Acknowledge** — Show empathy (1 sentence)
4. **Reframe** — Shift the perspective
5. **Respond** — 2-3 response options
6. **Proof Point** — Supporting evidence or story
7. **Bridge Question** — Question to move the conversation forward

Objections to address:
1. "It's too expensive" / "We don't have the budget"
2. "We're already using [COMPETITOR]"
3. "I need to talk to my team/boss"
4. "Can you send me more information?"
5. "We're not interested right now"
6. "It seems too complicated"
7. "I've had bad experiences with similar products"
8. "We're too busy to implement something new"

Also include a framework for handling objections I haven't listed.`,
    tags: ["objection handling", "sales skills", "negotiation", "closing"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "sales-003",
    profession: "sales-representative",
    category: "Documentation",
    title: "Sales Proposal Template",
    promptText: `Create a professional sales proposal template for [PRODUCT/SERVICE] for a prospect in the [INDUSTRY] industry.

Prospect company: [COMPANY NAME]
Decision maker: [NAME & TITLE]
Key challenges discussed: [LIST CHALLENGES]
Proposed solution: [WHAT YOU'RE PROPOSING]
Investment: [PRICING]

Proposal structure:
1. **Cover Page** — Professional layout description
2. **Executive Summary** (1 page) — Problem, solution, expected ROI
3. **Understanding Your Challenges** — Mirror their pain points back
4. **Proposed Solution** — Detailed description of what you're offering
5. **Implementation Plan** — Timeline with milestones
6. **Investment & ROI** — Pricing with ROI justification
7. **Why Us** — Differentiators and social proof
8. **Case Studies** — 2 relevant customer success stories
9. **Team** — Key people they'll work with
10. **Next Steps** — Clear path to getting started
11. **Terms & Conditions** — Key terms

Tone: Professional, confident, consultative. Total: 8-12 pages.`,
    tags: ["proposal", "B2B sales", "deal closing", "business development"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // ACCOUNTANT & CPA (15 prompts)
  // ============================================================
  {
    id: "acc-001",
    profession: "accountant",
    category: "Client Management",
    title: "Year-End Tax Planning Checklist",
    promptText: `Create a comprehensive year-end tax planning checklist for [CLIENT TYPE - e.g., small business owner, high-income individual, freelancer] for the [TAX YEAR] tax year.

Client profile:
- Filing status: [e.g., Single, Married Filing Jointly, S-Corp owner]
- Estimated income: [RANGE]
- Key deductions: [LIST KNOWN DEDUCTIONS]

Checklist categories:
1. **Income Timing** — Defer income or accelerate deductions
2. **Retirement Contributions** — 401(k), IRA, SEP-IRA maximization
3. **Deduction Optimization** — Bunching strategy, charitable giving, business expenses
4. **Investment Tax Strategies** — Tax-loss harvesting, capital gains management
5. **Business-Specific** — Equipment purchases (Section 179), QBI deduction review
6. **Estimated Tax Payments** — Q4 adjustment recommendations
7. **Document Collection** — List of documents to gather
8. **Deadline Calendar** — Key dates and deadlines

Format as a printable checklist with checkboxes. Include brief explanations for each item.`,
    tags: ["tax planning", "year-end", "checklist", "tax strategy"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "acc-002",
    profession: "accountant",
    category: "Email & Communication",
    title: "Client Advisory Letter — Tax Law Changes",
    promptText: `Write a client advisory letter explaining recent tax law changes and their impact.

Topic: [SPECIFIC TAX CHANGE - e.g., new standard deduction amounts, changes to business deductions, retirement contribution limits]
Effective date: [DATE]
Affected clients: [WHO IS IMPACTED]

Letter structure:
1. **Opening** — Brief, engaging introduction (why they should read this)
2. **What Changed** — Clear, jargon-free explanation of the change
3. **Who Is Affected** — Specific client types impacted
4. **Financial Impact** — Estimated impact with examples
5. **Action Steps** — What clients should do (numbered list)
6. **Planning Opportunities** — How to take advantage of the change
7. **Timeline** — Key dates and deadlines
8. **Contact CTA** — Encourage scheduling a planning session

Tone: Authoritative yet accessible. Avoid tax code references without explanation. Include a disclaimer. Length: 400-500 words.`,
    tags: ["advisory letter", "tax changes", "client communication", "tax law"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // SOCIAL MEDIA MANAGER (20 prompts)
  // ============================================================
  {
    id: "smm-001",
    profession: "social-media-manager",
    category: "Content Creation",
    title: "Instagram Reel Script Generator",
    promptText: `Write 5 Instagram Reel scripts for a [BRAND/BUSINESS] in the [INDUSTRY].

Content pillars: [LIST 3-4 THEMES]
Target audience: [DESCRIPTION]
Brand voice: [e.g., fun, educational, inspiring, sassy]

For each Reel, provide:
1. **Hook (first 1-3 seconds)** — Attention-grabbing opening line/visual
2. **Script** — Word-for-word narration or on-screen text (15-30 seconds)
3. **Visual directions** — What to show on screen
4. **Trending audio suggestion** — Type of audio that fits
5. **On-screen text overlay** — Key points to display
6. **CTA** — What viewers should do
7. **Caption** — Engaging caption (max 150 words)
8. **Hashtags** — 15-20 relevant hashtags

Reel types to include:
- Educational/tip format
- Behind-the-scenes
- Trending format adaptation
- Myth-busting
- Before/after transformation`,
    tags: ["instagram reels", "video content", "short form", "social media"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "smm-002",
    profession: "social-media-manager",
    category: "Strategy & Planning",
    title: "Social Media Audit Template",
    promptText: `Create a comprehensive social media audit template for evaluating [BRAND]'s presence across platforms.

Platforms to audit: [LIST PLATFORMS]
Time period: [e.g., Last 90 days, Last 6 months]

Audit sections:
1. **Profile Audit** (per platform):
   - Bio/about section effectiveness
   - Profile/cover image quality
   - Link in bio optimization
   - Username consistency
   - Verification status

2. **Content Audit:**
   - Top 5 performing posts (by engagement)
   - Bottom 5 performing posts
   - Content mix analysis (types, themes)
   - Posting frequency vs. optimal frequency
   - Visual consistency score

3. **Engagement Metrics:**
   - Follower growth rate
   - Average engagement rate
   - Response time to comments/DMs
   - Share of voice vs. competitors

4. **Audience Analysis:**
   - Demographics breakdown
   - Active times
   - Content preferences

5. **Competitor Benchmarking:**
   - Side-by-side metrics comparison
   - Content strategy differences
   - Engagement rate comparison

6. **Recommendations:**
   - Quick wins (implement this week)
   - Medium-term improvements (this quarter)
   - Strategic changes (this year)

Format as a fillable template with scoring rubrics.`,
    tags: ["social media audit", "analytics", "strategy", "benchmarking"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // PROJECT MANAGER (20 prompts)
  // ============================================================
  {
    id: "pm-001",
    profession: "project-manager",
    category: "Documentation",
    title: "Project Charter Generator",
    promptText: `Create a project charter for the following project:

Project name: [NAME]
Sponsor: [NAME & TITLE]
Project manager: [NAME]
Start date: [DATE]
Target completion: [DATE]
Budget: [AMOUNT]

Charter sections:
1. **Project Purpose** — Why this project exists (business justification)
2. **Objectives** — 3-5 SMART objectives
3. **Scope** — In-scope and explicitly out-of-scope items
4. **Key Deliverables** — Major outputs with acceptance criteria
5. **Milestones** — Critical dates and checkpoints
6. **Stakeholders** — Name, role, interest level, influence level
7. **Assumptions** — What we're assuming to be true
8. **Constraints** — Budget, time, resource, technical limitations
9. **Risks** — Top 5 risks with probability, impact, and mitigation
10. **Success Criteria** — How we'll measure project success
11. **Approval** — Signature section

Format as a formal project document suitable for executive review.`,
    tags: ["project charter", "initiation", "PMO", "documentation"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "pm-002",
    profession: "project-manager",
    category: "Email & Communication",
    title: "Weekly Status Report Template",
    promptText: `Write a weekly project status report for [PROJECT NAME].

Reporting period: [DATES]
Overall status: [Green/Yellow/Red]

Report structure:
1. **Executive Summary** (3-4 sentences) — Overall health, key accomplishments, concerns
2. **Status Dashboard:**
   | Category | Status | Trend |
   | Schedule | 🟢/🟡/🔴 | ↑/→/↓ |
   | Budget | 🟢/🟡/🔴 | ↑/→/↓ |
   | Scope | 🟢/🟡/🔴 | ↑/→/↓ |
   | Quality | 🟢/🟡/🔴 | ↑/→/↓ |

3. **Accomplishments This Week** — 3-5 bullet points
4. **Planned Next Week** — 3-5 bullet points
5. **Risks & Issues** — New or updated risks/issues with owners
6. **Decisions Needed** — Items requiring stakeholder input
7. **Blockers** — Anything preventing progress
8. **Metrics** — Key project metrics (% complete, burn rate, velocity)

Keep concise — executives should read this in under 2 minutes.`,
    tags: ["status report", "stakeholder communication", "PMO", "reporting"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },

  // ============================================================
  // PHOTOGRAPHER (15 prompts)
  // ============================================================
  {
    id: "photo-001",
    profession: "photographer",
    category: "Client Management",
    title: "Photography Client Proposal",
    promptText: `Write a professional photography service proposal for a [TYPE - e.g., wedding, corporate event, product, portrait] client.

Client: [NAME/COMPANY]
Event/project: [DESCRIPTION]
Date: [DATE]
Location: [LOCATION]

Proposal sections:
1. **Cover Letter** — Personal greeting, excitement about the project
2. **About Me** — Brief bio, style, experience (3-4 sentences)
3. **Understanding Your Vision** — Mirror their requirements back
4. **Package Options** — 3 tiers (Basic, Standard, Premium)
   - Hours of coverage
   - Number of edited images
   - Deliverables (digital, prints, album)
   - Turnaround time
5. **Pricing** — Clear pricing for each package
6. **What to Expect** — Timeline from booking to delivery
7. **Portfolio Samples** — Placeholder for relevant work examples
8. **Testimonials** — 2-3 client testimonials
9. **Terms** — Key booking terms (deposit, cancellation, usage rights)
10. **Next Steps** — How to book

Tone: Creative yet professional. Show personality.`,
    tags: ["proposal", "client management", "booking", "pricing"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // DATA ANALYST (15 prompts)
  // ============================================================
  {
    id: "da-001",
    profession: "data-analyst",
    category: "Analysis & Research",
    title: "SQL Query Builder for Business Questions",
    promptText: `Write SQL queries to answer the following business questions from our database.

Database: [DATABASE TYPE - e.g., PostgreSQL, MySQL, BigQuery]
Tables and schema:
[PASTE YOUR TABLE SCHEMAS OR DESCRIBE THEM]

Business questions:
1. [QUESTION 1 - e.g., "What are the top 10 customers by revenue in the last 90 days?"]
2. [QUESTION 2]
3. [QUESTION 3]

For each query, provide:
1. **The SQL query** — Optimized and formatted
2. **Explanation** — What each part of the query does (line-by-line)
3. **Expected output** — Description of result columns
4. **Performance notes** — Index recommendations, optimization tips
5. **Variations** — How to modify for different time ranges or filters

Use CTEs for readability. Include comments in the SQL. Follow best practices for the specific database engine.`,
    tags: ["SQL", "data analysis", "business intelligence", "queries"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "da-002",
    profession: "data-analyst",
    category: "Documentation",
    title: "Executive Dashboard Summary Writer",
    promptText: `Write an executive summary for a data dashboard/report.

Dashboard/report topic: [TOPIC]
Time period: [PERIOD]
Key metrics:
- [METRIC 1]: [VALUE] ([CHANGE vs previous period])
- [METRIC 2]: [VALUE] ([CHANGE])
- [METRIC 3]: [VALUE] ([CHANGE])
- [METRIC 4]: [VALUE] ([CHANGE])

Provide:
1. **Executive Summary** (3-4 sentences) — Overall performance snapshot
2. **Key Highlights** — 3-4 positive trends or achievements
3. **Areas of Concern** — 2-3 metrics trending negatively
4. **Root Cause Analysis** — Brief analysis of why key changes occurred
5. **Recommendations** — 3-5 data-driven action items, prioritized
6. **Forecast** — Expected trends for next period based on data
7. **Appendix Notes** — Methodology, data sources, caveats

Write for a non-technical executive audience. Use business language, not statistics jargon. Lead with insights, not data.`,
    tags: ["executive summary", "reporting", "dashboard", "data storytelling"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // UX DESIGNER (15 prompts)
  // ============================================================
  {
    id: "ux-001",
    profession: "ux-designer",
    category: "Analysis & Research",
    title: "User Persona Generator",
    promptText: `Create detailed user personas for a [PRODUCT/APPLICATION] targeting [TARGET MARKET].

Number of personas: [3-5]
Product description: [BRIEF DESCRIPTION]
Key user segments: [LIST SEGMENTS]

For each persona, include:
1. **Name & Photo description** — Realistic name, age, location, occupation
2. **Demographics** — Age, income, education, family status, location
3. **Bio** (3-4 sentences) — Day in their life, personality
4. **Goals** — What they want to achieve (3-4 goals)
5. **Frustrations** — Pain points and challenges (3-4 frustrations)
6. **Motivations** — What drives their behavior
7. **Tech Savviness** — Scale of 1-5 with description
8. **Preferred Channels** — How they discover and interact with products
9. **Key Quote** — A fictional quote that captures their mindset
10. **Scenario** — A typical use case for your product
11. **Must-Haves vs Nice-to-Haves** — Feature priorities

Make personas realistic and research-backed, not stereotypical.`,
    tags: ["user persona", "user research", "UX research", "design thinking"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "ux-002",
    profession: "ux-designer",
    category: "Analysis & Research",
    title: "Usability Test Script",
    promptText: `Create a usability testing script for testing [FEATURE/PRODUCT/PROTOTYPE].

Product: [DESCRIPTION]
Test type: [e.g., moderated remote, in-person, unmoderated]
Participants: [NUMBER] users, [DESCRIPTION OF PARTICIPANTS]
Duration: [e.g., 45-60 minutes per session]

Script sections:
1. **Introduction** (5 min):
   - Welcome and purpose
   - Consent and recording permission
   - "Think aloud" instruction

2. **Warm-up Questions** (5 min):
   - Current behavior and experience
   - Technology comfort level

3. **Task Scenarios** (30-40 min):
   - Task 1: [SCENARIO] — Success criteria, time limit
   - Task 2: [SCENARIO] — Success criteria, time limit
   - Task 3: [SCENARIO] — Success criteria, time limit
   - Task 4: [SCENARIO] — Success criteria, time limit
   - Task 5: [SCENARIO] — Success criteria, time limit

4. **Post-Task Questions** per task:
   - Difficulty rating (1-5)
   - What was confusing?
   - What would they change?

5. **Wrap-Up** (5 min):
   - Overall impression
   - SUS (System Usability Scale) questionnaire
   - Final open-ended questions

Include moderator notes and when to probe deeper.`,
    tags: ["usability testing", "user research", "testing script", "UX research"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // RECRUITER (15 prompts)
  // ============================================================
  {
    id: "rec-001",
    profession: "recruiter",
    category: "Sales & Outreach",
    title: "LinkedIn InMail Outreach Templates",
    promptText: `Write 5 LinkedIn InMail templates for recruiting [ROLE TYPE - e.g., senior software engineers, marketing directors, data scientists].

Company: [COMPANY NAME]
What makes it attractive: [SELLING POINTS - culture, tech stack, growth, etc.]
Location/Remote: [DETAILS]

For each template, provide:
1. **Subject line** — Under 50 characters, compelling
2. **Opening line** — Personalized hook (reference their work, company, or content)
3. **Value proposition** — Why this opportunity is worth their time (2-3 sentences)
4. **Social proof** — Quick credibility builder
5. **CTA** — Low-pressure next step
6. **Total length** — Under 100 words

Template types:
1. The "Admirer" — Reference their specific work/achievement
2. The "Insider" — Share something exciting happening at your company
3. The "Mutual Connection" — Leverage shared connections or communities
4. The "Challenge" — Present an exciting problem to solve
5. The "Quick Question" — Ultra-short, curiosity-driven

Include A/B testing suggestions for subject lines.`,
    tags: ["LinkedIn", "InMail", "sourcing", "outreach", "recruiting"],
    difficulty: "beginner",
    aiTool: ["ChatGPT", "Claude", "Gemini"],
  },
  {
    id: "rec-002",
    profession: "recruiter",
    category: "Documentation",
    title: "Candidate Evaluation Scorecard",
    promptText: `Create a candidate evaluation scorecard for the [JOB TITLE] position.

Key requirements:
- Technical skills: [LIST]
- Soft skills: [LIST]
- Experience: [REQUIREMENTS]
- Culture fit factors: [DESCRIBE CULTURE]

Scorecard sections:
1. **Candidate Information** — Name, date, interviewer, interview stage
2. **Technical Assessment** (40% weight):
   - [Skill 1] — Rating 1-5, notes
   - [Skill 2] — Rating 1-5, notes
   - [Skill 3] — Rating 1-5, notes
3. **Behavioral Assessment** (30% weight):
   - Communication — Rating 1-5, evidence
   - Problem-solving — Rating 1-5, evidence
   - Collaboration — Rating 1-5, evidence
4. **Culture Fit** (20% weight):
   - Values alignment — Rating 1-5
   - Growth mindset — Rating 1-5
   - Team dynamics — Rating 1-5
5. **Experience & Background** (10% weight):
   - Relevant experience — Rating 1-5
   - Industry knowledge — Rating 1-5
6. **Overall Recommendation** — Strong Hire / Hire / No Hire / Strong No Hire
7. **Justification** — Written summary of recommendation

Include clear descriptors for each rating level (1-5) to ensure consistency across interviewers.`,
    tags: ["evaluation", "scorecard", "hiring", "interview assessment"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // BUSINESS CONSULTANT (15 prompts)
  // ============================================================
  {
    id: "con-001",
    profession: "consultant",
    category: "Strategy & Planning",
    title: "SWOT Analysis Framework",
    promptText: `Conduct a comprehensive SWOT analysis for [COMPANY/PROJECT] in the [INDUSTRY].

Company overview: [BRIEF DESCRIPTION]
Key products/services: [LIST]
Target market: [DESCRIPTION]
Main competitors: [LIST 2-3]

Provide:
1. **Strengths** (Internal, Positive) — 5-7 factors
   - What competitive advantages exist?
   - What resources and capabilities are unique?
   
2. **Weaknesses** (Internal, Negative) — 5-7 factors
   - What areas need improvement?
   - Where are resources lacking?

3. **Opportunities** (External, Positive) — 5-7 factors
   - What market trends favor growth?
   - What gaps exist in the competitive landscape?

4. **Threats** (External, Negative) — 5-7 factors
   - What external challenges loom?
   - How is the competitive landscape shifting?

5. **Cross-Analysis Matrix:**
   - SO Strategies (use strengths to capture opportunities)
   - WO Strategies (overcome weaknesses via opportunities)
   - ST Strategies (use strengths to mitigate threats)
   - WT Strategies (minimize weaknesses and avoid threats)

6. **Priority Actions** — Top 5 strategic recommendations with timeline

Format as a professional consulting deliverable.`,
    tags: ["SWOT", "strategic analysis", "consulting framework", "strategy"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "con-002",
    profession: "consultant",
    category: "Documentation",
    title: "Consulting Proposal Template",
    promptText: `Write a professional consulting engagement proposal for [CLIENT COMPANY].

Engagement type: [e.g., strategy consulting, operational improvement, digital transformation]
Duration: [TIMELINE]
Your firm: [BRIEF DESCRIPTION]

Proposal sections:
1. **Cover Page** — Professional layout
2. **Executive Summary** (1 page) — Problem, approach, expected outcomes
3. **Situation Analysis** — Current state understanding
4. **Proposed Approach** — Methodology and framework
5. **Work Streams** — Detailed breakdown of workstreams with:
   - Activities
   - Deliverables
   - Timeline
   - Team members
6. **Expected Outcomes** — Quantified benefits where possible
7. **Project Governance** — Reporting structure, meetings, escalation
8. **Team** — Consultant bios and roles
9. **Investment** — Fee structure and payment terms
10. **Risk Mitigation** — Potential challenges and how you'll address them
11. **Why Us** — Differentiators
12. **Case Studies** — 2 relevant past engagements
13. **Terms & Conditions**
14. **Next Steps** — Path to engagement

Tone: Authoritative, structured, results-oriented.`,
    tags: ["proposal", "consulting", "engagement", "business development"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },

  // ============================================================
  // ENTREPRENEUR & STARTUP FOUNDER (20 prompts)
  // ============================================================
  {
    id: "ent-001",
    profession: "entrepreneur",
    category: "Strategy & Planning",
    title: "Lean Business Plan Generator",
    promptText: `Create a lean business plan for a [BUSINESS TYPE] startup.

Business idea: [DESCRIPTION]
Target market: [DESCRIPTION]
Revenue model: [HOW YOU'LL MAKE MONEY]
Funding needed: [AMOUNT OR BOOTSTRAP]
Founder background: [BRIEF BIO]

Lean plan sections (1-2 pages each):
1. **Value Proposition** — What unique value you deliver
2. **Problem & Solution** — The pain point and your solution
3. **Target Market** — Ideal customer profile, TAM/SAM/SOM
4. **Revenue Streams** — How you'll make money (pricing model)
5. **Cost Structure** — Fixed and variable costs
6. **Key Metrics** — 5-7 KPIs to track
7. **Competitive Advantage** — Your moat (what's hard to copy)
8. **Channels** — How you'll reach customers
9. **Customer Relationships** — How you'll acquire and retain
10. **Key Activities** — What you must do daily
11. **Key Resources** — What you need (people, tech, money)
12. **Key Partners** — Strategic partnerships
13. **Financial Projections** — Year 1-3 revenue/expense estimates
14. **Milestones** — 90-day, 6-month, 1-year goals

Keep it actionable — this is a working document, not a formal business plan for investors.`,
    tags: ["business plan", "lean startup", "planning", "business model"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "ent-002",
    profession: "entrepreneur",
    category: "Sales & Outreach",
    title: "Investor Pitch Deck Narrative",
    promptText: `Write the narrative/script for a 12-slide investor pitch deck for [STARTUP NAME].

Stage: [Pre-seed/Seed/Series A]
Industry: [INDUSTRY]
Ask: [FUNDING AMOUNT]
Product: [DESCRIPTION]
Traction: [KEY METRICS]

Slide-by-slide script:
1. **Title Slide** — Tagline (7 words max)
2. **Problem** — The pain point (make it visceral)
3. **Solution** — Your product/service
4. **Market Size** — TAM, SAM, SOM with sources
5. **Product/Demo** — Key features and screenshots description
6. **Business Model** — How you make money
7. **Traction** — Key metrics, growth rate, milestones
8. **Competition** — Positioning matrix (not "we have no competition")
9. **Go-to-Market** — Customer acquisition strategy
10. **Team** — Why this team can win
11. **Financials** — Revenue projections, unit economics
12. **The Ask** — Funding amount, use of funds, timeline

For each slide:
- Speaker notes (what to say, 30-60 seconds per slide)
- Design direction (what visuals to include)
- Key data point or stat to highlight

Total pitch time: 10-12 minutes.`,
    tags: ["pitch deck", "fundraising", "investor", "startup"],
    difficulty: "advanced",
    aiTool: ["ChatGPT", "Claude"],
  },
  {
    id: "ent-003",
    profession: "entrepreneur",
    category: "Email & Communication",
    title: "Cold Email to Investors",
    promptText: `Write 3 versions of a cold email to potential investors for my startup.

Startup: [NAME]
Industry: [INDUSTRY]
Stage: [STAGE]
What we do: [ONE-SENTENCE DESCRIPTION]
Traction: [KEY METRICS]
Ask: [WHAT YOU WANT - intro call, feedback, investment]
Why this investor: [WHY THEY'RE A GOOD FIT]

Version 1: The "Traction-Led" email — Lead with impressive metrics
Version 2: The "Warm Intro Substitute" — Personal and relationship-focused
Version 3: The "Quick Ask" — Ultra-short, curiosity-driven

For each version:
- Subject line (3 options)
- Email body (under 150 words)
- PS line (optional hook)

Rules:
- No attachments in first email
- Don't ask for money directly in first email
- Show, don't tell (metrics over adjectives)
- Research-specific opening line formula
- Clear, single CTA

Also include 3 follow-up email templates for non-responses.`,
    tags: ["investor outreach", "cold email", "fundraising", "networking"],
    difficulty: "intermediate",
    aiTool: ["ChatGPT", "Claude"],
  },
];

// Utility functions
export function getPromptsByProfession(professionSlug: string): Prompt[] {
  return prompts.filter((p) => p.profession === professionSlug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export function getPromptsByAiTool(tool: string): Prompt[] {
  return prompts.filter((p) => p.aiTool.includes(tool as Prompt["aiTool"][number]));
}

export function searchPrompts(query: string): Prompt[] {
  const lowerQuery = query.toLowerCase();
  return prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.promptText.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}

export function getFeaturedPrompts(): Prompt[] {
  const featuredIds = [
    "re-001", "dev-003", "mkt-001", "edu-001", "law-001",
    "cw-001", "gd-001", "sales-001", "ent-002", "smm-001",
    "da-001", "ux-001",
  ];
  return prompts.filter((p) => featuredIds.includes(p.id));
}

export function getPromptCountByProfession(professionSlug: string): number {
  return prompts.filter((p) => p.profession === professionSlug).length;
}
