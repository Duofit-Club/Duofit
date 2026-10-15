
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About DUOFIT — Health, Designed to Last.",
      description:
        "DUOFIT was built on the belief that better health should come from practical choices that fit real life, not extreme diets or unrealistic routines. Meet Nitesh and Nikitha, the founders.",
      path: "/about",
    }),
  component: About,
});

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
  "Health should fit into life, not the other way around.",
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
      {/* HERO */}
      <section className="container-editorial section-hero">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 items-stretch">
          <Reveal delay={80}>
            <div className="flex flex-col justify-center py-5 md:py-10">
              <h1 className="mt-4">
                <span className="block">Health,</span>
                <span className="block">Designed to Last.</span>
              </h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE CORE SECTIONS */}
      <section className="container-editorial section-y">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {/* WHAT WE BUILD — FIRST */}
          <Reveal delay={60}>
            <div className="rounded-[1.75rem] bg-muted/60 border border-border/50 p-6 md:p-7 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="mt-1">What We Build</h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  People don't come to DUOFIT just to lose weight.
                  <br />
                  They come to build a healthier life.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[...whatWeBuildLeft, ...whatWeBuildRight].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5"
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* OUR VISION — SECOND */}
          <Reveal delay={120}>
            <div className="rounded-[1.75rem] bg-muted/60 border border-border/50 p-6 md:p-7 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <Flag className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="mt-1">Our Vision</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {visionItems.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />

                    <span className="text-sm text-foreground leading-relaxed">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* DUOFIT PRINCIPLES — THIRD */}
          <Reveal delay={180}>
            <div className="rounded-[1.75rem] bg-muted/60 border border-border/50 p-6 md:p-7 h-full">
              <div className="mb-6">
                <h3 className="mt-1">DUOFIT Principles</h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  These principles guide every decision we make.
                </p>
              </div>

              <ul className="space-y-3">
                {principles.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 pb-3 border-b border-border/60 last:border-0 last:pb-0"
                  >
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>

                    <span className="text-sm text-foreground leading-snug">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container-editorial section-y">
        <Reveal delay={80}>
          <div className="rounded-[2rem] bg-muted/60 border border-border/50 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7 md:mb-8">
              <div>
                <h2 className="mt-1">The People Behind DUOFIT</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-7 md:gap-10 lg:gap-14 items-center">
              {/* Founder photo */}
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                <img
                  src={founderAfter}
                  alt="Nitesh and Nikitha, DUOFIT founders"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Founder text */}
              <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  DUOFIT was founded by{" "}
                  <span className="font-bold text-foreground">
                    Nitesh and Nikitha
                  </span>{" "}
                  with a shared belief that health should become easier to
                  sustain, not harder to achieve.
                </p>

                <p>
                  Rather than creating another coaching business, they wanted
                  to build a company where practical nutrition, sustainable
                  movement and healthier routines help people improve their
                  lives for years, not just weeks.
                </p>

                <p className="font-bold text-foreground">
                  Their vision extends beyond coaching. It's about creating a
                  community where better health becomes a natural part of
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="container-editorial section-y">
        <Reveal>
          <div className="rounded-[2rem] bg-muted/60 border border-border/50 p-6 md:p-8 lg:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
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

            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-95"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#ffffff",
              }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

              <span className="relative flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
