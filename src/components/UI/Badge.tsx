import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-100 to-blue-50 
      text-blue-800 
      dark:from-blue-900/50 dark:to-blue-800/50 
      dark:text-blue-300
      dark:border-blue-800/50
    `,
    secondary: `
      bg-gradient-to-r from-purple-100 to-purple-50 
      text-purple-800 
      dark:from-purple-900/50 dark:to-purple-800/50 
      dark:text-purple-300
      dark:border-purple-800/50
    `,
    success: `
      bg-gradient-to-r from-green-100 to-green-50 
      text-green-800 
      dark:from-green-900/50 dark:to-green-800/50 
      dark:text-green-300
      dark:border-green-800/50
    `,
    warning: `
      bg-gradient-to-r from-yellow-100 to-yellow-50 
      text-yellow-800 
      dark:from-yellow-900/50 dark:to-yellow-800/50 
      dark:text-yellow-300
      dark:border-yellow-800/50
    `,
    error: `
      bg-gradient-to-r from-red-100 to-red-50 
      text-red-800 
      dark:from-red-900/50 dark:to-red-800/50 
      dark:text-red-300
      dark:border-red-800/50
    `,
  };

  return (
    <span
      className={`
        px-2.5 py-0.5 text-xs font-medium
        rounded-full border backdrop-blur-sm
        transition-all duration-300
        hover:scale-105
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;