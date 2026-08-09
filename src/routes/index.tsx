import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Clock, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-lifestyle-new.jpg";
import heroMobileImg from "@/assets/hero-lifestyle-mobile.jpg";
import { useState } from "react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "DUOFIT — Health, Designed to Last. | Nutrition & Fitness Coaching",
      description:
        "Build a healthier life through practical nutrition, sustainable movement and everyday habits that fit real life. Health coaching for individuals, couples and families in Hyderabad.",
      path: "/",
    }),
  component: Home,
});

// ── Hero stats ──────────────────────────────────────────────────────────
const heroStats = [
  { icon: Users, value: "20+", label: "Clients Guided" },
  { icon: Clock, value: "150+", label: "Coaching Hours" },
  { icon: Star, value: "4.9★", label: "Client Satisfaction" },
];

// ── Section 2 — 6 points, reusing the site's existing images ────────────
const problemCards = [
  {
    text: "Trying to lose weight but struggling to stay consistent",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&crop=center",
  },
  {
    text: "Starting healthy routines and stopping after a few weeks",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop&crop=center",
  },
  {
    text: "Poor sleep, low energy and feeling constantly tired",
    img: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=400&h=300&fit=crop&crop=top",
  },
  {
    text: "Busy work and family schedules leaving little time for yourself",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center",
  },
  {
    text: "Feeling confused by conflicting health and nutrition advice",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center",
  },
  {
    text: "Knowing what to do but finding it hard to follow through consistently",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&crop=center",
  },
];

// ── Programs — mirrors the two programs on /programs ─────────────────────
// ⚠️ Placeholder photos — swap for real DUOFIT program photography when
// you have it. Slugs must match the anchor IDs added to programs.tsx.
const programs = [
  {
    slug: "personal-health-coaching",
    title: "Personal Health Coaching",
    desc: "A holistic approach to nutrition, fitness, sleep and lifestyle — built around your goals, not a generic plan.",
    img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&h=600&fit=crop&crop=center",
  },
  {
    slug: "family-health-habits",
    title: "Family Health & Habits",
    desc: "Helping families build healthier routines together through practical nutrition, movement and everyday habits.",
    img: "https://images.unsplash.com/photo-1פ593113646773-028c64a8f1b8?w=800&h=600&fit=crop&crop=center",
  },
];

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

function Home() {
  return (
    <SiteLayout>

      {/* HERO — unchanged background/photo, now with 3 stat boxes added */}
      <section className="relative w-full h-[100dvh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-foreground text-background">
        <picture className="absolute inset-0 block w-full h-full">
          <source media="(max-width: 767px)" srcSet={heroMobileImg} />
          <source media="(min-width: 768px)" srcSet={heroImg} />
          <img
            src={heroMobileImg}
            alt="Better Health That Lasts"
            className="w-full h-full object-cover object-[50%_15%] md:object-[70%_25%]"
          />
        </picture>

        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{ background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.80) 0%, oklch(0.12 0.04 145 / 0.40) 40%, transparent 72%)" }}
        />
        <div className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 145 / 0.18) 0%, oklch(0.18 0.04 145 / 0.45) 100%)" }}
        />
        <div className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.82) 0%, oklch(0.14 0.04 145 / 0.60) 30%, oklch(0.14 0.04 145 / 0.18) 55%, transparent 72%)" }}
        />

        <div className="absolute inset-0 z-10 flex items-start pt-14 md:pt-16 lg:pt-20">
          <div className="container-editorial w-full">
            <div className="max-w-[70%] sm:max-w-[60%] md:max-w-[420px] lg:max-w-[480px] text-left">
              <Reveal>
                <h1
                  className="font-display leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]"
                  style={{ color: "#f5f0e8", fontSize: "clamp(2.4rem, 7vw, 5.25rem)", fontWeight: 700 }}
                >
                  <span className="block">Health,</span>
                  <span className="block italic">Designed to Last.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 md:mt-6 text-sm md:text-lg leading-[1.6] md:leading-[1.8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]" style={{ color: "#ffffff" }}>
                  Build a healthier life through practical{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">nutrition</span>,{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">sustainable movement</span> and{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">everyday habits</span>{" "}
                  that fit real life.
                </p>
              </Reveal>

              {/* 3 stat boxes */}
              <Reveal delay={320}>
                <div className="mt-7 md:mt-10 grid grid-cols-3 gap-2.5 md:gap-4 max-w-[420px]">
                  {heroStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm px-2.5 py-3 md:px-4 md:py-4 flex flex-col items-start gap-1"
                      >
                        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" strokeWidth={2.25} />
                        <span className="text-sm md:text-lg font-bold text-background leading-none mt-0.5">
                          {stat.value}
                        </span>
                        <span className="text-[9px] md:text-[11px] text-background/75 leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Does This Sound Like You (restructured) */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 lg:py-32">

          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-center max-w-2xl mx-auto">
              Does this sound like you?
            </h2>
          </Reveal>

          {/* 6 points, 3 left / 3 right, each with its image */}
          <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {problemCards.map((card, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.text}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Centered callout box */}
          <Reveal delay={400}>
            <div className="mt-12 md:mt-16 max-w-2xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6 md:px-8 md:py-7 text-center">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Most people don't struggle because they lack motivation. They
                struggle because healthy eating, exercise and routines often
                feel difficult to maintain alongside work, family
                responsibilities and everyday life.
              </p>
              <p className="mt-3 text-sm md:text-base font-semibold text-foreground leading-relaxed">
                Real health isn't about doing more. It's about building
                routines you can continue for life.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECTION 3 — Health is Connected (unchanged) */}
      <section className="container-editorial py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Health is more connected than most people realize.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>Weight gain, poor sleep, low energy, stress, unhealthy eating habits and lack of consistency are often connected.
                When one area struggles, the others are often affected too.
                That's why focusing on a single symptom rarely creates lasting change.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 p-5 rounded-2xl border border-primary/20 bg-primary/5">
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  At DUOFIT, we take a more holistic approach to health.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Instead of focusing on one challenge in isolation, we look at your lifestyle as a whole, understand the root causes and create practical strategies that fit your goals, routines and everyday life.
                </p>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Every health journey is different. That's why DUOFIT focuses on understanding the whole picture before recommending a path forward.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-8">
                <Link
                  to="/programs"
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest rounded-full min-h-[44px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95"
                  style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                  Explore Programs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <VennDiagram />
          </Reveal>

        </div>
      </section>

      {/* SECTION 4 — Programs */}
      <section className="bg-cream border-t border-border">
        <div className="container-editorial py-16 md:py-24 lg:py-32">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block text-center mb-3">
              Our Programs
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center max-w-xl mx-auto leading-tight">
              Coaching designed around your journey.
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={100 + i * 80}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {p.desc}
                    </p>
                    <Link
                      to="/programs"
                      hash={p.slug}
                      className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-primary hover:text-primary-foreground transition-all self-start"
                    >
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}