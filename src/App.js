import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import Loader from './components/Loader';

const Landing = lazy(() => import('./pages/Landing'));
const Details = lazy(() => import('./pages/Details'));
const Home = lazy(() => import('./pages/Home'));

import './styles/variables.css';
import './styles/index.css';
import './styles/media.css';

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route exact path='/:id' element={<Details />} />
    </Routes>

    <CookieConsent
      location='bottom'
      buttonText='Close'
      style={{
        background: '#aeffc5',
        color: '#000',
        textTransform: 'uppercase',
        lineHeight: '1.7em',
        flexDirection: 'column',
      }}
      buttonStyle={{
        background: '#303030',
        color: '#fff',
        fontSize: '10px',
        textTransform: 'uppercase',
        padding: '1.2em',
      }}
      expires={150}
    >
      Cookie use
      <br />
      This website uses cookies to enhance the user experience. If you continue,
      we assume that you consent to receive all cookies.{' '}
      <a
        href='https://www.cookiebot.com/en/cookie-banner/'
        style={{ textDecoration: 'underline' }}
        target='_blank'
      >
        More info
      </a>
    </CookieConsent>
  </Suspense>
);

export default App;
