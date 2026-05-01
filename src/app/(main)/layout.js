import Footer from '@/components/share/footer/Footer';
import Navbar from '@/components/share/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;