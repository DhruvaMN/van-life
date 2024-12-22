import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/HostPage.css';

const HostLaout = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616',
    textDecoration: 'underline',
  };
  return (
    <>
      <nav>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLaout;
