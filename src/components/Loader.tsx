
import React from 'react';
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Loader = ({ size = 'medium', className }: LoaderProps) => {
  const sizeClasses = {
    small: 'w-5 h-5 border-2',
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
