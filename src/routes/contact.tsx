import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_NUMBER } from "@/components/site/WhatsAppFab";

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

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Reach out directly for conversations, questions or guidance.",
    href: WA_URL,
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Follow our journey, activities and practical health content.",
    href: "https://instagram.com",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "We personally respond to every message.",
    href: "mailto:support@duofit.club",
  },
];

function Contact() {
  return (
    <SiteLayout>
      <section className="container-editorial pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Form side */}
          <div className="lg:col-span-7">

            <Reveal delay={100}>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Let&apos;s Talk ablout your
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
          </div>

          {/* Channels side */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                Connect with DUOFIT
              </p>
            </Reveal>

            {channels.map((channel, i) => {
              const Icon = channel.icon;

              return (
                <Reveal key={channel.title} delay={i * 100}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 border border-border bg-card rounded-sm p-5 hover:border-primary/50 hover:translate-x-1 active:scale-[0.98] transition-all min-h-[72px]"
                  >
                    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
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
              );
            })}

            {/* <Reveal delay={380}>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { v: "PERSONAL", l: "Response" },
                  { v: "PRACTICAL", l: "Guidance" },
                  { v: "NO PRESSURE", l: "Just a Conversation" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="text-center border border-border rounded-sm p-3 md:p-4 bg-card"
                  >
                    <span className="block text-base md:text-lg font-bold text-primary">
                      {s.v}
                    </span>

                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal> */}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}