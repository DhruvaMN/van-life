import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img src={van.imageURL} width='300' alt='' />
    </div>
  );
};

export default HostVanPhotos;
