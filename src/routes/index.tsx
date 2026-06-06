import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-lifestyle-new.jpg";
import heroMobileImg from "@/assets/hero-lifestyle-mobile.jpg";
import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import assestance from "@/assets/slideshow/assestance.jpeg";
import drill1 from "@/assets/slideshow/drill.jpg";
import drill2 from "@/assets/slideshow/drill_2.jpg";
import cert1 from "@/assets/slideshow/certificate_1.jpeg";
import cert2 from "@/assets/slideshow/certificate_2.jpeg";
import cert3 from "@/assets/slideshow/certificate_3.jpeg";
import groupPhoto from "@/assets/slideshow/group photo.jpeg";
import review1 from "@/assets/slideshow/review_1.jpg";
import review2 from "@/assets/slideshow/review_2.jpg";
import review3 from "@/assets/slideshow/review_3.jpg";
import review4 from "@/assets/slideshow/review_4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUOFIT — Sustainable Health & Lifestyle Coaching" },
      { name: "description", content: "Helping people stay healthy through practical Nutrition, Movement and Healthy Habits that fit everyday life." },
    ],
  }),
  component: Home,
});

const highlights = [
  { t: "Nutrition", d: "Simple food choices that work with your routine and availability.", corner: "tl" },
  { t: "Fitness & Movement", d: "Helping your body move consistently instead of extreme routines.", corner: "tr" },
  { t: "Healthy Habits", d: "Small sustainable changes that become easier to maintain.", corner: "bl" },
  { t: "Family Health", d: "Helping families build healthier routines together.", corner: "br" },
];
// ── GALLERY — replace with your real imports when ready ──────────────
// import g1 from "@/assets/gallery/photo1.jpg";
// import g2 from "@/assets/gallery/photo2.jpg";
// import g3 from "@/assets/gallery/photo3.jpg";
// import g4 from "@/assets/gallery/photo4.jpg";
// import g5 from "@/assets/gallery/photo5.jpg";
// const VIDEO_SRC = "https://www.youtube.com/embed/YOUR_ID?autoplay=1";

type GallerySlide =
  | { kind: "image"; src: string; caption: string }
  | { kind: "video"; thumb: string; src: string; caption: string };

const SLIDES: GallerySlide[] = [
  { kind: "image", src: assestance, caption: "Nikitha coaching kids — morning session" },
  { kind: "image", src: drill1, caption: "Physical drills and movement activities" },
  { kind: "image", src: drill2, caption: "Kids giving their best effort every day" },
  { kind: "image", src: cert1, caption: "Certificate presentation — camp closing day" },
  { kind: "image", src: cert2, caption: "Every child recognised for their dedication" },
  { kind: "image", src: cert3, caption: "Celebrating each child's achievement" },
  { kind: "image", src: groupPhoto, caption: "The DUOFIT Summer Camp family — May 2025" },
  { kind: "image", src: review1, caption: "Parent feedback — Yadadri Kotireddy" },
  { kind: "image", src: review2, caption: "Parent feedback — Prabhakar" },
  { kind: "image", src: review3, caption: "Parent feedback — Yadadri Praveen" },
  { kind: "image", src: review4, caption: "A heartfelt letter from Rueyansh 💚" },
];

function MediaGallery() {
  const [current, setCurrent] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = SLIDES.length;
  const slide = SLIDES[current];

  const go = useCallback((idx: number) => {
    setCurrent((idx + total) % total);
  }, [total]);

  // Auto-advance — pauses on video slide or manual interaction
  useEffect(() => {
    if (isPaused || slide.kind === "video") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => go(current + 1), 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, isPaused, slide.kind, go]);

  // Keyboard navigation
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(current - 1);
      if (e.key === "ArrowRight") go(current + 1);
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [current, go]);

  // Touch swipe
  const touchStart = useRef<number | null>(null);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ── Main slide area ── */}
      <div
        className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-muted/40 cursor-pointer group"
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) go(current + (diff > 0 ? 1 : -1));
          touchStart.current = null;
        }}
        onClick={() => { if (slide.kind === "video") setVideoOpen(true); }}
      >
        {/* Slides */}
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img
              src={s.kind === "image" ? s.src : s.thumb}
              alt={s.caption}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}

        {/* Video play button */}
        {slide.kind === "video" && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="h-7 w-7 md:h-8 md:w-8 text-foreground ml-1" />
            </div>
          </div>
        )}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
          <p className="text-white text-sm md:text-base font-medium tracking-wide">
            {slide.caption}
          </p>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); go(current - 1); }}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); go(current + 1); }}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="flex gap-2 md:gap-3 mt-3 overflow-x-auto pb-1">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`relative shrink-0 rounded-sm overflow-hidden transition-all duration-200 
              ${i === current
                ? "ring-2 ring-primary ring-offset-2 opacity-100"
                : "opacity-50 hover:opacity-80"
              }`}
            style={{ width: "72px", height: "54px" }}
            aria-label={s.caption}
          >
            <img
              src={s.kind === "image" ? s.src : s.thumb}
              alt={s.caption}
              className="w-full h-full object-contain bg-muted/40"
            />
            {s.kind === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="h-3 w-3 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-1.5 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${i === current
              ? "w-6 h-2 bg-primary"
              : "w-2 h-2 bg-border hover:bg-muted-foreground/40"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Video lightbox ── */}
      {videoOpen && slide.kind === "video" && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={slide.src}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      )}

    </div>
  );
}

function VennDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    {
      label: "Nutrition",
      desc: "Simple food choices that work with your routine and availability.",
      cx: 300,
      cy: 170,
      light: "#34d399",
      dark: "#059669",
    },
    {
      label: "Fitness & Movement",
      desc: "Helping your body move consistently instead of extreme routines.",
      cx: 430,
      cy: 300,
      light: "#fb923c",
      dark: "#ea580c",
    },
    {
      label: "Family Health",
      desc: "Helping families build healthier routines together.",
      cx: 300,
      cy: 430,
      light: "#c084fc",
      dark: "#7c3aed",
    },
    {
      label: "Healthy Habits",
      desc: "Small sustainable changes that become easier to maintain.",
      cx: 170,
      cy: 300,
      light: "#38bdf8",
      dark: "#0284c7",
    },
  ];

  const R = 130;
  const CX = 300;
  const CY = 300;

  const displayItems =
    active !== null
      ? [
        ...items.filter((_, i) => i !== active),
        items[active],
      ]
      : items;

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-full max-w-[700px] mx-auto overflow-visible">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-auto"
          style={{ overflow: "visible" }}
        >
          <defs>
            {items.map((item, i) => (
              <radialGradient
                key={i}
                id={`rg${i}`}
                cx="35%"
                cy="30%"
                r="75%"
              >
                <stop offset="0%" stopColor={item.light} />
                <stop offset="100%" stopColor={item.dark} />
              </radialGradient>
            ))}

            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="12"
                floodOpacity="0.22"
              />
            </filter>
          </defs>

          {displayItems.map((item) => {
            const i = items.findIndex(
              (x) => x.label === item.label
            );

            const isActive = active === i;
            const isInactive =
              active !== null && active !== i;

            return (
              <g
                key={i}
                onClick={() =>
                  setActive(active === i ? null : i)
                }
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  cursor: "pointer",
                  filter: isActive
                    ? `drop-shadow(0 0 30px ${item.dark})`
                    : "url(#shadow)",
                }}
              >
                <circle
                  cx={item.cx}
                  cy={item.cy}
                  r={isActive ? R + 18 : R}
                  fill={`url(#rg${i})`}
                  fillOpacity={
                    isActive
                      ? 0.95
                      : isInactive
                        ? 0.45
                        : 0.78
                  }
                  style={{
                    transition: "all .35s ease",
                  }}
                />

                {item.label === "Fitness & Movement" ? (
                  <>
                    <text
                      x={item.cx}
                      y={item.cy - 10}
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="900"
                      stroke="rgba(0,0,0,0.15)"
                      strokeWidth="0.5"
                      paintOrder="stroke"
                    >
                      FITNESS &
                    </text>

                    <text
                      x={item.cx}
                      y={item.cy + 12}
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="900"
                      stroke="rgba(0,0,0,0.15)"
                      strokeWidth="0.5"
                      paintOrder="stroke"
                    >
                      MOVEMENT
                    </text>
                  </>
                ) : (
                  <text
                    x={item.cx}
                    y={item.cy + 6}
                    textAnchor="middle"
                    fill="white"
                    fontSize="15"
                    fontWeight="900"
                    stroke="rgba(0,0,0,0.15)"
                    strokeWidth="0.5"
                    paintOrder="stroke"
                    letterSpacing="0.4"
                  >
                    {item.label.toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}

          {/* Center Circle */}
          <g style={{ pointerEvents: "none" }}>
            <circle
              cx={CX}
              cy={CY}
              r="70"
              fill="#ffffff"
              stroke="#16a34a"
              strokeWidth="4"
              style={{
                filter:
                  "drop-shadow(0 8px 18px rgba(0,0,0,0.15))",
              }}
            />

            <text
              x={CX}
              y={CY + 6}
              textAnchor="middle"
              fill="#15803d"
              fontSize="20"
              fontWeight="800"
            >
              HEALTH
            </text>
          </g>
        </svg>
      </div>

      <div className="w-full max-w-[700px] min-h-[80px]">
        {active !== null ? (
          <div
            className="rounded-xl p-4 border text-center"
            style={{
              background: `${items[active].light}15`,
              borderColor: `${items[active].light}55`,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: items[active].dark }}
            >
              {items[active].label}
            </p>

            <p className="text-sm text-muted-foreground">
              {items[active].desc}
            </p>
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

      {/* HERO — responsive height, separate mobile/desktop crops */}
      <section className="relative w-full h-[100dvh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-foreground text-background">
        {/* Responsive picture */}
        <picture className="absolute inset-0 block w-full h-full">
          <source media="(max-width: 767px)" srcSet={heroMobileImg} />
          <source media="(min-width: 768px)" srcSet={heroImg} />
          <img
            src={heroMobileImg}
            alt="Real people, real results"
            className="w-full h-full object-cover object-[50%_15%] md:object-[70%_25%]" />
        </picture>

        {/* Mobile overlay: left-to-right gradient to protect text, and vertical gradient */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.75) 0%, oklch(0.12 0.04 145 / 0.35) 35%, transparent 70%)"
          }}
        />

        {/* Desktop overlays */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 145 / 0.18) 0%, oklch(0.18 0.04 145 / 0.45) 100%)" }}
        />
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{ background: "linear-gradient(90deg, oklch(0.12 0.04 145 / 0.82) 0%, oklch(0.14 0.04 145 / 0.60) 30%, oklch(0.14 0.04 145 / 0.18) 55%, transparent 72%)" }}
        />

        {/* Text block — absolute overlay on both mobile and desktop */}
        <div className="absolute inset-0 z-10 flex items-start md:items-center pt-24 md:pt-0">
          <div
  className="container-editorial w-full"
>
  <div className="max-w-[70%] sm:max-w-[65%] md:max-w-[380px] lg:max-w-[440px] text-left md:-translate-x-[60px]">
              <Reveal>
                <h1
                  className="font-display leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]"
                  style={{ color: "var(--color-accent)", fontSize: "clamp(2rem, 6vw, 5.25rem)", fontWeight: 500 }}
                >
                  <span className="block">Built around</span>
                  <span className="block italic">your life</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 md:mt-6 text-xs md:text-lg leading-[1.6] md:leading-[1.8] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]" style={{ color: "oklch(0.97 0.018 85)" }}>
                  Helping people stay healthy through practical{" "}
                  <span className="font-semibold" style={{ color: "var(--color-accent)" }}>Nutrition</span>,{" "}
                  <span className="font-semibold" style={{ color: "var(--color-accent)" }}>Movement</span> and{" "}
                  <span className="font-semibold" style={{ color: "var(--color-accent)" }}>Healthy Habits</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>




      {/* WHY DUOFIT */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-14 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Health should work with your life, not against it.
                </h2>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Duofit focuses on helping people build healthier habits that are realistic and sustainable. Most people struggle not because of information or motivation — their routines don't fit their schedules, responsibilities and lifestyle.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <VennDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-editorial py-14 md:py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                — Kids Summer Camp · Pragathi Nagar · May 2025
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
                Where healthy habits begin.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A month of movement, fun and learning — real kids building real habits.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <MediaGallery />
        </Reveal>
      </section>

      {/* CAMP STATS */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-12 md:py-16">

          {/* Stats row */}
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: "11", label: "Children Coached", sub: "Aged 6–14" },
                { value: "31 Days", label: "Duration", sub: "May 1 — May 31" },
                { value: "100%", label: "Certified", sub: "Every child recognised" },
                { value: "Pragathi", label: "Nagar, Hyderabad", sub: "Community programme" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 md:p-6 rounded-sm border border-border bg-card">
                  <p className="text-xl md:text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground mt-1">{s.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Newspaper feature */}
          <Reveal delay={120}>
            <a
              href="https://suryanews.in/duofit-summer-camp-concludes-in-pragathi-nagar/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 md:p-6 border border-border bg-card rounded-sm hover:border-primary/50 hover:translate-x-1 active:scale-[0.98] transition-all group"
            >
              {/* Newspaper icon */}
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 text-xl">
                📰
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">
                  As featured in — Surya News
                </p>
                <h4 className="font-bold text-foreground text-sm md:text-base leading-snug">
                  DUOFIT Summer Camp Concludes in Pragathi Nagar
                </h4>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                  suryanews.in · Read the full feature story
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </a>
          </Reveal>

        </div>
      </section>

      {/* REALITY TEASER */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight tracking-tight text-foreground">
              Do you want to know why most health journeys fail?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              Health becomes difficult when it is built around shortcuts, extreme routines and temporary motivation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/reality"
              className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground active:scale-95 transition-all rounded-sm min-h-[44px]"
            >
              Explore Reality Check <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>


    </SiteLayout>
  );
}