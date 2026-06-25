import { useRef } from "react";
import { generateNutritionPDF } from "@/utils/generateNutritionPDF";

export function NutritionPreview({
    data,
    onClose,
    onSubmit,
}: {
    data: any;
    onClose: () => void;
    onSubmit: () => void;
}) {
    const previewRef = useRef<HTMLDivElement>(null);

    const downloadPDF = async () => {
        if (previewRef.current) {
            await generateNutritionPDF(data, data.fullName);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">

                <div
                    ref={previewRef}
                    className="bg-white text-black p-6 rounded-lg"
                >
                    <h1 className="text-2xl font-bold text-[#15803d] mb-6">
                        DUOFIT - User Details
                    </h1>

                    {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="border-b border-[#d1d5db] py-3">
                            <h3 className="font-semibold capitalize">
                                {key.replace(/([A-Z])/g, " $1")}
                            </h3>

                            <p className="text-[#4b5563]">
                                {Array.isArray(value)
                                    ? value.join(", ")
                                    : String(value)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#d1d5db] mt-6 animate-fade-in-up">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 border border-[#d1d5db] rounded-full 
  transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-black"
                    >
                        ← Back
                    </button>

                    <button
                        onClick={downloadPDF}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 
  text-white rounded-full font-medium transition-all duration-300 
  hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                    >
                        ⬇ Download PDF
                    </button>

                    <button
                        onClick={onSubmit}
                        className="px-6 py-3 bg-gradient-to-r from-black to-neutral-800 
  text-white rounded-full font-medium transition-all duration-300 
  hover:scale-105 hover:shadow-lg hover:shadow-black/30"
                    >
                        ✔ Final Submit
                    </button>
                </div>
            </div>
        </div>
    );
}