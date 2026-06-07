import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

// ← Paste your Web3Forms access key here
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const schema = z.object({
  name:    z.string().trim().min(1, "Please share your name").max(100),
  email:   z.string().trim().email("Please enter a valid email address"),
  phone:   z.string().trim().min(6, "Enter a valid phone number").max(20),
  goal:    z.string().trim().min(3, "Please describe your health goal").max(300),
  message: z.string().trim().max(1000).optional(),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const values = {
      name:    fd.get("name")    as string,
      email:   fd.get("email")   as string,
      phone:   fd.get("phone")   as string,
      goal:    fd.get("goal")    as string,
      message: fd.get("message") as string,
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
          access_key:  WEB3FORMS_KEY,
          from_name:   "DUOFIT Website",
          subject:     `New Enquiry from ${values.name} — DUOFIT`,
          // ── Formatted email body ──
          name:        values.name,
          email:       values.email,
          "Phone / WhatsApp": values.phone,
          "Health Goal":      values.goal,
          "Message":          values.message || "—",
          // Reply-to so you can reply directly to the user
          replyto:     values.email,
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
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <p className="eyebrow mb-2">Thank you</p>
        <h3 className="font-bold text-2xl md:text-3xl mt-2">Your message is in.</h3>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          A coach will reach out within 24 hours to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-7 md:p-10 space-y-5"
    >
      {/* Row 1 — Name + Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name"  name="name"  placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="your@email.com" required />
      </div>

      {/* Row 2 — Phone + Goal */}
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          placeholder="+91 ..."
          required
        />
        <Field
          label="Your Health Goal"
          name="goal"
          placeholder="e.g. Lose weight, build habits..."
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Anything else? <span className="normal-case text-muted-foreground/60">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Share your current situation, challenges or what you are looking for..."
          className="mt-2 w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none bg-white text-foreground font-medium placeholder:text-muted-foreground/50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full rounded-full py-4 text-sm font-semibold uppercase tracking-widest min-h-[48px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:brightness-100"
        style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
      >
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
        {loading ? "Sending…" : "Start the Conversation"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We reply personally within 24 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label:        string;
  name:         string;
  type?:        string;
  placeholder?: string;
  required?:    boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 bg-white text-foreground font-medium placeholder:text-muted-foreground/50"
      />
    </div>
  );
}