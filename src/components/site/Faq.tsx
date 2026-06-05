import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is this beginner friendly?", a: "Absolutely. Most of our members start from zero or are returning after long breaks. We design every plan around your current rhythm — not someone else's." },
  { q: "Is nutrition included?", a: "Yes. Every program includes personalised nutrition guidance built around your culture, taste and schedule. No food is off-limits." },
  { q: "Is the coaching online?", a: "Yes — coaching happens through video calls, chat, and a private dashboard, so you can work with us from anywhere." },
  { q: "How much time do I need each week?", a: "Most members commit 3 – 5 hours per week, including workouts, check-ins and meal planning. We adapt to busy weeks." },
  { q: "Is this sustainable long term?", a: "Sustainability is the whole point. We focus on habits and identity — not 30-day sprints that fall apart." },
  { q: "Do I need a gym?", a: "Not at all. We design plans for home, gym, hotel rooms or parks — whatever fits your life." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-7 text-left"
            >
              <span className="font-display text-xl md:text-2xl">{f.q}</span>
              <Plus className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-primary" : "text-muted-foreground"}`} />
            </button>
            <div
              className="overflow-hidden transition-all duration-500 ease-out"
              style={{ maxHeight: isOpen ? 240 : 0, opacity: isOpen ? 1 : 0 }}
            >
              <p className="pb-7 pr-12 text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
