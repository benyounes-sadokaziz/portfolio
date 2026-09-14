/**
 * Locale-independent facts. Anything identical in every language lives here
 * exactly once, so the EN and FR dictionaries can never drift apart.
 */

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const profile = {
  name: "Sadok Aziz Ben Younes",
  email: "sadokaziz.benyounes@ensi-uma.tn",
  phone: "+216 92 558 515",
  github: "https://github.com/benyounes-sadokaziz",
  linkedin: "https://www.linkedin.com/in/sadokaziz-benyounes/",
  // One CV for now; drop a translated file in /public and key it by locale.
  cv: { en: "/cv.pdf", fr: "/cv.pdf" },
} as const;

export type ProjectId = "sign-bridge" | "traffic-monitoring";

/** A rendered architecture diagram: ordered layers, each holding named nodes. */
export interface ArchLayer {
  /** Dictionary key for the layer name. */
  key: string;
  nodes: string[];
  /** Marks the layer carrying the system's core idea. Rendered in accent. */
  focus?: boolean;
}

/** A verifiable count or attribute. Never a performance claim. */
export interface GlanceFact {
  value: string;
  key: string;
}

/** One measured comparison row. Numbers only - no interpretation. */
export interface BenchmarkRow {
  system: string;
  architecture: string;
  latency: string;
  /** Marks this project among the systems compared. */
  self?: boolean;
}

export interface ProjectMeta {
  id: ProjectId;
  slug: string;
  period: string;
  /** Drives the home-page composition: one lead, a pair, then a full-width. */
  layout: "feature" | "half" | "wide";
  glance: GlanceFact[];
  architecture: ArchLayer[];
  benchmark?: BenchmarkRow[];
  stack: string[];
  demo?: { src: string; poster?: string };
  repos?: { label: string; url: string }[];
  live?: string;
}

export const projects: ProjectMeta[] = [
  {
    id: "traffic-monitoring",
    slug: "intelligent-traffic-monitoring",
    period: "2025",
    layout: "feature",
    glance: [
      { value: "30", key: "fps" },
      { value: "98.6%", key: "speedAccuracy" },
      { value: "9", key: "calibrationPoints" },
    ],
    architecture: [
      { key: "ingest", nodes: ["video upload", "FastAPI", "Redis queue", "Celery workers"] },
      { key: "detect", nodes: ["YOLOv8 vehicles", "ByteTrack"], focus: true },
      { key: "plates", nodes: ["YOLOv8 plate detector", "quality assessor", "best-shot storage"] },
      { key: "measure", nodes: ["9-point homography", "outlier rejection", "per-class speed limits"] },
      { key: "observe", nodes: ["Prometheus", "Grafana", "MLflow"] },
      { key: "present", nodes: ["Streamlit", "WebSocket updates"] },
    ],
    stack: ["YOLOv8", "ByteTrack", "Supervision", "FastAPI", "WebSocket", "Redis", "Celery", "Streamlit", "Prometheus", "Grafana", "MLflow", "Docker", "pytest"],
    repos: [{ label: "Repository", url: "https://github.com/benyounes-sadokaziz/Trafic_monitor" }],
  },
  {
    id: "sign-bridge",
    slug: "sign-bridge",
    period: "2025",
    layout: "feature",
    glance: [
      { value: "32k", key: "sentences" },
      { value: "4k", key: "words" },
      { value: "3", key: "modalities" },
    ],
    architecture: [
      { key: "input", nodes: ["speech", "text", "video"] },
      { key: "transcribe", nodes: ["Whisper STT"] },
      { key: "understanding", nodes: ["BERT", "NLTK"], focus: true },
      { key: "mapping", nodes: ["sign gloss", "OpenPose keypoints"] },
      { key: "render", nodes: ["Unity 3D avatar"] },
    ],
    stack: ["FastAPI", "Whisper", "BERT", "Transformers", "OpenPose", "Unity", "NLTK", "PostgreSQL", "Pandas"],
    repos: [
      { label: "Backend & NLP", url: "https://github.com/benyounes-sadokaziz/PCD" },
      { label: "Unity avatar", url: "https://github.com/benyounes-sadokaziz/PCD_Unity" },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export interface ExperienceMeta {
  id: string;
  org: string;
  period: string;
  benchmark?: BenchmarkRow[];
  /** Empty until confirmed - never guessed. */
  location: string;
  stack: string[];
}

export const experience: ExperienceMeta[] = [
  {
    id: "ora-studio",
    org: "Ora Studio",
    period: "Apr 2026 — Aug 2026",
    location: "",
    benchmark: [
      { system: "OpenAI Realtime / GPT-4o voice", architecture: "native speech-to-speech", latency: "< 400 ms" },
      { system: "Retell AI", architecture: "cascade", latency: "≈ 600 ms" },
      { system: "Vapi", architecture: "cascade", latency: "≈ 700–1500 ms" },
      { system: "Pipecat / LiveKit Agents", architecture: "cascade", latency: "≈ 750–950 ms" },
      { system: "Voice Vibe", architecture: "cascade + multi-agent", latency: "≈ 975–1020 ms (p50)", self: true },
      { system: "Synthflow", architecture: "cascade", latency: "≈ 1800 ms" },
    ],
    stack: ["FastAPI", "LangGraph", "PostgreSQL", "LightGBM", "MLflow", "DVC", "Docker", "GitHub Actions", "pytest"],
  },
  {
    id: "ba-consulting",
    org: "BA-Consulting",
    period: "Jun 2025 — Aug 2025",
    location: "",
    stack: ["FastMCP", "LangChain", "Docker", "AWS Lambda", "DynamoDB", "SQLite", "Unsloth", "ZenML", "MLflow"],
  },
  {
    id: "core-techs",
    org: "Core Techs Solutions",
    period: "Jul 2024 — Aug 2024",
    location: "",
    stack: ["Spring Boot", "Angular", "PostgreSQL"],
  },
];

export interface EducationMeta {
  id: string;
  org: string;
  period: string;
}

export const education: EducationMeta[] = [
  { id: "ensi", org: "ENSI, Manouba", period: "2023 — 2026" },
  { id: "essths", org: "ESSTHS, Hammam Sousse", period: "2021 — 2023" },
];

/** Skill groups. Keys are translated; the technology names are not. */
export const skillGroups: { id: string; items: string[] }[] = [
  {
    id: "ai",
    items: [
      "LangGraph",
      "LangChain",
      "RAG",
      "Multi-Agent Orchestration",
      "Transformers",
      "BERT",
      "PyTorch",
      "YOLO",
      "OpenCV",
      "ByteTrack",
      "Mistral",
      "DeepSeek",
      "Scikit-learn",
      "LightGBM",
    ],
  },
  {
    id: "backend",
    items: ["Python", "FastAPI", "Spring Boot", "Java", "WebSocket", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "Celery"],
  },
  { id: "frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS"] },
  { id: "mlops", items: ["MLflow", "DVC", "ZenML", "Docker", "GitHub Actions", "CI/CD", "Prometheus", "Grafana", "pytest"] },
  { id: "cloud", items: ["AWS", "AWS Lambda", "Linux", "CUDA", "Google Gen AI Toolbox", "Google Colab"] },
];

export const philosophyPillars = ["architecture", "aiEngineering", "performance", "mlops", "security"] as const;
export type PhilosophyPillar = (typeof philosophyPillars)[number];

/** The About-section spine: how the disciplines stack into a shipped system. */
export const disciplineFlow = ["aiEngineering", "llms", "agents", "data", "production"] as const;

export const spokenLanguages = [
  { id: "en", level: "advanced" },
  { id: "fr", level: "advanced" },
  { id: "ar", level: "native" },
] as const;

export const navSections = ["home", "about", "experience", "projects", "skills", "contact"] as const;
