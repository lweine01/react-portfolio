import React from 'react';
import './Header.css';

const styles = {
  headerStyle: {
    background: 'black',
    paddingLeft: '30px',
    paddingRight: '30px',
    verticalAlign: 'center',
  },
  navbarStyle: {
    justifyContent: 'flex-end',
  },
  aStyle: {
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
  }
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyle} className="header row">
      <h1 className="col m-2">Laura Weiner</h1>
      <nav style={styles.navbarStyle} className="navbar col">
        <a
          href="#About"
          style={styles.aStyle}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
        <a
          href="#Testimonials"
          style={styles.aStyle}
          onClick={(event) => handlePageChange('Testimonials')}
          className={currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}
        >
          Testimonials
        </a>
        <a
          href="#Projects"
          style={styles.aStyle}
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
        <a
          href="#Resume"
          style={styles.aStyle}
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        <a
          href="#Contact"
          style={styles.aStyle}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;