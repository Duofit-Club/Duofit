import { useRef } from "react";
import { Download, CheckCircle2, ArrowLeft } from "lucide-react";
import { generateMonthlyReviewPDF } from "@/utils/generateMonthlyReviewPDF";

interface Props {
  data: any;
  onClose: () => void;
  onSubmit: () => void;
}

export function MonthlyReviewPreview({
  data,
  onClose,
  onSubmit,
}: Props) {
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (previewRef.current) {
      await generateMonthlyReviewPDF(data);
    }
  };

  const ReviewSection = ({
    title,
    value,
  }: {
    title: string;
    value: any;
  }) => (
    <div className="py-6 border-b border-gray-200 last:border-none">
      <h3 className="text-lg font-semibold text-green-700 mb-3">
        {title}
      </h3>

      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {Array.isArray(value) ? value.join(", ") : value || "-"}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden">

        {/* Header */}

        <div className="px-8 py-6 border-b">

          <h1 className="text-3xl font-bold text-green-700">
            Monthly Progress Review
          </h1>

          <p className="text-gray-500 mt-2">
            Please review your responses before submitting.
          </p>

        </div>

        {/* Preview */}

        <div
          ref={previewRef}
          className="overflow-y-auto max-h-[60vh] px-8 py-6"
        >

          <ReviewSection
            title="1. Visible Changes"
            value={data.visibleChanges}
          />

          <ReviewSection
            title="2. Most Valuable Part"
            value={[
              ...data.valuablePart,
              data.valuablePartOther,
            ].filter(Boolean)}
          />

          <ReviewSection
            title="3. What You're Doing Differently"
            value={data.doingDifferently}
          />

          <ReviewSection
            title="4. Area to Improve"
            value={
              data.improveArea === "Other"
                ? data.improveAreaOther
                : data.improveArea
            }
          />

          <ReviewSection
            title="5. Your DUOFIT Journey"
            value={data.journeyMessage}
          />

        </div>

        {/* Footer */}

        <div className="border-t px-8 py-6 flex flex-wrap gap-4 justify-between items-center">

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-black transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={downloadPDF}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>

            <button
              onClick={onSubmit}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition"
            >
              <CheckCircle2 className="h-4 w-4" />
              Final Submit
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}