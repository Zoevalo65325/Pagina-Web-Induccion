import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.jpeg" 
        alt="GTH S.A.S. Logo" 
        className={variant === 'icon' ? 'h-10 w-10 object-contain' : 'h-10 w-auto object-contain'}
      />
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-navy-900">GTH S.A.S.</span>
          <span className="text-[10px] font-medium tracking-wide text-emerald-600">Gestión de Talento Humano</span>
        </div>
      )}
    </div>
  );
}
