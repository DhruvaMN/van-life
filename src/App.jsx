import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import VansPage from './routes/vans/VansPage';
import VanDetailPage from './routes/vans/VanDetailPage';
import Layout from './components/Layout';
import Dashboard from './routes/host/Dashboard';
import Income from './routes/host/Income';
import Reviews from './routes/host/Reviews';
import HostLaout from './components/HostLayout';
import HostVans from './components/HostVans';
import VanDetailsLayout from './components/VanDetailsLayout';
import HostVanPricing from './components/HostVanPricing';
import HostVanDetails from './components/HostVanDetails';
import HostVanPhotos from './components/HostVanPhotos';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='vans' element={<VansPage />} />
          <Route path='vans/:id' element={<VanDetailPage />} />

          <Route path='host' element={<HostLaout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<VanDetailsLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
