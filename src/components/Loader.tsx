
import React from 'react';
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: 'sm' | 'medium' | 'large';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium', className }) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "rounded-full border-t-transparent border-primary animate-spin",
          sizeClasses[size]
        )}
      />
    </div>
  );
};

export default Loader;
