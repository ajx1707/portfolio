import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: ReactNode;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon
}: ButtonProps) => {
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-500 
      hover:from-blue-500 hover:to-blue-600
      text-white shadow-sm
      dark:from-blue-500 dark:to-blue-600
      dark:hover:from-blue-400 dark:hover:to-blue-500
    `,
    secondary: `
      bg-gradient-to-r from-purple-600 to-purple-500
      hover:from-purple-500 hover:to-purple-600
      text-white shadow-sm
      dark:from-purple-500 dark:to-purple-600
      dark:hover:from-purple-400 dark:hover:to-purple-500
    `,
    outline: `
      border border-gray-300 dark:border-gray-600 
      hover:border-blue-500 dark:hover:border-blue-400
      hover:bg-blue-50 dark:hover:bg-blue-900/20
      text-gray-700 dark:text-gray-300
    `,
    ghost: `
      hover:bg-gray-100 dark:hover:bg-gray-800 
      text-gray-700 dark:text-gray-300
    `,
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };

  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        font-medium rounded-xl
        transition-all duration-300
        transform hover:scale-[1.02] active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;