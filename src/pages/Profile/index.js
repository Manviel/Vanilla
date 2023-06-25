import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import PageDecorator from '../../components/PageDecorator';

import { days, months } from '../../utils';
import { DataContext } from '../../utils/context';
import { ActionTypes } from '../../utils/models';

import { PlayIcon, PauseIcon } from '../../assets/svg';

import './home.css';

const Profile = () => {
  const [time, setTime] = useState(new Date());

  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const tick = () => setTime(new Date());

    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  const isAuth = state.isAllowed;

  const handleClick = () => dispatch({ type: 'auth', payload: !isAuth });

  return (
    <PageDecorator subtitle='Profile' headline='Welcome back'>
      <article className='view material rounded'>
        <h2 className='time accent'>
          {time.getHours()}:
          {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
        </h2>

        <h3 className='date card-sup'>
          {days[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}
        </h3>
      </article>

      <section className='view material rounded screen'>
        <div className='flex col gap items-center'>
          <button
            type='button'
            className={ActionTypes.SuperEllipse}
            onClick={handleClick}
            aria-label={isAuth ? 'Pause' : 'Play'}
          >
            {isAuth ? <PauseIcon /> : <PlayIcon />}
          </button>

          <Link to='/' className={ActionTypes.Contained}>
            Go to the Store
          </Link>
        </div>
      </section>

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
        This website uses cookies to enhance the user experience. If you
        continue, we assume that you consent to receive all cookies.{' '}
        <a
          href='https://www.cookiebot.com/en/cookie-banner/'
          style={{ textDecoration: 'underline' }}
          target='_blank'
        >
          More info
        </a>
      </CookieConsent>
    </PageDecorator>
  );
};

export default Profile;
