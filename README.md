# Pathfinder AI

> One intelligence engine. Two pathways to opportunity.

Hackathon frontend prototype for an end-to-end career and livelihood guidance agent.

## What is included

- Landing page
- Student career dashboard
- Skill profile
- Interactive adaptive roadmap simulation
- Mock interview UI with actionable feedback
- Rural/local opportunity interface
- Voice interaction demo state
- Government scheme RAG placeholder
- Responsive dark UI

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Next hackathon integrations

Replace demo data with:

- Adzuna or another live jobs API
- Official government scheme sources + RAG
- Qdrant for semantic retrieval
- FastAPI backend
- LLM for skill assessment and interview feedback
- Whisper + IndicTrans2 + TTS
- Twilio WhatsApp

## Suggested repository structure

```text
pathfinder-ai/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── README.md
```

## Important

The current job cards and scheme section are intentionally demo placeholders. For the final hackathon version, connect them to live sources and show the source/date to satisfy the "no hardcoded lists" requirement.
