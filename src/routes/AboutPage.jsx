import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';

export default function AboutPage() {
  return (
    <div className='aboutpage-outer-container'>
      <div className='aboutpage-container'>
        <img
          src='https://museoutdoors.com/wp-content/uploads/2021/02/2825929_DSC03734_lo-res.jpg'
          alt='pic of wan'
          width={'300px'}
        />
        <div>
          <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br />
            (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div>
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <Link to='/vans'>Explore our vans</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
