/**
 * Single source of truth for the résumé. `/resume` renders all of it; the home
 * page pulls `work.filter((r) => r.current)` for its NOW section, so the two can
 * never drift apart. Transcribed from notes/about.md.
 */

export const profile = {
  name: 'Ethan Li',
  tagline: 'quant trading & ML systems',
  bio: "Rice '29, math and CS. I build trading signals and the systems that train them.",
  location: 'Houston, TX',
  email: 'ethanl@rice.edu',
  phone: '(425) 532-2968',
  links: [
    { label: 'github', href: 'https://github.com/ethanlirice' },
    { label: 'linkedin', href: 'https://linkedin.com/in/ethanliriceu/' },
    { label: 'email', href: 'mailto:ethanl@rice.edu' },
  ],
} as const;

export type Entry = {
  org: string;
  role: string;
  place?: string;
  dates: string;
  /** Shown in the NOW section on the home page. */
  current?: boolean;
  bullets: string[];
};

export const education = [
  {
    org: 'Rice University',
    role: 'BA Mathematics, BS Computer Science',
    place: 'Houston, TX',
    dates: 'Expected May 2029',
    bullets: [
      'GPA 3.79',
      'Coursework: Probability & Statistics, Real Analysis, Linear Algebra, Linear Regression, Algorithms, Honors Differential Equations',
    ],
  },
] satisfies Entry[];

export const honors = [
  'USA 4th Place — WorldQuant International Quant Championship 2025; 1 of 88 teams selected from 77,000 competitors.',
  'USA Top 100 — IMC Prosperity 4 Trading Competition 2025; top 1% of 30,000 teams globally as solo competitor.',
  'Akuna Capital Quant Trading Challenge — selected for market-making challenge; scored 17.6/20, won 10/16 sessions.',
  'D.E. Shaw Connect — selected for invitation-only early engagement program at NYC headquarters.',
];

export const work = [
  {
    org: 'DV Trading',
    role: 'Quantitative Trading Intern',
    place: 'New York City, NY',
    dates: 'Incoming Summer 2027',
    current: true,
    bullets: [],
  },
  {
    org: 'Rice University School of Engineering & Computing',
    role: 'ML Engineering Researcher',
    place: 'Houston, TX',
    dates: 'October 2026 — Present',
    current: true,
    bullets: [
      "Researching step-level preemption and GPU allocation for co-serving image/video diffusion models (targeting OSDI '27).",
    ],
  },
  {
    org: 'TriloTrader — Systematic Trading Startup',
    role: 'ML Engineering Intern',
    place: 'Remote',
    dates: 'April 2026 — August 2026',
    bullets: [
      'Optimized training for a neuroevolutionary trading system deployed live with real capital (+29.5% vs BTC -3.5% TTM).',
      'Converted CPU-bound evolutionary search to parallel GPU-batched workload, reducing training from 2 weeks to 4 days.',
      'Re-architected monolithic engine into modular orchestrator (Docker, Kubernetes) with Weights & Biases tuning sweeps.',
    ],
  },
  {
    org: 'University of Washington RAIVN Lab',
    role: 'Research Intern',
    place: 'Seattle, WA',
    dates: 'May 2026 — August 2026',
    bullets: [
      'Developed sequence distillation of video diffusion transformers, targeting the 2,880x memory overhead of KV caches.',
      'Implemented teacher-student layer-wise hidden-state matching to preserve model behavior over arbitrary future tokens.',
    ],
  },
  {
    org: 'WorldQuant',
    role: 'Research Consultant Program',
    place: 'Remote',
    dates: 'April 2025 — Present',
    current: true,
    bullets: [
      'Developed 27 cross-sectional US equity signals accepted by WorldQuant, with median 1.4 Sharpe out-of-sample.',
      'Analyzed 80+ fields (options, sentiment, fundamentals, analyst, etc.) for signal hypotheses, validating stability and decay.',
      'Defended hypothesis design and overfitting controls in live Q&A to WorldQuant researchers at IQC USA Nationals.',
    ],
  },
  {
    org: 'University of Washington Elementary Particle Experiment',
    role: 'Research Intern',
    place: 'Seattle, WA',
    dates: 'July 2024 — July 2025',
    bullets: [
      'Researched signal discrimination of doubly charged Higgs bosons from same-sign WW background in ATLAS simulation.',
      'Analyzed 31 kinematic features over 75K+ collision events, iterating feature sets against univariate AUC and performance.',
      'Trained boosted decision trees to 95% test AUC and presented findings at the UW Undergraduate Research Symposium.',
    ],
  },
] satisfies Entry[];

export const clubs = [
  {
    org: 'RiceApps',
    role: 'Software Developer',
    place: 'Houston, TX',
    dates: 'September 2026 — Present',
    current: true,
    bullets: [
      'Building a search engine for OCR text from ~1,300 digital archives for the Baker Institute (InvenioRDM, OpenSearch).',
      'Designing the indexing and retrieval pipeline, from extracted text to ranked, filterable results linked to source PDFs.',
    ],
  },
  {
    org: 'White Lights — Computer Vision AI Powerlifting Judge',
    role: 'Independent Project',
    dates: 'October 2025 — Present',
    bullets: [
      'Deployed a real-time CV powerlifting judge with YOLO11-Pose and OpenCV, used by 25+ competitive powerlifters.',
      'Validated on 5,000+ reps achieving 91% accuracy under competition conditions, with <120ms CPU inference latency.',
    ],
  },
  {
    org: 'Powerlifting',
    role: 'Club Founder & Competitive Athlete',
    dates: 'January 2022 — Present',
    bullets: [
      "Founded school's first powerlifting club, providing 70+ members with free lifting programs and personalized coaching.",
      'US Powerlifting Association 2024 Nationals 5th Place, 7x State Record Holder, 1st Place in WA State 2023-2024.',
    ],
  },
] satisfies Entry[];

export const skills = [
  { label: 'Languages', items: ['Python', 'C++', 'Java', 'SQL'] },
  {
    label: 'Libraries',
    items: ['NumPy', 'Pandas', 'PyTorch', 'LightGBM', 'HuggingFace Transformers', 'OpenCV'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git/GitHub', 'Docker', 'Kubernetes', 'Weights & Biases', 'AWS', 'Linux', 'FastAPI', 'SQLite'],
  },
  {
    label: 'Interests',
    items: ['powerlifting', 'music', 'traveling', 'fashion', "Rubik's cubes (15-second solve)", 'basketball', 'chess'],
  },
];
