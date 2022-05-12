import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

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

function Navigation() {
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
            <Link className="nav-link navbar-logo" to="/about">
              <img
                src="/Assets/goodTrebleLogo.png"
                width="135"
                height="95"
                alt="Good Treble Logo"
              />
            </Link>
          </div>
          <div className="d-flex flex-row-reverse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {' '}
                  Why GOOD TREBLE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventsPage">
                  {' '}
                  Events Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://open.spotify.com/playlist/36mXEhFFU2cPrqcKmfoK0M?si=13590d54ca614540"
                >
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