import Navbar from '@/components/share/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;