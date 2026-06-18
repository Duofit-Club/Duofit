import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Flower2,
  UserCheck,
  HeartHandshake,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";
import founderImg from "@/assets/founder-after.jpeg";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

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

const whyChoose = [
  {
    icon: Leaf,
    title: "Practical Approach",
    desc: "No extreme diets or unrealistic routines.",
  },
  {
    icon: Flower2,
    title: "Holistic Health",
    desc: "Looking beyond symptoms to understand root causes.",
  },
  {
    icon: UserCheck,
    title: "Personal Guidance",
    desc: "Support tailored to your goals, lifestyle and challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Built For Real Life",
    desc: "Strategies designed around work, family and everyday commitments.",
  },
];

const channels = [
  {
    title: "WhatsApp",
    desc: "Chat with us directly for quick responses.",
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
      <section className="container-editorial pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT — Heading, Why Choose, Consultation Card */}
          <div className="lg:col-span-7">

            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Let's talk about
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-1 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
                YOUR HEALTH<br />GOALS.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Whether you're looking to improve fitness, manage weight, build
                healthier habits or create a healthier lifestyle for your family,
                we'd love to understand your goals and see how DUOFIT can help.
              </p>
            </Reveal>

            {/* Why People Choose DUOFIT */}
            <Reveal delay={220}>
              <h2 className="mt-10 text-sm font-bold uppercase tracking-widest text-primary">
                Why People Choose DUOFIT
              </h2>
            </Reveal>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {whyChoose.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={260 + i * 60}>
                    <div className="border border-border rounded-sm bg-card p-4 h-full">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Consultation Card */}
            <Reveal delay={400}>
              <div className="mt-8 rounded-sm border border-border bg-card p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden bg-muted shrink-0">
                  <img
                    //src={founderImg}
                    // alt="Nitesh and Nikitha — DUOFIT"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Free Consultation
                  </span>
                  <h3 className="mt-1 font-bold text-lg md:text-xl text-foreground leading-snug">
                    Book a Free 15-Minute
                    <br className="hidden sm:block" /> Health Consultation
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Let's discuss your goals, challenges and next steps. No pressure, just clarity.
                  </p>
                  <a
                    href="https://calendly.com/duofit-support/new-meeting"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Your 15-Minute Call
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                    100% Confidential · No Obligation
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="rounded-sm border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-primary uppercase tracking-wide mb-6">
                  Tell Us About You
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>

        </div>

        {/* LET'S STAY CONNECTED */}
        <div className="mt-16 md:mt-20 border-t border-border pt-12">
          <Reveal>
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-primary mb-8">
              Let's Stay Connected
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 100}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 px-4 py-4 sm:py-0 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: channel.bg }}
                  >
                    {channel.svg}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{channel.title}</h4>
                    <span className="text-xs text-muted-foreground">{channel.desc}</span>
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