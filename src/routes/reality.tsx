import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import imgSleep from "@/assets/reality/sleep.jpg";
import imgDiets from "@/assets/reality/diets.jpg";
import imgFamily from "@/assets/reality/family.jpg";
import imgInconsistency from "@/assets/reality/inconsistency.jpg";
import imgBusy from "@/assets/reality/busy.jpg";
import imgQuickfix from "@/assets/reality/quickfix.jpg";
import imgGuidance from "@/assets/reality/guidance.jpg";
import imgRestart from "@/assets/reality/restart.jpg";

export const Route = createFileRoute("/reality")({
  head: () => ({
    meta: [
      { title: "Reality Check — Duofit.club" },
      {
        name: "description",
        content:
          "Why most health journeys fail — and how DUOFIT is different.",
      },
    ],
  }),
  component: Reality,
});

const cards = [
  {
    front: "POOR SLEEP AND RECOVERY",
    image: imgSleep,
    backTitle: "EXHAUSTED PEOPLE STRUGGLE TO STAY CONSISTENT",
    backDesc:
      "Lack of sleep affects energy, stress, recovery and decision making. Health becomes harder to maintain when the body never gets enough time to recover.",
  },
  {
    front: "EXTREME DIETS",
    image: imgDiets,
    backTitle: "EXTREME ROUTINES DON'T LAST",
    backDesc:
      "Overly strict diets often become difficult to maintain in everyday life. Healthy eating works better when it becomes part of your routine instead of temporary restriction.",
  },
  {
    front: "FAMILY HEALTH NEGLECT",
    image: imgFamily,
    backTitle: "HEALTH SHOULD WORK FOR THE WHOLE FAMILY",
    backDesc:
      "Health becomes difficult to maintain when routines feel disconnected from family life. Sustainable habits work better when families can follow healthier choices together.",
  },
  {
    front: "INCONSISTENCY",
    image: imgInconsistency,
    backTitle: "WAITING FOR THE PERFECT TIME",
    backDesc:
      "Many people stop after missing a few days and feel like they have failed completely. Consistency becomes easier when routines are flexible enough to fit busy weeks and real schedules.",
  },
  {
    front: "BUSY LIFESTYLES",
    image: imgBusy,
    backTitle: "HEALTH SHOULDN'T FEEL LIKE A FULL-TIME JOB",
    backDesc:
      "Staying healthy does not always require long workouts or complicated routines. Small consistent movement and better habits can make a big difference over time.",
  },
  {
    front: "QUICK FIX MENTALITY",
    image: imgQuickfix,
    backTitle: "QUICK FIXES DON'T CREATE LONG-TERM RESULTS",
    backDesc:
      "Short-term challenges may create temporary motivation, but lasting health needs consistency and realistic habits.",
  },
  {
    front: "LACK OF GUIDANCE",
    image: imgGuidance,
    backTitle: "TOO MUCH CONFUSION",
    backDesc:
      "Too much online advice leaves people confused about what actually works for them. Health becomes easier when guidance is practical, realistic and suited to your lifestyle.",
  },
  {
    front: "RESTART CYCLE",
    image: imgRestart,
    backTitle: "STARTING OVER AGAIN AND AGAIN",
    backDesc:
      "Many people spend years restarting fitness and health routines after short periods of motivation. Long-term health improves when consistency becomes more important than perfection.",
  },
];

function FlipCard({ card }: { card: typeof cards[0] }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const flipped = clicked || hovered;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={clicked}
      className="w-full h-64 md:h-72 [perspective:1000px] cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      onClick={() => setClicked((f) => !f)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setClicked((f) => !f)
      }
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front — photo card with text overlay */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-sm overflow-hidden border border-border shadow-sm">
          <img
            src={card.image}
            alt={card.front}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* dark gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
          <div className="relative h-full w-full p-6 md:p-7 flex flex-col justify-between">
            <span className="self-start text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-sm">
              The Reality
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug drop-shadow-md">
                {card.front}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
                  <span className="md:hidden">Tap to reveal</span>
                  <span className="hidden md:inline">Hover to reveal</span>
                </span>
                <RotateCcw className="h-3 w-3 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-sm p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-white mb-3">
              {card.backTitle}
            </h4>
            <p className="text-sm text-white/90 leading-relaxed">
              {card.backDesc}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">
              <span className="md:hidden">Tap to close</span>
              <span className="hidden md:inline">
                {clicked ? "Click to close" : "Move away to close"}
              </span>
            </span>
            {clicked && (
              <span className="text-[10px] bg-white/15 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                Pinned
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Reality() {
  return (
    <SiteLayout>

      {/* Hero */}
      <section className="container-editorial pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            — Reality Check
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground">
            Why most health<br />journeys fail.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            People don't fail because they lack motivation. They struggle
            because health is often approached through shortcuts, extreme
            routines and habits that don't fit their schedules,
            responsibilities or lifestyle.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-3 text-sm text-primary font-medium md:hidden">
            👆 Tap any card to reveal
          </p>
          <p className="mt-3 text-sm text-primary font-medium hidden md:block">
            Hover or click any card to reveal
          </p>
        </Reveal>
      </section>

      {/* Cards */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 50}>
              <FlipCard card={card} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/80 italic">
              "Health should support your life, not become another source of stress."
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-16 md:py-24 text-center">
        <Reveal>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            So how does DUOFIT help?
          </h3>
        </Reveal>
        <Reveal delay={120}>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all rounded-sm min-h-[48px]"
          >
            Explore Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

    </SiteLayout>
  );
}