import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}>
          Why Treble
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#profile" onClick={() => handlePageChange('Profile')}>
            Profile
          </Nav.Link>
          <Nav.Link href="#login" onClick={() => handlePageChange('Login')}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navigation;
