import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const styles = {
  title: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  image: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
  },
  artistName: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div style={styles.image}>
      <div className="container-fluid mt-1">
        <nav
          style={styles.image}
          className="navbar navbar-expand-lg navbar-dark bg-transparent d-flex flex-row"
        >
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
              href="/#about"
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
                  href="/#eventPage"
                  onClick={() => handlePageChange('EventPage')}
                >
                  EventPage
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
                  href="/#login"
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
    </div>
  );
}
export default Navigation;
