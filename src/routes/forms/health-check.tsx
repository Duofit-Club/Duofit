import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/forms/health-check")({
  head: () =>
    seo({
      title: "Free Health Check — DUOFIT",
      description:
        "A 60-second reflection on your real health habits — no BMI, no scores, no diagnosis. Just an honest, personalized starting point.",
      path: "/forms/health-check",
    }),
  component: HealthCheck,
});

// ── Types ──────────────────────────────────────────────────────────────
type Pillar =
  | "awareness"
  | "nutrition"
  | "movement"
  | "recovery"
  | "lifestyle"
  | "consistency";

type Level = "high" | "medium" | "low";

interface Option {
  label: string;
  points?: Partial<Record<Pillar, number>>;
  familySignal?: boolean; // flags a "for my family" style answer
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

// ── The 10 questions ──────────────────────────────────────────────────
// Q2 is demographic (life stage) and Q9 is motivation — both are used for
// program personalization rather than pillar scoring, per Step 3's intent.
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When was the last time you genuinely felt at your healthiest?",
    options: [
      { label: "Right now — I feel good", points: { awareness: 4, lifestyle: 2 } },
      { label: "A few months ago", points: { awareness: 2, consistency: 1 } },
      { label: "Over a year ago", points: { awareness: 1, consistency: 1 } },
      { label: "Honestly, I can't remember", points: { awareness: 1 } },
    ],
  },
  {
    id: 2,
    text: "Which stage of life are you in?",
    options: [
      { label: "Under 18" },
      { label: "18–24" },
      { label: "25–35" },
      { label: "36–45", familySignal: true },
      { label: "46–55", familySignal: true },
      { label: "Above 55" },
    ],
  },
  {
    id: 3,
    text: "Which statement best describes your energy on most days?",
    options: [
      { label: "High energy all day", points: { recovery: 4 } },
      { label: "Good energy, but I crash by afternoon", points: { recovery: 2 } },
      { label: "Low energy most of the day", points: { recovery: 1 } },
      { label: "Exhausted no matter how much I rest", points: { recovery: 1, awareness: 1 } },
    ],
  },
  {
    id: 4,
    text: "Which of these can you comfortably do today?",
    options: [
      { label: "Run or jog for 20+ minutes", points: { movement: 4 } },
      { label: "Brisk walk for 20–30 minutes", points: { movement: 3 } },
      { label: "Climb a few flights of stairs without getting winded", points: { movement: 2 } },
      { label: "I struggle with basic daily movement", points: { movement: 1 } },
    ],
  },
  {
    id: 5,
    text: "Looking at a typical week, which statement best describes your eating habits?",
    options: [
      { label: "Mostly home-cooked, balanced meals", points: { nutrition: 4 } },
      { label: "A mix of healthy and convenient food", points: { nutrition: 2 } },
      { label: "Mostly convenience or outside food", points: { nutrition: 1 } },
      { label: "Very irregular — I skip meals or eat late", points: { nutrition: 1, consistency: 1 } },
    ],
  },
  {
    id: 6,
    text: "Which statement feels most true about you?",
    options: [
      { label: "My daily routine supports my health", points: { lifestyle: 4 } },
      { label: "My routine is okay, but could be better", points: { lifestyle: 2 } },
      { label: "My routine works against my health", points: { lifestyle: 1 } },
      { label: "I don't really have a routine", points: { lifestyle: 1, consistency: 1 } },
    ],
  },
  {
    id: 7,
    text: "When life gets busy, what usually happens to your health?",
    options: [
      { label: "I stay consistent, no matter what", points: { consistency: 4 } },
      { label: "I slip a little, but I bounce back", points: { consistency: 3 } },
      { label: "Health is usually the first thing to go", points: { consistency: 1 } },
      { label: "I completely abandon healthy habits", points: { consistency: 1, awareness: 1 } },
    ],
  },
  {
    id: 8,
    text: "If your current lifestyle stayed exactly the same for the next five years, how would you feel about your future health?",
    options: [
      { label: "Confident and at ease", points: { awareness: 4 } },
      { label: "Fine, but a little uncertain", points: { awareness: 3 } },
      { label: "Concerned", points: { awareness: 2 } },
      { label: "Genuinely worried", points: { awareness: 1 } },
    ],
  },
  {
    id: 9,
    text: "What's the biggest reason you want better health?",
    options: [
      { label: "To feel more energetic and confident", points: { lifestyle: 2 } },
      { label: "To be there for my family long-term", points: { lifestyle: 2 }, familySignal: true },
      { label: "To prevent health issues before they start", points: { awareness: 2 } },
      { label: "To finally build habits that stick", points: { consistency: 2 } },
    ],
  },
  {
    id: 10,
    text: "Which statement best describes you today?",
    options: [
      { label: "I'm doing okay — I just want to optimize", points: { lifestyle: 3, consistency: 2 } },
      { label: "I know changes are needed but don't know where to start", points: { awareness: 2, consistency: 1 } },
      { label: "I've tried before and it didn't stick", points: { consistency: 1 } },
      { label: "I'm ready to commit to real change", points: { consistency: 3, awareness: 2 } },
    ],
  },
];

// ── Reflection text — 6 pillars × 3 variants each ────────────────────────
const REFLECTIONS: Record<Pillar, Record<Level, string>> = {
  awareness: {
    high: "You have a clear, honest picture of where your health stands today. That self-awareness is genuinely rare — and it's the foundation everything else builds on.",
    medium: "You have a general sense of your health, but a few blind spots are likely holding you back from real clarity.",
    low: "Right now, health probably feels more like a background worry than something you actively track. That's incredibly common — and it's usually the very first thing worth changing.",
  },
  nutrition: {
    high: "Your eating habits are already working in your favor. Most weeks, your plate is doing more good than harm — that consistency is a real strength.",
    medium: "Your nutrition is a mix of good intentions and convenience. Small, practical shifts — not a total overhaul — could make a real difference here.",
    low: "Food has likely become more about convenience than nourishment lately. This is one of the fastest areas to see change once it's approached practically, not restrictively.",
  },
  movement: {
    high: "Your body is used to moving, and it shows. Staying active isn't a struggle for you — it's part of how you already live.",
    medium: "You can move when you need to, but movement isn't yet a natural part of your day. A little more consistency here would compound quickly.",
    low: "Movement has likely taken a back seat to everything else going on. The good news — even small, regular movement creates outsized results when you're starting from here.",
  },
  recovery: {
    high: "Your energy holds up well through the day, which usually means your sleep and recovery are genuinely supporting you.",
    medium: "You're getting by, but that afternoon dip is a signal worth listening to. Recovery is often the most overlooked lever in how people actually feel.",
    low: "Feeling low on energy for a lot of the day is exhausting in more ways than one. Recovery — sleep, downtime, stress — is likely your highest-leverage starting point.",
  },
  lifestyle: {
    high: "Your daily routine is genuinely working with you, not against you. That's not luck — that's a lifestyle built with intention.",
    medium: "Your routine gets you through the day, but it's not fully designed around your health yet. A few structural shifts could change that.",
    low: "Right now, your day-to-day routine is likely working against the health you actually want. This is fixable — and often faster than people expect.",
  },
  consistency: {
    high: "When life gets hectic, your habits hold. That's the single hardest thing to build in health — and you already have it.",
    medium: "You slip sometimes when things get busy, but you find your way back. That resilience is more valuable than perfection ever would be.",
    low: "Health is often the first thing to go when life gets busy — and that's exactly why one-size-fits-all plans keep failing you. You don't need more willpower. You need a plan built for your actual life.",
  },
};

const SUGGESTED_HABITS: Record<Pillar, string> = {
  awareness:
    "Start by simply noticing — for one week, jot down how you feel each morning before doing anything else. Awareness always comes before change.",
  nutrition:
    "This week, try adding one home-cooked meal a day — not perfect, just one. Small additions beat big restrictions.",
  movement:
    "Start with a 10-minute walk after one meal a day. That's it. Consistency matters more than intensity here.",
  recovery:
    "Pick one night this week to be in bed 30 minutes earlier than usual. Recovery compounds faster than most people expect.",
  lifestyle:
    "Choose one small part of your morning or evening routine and make it slightly healthier this week — nothing else needs to change yet.",
  consistency:
    "Pick one habit — just one — and commit to it for 7 days, no matter how busy you get. Small, unbroken streaks build real consistency.",
};

const PILLAR_LABELS: Record<Pillar, string> = {
  awareness: "Awareness",
  nutrition: "Nutrition",
  movement: "Movement",
  recovery: "Recovery",
  lifestyle: "Lifestyle",
  consistency: "Consistency",
};

const WEB3FORMS_KEY = "5f818451-df1b-43db-8385-4f10aa4f9266";

// ── Component ─────────────────────────────────────────────────────────
type Stage = "landing" | "quiz" | "email" | "results";

export default function HealthCheck() {
  const [stage, setStage] = useState<Stage>("landing");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [skipEmail, setSkipEmail] = useState(false);

  const progress = ((qIndex) / QUESTIONS.length) * 100;

  function selectAnswer(option: Option) {
    const next = [...answers, option];
    setAnswers(next);
    if (qIndex + 1 < QUESTIONS.length) {
      setQIndex(qIndex + 1);
    } else {
      setStage("email");
    }
  }

  function goBack() {
    if (qIndex === 0) return;
    setAnswers(answers.slice(0, -1));
    setQIndex(qIndex - 1);
  }

  // ── Scoring ──
  const scores: Record<Pillar, number> = {
    awareness: 0, nutrition: 0, movement: 0, recovery: 0, lifestyle: 0, consistency: 0,
  };
  answers.forEach((a) => {
    if (!a.points) return;
    (Object.keys(a.points) as Pillar[]).forEach((p) => {
      scores[p] += a.points![p] ?? 0;
    });
  });

  const sortedPillars = (Object.keys(scores) as Pillar[]).sort(
    (a, b) => scores[b] - scores[a]
  );
  const strengthPillar = sortedPillars[0];
  const opportunityPillar = sortedPillars[sortedPillars.length - 1];

  function levelFor(pillar: Pillar): Level {
    const maxPossible = 16; // rough ceiling given the point scale used above
    const pct = scores[pillar] / maxPossible;
    if (pct >= 0.6) return "high";
    if (pct >= 0.3) return "medium";
    return "low";
  }

  const familyFlagged = answers.some((a) => a.familySignal);
  const recommendedProgram = familyFlagged
    ? { name: "Family Health & Habits", slug: "family-health-habits" }
    : { name: "Personal Health Coaching", slug: "personal-health-coaching" };

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (email) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            from_name: "DUOFIT Health Check",
            subject: `Health Check Lead — ${name || "Anonymous"}`,
            name: name || "Not provided",
            email,
            message:
              `Strength: ${PILLAR_LABELS[strengthPillar]}\n` +
              `Opportunity: ${PILLAR_LABELS[opportunityPillar]}\n` +
              `Recommended Program: ${recommendedProgram.name}\n\n` +
              answers.map((a, i) => `Q${i + 1}: ${a.label}`).join("\n"),
            replyto: email,
          }),
        });
      }
    } catch {
      // Non-blocking — the user still sees their results even if the
      // lead-capture request fails.
    } finally {
      setSubmitting(false);
      setStage("results");
    }
  }

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi DUOFIT, I just completed the Health Check and would like to talk about my results."
  )}`;

  // ── Render ──
  return (
    <SiteLayout>
      <section className="container-editorial py-12 md:py-20 min-h-[70vh] flex flex-col justify-center">

        {/* LANDING */}
        {stage === "landing" && (
          <Reveal>
            <div className="max-w-xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                DUOFIT Health Check™
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Do You Really Know<br />How Healthy You Are?
              </h1>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Or are you simply assuming you are?
              </p>
              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                Most people judge their health by weight or appearance. But
                lasting health is built through everyday habits — the ones
                that rarely show up on a scale.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                {[
                  { icon: Clock, text: "Takes less than 60 seconds" },
                  { icon: ShieldCheck, text: "No medical knowledge required" },
                  { icon: Sparkles, text: "Personalized health reflection" },
                  { icon: Gift, text: "Completely free" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2.5 bg-muted/50 rounded-xl p-3">
                    <t.icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-xs text-foreground">{t.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStage("quiz")}
                className="mt-9 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest rounded-full hover:brightness-110 active:scale-95 transition-all"
              >
                Start My Health Check <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        )}

        {/* QUIZ */}
        {stage === "quiz" && (
          <div className="max-w-xl mx-auto w-full">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>{qIndex + 1} / {QUESTIONS.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${((qIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <Reveal key={QUESTIONS[qIndex].id}>
              <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-7">
                {QUESTIONS[qIndex].text}
              </h2>

              <div className="flex flex-col gap-3">
                {QUESTIONS[qIndex].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => selectAnswer(opt)}
                    className="text-left border border-border bg-card rounded-2xl px-5 py-4 min-h-[52px] text-sm md:text-base text-foreground hover:border-primary hover:bg-primary/5 active:scale-[0.98] transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {qIndex > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back
                </button>
              )}
            </Reveal>
          </div>
        )}

        {/* EMAIL CAPTURE — optional, before results */}
        {stage === "email" && (
          <Reveal>
            <div className="max-w-md mx-auto text-center">
              <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Your reflection is ready.
              </h2>
              <p className="text-sm text-muted-foreground mb-7">
                Want us to send you a copy along with one personalized tip? Optional — you'll see your results either way.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-3 text-left">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your email (optional)"
                  className="w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground rounded-full py-3.5 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {submitting ? "Preparing…" : "See My Results"}
                </button>
              </form>
            </div>
          </Reveal>
        )}

        {/* RESULTS */}
        {stage === "results" && (
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Your DUOFIT Health Reflection
                </span>
                <p className="mt-4 text-base md:text-lg text-muted-foreground italic max-w-md mx-auto">
                  Health isn't something we achieve once. It's something we
                  build every day.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Your Greatest Strength — {PILLAR_LABELS[strengthPillar]}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {REFLECTIONS[strengthPillar][levelFor(strengthPillar)]}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                      Your Biggest Opportunity — {PILLAR_LABELS[opportunityPillar]}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {REFLECTIONS[opportunityPillar][levelFor(opportunityPillar)]}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                      One Small Habit to Start Today
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {SUGGESTED_HABITS[opportunityPillar]}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-3xl bg-primary text-primary-foreground p-7 md:p-9 text-center">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-2">
                  Based on your reflection
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {recommendedProgram.name} could be your next step.
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-6 max-w-md mx-auto">
                  A free consultation to turn this reflection into a real, practical plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3.5 text-sm font-semibold rounded-full hover:brightness-95 active:scale-95 transition-all"
                  >
                    Get Your Personalized DUOFIT Health Review <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold rounded-full hover:bg-primary-foreground/10 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        )}

      </section>
    </SiteLayout>
  );
}