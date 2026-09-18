interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 85V45M30 45 20 55M30 45l10 10" stroke="#1e3a6b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 85V30M55 30 45 40M55 30l10 10" stroke="#059669" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 85V50M80 50 70 60M80 50l10 10" stroke="#1e3a6b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="100" r="12" stroke="#059669" strokeWidth="4" />
      <path d="M15 100h90" stroke="#1e3a6b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return <LogoMark className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-navy-900">GTH S.A.S.</span>
        <span className="text-[10px] font-medium tracking-wide text-emerald-600">Gestión de Talento Humano</span>
      </div>
    </div>
  );
}
