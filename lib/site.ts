// Central site configuration. Replace the placeholder phone/email with
// your real contact details before launch.
export const site = {
  name: "Behavioral Health Medical Billing",
  domain: "BehavioralHealthMedicalBilling.com",
  url: "https://www.behavioralhealthmedicalbilling.com",
  phone: "(631) 944-8343",
  phoneHref: "tel:+16319448343",
  email: "info@behavioralmedicalbilling.com",
  hours: "Monday – Friday, business hours",
  description:
    "Specialized medical billing and revenue cycle support for behavioral health practices — therapists, psychiatrists, psychologists, clinics, group practices, and addiction treatment providers.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export type IconName =
  | "brain"
  | "shield"
  | "badge"
  | "file"
  | "phone"
  | "trend"
  | "clipboard"
  | "users"
  | "building"
  | "heart"
  | "stethoscope"
  | "calendar"
  | "search"
  | "settings";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  intro: string;
  includes: string[];
  solves: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    slug: "behavioral-health-billing",
    title: "Behavioral Health Medical Billing",
    short:
      "Accurate charge entry and claim submission built around psychotherapy, psychiatric, and group therapy codes.",
    icon: "brain",
    intro:
      "Behavioral health claims follow rules that general billing teams often miss — time-based psychotherapy codes, add-on codes with E/M visits, telehealth modifiers, and payer-specific requirements. We handle claim preparation and submission with those details in mind.",
    includes: [
      "Charge entry for psychotherapy (90832, 90834, 90837) and diagnostic evaluations (90791, 90792)",
      "E/M visits with psychotherapy add-on codes (+90833, +90836, +90838)",
      "Group (90853) and family therapy (90846, 90847) claims",
      "Telehealth place-of-service and modifier review",
      "Claim scrubbing before submission to catch common errors",
      "Payment posting from ERAs and EOBs",
    ],
    solves: [
      "Claims rejected for avoidable coding or modifier errors",
      "Inconsistent charge entry across clinicians",
      "Payments posted late or not reconciled",
    ],
    idealFor:
      "Solo therapists, psychiatric practices, and group practices that want billing handled by people who understand behavioral health codes.",
  },
  {
    slug: "eligibility-verification",
    title: "Insurance Eligibility Verification",
    short:
      "Confirm coverage, behavioral health benefits, and authorization requirements before the first session.",
    icon: "shield",
    intro:
      "Many health plans carve behavioral health benefits out to a separate managed behavioral health organization, with different networks, visit limits, and authorization rules. We verify those details up front so surprises don't show up as denials weeks later.",
    includes: [
      "Active coverage and plan-type confirmation",
      "Identification of behavioral health carve-outs and the responsible payer",
      "Copay, coinsurance, and deductible details for outpatient mental health",
      "Prior authorization and visit-limit requirements",
      "In-network vs. out-of-network status for each rendering provider",
      "Re-verification for recurring patients at plan changes",
    ],
    solves: [
      "Denials for inactive coverage or wrong payer",
      "Unexpected patient balances that strain the therapeutic relationship",
      "Sessions delivered without required authorizations",
    ],
    idealFor:
      "Practices with high intake volume or patients covered by multiple commercial and Medicaid plans.",
  },
  {
    slug: "credentialing",
    title: "Behavioral Health Credentialing",
    short:
      "Payer enrollment, CAQH maintenance, and re-credentialing tracking for your clinicians and group.",
    icon: "badge",
    intro:
      "Credentialing delays keep new clinicians from billing and can leave revenue on the table. We manage the paperwork and follow-up so providers can be enrolled and linked to your group correctly.",
    includes: [
      "CAQH ProView profile setup, attestation, and upkeep",
      "Commercial payer enrollment applications and follow-up",
      "Medicare (PECOS) and Medicaid enrollment support",
      "Individual and group NPI linkage",
      "Re-credentialing and revalidation deadline tracking",
      "Status updates as applications move through review",
    ],
    solves: [
      "New clinicians who can't see insured patients yet",
      "Expired CAQH attestations causing payment holds",
      "Claims denied because a provider isn't linked to the group",
    ],
    idealFor:
      "Growing group practices, clinics adding new providers, and clinicians opening a new practice.",
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    short:
      "Identify why claims are denied, correct and resubmit them, and address the patterns behind them.",
    icon: "file",
    intro:
      "Every denial carries a reason code. We work each one, correct what can be corrected, file appeals where appropriate, and look for repeat patterns so the same issue doesn't keep coming back.",
    includes: [
      "Review of denial and adjustment reason codes on each remit",
      "Corrected claim submission",
      "Appeal preparation with supporting documentation requests",
      "Authorization and medical-necessity denial follow-up",
      "Tracking of recurring denial causes by payer",
      "Recommendations to address root causes at intake or charge entry",
    ],
    solves: [
      "Denied claims sitting unworked in the system",
      "The same denial repeating month after month",
      "Missed appeal and timely-filing windows",
    ],
    idealFor:
      "Practices with a growing backlog of denied claims or limited in-house time to work them.",
  },
  {
    slug: "ar-follow-up",
    title: "Accounts Receivable Follow-Up",
    short:
      "Work aging claims by payer and age bucket so outstanding balances don't quietly expire.",
    icon: "phone",
    intro:
      "Unpaid claims become harder to collect the longer they sit. We review your aging report, follow up with payers on claims without a response, and keep notes so you can see where each balance stands.",
    includes: [
      "Aging review by 0–30, 31–60, 61–90, and 90+ day buckets",
      "Payer follow-up on unpaid and no-response claims",
      "Identification of underpaid claims against expected amounts",
      "Clean-up projects for older A/R backlogs",
      "Patient balance reporting for your front office",
      "Documented status notes for every account worked",
    ],
    solves: [
      "Large balances in the 90+ day bucket",
      "No clear picture of what is still collectible",
      "Claims lost to timely-filing limits",
    ],
    idealFor:
      "Practices transitioning from another biller or catching up on an older receivables backlog.",
  },
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    short:
      "End-to-end support from intake to final payment, with reporting that shows where revenue stands.",
    icon: "trend",
    intro:
      "Revenue cycle management connects every step — eligibility, charge capture, claims, payments, denials, and follow-up — into one coordinated workflow. We bring those pieces together and report on them in plain language.",
    includes: [
      "Coordinated eligibility, billing, denial, and A/R workflows",
      "Regular reporting on charges, payments, and outstanding A/R",
      "Tracking of key measures such as days in A/R and denial rate",
      "Payer mix and reimbursement trend visibility",
      "Workflow recommendations for your front office and clinicians",
      "A single team accountable for the full cycle",
    ],
    solves: [
      "Billing spread across too many people and tools",
      "Limited visibility into what's been billed and collected",
      "Decisions made without reliable revenue data",
    ],
    idealFor:
      "Behavioral health clinics and multi-provider groups that want one partner for the full revenue cycle.",
  },
];

export type Audience = {
  title: string;
  image: string;
  alt: string;
  text: string;
  points: string[];
};

export const audiences: Audience[] = [
  {
    title: "Therapists & Counselors",
    image: "/images/counseling-session.jpg",
    alt: "A therapist meeting with a client in a bright office",
    text: "LPCs, LCSWs, LMFTs, and solo practitioners who would rather spend evenings away from claim portals.",
    points: ["Time-based psychotherapy codes", "Telehealth claims", "Credentialing for new panels"],
  },
  {
    title: "Psychiatrists & Prescribers",
    image: "/images/psychiatrist.jpg",
    alt: "A psychiatrist in a white coat with a stethoscope",
    text: "Psychiatrists, psychiatric NPs, and PAs billing E/M services alongside psychotherapy add-on codes.",
    points: ["E/M with add-on codes", "Medication management visits", "Prior authorizations"],
  },
  {
    title: "Psychologists",
    image: "/images/psychologist.jpg",
    alt: "A smiling psychologist in a white coat outdoors",
    text: "Clinical psychologists providing therapy, assessment, and diagnostic evaluations.",
    points: ["Diagnostic evaluations", "Testing and assessment claims", "Commercial payer follow-up"],
  },
  {
    title: "Behavioral Health Clinics",
    image: "/images/clinic-team.jpg",
    alt: "Clinicians reviewing information on a monitor together",
    text: "Outpatient clinics with multiple disciplines, locations, and payer contracts to keep track of.",
    points: ["Multi-provider workflows", "Payer mix reporting", "A/R clean-up"],
  },
  {
    title: "Group Practices",
    image: "/images/group-practice.jpg",
    alt: "Two colleagues talking at a desk with a laptop",
    text: "Growing groups adding clinicians who need to be credentialed and billing quickly.",
    points: ["Provider onboarding", "Group NPI linkage", "Consistent charge entry"],
  },
  {
    title: "Addiction Treatment Providers",
    image: "/images/recovery-support.jpg",
    alt: "Two hands reaching toward each other in a gesture of support",
    text: "Substance use disorder programs navigating authorizations, levels of care, and Medicaid requirements.",
    points: ["Authorization tracking", "Level-of-care documentation", "Medicaid enrollment"],
  },
];

export const process = [
  {
    title: "Free Consultation",
    text: "Tell us about your practice, payers, and the billing issues you're seeing.",
    icon: "calendar" as IconName,
  },
  {
    title: "Billing Assessment",
    text: "We review your current workflow, aging report, and denial trends.",
    icon: "search" as IconName,
  },
  {
    title: "Onboarding & Setup",
    text: "We set up system access, payer details, and a clear communication plan.",
    icon: "settings" as IconName,
  },
  {
    title: "Ongoing Support",
    text: "Claims, follow-up, and regular reporting so you always know where revenue stands.",
    icon: "trend" as IconName,
  },
];

export const faqs = [
  {
    q: "Do you only work with behavioral health practices?",
    a: "Yes. Our services are designed specifically for behavioral health — therapists, psychiatrists, psychologists, clinics, group practices, and addiction treatment providers. That focus shapes how we approach coding, eligibility, and payer follow-up.",
  },
  {
    q: "Can you work inside our existing EHR or practice management system?",
    a: "In most cases, yes. During the consultation we'll ask which system you use and confirm how access and workflows will be set up before onboarding begins.",
  },
  {
    q: "Can you help with an old accounts receivable backlog?",
    a: "Yes. A/R clean-up is a common starting point. We review what is still within timely-filing limits, prioritize by balance and age, and work claims with the payers.",
  },
  {
    q: "Do you handle credentialing for new clinicians?",
    a: "We support CAQH profile management, commercial payer enrollment, and Medicare and Medicaid enrollment, and we track re-credentialing deadlines for your providers.",
  },
  {
    q: "What happens during a billing consultation?",
    a: "We'll talk through your practice size, payer mix, current billing setup, and the problems you want solved. You'll leave with a clearer picture of where revenue may be getting stuck — with no obligation.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  readTime: string;
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "psychotherapy-cpt-codes-90834-vs-90837",
    title: "Psychotherapy CPT Codes: Choosing Between 90832, 90834, and 90837",
    excerpt:
      "Time-based psychotherapy codes are some of the most frequently billed — and most frequently questioned — codes in behavioral health.",
    category: "Coding",
    image: "/images/article-paperwork.jpg",
    alt: "Hands reviewing paperwork beside a laptop",
    readTime: "4 min read",
    body: [
      {
        paragraphs: [
          "Individual psychotherapy is billed with time-based CPT codes. Selecting the right one depends on the actual face-to-face time spent with the patient, and documentation needs to support it.",
        ],
      },
      {
        heading: "The time ranges",
        list: [
          "90832 — 30 minutes of psychotherapy (typically 16–37 minutes)",
          "90834 — 45 minutes of psychotherapy (typically 38–52 minutes)",
          "90837 — 60 minutes of psychotherapy (53 minutes or more)",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Some payers review 90837 more closely because it reimburses at a higher rate. Clear documentation of session start and stop times, along with the clinical need for a longer session, helps support the code billed.",
          "When psychotherapy is performed alongside an E/M service by a prescriber, add-on codes (+90833, +90836, +90838) are used instead, and the psychotherapy time must be separate from the time spent on the E/M portion.",
        ],
      },
      {
        heading: "Practical tips",
        list: [
          "Record actual start and stop times in every progress note",
          "Check payer policies on 90837 and any frequency limits",
          "Confirm telehealth place-of-service and modifier rules for each payer",
          "Review a sample of notes periodically against the codes billed",
        ],
      },
      {
        paragraphs: [
          "Coding guidance changes over time and varies by payer. Always confirm current requirements with the CPT manual and your contracted payers.",
        ],
      },
    ],
  },
  {
    slug: "eligibility-verification-behavioral-health",
    title: "Why Eligibility Verification Matters More in Behavioral Health",
    excerpt:
      "Behavioral health carve-outs, visit limits, and authorization rules make up-front verification one of the best ways to prevent denials.",
    category: "Eligibility",
    image: "/images/article-mobile.jpg",
    alt: "A clinician using a smartphone",
    readTime: "3 min read",
    body: [
      {
        paragraphs: [
          "A patient's insurance card doesn't always tell the full story. In behavioral health, the plan on the card may not be the plan that pays for therapy or psychiatric care.",
        ],
      },
      {
        heading: "Behavioral health carve-outs",
        paragraphs: [
          "Many employers and health plans contract mental health and substance use benefits to a separate managed behavioral health organization. Claims sent to the medical plan instead of the behavioral health administrator are typically denied.",
        ],
      },
      {
        heading: "What to verify before the first session",
        list: [
          "Active coverage on the date of service",
          "Which entity administers behavioral health benefits",
          "Outpatient mental health copay, coinsurance, and deductible",
          "Prior authorization requirements and visit limits",
          "Network status for the specific rendering clinician",
        ],
      },
      {
        heading: "Don't stop at intake",
        paragraphs: [
          "Coverage changes — especially at the start of a plan year. Re-verifying recurring patients periodically helps catch plan changes before several sessions go unpaid.",
        ],
      },
    ],
  },
  {
    slug: "practical-approach-to-claim-denials",
    title: "A Practical Approach to Working Claim Denials",
    excerpt:
      "Denials aren't just lost claims — they're signals. A structured process turns them into fixes that prevent the next one.",
    category: "Denials",
    image: "/images/article-office.jpg",
    alt: "Two colleagues celebrating at a desk",
    readTime: "4 min read",
    body: [
      {
        paragraphs: [
          "Every denied claim comes back with a Claim Adjustment Reason Code (CARC) that explains why. Working denials efficiently starts with reading those codes and grouping them by cause.",
        ],
      },
      {
        heading: "Common reason codes in behavioral health",
        list: [
          "CO-16 — Claim lacks information needed for adjudication",
          "CO-197 — Precertification or authorization absent",
          "CO-29 — The time limit for filing has expired",
          "CO-50 — Not deemed a medical necessity by the payer",
          "CO-27 — Expenses incurred after coverage terminated",
        ],
      },
      {
        heading: "A simple workflow",
        list: [
          "Sort denials by reason code and payer",
          "Correct and resubmit claims with fixable errors first",
          "Prepare appeals where documentation supports the service",
          "Track appeal deadlines for each payer",
          "Share recurring causes with intake and clinical staff",
        ],
      },
      {
        heading: "Prevent, then recover",
        paragraphs: [
          "The most effective denial management happens before the claim is sent — through eligibility checks, authorization tracking, and clean charge entry. Recovering denied revenue matters, but preventing the next denial matters more.",
        ],
      },
    ],
  },
];
