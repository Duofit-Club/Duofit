import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-lifestyle-new.jpg";
import heroMobileImg from "@/assets/hero-lifestyle-mobile.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUOFIT — Better Health. That Lasts." },
      { name: "description", content: "Helping individuals and families improve their health through practical nutrition, movement and healthier daily habits that fit real life." },
    ],
  }),
  component: Home,
});

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

          {/* Center Circle */}
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

      {/* HERO */}
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

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{ background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.80) 0%, oklch(0.12 0.04 145 / 0.40) 40%, transparent 72%)" }}
        />
        {/* Desktop overlays */}
        <div className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 145 / 0.18) 0%, oklch(0.18 0.04 145 / 0.45) 100%)" }}
        />
        <div className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.82) 0%, oklch(0.14 0.04 145 / 0.60) 30%, oklch(0.14 0.04 145 / 0.18) 55%, transparent 72%)" }}
        />

        {/* Text — anchored to top-left, clear of the subject in the photo */}
        <div className="absolute inset-0 z-10 flex items-start pt-14 md:pt-16 lg:pt-20">
          <div className="container-editorial w-full">
            <div className="max-w-[70%] sm:max-w-[60%] md:max-w-[420px] lg:max-w-[480px] text-left">
              <Reveal>
                <h1
                  className="font-display leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]"
                  style={{ color: "#f5f0e8", fontSize: "clamp(2.4rem, 7vw, 5.25rem)", fontWeight: 700 }}
                >
                  <span className="block">Better Health.</span>
                  <span className="block italic">That Lasts.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 md:mt-6 text-sm md:text-lg leading-[1.6] md:leading-[1.8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]" style={{ color: "#ffffff" }}>
                  Helping individuals and families improve their health through practical{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">nutrition</span>,{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">movement</span> and{" "}
                  <span className="font-semibold underline decoration-primary/60 underline-offset-2">healthier daily habits</span>{" "}
                  that fit real life.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Does This Sound Familiar */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — text */}
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Health should work with your life,
                  <span className="text-primary"> not against it.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>Most people don't struggle because they lack motivation.</p>
                  <p>They struggle because healthy eating, exercise and routines often feel difficult to maintain alongside work, family responsibilities and everyday life.
                  Health becomes easier when the approach is practical, realistic and designed to fit your lifestyle.</p>
                  <p className="font-medium text-foreground">The challenge isn't doing more. It's doing what works consistently.</p>
                </div>
              </Reveal>
            </div>

            {/* Right — problem cards */}
            <div>
              <Reveal delay={80}>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
                  Does These Sound Familiar?
                </p>
              </Reveal>
              <div className="space-y-4">
                {problemCards.map((card, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className={`flex items-center gap-5 group ${i % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}>
                      {/* Thumbnail */}
                      <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                        <img
                          src={card.img}
                          alt={card.text}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Text */}
                      <p className={`text-sm text-muted-foreground leading-snug group-hover:text-foreground transition-colors duration-200 ${i % 2 === 1 ? "text-right" : "text-left"}`}>
                        {card.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — Health is Connected */}
      <section className="container-editorial py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
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

          {/* Right — Venn Diagram */}
          <Reveal delay={100}>
            <VennDiagram />
          </Reveal>

        </div>
      </section>

    </SiteLayout>
  );
}