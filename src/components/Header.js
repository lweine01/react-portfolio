import React from 'react';
import './Header.css';

const styles = {
  headerStyle: {
    padding: '20px'
  },
  navbarStyle: {
    justifyContent: 'flex-end',
    padding: '10px',
  },
  aStyle: {
    color: 'white',
    padding: '10px',
    textDecoration: 'none'
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header row">
      <h1 className="col">Laura Weiner</h1>
      <nav style={styles.navbarStyle} className="navbar col">
        <a href="/" style={styles.aStyle}>About Me</a>
        <a href="/" style={styles.aStyle}>Projects</a>
        <a href="/" style={styles.aStyle}>Contact</a>
        <a href="/" style={styles.aStyle}>Resume</a>
      </nav>
    </header>
  );
}

export default Header;