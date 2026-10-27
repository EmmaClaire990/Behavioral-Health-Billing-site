import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo${light ? " logo--light" : ""}`} aria-label="Behavioral Health Medical Billing — home">
      <svg className="logo__mark" viewBox="0 0 44 44" aria-hidden="true">
        <rect width="44" height="44" rx="12" fill="#1685F8" />
        <path
          d="M22 9.5c-6.6 0-11.5 4.6-11.5 10.6 0 3.2 1.4 5.8 3.6 7.6v6.8l5.2-3c.9.2 1.8.2 2.7.2 6.6 0 11.5-4.6 11.5-10.6S28.6 9.5 22 9.5Z"
          fill="#fff"
        />
        <path
          d="M14.5 21h4l2-4.2 3 8.4 2-4.2h4"
          fill="none"
          stroke="#1769AA"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__text">
        <strong>BehavioralHealth</strong>
        <span>MedicalBilling</span>
      </span>
    </Link>
  );
}
