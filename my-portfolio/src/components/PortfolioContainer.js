import React, { useState } from 'react';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import ResponsiveAppBar from './Header';
import LabelBottomNavigation from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact  />;
    }
    return < Resume/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <ResponsiveAppBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <LabelBottomNavigation/>
    </div>

  );
}
