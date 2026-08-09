import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { MonthlyReviewForm } from "@/components/forms/MonthlyReviewForm";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/forms/monthly-review")({
  head: () =>
    seo({
      title: "Monthly Progress Review — DUOFIT",
      description:
        "Reflect on your health journey and help your DUOFIT coach personalize your next month's guidance.",
      path: "/forms/monthly-review",
      noindex: true,
    }),

  component: MonthlyReviewPage,
});

function MonthlyReviewPage() {
  return (
    <SiteLayout>
      <section className="container-editorial py-16">

        <Link
          to="/forms"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Back to Forms
        </Link>

        <div className="max-w-4xl mt-8">

          <h1 className="text-4xl font-bold">
            Monthly Progress Review
          </h1>

          <p className="mt-4 text-muted-foreground text-lg">
            Reflect on your progress over the past month.
            Your responses help your DUOFIT coach understand
            your journey and personalize your next month's guidance.
          </p>

        </div>

        <div className="mt-12">
          <MonthlyReviewForm />
        </div>

      </section>
    </SiteLayout>
  );
}