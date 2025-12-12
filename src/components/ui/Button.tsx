type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', disabled, ...rest }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform';

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const variants: Record<string, string> = {
    primary: 'bg-smartmed-600 text-white hover:bg-smartmed-700 focus:ring-smartmed-500',
    secondary: 'bg-white text-smartmed-600 border border-smartmed-200 hover:bg-smartmed-50 focus:ring-smartmed-300',
    ghost: 'bg-transparent text-smartmed-600 hover:bg-smartmed-50 focus:ring-transparent',
    coral: 'bg-coral-500 text-white hover:bg-coral-600 focus:ring-coral-400',
    gradient: 'bg-gradient-to-r from-smartmed-500 to-coral-500 text-white shadow-lg hover:brightness-95'
  };

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed scale-100' : 'hover:scale-105';

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${disabledClass} ${className}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
