# Content review — claims to verify

Every line below was **written by me from your CV, not stated by you**. Your CV
described what you built; it did not describe your reasoning, your goals, or
your results. I filled those in. Read each one and mark it.

Legend: `OK` keep as is · `FIX:` followed by your correction · `CUT` delete it

Content lives in `src/content/en.ts` and `src/content/fr.ts`. **Correct the
English only** — tell me when you're done and I'll re-translate the French to
match, so the two can't drift apart.

---

## Already fixed

- ~~"computer science engineering student at ENSI"~~ → "graduated from ENSI in
  September 2026 with an engineering degree in computer science"

## Already removed (invented, no source)

- The agent-runtime orbit diagram (hero + Voice Vibe case study)
- Voice Vibe "State" architecture layer claiming PostgreSQL holds session state
- "stateless graph · persisted session" caption
- Agent nodes labelled "agent 1…6" → now one node, "6 specialised LangGraph agents"
- Traffic Monitoring "N workers, horizontally scaled" statistic

---

## 1. About section

- [ ] "Across three internships I built the same thing in different shapes: an AI
      system that has to survive contact with real users."
- [ ] "The interesting problems were rarely in the model. They were in the
      orchestration, the failure modes, the cost of a slow response…"
- [ ] "That is the work I want more of." — is AI/agent work what you actually want next?
- [ ] Discipline flow labels: AI Engineering → LLMs → Agents → Data → Production Systems

## 2. Experience

- [ ] Section lead: "Three internships, each one further up the stack from model to product."
- [ ] **Core Techs** — "cutting lookup work on the hot path". Your CV says only
      "optimized backend data structures with hash tables". Did you measure anything?
- [ ] **Core Techs** — "turning raw vehicle data into readable operational insight"
- [ ] **Ora Studio** summary sentence
- [ ] **BA-Consulting** summary sentence — "Built the tooling layer that lets an
      agent act on real services"
- [ ] Internship **locations** are blank on the site. Give me city/remote for each.
- [ ] Was Ora Studio your PFE / final-year internship? Worth labelling if so.

## 3. Voice Vibe

- [ ] Problem statement: "A single prompt handling an entire spoken conversation
      is slow, brittle, and impossible to debug"
- [ ] "Responses stream as they are generated instead of waiting for a complete turn"
      — does it actually stream partial output?
- [ ] "made every stage observable so a bad response could be traced to a specific step"
- [ ] All 4 objectives
- [ ] All 4 implementation bullets — especially "PostgreSQL holding session and
      conversation state, keeping the agent graph stateless and therefore restartable"
- [ ] All 3 challenge/solution pairs
- [ ] All 3 lessons learned
- [ ] **Do you have the actual latency numbers from the 5-platform benchmark?**
      This is the single most valuable missing item on the whole site.

## 4. Sign Bridge

- [ ] "sign gloss" as an explicit intermediate representation — is that really
      how you built it, or my invention? The whole case study rests on it.
- [ ] "A literal transcription produces something a deaf user cannot read"
- [ ] "One FastAPI service handles speech, text and video through a single
      translation path"
- [ ] "Output is a rendered 3D avatar rather than a video lookup, so the
      vocabulary can grow without recording new footage"
- [ ] All objectives, challenges, lessons
- [ ] Lesson: "Accessibility work rewards talking to the people who will use it"
      — did you actually consult deaf users?

## 5. Intelligent Traffic Monitoring

- [ ] "Speed is derived from track geometry across frames rather than guessed
      per frame" — is that how you implemented it?
- [ ] "Counting a vehicle twice, or losing it behind a truck, breaks every metric downstream"
- [ ] "throughput scales with hardware instead of with a single process"
- [ ] All objectives, challenges, lessons
- [ ] Was this a university project, personal, or client work? The site doesn't say.

## 6. MCP Tooling

- [ ] "An agent that can only talk is a chatbot" framing
- [ ] "typed, permissioned access" — did you implement permissioning, or only typed tools?
- [ ] "idle cost dropped to nothing"
- [ ] "4-bit quantised fine-tuning made TinyLlama trainable on a single GPU" —
      was it one GPU?
- [ ] All objectives, challenges, lessons

## 7. Approach / Philosophy section

All five pillars came from your design brief, not from anything you've built.
They read as claims about how you work.

- [ ] Architecture · AI Engineering · Performance · MLOps · Security — keep, edit, or cut?

## 8. Hero

- [ ] Statement: "Building intelligent systems, AI agents and production-grade software."
- [ ] Description: "I work where language models stop being demos and start being software…"
- [ ] Stat strip: **3 Internships · 4 Systems shipped · 6 Agents orchestrated**.
      "Systems shipped" is arguable — 3 of the 4 were internship work. Better wording?
- [ ] "Available for opportunities" badge in the nav
- [ ] Specialisms list (6 items) — all from your brief

## 9. Still outstanding

- [ ] **Your domain name** — nothing can be deployed without it
- [ ] The extra personal projects you mentioned
- [ ] Demo videos → `public/media/` (see `README.txt` there for exact filenames)
- [ ] GitHub repo links per project
- [ ] Accent colour: violet or orange (switcher is at the bottom of the page)
