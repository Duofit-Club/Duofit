import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import {
  Salad, PersonStanding, Moon, Repeat, LineChart, HeartPulse,
  UtensilsCrossed, Users, Apple, Bike, Sprout, Home,
  Search, ClipboardList, Compass, TrendingUp, Sparkles,
} from "lucide-react";



export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      {
        name: "description",
        content:
          "Practical health coaching designed to help individuals and families improve fitness, nutrition, movement and healthier habits in a sustainable and realistic way.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "Personal Health Coaching",
    tagline: "A holistic approach for individuals",
    desc: "At DUOFIT, we believe health is interconnected. Factors like fat loss, sleep, stress, energy levels, food habits, movement and lifestyle all influence each other. Instead of focusing on one problem in isolation, we take a more holistic approach to understand the root causes and create practical health strategies that fit your everyday life.",
    points: [
      "Personalised nutrition & food guidance",
      "Fitness, movement & activity planning",
      "Support for fat loss, weight management & healthier body composition",
      "Better sleep, recovery & energy levels",
      "Building healthier routines & consistency",
      "Regular guidance, accountability & progress tracking",
    ],
    center: "YOU",
     nodes: [
      { label: "Nutrition", Icon: Salad, hint: "Personalised food guidance" },
      { label: "Movement", Icon: PersonStanding, hint: "Fitness & activity plan" },
      { label: "Sleep", Icon: Moon, hint: "Recovery & energy" },
      { label: "Fat Loss", Icon: LineChart, hint: "Body composition" },
      { label: "Habits", Icon: Repeat, hint: "Daily consistency" },
      { label: "Accountability", Icon: HeartPulse, hint: "Coach by your side" },
    ],
  },
  {
    title: "Family Health & Habits",
    tagline: "Healthier living, together",
    desc: "A family-focused health coaching program designed to help families improve eating habits, routines, activity levels and healthier living together in a practical and sustainable way.",
    points: [
      "Family nutrition & food guidance",
      "Healthier routines for kids & parents",
      "Reducing junk food & unhealthy habits",
      "Encouraging movement & reducing screen time",
      "Practical healthy habits for everyday family life",
      "Building a healthier home environment together",
    ],
    center: "FAMILY",
    nodes: [
      { label: "Family Meals", Icon: UtensilsCrossed, hint: "Eat well together" },
      { label: "Kids Routines", Icon: Users, hint: "Healthy daily rhythm" },
      { label: "Less Junk", Icon: Apple, hint: "Cleaner choices" },
      { label: "Active Together", Icon: Bike, hint: "Move as a family" },
      { label: "Daily Habits", Icon: Sprout, hint: "Small, sustainable wins" },
      { label: "Healthy Home", Icon: Home, hint: "Supportive environment" },
    ],
  },
];

const steps = [
  {
    n: "01", t: "UNDERSTAND", Icon: Search,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    d: "Understanding your lifestyle, routines, challenges, health history and goals through discussions, schedules and daily habits.",
  },
  {
    n: "02", t: "PLAN", Icon: ClipboardList,
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&h=200&fit=crop&crop=center",
    d: "Creating practical nutrition, movement and lifestyle strategies based on your goals, routines and root causes.",
  },
  {
    n: "03", t: "GUIDE", Icon: Compass,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center",
    d: "Regular support, accountability and practical guidance to help you stay consistent and sustainable.",
  },
  {
    n: "04", t: "TRACK", Icon: TrendingUp,
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=center",
    d: "Monitoring progress, routines and overall lifestyle improvements over time.",
  },
  {
    n: "05", t: "SUSTAIN", Icon: Sparkles,
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop&crop=center",
    d: "Helping healthier habits become part of your long-term lifestyle naturally.",
  },
];

function Programs() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="max-w-4xl">
          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95]">
              Health Coaching
              <br />
              Built For <span className="text-primary">Real Life.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Practical health coaching designed to help individuals and families improve fitness, nutrition, movement and healthier habits in a sustainable and realistic way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((p, i) => (
        <section key={p.title} className={i % 2 === 1 ? "bg-cream border-y border-border" : ""}>
          <div className="container-editorial py-16 md:py-24 lg:py-28">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal delay={80}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    — Program 0{i + 1}
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-primary text-sm md:text-base italic">{p.tagline}</p>
                  <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                  {/* <ul className="mt-8 space-y-3.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm md:text-base text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul> */}
                  <div className="pt-8">
                    <Link to="/contact" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all hover:gap-4">
                      Start Your Journey
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 mb-1">
                    <span className="h-px w-6 bg-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                      What We Cover
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {p.nodes.map(({ label, Icon, hint }) => (
                      <div
                        key={label}
                        className="group flex flex-col items-center text-center gap-3 px-4 py-5 rounded-2xl border-2 border-border/60 bg-white shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 cursor-default"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide text-foreground leading-snug">
                          {label}
                        </span>
                        <span className="text-[11px] text-muted-foreground leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                          {hint}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* How Duofit Works — animated journey */}
      <section className="bg-cream border-y border-border relative overflow-hidden">
        <div className="container-editorial py-16 md:py-24 lg:py-32 relative">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">— Our Process</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-3">How Duofit Works</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-muted-foreground mb-14 md:mb-20 max-w-2xl leading-relaxed">
              A simple, practical journey that turns intent into lasting change — five steps, designed around real everyday life.
            </p>
          </Reveal>

          {/* Desktop — animated curved path */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 1000 220" className="absolute inset-x-0 top-12 w-full h-[220px] pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path
                d="M 50 110 Q 175 20, 300 110 T 550 110 T 800 110 T 950 110"
                fill="none"
                stroke="url(#pathGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-[dash_30s_linear_infinite]"
              />
              <circle r="6" fill="var(--color-accent)">
                <animateMotion dur="6s" repeatCount="indefinite" path="M 50 110 Q 175 20, 300 110 T 550 110 T 800 110 T 950 110" />
              </circle>
            </svg>

            <div className="grid grid-cols-5 gap-6 relative">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 140}>
                  <div className={`flex flex-col items-center text-center group ${i % 2 === 1 ? "mt-24" : ""}`}>
                     <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative h-20 w-20 rounded-full overflow-hidden border-[3px] border-primary/30 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-xl">
                        <img
                          src={s.img}
                          alt={s.t}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                      </div>
                      <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-foreground text-accent text-[11px] font-bold flex items-center justify-center shadow-md z-10">
                        {s.n}
                      </span>
                    </div>
                    <h4 className="mt-5 text-base lg:text-lg font-bold tracking-wide">{s.t}</h4>
                    <p className="mt-2 text-xs lg:text-sm text-muted-foreground leading-relaxed max-w-[200px]">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile — vertical animated rail */}
          <div className="md:hidden relative">
            <div className="absolute left-9 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/40 via-accent to-primary/40" />
            <div className="flex flex-col gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="flex gap-5 items-start group">
                     <div className="relative shrink-0">
                      <div className="h-[72px] w-[72px] rounded-full overflow-hidden border-[3px] border-primary/30 shadow-md transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                        <img
                          src={s.img}
                          alt={s.t}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-foreground text-accent text-[10px] font-bold flex items-center justify-center shadow z-10">
                        {s.n}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold">{s.t}</h4>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -480; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-20 md:py-28 lg:py-36 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 max-w-4xl mx-auto">
            Start building a healthier lifestyle today.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Sustainable routines, practical nutrition and healthier habits designed around real everyday life.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-foreground transition-all duration-300 active:scale-95"
          >
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}