import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState, useCallback, useRef } from "react";
import { FounderJourney } from "@/components/site/FounderJourney";
import { Play, X } from "lucide-react";
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

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Progress — Duofit.club" },
      {
        name: "description",
        content: "Every journey starts somewhere. Better health is built through small consistent actions.",
      },
    ],
  }),
  component: Community,
});

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

  useEffect(() => {
    if (isPaused || slide.kind === "video") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => go(current + 1), 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, isPaused, slide.kind, go]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(current - 1);
      if (e.key === "ArrowRight") go(current + 1);
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [current, go]);

  const touchStart = useRef<number | null>(null);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {slide.kind === "video" && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="h-7 w-7 md:h-8 md:w-8 text-foreground ml-1" />
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
          <p className="text-white text-sm md:text-base font-medium tracking-wide">{slide.caption}</p>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); go(current - 1); }}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); go(current + 1); }}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 md:gap-3 mt-3 overflow-x-auto pb-1">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`relative shrink-0 rounded-sm overflow-hidden transition-all duration-200 ${i === current ? "ring-2 ring-primary ring-offset-2 opacity-100" : "opacity-50 hover:opacity-80"}`}
            style={{ width: "72px", height: "54px" }}
          >
            <img
              src={s.kind === "image" ? s.src : s.thumb}
              alt={s.caption}
              className="w-full h-full object-contain bg-muted/40"
            />
          </button>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-muted-foreground/40"}`}
          />
        ))}
      </div>

      {/* Video lightbox */}
      {videoOpen && slide.kind === "video" && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src={slide.src} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
          </div>
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

function Community() {
  return (
    <SiteLayout>

      {/* Hero */}
      <section className="container-editorial pt-12 md:pt-16 pb-8 md:pb-10">
  <Reveal delay={120}>
    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-foreground">
      Every Journey Starts Somewhere.
    </h1>
  </Reveal>
  <Reveal delay={240}>
    <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
      Better health is built through small consistent actions. From personal lifestyle improvements to community activities, every step forward matters.
    </p>
  </Reveal>
</section>

 {/* Section 2 — Kids Summer Camp */}
      <section className="container-editorial py-8 md:py-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
                Building Healthier Habits Through Activity.
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

        {/* Camp Stats */}
        <Reveal delay={160}>
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 md:p-7 mt-10 mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 ease-out">
  <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-primary transition-all duration-700 ease-out opacity-70 rounded-t-2xl" />
  <div className="grid grid-cols-3 gap-4">
            {[
              { value: "11", label: "Children Coached", sub: "Aged 6–14" },
              { value: "31 Days", label: "Duration", sub: "May 1 — May 31" },
              { value: "90 mins", label: "Daily Activity", sub: "Every session, every day" },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 md:p-6 rounded-sm border border-border bg-card">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground mt-1">{s.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
          </div>
        </Reveal>

        {/* Newspaper */}
        <Reveal delay={200}>
          <a
            href="https://suryanews.in/duofit-summer-camp-concludes-in-pragathi-nagar/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-5 md:p-6 border border-border/60 bg-card rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-primary/40 active:scale-[0.98] transition-all duration-500 group relative overflow-hidden"
          >
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
      </section>


      {/* Section 1 — Founder Transformation */}
      <FounderJourney />

     
      {/* Section 3 — We're Just Getting Started */}
      <section className="bg-cream border-y border-border">
        <div className="container-editorial py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal delay={120}>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              We're Just Getting Started.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              DUOFIT is growing through community participation, healthier routines and practical lifestyle improvements. We look forward to helping more individuals and families build better health that lasts.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] rounded-full min-h-[48px] overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95"
                style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                Start Your Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </SiteLayout>
  );
}