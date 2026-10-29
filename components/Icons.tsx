export function Logo({ className }: { className?: string }) {
  return <img src="/images/JD-Logo.png" alt="" className={className} />;
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

export function Substack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
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

export function IconSprout() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M24 40V22" />
      <path d="M24 28C24 21 19 16 11 16C11 23 16 28 24 28Z" />
      <path d="M24 22C24 15 28 11 36 11C36 18 32 22 24 22Z" />
      <path d="M16 40h16" />
    </svg>
  );
}

export function IconWind() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M35.4 15.4a5 5 0 1 1 3.6 8.6H4" />
      <path d="M19.2 9.2A4 4 0 1 1 22 16H4" />
      <path d="M25.2 38.8A4 4 0 1 0 28 32H4" />
    </svg>
  );
}

export function IconSunrise() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M14 32a10 10 0 0 1 20 0" />
      <path d="M24 18v-4M14 22l-3-3M34 22l3-3M10 32H6M38 32h4" />
      <path d="M12 38h24" />
    </svg>
  );
}

export function IconEar() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M16 22a10 10 0 0 1 20 0c0 6-4 8-6 11-1.5 2.5-2 5-5 5a5 5 0 0 1-5-5" />
      <path d="M24 22a3 3 0 0 1 6 0c0 3-3 3-3 6" />
    </svg>
  );
}

export function IconReed() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M14 40C14 28 20 18 36 12" />
      <path d="M16 32c-4 0-7-2-8-6 4 0 7 2 8 6z" />
      <path d="M21 23c0-4 3-7 7-8 0 4-3 7-7 8z" />
      <path d="M10 40h14" />
    </svg>
  );
}

export function IconSignpost() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M24 8v32" />
      <path d="M24 12h14l4 4-4 4H24z" />
      <path d="M24 25H10l-4 4 4 4h14z" />
      <path d="M18 40h12" />
    </svg>
  );
}

export function IconMountain() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6 40l14-22 8 12 5-7 9 17z" />
      <path d="M20 18V7" />
      <path d="M20 7h8l-2 3 2 3h-8" />
    </svg>
  );
}
