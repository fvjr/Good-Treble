import React, { useState } from 'react';
import About from './pages/About';
import Navigation from './Navigation';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './pages/Footer';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Profile');

  //select which page to render
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
     <Footer />
    </div>
  );
}

