import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";


const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;
const BOOKING_MESSAGE =
  "Hi DUOFIT, I'd like to book a 15-minute Health Clarity Call.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect — Duofit.club" },
      {
        name: "description",
        content:
          "Whether you are trying to improve fitness, lose weight or build healthier routines — DUOFIT is here to help you take the first step.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    title: "WhatsApp",
    desc: "Reach out directly for conversations, questions or guidance.",
    href: WA_URL,
    bg: "#25D366",
    svg: (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.853l-.485-.287-5.003 1.194 1.237-4.863-.317-.5A13.236 13.236 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.878c-.398-.199-2.354-1.162-2.719-1.294-.364-.133-.63-.199-.895.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.976-1.183-1.056-1.982-2.361-2.214-2.759-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319s1.426 3.85 1.625 4.115c.199.265 2.806 4.283 6.797 6.007.95.41 1.691.655 2.269.839.953.304 1.821.261 2.507.158.765-.114 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    desc: "Follow our journey, activities and practical health content.",
    href: "https://instagram.com/duofit.club",
    bg: "radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    title: "Email",
    desc: "We personally respond to every message.",
    href: "mailto:support@duofit.club",
    bg: "#0078D4",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Form side */}
          <div className="lg:col-span-8">

            <Reveal delay={100}>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Let&apos;s Talk about your
                <br />
                <span className="text-primary">Health Goals.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Whether you are trying to improve fitness, lose weight, build
                healthier routines or simply feel better in everyday life —
                DUOFIT is here to help you take the first step in a practical
                and realistic way.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-3 text-sm text-muted-foreground italic">
                Tell us a little about where you are right now and your current
                lifestyle, challenges or health goals.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-10 overflow-hidden rounded-sm border border-border">
              </div>
            </Reveal>
          </div>

          {/* Channels side */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-4">

            {/* Featured — Book a Call */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">

                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  Free Consultation
                </div>

                <h3 className="text-2xl font-bold text-primary leading-tight">
                  Book a 15-Minute
                  <br />
                  Health Clarity Call
                </h3>

                <p className="mt-3 text-sm text-primary/80">
                  Choose a convenient time and receive instant confirmation.
                </p>

                <a
                  href="https://calendly.com/duofit-support/new-meeting"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95 "
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "#ffffff",
                  }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

                  <span className="relative z-10 flex items-center gap-2">
                    Schedule Your Call
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>

              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1 mt-2">
                Connect with DUOFIT
              </p>
            </Reveal>

            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 100}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-border bg-card rounded-sm p-5 hover:border-primary/50 hover:translate-x-1 active:scale-[0.98] transition-all min-h-[72px]"
                >
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: channel.bg }}
                  >
                    {channel.svg}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">
                      {channel.title}
                    </h4>
                    <span className="text-xs md:text-sm text-muted-foreground">
                      {channel.desc}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}