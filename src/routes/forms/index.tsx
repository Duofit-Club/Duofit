import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardList, HeartPulse, MessageSquare, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/forms/")({
  component: FormsHub,
});

const forms = [
  {
    title: "Nutrition Intake Form",
    desc: "Help us understand your eating habits and goals.",
    icon: ClipboardList,
    href: "/forms/nutrition",
    time: "10 mins",
  }
];

function FormsHub() {
  return (
    <SiteLayout>
      <section className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">DUOFIT Forms</h1>
          <p className="text-muted-foreground mt-3">
            Choose the form that matches your requirement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {forms.map((form) => {
            const Icon = form.icon;

            return (
              <Link
                key={form.title}
                to={form.href}
                className="border rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">{form.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {form.desc}
                    </p>

                    <span className="inline-block mt-4 text-xs font-semibold uppercase text-primary">
                      {form.time}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}