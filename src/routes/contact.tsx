import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Flower2,
  UserCheck,
  HeartHandshake,
  Calendar,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;
const SESSION_MESSAGE =
  "Hi DUOFIT, I'd like to book a 15-minute session to understand more about your programs.";
const SESSION_WA_URL = `${WA_URL}?text=${encodeURIComponent(SESSION_MESSAGE)}`;

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

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* LEFT column — Heading, then Form */}
          <div className="flex flex-col gap-10">

            {/* Heading / intro */}
            <div>
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
            </div>

            {/* Form */}
            <Reveal delay={150}>
              <div className="rounded-sm border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-bold text-primary uppercase tracking-wide mb-6">
                  Tell Us About You
                </h2>
                <ContactForm />
              </div>
            </Reveal>

          </div>

          {/* RIGHT column — Why Choose, then 15-Min Session */}
          <div className="flex flex-col gap-10">

            {/* Why People Choose DUOFIT */}
            <div>
              <Reveal delay={220}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                  Why People Choose DUOFIT
                </h2>
              </Reveal>
              <div className="mt-5 grid grid-cols-2 gap-3">
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
            </div>

            {/* 15-Minute Session */}
            <Reveal delay={400}>
              <div className="rounded-sm border border-border bg-card p-6 md:p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  15-Minute Session
                </span>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-foreground leading-snug">
                  Not Sure Yet? Let's Talk First.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A quick, no-pressure conversation to understand your goals
                  and see if DUOFIT is the right fit for you.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="https://calendly.com/duofit-support/new-meeting"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    15-Min Session via Call
                  </a>
                  <a
                    href={SESSION_WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    15-Min Session via WhatsApp
                  </a>
                </div>

                <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                  100% Confidential · No Obligation
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>
    </SiteLayout>
  );
}