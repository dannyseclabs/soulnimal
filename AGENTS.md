# Soulnimal Agent Instructions

Soulnimal is a premium animal recommendation and discovery platform.

Core product goal:
Help users discover animals that fit their lifestyle, personality, budget, space, sensory preferences, and emotional expectations.

Visual direction:
- Premium, warm, cozy, adult
- Apple / Airbnb / Notion / premium startup feel
- Warm orange / amber / tiger-inspired accents
- Rounded UI, large cards, soft shadows
- Modern typography
- Mobile-first
- Beautiful animal imagery
- Subtle paw/tiger branding details

Avoid:
- Childish zoo aesthetics
- Cartoon overload
- Neon colors
- Generic SaaS dashboard look
- Ugly pet-blog styling
- Overengineering

Tech rules:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Local TypeScript data first
- Server Components by default
- Client Components only when needed
- No backend yet
- No auth yet
- No database yet

Development rules:
- Work one route or feature at a time
- Keep diffs small
- Do not rewrite working code unnecessarily
- Preserve visual consistency
- Prioritize polish over feature spam
- Explain why each change improves the product

MVP routes:
- /
- /animals
- /animals/[slug]
- /quiz
- /compare
- /guides

Main feature:
The quiz should be visually appealing, fast, emotional, and deterministic.
It should show best animal matches in percentages and explain why each match fits or does not fit.

Tone:
Warm, intelligent, realistic, premium.
Not childish.
Not fake-AI marketing.