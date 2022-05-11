import React, { useState } from 'react';
import About from '../pages/About';
import Navigation from './Navigation';
<<<<<<< HEAD
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './pages/Footer';
=======
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Container from 'react-bootstrap/Container';
import EventPage from '../pages/EventPage';

// export default function PageContainer() {
//   const [currentPage, setCurrentPage] = useState('Profile');

//   //select which page to render
//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Login') {
//       return <Login />;
//     }
//     if (currentPage === 'Profile') {
//       return <Profile />;
//     }
//     if (currentPage === 'EventPage') {
//       return <EventPage />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Navigation
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//       {renderPage()}
//     </div>
//   );
// }
>>>>>>> 6783fd68df577b1fe269e38d83a3c6fcb8bc648a

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
    if (currentPage === 'EventPage') {
      return <EventPage />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
<<<<<<< HEAD
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
     <Footer />
=======
      <Container>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </Container>
>>>>>>> 6783fd68df577b1fe269e38d83a3c6fcb8bc648a
    </div>
  );
}

