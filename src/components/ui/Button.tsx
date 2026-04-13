import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[4px] px-[20px] py-[12px] text-[16px] uppercase font-medium transition-colors duration-200",
          variant === 'primary' && "bg-primary-dark text-neutral-cream hover:bg-primary-dark/90",
          variant === 'secondary' && "bg-transparent border border-secondary-blue text-secondary-blue hover:bg-secondary-blue/5",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
