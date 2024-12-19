import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VanCard.css';

const vanCard = ({ van }) => {
  return (
    <div className='vancard-container'>
      <Link to={`/vans/${van._id}`}>
        <img src={van.imageURL} alt='image of a van' />
        <div>
          <h2 className='van-name'>{van.name}</h2>
          <h2 className='van-price'>${van.price}</h2>
        </div>
        <p>/day</p>
      </Link>
    </div>
  );
};

export default vanCard;
