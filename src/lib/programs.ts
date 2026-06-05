export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  for: string;
  duration: string;
  benefits: string[];
  coaching: string;
  nutrition: string;
  accountability: string;
};

export const programs: Program[] = [
  {
    slug: "lifestyle-transformation",
    title: "Lifestyle Transformation",
    tagline: "A 360° reset for the life you actually live.",
    description:
      "A guided journey through movement, nutrition, sleep and mindset — built around your week, not against it.",
    for: "Anyone ready to rebuild their daily rhythm with calm, intentional structure.",
    duration: "12 – 16 weeks",
    benefits: [
      "Personalised weekly plan",
      "Habit + mindset coaching",
      "Adaptive nutrition framework",
      "Weekly check-ins with your coach",
    ],
    coaching: "1:1 video session every week, plus chat support across the day.",
    nutrition: "Flexible nutrition plan designed around your taste, schedule and culture.",
    accountability: "Daily nudges, weekly reviews, monthly recalibration.",
  },
  {
    slug: "nutrition-coaching",
    title: "Nutrition Coaching",
    tagline: "Eat with clarity. Skip the diet drama.",
    description:
      "Learn to nourish your body with a sustainable, non-restrictive approach designed for real meals and real life.",
    for: "People tired of fad diets who want a calmer, smarter relationship with food.",
    duration: "8 – 12 weeks",
    benefits: [
      "Personalised macro guidance",
      "Cultural + family-friendly meals",
      "Eating out & travel playbooks",
      "Recipe library access",
    ],
    coaching: "Bi-weekly nutrition sessions with food log reviews.",
    nutrition: "Custom plan, weekly adjustments, no off-limits foods.",
    accountability: "Daily check-ins via chat and shared food journal.",
  },
  {
    slug: "accountability-coaching",
    title: "Accountability Coaching",
    tagline: "Show up — every day, gently.",
    description:
      "When you already know what to do, but life keeps getting in the way. We hold the rhythm with you.",
    for: "Self-starters who want a human in their corner, not another app.",
    duration: "Ongoing, month to month",
    benefits: [
      "Daily WhatsApp accountability",
      "Weekly reflection calls",
      "Goal-setting framework",
      "Energy + mood tracking",
    ],
    coaching: "Two 30-minute calls a month plus daily messaging.",
    nutrition: "Light-touch nutrition guardrails, no rigid plans.",
    accountability: "The whole program is built around it.",
  },
  {
    slug: "beginner-fitness",
    title: "Beginner Fitness Coaching",
    tagline: "Start where you are. Move with confidence.",
    description:
      "A gentle on-ramp into strength and movement — no gym intimidation, no extreme protocols.",
    for: "First-time movers, returners, and anyone rebuilding consistency.",
    duration: "8 – 12 weeks",
    benefits: [
      "Home or gym options",
      "Form-first programming",
      "Mobility + recovery plan",
      "Confidence-building progressions",
    ],
    coaching: "Weekly video form-checks and plan adjustments.",
    nutrition: "Foundational nutrition habits built alongside training.",
    accountability: "Weekly check-ins and 24/7 chat support.",
  },
];
