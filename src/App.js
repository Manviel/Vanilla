import React, { Suspense, lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import { SquareTextIcon, TextFinderIcon } from './assets/icons';

import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Details = lazy(() => import('./pages/Details'));
const Profile = lazy(() => import('./pages/Profile'));

import { Paths, ActionTypes } from './utils/models';

import './index.css';

const App = () => (
  <div className='flex col items-center'>
    <nav
      className='fixed-bottom dock depth content-full flex justify-between'
      aria-label='Tabs'
    >
      <NavLink
        to={Paths.Home}
        aria-label='Home'
        className={ActionTypes.SuperEllipse}
      >
        <SquareTextIcon />
      </NavLink>

      <NavLink
        to={Paths.Profile}
        aria-label='Profile'
        className={ActionTypes.SuperEllipse}
      >
        <TextFinderIcon />
      </NavLink>
    </nav>

    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={Paths.Home} element={<Home />} />
        <Route exact path={Paths.Details} element={<Details />} />
        <Route path={Paths.Profile} element={<Profile />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
