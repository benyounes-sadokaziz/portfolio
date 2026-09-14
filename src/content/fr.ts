import type { Dictionary } from "./dictionary";

export const fr: Dictionary = {
  meta: {
    title: "Sadok Aziz Ben Younes — Ingénieur IA & LLM",
    description:
      "Ingénieur IA & LLM : architectures multi-agents, systèmes RAG et logiciels prêts pour la production — pipelines vocaux en streaming, services de vision par ordinateur, et le MLOps qui les garde fiables.",
    keywords: [
      "Ingénieur IA",
      "Ingénieur LLM",
      "Ingénieur logiciel",
      "Systèmes multi-agents",
      "RAG",
      "MLOps",
      "LLMOps",
      "LangGraph",
      "FastAPI",
      "Vision par ordinateur",
    ],
  },

  nav: {
    home: "Accueil",
    about: "Profil",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    availability: "Disponible pour de nouvelles opportunités",
    menu: "Menu",
  },

  hero: {
    greeting: "Bonjour, je suis",
    role: "Ingénieur IA & LLM · Ingénieur logiciel",
    roleShort: "Ingénieur IA & LLM",
    statement: "Je conçois des systèmes intelligents, des agents IA et des logiciels prêts pour la production.",
    description:
      "Je travaille là où les modèles de langage cessent d'être des démos pour devenir du logiciel : des graphes d'agents qui tiennent sous charge, une recherche qui renvoie le bon contexte, et les pipelines qui gardent un modèle fiable une fois déployé.",
    specialisms: [
      "Systèmes IA / LLM",
      "Architectures multi-agents",
      "Systèmes RAG",
      "MLOps / LLMOps",
      "Ingénierie backend",
      "Développement full-stack",
    ],
    ctaProjects: "Voir les projets",
    ctaContact: "Me contacter",
  },

  about: {
    label: "Profil",
    title: "L'ingénierie logicielle et l'IA, traitées comme une seule discipline.",
    body: [
      "Diplômé de l'ENSI en septembre 2026 en génie informatique. Au fil de trois stages, j'ai construit la même chose sous des formes différentes : un système d'IA qui doit résister au contact d'utilisateurs réels. Un assistant vocal qui répond en temps réel. Un pipeline de vision qui lit un flux de circulation en direct. Des outils d'agent qui permettent à un modèle d'agir sur un agenda et une boîte mail.",
      "Les problèmes intéressants se trouvaient rarement dans le modèle. Ils étaient dans l'orchestration, les modes de défaillance, le coût d'une réponse lente, et la capacité à savoir si une nouvelle version valait réellement mieux que la précédente. C'est ce travail que je veux approfondir.",
    ],
    flowLabel: "L'empilement des couches",
    flow: {
      aiEngineering: { title: "Ingénierie IA", note: "Transformer une capacité en composant doté d'un contrat." },
      llms: { title: "LLM", note: "Prompting, fine-tuning et quantification, choisis selon la contrainte." },
      agents: { title: "Agents", note: "Des graphes d'étapes spécialisées plutôt qu'un prompt qui fait tout." },
      data: { title: "Données", note: "Recherche, pipelines de features et versionnement pour des résultats reproductibles." },
      production: { title: "Systèmes en production", note: "Budgets de latence, observabilité, CI, et un chemin de mise en production assumé." },
    },
  },

  experience: {
    label: "Expérience",
    title: "Là où ces systèmes ont été construits.",
    lead: "Trois stages, chacun un cran plus haut dans la stack, du modèle vers le produit.",
    achievementsLabel: "Réalisations clés",
    benchmark: {
      label: "Benchmark de latence Voice Vibe",
      note: "Latence de bout en bout, de la voix entrante à la voix sortante. Les modèles nativement voix-à-voix suppriment les étapes STT et TTS, ce qui explique qu'ils se situent sous tous les systèmes en cascade présentés ici. Voice Vibe est le seul à exécuter un graphe de six agents à chaque tour de parole.",
      columns: { system: "Système", architecture: "Architecture", latency: "Latence de bout en bout" },
    },
    expand: "Voir le détail",
    collapse: "Masquer le détail",
    entries: {
      "ora-studio": {
        role: "Stage — Ingénierie IA appliquée & MLOps",
        summary:
          "Développement d'un assistant vocal multi-agents en temps réel et du pipeline MLOps derrière un modèle de recommandation, du feature engineering jusqu'à une mise en production sous conditions.",
        achievements: [
          "Développement de Voice Vibe, un plugin d'assistant vocal temps réel. Un prompt unique gérant toute une conversation parlée est lent et impossible à déboguer : je l'ai découpé en six agents LangGraph spécialisés composés en graphe, reliés par un pipeline STT/TTS en WebSocket, chaque étape étant observable pour qu'un mauvais tour de parole se trace jusqu'à un nœud précis.",
          "Latence de bout en bout mesurée autour de 975–1020 ms au p50, de la voix entrante à la voix sortante, les six agents s'exécutant à chaque tour.",
          "Comparaison de ce résultat avec cinq plateformes vocales de production, afin d'identifier les vrais goulets d'étranglement plutôt que les goulets supposés.",
          "Conception d'un pipeline MLOps complet (CRISP-DM) pour un moteur de recommandation d'acceptation de suggestions, avec un feature engineering sans fuite de données et des modèles LightGBM et de régression logistique calibrés, suivis dans MLflow et DVC.",
          "Mise en place d'une passerelle de promotion déterministe — shadow, puis gate, puis promote — afin qu'aucune version de modèle n'atteigne la production sans avoir été mesurée.",
          "Durcissement du service : défenses contre l'injection de prompt, limitation de débit WebSocket, et une CI GitHub Actions exécutant tests automatisés et audits de dépendances.",
        ],
      },
      "ba-consulting": {
        role: "Stage — Ingénierie IA & LLM",
        summary:
          "Construction de la couche d'outillage qui permet à un agent d'agir sur de vrais services, et d'un pipeline de fine-tuning pour faire tourner de petits modèles sur du matériel contraint.",
        achievements: [
          "Un agent qui ne peut que parler est un chatbot ; lui donner un accès réel à un agenda ou à une boîte mail transforme la question « que peut-il appeler, avec quels arguments » en problème de schéma. J'ai développé des serveurs MCP sur mesure pour Calendar et Gmail exposant des outils typés, afin que les options du modèle soient définies par un contrat plutôt que par un prompt.",
          "Déploiement des outils de base de données Gen AI Toolbox sur AWS Lambda en mode serverless, pour que l'exécution des outils passe à l'échelle sans serveur permanent.",
          "Construction d'un pipeline de fine-tuning QLoRA pour TinyLlama en quantification 4 bits, orchestré avec ZenML, MLflow et Docker pour l'entraînement sur GPU.",
        ],
      },
      "core-techs": {
        role: "Stage — Développement logiciel full-stack",
        summary: "Structures de données backend et le tableau de bord temps réel qui les exploite.",
        achievements: [
          "Optimisation des structures de données backend par tables de hachage, réduisant le coût des recherches sur le chemin critique.",
          "Création de composants de tableau de bord temps réel transformant des données véhicules brutes en informations exploitables.",
        ],
      },
    },
  },

  projects: {
    label: "Travaux sélectionnés",
    title: "Deux systèmes, du problème jusqu'à la production.",
    lead: "Chacun est présenté comme une étude de cas : le problème réel, ce que j'ai construit, et ce que cela a changé.",
    problemLabel: "Problème",
    contributionLabel: "Contribution",
    resultsLabel: "Résultat",
    glanceLabel: "En bref",
    viewCase: "Lire l'étude de cas",
    entries: {
      "sign-bridge": {
        title: "Sign Bridge",
        category: "Multimodal · Accessibilité",
        tagline: "Parole, texte et vidéo traduits en langue des signes par un avatar 3D.",
        problem:
          "La langue des signes n'est pas un encodage mot à mot de la parole. Une transcription littérale produit un résultat illisible pour une personne sourde : la traduction doit se faire au niveau du sens.",
        contribution:
          "Je l'ai construit en deux systèmes. Un backend FastAPI normalise parole, texte et vidéo en une représentation unique et la convertit en glose signée via une étape NLP fondée sur BERT, Whisper assurant la transcription lorsque l'entrée est parlée. Un client Unity anime ensuite un avatar 3D à partir des points clés dérivés d'OpenPose.",
        results: [
          "Un seul service FastAPI traite parole, texte et vidéo par un chemin de traduction unique, empêchant les trois points d'entrée de diverger.",
          "La traduction se fait au niveau de la glose et non de l'ordre des mots : la sortie suit la grammaire signée plutôt que la parole transcrite.",
          "La sortie est un avatar 3D rendu et non une vidéo pré-enregistrée : le vocabulaire peut s'étendre sans nouveau tournage.",
          "Le vocabulaire couvre environ 32 000 phrases et 4 000 mots isolés, auxquels s'ajoutent l'alphabet et les chiffres pour épeler tout ce qui n'y figure pas.",
        ],
      },
      "traffic-monitoring": {
        title: "Surveillance intelligente du trafic",
        category: "Vision par ordinateur · Systèmes temps réel",
        tagline: "Détection et suivi de véhicules, capture de plaques et estimation de vitesse par homographie.",
        problem:
          "Une vitesse mesurée en pixels n'est pas une vitesse, et la détection seule perd un véhicule dès qu'il passe derrière un plus gros. Sans identité entre les images ni correspondance entre la vue caméra et les distances réelles, aucun des chiffres attendus par un exploitant n'est fiable.",
        contribution:
          "J'ai construit le pipeline de bout en bout : YOLOv8 détecte les véhicules, ByteTrack conserve leur identité entre les images, un second modèle YOLOv8 repère les plaques dans chaque vignette de véhicule, et une homographie à neuf points convertit les positions en pixels vers des coordonnées réelles, faisant de la vitesse une véritable mesure. Les infractions sont ensuite signalées selon des limites propres à chaque type de véhicule.",
        results: [
          "L'estimation de vitesse atteint 98,6 % de précision, calculée via une calibration homographique à neuf points avec rejet des valeurs aberrantes plutôt qu'à partir du déplacement en pixels.",
          "Un évaluateur de qualité note chaque vignette de plaque (netteté, luminosité, taille) : une seule image lisible est conservée par véhicule au lieu de centaines de mauvaises.",
          "Le pipeline tient 30 FPS tout en détectant, suivant, lisant les plaques et contrôlant les infractions.",
          "Prometheus et Grafana exposent la latence par image, les taux de détection et le nombre d'infractions, pendant qu'un tableau de bord Streamlit diffuse les résultats en WebSocket au fil du traitement.",
        ],
      },
    },
    glanceKeys: {
      agents: "agents spécialisés",
      platformsBenchmarked: "plateformes comparées",
      latencyMs: "ms · p50, voix à voix",
      modalities: "modalités d'entrée",
      sentences: "phrases dans le vocabulaire",
      words: "mots isolés",
      fps: "FPS soutenus",
      speedAccuracy: "précision de l'estimation de vitesse",
      calibrationPoints: "points de calibration homographique",
    },
    archKeys: {
      capture: "Capture",
      speech: "Parole",
      orchestration: "Orchestration",
      synthesis: "Synthèse",
      input: "Entrée",
      transcribe: "Transcription",
      understanding: "Compréhension",
      mapping: "Correspondance",
      render: "Rendu",
      ingest: "Ingestion",
      detect: "Détection",
      plates: "Plaques",
      measure: "Mesure",
      observe: "Observation",
      present: "Restitution",
    },
  },

  caseStudy: {
    backLabel: "Tous les projets",
    sections: {
      problem: "Problème",
      objectives: "Objectifs",
      architecture: "Architecture",
      technologies: "Technologies",
      implementation: "Mise en œuvre",
      challenges: "Difficultés & solutions",
      results: "Résultats",
      lessons: "Enseignements",
    },
    challengeLabel: "Difficulté",
    solutionLabel: "Solution",
    entries: {
      "sign-bridge": {
        summary:
          "Sign Bridge traduit parole, texte et vidéo en langue des signes rendue par un avatar 3D, en traitant la langue des signes comme une langue cible et non comme un sous-titre. Le projet réunit deux bases de code : un backend FastAPI pour la transcription et le NLP, et un client Unity qui pilote l'avatar.",
        objectives: [
          "Accepter parole, texte et vidéo sans trois implémentations distinctes.",
          "Traduire au niveau du sens plutôt que mot à mot.",
          "Produire une animation dont le vocabulaire peut s'étendre sans nouveaux enregistrements.",
        ],
        implementation: [
          "Un service FastAPI normalisant les trois modalités d'entrée en une représentation interne unique avant toute traduction.",
          "Une étape NLP fondée sur BERT, appuyée par un prétraitement NLTK, convertissant l'entrée en glose signée.",
          "L'estimation de pose OpenPose fournissant le vocabulaire de points clés qui pilote le mouvement de l'avatar.",
          "Un avatar 3D Unity animant la séquence de gloses comme sortie destinée à l'utilisateur.",
        ],
        challenges: [
          {
            challenge: "La grammaire de la langue des signes ne suit pas l'ordre des mots parlés : une transcription littérale produit un résultat illisible.",
            solution: "Introduction de la glose comme représentation intermédiaire, faisant de la traduction une étape explicite plutôt qu'implicite.",
          },
          {
            challenge: "Trois modalités d'entrée risquent de devenir trois chemins de code divergents.",
            solution: "Convergence de toutes les entrées vers une représentation unique en amont : les étapes de traduction et de rendu n'ont qu'un seul contrat à respecter.",
          },
        ],
        lessons: [
          "Une représentation intermédiaire est ce qui transforme une démo en système : elle donne à chaque étape un contrat au lieu d'une hypothèse.",
          "Le travail d'accessibilité récompense davantage les échanges avec les personnes concernées que le choix du modèle.",
        ],
      },
      "traffic-monitoring": {
        summary:
          "Un service conteneurisé de surveillance du trafic qui analyse une vidéo et rapporte ce qui s'est réellement passé sur la route : quels véhicules, à quelle vitesse, et lesquels ont dépassé la limite de leur catégorie.",
        objectives: [
          "Maintenir une identité stable entre les images pour que chaque mesure appartienne à un véhicule précis.",
          "Produire des vitesses en unités réelles plutôt qu'en pixels par image.",
          "Capturer une seule bonne image de plaque par véhicule plutôt que des centaines d'inexploitables.",
          "Signaler les infractions selon des limites différentes par type de véhicule.",
          "Rendre le comportement du système et du modèle visible pendant le traitement.",
        ],
        implementation: [
          "YOLOv8 détecte voitures, camions, bus, motos et vélos ; ByteTrack attribue un identifiant de trace et le conserve malgré les occlusions.",
          "Un second modèle YOLOv8 détecte les plaques dans chaque vignette de véhicule, en parallèle du suivi plutôt qu'en seconde passe sur la vidéo.",
          "Un évaluateur de qualité note chaque vignette (netteté, luminosité, taille) et seul le meilleur cliché par trace est conservé.",
          "Une homographie à neuf points projette le plan de la route en coordonnées réelles, et le rejet des valeurs aberrantes écarte les mesures que la géométrie ne peut pas justifier.",
          "Un backend FastAPI exécute le traitement en tâche de fond et pousse les mises à jour image par image vers un tableau de bord Streamlit en WebSocket.",
          "Prometheus collecte la latence par image, le taux de détection, le temps d'inférence et le nombre d'infractions ; Grafana les restitue. L'ensemble tourne sous Docker Compose.",
        ],
        challenges: [
          {
            challenge: "La détection seule compte deux fois les véhicules et les perd derrière les plus gros, ce qui fausse tous les chiffres en aval.",
            solution:
              "ByteTrack maintient l'identité entre les images : comptages, vitesses et images de plaques se rattachent à un véhicule et non à des images isolées.",
          },
          {
            challenge: "La perspective fait qu'un même déplacement en pixels représente des distances réelles différentes selon la profondeur : une vitesse en pixels n'a pas de sens.",
            solution:
              "Une calibration homographique à neuf points projette le plan de la route en coordonnées réelles, avec rejet des lectures invraisemblables.",
          },
          {
            challenge: "Enregistrer une vignette de plaque à chaque image produit des milliers d'images le plus souvent illisibles.",
            solution: "Un évaluateur note netteté, luminosité et taille, et seule la meilleure vignette par véhicule est écrite sur disque.",
          },
          {
            challenge: "Un traitement vidéo long ne donne aucun retour à l'exploitant avant la fin.",
            solution: "Le traitement s'exécute en tâche de fond et diffuse progression, traces et infractions vers le tableau de bord en WebSocket.",
          },
        ],
        lessons: [
          "C'est le suivi, et non la détection, qui rend un pipeline de vision utile : l'identité conditionne toutes les métriques en aval.",
          "La calibration fait la différence entre un chiffre et une mesure. L'homographie a plus compté pour la précision que le choix du modèle.",
          "Décider ce qu'il ne faut pas stocker s'est révélé aussi important que décider quoi détecter.",
        ],
      },
    },
  },

  skills: {
    label: "Compétences",
    title: "La stack que j'utilise réellement.",
    lead: "Regroupée par couche du système.",
    groups: {
      ai: { name: "IA / Machine Learning", note: "Graphes d'agents, recherche, transformers et modèles de vision." },
      backend: { name: "Backend", note: "Services, transports et les bases de données derrière." },
      frontend: { name: "Frontend", note: "Interfaces typées au-dessus des systèmes ci-dessus." },
      mlops: { name: "MLOps / LLMOps", note: "Suivi d'expériences, versionnement, CI et passerelles de mise en production." },
      cloud: { name: "Cloud / Infrastructure", note: "Où cela tourne, et ce que cela coûte de le maintenir." },
    },
  },

  philosophy: {
    label: "Approche",
    title: "Ma façon de construire.",
    lead: "Cinq principes qui résistent au contact de la production.",
    pillars: {
      architecture: {
        title: "Architecture",
        body: "Concevoir des systèmes modulaires aux frontières explicites, pour qu'un composant se remplace sans réécriture et qu'une défaillance reste isolée.",
      },
      aiEngineering: {
        title: "Ingénierie IA",
        body: "Traiter un modèle de langage comme un composant doté d'un contrat, et non comme une boîte noire que l'on prompte plus fort quand elle dérape.",
      },
      performance: {
        title: "Performance",
        body: "Mesurer latence, débit et consommation avant d'optimiser. L'étape la plus lente est rarement celle que l'on soupçonne.",
      },
      mlops: {
        title: "MLOps",
        body: "Suivre expériences, données et versions de modèles pour qu'un résultat soit reproductible, et conditionner les mises en production pour attraper une régression avant les utilisateurs.",
      },
      security: {
        title: "Sécurité",
        body: "Valider à la frontière, isoler l'exécution, et instrumenter assez pour remarquer ce qui va mal.",
      },
    },
  },

  contact: {
    label: "Contact",
    title: "Ouvert aux postes d'ingénieur IA et LLM.",
    lead: "Basé à Sousse, Tunisie — ouvert au télétravail et à la mobilité. Le plus rapide reste l'e-mail.",
    emailLabel: "E-mail",
  },

  education: {
    label: "Formation",
    entries: {
      ensi: { degree: "Diplôme d'ingénieur en informatique" },
      essths: { degree: "Cycle préparatoire scientifique — Mathématiques et Physique" },
    },
    languagesLabel: "Langues",
    languages: { en: "Anglais", fr: "Français", ar: "Arabe", advanced: "Avancé", native: "Langue maternelle" },
  },

  footer: {
    credit: "Conçu et développé avec précision.",
    rights: "Tous droits réservés.",
  },

  ui: {
    downloadCv: "Télécharger le CV",
    demoPending: "Vidéo de démonstration à venir",
    viewLive: "Démo en ligne",
    toggleTheme: "Changer de thème",
    switchLanguage: "Switch to English",
    stackLabel: "Stack",
  },
};
