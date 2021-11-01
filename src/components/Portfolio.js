import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Testimonials') {
      return <Testimonials />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    // return <Contact />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Portfolio;