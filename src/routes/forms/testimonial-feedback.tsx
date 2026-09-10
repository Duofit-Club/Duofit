import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { seo } from "@/lib/seo";
import { TestimonialFeedbackForm } from "@/components/forms/TestimonialFeedbackForm";

export const Route = createFileRoute("/forms/testimonial-feedback")({
  head: () =>
    seo({
      title: "Client Feedback — DUOFIT",
      description: "Share your DUOFIT journey — your feedback helps us understand the real impact of the program.",
      path: "/forms/testimonial-feedback",
      noindex: true,
    }),
  component: TestimonialFeedbackPage,
});

function TestimonialFeedbackPage() {
  return (
    <SiteLayout>
      <section className="container-editorial max-w-2xl py-16 md:py-20">
        <TestimonialFeedbackForm />
      </section>
    </SiteLayout>
  );
}