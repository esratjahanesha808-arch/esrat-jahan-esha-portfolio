import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-all duration-300 rounded-full select-none cursor-pointer active:scale-95 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-xs sm:text-sm',
    lg: 'px-9 py-3.5 text-[11px] sm:text-xs',
  };

  const variantStyles = {
    primary: 'text-[#08080a] border border-transparent',
    secondary: 'bg-transparent border border-[#b8965a] text-[#b8965a] hover:bg-[#b8965a] hover:text-[#08080a]',
    ghost: 'text-[#f5f5f4] border border-transparent hover:bg-white/5',
  };

  // Primary gets an inline gradient to use real Slee gold
  const primaryStyle = {
    background: 'linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)',
    color: '#08080a',
    fontFamily: 'Inter, sans-serif',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  const inlineStyle = variant === 'primary' ? primaryStyle : { fontFamily: 'Inter, sans-serif' };

  if (to) {
    return (
      <Link to={to} className={combinedClasses} style={inlineStyle} onClick={onClick as any}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          style={inlineStyle}
          onClick={onClick as any}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={combinedClasses} style={inlineStyle} onClick={onClick as any}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      style={inlineStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
