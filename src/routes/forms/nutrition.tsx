import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { NutritionForm } from "@/components/forms/NutritionForm";

export const Route = createFileRoute("/forms/nutrition")({
  component: NutritionPage,
});

function NutritionPage() {
  return (
    <SiteLayout>
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            to="/forms"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Forms
          </Link>
        </div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold">
            Nutrition Intake Form
          </h1>
          <p className="text-muted-foreground mt-3">
            Complete this assessment to help us personalize your nutrition strategy.
          </p>
        </div>

        <NutritionForm />
      </section>
    </SiteLayout>
  );
}