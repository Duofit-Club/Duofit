
import { useEffect, useRef, useState } from "react";
import dec2022 from "@/assets/founder-before.jpeg";
import mar2025 from "@/assets/founder-mid.jpeg";
import may2026 from "@/assets/founder-after.jpeg";

const PHOTOS = [
  { src: dec2022, date: "Dec 2022", label: "Starting Point" },
  { src: mar2025, date: "Mar 2025", label: "Visible Progress" },
  { src: may2026, date: "May 2026", label: "Stronger Every Day" },
];

const MILESTONES = [
  {
    date: "Sep 18, 2024",
    weight: "81.2 kg",
    bf: null as string | null,
    extra: null as string | null,
    note: "Decided to take control of my health.",
  },
  {
    date: "Sep 30, 2024",
    weight: "77.5 kg",
    bf: null,
    extra: null,
    note: "Early results through consistency and effort.",
  },
  {
    date: "Jun 19, 2025",
    weight: "74.5 kg",
    bf: "23.8% BF",
    extra: "Fat: 17.7 kg · Lean: 52.5 kg · BMI: 24.3",
    note: "Started tracking body composition to measure real progress.",
  },
  {
    date: "Aug 26, 2025",
    weight: "75.1 kg",
    bf: "24.8% BF",
    extra: "Fat: 18.6 kg · Lean: 56.5 kg · BMI: 24.2",
    note: "Fluctuations happened, but I stayed committed to the process.",
  },
  {
    date: "May 04, 2026",
    weight: "73.85 kg",
    bf: "20% BF",
    extra: "Fat: 14.75 kg · Lean: 59.10 kg · BMI: 23.9",
    note: "All the hard work started to show in numbers.",
  },
  {
    date: "May 19, 2026",
    weight: "72.25 kg",
    bf: "19% BF",
    extra: "Fat: 13.73 kg · Lean: 58.52 kg · BMI: 23.4",
    note: "A lifestyle built on discipline, not motivation.",
  },
];

const STATS = [
  { value: "9+", label: "Months", sub: "of consistency" },
  { value: "~9 kg", label: "Weight", sub: "reduced overall" },
  { value: "5.3%", label: "Body Fat", sub: "reduction" },
  { value: "+6 kg", label: "Lean Mass", sub: "gained" },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Photos ───────────────────────────────────────────────────────────────────

function TransformationPhotos() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="grid grid-cols-3 gap-2 md:gap-5">
      {PHOTOS.map((p, i) => (
        <div
          key={p.date}
          className="group relative overflow-hidden rounded-sm border border-border bg-card"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.7s ease ${i * 140}ms, transform 0.7s ease ${i * 140}ms`,
          }}
        >
          <div className="relative overflow-hidden aspect-[3/4]">
            <img
              src={p.src}
              alt={`${p.label} — ${p.date}`}
              className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-border/30">
              <div
                className="h-full bg-primary"
                style={{
                  width: visible ? (i === 0 ? "28%" : i === 1 ? "65%" : "100%") : "0%",
                  transition: `width 1s ease ${i * 140 + 500}ms`,
                }}
              />
            </div>
          </div>
          <div className="p-2 md:p-4">
            <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{p.date}</p>
            <p className="text-xs md:text-sm font-bold text-foreground mt-0.5">{p.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function JourneyStats() {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className="text-center p-3 md:p-5 rounded-sm border border-border bg-card hover:border-primary/40 transition-colors duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s ease ${i * 90}ms`,
          }}
        >
          <p className="text-xl md:text-3xl font-bold text-primary">{s.value}</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground mt-1">{s.label}</p>
          <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

function Divider({ label }: { label: string }) {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="flex items-center gap-3 my-8 md:my-10"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}
    >
      <div className="flex-1 h-px bg-border" />
      <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap px-1">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── Milestone content (no box) ───────────────────────────────────────────────

function MilestoneContent({
  m,
  align,
}: {
  m: typeof MILESTONES[0];
  align: "left" | "right";
}) {
  const ta = align === "right" ? "text-right" : "text-left";
  const row = align === "right" ? "justify-end" : "justify-start";
  return (
    <div className={ta}>
      <span
        className="inline-block text-[8px] md:text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full mb-1.5"
        style={{
          color: "var(--color-primary)",
          background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-primary) 28%, transparent)",
        }}
      >
        {m.date}
      </span>
      <div className={`flex items-baseline gap-1.5 flex-wrap ${row}`}>
        <span className="text-base md:text-xl font-bold text-foreground leading-none">{m.weight}</span>
        {m.bf && (
          <span className="text-xs md:text-sm font-semibold text-primary">{m.bf}</span>
        )}
      </div>
      {m.extra && (
        <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{m.extra}</p>
      )}
      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-relaxed">{m.note}</p>
    </div>
  );
}

// ─── Vertical Timeline ────────────────────────────────────────────────────────
function VerticalTimeline() {
  const { ref: wrapRef, visible } = useInView(0.04);
  const [lineWidthPx, setLineWidthPx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    const totalW = trackRef.current?.scrollWidth ?? 800;
    const duration = MILESTONES.length * 160 + 300;
    let start: number | null = null;
    function tick(ts: number) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setLineWidthPx(eased * totalW);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible]);

  const DOT = 36;

  return (
    <div ref={wrapRef} className="w-full overflow-x-auto pb-4">
      <style>{`
        @keyframes ping-once {
          0%   { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      {/* ── DESKTOP: horizontal ── */}
      <div className="hidden md:block relative" style={{ minWidth: `${MILESTONES.length * 180}px` }}>

        {/* Track */}
        <div ref={trackRef} className="relative h-0.5 bg-border mx-8 my-0"
          style={{ marginTop: "160px" }}
        >
          {/* Animated fill */}
          <div
            className="absolute top-0 left-0 h-full bg-primary"
            style={{ width: `${lineWidthPx}px`, transition: "none" }}
          />

          {/* Dots + content */}
          {MILESTONES.map((m, i) => {
            const pct = i / (MILESTONES.length - 1);
            const delay = i * 160 + 80;
            const isUp = i % 2 === 0;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${pct * 100}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Connector line */}
                <div
                  className="absolute left-1/2 bg-border"
                  style={{
                    width: "1px",
                    height: "36px",
                    transform: "translateX(-50%)",
                    top: isUp ? "auto" : `${DOT / 2}px`,
                    bottom: isUp ? `${DOT / 2}px` : "auto",
                  }}
                />

                {/* Dot */}
                <div
                  className="flex items-center justify-center rounded-full bg-primary text-white font-bold z-10 overflow-hidden relative"
                  style={{
                    width: `${DOT}px`,
                    height: `${DOT}px`,
                    fontSize: "13px",
                    opacity: visible ? 1 : 0,
                    scale: visible ? "1" : "0",
                    transition: `opacity 0.35s ease ${delay}ms, scale 0.4s ease ${delay}ms`,
                    boxShadow: "0 0 0 5px color-mix(in srgb, var(--color-primary) 18%, transparent)",
                  }}
                >
                  {i + 1}
                  {visible && (
                    <span
                      className="absolute inset-0 rounded-full bg-primary"
                      style={{ animation: `ping-once 0.6s ease-out ${delay + 200}ms 1 both` }}
                    />
                  )}
                </div>

                {/* Content — alternates above / below */}
                <div
                  className="absolute w-40"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    ...(isUp
                      ? { bottom: `${DOT + 36 + 8}px`, textAlign: "center" }
                      : { top: `${DOT + 36 + 8}px`, textAlign: "center" }
                    ),
                    opacity: visible ? 1 : 0,
                    ...(isUp
                      ? {
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.55s",
                        transitionTimingFunction: "ease",
                        transitionDelay: `${delay + 80}ms`,
                        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)"
                      }
                      : {
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.55s",
                        transitionTimingFunction: "ease",
                        transitionDelay: `${delay + 80}ms`,
                        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(12px)"
                      }
                    ),
                  }}
                >
                  {/* Date badge */}
                  <span
                    className="inline-block text-[8px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full mb-1.5"
                    style={{
                      color: "var(--color-primary)",
                      background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--color-primary) 28%, transparent)",
                    }}
                  >
                    {m.date}
                  </span>

                  {/* Weight + BF */}
                  <div className="flex items-baseline gap-1 justify-center flex-wrap">
                    <span className="text-base font-bold text-foreground leading-none">{m.weight}</span>
                    {m.bf && (
                      <span className="text-[11px] font-semibold text-primary">{m.bf}</span>
                    )}
                  </div>

                  {/* Extra stats */}
                  {m.extra && (
                    <p className="text-[8px] text-muted-foreground mt-0.5 leading-relaxed">{m.extra}</p>
                  )}

                  {/* Note */}
                  <p className="text-[9px] text-muted-foreground mt-1 leading-relaxed">{m.note}</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom spacing for "below" content */}
        <div style={{ height: "180px" }} />
      </div>

      {/* ── MOBILE: horizontal scroll ── */}
      <div className="md:hidden relative overflow-x-auto pb-4">
        <div
          className="relative"
          style={{ minWidth: `${MILESTONES.length * 140}px` }}
        >
          {/* Track base */}
          <div
            className="absolute bg-border"
            style={{
              top: "108px",
              left: "16px",
              right: "16px",
              height: "2px",
            }}
          />
          {/* Animated fill */}
          <div
            className="absolute bg-primary"
            style={{
              top: "108px",
              left: "16px",
              height: "2px",
              width: `${lineWidthPx}px`,
              transition: "none",
            }}
          />

          {/* Dots + content */}
          <div className="flex justify-between px-4">
            {MILESTONES.map((m, i) => {
              const delay = i * 160 + 80;
              const isUp = i % 2 === 0;
              const DOT_M = 28;

              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center"
                  style={{ width: "120px", flexShrink: 0 }}
                >
                  {/* Content ABOVE track */}
                  <div
                    className="w-full text-center"
                    style={{
                      minHeight: "80px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      paddingBottom: "8px",
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : isUp ? "translateY(-10px)" : "translateY(0)",
                      transition: `opacity 0.55s ease ${delay + 80}ms, transform 0.55s ease ${delay + 80}ms`,
                    }}
                  >
                    {isUp && (
                      <>
                        <span
                          className="inline-block text-[7px] font-bold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded-full mb-1 mx-auto"
                          style={{
                            color: "var(--color-primary)",
                            background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--color-primary) 28%, transparent)",
                            maxWidth: "fit-content",
                          }}
                        >
                          {m.date}
                        </span>
                        <div className="flex items-baseline gap-1 justify-center flex-wrap">
                          <span className="text-xs font-bold text-foreground leading-none">
                            {m.weight}
                          </span>
                          {m.bf && (
                            <span className="text-[9px] font-semibold text-primary">
                              {m.bf}
                            </span>
                          )}
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-0.5 leading-relaxed px-1">
                          {m.note}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Connector up */}
                  {isUp && (
                    <div
                      className="bg-border"
                      style={{ width: "1px", height: "12px" }}
                    />
                  )}

                  {/* Dot */}
                  <div
                    className="flex items-center justify-center rounded-full bg-primary text-white font-bold z-10 overflow-hidden relative shrink-0"
                    style={{
                      width: `${DOT_M}px`,
                      height: `${DOT_M}px`,
                      fontSize: "10px",
                      opacity: visible ? 1 : 0,
                      scale: visible ? "1" : "0",
                      transition: `opacity 0.35s ease ${delay}ms, scale 0.4s ease ${delay}ms`,
                      boxShadow:
                        "0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent)",
                    }}
                  >
                    {i + 1}
                    {visible && (
                      <span
                        className="absolute inset-0 rounded-full bg-primary"
                        style={{
                          animation: `ping-once 0.6s ease-out ${delay + 200}ms 1 both`,
                        }}
                      />
                    )}
                  </div>

                  {/* Connector down */}
                  {!isUp && (
                    <div
                      className="bg-border"
                      style={{ width: "1px", height: "12px" }}
                    />
                  )}

                  {/* Content BELOW track */}
                  <div
                    className="w-full text-center"
                    style={{
                      minHeight: "80px",
                      paddingTop: "8px",
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : !isUp ? "translateY(10px)" : "translateY(0)",
                      transition: `opacity 0.55s ease ${delay + 80}ms, transform 0.55s ease ${delay + 80}ms`,
                    }}
                  >
                    {!isUp && (
                      <>
                        <span
                          className="inline-block text-[7px] font-bold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded-full mb-1 mx-auto"
                          style={{
                            color: "var(--color-primary)",
                            background:
                              "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                            border:
                              "1px solid color-mix(in srgb, var(--color-primary) 28%, transparent)",
                            maxWidth: "fit-content",
                          }}
                        >
                          {m.date}
                        </span>
                        <div className="flex items-baseline gap-1 justify-center flex-wrap">
                          <span className="text-xs font-bold text-foreground leading-none">
                            {m.weight}
                          </span>
                          {m.bf && (
                            <span className="text-[9px] font-semibold text-primary">
                              {m.bf}
                            </span>
                          )}
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-0.5 leading-relaxed px-1">
                          {m.note}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Closing quote ────────────────────────────────────────────────────────────

function ClosingQuote() {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="mt-12 px-5 md:px-10 py-6 md:py-8 rounded-sm border border-border bg-card relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <span
        className="absolute -top-2 left-4 text-7xl md:text-8xl font-bold leading-none select-none pointer-events-none"
        style={{ color: "var(--color-primary)", opacity: 0.1 }}
      >
        "
      </span>
      <p className="relative text-sm md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto text-center font-medium">
        This journey is not just about weight or body fat. It's about building discipline,
        staying consistent and becoming a{" "}
        <span className="font-bold text-primary">stronger version</span>{" "}
        of myself inside and out.
      </p>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function FounderJourney() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.1);

  return (
    <section className="bg-cream border-y border-border">
      <div className="container-editorial py-12 md:py-24">

        {/* Header */}
        <div ref={headerRef}>
          <h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 80ms, transform 0.65s ease 80ms",
            }}
          >
            The Journey That Inspired DUOFIT.
          </h2>
          <p
            className="mt-3 md:mt-4 text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 160ms, transform 0.65s ease 160ms",
            }}
          >
            A journey of discipline, consistency and self-belief — from struggling with
            overweight and low energy to building strength and becoming the best version of myself.
          </p>
        </div>

        {/* Photos */}
        <div className="mt-8 md:mt-10">
          <TransformationPhotos />
        </div>

        {/* Stats */}
        <Divider label="The Journey in Numbers" />
        <JourneyStats />

        {/* Timeline */}
        <Divider label="Milestone by Milestone" />
        <VerticalTimeline />

        {/* Quote */}
        <ClosingQuote />

      </div>
    </section>
  );
}