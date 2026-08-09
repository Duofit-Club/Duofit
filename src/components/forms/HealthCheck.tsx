import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  Clock,
  ShieldCheck,
  Sparkles,
  Gift,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import {
  QUESTIONS,
  PILLAR_INFO,
  PROGRAM_MAP,
  computeHealthCheckResult,
} from "./healthCheckData";

const WEB3FORMS_KEY = "5f818451-df1b-43db-8385-4f10aa4f9266";

// TODO: point this at your real "Start Your Journey / Connect" route.
const CONNECT_PATH = "/connect";
// TODO: replace with your DUOFIT WhatsApp number, digits only, country code first.
const WHATSAPP_NUMBER = "911234567890";

type Screen = "landing" | "question" | "lead" | "results";

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="px-1">
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= current ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <span className="text-xs text-muted-foreground">
          {current + 1} / {total}
        </span>
      </div>
    </div>
  );
}

function TrustPoint({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <span className="text-sm text-foreground">{text}</span>
    </div>
  );
}

export function HealthCheck() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [lead, setLead] = useState({ fullName: "", email: "", whatsapp: "" });
  const [submitting, setSubmitting] = useState(false);

  const question = QUESTIONS[qIndex];
  const result = useMemo(() => computeHealthCheckResult(answers), [answers]);

  const chooseOption = (idx: number) => {
    setSelected(idx);
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [question.id]: idx }));
      setSelected(null);
      if (qIndex < QUESTIONS.length - 1) {
        setQIndex((i) => i + 1);
      } else {
        setScreen("lead");
      }
    }, 200);
  };

  const goBack = () => {
    if (qIndex > 0) setQIndex((i) => i - 1);
    else setScreen("landing");
  };

  const submitLead = async () => {
    if (!lead.fullName || !lead.email) {
      toast.error("Please share your name and email to see your results.");
      return;
    }
    setSubmitting(true);

    const answersSummary = QUESTIONS.map((q) => {
      const idx = answers[q.id];
      return `${q.text}\nAnswer: ${idx != null ? q.options[idx].label : "—"}`;
    }).join("\n\n");

    const summaryBody =
      `HEALTH CHECK RESULT\n` +
      `Strength: ${PILLAR_INFO[result.strengthPillar].label}\n` +
      `Opportunity: ${PILLAR_INFO[result.opportunityPillar].label}\n` +
      `WhatsApp: ${lead.whatsapp || "—"}\n\n` +
      `${"=".repeat(40)}\nANSWERS\n${"=".repeat(40)}\n${answersSummary}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "DUOFIT Health Check",
          subject: `Health Check Lead — ${lead.fullName}`,
          name: lead.fullName,
          email: lead.email,
          message: summaryBody,
          replyto: lead.email,
          botcheck: false,
        }),
      });
      const data = await res.json();
      if (!data.success) console.warn("Web3Forms lead submission failed:", data);
    } catch (err) {
      console.warn("Web3Forms lead submission error:", err);
    } finally {
      setSubmitting(false);
      setScreen("results");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-background rounded-2xl border shadow-sm flex flex-col min-h-[600px]">
      {/* LANDING */}
      {screen === "landing" && (
        <div className="flex flex-col justify-center flex-1 px-6 py-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Do You Really Know How Healthy You Are?
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Or are you simply assuming you are?
          </p>
          <p className="text-sm text-muted-foreground mt-5 max-w-md mx-auto">
            Most people judge their health by weight or appearance — but lasting
            health is built through everyday habits. This quick check reflects
            those habits back to you.
          </p>

          <div className="mt-8 space-y-4 text-left max-w-xs mx-auto w-full">
            <TrustPoint icon={Clock} text="Takes less than 60 seconds" />
            <TrustPoint icon={ShieldCheck} text="No medical knowledge required" />
            <TrustPoint icon={Sparkles} text="Personalized health reflection" />
            <TrustPoint icon={Gift} text="Completely free" />
          </div>

          <button
            onClick={() => setScreen("question")}
            className="mt-10 inline-flex items-center justify-center gap-2 bg-primary text-foreground px-7 py-3.5 rounded-full text-sm font-semibold mx-auto hover:opacity-90 transition-opacity"
          >
            Start My Health Check
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* QUESTIONNAIRE */}
      {screen === "question" && (
        <div className="flex flex-col flex-1 px-6 py-6">
          <ProgressBar current={qIndex} total={QUESTIONS.length} />

          <div className="flex-1 flex flex-col justify-center py-8">
            <h2 className="text-lg md:text-xl font-semibold text-foreground text-center mb-8">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((opt, idx) => (
                <button
                  key={opt.label}
                  onClick={() => chooseOption(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all ${
                    selected === idx
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={goBack}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground self-start"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      )}

      {/* LEAD CAPTURE */}
      {screen === "lead" && (
        <div className="flex flex-col flex-1 justify-center px-6 py-10">
          <h2 className="text-xl font-bold text-foreground text-center">
            Almost there — where should we send your reflection?
          </h2>
          <p className="text-sm text-muted-foreground text-center mt-2 mb-8">
            Your personalized results are ready.
          </p>

          <div className="space-y-4 max-w-sm w-full mx-auto">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Full Name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                value={lead.fullName}
                onChange={(e) => setLead((p) => ({ ...p, fullName: e.target.value }))}
                placeholder="Your full name"
                className="w-full bg-transparent border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Email<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="email"
                value={lead.email}
                onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full bg-transparent border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                WhatsApp Number (optional)
              </label>
              <input
                type="tel"
                value={lead.whatsapp}
                onChange={(e) => setLead((p) => ({ ...p, whatsapp: e.target.value }))}
                placeholder="+91 ..."
                className="w-full bg-transparent border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <button
              onClick={submitLead}
              disabled={submitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {submitting ? "Loading..." : "Show My Results"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen === "results" && (
        <div className="flex flex-col flex-1 px-6 py-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
            Your DUOFIT Health Reflection
          </h2>

          <div className="space-y-4">
            <div className="border border-border rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
                Your Greatest Strength
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                {PILLAR_INFO[result.strengthPillar].label}
              </p>
              <p className="text-sm text-muted-foreground">
                {PILLAR_INFO[result.strengthPillar][result.strengthTier]}
              </p>
            </div>

            <div className="border border-border rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
                Your Biggest Opportunity
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                {PILLAR_INFO[result.opportunityPillar].label}
              </p>
              <p className="text-sm text-muted-foreground">
                {PILLAR_INFO[result.opportunityPillar][result.opportunityTier]}
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 bg-muted/40">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
                One Small Habit to Start Today
              </p>
              <p className="text-sm text-foreground">
                {PILLAR_INFO[result.opportunityPillar].habit}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic text-center mt-6">
            Health isn't something we achieve once. It's something we build every day.
          </p>

          <div className="flex flex-col gap-3 mt-8 max-w-sm w-full mx-auto">
            <Link
              to={CONNECT_PATH}
              className="inline-flex items-center justify-center gap-2 bg-primary text-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Your Personalized DUOFIT Health Review
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi! I just took the DUOFIT Health Check and want to talk to a coach."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm font-semibold hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with a DUOFIT Coach on WhatsApp
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground text-center mt-6">
            Recommended focus: {PROGRAM_MAP[result.opportunityPillar]}
          </p>
        </div>
      )}
    </div>
  );
}
