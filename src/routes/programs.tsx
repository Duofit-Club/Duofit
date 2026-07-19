import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import {
  Search, ClipboardList, Compass, TrendingUp, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Duofit.club" },
      {
        name: "description",
        content: "Practical health coaching designed to help individuals and families improve fitness, nutrition, movement and healthier habits in a sustainable and realistic way.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "Personal Health Coaching",
    tagline: "For individuals looking to improve their health, fitness, energy levels and everyday habits through practical and sustainable lifestyle changes.",
    personalNote: "Every plan is personalized based on your goals, lifestyle, challenges and health priorities.",
    nodes: [
      {
        label: "Weight Management",
        hint: "Support for fat loss, healthier body composition and sustainable weight management.",
        img: "https://d26toa8f6ahusa.cloudfront.net/wp-content/uploads/2019/09/26150120/iStock-993616442-body-fat-16x9.jpg",
      },
      {
        label: "Better Fitness & Movement",
        hint: "Build strength, improve fitness and become more active in everyday life.",
        img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Improved Nutrition",
        hint: "Practical food guidance designed around your lifestyle, preferences and goals.",
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Better Sleep & Recovery",
        hint: "Improve recovery, energy levels and overall wellbeing.",
        img: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Healthier Daily Habits",
        hint: "Build routines that are realistic, sustainable and easier to maintain.",
        img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Accountability & Guidance",
        hint: "Regular support to help you stay focused, motivated and consistent.",
        img: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&h=280&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Family Health & Habits",
    tagline: "For families looking to improve eating habits, activity levels and healthier routines together in a practical and sustainable way.",
    personalNote: "Every family plan is designed around your household routines, schedules and health priorities.",
    nodes: [
      {
        label: "Family Nutrition",
        hint: "Build healthier food choices and eating habits at home.",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Healthier Routines",
        hint: "Create routines that work for both parents and children.",
        img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Reduced Screen Time",
        hint: "Encourage more movement and healthier daily activities.",
        img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=400&h=280&fit=crop&crop=center",
      },
      {
        label: "Active Lifestyle",
        hint: "Create opportunities for the family to move and stay active together.",
        img: "https://www.gonflablesmontreal.com/blog/wp-content/uploads/2024/08/fitness-1024x683.png",
      },
      {
        label: "Better Habits at Home",
        hint: "Develop practical habits that support long-term family health.",
        img: "https://www.health.com/thmb/SPeOlCGggi5ykpNpm5rEO6ynN9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-Walking-HIIT-8693beb387ab404ca278e939fa8da039.jpg",
      },
      {
        label: "Sustainable Health",
        hint: "Create an environment where healthier choices become easier every day.",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop&crop=center",
      },
    ],
  },
];

const steps = [
  {
    n: "01", t: "DISCOVER", Icon: Search,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    d: "Understanding your lifestyle, routines, challenges, health history and goals through discussions, schedules and daily habits.",
  },
  {
    n: "02", t: "DESIGN", Icon: ClipboardList,
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&h=200&fit=crop&crop=center",
    d: "Creating practical nutrition, movement and lifestyle strategies based on your goals, routines and root causes.",
  },
  {
    n: "03", t: "BUILD", Icon: Compass,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center",
    d: "Regular support, accountability and practical guidance to help you stay consistent and sustainable.",
  },
  {
    n: "04", t: "SUPPORT", Icon: TrendingUp,
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
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-0">
        <div className="max-w-5xl">
          <Reveal delay={120}>
            <h1
              className="mt-5 font-bold tracking-[-0.04em] leading-[0.95] whitespace-nowrap"
              style={{ fontSize: "clamp(1.6rem, 4.2vw, 3.5rem)" }}
            >
              Health Coaching, Designed to  <span className="text-primary">Last.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
             Whether you're improving your own health or creating healthier routines for your family, every DUOFIT program is built around practical nutrition, sustainable movement and lasting habits that fit real life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program Sections */}
{programs.map((p, i) => (
  <section key={p.title} className="container-editorial py-8 md:py-12">
    <Reveal delay={80}>
      <div
        className={`group relative rounded-2xl overflow-hidden border transition-all duration-700 ease-out
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          hover:-translate-y-1
          ${i === 0
            ? "border-primary/20 bg-gradient-to-br from-card via-card to-[color-mix(in_srgb,var(--color-primary)_5%,var(--card))]"
            : "border-border bg-gradient-to-bl from-card via-card to-[color-mix(in_srgb,var(--color-primary)_3%,var(--background))]"
          }`}
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
      >

        {/* Animated corner accent */}
        <div
          className={`absolute top-0 ${i === 0 ? "left-0 rounded-br-3xl" : "right-0 rounded-bl-3xl"}
            w-1 h-0 group-hover:h-full bg-primary transition-all duration-700 ease-out opacity-60`}
        />
        <div
          className={`absolute top-0 ${i === 0 ? "left-0" : "right-0"}
            h-1 w-0 group-hover:w-full bg-primary transition-all duration-700 ease-out opacity-30`}
        />



        {/* Inner content */}
        <div className="p-6 md:p-10 lg:p-12">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

            {/* Left — text */}
            <Reveal delay={100}>
              <div>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.05]">
                  {p.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm text-primary italic font-medium">
                  {p.personalNote}
                </p>
                <div className="pt-8">
                  <Link
                    to="/contact"
                    className="group/btn relative inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest rounded-full min-h-[44px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95"
                    style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                    Start Your Journey
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right — What We Cover */}
            <Reveal delay={160}>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-1">
                  What {i === 0 ? "You" : "Families"} Can Expect
                </h3>
                {p.nodes.map(({ label, hint, img }, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <Reveal key={label} delay={idx * 70}>
                      <div className={`flex items-stretch gap-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                        <div className="relative w-[38%] shrink-0 overflow-hidden">
                          <img
                            src={img}
                            alt={label}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <div className={`flex flex-1 flex-col justify-center gap-1.5 px-4 py-4 bg-card border-y border-border ${isEven ? "border-r rounded-r-xl" : "border-l rounded-l-xl"}`}>
                          <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                            {label}
                          </span>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {hint}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </Reveal>
  </section>
))}

      {/* How Duofit Works */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 lg:py-32">
          <Reveal>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-[-0.04em] mb-3">How Duofit Works</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-muted-foreground mb-14 md:mb-20 max-w-2xl leading-relaxed">
              A simple, practical journey that turns intent into lasting change — five steps, designed around real everyday life.
            </p>
          </Reveal>

          {/* Desktop */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 1000 120" className="absolute inset-x-0 top-0 w-full h-[120px] pointer-events-none z-0" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 50 60 Q 175 10, 300 60 T 550 60 T 800 60 T 950 60"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
            </svg>
            <div className="grid grid-cols-5 gap-6 relative">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 140}>
                  <div className={`flex flex-col items-center text-center group ${i % 2 === 1 ? "mt-20" : ""}`}>
                    <div className="relative z-10">
                      <div className="relative h-20 w-20 rounded-full overflow-hidden border-[3px] border-primary/30 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-xl">
                        <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
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

          {/* Mobile */}
          <div className="md:hidden relative">
            <div className="absolute left-9 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/40 via-primary to-primary/40" />
            <div className="flex flex-col gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="flex gap-5 items-start">
                    <div className="relative shrink-0">
                      <div className="h-[72px] w-[72px] rounded-full overflow-hidden border-[3px] border-primary/30 shadow-md">
                        <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
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
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-full min-h-[48px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95"
            style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
            Start Your Journey
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

    </SiteLayout>
  );
}