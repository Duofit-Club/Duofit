import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo } from "@/lib/seo";
import { HealthCheck } from "@/components/forms/HealthCheck";

export const Route = createFileRoute("/health-check")({
  head: () =>
    seo({
      title: "DUOFIT Health Check — How Healthy Are You, Really?",
      description:
        "Take DUOFIT's free 60-second Health Check to reflect on your everyday habits and get one personalized insight to start today.",
      path: "/health-check",
    }),
  component: HealthCheckPage,
});

function HealthCheckPage() {
  return (
    <SiteLayout>
      <section className="min-h-screen px-6 py-16 flex items-center justify-center">
        <HealthCheck />
      </section>
    </SiteLayout>
  );
}
