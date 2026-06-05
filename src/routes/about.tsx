import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import founderAfter from "@/assets/founder-after.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Duofit.club" },
      {
        name: "description",
        content:
          "DUOFIT was built to help people build healthier lifestyles in a more practical, realistic and sustainable way.",
      },
    ],
  }),
  component: About,
});

const beliefs = [
  {
    front: "BUILT FOR REAL LIFE",
    back: "Health should fit alongside work, stress, family life and busy schedules.",
  },
  {
    front: "MORE THAN WEIGHT LOSS",
    back: "Sleep, movement, eating habits, stress and consistency all affect long-term health.",
  },
  {
    front: "CONSISTENCY OVER EXTREMES",
    back: "Extreme routines rarely last. Small realistic habits create better long-term results.",
  },
  {
    front: "FAMILY & ENVIRONMENT MATTER",
    back: "Health becomes easier when routines and habits improve together at home.",
  },
];

const values = [
  "Healthy living should not feel like punishment.",
  "Consistency matters more than perfection.",
  "Prevention is easier than recovery.",
  "Health should support life, not interrupt it.",
  "Families become healthier when habits improve together.",
];

const forWho = [
  "Busy professionals struggling with unhealthy routines and inconsistency",
  "Parents trying to create healthier lifestyles for their families",
  "Individuals restarting their health journey after previous failures",
  "People looking for realistic fat loss and lifestyle improvement",
  "Families wanting healthier habits together",
];

function BeliefCard({ card }: { card: typeof beliefs[0] }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const flipped = clicked || hovered;

  return (
    <div
      role="button"
      tabIndex={0}
      className="h-36 md:h-40 [perspective:1000px] cursor-pointer select-none focus:outline-none"
      onClick={() => setClicked((f) => !f)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && setClicked((f) => !f)
      }
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-border bg-background rounded-sm p-4 flex flex-col justify-between">
          <h4 className="text-sm md:text-base font-bold text-foreground leading-tight">
            {card.front}
          </h4>
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
            <span className="md:hidden">Tap</span>
            <span className="hidden md:inline">Hover or click</span>
          </span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-primary/30 bg-primary/5 rounded-sm p-4 flex items-center justify-center">
          <p className="text-xs md:text-sm text-foreground font-medium leading-relaxed text-center">
            {card.back}
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <SiteLayout>

      {/* ── ORIGIN STORY — no eyebrow ── */}
      <section className="container-editorial pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl">
          {/* <Reveal>
            <div className="h-0.5 w-12 bg-primary mb-8" />
          </Reveal> */}
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95]">
              Healthy living should fit{" "}
              <span className="text-primary">Real Life.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg md:text-xl font-semibold text-foreground leading-relaxed max-w-2xl">
              DUOFIT started from a simple observation.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Most people are not struggling because they don't care about
              health. They struggle because modern life makes consistency
              difficult. Busy schedules, stress, poor routines, outside food,
              screen time and unrealistic expectations slowly affect health
              over time.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We created DUOFIT to help people build healthier lifestyles in a
              more practical, realistic and sustainable way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ROW 1: Why Duofit Started | What We Believe ── */}
      <section className="border-t border-border">
        <div className="container-editorial py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">

            {/* LEFT — Why Duofit Started */}
            <Reveal delay={80}>
              <div className="border border-border rounded-sm p-7 md:p-10 h-full bg-card">
                <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight mb-8">
                  Why Duofit started
                </h2>
                <div className="space-y-6">
                  {[
                    "Over the years, we saw many people repeatedly start and stop their health journeys. Strict diets, temporary motivation, random online advice and extreme routines often worked only for a short time before real life took over again.",
                    "We experienced many of these struggles ourselves while balancing work, routines, family responsibilities and health. Improving our own lifestyle and seeing positive changes within our family made us realise that healthy living does not need to feel extreme or overwhelming.",
                    "DUOFIT was built to create a simpler approach — one focused on practical nutrition, movement, healthier routines and long-term consistency instead of short-term pressure.",
                  ].map((para, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT — What We Believe (values) */}
            <Reveal delay={160}>
              <div className="border border-border rounded-sm p-7 md:p-10 h-full bg-card">
                <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight mb-8">
                  What we believe
                </h2>
                <div className="space-y-0">
                  {values.map((v, i) => (
                    <div
  key={i}
  className={`py-4 border-b border-border/60 flex items-start gap-4 last:border-0 ${
    i % 2 === 1 ? "bg-cream/30 -mx-7 px-7 md:-mx-10 md:px-10" : ""
  }`}
>
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <p className="text-sm md:text-base font-semibold text-foreground">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── MEET THE FOUNDERS ── */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24">

          <Reveal delay={100}>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 md:mb-14">
              The people behind DUOFIT.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-sm aspect-[4/5] bg-muted">
                <img
                  // src={founderAfter}
                  alt="Nitesh and Nikitha — DUOFIT Founders"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={150}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  DUOFIT is led by{" "}
                  <span className="text-foreground font-semibold">
                    Nitesh and Nikitha
                  </span>
                  , a couple passionate about helping people improve health
                  through practical nutrition, movement and healthier daily
                  routines.
                </p>
              </Reveal>
              <Reveal delay={210}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Their combined experiences around fitness, family health,
                  discipline, consistency and lifestyle management helped shape
                  the foundation of DUOFIT and its practical approach to
                  healthy living.
                </p>
              </Reveal>
              <div className="space-y-5 pt-2">
                {[
                  {
                    name: "Nitesh",
                    bio: "ICF-accredited coach and pursuing a diploma in Nutrition and Fitness from INFS — bringing together coaching, nutrition and lifestyle guidance into the DUOFIT approach.",
                  },
                  {
                    name: "Nikitha",
                    bio: "Two-time national bronze medalist whose experience in athletics brings strong values of discipline, consistency and long-term fitness into DUOFIT.",
                  },
                ].map((founder, i) => (
                  <Reveal key={founder.name} delay={280 + i * 100}>
                    <div className="border-l-2 border-primary pl-5 py-1">
                      <h4 className="font-bold text-foreground mb-1">
                        {founder.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROW 2: What Makes Duofit Different | Who Is It For ── */}
      <section className="border-b border-border">
        <div className="container-editorial py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">

            {/* LEFT — What Makes Duofit Different (flip cards) */}
            <Reveal delay={80}>
              <div className="border border-border rounded-sm p-7 md:p-10 h-full bg-card">
                <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight mb-8">
                  What makes Duofit different.
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {beliefs.map((b, i) => (
                    <Reveal key={b.front} delay={i * 80}>
                      <BeliefCard card={b} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT — Who Is It For */}
            <Reveal delay={160}>
              <div className="border border-border rounded-sm p-7 md:p-10 h-full bg-card">
                <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight mb-4">
                  Who is DUOFIT for?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                  DUOFIT is designed for people looking for a more practical
                  and sustainable approach to health and fitness.
                </p>
                <div className="space-y-0">
                  {forWho.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-4 border-b border-border/60 last:border-0"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
               Our mission
            </span>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We want to help more people move away from extreme health trends
              and build healthier lifestyles that can realistically be
              sustained for years, not just weeks. Our goal is to make
              practical health guidance more approachable for individuals,
              parents and families trying to live healthier in today's world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary/5 border-t border-primary/20">
        <div className="container-editorial py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Start building a healthier lifestyle today.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all rounded-sm min-h-[48px]"
            >
              Start your journey <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

    </SiteLayout>
  );
}