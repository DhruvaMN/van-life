import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/HostPage.css';

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/vans');
        setVans(res.data.allVans.slice(0, 3));
      } catch (error) {
        console.error('Error fetching vans:', error);
        setVans([]);
      }
    };
    fetchVans();
  }, []);
  return (
    <div className='host-van-container'>
      <h1>Your listed vans</h1>
      <div>
        {vans.map((van) => (
          <Link to={`/host/vans/${van._id}`}>
            <img src={van.imageURL} alt='van' />
            <div>
              <h3>{van.name}</h3>
              <p>
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HostVans;
