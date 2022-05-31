import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <header className="bg-white md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
        <a 
          href="#About-Me" 
          className={currentPage === 'AboutMe' ? ' inline-block border-l border-t border-r rounded-t py-2 px-4  mr-5' : 'nav-link mr-5'}
          onClick={() => handlePageChange('AboutMe')}
        >
          About Me
        </a>
        <a 
          href="#Portfolio" 
          className={currentPage === 'Portfolio' ? 'inline-block border-l border-t border-r rounded-t py-2 px-4  mr-5' : 'nav-link mr-5'}
          onClick={() => handlePageChange('Portfolio')}
        >
          Portfolio
        </a>
        <a 
          href="#Contact" 
          className={currentPage === 'Blog' ? 'inline-block border-l border-t border-r rounded-t py-2 px-4  mr-5' : 'nav-link mr-5'}
          onClick={() => handlePageChange('Blog')}
        >
          Contact
        </a>
        <a 
          href="#Resume" 
          className={currentPage === 'Contact' ? 'inline-block border-l border-t border-r rounded-t py-2 px-4  mr-5' : 'nav-link mr-5'}
          onClick={() => handlePageChange('Contact')}
        >
          Resume
        </a>
      </nav>
      <h1
        className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
      >
        Alex Hernandez
      </h1>
    </div>
  </header>
  );
}

export default NavTabs;
