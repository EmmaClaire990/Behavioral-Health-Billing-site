export default function Wave({ className = "" }: { className?: string }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 30C320 130 640 150 920 125S1300 50 1440 70V160H0Z" fill="currentColor" />
    </svg>
  );
}
