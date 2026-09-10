import { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";

const WEB3FORMS_KEY = "5f818451-df1b-43db-8385-4f10aa4f9266";

const VALUE_PROPS = [
  "Personalised guidance",
  "Nutrition guidance",
  "Fitness / movement guidance",
  "Behaviour & habit coaching",
  "Accountability",
  "Understanding my health better",
  "Flexibility around my lifestyle",
  "Having someone to guide me when I struggle",
  "Regular progress reviews",
  "Setting realistic goals",
];

const CONSENT_OPTIONS = [
  { value: "full", label: "Yes — you may use my feedback on the DUOFIT website and social media." },
  { value: "initials", label: "Yes — but please use only my first name / initials." },
  { value: "private", label: "No — please keep my feedback private." },
] as const;

type Consent = (typeof CONSENT_OPTIONS)[number]["value"];

function Field({ label, sub, value, onChange, rows = 4 }: {
  label: string; sub?: string; value: string; onChange: (v: string) => void; rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm md:text-base font-semibold text-foreground mb-1">{label}</label>
      {sub && <p className="text-xs text-muted-foreground mb-2.5 italic">{sub}</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
      />
    </div>
  );
}

function SectionHeader({ children }: { children: string }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary border-b border-border pb-3 mb-7">
      {children}
    </h3>
  );
}

export function TestimonialFeedbackForm() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [selectedProps, setSelectedProps] = useState<string[]>([]);
  const [otherProp, setOtherProp] = useState("");
  const [q5, setQ5] = useState("");
  const [nps, setNps] = useState<number | null>(null);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [name, setName] = useState("");
  const [photoConsent, setPhotoConsent] = useState<"yes" | "no" | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function toggleProp(item: string) {
    setSelectedProps((prev) => {
      if (prev.includes(item)) return prev.filter((p) => p !== item);
      if (prev.length >= 3) return prev; // hard cap — "Select up to 3"
      return [...prev, item];
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Please share your name.");
    if (!consent) return setError("Please let us know if we can share your feedback.");
    if (nps === null) return setError("Please rate how likely you are to recommend DUOFIT.");
    if (!q1.trim() && !q5.trim()) return setError("Please answer at least one of the reflection questions — they mean the most to us.");

    setSubmitting(true);
    try {
      const consentLabel = CONSENT_OPTIONS.find((c) => c.value === consent)?.label ?? consent;
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "DUOFIT Testimonial Feedback",
          subject: `[${consent === "full" ? "✅ OK TO PUBLISH" : consent === "initials" ? "⚠️ INITIALS ONLY" : "🔒 PRIVATE — DO NOT PUBLISH"}] Testimonial from ${name}`,
          name,
          message:
            `${"=".repeat(44)}\nPERMISSION LEVEL — READ BEFORE USING THIS\n${"=".repeat(44)}\n` +
            `${consentLabel}\n` +
            `Photo with testimonial: ${photoConsent === "yes" ? "Yes" : photoConsent === "no" ? "No" : "Not answered"}\n\n` +
            `${"=".repeat(44)}\nYOUR DUOFIT JOURNEY\n${"=".repeat(44)}\n\n` +
            `1. What changes have you noticed in yourself since starting DUOFIT?\n→ ${q1 || "— not answered —"}\n\n` +
            `2. What positive impact has DUOFIT had on your overall health and everyday life?\n→ ${q2 || "— not answered —"}\n\n` +
            `3. What is one thing you do differently now compared with when you started?\n→ ${q3 || "— not answered —"}\n\n` +
            `${"=".repeat(44)}\nWHAT MADE THE DIFFERENCE?\n${"=".repeat(44)}\n\n` +
            `4. Most valuable aspects (up to 3): ${selectedProps.length ? selectedProps.join(", ") : "— none selected —"}` +
            `${otherProp ? `, Other: ${otherProp}` : ""}\n\n` +
            `5. What would you tell someone just starting their DUOFIT journey?\n→ ${q5 || "— not answered —"}\n\n` +
            `${"=".repeat(44)}\nRECOMMENDATION\n${"=".repeat(44)}\n\n` +
            `6. Likelihood to recommend DUOFIT (0–10): ${nps}/10`,
          replyto: undefined,
        }),
      });
      const data = await res.json();
      if (data.success) setDone(true);
      else setError("Something went wrong sending your feedback. Please try again.");
    } catch {
      setError("Something went wrong sending your feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-16 px-6">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Thank you for sharing your DUOFIT journey.</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Your reflection means a lot to us — and to everyone who reads it while deciding to start their own journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">

      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Client Feedback</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground italic">Your DUOFIT journey matters.</h1>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Take 2 minutes to tell us what has changed for you. Your feedback helps us understand
          the real impact of DUOFIT and, with your permission, may be featured on our website.
        </p>
      </div>

      {/* Section 1 */}
      <div>
        <SectionHeader>Your DUOFIT Journey</SectionHeader>
        <div className="space-y-7">
          <Field
            label="1. Looking back to when you started DUOFIT, what changes have you noticed in yourself?"
            sub="Think about your health, energy, fitness, nutrition, sleep, habits, confidence or everyday life."
            value={q1}
            onChange={setQ1}
          />
          <Field
            label="2. What positive impact has DUOFIT had on your overall health and everyday life?"
            sub="What feels different now compared with when you started?"
            value={q2}
            onChange={setQ2}
          />
          <Field
            label="3. What is one thing you do differently now compared with when you started?"
            sub="Tell us about one habit or behaviour that has changed."
            value={q3}
            onChange={setQ3}
            rows={3}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <SectionHeader>What Made The Difference?</SectionHeader>
        <div className="space-y-7">
          <div>
            <label className="block text-sm md:text-base font-semibold text-foreground mb-1">
              4. What has been most valuable about your DUOFIT experience?
            </label>
            <p className="text-xs text-muted-foreground mb-3 italic">
              Select up to 3. {selectedProps.length}/3 selected.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {VALUE_PROPS.map((item) => {
                const checked = selectedProps.includes(item);
                const disabled = !checked && selectedProps.length >= 3;
                return (
                  <label
                    key={item}
                    className={`flex items-center gap-2.5 border rounded-lg px-3.5 py-2.5 text-sm cursor-pointer transition-colors ${
                      checked ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
                    } ${disabled ? "opacity-40 cursor-not-allowed" : "hover:border-primary/40"}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => toggleProp(item)}
                      className="accent-primary"
                    />
                    {item}
                  </label>
                );
              })}
            </div>
            <input
              value={otherProp}
              onChange={(e) => setOtherProp(e.target.value)}
              placeholder="Other (optional)"
              className="mt-2.5 w-full border border-input rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <Field
            label="5. If someone was where you were when you started DUOFIT, what would you tell them?"
            sub="Your answer may be used as a testimonial."
            value={q5}
            onChange={setQ5}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <SectionHeader>Recommendation &amp; Permission</SectionHeader>
        <div className="space-y-8">

          <div>
            <label className="block text-sm md:text-base font-semibold text-foreground mb-4">
              6. How likely are you to recommend DUOFIT to someone looking to improve their health?
            </label>
            <div className="flex flex-wrap gap-2 justify-between">
              {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setNps(n)}
                  className={`h-10 w-10 rounded-full text-sm font-semibold border transition-all ${
                    nps === n
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Not at all likely</span>
              <span>Extremely likely</span>
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-base font-semibold text-foreground mb-3">
              7. Can we share your feedback as a DUOFIT testimonial?
            </label>
            <div className="space-y-2.5">
              {CONSENT_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 border rounded-xl px-4 py-3.5 text-sm cursor-pointer transition-colors ${
                    consent === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="consent"
                    checked={consent === opt.value}
                    onChange={() => setConsent(opt.value)}
                    className="accent-primary mt-0.5"
                  />
                  <span className="text-foreground">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Photo with testimonial?</label>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((v) => (
                  <label
                    key={v}
                    className={`flex-1 text-center border rounded-xl py-3 text-sm cursor-pointer capitalize transition-colors ${
                      photoConsent === v ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="photoConsent"
                      className="sr-only"
                      checked={photoConsent === v}
                      onChange={() => setPhotoConsent(v)}
                    />
                    {v}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-600 text-center">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-primary-foreground rounded-full py-4 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Submit Feedback"}
      </button>
    </form>
  );
}