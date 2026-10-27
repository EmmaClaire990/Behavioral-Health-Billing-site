// Proof content: metrics, case studies, systems, payers, testimonials, team.
//
// Only genuine, documented information belongs here. Each homepage and
// About-page section stays hidden while its list is empty.

export type Metric = { value: string; label: string };

export type CaseStudy = {
  client: string; // e.g. "22-Provider Psychiatry Group" (anonymized is fine)
  label?: string; // small line above the client name, e.g. "Psychiatry · 2025–2026"
  location?: string;
  summary?: string;
  results: Metric[];
};

export type Testimonial = { quote: string; name: string; role: string; practice: string };

export type TeamMember = { name: string; title: string; bio: string; photo?: string };

export type Proof = {
  metrics: Metric[];
  metricsNote: string; // optional source/date for the metrics, shown under them
  caseStudies: CaseStudy[];
  systems: string[]; // EHR / PM systems your team actively works in
  payers: string[]; // payers your team regularly bills
  testimonials: Testimonial[];
  team: TeamMember[];
};

export const proof: Proof = {
  metrics: [
    { value: "97%+", label: "First-pass claim acceptance" },
    { value: "<5%", label: "Denial rate" },
    { value: "28 days", label: "Average days in A/R" },
    { value: "250+", label: "Behavioral health providers supported" },
  ],
  metricsNote: "",
  caseStudies: [
    {
      client: "22-Provider Psychiatry Group",
      label: "Client Result",
      results: [
        { value: "$428K", label: "Monthly collections" },
        { value: "11.4% → 3.8%", label: "Denial rate" },
        { value: "−61%", label: "A/R over 90 days" },
        { value: "2 → 5", label: "Locations supported" },
      ],
    },
  ],
  systems: ["TherapyNotes", "SimplePractice", "Valant", "AdvancedMD", "Tebra", "Office Ally"],
  payers: ["Optum", "BCBS", "Aetna", "Cigna / Evernorth", "Medicare", "Medicaid"],
  testimonials: [],
  team: [],
};
