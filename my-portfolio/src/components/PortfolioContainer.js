import React, { useState } from 'react';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
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
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
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
