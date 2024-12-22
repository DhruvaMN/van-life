import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import HostDetailVan from './HostDetailVan';
import axios from 'axios';
import '../styles/HostPage.css';

const VanDetailsLayout = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616',
    textDecoration: 'underline',
  };
  const { id } = useParams();
  const [van, setVan] = useState({});
  useEffect(() => {
    async function fetchVan(id) {
      try {
        const fetchedVan = await axios.get(
          `http://localhost:5000/api/v1/vans/${id}`
        );
        setVan(fetchedVan.data.van);
      } catch (error) {
        console.error('Error fetching the van:', error);
        setVan({});
      }
    }
    fetchVan(id);
  }, [id]);
  return (
    <div className='van-detail-layout-container'>
      <HostDetailVan van={van} />
      <nav className='nav-bar'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          to='pricing'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to='photos'
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ van }} />
    </div>
  );
};

export default VanDetailsLayout;
