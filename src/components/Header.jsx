import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616',
    textDecoration: 'underline',
  };

  return (
    <nav>
      <NavLink className='vanlife-home-link' to='/'>
        #VANLIFE
      </NavLink>
      <div>
        <NavLink
          to='/host'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
