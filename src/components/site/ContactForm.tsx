import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const WEB3FORMS_KEY = "5f818451-df1b-43db-8385-4f10aa4f9266";

const GOALS = [
  "Weight Management",
  "Improve Fitness",
  "Build Healthier Habits",
  "Better Energy & Lifestyle",
  "Family Health & Habits",
  "General Health Improvement",
  "Not Sure Yet",
];

const AREAS = [
  "Nutrition",
  "Fitness & Movement",
  "Sleep & Recovery",
  "Stress & Lifestyle",
  "Healthy Habits",
  "Family Health",
  "Weight Management",
];

const READINESS = ["Just exploring", "Looking to start soon", "Ready to get started"];

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email address"),
  goal: z.string().trim().min(1, "Please select your primary goal"),
  areas: z.array(z.string()).optional(),
  challenge: z.string().trim().min(3, "Please share your biggest challenge").max(500),
  readiness: z.string().trim().min(1, "Please let us know how ready you are"),
  notes: z.string().trim().max(1000).optional(),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [areas, setAreas] = useState<string[]>([]);

  function toggleArea(area: string) {
    setAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const values = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      goal: fd.get("goal") as string,
      areas,
      challenge: fd.get("challenge") as string,
      readiness: fd.get("readiness") as string,
      notes: fd.get("notes") as string,
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "DUOFIT Website",
          subject: `New Enquiry from ${values.name} — DUOFIT`,
          Name: values.name,
          Email: values.email,
          "Phone / WhatsApp": values.phone,
          "Primary Goal": values.goal,
          "Areas Interested In": values.areas.length ? values.areas.join(", ") : "—",
          "Biggest Challenge": values.challenge,
          "Readiness to Start": values.readiness,
          "Additional Notes": values.notes || "—",
          replyto: values.email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setDone(true);
        toast.success("Message sent! We will reach out within 24 hours.");
      } else {
        toast.error("Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch {
      toast.error("Could not send. Please WhatsApp or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">✅</div>
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
          Thank you
        </p>
        <h3 className="font-bold text-2xl">Your message is in.</h3>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          A coach will reach out within 24 hours to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+91 98765 43210" required />
      </div>

      {/* Email */}
      <Field label="Email" name="email" type="email" placeholder="your@email.com" required />

      {/* Goal dropdown */}
      <div>
        <label className="text-sm font-semibold text-foreground">
          What best describes your goal? <span className="text-red-500">*</span>
        </label>
        <select
          name="goal"
          defaultValue=""
          required
          className="mt-2 w-full bg-transparent border border-input rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
        >
          <option value="" disabled>Select your primary goal</option>
          {GOALS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* Areas — multi-select checkboxes */}
      <div>
        <label className="text-sm font-semibold text-foreground">
          Which areas would you like help with?{" "}
          <span className="text-xs font-normal text-muted-foreground">(Select all that apply)</span>
        </label>
        <div className="mt-3 grid sm:grid-cols-3 gap-3">
          {AREAS.map((area) => (
            <label key={area} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={areas.includes(area)}
                onChange={() => toggleArea(area)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      {/* Biggest challenge */}
      <div>
        <label className="text-sm font-semibold text-foreground">
          What is your biggest challenge right now? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="challenge"
          rows={3}
          required
          placeholder="e.g. Lack of time, poor consistency, stress, unhealthy eating habits, low energy, difficulty losing weight..."
          className="mt-2 w-full bg-transparent border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
        />
      </div>

      {/* Readiness — radio */}
      <div>
        <label className="text-sm font-semibold text-foreground">
          How ready are you to start? <span className="text-red-500">*</span>
        </label>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {READINESS.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input type="radio" name="readiness" value={r} required className="h-4 w-4 accent-primary" />
              {r}
            </label>
          ))}
        </div>
      </div>

      {/* Optional notes */}
      <div>
        <label className="text-sm font-semibold text-foreground">
          Anything else you'd like us to know?{" "}
          <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Share anything that can help us understand you better..."
          className="mt-2 w-full bg-transparent border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-foreground text-background py-4 text-sm font-semibold uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all disabled:opacity-50"
      >
        {loading ? "Sending…" : "Start the Conversation"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
         We personally respond within 24 hours.
      </p>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-transparent border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}