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
  "Trying to lose weight but struggling to stay consistent",
  "Starting healthy routines and stopping after a few weeks",
  "Poor sleep, low energy and feeling constantly tired",
  "Busy work and family schedules leaving little time for yourself",
  "Feeling confused by conflicting health and nutrition advice",
  "Knowing what to do but finding it hard to follow through consistently",
];

const wheelItems = [
  { label: "Nutrition", color: "#4ade80", angle: 0 },
  { label: "Movement", color: "#fb923c", angle: 60 },
  { label: "Sleep", color: "#818cf8", angle: 120 },
  { label: "Stress", color: "#f472b6", angle: 180 },
  { label: "Energy", color: "#facc15", angle: 240 },
  { label: "Habits", color: "#34d399", angle: 300 },
];

function HealthWheel() {
  const [active, setActive] = useState<number | null>(null);
  const cx = 200;
  const cy = 200;
  const r = 130;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <svg viewBox="0 0 400 400" className="w-full max-w-[360px] h-auto">
        <defs>
          {wheelItems.map((item, i) => (
            <radialGradient key={i} id={`wg${i}`} cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor={item.color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={item.color} stopOpacity="0.5" />
            </radialGradient>
          ))}
        </defs>

        {/* connecting spokes */}
        {wheelItems.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * r;
          const y = cy + Math.sin(rad) * r;
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={x} y2={y}
              stroke={item.color}
              strokeWidth="1.5"
              strokeOpacity={active === i ? 0.9 : 0.3}
              strokeDasharray="4 3"
            />
          );
        })}

        {/* outer nodes */}
        {wheelItems.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * r;
          const y = cy + Math.sin(rad) * r;
          const isActive = active === i;
          return (
            <g
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={x} cy={y}
                r={isActive ? 36 : 30}
                fill={`url(#wg${i})`}
                style={{ transition: "all 0.3s ease", filter: isActive ? `drop-shadow(0 0 12px ${item.color})` : "none" }}
              />
              <text
                x={x} y={y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontWeight="800"
                letterSpacing="0.5"
              >
                {item.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* center */}
        <circle cx={cx} cy={cy} r="52" fill="var(--color-foreground)" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--color-accent)" fontSize="11" fontWeight="800" letterSpacing="1">DUOFIT</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="white" fontSize="8" fontWeight="600" letterSpacing="0.5">HEALTH</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="white" fontSize="8" fontWeight="600" letterSpacing="0.5">APPROACH</text>
      </svg>
      <p className="text-xs text-muted-foreground italic text-center">
        <span className="md:hidden">Tap</span>
        <span className="hidden md:inline">Hover</span>
        {" "}a circle to explore
      </p>
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

        {/* Text */}
        <div className="absolute inset-0 z-10 flex items-start md:items-center pt-24 md:pt-0">
          <div className="container-editorial w-full">
            <div className="max-w-[70%] sm:max-w-[60%] md:max-w-[420px] lg:max-w-[480px] text-left md:-translate-x-[60px]">
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
              <Reveal delay={350}>
                <div className="mt-8">
                  <Link
                    to="/programs"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-full min-h-[44px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95"
                    style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                    Explore Programs
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
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
                  <p>They struggle because healthy eating, exercise and routines often feel difficult to maintain alongside work, family responsibilities and everyday life.</p>
                  <p>Health becomes easier when the approach is practical, realistic and designed to fit your lifestyle.</p>
                  <p className="font-medium text-foreground">The challenge isn't doing more. It's doing what works consistently.</p>
                </div>
              </Reveal>
            </div>

            {/* Right — problem cards */}
            <div>
              <Reveal delay={80}>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
                  — Does This Sound Familiar?
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-2">
                {problemCards.map((card, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <div className="group relative flex items-center gap-4 p-4 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                      {/* animated background fill on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-2xl" />
                      {/* left accent bar */}
                      <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:top-0 group-hover:bottom-0 transition-all duration-300" />
                      {/* number */}
                      <span className="relative shrink-0 h-8 w-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                        <span className="text-[11px] font-bold text-primary group-hover:text-white transition-colors duration-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                      {/* text */}
                      <p className="relative text-sm text-foreground/70 group-hover:text-foreground leading-relaxed transition-colors duration-300">
                        {card}
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

          {/* Left — wheel */}
          <Reveal delay={100}>
            <HealthWheel />
          </Reveal>

          {/* Right — text */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Health is more connected than most people realize.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>Weight gain, poor sleep, low energy, stress, unhealthy eating habits and lack of consistency are often connected.</p>
                <p>When one area struggles, the others are often affected too.</p>
                <p>That's why focusing on a single symptom rarely creates lasting change.</p>
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

        </div>
      </section>

    </SiteLayout>
  );
}