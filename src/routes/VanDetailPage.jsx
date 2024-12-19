import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/VanDetailPage.css';

const VanDetailPage = () => {
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
  }, []);
  console.log(van);
  return (
    <div className='vanpage-outer-container'>
      <div className='van-detail-container'>
        <Link to='/vans'>
          <i class='fa-solid fa-arrow-left' />
          Back to all vans
        </Link>
        <img src={van.imageURL} alt='' />
        <h1>{van.name}</h1>
        <h3>
          ${van.price}
          <span>/day</span>
        </h3>
        <p>{van.description}</p>
        <button>Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetailPage;
