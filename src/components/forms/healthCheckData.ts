// healthCheckData.ts — questions, pillar copy, and scoring logic
export type PillarKey =
  | "awareness"
  | "nutrition"
  | "movement"
  | "recovery"
  | "lifestyle"
  | "consistency";

export type Tier = "high" | "medium" | "low";

export const PILLARS: PillarKey[] = [
  "awareness",
  "nutrition",
  "movement",
  "recovery",
  "lifestyle",
  "consistency",
];

export type QuestionOption = {
  label: string;
  // Points this option contributes to one or more pillars (1-4 each).
  // Omit a pillar entirely if the option doesn't touch it.
  points?: Partial<Record<PillarKey, number>>;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
};

// Q2 (life stage) and Q9 (motivation) are segmentation/personalization only —
// they don't feed the pillar score. Everything else scores 1-4 pts per pillar.
export const QUESTIONS: Question[] = [
  {
    id: "q1_healthiest",
    text: "When was the last time you genuinely felt at your healthiest?",
    options: [
      { label: "Right now — I feel great", points: { awareness: 4 } },
      { label: "A few months ago", points: { awareness: 3 } },
      { label: "Over a year ago", points: { awareness: 2 } },
      { label: "Honestly, I can't remember", points: { awareness: 1 } },
    ],
  },
  {
    id: "q2_life_stage",
    text: "Which stage of life are you in?",
    options: [
      { label: "Under 18" },
      { label: "18–24" },
      { label: "25–35" },
      { label: "36–45" },
      { label: "46–55" },
      { label: "Above 55" },
    ],
  },
  {
    id: "q3_energy",
    text: "Which statement best describes your energy on most days?",
    options: [
      { label: "Energized and steady all day", points: { recovery: 4 } },
      { label: "Good in the morning, fades by afternoon", points: { recovery: 3 } },
      { label: "Tired most days, running on coffee", points: { recovery: 2 } },
      { label: "Exhausted no matter how much I sleep", points: { recovery: 1 } },
    ],
  },
  {
    id: "q4_physical",
    text: "Which of these can you comfortably do today?",
    options: [
      { label: "Run 2km without stopping", points: { movement: 4 } },
      { label: "Climb a few flights of stairs without getting winded", points: { movement: 3 } },
      { label: "Walk for 20–30 minutes comfortably", points: { movement: 2 } },
      { label: "Even light activity leaves me out of breath", points: { movement: 1 } },
    ],
  },
  {
    id: "q5_eating",
    text: "Looking at a typical week, which statement best describes your eating habits?",
    options: [
      { label: "Mostly home-cooked, balanced meals", points: { nutrition: 4 } },
      { label: "A mix of healthy choices and convenience food", points: { nutrition: 3 } },
      { label: "Mostly takeout or processed, rarely planned", points: { nutrition: 2 } },
      { label: "I skip meals and snack randomly", points: { nutrition: 1 } },
    ],
  },
  {
    id: "q6_self_statement",
    text: "Which statement feels most true about you?",
    options: [
      { label: "I know exactly what my body needs", points: { awareness: 4 } },
      { label: "I have a general idea but don't always act on it", points: { awareness: 3 } },
      { label: "I'm confused by all the conflicting health advice", points: { awareness: 2 } },
      { label: "I've stopped paying attention to my health altogether", points: { awareness: 1 } },
    ],
  },
  {
    id: "q7_busy_life",
    text: "When life gets busy, what usually happens to your health?",
    options: [
      { label: "I stay consistent no matter what", points: { consistency: 4 } },
      { label: "It slips a little, but I bounce back quickly", points: { consistency: 3 } },
      { label: "It's usually the first thing to go", points: { consistency: 2 } },
      { label: "I completely abandon any routine", points: { consistency: 1 } },
    ],
  },
  {
    id: "q8_five_years",
    text: "If your current lifestyle stayed exactly the same for the next five years, how would you feel about your future health?",
    options: [
      { label: "Confident — I'm on the right track", points: { lifestyle: 4 } },
      { label: "Okay, but I know I could do better", points: { lifestyle: 3 } },
      { label: "Worried about where I'm headed", points: { lifestyle: 2 } },
      { label: "Genuinely scared for my future health", points: { lifestyle: 1 } },
    ],
  },
  {
    id: "q9_motivation",
    text: "What's the biggest reason you want better health?",
    options: [
      { label: "More energy for everyday life" },
      { label: "To be there for my family long-term" },
      { label: "To feel confident in my body again" },
      { label: "A health scare made me realize I need to change" },
    ],
  },
  {
    id: "q10_today",
    text: "Which statement best describes you today?",
    options: [
      { label: "Solid habits — I just want to fine-tune them", points: { lifestyle: 4, consistency: 3 } },
      { label: "Some good habits, but plenty of gaps", points: { lifestyle: 3, consistency: 2 } },
      { label: "Starting from close to zero", points: { lifestyle: 2, consistency: 1 } },
      { label: "I don't even know where to start", points: { lifestyle: 1, consistency: 1 } },
    ],
  },
];

// Reusable per-pillar copy blocks (Step 4: Reflection Engine).
// High / Medium / Low variants + one suggested habit, assembled dynamically
// instead of writing a response for every combination.
export const PILLAR_INFO: Record<
  PillarKey,
  { label: string; high: string; medium: string; low: string; habit: string }
> = {
  awareness: {
    label: "Self-Awareness",
    high: "You have a clear, honest read on your own health — you notice how your habits affect you and adjust before things spiral.",
    medium: "You have a general sense of your health, but you don't always act on what you notice until something forces the issue.",
    low: "You've drifted from checking in with your body — health has become something you think about only when it goes wrong.",
    habit: "Take 60 seconds each morning to ask yourself: 'How does my body actually feel today?'",
  },
  nutrition: {
    label: "Nutrition",
    high: "Your eating pattern is genuinely working for you — mostly whole, balanced meals that fuel a full day.",
    medium: "Your nutrition is a mixed bag — some solid choices, some convenience gaps that quietly add up.",
    low: "Your current eating pattern is working against your energy and goals more than it's helping.",
    habit: "Add one home-cooked, protein-forward meal to your day this week — nothing else needs to change yet.",
  },
  movement: {
    label: "Movement",
    high: "Your body is capable and conditioned — movement is clearly a built-in part of your week, not an afterthought.",
    medium: "You can move when you need to, but your day-to-day activity has room to build real, lasting capacity.",
    low: "Basic movement is harder than it should be right now — that's the clearest signal your body is asking for change.",
    habit: "Take a 10-minute walk after one meal today — just one, no pressure to do more.",
  },
  recovery: {
    label: "Recovery",
    high: "You wake up with real energy most days — your body is getting the rest it needs to keep up with your life.",
    medium: "Your energy holds up for part of the day, but it's fading earlier than it should — likely a sleep or stress gap.",
    low: "You're running on empty more often than not, and no amount of coffee is going to fix that long-term.",
    habit: "Set a fixed wind-down time tonight — screens off 30 minutes before bed.",
  },
  lifestyle: {
    label: "Lifestyle Direction",
    high: "You're genuinely proud of the trajectory you're on — your current habits are building the future you want.",
    medium: "You're not off track, but you know there's a gap between where you're headed and where you want to end up.",
    low: "If nothing changes, five years from now looks a lot worse than today — and part of you already knows it.",
    habit: "Pick one habit you'd be proud to still have in five years, and do it once today.",
  },
  consistency: {
    label: "Consistency",
    high: "Your habits hold up under pressure — busy weeks don't derail you the way they derail most people.",
    medium: "You do well until life gets busy, then things slip — the habit is there, the resilience isn't yet.",
    low: "Right now, health is usually the first thing to go when life gets hectic, so it never gets a real chance to compound.",
    habit: "Choose one non-negotiable habit this week — something so small you'll do it even on your worst day.",
  },
};

// TODO: swap these for your real DUOFIT program names / links.
export const PROGRAM_MAP: Record<PillarKey, string> = {
  awareness: "DUOFIT Foundations Consultation",
  nutrition: "DUOFIT Nutrition Coaching Program",
  movement: "DUOFIT Movement & Strength Coaching",
  recovery: "DUOFIT Recovery & Sleep Reset",
  lifestyle: "DUOFIT 1:1 Lifestyle Coaching",
  consistency: "DUOFIT Habit-Building Coaching Program",
};

export type HealthCheckResult = {
  strengthPillar: PillarKey;
  opportunityPillar: PillarKey;
  strengthTier: Tier;
  opportunityTier: Tier;
  percents: Record<PillarKey, number>;
};

function tierOf(pct: number): Tier {
  if (pct >= 0.75) return "high";
  if (pct >= 0.4) return "medium";
  return "low";
}

// Step 3: Scoring Engine — never surfaced to the user as a number.
export function computeHealthCheckResult(
  answers: Record<string, number>
): HealthCheckResult {
  const totals = Object.fromEntries(PILLARS.map((p) => [p, 0])) as Record<PillarKey, number>;
  const maxPossible = Object.fromEntries(PILLARS.map((p) => [p, 0])) as Record<PillarKey, number>;

  QUESTIONS.forEach((q) => {
    const perQuestionMax: Partial<Record<PillarKey, number>> = {};
    q.options.forEach((opt) => {
      Object.entries(opt.points ?? {}).forEach(([p, v]) => {
        const key = p as PillarKey;
        perQuestionMax[key] = Math.max(perQuestionMax[key] ?? 0, v ?? 0);
      });
    });
    (Object.keys(perQuestionMax) as PillarKey[]).forEach((p) => {
      maxPossible[p] += perQuestionMax[p] ?? 0;
    });

    const selectedIdx = answers[q.id];
    if (selectedIdx != null) {
      const opt = q.options[selectedIdx];
      Object.entries(opt?.points ?? {}).forEach(([p, v]) => {
        totals[p as PillarKey] += v ?? 0;
      });
    }
  });

  const percents = Object.fromEntries(
    PILLARS.map((p) => [p, maxPossible[p] ? totals[p] / maxPossible[p] : 0])
  ) as Record<PillarKey, number>;

  const ranked = [...PILLARS].sort((a, b) => percents[b] - percents[a]);
  const strengthPillar = ranked[0];
  const opportunityPillar = ranked[ranked.length - 1];

  return {
    strengthPillar,
    opportunityPillar,
    strengthTier: tierOf(percents[strengthPillar]),
    opportunityTier: tierOf(percents[opportunityPillar]),
    percents,
  };
}
