// src/app/components/profile/ProfileLayout.tsx
import React, { ReactNode } from 'react';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {children}
    </div>
  );
};

export default ProfileLayout;