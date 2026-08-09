import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { sendMonthlyReview } from "@/utils/sendMonthlyReview";

export function MonthlyReviewForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    visibleChanges: "",
    valuablePart: [] as string[],
    valuablePartOther: "",
    doingDifferently: "",
    improveArea: "",
    improveAreaOther: "",
    journeyMessage: "",
  });

  const valuableOptions = [
    "Personalized guidance",
    "Nutrition guidance",
    "Movement / Fitness guidance",
    "Accountability",
    "Building sustainable habits",
    "Understanding my health better",
    "Flexibility around my lifestyle",
    "Having someone to guide me when I struggle",
    "Other",
  ];

  const improveOptions = [
    "Nutrition",
    "Energy",
    "Sleep & Recovery",
    "Fitness / Movement",
    "Weight / Body Composition",
    "Consistency",
    "Stress / Wellbeing",
    "Other",
  ];

  const handleTextChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleValue = (value: string) => {
    if (formData.valuablePart.includes(value)) {
      setFormData({
        ...formData,
        valuablePart: formData.valuablePart.filter(
          (item) => item !== value
        ),
      });
    } else {
      setFormData({
        ...formData,
        valuablePart: [...formData.valuablePart, value],
      });
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const success = await sendMonthlyReview(formData);

    setLoading(false);

    if (success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-primary/20 bg-primary/5 p-12 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>

        <h2 className="text-4xl font-bold">
          Thank You!
        </h2>

        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">

          Your Monthly Progress Review has been
          submitted successfully.

          <br /><br />

          Your DUOFIT coach will review your
          responses before your next consultation
          and personalize your guidance.

        </p>

      </div>
    );
  }

  return (

<form
onSubmit={handleSubmit}
className="space-y-10"
>

{/* Question 1 */}

<section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

<div className="flex items-center gap-4 mb-6">

<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
1
</div>

<div>

<h2 className="text-2xl font-bold">
Visible Changes
</h2>

<p className="text-muted-foreground">
Looking back to when you started DUOFIT, what visible or noticeable changes have you seen in yourself so far?
</p>

</div>

</div>

<textarea
name="visibleChanges"
rows={7}
required
value={formData.visibleChanges}
onChange={handleTextChange}
placeholder="share your experience.."
className="w-full rounded-2xl border border-border bg-background p-5 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
/>

</section>

{/* Question 2 */}

<section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

<div className="flex items-center gap-4 mb-8">

<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
2
</div>

<div>

<h2 className="text-2xl font-bold">
Most Valuable Part
</h2>

<p className="text-muted-foreground">
What has been the most valuable part of your DUOFIT experience so far?
</p>

</div>

</div>

<div className="grid md:grid-cols-2 gap-4">

{valuableOptions.map((item) => (

<label
key={item}
className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1

${
formData.valuablePart.includes(item)

? "border-primary bg-primary/10"

: "border-border hover:border-primary"
}`}
>

<input
type="checkbox"
className="hidden"
checked={formData.valuablePart.includes(item)}
onChange={() => toggleValue(item)}
/>

{item}

</label>

))}

</div>

{formData.valuablePart.includes("Other") && (

<input
type="text"
name="valuablePartOther"
value={formData.valuablePartOther}
onChange={handleTextChange}
placeholder="Please specify..."
className="mt-6 w-full rounded-xl border border-border p-4"
/>

)}

</section>
        {/* Question 3 */}

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

          <div className="flex items-center gap-4 mb-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              3
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                New Healthy Habits
              </h2>

              <p className="text-muted-foreground">
                What is one thing you are doing differently now compared with when you started?
              </p>

            </div>

          </div>

          <textarea
            required
            rows={6}
            name="doingDifferently"
            value={formData.doingDifferently}
            onChange={handleTextChange}
            placeholder="Describe about the changes in you...."
            className="w-full rounded-2xl border border-border bg-background p-5 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </section>

        {/* Question 4 */}

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

          <div className="flex items-center gap-4 mb-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              4
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Future Focus
              </h2>

              <p className="text-muted-foreground">
               What is one area of your health or lifestyle you would most like to improve further?
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            {improveOptions.map((item) => (

              <label
                key={item}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1

                ${
                  formData.improveArea === item
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary"
                }`}
              >

                <input
                  type="radio"
                  name="improveArea"
                  value={item}
                  checked={formData.improveArea === item}
                  onChange={handleTextChange}
                  className="hidden"
                />

                {item}

              </label>

            ))}

          </div>

          {formData.improveArea === "Other" && (

            <input
              type="text"
              name="improveAreaOther"
              value={formData.improveAreaOther}
              onChange={handleTextChange}
              placeholder="Please specify..."
              className="mt-6 w-full rounded-xl border border-border p-4"
            />

          )}

        </section>

        {/* Question 5 */}

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

          <div className="flex items-center gap-4 mb-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              5
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Your DUOFIT Journey
              </h2>

              <p className="text-muted-foreground">
                If you could describe your DUOFIT journey so far to someone who is where you were when you started, what would you tell them?
              </p>

            </div>

          </div>

          <textarea
            required
            rows={8}
            name="journeyMessage"
            value={formData.journeyMessage}
            onChange={handleTextChange}
            placeholder="Share your experience..."
            className="w-full rounded-2xl border border-border bg-background p-5 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

        </section>

        {/* Bottom Message */}

        <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8">

          <div className="text-center max-w-3xl mx-auto">

            <h3 className="text-3xl font-bold">
              Thank You 💚
            </h3>

            <p className="mt-5 text-muted-foreground leading-8">

              Every monthly review helps your DUOFIT coach
              understand your progress, celebrate your
              achievements, identify new opportunities,
              and personalize your next month's guidance.

            </p>

          </div>

        </section>

        {/* Submit Button */}

        <div className="flex justify-center">

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-green-600 px-10 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-60"
          >

            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Submit Review
              </>
            )}

          </button>

        </div>

      </form>
    );
}