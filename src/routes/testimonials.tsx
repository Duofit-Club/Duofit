import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";
import test3Image from "@/assets/test-3.jpeg";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    seo({
      title: "Client Stories — DUOFIT",
      description: "Real people, real progress — individual journeys from DUOFIT clients.",
      path: "/testimonials",
    }),
  component: TestimonialsPage,
});

// Same source as the homepage snippet — add new entries here as they come
// in through the Client Feedback form; every field is optional except
// quote/name/role.
const journeys = [
  {
    name: "Amrita Das",
    role: "Corporate Professional",
    quote: "It has been a truly great learning experience. I particularly appreciated how you asked thoughtful and relevant questions that helped me reflect deeply and uncover some of my hidden strengths and traits. Our discussions about practical ways to work on these areas were extremely valuable and actionable.",
  },
  {
    name: "Manaswini",
    role: "Corporate Employee",
    quote: "The biggest change for me has been maintaining constant energy levels throughout the day — I used to have energy crashes by afternoon, and evenings were an ordeal. Working with DUOFIT, I've noticed a significant improvement. The experience is extremely different from other fitness apps and coaches — there's no standardized formula here. The diet, workout and nutritional gaps are personalized according to your body composition and the concerns you're actually facing, and that's really the best part.",
  },
];

function TestimonialsPage() {
  return (
    <SiteLayout>
      <section className="container-editorial py-16 md:py-24">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block text-center mb-3">
            Real People. Real Progress.
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-10 md:mb-12">
            Client Journeys.
          </h1>
        </Reveal>

        {/* Featured client story image */}
        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-3xl border border-border bg-card">

              <div className="h-72 md:h-full min-h-[320px]">
                <img
                  src={test3Image}
                  alt="A young client writing about their DUOFIT experience"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center p-7 md:p-9">
                <div>
                  <Quote className="h-7 w-7 text-primary/40 mb-4" />

                  <p className="text-base md:text-lg text-foreground leading-relaxed">
                    A glimpse into the experiences and stories that make every DUOFIT
                    journey meaningful.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-10">
          {journeys.map((j, i) => (
            <Reveal key={j.name} delay={i * 100}>
              <div className="border border-border bg-card rounded-3xl p-8 md:p-10">
                <Quote className="h-7 w-7 text-primary/40 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">"{j.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <span className="text-sm font-bold text-foreground">{j.name}</span>
                  <span className="text-sm text-muted-foreground"> — {j.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Start your own journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}