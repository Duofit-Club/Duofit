import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "5f818451-df1b-43db-8385-4f10aa4f9266";


// ── Nutrition Data Types ──────────────────────────────────────────────────────
type NutritionData = {
  fullName: string; age: string; gender: string; occupation: string;
  workType: string; workTypeOther: string; city: string;
  contactNumber: string; email: string;
  goals: string[]; goalsOther: string; whyImportant: string;
  whatStopped: string; commitmentLevel: string; confidenceLevel: string;
  height: string; weight: string; goalWeight: string;
  waistCircumference: string; bodyFatPercent: string; energyLevel: string;
  medicalConditions: string[]; medicalOther: string;
  currentMedications: string; supplements: string; familyHistory: string;
  workStressLevel: string; screenTime: string; sleepDuration: string;
  sleepQuality: string; workPattern: string;
  breakfast: string; lunch: string; dinner: string; snacks: string;
  foodPreference: string; mealTiming: string;
  eatingBehaviors: string[]; eatingBehaviorsOther: string;
  waterIntake: string; alcoholConsumption: string;
  smokingTobacco: string; smokingFrequency: string;
  digestionIssues: string[]; otherDigestion: string;
  activityLevel: string; currentExercise: string;
  workoutFrequency: string; dailySteps: string; injuries: string;
  biggestChallenges: string[]; challengesOther: string;
  previousDietAttempts: string; weekendEating: string;
  restaurantMeals: string; specificEvent: string;
  willingnessToTrack: string; consistencyLevel: string;
  supportAtHome: string; mainMotivation: string;
};

const INIT: NutritionData = {
  fullName: "", age: "", gender: "", occupation: "",
  workType: "", workTypeOther: "", city: "", contactNumber: "", email: "",
  goals: [], goalsOther: "", whyImportant: "", whatStopped: "",
  commitmentLevel: "", confidenceLevel: "",
  height: "", weight: "", goalWeight: "", waistCircumference: "",
  bodyFatPercent: "", energyLevel: "",
  medicalConditions: [], medicalOther: "", currentMedications: "",
  supplements: "", familyHistory: "",
  workStressLevel: "", screenTime: "", sleepDuration: "",
  sleepQuality: "", workPattern: "",
  breakfast: "", lunch: "", dinner: "", snacks: "",
  foodPreference: "", mealTiming: "",
  eatingBehaviors: [], eatingBehaviorsOther: "",
  waterIntake: "", alcoholConsumption: "",
  smokingTobacco: "", smokingFrequency: "",
  digestionIssues: [], otherDigestion: "",
  activityLevel: "", currentExercise: "",
  workoutFrequency: "", dailySteps: "", injuries: "",
  biggestChallenges: [], challengesOther: "",
  previousDietAttempts: "", weekendEating: "",
  restaurantMeals: "", specificEvent: "",
  willingnessToTrack: "", consistencyLevel: "",
  supportAtHome: "", mainMotivation: "",
};

const STEPS = [
  "Basic Info",
  "Goals & Body",
  "Medical & Lifestyle",
  "Nutrition",
  "Activity & Readiness",
];

// ── Shared Field Components ───────────────────────────────────────────────────

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-foreground mb-1.5">
      {children}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", required }: {
  label: string; name: string; value: string;
  onChange: (v: string) => void; placeholder?: string;
  type?: string; required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        name={name} type={type} value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

function TextArea({ label, name, value, onChange, placeholder, rows = 3 }: {
  label: string; name: string; value: string;
  onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <textarea
        name={name} value={value} rows={rows}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
      />
    </div>
  );
}

function RadioGroup({ label, name, options, value, onChange }: {
  label?: string; name: string; options: string[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input type="radio" name={name} value={opt}
              checked={value === opt} onChange={() => onChange(opt)}
              className="accent-primary" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function CheckGroup({ label, options, selected, onChange }: {
  label?: string; options: string[];
  selected: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt)
      ? selected.filter(s => s !== opt)
      : [...selected, opt]);
  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input type="checkbox" checked={selected.includes(opt)}
              onChange={() => toggle(opt)} className="accent-primary" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function ScaleInput({ label, value, onChange }: {
  label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label} (1–10)</Label>
      <div className="flex gap-1.5 flex-wrap mt-1">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(n => (
          <button key={n} type="button" onClick={() => onChange(n)}
            className={`h-9 w-9 rounded-sm text-sm font-medium border transition-colors ${value === n
              ? "bg-primary text-foreground border-primary"
              : "border-border hover:border-primary/50 text-foreground"
              }`}>
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-2 pt-2 pb-3 border-b border-border mb-4">
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-xs font-bold text-primary">{n}</span>
      </div>
      <h3 className="font-bold text-sm uppercase tracking-widest text-foreground">{title}</h3>
    </div>
  );
}

// ── Form Steps ────────────────────────────────────────────────────────────────

type StepProps = { d: NutritionData; u: (k: keyof NutritionData, v: any) => void };

function Step1({ d, u }: StepProps) {
  return (
    <div className="space-y-4">
      <SectionTitle n={1} title="Basic Information" />
      <Field label="Full Name" name="fullName" value={d.fullName}
        onChange={v => u("fullName", v)} placeholder="Your full name" required />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Age" name="age" value={d.age}
          onChange={v => u("age", v)} placeholder="e.g. 28" required />
        <RadioGroup label="Gender" name="gender"
          options={["Male", "Female", "Other"]}
          value={d.gender} onChange={v => u("gender", v)} />
      </div>
      <Field label="Occupation" name="occupation" value={d.occupation}
        onChange={v => u("occupation", v)} placeholder="Your occupation" />
      <RadioGroup label="Work Type" name="workType"
        options={["Desk Job", "On Feet", "Hybrid", "Other"]}
        value={d.workType} onChange={v => u("workType", v)} />
      {d.workType === "Other" && (
        <Field label="Specify work type" name="workTypeOther" value={d.workTypeOther}
          onChange={v => u("workTypeOther", v)} placeholder="Describe your work type" />
      )}
      <div className="grid grid-cols-2 gap-4">
        <Field label="City" name="city" value={d.city}
          onChange={v => u("city", v)} placeholder="Your city" />
        <Field label="Contact Number" name="contactNumber" value={d.contactNumber}
          onChange={v => u("contactNumber", v)} type="tel" placeholder="+91 ..." required />
      </div>
      <Field label="Email" name="email" value={d.email}
        onChange={v => u("email", v)} type="email" placeholder="your@email.com" required />
    </div>
  );
}

function Step2({ d, u }: StepProps) {
  return (
    <div className="space-y-5">
      <SectionTitle n={2} title="Primary Goal & Motivation" />
      <CheckGroup label="Select your goals (all that apply)"
        options={["Fat loss", "Muscle gain", "Body recomposition",
          "Energy improvement", "Hormonal balance", "Digestion",
          "Sports performance", "Other"]}
        selected={d.goals} onChange={v => u("goals", v)} />
      {d.goals.includes("Other") && (
        <Field label="Specify goal" name="goalsOther" value={d.goalsOther}
          onChange={v => u("goalsOther", v)} placeholder="Please specify" />
      )}
      <TextArea label="Why is this important right now?"
        name="whyImportant" value={d.whyImportant}
        onChange={v => u("whyImportant", v)}
        placeholder="Share what's driving your health goal..." />
      <TextArea label="What stopped you previously?"
        name="whatStopped" value={d.whatStopped}
        onChange={v => u("whatStopped", v)}
        placeholder="Any past challenges or setbacks..." />
      <div className="grid grid-cols-1 gap-5">
        <ScaleInput label="Commitment Level"
          value={d.commitmentLevel} onChange={v => u("commitmentLevel", v)} />
        <ScaleInput label="Confidence Level"
          value={d.confidenceLevel} onChange={v => u("confidenceLevel", v)} />
      </div>

      <SectionTitle n={3} title="Body Composition" />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Height" name="height" value={d.height}
          onChange={v => u("height", v)} placeholder="e.g. 170 cm" />
        <Field label="Current Weight" name="weight" value={d.weight}
          onChange={v => u("weight", v)} placeholder="e.g. 75 kg" />
        <Field label="Goal Weight" name="goalWeight" value={d.goalWeight}
          onChange={v => u("goalWeight", v)} placeholder="e.g. 68 kg" />
        <Field label="Waist Circumference" name="waistCircumference"
          value={d.waistCircumference}
          onChange={v => u("waistCircumference", v)} placeholder="e.g. 34 in" />
        <Field label="Body Fat % (if known)" name="bodyFatPercent"
          value={d.bodyFatPercent}
          onChange={v => u("bodyFatPercent", v)} placeholder="e.g. 22%" />
      </div>
      <ScaleInput label="Current Energy Levels"
        value={d.energyLevel} onChange={v => u("energyLevel", v)} />
    </div>
  );
}

function Step3({ d, u }: StepProps) {
  return (
    <div className="space-y-5">
      <SectionTitle n={4} title="Medical & Metabolic History" />
      <CheckGroup label="Any existing conditions? (select all that apply)"
        options={["Thyroid", "Diabetes", "Prediabetes", "PCOS",
          "Hypertension", "High cholesterol", "Fatty liver",
          "IBS", "GERD", "Joint pain", "Other"]}
        selected={d.medicalConditions}
        onChange={v => u("medicalConditions", v)} />
      {d.medicalConditions.includes("Other") && (
        <Field label="Specify condition" name="medicalOther" value={d.medicalOther}
          onChange={v => u("medicalOther", v)} placeholder="Please specify" />
      )}
      <Field label="Current Medications" name="currentMedications"
        value={d.currentMedications}
        onChange={v => u("currentMedications", v)}
        placeholder="List any current medications" />
      <Field label="Supplements" name="supplements" value={d.supplements}
        onChange={v => u("supplements", v)}
        placeholder="List any supplements you take" />
      <TextArea label="Family Medical History" name="familyHistory"
        value={d.familyHistory} onChange={v => u("familyHistory", v)}
        placeholder="Any relevant family health history..." />

      <SectionTitle n={5} title="Lifestyle & Workload" />
      <ScaleInput label="Work Stress Level"
        value={d.workStressLevel} onChange={v => u("workStressLevel", v)} />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Screen Time (hrs/day)" name="screenTime" value={d.screenTime}
          onChange={v => u("screenTime", v)} placeholder="e.g. 8 hrs" />
        <Field label="Sleep Duration (hrs/night)" name="sleepDuration"
          value={d.sleepDuration}
          onChange={v => u("sleepDuration", v)} placeholder="e.g. 7 hrs" />
      </div>
      <RadioGroup label="Sleep Quality" name="sleepQuality"
        options={["Poor", "Average", "Good", "Excellent"]}
        value={d.sleepQuality} onChange={v => u("sleepQuality", v)} />
      <Field label="Work Pattern" name="workPattern" value={d.workPattern}
        onChange={v => u("workPattern", v)}
        placeholder="e.g. 9–6 fixed, night shift, freelance..." />
    </div>
  );
}

function Step4({ d, u }: StepProps) {
  return (
    <div className="space-y-5">
      <SectionTitle n={6} title="Detailed Nutrition Analysis" />
      <TextArea label="Breakfast — what do you typically eat?"
        name="breakfast" value={d.breakfast}
        onChange={v => u("breakfast", v)}
        placeholder="Describe your usual breakfast..." />
      <TextArea label="Lunch" name="lunch" value={d.lunch}
        onChange={v => u("lunch", v)}
        placeholder="Describe your usual lunch..." />
      <TextArea label="Dinner" name="dinner" value={d.dinner}
        onChange={v => u("dinner", v)}
        placeholder="Describe your usual dinner..." />
      <TextArea label="Snacks" name="snacks" value={d.snacks}
        onChange={v => u("snacks", v)} rows={2}
        placeholder="Any snacks between meals..." />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Food Preference" name="foodPreference" value={d.foodPreference}
          onChange={v => u("foodPreference", v)}
          placeholder="e.g. Vegetarian, non-veg..." />
        <Field label="Typical Meal Timing" name="mealTiming" value={d.mealTiming}
          onChange={v => u("mealTiming", v)} placeholder="e.g. 8am, 1pm, 8pm" />
      </div>
      <CheckGroup label="Eating Behaviors (select all that apply)"
        options={["Emotional eating", "Stress eating", "Late-night eating",
          "Frequent cravings", "Skipping meals", "Irregular eating",
          "Binge eating", "Other"]}
        selected={d.eatingBehaviors}
        onChange={v => u("eatingBehaviors", v)} />
      {d.eatingBehaviors.includes("Other") && (
        <Field label="Specify" name="eatingBehaviorsOther"
          value={d.eatingBehaviorsOther}
          onChange={v => u("eatingBehaviorsOther", v)}
          placeholder="Please specify" />
      )}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Water Intake (glasses/day)" name="waterIntake"
          value={d.waterIntake}
          onChange={v => u("waterIntake", v)} placeholder="e.g. 8 glasses" />
        <Field label="Alcohol Consumption" name="alcoholConsumption"
          value={d.alcoholConsumption}
          onChange={v => u("alcoholConsumption", v)}
          placeholder="e.g. Rarely, weekends..." />
      </div>
      <RadioGroup label="Smoking / Tobacco" name="smokingTobacco"
        options={["Yes", "No"]}
        value={d.smokingTobacco} onChange={v => u("smokingTobacco", v)} />
      {d.smokingTobacco === "Yes" && (
        <Field label="Frequency" name="smokingFrequency" value={d.smokingFrequency}
          onChange={v => u("smokingFrequency", v)}
          placeholder="e.g. Daily, occasionally..." />
      )}

      <SectionTitle n={7} title="Digestion & Internal Health" />
      <CheckGroup label="Any digestion issues?"
        options={["Acidity", "Bloating", "Constipation", "Gas",
          "Sleepiness after meals", "Cravings after meals"]}
        selected={d.digestionIssues}
        onChange={v => u("digestionIssues", v)} />
      <TextArea label="Other Observations" name="otherDigestion"
        value={d.otherDigestion} onChange={v => u("otherDigestion", v)}
        rows={2} placeholder="Any other digestive observations..." />
    </div>
  );
}

function Step5({ d, u }: StepProps) {
  return (
    <div className="space-y-5">
      <SectionTitle n={8} title="Activity & Training Profile" />
      <RadioGroup label="Activity Level" name="activityLevel"
        options={["Sedentary", "Light", "Moderate", "Active", "Very Active"]}
        value={d.activityLevel} onChange={v => u("activityLevel", v)} />
      <Field label="Current Exercise / Training" name="currentExercise"
        value={d.currentExercise}
        onChange={v => u("currentExercise", v)}
        placeholder="e.g. None, gym 3x/week, yoga..." />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Workout Frequency (days/week)" name="workoutFrequency"
          value={d.workoutFrequency}
          onChange={v => u("workoutFrequency", v)} placeholder="e.g. 3 days" />
        <Field label="Daily Steps (approx.)" name="dailySteps"
          value={d.dailySteps}
          onChange={v => u("dailySteps", v)} placeholder="e.g. 5000 steps" />
      </div>
      <Field label="Injuries (if any)" name="injuries" value={d.injuries}
        onChange={v => u("injuries", v)}
        placeholder="Any injuries or physical limitations..." />

      <SectionTitle n={9} title="Compliance & Coaching Readiness" />
      <CheckGroup label="Biggest Challenges (select all that apply)"
        options={["Lack of time", "Cravings", "Travel", "Social eating",
          "Motivation", "Consistency", "Meal planning", "Other"]}
        selected={d.biggestChallenges}
        onChange={v => u("biggestChallenges", v)} />
      {d.biggestChallenges.includes("Other") && (
        <Field label="Specify challenge" name="challengesOther"
          value={d.challengesOther}
          onChange={v => u("challengesOther", v)} placeholder="Please specify" />
      )}
      <TextArea label="Previous Diet / Nutrition Attempts"
        name="previousDietAttempts" value={d.previousDietAttempts}
        onChange={v => u("previousDietAttempts", v)}
        rows={2} placeholder="What have you tried before..." />

      <div className="border-t border-border pt-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          Additional Insights
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextArea label="Weekend Eating Pattern"
              name="weekendEating" value={d.weekendEating}
              onChange={v => u("weekendEating", v)}
              rows={2} placeholder="How weekends differ..." />
            <Field label="Restaurant Meals Per Week"
              name="restaurantMeals" value={d.restaurantMeals}
              onChange={v => u("restaurantMeals", v)}
              placeholder="e.g. 3–4 times" />
          </div>
          <Field label="Specific Event or Timeline for Goal?"
            name="specificEvent" value={d.specificEvent}
            onChange={v => u("specificEvent", v)}
            placeholder="e.g. Wedding in 3 months..." />
          <RadioGroup label="Willingness to Track Food"
            name="willingnessToTrack"
            options={["Yes", "No", "Maybe"]}
            value={d.willingnessToTrack}
            onChange={v => u("willingnessToTrack", v)} />
          <ScaleInput label="Consistency Level"
            value={d.consistencyLevel}
            onChange={v => u("consistencyLevel", v)} />
          <Field label="Support at Home?" name="supportAtHome"
            value={d.supportAtHome}
            onChange={v => u("supportAtHome", v)}
            placeholder="Spouse / Family / Friends" />
          <Field label="What motivates you the most?"
            name="mainMotivation" value={d.mainMotivation}
            onChange={v => u("mainMotivation", v)}
            placeholder="Health / Confidence / Performance / Other" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground bg-muted/40 p-3 rounded-sm">
        🔒 All information is confidential and used solely for assessment and coaching purposes.
      </p>
    </div>
  );
}

// ── Main Panel ────────────────────────────────────────────────────────────────

export function NutritionForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<NutritionData>(INIT);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof NutritionData, value: any) =>
    setData(prev => ({ ...prev, [key]: value }));

  const resetForm = () => {
    setStep(0);
    setData(INIT);
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    if (!data.fullName || !data.email || !data.contactNumber) {
      toast.error("Please fill in your name, email and contact number.");
      setStep(0);
      return;
    }

    setSubmitting(true);

    const sec = (title: string, rows: [string, string][]) =>
      `\n\n${"=".repeat(40)}\n${title}\n${"=".repeat(40)}\n` +
      rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");

    const body =
      sec("BASIC INFORMATION", [
        ["Full Name", data.fullName], ["Age", data.age],
        ["Gender", data.gender], ["Occupation", data.occupation],
        ["Work Type", data.workType + (data.workTypeOther ? ` — ${data.workTypeOther}` : "")],
        ["City", data.city], ["Contact", data.contactNumber], ["Email", data.email],
      ]) +
      sec("GOALS & MOTIVATION", [
        ["Goals", data.goals.join(", ")],
        ["Why Important", data.whyImportant],
        ["What Stopped Previously", data.whatStopped],
        ["Commitment Level", `${data.commitmentLevel}/10`],
        ["Confidence Level", `${data.confidenceLevel}/10`],
      ]) +
      sec("BODY COMPOSITION", [
        ["Height", data.height], ["Weight", data.weight],
        ["Goal Weight", data.goalWeight],
        ["Waist Circumference", data.waistCircumference],
        ["Body Fat %", data.bodyFatPercent],
        ["Energy Level", `${data.energyLevel}/10`],
      ]) +
      sec("MEDICAL HISTORY", [
        ["Conditions", data.medicalConditions.join(", ")],
        ["Medications", data.currentMedications],
        ["Supplements", data.supplements],
        ["Family History", data.familyHistory],
      ]) +
      sec("LIFESTYLE", [
        ["Work Stress", `${data.workStressLevel}/10`],
        ["Screen Time", data.screenTime],
        ["Sleep Duration", data.sleepDuration],
        ["Sleep Quality", data.sleepQuality],
        ["Work Pattern", data.workPattern],
      ]) +
      sec("NUTRITION", [
        ["Breakfast", data.breakfast], ["Lunch", data.lunch],
        ["Dinner", data.dinner], ["Snacks", data.snacks],
        ["Food Preference", data.foodPreference],
        ["Meal Timing", data.mealTiming],
        ["Eating Behaviors", data.eatingBehaviors.join(", ")],
        ["Water Intake", data.waterIntake],
        ["Alcohol", data.alcoholConsumption],
        ["Smoking", data.smokingTobacco + (data.smokingFrequency ? ` — ${data.smokingFrequency}` : "")],
      ]) +
      sec("DIGESTION", [
        ["Issues", data.digestionIssues.join(", ")],
        ["Other", data.otherDigestion],
      ]) +
      sec("ACTIVITY & READINESS", [
        ["Activity Level", data.activityLevel],
        ["Current Exercise", data.currentExercise],
        ["Workout Frequency", data.workoutFrequency],
        ["Daily Steps", data.dailySteps],
        ["Injuries", data.injuries],
        ["Biggest Challenges", data.biggestChallenges.join(", ")],
        ["Previous Attempts", data.previousDietAttempts],
      ]) +
      sec("ADDITIONAL INSIGHTS", [
        ["Weekend Eating", data.weekendEating],
        ["Restaurant Meals/Week", data.restaurantMeals],
        ["Specific Event", data.specificEvent],
        ["Willingness to Track", data.willingnessToTrack],
        ["Consistency Level", `${data.consistencyLevel}/10`],
        ["Support at Home", data.supportAtHome],
        ["Main Motivation", data.mainMotivation],
      ]);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "DUOFIT Forms",
          subject: `Nutrition Intake Form — ${data.fullName}`,
          name: data.fullName,
          email: data.email,
          message: body,
          replyto: data.email,
          botcheck: false,
        }),
      });
      const result = await res.json();
      console.log("Web3Forms Response:", result);
      if (result.success) {
        setSubmitted(true);
        toast.success("Form submitted! We will be in touch within 24 hours.");
      } else {
        toast.error("Submission failed. Please WhatsApp or email us directly.");
      }
    } catch {
      toast.error("Could not submit. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="w-full bg-background rounded-2xl border shadow-sm flex flex-col min-h-[700px]">

      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-border shrink-0">
        <span className="font-bold text-sm text-foreground uppercase tracking-wide">
          Nutrition Assessment
        </span>
      </div>

      {/* Step Progress */}
      {!submitted && (
        <div className="px-5 pt-3 shrink-0">
          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"
                  }`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-xs font-semibold text-primary">
              {STEPS[step]}
            </span>
            <span className="text-xs text-muted-foreground">
              {step + 1} / {STEPS.length}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {submitted ? (
          <div className="text-center py-14">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Check className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Form Submitted!
            </h3>

            <p className="text-muted-foreground text-sm">
              Thank you, <strong>{data.fullName}</strong>.
            </p>

            <button
              onClick={resetForm}
              className="mt-6 px-6 py-3 rounded-full bg-primary text-foreground"
            >
              Fill Again
            </button>
          </div>
        ) : (
          <>
            {step === 0 && <Step1 d={data} u={update} />}
            {step === 1 && <Step2 d={data} u={update} />}
            {step === 2 && <Step3 d={data} u={update} />}
            {step === 3 && <Step4 d={data} u={update} />}
            {step === 4 && <Step5 d={data} u={update} />}
          </>
        )}
      </div>

      {/* Footer Navigation */}
      {!submitted && (
        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-2 bg-primary px-6 py-2 rounded-full"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary px-6 py-2 rounded-full"
            >
              {submitting ? "Submitting..." : "Submit"}
              <Check className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}