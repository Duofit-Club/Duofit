import jsPDF from "jspdf";

export async function generateNutritionPDF(
  data: Record<string, any>,
  name: string
) {
  try {
    const pdf = new jsPDF("p", "mm", "a4");

    let y = 20;

    pdf.setFontSize(20);
    pdf.setTextColor(21, 128, 61);
    pdf.text("DUOFIT Nutrition Report", 20, y);

    y += 15;

    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);

    Object.entries(data).forEach(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1");

      const val = Array.isArray(value)
        ? value.join(", ")
        : String(value);

      pdf.setFont(undefined, "bold");
      pdf.text(`${label}:`, 20, y);

      y += 7;

      pdf.setFont(undefined, "normal");

      const wrapped = pdf.splitTextToSize(val, 170);
      pdf.text(wrapped, 20, y);

      y += wrapped.length * 7 + 5;

      if (y > 270) {
        pdf.addPage();
        y = 20;
      }
    });

    pdf.save(`DUOFIT-${name || "Report"}.pdf`);
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
}