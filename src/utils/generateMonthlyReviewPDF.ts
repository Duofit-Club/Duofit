import jsPDF from "jspdf";

export async function generateMonthlyReviewPDF(data: any) {
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();

  let y = 20;

  const titleColor: [number, number, number] = [21, 128, 61];
  const textColor: [number, number, number] = [55, 65, 81];

  // -------------------------
  // HEADER
  // -------------------------

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.setTextColor(...titleColor);

  pdf.text("DUOFIT", pageWidth / 2, y, {
    align: "center",
  });

  y += 10;

  pdf.setFontSize(15);
  pdf.setTextColor(0);

  pdf.text("Monthly Progress Review", pageWidth / 2, y, {
    align: "center",
  });

  y += 15;

  pdf.setDrawColor(210);
  pdf.line(20, y, 190, y);

  y += 10;

  // -------------------------
  // Helper
  // -------------------------

  const addSection = (title: string, value: string) => {

    if (y > 255) {
      pdf.addPage();
      y = 20;
    }

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(...titleColor);

    pdf.text(title, 20, y);

    y += 8;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(...textColor);

    const lines = pdf.splitTextToSize(value || "-", 170);

    pdf.text(lines, 20, y);

    y += lines.length * 6 + 8;
  };

  // -------------------------
  // CONTENT
  // -------------------------

  addSection(
    "1. Visible Changes",
    data.visibleChanges
  );

  addSection(
    "2. Most Valuable Part",
    [
      ...(data.valuablePart || []),
      data.valuablePartOther,
    ]
      .filter(Boolean)
      .join(", ")
  );

  addSection(
    "3. Doing Differently",
    data.doingDifferently
  );

  addSection(
    "4. Area to Improve",
    data.improveArea === "Other"
      ? data.improveAreaOther
      : data.improveArea
  );

  addSection(
    "5. Journey Message",
    data.journeyMessage
  );

  // -------------------------
  // FOOTER
  // -------------------------

  y += 10;

  pdf.setDrawColor(220);
  pdf.line(20, y, 190, y);

  y += 12;

  pdf.setFont("helvetica", "italic");
  pdf.setFontSize(11);
  pdf.setTextColor(80);

  pdf.text(
    "Thank you for sharing your journey with DUOFIT.",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  y += 7;

  pdf.text(
    "Together, we're building lasting health.",
    pageWidth / 2,
    y,
    { align: "center" }
  );

  // -------------------------

  pdf.save("DUOFIT_Monthly_Progress_Review.pdf");
}