import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanDetails = () => {
  const { van } = useOutletContext();
  return (
    <div className='host-van-detail-container'>
      <p>
        <span style={{ fontWeight: 'bold' }}>Name:</span> {van.name}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Description:</span>{' '}
        {van.description}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Visibility:</span> public
      </p>
    </div>
  );
};

export default HostVanDetails;
