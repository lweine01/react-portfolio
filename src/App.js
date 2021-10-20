import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

const styles = {
  divStyle: {
    // maxWidth: '900px',
    // justifyContent: 'center',
    color: 'white',
  }
}

function App() {
  return (
    <div style ={styles.divStyle}>
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
