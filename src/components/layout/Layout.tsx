import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-kirana-green-light bg-opacity-30 py-8">
        {fullWidth ? (
          // Full width content with more compressed margins
          <div className="w-full max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16">
            {children}
          </div>
        ) : (
          // Regular content with more compressed margins
          <div className="max-w-screen-lg mx-auto px-8 sm:px-12 lg:px-16">
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;