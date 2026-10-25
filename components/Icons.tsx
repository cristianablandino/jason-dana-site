export function Logo({ className }: { className?: string }) {
  return <img src="/images/JD_Logo.svg" alt="" className={className} />;
}
export function Facebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
    </svg>
  );
}

export function Instagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconProps = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconChat() {
  return (<svg {...iconProps} aria-hidden="true"><path d="M10 12h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H22l-8 7v-7h-4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z" /></svg>);
}
export function IconCard() {
  return (<svg {...iconProps} aria-hidden="true"><rect x="7" y="12" width="34" height="24" rx="3" /><path d="M7 20h34M13 29h8" /></svg>);
}
export function IconClock() {
  return (<svg {...iconProps} aria-hidden="true"><circle cx="24" cy="24" r="16" /><path d="M24 14v10l7 4" /></svg>);
}
export function IconHeart() {
  return (<svg {...iconProps} aria-hidden="true"><path d="M24 39S9 30 9 19a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 11-15 20-15 20z" /></svg>);
}
export function IconCompass() {
  return (<svg {...iconProps} aria-hidden="true"><circle cx="24" cy="24" r="16" /><path d="M30 18l-4 9-9 3 4-9z" /></svg>);
}
export function IconPath() {
  return (<svg {...iconProps} aria-hidden="true"><path d="M12 38c0-10 24-6 24-16S16 18 16 10" /><circle cx="12" cy="38" r="2" /><circle cx="16" cy="10" r="2" /></svg>);
}
export function IconSteps() {
  return (<svg {...iconProps} aria-hidden="true"><path d="M8 38h10v-8h10v-8h10V10" /></svg>);
}
