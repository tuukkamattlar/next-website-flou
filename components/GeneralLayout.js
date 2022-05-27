import NavBar from '@components/Navbar';
import Footer from '@components/Footer';
import React from 'react';

export default function Layout({ children }) {
  /**  The name of the page: forces the Navbar to re-render after navigating to another page */
  const pageKey = children?.type?.name;

  if (typeof window !== "undefined") { 
    document.body.classList.remove('home');
  }
  
  return (
    <>
      <div className="minHeight">
        <NavBar key={pageKey} />
        {children}
      </div>
      <Footer />
    </>
  );
}
