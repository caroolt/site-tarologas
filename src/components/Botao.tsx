import React from 'react';

interface BotaoProps {
  variant?: 'primario' | 'secundario' | 'secundario-black' | 'variante3';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Botao({ 
  variant = 'primario', 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: BotaoProps) {
  const baseClasses = "font-worksans font-semibold text-2xl px-12 py-3 rounded-lg transition-all duration-200 flex items-center justify-center";
  
  const variantClasses = {
    primario: "bg-red-100 text-white-100 shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    secundario: "border-2 border-white-100 text-white-100 hover:bg-white-100 hover:text-black-100",
    'secundario-black': "border-2 border-black-100 text-black-100 hover:bg-black-100 hover:text-white-100",
    variante3: "bg-red-100 text-white-100 hover:bg-red-80"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}
