import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  XCircle,
  Heart,
  CheckCircle2,
  Zap,
  Moon,
  UserCheck,
  ClipboardList,
  Dumbbell,
  Users,
  HeartPulse,
  Flag,
  Check,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import founderAfter from "@/assets/founders.jpeg";
import heroFamily from "@/assets/family-photo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Duofit.club" },
      {
        name: "description",
        content:
          "Health, designed to last. DUOFIT was built on the belief that better health should come from practical choices that fit real life.",
      },
    ],
  }),
  component: About,
});

const cycleItems = ["Start.", "Stop.", "Restart.", "Another Monday.", "Another challenge.", "Another diet."];

const whatWeBuildLeft = [
  { icon: Zap, label: "Feel more energetic" },
  { icon: Moon, label: "Sleep better" },
  { icon: UserCheck, label: "Build confidence" },
  { icon: ClipboardList, label: "Create healthier routines" },
];

const whatWeBuildRight = [
  { icon: Dumbbell, label: "Improve movement" },
  { icon: Users, label: "Support their families" },
  { icon: HeartPulse, label: "Build lasting health" },
];

const principles = [
  "Health should fit into life—not the other way around.",
  "Progress matters more than perfection.",
  "Consistency beats intensity.",
  "Healthy routines create lasting results.",
  "Energy is one of the best measures of good health.",
  "If it can't last, it isn't DUOFIT.",
];

const visionItems = [
  "We imagine a future where healthy living doesn't feel overwhelming.",
  "Where families grow stronger together.",
  "Where children develop healthier habits early.",
  "Where people stop chasing quick fixes and start building lasting health.",
];

function About() {
  return (
    <SiteLayout>

      {/* ── HERO ── */}
      <section className="container-editorial pt-14 md:pt-20 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Reveal delay={80}>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                <span className="block text-foreground">Health,</span>
                <span className="block text-primary">Designed to Last.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                We believe better health shouldn't come from extreme diets,
                unrealistic routines or temporary motivation. It should come
                from practical choices that fit real life—and last.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl aspect-[4/3] bg-muted">
              <img
                src={heroFamily}
                alt="A family walking together outdoors"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY DUOFIT EXISTS ── */}
      <section className="container-editorial pb-8 md:pb-10">
        <Reveal>
          <div className="rounded-3xl bg-muted/60 p-7 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Search className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground pt-2">
                Why DUOFIT Exists
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <ul className="space-y-3">
                {cycleItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <XCircle className="h-4 w-4 text-muted-foreground/70 shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>We didn't start DUOFIT to help people diet.</p>
                <p>We started it because we saw too many people trapped in the same cycle.</p>
                <p className="font-bold text-foreground">
                  The problem isn't a lack of motivation.
                </p>
                <p className="font-bold text-foreground">
                  The problem is that most health advice isn't designed for real life.
                </p>
                <p>That realization became the foundation of DUOFIT.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── OUR BELIEF ── */}
      <section className="container-editorial pb-8 md:pb-10">
        <Reveal>
          <div className="rounded-3xl bg-primary p-7 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-primary-foreground/80 mb-1">
                    Our Belief
                  </h2>
                  <p className="text-xl md:text-2xl font-bold text-primary-foreground leading-snug">
                    Health should work with your life—
                    <br />
                    not against it.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm md:text-base text-primary-foreground/85 mb-4 leading-relaxed">
                  Every recommendation we make is built around one simple question.
                </p>

                <div className="bg-cream rounded-2xl p-4 flex items-center gap-3 mb-5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm md:text-base font-semibold text-foreground">
                    Can someone realistically continue doing this years from now?
                  </p>
                </div>

                <div className="text-sm md:text-base text-primary-foreground/85 space-y-1 mb-4">
                  <p>If the answer is no…</p>
                  <p>We don't recommend it.</p>
                  <p>Because…</p>
                </div>

                <p className="text-lg md:text-xl italic text-primary-foreground" style={{ fontFamily: "var(--font-display, cursive)" }}>
                  If it can't last, it isn't DUOFIT.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── WHAT WE BUILD / PRINCIPLES ── */}
      <section className="container-editorial pb-8 md:pb-10">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {/* What We Build */}
          <Reveal delay={60}>
            <div className="rounded-3xl bg-muted/60 p-7 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                What We Build
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                People don't come to DUOFIT just to lose weight.
                <br />
                They come to build a healthier life.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-6">
                <div className="space-y-4">
                  {whatWeBuildLeft.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs md:text-sm text-foreground">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  {whatWeBuildRight.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs md:text-sm text-foreground">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-4">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  Weight loss is one outcome.
                  <br />
                  <span className="font-bold">Lasting health is the goal.</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* DUOFIT Principles */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-muted/60 p-7 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                The DUOFIT Principles
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                These principles guide every decision we make.
              </p>

              <ul className="space-y-3">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 pb-3 border-b border-border/60 last:border-0">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm md:text-base text-foreground leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── PEOPLE BEHIND DUOFIT / VISION ── */}
      <section className="container-editorial pb-8 md:pb-10">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {/* People Behind DUOFIT */}
          <Reveal delay={60}>
            <div className="rounded-3xl bg-muted/60 p-7 md:p-8 h-full">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">
                The People Behind DUOFIT
              </h3>

              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted mb-5">
                <img
                  src={founderAfter}
                  alt="Nitesh and Nikitha — DUOFIT Founders"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  DUOFIT was founded by <span className="font-bold text-foreground">Nitesh and Nikitha</span> with
                  a shared belief that health should become easier to sustain—not harder to achieve.
                </p>
                <p>
                  Rather than creating another coaching business, they wanted to build a
                  company where practical nutrition, sustainable movement and healthier
                  routines help people improve their lives for years—not just weeks.
                </p>
                <p className="font-bold text-foreground">
                  Their vision extends beyond coaching. It's about creating a community
                  where better health becomes a natural part of everyday life.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Our Vision */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-muted/60 p-7 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <Flag className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary">
                  Our Vision
                </h3>
              </div>

              <ul className="space-y-4 mb-6">
                {visionItems.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm md:text-base font-bold text-primary mt-auto">
                That's the future we're working toward.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="container-editorial pb-16 md:pb-24">
        <Reveal>
          <div className="rounded-3xl bg-muted/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold text-foreground leading-snug">
                  Better health is possible.
                  <br />
                  And it's possible for the long run.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground hidden md:block">
              Let's build it together.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shrink-0"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

    </SiteLayout>
  );
}