import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';

import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <Link className='vanlife-home-link' to='/'>
          #VANLIFE
        </Link>
        <div>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <footer>
        <p>&#169; 2024 #VANLIFE</p>
      </footer>
    </>
  );
};

export default App;
