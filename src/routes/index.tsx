import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  ArrowRight,
  Dumbbell,
  Leaf,
  ShieldCheck,
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";
import { seo } from "@/lib/seo";
import heroImg from "@/assets/founders.jpeg";
import personalHealth from "@/assets/personal-health.png";
import nutritionImg from "@/assets/hero-lifestyle-new.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "DUOFIT — Health, Designed to Last. | Nutrition & Fitness Coaching",
      description:
        "Personalised fitness and nutrition coaching built around your goals, lifestyle and long-term health.",
      path: "/",
    }),
  component: Home,
});

// ── Programs ──────────────────────────────────────────────────────────────
const programs = [
  {
    slug: "personal-health-coaching",
    icon: Dumbbell,
    img: personalHealth,

    title: "Personal Health Coaching",

    desc: "A holistic approach to nutrition, fitness, sleep and lifestyle — built around your goals, not a generic plan.",

  },
  {
    slug: "family-health-habits",

    icon: Leaf,
    img: "https://i.pinimg.com/originals/3e/d3/38/3ed33865182657c8cb456c0862ae2386.jpg",

    title: "Family Health & Habits",
    desc: "Helping families build healthier routines together through practical nutrition, movement and everyday habits.",

  },
];

// ── Why DUOFIT checklist ────────────────────────────────────────────────
const whyChecklist = [
  "Personalised Plans",
  "Evidence-Informed",
  "Sustainable Results",
  "Coach Support",
  "Real Accountability",
];

// ── Testimonials ────────────────────────────────────────────────────────
// ⚠️ These are placeholder testimonials matching the reference layout —
// swap in real client quotes before publishing.
const testimonials = [
  {
    quote: "It has been a truly great learning experience. I particularly appreciated how you asked thoughtful and relevant questions that helped me reflect deeply and uncover some of my hidden strengths and traits. Our discussions about practical ways to work on these areas were extremely valuable and actionable.",
    name: "Amrita Das",
    role: "Corporate Professional",
  },
  {
    quote: "The biggest change for me has been maintaining constant energy levels throughout the day — I used to have energy crashes by afternoon, and evenings were an ordeal. Working with DUOFIT, I've noticed a significant improvement. The experience is extremely different from other fitness apps and coaches — there's no standardized formula here. The diet, workout and nutritional gaps are personalized according to your body composition and the concerns you're actually facing, and that's really the best part.",
    name: "Manaswini",
    role: "Corporate Employee",
  },
];

// ── Existing interactive Venn diagram — unchanged from current site ─────
function VennDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    { label: "Nutrition", desc: "Simple food choices that work with your routine and availability.", cx: 300, cy: 170, light: "#34d399", dark: "#059669" },
    { label: "Fitness & Movement", desc: "Helping your body move consistently instead of extreme routines.", cx: 430, cy: 300, light: "#fb923c", dark: "#ea580c" },
    { label: "Family Health", desc: "Helping families build healthier routines together.", cx: 300, cy: 430, light: "#c084fc", dark: "#7c3aed" },
    { label: "Healthy Habits", desc: "Small sustainable changes that become easier to maintain.", cx: 170, cy: 300, light: "#38bdf8", dark: "#0284c7" },
  ];

  const R = 130;
  const CX = 300;
  const CY = 300;

  const displayItems = active !== null
    ? [...items.filter((_, i) => i !== active), items[active]]
    : items;

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-full max-w-[700px] mx-auto overflow-visible">
        <svg viewBox="0 0 600 600" className="w-full h-auto" style={{ overflow: "visible" }}>
          <defs>
            {items.map((item, i) => (
              <radialGradient key={i} id={`rg${i}`} cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor={item.light} />
                <stop offset="100%" stopColor={item.dark} />
              </radialGradient>
            ))}
            <filter id="shadow">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.22" />
            </filter>
          </defs>

          {displayItems.map((item) => {
            const i = items.findIndex((x) => x.label === item.label);
            const isActive = active === i;
            const isInactive = active !== null && active !== i;
            return (
              <g
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  cursor: "pointer",
                  filter: isActive ? `drop-shadow(0 0 30px ${item.dark})` : "url(#shadow)",
                }}
              >
                <circle
                  cx={item.cx} cy={item.cy}
                  r={isActive ? R + 18 : R}
                  fill={`url(#rg${i})`}
                  fillOpacity={isActive ? 0.95 : isInactive ? 0.45 : 0.78}
                  style={{ transition: "all .35s ease" }}
                />
                {item.label === "Fitness & Movement" ? (
                  <>
                    <text x={item.cx} y={item.cy - 10} textAnchor="middle" fill="white" fontSize="14" fontWeight="900" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" paintOrder="stroke">FITNESS &</text>
                    <text x={item.cx} y={item.cy + 12} textAnchor="middle" fill="white" fontSize="14" fontWeight="900" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" paintOrder="stroke">MOVEMENT</text>
                  </>
                ) : (
                  <text x={item.cx} y={item.cy + 6} textAnchor="middle" fill="white" fontSize="15" fontWeight="900" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" paintOrder="stroke" letterSpacing="0.4">
                    {item.label.toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}

          <g style={{ pointerEvents: "none" }}>
            <circle cx={CX} cy={CY} r="70" fill="#ffffff" stroke="var(--color-primary)" strokeWidth="4"
              style={{ filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.15))" }}
            />
            <text x={CX} y={CY + 6} textAnchor="middle" fill="var(--color-primary)" fontSize="20" fontWeight="800">
              HEALTH
            </text>
          </g>
        </svg>
      </div>

      <div className="w-full max-w-[700px] min-h-[80px]">
        {active !== null ? (
          <div className="rounded-xl p-4 border text-center"
            style={{ background: `${items[active].light}15`, borderColor: `${items[active].light}55` }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: items[active].dark }}>
              {items[active].label}
            </p>
            <p className="text-sm text-muted-foreground">{items[active].desc}</p>
          </div>
        ) : (
          <p className="text-center text-xs text-muted-foreground italic">
            <span className="md:hidden">Tap</span>
            <span className="hidden md:inline">Hover</span>
            {" "}a circle to learn more
          </p>
        )}
      </div>
    </div>
  );
}

const shimmerBtn =
  "group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest rounded-full min-h-[44px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95";
const shimmerSpan =
  "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none";

// ── Section 2 data — matches your live "Does This Sound Like You" content ──
const soundLikeYou = [
  { text: "Trying to lose weight but struggling to stay consistent", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop&crop=center" },
  { text: "Poor sleep, low energy and feeling constantly tired", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=200&h=200&fit=crop&crop=center" },
  { text: "Feeling confused by conflicting health and nutrition advice", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop&crop=center" },
  { text: "Starting healthy routines and stopping after a few weeks", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop&crop=center" },
  { text: "Busy work and family schedules leaving little time for yourself", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop&crop=center" },
  { text: "Knowing what to do but finding it hard to follow through consistently", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center" },
];

// ── Section 3 — Programs, expanded with benefit bullets ──
// ⚠️ Draft copy — swap in your exact programs.tsx bullets if these differ.
const programTiers = [
  {
    n: "01",
    name: "DUOFIT PERSONAL",
    tagline: "Your health. Personalised.",
    desc: "1:1 health coaching built around your individual goals, lifestyle, challenges and health priorities—with personalised guidance and ongoing support from your coach.",
    highlights: ["Personalised nutrition & fitness plan", "Direct WhatsApp access to your coach", "Ongoing plan adjustments"],
    bestFor: "Individuals who want personalised attention and a plan built specifically around them.",
    viewHref: "/programs#duofit-personal",
  },
  {
    n: "02",
    name: "DUOFIT FAMILY",
    tagline: "Build healthier habits together.",
    desc: "Family health coaching designed to help parents and children create healthier routines around nutrition, movement, sleep and everyday life.",
    highlights: ["Family nutrition & activity guidance", "Age-appropriate habit building", "Regular coaching & accountability"],
    bestFor: "Families who want to create healthier habits and a healthier lifestyle together.",
    viewHref: "/programs#duofit-family",
  },
];

// ── Section 4 — 5-step process timeline (replaces Venn diagram entirely) ──
const processSteps = [
  { n: "01", title: "Understand", desc: "We begin by understanding your lifestyle, health history, daily routine and personal goals.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces" },
  { n: "02", title: "Personalize", desc: "Every recommendation is tailored to your lifestyle, food preferences and schedule.", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&h=200&fit=crop&crop=center" },
  { n: "03", title: "Coach", desc: "Regular guidance, accountability and encouragement help you stay consistent.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop&crop=center" },
  { n: "04", title: "Measure", desc: "We measure progress through healthier habits, energy levels and sustainable improvements.", img: "https://images.unsplash.com/photo-1551651056-2ec0d3ba1e0b?w=200&h=200&fit=crop&crop=center" },
  { n: "05", title: "Sustain", desc: "The goal isn't another short-term program. It's creating healthy habits that last.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop&crop=center" },
];

function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop — staggered with dashed wavy connector */}
      <div className="hidden md:block relative">
        <svg viewBox="0 0 1000 100" className="absolute inset-x-0 top-[52px] w-full h-[80px] pointer-events-none z-0" preserveAspectRatio="none">
          <path
            d="M 60 20 Q 190 -15, 310 55 T 560 55 T 810 20 T 940 55"
            fill="none" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="5 5"
          />
        </svg>
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className={`flex flex-col items-center text-center ${i % 2 === 1 ? "mt-16" : ""}`}>
                <div className="relative">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-border shadow-sm">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {s.n}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-bold text-primary italic">{s.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[170px]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile — vertical stack */}
      <div className="md:hidden flex flex-col gap-7">
        {processSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 80}>
            <div className="flex gap-4 items-start">
              <div className="relative shrink-0">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-border shadow-sm">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center shadow-sm">
                  {s.n}
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-primary italic">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// ── Section 6 — FAQ accordion ──
// ⚠️ Draft copy in DUOFIT's established voice — edit freely.
const faqs = [
  { q: "How is DUOFIT different from a typical diet or workout plan?", a: "DUOFIT looks at your health as a whole rather than focusing on just one goal. Your nutrition, fitness, sleep, energy and everyday habits are interconnected, so we build an approach around your goals, lifestyle and challenges—not a one-size-fits-all plan." },
  { q: "Do I need to already be fit or healthy to join DUOFIT?", a: "No. DUOFIT is designed for different starting points and fitness levels. Your program is based on where you are today and adapted to your goals, lifestyle and current abilities." },
  { q: "Which DUOFIT program is right for me?", a: "It depends on the level of support you're looking for. DUOFIT 101 is a structured group program for those looking for guidance, accountability and the fundamentals. DUOFIT Personal is 1:1 coaching for individuals who want a personalised approach built around their specific goals. DUOFIT Family is designed for families who want to build healthier habits together. If you're unsure, you can speak with us and we'll help you identify the right starting point." },
  { q: "What does a typical week of coaching look like?", a: "This depends on the program you choose. You may have weekly goals, nutrition and movement guidance, coaching sessions, progress reviews and ongoing accountability. With Personal Coaching, your approach and support are tailored specifically to you." },
  { q: "Can DUOFIT help with weight loss and body recomposition?", a: "Yes. Weight management can be part of your DUOFIT journey, including fat loss, weight loss and body recomposition. We look beyond the number on the scale and consider nutrition, fitness, habits, sleep and lifestyle when building your approach." },
  { q: "Do I need to follow a strict diet or workout routine?", a: "No. DUOFIT focuses on practical changes that can fit into your lifestyle. Nutrition guidance takes your food preferences and routines into account, while movement recommendations are adapted to your current level and goals." },
  { q: "How long does it take to see results?", a: "Results vary from person to person and depend on your starting point, goals and consistency. Rather than promising a fixed outcome or timeline, we focus on building sustainable changes and tracking meaningful progress throughout your journey." },
  { q: "How do I get started?", a: "Choose the DUOFIT program that best fits your needs, or get in touch if you're unsure. We'll understand your goals and help you determine the right next step." },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-2xl mx-auto divide-y divide-border border-t border-b border-border">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-sm md:text-base font-semibold text-foreground">{item.q}</span>
              <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-sm text-muted-foreground leading-relaxed pr-8">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const painPoints = [
  "Trying to lose weight but struggling to stay consistent",
  "Poor sleep, low energy and feeling constantly tired",
  "Feeling confused by conflicting health and nutrition advice",
  "Starting healthy routines and stopping after a few weeks",
  "Busy work and family schedules leaving little time for yourself",
  "Knowing what to do but finding it hard to follow through consistently",
];

const outcomes = [
  "More energy throughout the day",
  "Better routines you can actually maintain",
  "A healthier lifestyle without feeling overwhelmed",
];

function Home() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

  return (
    <SiteLayout>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="A balanced, healthy everyday life"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-editorial relative z-10 py-20">
          <Reveal>
            <div className="max-w-lg bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Health is more than just food, fitness, or a number on the
                scale. It's about how you eat, how you move, how you sleep,
                how you feel, and the habits that shape your everyday life.
              </p>
              <p className="mt-4 text-base md:text-lg text-foreground leading-relaxed">
                At DUOFIT, we look at the whole picture. We understand your
                goals, lifestyle, and challenges, identify what may be
                getting in the way, and build a practical plan around
                you—bringing together nutrition, fitness, and healthy habits
                in a way that fits your real life.
              </p>
              <Link
                to="/contact"
                className={`${shimmerBtn} mt-7`}
                style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
              >
                <span className={shimmerSpan} />
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — Does This Sound Like You (redesigned: problem → possibility) */}
      <section className="bg-background">
        <div className="container-editorial py-20 md:py-28">

          {/* Heading */}
          <Reveal>
            <div className="max-w-2xl mb-14 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                A Familiar Story
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
                Does this sound like you?
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[55%_45%] gap-14 lg:gap-16 items-start">

            {/* LEFT — You're not alone */}
            <div>
              <div>
                {painPoints.map((point, i) => (
                  <Reveal key={point} delay={100 + i * 60}>
                    <div className="group border-b border-border first:border-t">
                      <div className="flex items-start gap-5 md:gap-7 py-6 md:py-7">
                        <span className="text-2xl md:text-3xl font-bold text-border group-hover:text-primary transition-colors duration-300 tabular-nums shrink-0 w-10 md:w-12">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base md:text-lg text-foreground leading-relaxed pt-1 group-hover:translate-x-1.5 transition-transform duration-300">
                          {point}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* RIGHT — You're not alone (no image, centered card) */}
            <Reveal delay={140}>
              <div className="h-full flex items-center justify-center">
                <div className="w-full max-w-md bg-cream border border-border rounded-2xl p-8 md:p-10 text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                    You're not alone.
                  </h4>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Your health goals are personal. Your approach should be
                    too. Whether you're looking to improve your fitness,
                    manage your weight, build healthier habits, or create a
                    healthier lifestyle for your family, DUOFIT has a path
                    designed around where you are today and where you want
                    to go.
                  </p>
                  <a
                    href="#programs"
                    className="mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Find Your DUOFIT Program <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 3 — Programs (3-tier) */}
      <section id="programs" className="container-editorial py-16 md:py-24 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
          {programTiers.map((tier, i) => (
            <Reveal key={tier.n} delay={i * 100}>
              <div className="h-full flex flex-col rounded-2xl p-7 md:p-8 border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
                <span className="text-xs font-bold text-primary tracking-widest">{tier.n} —</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-base italic text-primary">{tier.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>

                <div className="mt-5 space-y-2">
                  {tier.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-1">Best For</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">{tier.bestFor}</p>
                  <Link
                    to={tier.viewHref}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    See Full Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 rounded-2xl bg-cream border border-border p-7 md:p-8 text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-foreground mb-2">Not sure which program is right for you?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Tell us about your goals, lifestyle and what you're looking to
              improve. We'll help you find the right place to start.
            </p>
            <Link to="/contact" className={shimmerBtn} style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}>
              <span className={shimmerSpan} />
              Contact DUOFIT <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4 — Why & How DUOFIT Can Help (process timeline, no Venn) */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-center max-w-2xl mx-auto mb-14 md:mb-16">
              Your health doesn't exist in separate boxes.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal delay={60}>
                <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  Nutrition. Fitness. Sleep. Stress. Energy. Habits.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  We often treat these as separate problems to solve. But
                  your health doesn't work that way. Everything is connected.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-4 space-y-1.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>What you eat can affect your energy.</p>
                  <p>Your energy can affect how active you are.</p>
                  <p>Your activity can affect your sleep.</p>
                  <p>Your sleep can affect your recovery and habits.</p>
                </div>
              </Reveal>
              <Reveal delay={190}>
                <p className="mt-5 text-base md:text-lg font-semibold text-foreground leading-relaxed">
                  That's why DUOFIT doesn't start with a generic diet or workout plan.
                </p>
                <p className="mt-1.5 text-base md:text-lg italic text-primary leading-relaxed">
                  We start by understanding the whole picture.
                </p>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <VennDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Testimonials (unchanged from before) */}
      <section className="container-editorial py-16 md:py-24">
        <div className="flex items-end justify-between mb-9 flex-wrap gap-3">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Real People. Real Results.</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground leading-tight">What Our Clients Say.</h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Client Stories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={100 + i * 80}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col">
                <Quote className="h-5 w-5 text-primary/40 mb-2" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-foreground">{t.name}</span>
                <span className="text-xs text-muted-foreground"> — {t.role}</span>
                <span className="text-xs text-muted-foreground"> — {t.quote}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FAQs */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block text-center mb-3">
              Frequently Asked Questions
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
              Questions before you get started?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-sm md:text-base text-muted-foreground text-center max-w-lg mx-auto mb-14">
              Here are some of the things people commonly want to know before starting with DUOFIT.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <FaqAccordion />
          </Reveal>
          <Reveal delay={160}>
            <div className="text-center mt-12">
              <Link to="/contact" className={shimmerBtn} style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}>
                <span className={shimmerSpan} />
                Start Your DUOFIT Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}