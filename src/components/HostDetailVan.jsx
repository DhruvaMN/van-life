import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const HostDetailVan = ({ van }) => {
  return (
    <div className='host-van-summary-outer'>
      <Link to='..' relative='path'>
        <i className='fa-solid fa-arrow-left' />
        Back to all vans
      </Link>
      <div className='host-van-summary'>
        <img src={van.imageURL} alt='' />
        <div>
          <h2>{van.name}</h2>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostDetailVan;
