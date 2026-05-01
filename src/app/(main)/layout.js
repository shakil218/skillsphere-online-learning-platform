
import Footer from '@/components/share/footer/Footer';
import Navbar from '@/components/share/navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className='min-h-[calc(100vh-272px)]'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;