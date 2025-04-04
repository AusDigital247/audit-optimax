
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal border-solid"></div>
      <span className="ml-3 text-teal font-medium">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
