import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow bg-kirana-green-light bg-opacity-30 py-10 overflow-x-hidden">
        {fullWidth ? (
          // Full width content without horizontal constraints
          <div className="w-full overflow-x-hidden">
            {children}
          </div>
        ) : (
          // Regular content with horizontal padding and max width
          <div className="max-w-screen-xl mx-auto px-4 overflow-x-hidden">
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;