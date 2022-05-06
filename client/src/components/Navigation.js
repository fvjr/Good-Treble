import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}>
//           Why Treble
//         </Navbar.Brand>
//         <Nav className="">
//           <Nav.Link href="#profile" onClick={() => handlePageChange('Profile')}>
//             Profile
//           </Nav.Link>
//           <Nav.Link href="#login" onClick={() => handlePageChange('Login')}>
//             Login
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <div className="container-fluid mt-1">
//       <Navbar className="'navbar navbar-expand-lg navbar-dark bg-transparent d-flex flex-row'">
//         <a className="navbar-brand" href="/login">
//           <img
//             src="./Assets/clefArt.png"
//             width="30"
//             height="50"
//             alt="treble clef"
//           />
//         </a>
//         <Container>
//           <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}>
//             Why Treble
//           </Navbar.Brand>
//           <Nav className="">
//             <Nav.Link
//               href="#profile"
//               onClick={() => handlePageChange('Profile')}
//             >
//               Profile
//             </Nav.Link>
//             <div className="mx-auto">
//               <a className="navbar-logo" href="/login">
//                 <img
//                   src="./Assets/goodTrebleLogo.png"
//                   width="135"
//                   height="95"
//                   alt="Good Treble Logo"
//                 />
//               </a>
//             </div>
//             <Nav.Link href="#login" onClick={() => handlePageChange('Login')}>
//               Login
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid mt-1">
      {' '}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent d-flex flex-row">
        <a className="navbar-brand" href="/login">
          <img
            src="/Assets/clefArt.png"
            width="30"
            height="50"
            alt="treble clef"
          />
        </a>
        <div className="navbar-nav" id="navbarNav"></div>
        <div className="mx-auto">
          <a
            className="navbar-logo"
            href="#about"
            onClick={() => handlePageChange('About')}
          >
            <img
              src="/Assets/goodTrebleLogo.png"
              width="135"
              height="95"
              alt="Good Treble Logo"
            />
          </a>
        </div>

        <div className="d-flex flex-row-reverse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#about"
                onClick={() => handlePageChange('About')}
              >
                Why GOOD TREBLE
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#profile"
                onClick={() => handlePageChange('Profile')}
              >
                Profile
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#login"
                onClick={() => handlePageChange('Login')}
              >
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                ▶
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;
