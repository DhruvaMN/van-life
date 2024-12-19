import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VanCard2 from '../components/VanCard2';
import '../styles/VansPage.css';

const VansPage = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/vans');
        setVans(res.data.allVans);
      } catch (error) {
        console.error('Error fetching vans:', error);
        setVans([]);
      }
    };

    fetchVans();
  }, []);

  return (
    <div className='vanpage-outer-container'>
      <div className='vanspage-container'>
        <h1>Explore our van options</h1>
        <div className='vans-container'>
          {vans.map((van) => (
            <VanCard2 key={van.id} van={van} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VansPage;
