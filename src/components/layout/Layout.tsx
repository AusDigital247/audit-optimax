
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = "", 
  fullWidth = true  // Set default to true for full width layout
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
