
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

/**
 * Main layout component with configurable width settings
 * Always defaults to full width to maintain consistent design across the site
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = "", 
  fullWidth = true  // Default is true for full width layout
}) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className={`flex-grow w-full ${fullWidth ? "" : "container mx-auto px-4 md:px-6"} ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
