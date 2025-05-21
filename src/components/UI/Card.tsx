import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

const Card = ({ children, className = '', interactive = false }: CardProps) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
        rounded-xl shadow-sm
        border border-gray-100 dark:border-gray-700/50
        transition-all duration-300 ease-out
        ${interactive ? 'hover:-translate-y-1 hover:shadow-md active:translate-y-0' : ''}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-600/10 dark:to-purple-600/10 z-0" />
    </div>
  );
};

export default Card;