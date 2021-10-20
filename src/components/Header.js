import React from 'react';
import './Header.css';

const styles = {
  headerStyle: {
    background: 'black',
    paddingLeft: '30px',
    padding: '15px,'
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

// We use JSX curly braces to evaluate the style object

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyle} className="header row">
      <h1 className="col">Laura Weiner</h1>
      <nav style={styles.navbarStyle} className="navbar col">
        <a
          href="#about"
          style={styles.aStyle}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
        <a
          href="#testimonials"
          style={styles.aStyle}
          onClick={() => handlePageChange('Testimonials')}
          className={currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}
        >
          Testimonials
        </a>
        <a
          href="#projects"
          style={styles.aStyle}
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
        <a
          href="#resume"
          style={styles.aStyle}
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        <a
          href="#contact"
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