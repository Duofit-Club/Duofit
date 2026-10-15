import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Flower2,
  UserCheck,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";
import { seo } from "@/lib/seo";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;
const SESSION_MESSAGE =
  "Hi DUOFIT, I'd like to book a 15-minute session to understand more about your programs.";
const SESSION_WA_URL = `${WA_URL}?text=${encodeURIComponent(SESSION_MESSAGE)}`;

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Connect With DUOFIT — Book a Free 15-Minute Session",
      description:
        "Whether you are trying to improve fitness, lose weight or build healthier routines — DUOFIT is here to help you take the first step. Book a free consultation today.",
      path: "/contact",
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


function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial section-hero">
        <div className="space-y-8 md:space-y-10">

          {/* 1. TOP HEADING AND INTRODUCTION */}
          <div className="max-w-5xl">
            <Reveal>
              <span className="eyebrow">
                Let's Talk About
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-2">
                Your Health
                <br />
                Goals.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="lead mt-4">
                Whether you're looking to improve fitness, manage weight, build
                healthier habits or create a healthier lifestyle for your family,
                we'd love to understand your goals and see how DUOFIT can help.
              </p>
            </Reveal>
          </div>

          {/* 2. WHY PEOPLE CHOOSE DUOFIT */}
          <div>
            <Reveal delay={200}>
              <h2>
                Why People Choose DUOFIT
              </h2>
            </Reveal>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChoose.map((item, i) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={240 + i * 60}>
                    <div className="h-full rounded-xl border border-border bg-card p-5 md:p-6">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="h-compact">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* 3. CONTACT FORM */}
          <Reveal delay={200}>
            <div className="rounded-xl border border-border bg-card p-5 sm:p-7 md:p-9">
              <h2 className="mb-6 h-compact">
                Tell Us About You
              </h2>

              <ContactForm />
            </div>
          </Reveal>

          {/* 4. WHATSAPP SESSION OPTION */}
          <Reveal delay={260}>
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="max-w-2xl">
                  <span className="eyebrow">
                    15-Minute Session
                  </span>

                  <h3 className="mt-2 h-compact">
                    Not Sure Yet? Let's Talk First.
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    A quick, no-pressure conversation to understand your goals
                    and see if DUOFIT is the right fit for you.
                  </p>

                  <p className="mt-4 text-xs text-foreground/60 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                    100% Confidential · No Obligation
                  </p>
                </div>

                <div className="w-full md:w-auto md:min-w-[260px]">
                  <a
                    href={SESSION_WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full w-full px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      backgroundColor: "#25D366",
                      boxShadow: "0 6px 20px rgba(37,211,102,0.20)",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </SiteLayout>
  );
}
