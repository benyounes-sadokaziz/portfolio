import type { Dictionary } from "./dictionary";

export const en: Dictionary = {
  meta: {
    title: "Sadok Aziz Ben Younes — AI & LLM Engineer",
    description:
      "AI & LLM engineer building multi-agent architectures, RAG systems and production-grade software: streaming voice pipelines, computer vision services, and the MLOps that keeps them dependable.",
    keywords: [
      "AI Engineer",
      "LLM Engineer",
      "Software Engineer",
      "Multi-Agent Systems",
      "RAG",
      "MLOps",
      "LLMOps",
      "LangGraph",
      "FastAPI",
      "Computer Vision",
    ],
  },

  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    availability: "Available for opportunities",
    menu: "Menu",
  },

  hero: {
    greeting: "Hi, I am",
    role: "AI & LLM Engineer · Software Engineer",
    roleShort: "AI & LLM Engineer",
    statement: "Building intelligent systems, AI agents and production-grade software.",
    description:
      "I work where language models stop being demos and start being software: agent graphs that hold their shape under load, retrieval that returns the right context, and the pipelines that keep a model honest after it ships.",
    specialisms: [
      "AI / LLM systems",
      "Multi-agent architectures",
      "RAG systems",
      "MLOps / LLMOps",
      "Backend engineering",
      "Full-stack development",
    ],
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
  },

  about: {
    label: "About",
    title: "Software engineering and AI, treated as one discipline.",
    body: [
      "I graduated from ENSI in September 2026 with an engineering degree in computer science. Across three internships I built the same thing in different shapes: an AI system that has to survive contact with real users. A voice assistant answering in real time. A vision pipeline reading a live traffic feed. Agent tooling that lets a model act on a calendar and an inbox.",
      "The interesting problems were rarely in the model. They were in the orchestration, the failure modes, the cost of a slow response, and knowing whether a new version was actually better than the one it replaced. That is the work I want more of.",
    ],
    flowLabel: "How the layers stack",
    flow: {
      aiEngineering: { title: "AI Engineering", note: "Turning a capability into a component with a contract." },
      llms: { title: "LLMs", note: "Prompting, fine-tuning and quantisation, chosen by constraint." },
      agents: { title: "Agents", note: "Graphs of specialised steps instead of one prompt doing everything." },
      data: { title: "Data", note: "Retrieval, feature pipelines and versioning that make results reproducible." },
      production: { title: "Production Systems", note: "Latency budgets, observability, CI, and a deliberate path to release." },
    },
  },

  experience: {
    label: "Experience",
    title: "Where the systems were built.",
    lead: "Three internships, each one further up the stack from model to product.",
    achievementsLabel: "Key achievements",
    benchmark: {
      label: "Voice Vibe latency benchmark",
      note: "End-to-end latency, voice in to voice out. Native speech-to-speech models skip the STT and TTS hops entirely, which is why they sit below every cascade system here. Voice Vibe is the only entry running a six-agent graph on each turn.",
      columns: { system: "System", architecture: "Architecture", latency: "End-to-end latency" },
    },
    expand: "Show details",
    collapse: "Hide details",
    entries: {
      "ora-studio": {
        role: "Applied AI & MLOps Engineering Intern",
        summary:
          "Built a real-time multi-agent voice assistant and the MLOps pipeline behind a recommendation model, from feature engineering to a gated release path.",
        achievements: [
          "Built Voice Vibe, a real-time voice assistant plugin. A single prompt handling a whole spoken conversation is slow and impossible to debug, so I split it into six specialised LangGraph agents composed as a graph, wired over a WebSocket STT/TTS pipeline, with every stage observable so a bad turn traces to one node.",
          "Measured end-to-end latency at roughly 975–1020 ms p50, voice in to voice out, with all six agents running on every turn.",
          "Benchmarked that against five production voice platforms to locate the real bottlenecks rather than the assumed ones.",
          "Designed an end-to-end MLOps pipeline (CRISP-DM) for a suggestion-acceptance recommender, with leak-free feature engineering and calibrated LightGBM and logistic regression models tracked in MLflow and DVC.",
          "Shipped a deterministic promotion gate — shadow, then gate, then promote — so no model version reached production unmeasured.",
          "Hardened the service with prompt-injection defenses, WebSocket rate limiting, and a GitHub Actions pipeline running automated tests and dependency audits.",
        ],
      },
      "ba-consulting": {
        role: "AI & LLM Engineering Intern",
        summary:
          "Built the tooling layer that lets an agent act on real services, and a fine-tuning pipeline for running small models on constrained hardware.",
        achievements: [
          "An agent that can only talk is a chatbot, and giving one real access to a calendar or an inbox turns \"what may it call, with what arguments\" into a schema problem. I built custom MCP servers for Calendar and Gmail exposing typed tools, so the model's options are defined by a contract rather than by a prompt.",
          "Deployed Gen AI Toolbox database tools on AWS Lambda for serverless operation, so tool execution scaled without a standing server.",
          "Built a QLoRA fine-tuning pipeline for TinyLlama with 4-bit quantisation, orchestrated with ZenML, MLflow and Docker for GPU-accelerated training.",
        ],
      },
      "core-techs": {
        role: "Full-Stack Software Engineering Intern",
        summary: "Backend data structures and the real-time dashboard reading from them.",
        achievements: [
          "Optimised backend data structures with hash tables, cutting lookup work on the hot path.",
          "Built real-time dashboard components turning raw vehicle data into readable operational insight.",
        ],
      },
    },
  },

  projects: {
    label: "Selected work",
    title: "Two systems, taken from problem to production.",
    lead: "Each one is written up as a case study: what the problem actually was, what I built, and what it changed.",
    problemLabel: "Problem",
    contributionLabel: "Contribution",
    resultsLabel: "Outcome",
    glanceLabel: "At a glance",
    viewCase: "Read case study",
    entries: {
      "sign-bridge": {
        title: "Sign Bridge",
        category: "Multimodal · Accessibility",
        tagline: "Speech, text and video translated into sign language by a 3D avatar.",
        problem:
          "Sign language is not a word-for-word encoding of speech. A literal transcription produces something a deaf user cannot read, so translation has to happen at the level of meaning.",
        contribution:
          "I built it as two systems. A FastAPI backend normalises speech, text and video into one representation and maps it to sign gloss through a BERT-based NLP stage, with Whisper handling transcription when the input is spoken. A Unity client then animates a 3D avatar from OpenPose-derived keypoints.",
        results: [
          "One FastAPI service handles speech, text and video through a single translation path, so the three entry points cannot drift apart.",
          "Translation happens at the level of gloss rather than word order, so the output follows sign grammar instead of transcribed speech.",
          "Output is a rendered 3D avatar rather than a video lookup, so the vocabulary can grow without recording new footage.",
          "The vocabulary covers roughly 32,000 sentences and 4,000 individual words, plus the alphabet and numbers for spelling anything outside it.",
        ],
      },
      "traffic-monitoring": {
        title: "Intelligent Traffic Monitoring",
        category: "Computer vision · Real-time systems",
        tagline: "Vehicle detection, tracking, plate capture and homography-based speed estimation from video.",
        problem:
          "A speed measured in pixels is not a speed, and detection alone loses a vehicle the moment it passes behind a larger one. Without identity across frames and a mapping from the camera view to real distance, none of the numbers a traffic operator needs can be trusted.",
        contribution:
          "I built the pipeline end to end: YOLOv8 detects vehicles, ByteTrack holds their identity across frames, a second YOLOv8 model finds plates inside each vehicle crop, and a nine-point homography converts pixel positions into real-world coordinates so speed becomes an actual measurement. Violations are then flagged against limits that differ per vehicle type.",
        results: [
          "Speed estimation reaches 98.6% accuracy, computed through a nine-point homography calibration with outlier rejection rather than from pixel movement.",
          "A quality assessor scores every plate crop for sharpness, brightness and size, so one readable image per vehicle is kept instead of hundreds of poor ones.",
          "The pipeline sustains 30 FPS while detecting, tracking, reading plates and checking violations.",
          "Prometheus and Grafana expose frame latency, detection rates and violation counts, while a Streamlit dashboard streams results over WebSocket as the job runs.",
        ],
      },
    },
    glanceKeys: {
      agents: "specialised agents",
      platformsBenchmarked: "platforms benchmarked",
      latencyMs: "ms · p50, voice to voice",
      modalities: "input modalities",
      sentences: "sentences in vocabulary",
      words: "individual words",
      fps: "FPS sustained",
      speedAccuracy: "speed estimation accuracy",
      calibrationPoints: "point homography calibration",
    },
    archKeys: {
      capture: "Capture",
      speech: "Speech",
      orchestration: "Orchestration",
      synthesis: "Synthesis",
      input: "Input",
      transcribe: "Transcribe",
      understanding: "Understanding",
      mapping: "Mapping",
      render: "Render",
      ingest: "Ingest",
      detect: "Detect",
      plates: "Plates",
      measure: "Measure",
      observe: "Observe",
      present: "Present",
    },
  },

  caseStudy: {
    backLabel: "All projects",
    sections: {
      problem: "Problem",
      objectives: "Objectives",
      architecture: "Architecture",
      technologies: "Technologies",
      implementation: "Implementation",
      challenges: "Challenges & solutions",
      results: "Results",
      lessons: "Lessons learned",
    },
    challengeLabel: "Challenge",
    solutionLabel: "Solution",
    entries: {
      "sign-bridge": {
        summary:
          "Sign Bridge translates speech, text and video into sign language rendered by a 3D avatar, treating sign as a language to translate into rather than a caption to display. It is two codebases: a FastAPI backend for transcription and NLP, and a Unity client that drives the avatar.",
        objectives: [
          "Accept speech, text and video without three separate implementations.",
          "Translate at the level of meaning rather than transcribing word for word.",
          "Render output as animation that can grow without new recordings.",
        ],
        implementation: [
          "A FastAPI service normalising all three input modalities into one internal representation before translation begins.",
          "A BERT-based NLP stage, supported by NLTK preprocessing, mapping input to sign gloss.",
          "OpenPose pose estimation providing the keypoint vocabulary that drives avatar motion.",
          "A Unity 3D avatar animating the gloss sequence as the user-facing output.",
        ],
        challenges: [
          {
            challenge: "Sign language grammar does not follow spoken word order, so literal transcription produces unreadable output.",
            solution: "Introduced gloss as an intermediate representation, making translation an explicit stage rather than an implicit one.",
          },
          {
            challenge: "Three input modalities risk becoming three divergent codepaths.",
            solution: "Converged all inputs to a single representation early, so the translation and rendering stages have exactly one contract to satisfy.",
          },
        ],
        lessons: [
          "An intermediate representation is what turns a demo into a system: it gives every stage a contract instead of an assumption.",
          "Accessibility work rewards talking to the people who will use it more than it rewards model choice.",
        ],
      },
      "traffic-monitoring": {
        summary:
          "A containerised traffic monitoring service that watches uploaded video and reports what actually happened on the road: which vehicles, how fast, and which of them broke the limit for their class.",
        objectives: [
          "Keep vehicle identity stable across frames so every measurement belongs to a specific vehicle.",
          "Produce speeds in real-world units rather than pixels per frame.",
          "Capture one good, readable plate image per vehicle instead of hundreds of unusable ones.",
          "Flag violations against speed limits that differ by vehicle type.",
          "Make system and model behaviour visible to an operator while a job is still running.",
        ],
        implementation: [
          "YOLOv8 detects cars, trucks, buses, motorcycles and bicycles; ByteTrack assigns a track ID and holds it through occlusion.",
          "A second YOLOv8 model detects plates within each vehicle crop, running alongside tracking rather than as a separate pass over the video.",
          "A quality assessor scores each plate crop on sharpness, brightness and size, and the store keeps only the strongest image per track.",
          "A nine-point homography maps the road plane onto real-world coordinates, and outlier rejection discards measurements the geometry cannot support.",
          "A FastAPI backend runs processing as a background job and pushes frame-level updates to a Streamlit dashboard over WebSocket.",
          "Prometheus collects frame latency, detection rate, inference time and violation counts; Grafana renders them. The whole stack runs under Docker Compose.",
        ],
        challenges: [
          {
            challenge: "Detection alone double-counts vehicles and loses them behind larger ones, which corrupts every number downstream.",
            solution:
              "ByteTrack maintains identity across frames, so counts, speeds and plate images attach to one vehicle rather than to isolated frames.",
          },
          {
            challenge: "Perspective means the same pixel displacement represents different real distances at different depths, so pixel-based speed is meaningless.",
            solution:
              "A nine-point homography calibration maps the road plane to real-world coordinates, with outlier rejection to drop implausible readings.",
          },
          {
            challenge: "Saving a plate crop from every frame produces thousands of mostly unreadable images.",
            solution: "A quality assessor scores sharpness, brightness and size, and only the best crop per vehicle is written to disk.",
          },
          {
            challenge: "A long video job leaves the operator with no feedback until it finishes.",
            solution: "Processing runs as a background job and streams progress, tracks and violations to the dashboard over WebSocket.",
          },
        ],
        lessons: [
          "Tracking, not detection, is what makes a vision pipeline useful: identity is what every downstream metric depends on.",
          "Calibration is the difference between a number and a measurement. The homography mattered more to accuracy than the choice of model.",
          "Deciding what not to store turned out to be as valuable as deciding what to detect.",
        ],
      },
    },
  },

  skills: {
    label: "Skills",
    title: "The stack I actually reach for.",
    lead: "Grouped by the layer of the system they belong to.",
    groups: {
      ai: { name: "AI / Machine Learning", note: "Agent graphs, retrieval, transformers and vision models." },
      backend: { name: "Backend", note: "Services, transports and the data stores behind them." },
      frontend: { name: "Frontend", note: "Typed interfaces over the systems above." },
      mlops: { name: "MLOps / LLMOps", note: "Experiment tracking, versioning, CI and release gates." },
      cloud: { name: "Cloud / Infrastructure", note: "Where it runs, and what it costs to keep running." },
    },
  },

  philosophy: {
    label: "Approach",
    title: "How I build.",
    lead: "Five principles that survive contact with production.",
    pillars: {
      architecture: {
        title: "Architecture",
        body: "Design modular systems with explicit boundaries, so a component can be replaced without a rewrite and a failure isolates to one place.",
      },
      aiEngineering: {
        title: "AI Engineering",
        body: "Treat a language model as a component with a contract, not a black box that gets prompted harder when it misbehaves.",
      },
      performance: {
        title: "Performance",
        body: "Measure latency, throughput and resource use before optimising. The slowest stage is rarely the suspected one.",
      },
      mlops: {
        title: "MLOps",
        body: "Track experiments, data and model versions so a result is reproducible, and gate releases so a regression is caught before users find it.",
      },
      security: {
        title: "Security",
        body: "Validate at the boundary, isolate execution, and instrument enough to notice when something is wrong.",
      },
    },
  },

  contact: {
    label: "Contact",
    title: "Open to AI and LLM engineering roles.",
    lead: "Based in Sousse, Tunisia — open to remote and relocation. The fastest way to reach me is email.",
    emailLabel: "Email",
  },

  education: {
    label: "Education",
    entries: {
      ensi: { degree: "Engineering Degree in Computer Science" },
      essths: { degree: "Preparatory Scientific Cycle — Mathematics and Physics" },
    },
    languagesLabel: "Languages",
    languages: { en: "English", fr: "French", ar: "Arabic", advanced: "Advanced", native: "Native" },
  },

  footer: {
    credit: "Designed & engineered with precision.",
    rights: "All rights reserved.",
  },

  ui: {
    downloadCv: "Download CV",
    demoPending: "Demo video coming soon",
    viewLive: "Live demo",
    toggleTheme: "Toggle theme",
    switchLanguage: "Passer en français",
    stackLabel: "Stack",
  },
};
