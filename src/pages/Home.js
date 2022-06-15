import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { days, months } from '../utils';

import { DataContext } from '../utils/context';

import '../styles/home.css';

const Home = () => {
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
    <article className='home'>
      <h1 className='date center case'>Welcome back</h1>
      <h2 className='time center'>
        {time.getHours()}:
        {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
      </h2>
      <h3 className='date center'>
        {days[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}
      </h3>
      <section className='blur'>
        <div className='dock'>
          <button className='icon' onClick={handleClick}>
            {isAuth ? (
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM13.9912 20.9316C9.95703 20.9316 6.73145 17.6885 6.73145 13.6543C6.73145 9.62012 9.95703 6.38574 13.9824 6.38574C18.0166 6.38574 21.2598 9.62012 21.2686 13.6543C21.2773 17.6885 18.0254 20.9316 13.9912 20.9316ZM11.4775 17.1172H12.4004C12.8486 17.1172 13.0684 16.8711 13.0684 16.4932V10.8154C13.0684 10.4463 12.8486 10.1914 12.4004 10.1914H11.4775C11.0293 10.1914 10.8096 10.4463 10.8096 10.8154V16.4932C10.8096 16.8711 11.0293 17.1172 11.4775 17.1172ZM15.5908 17.1172H16.5049C16.9443 17.1172 17.1641 16.8711 17.1641 16.4932V10.8154C17.1641 10.4463 16.9443 10.1914 16.5049 10.1914H15.5908C15.1426 10.1914 14.9141 10.4463 14.9141 10.8154V16.4932C14.9141 16.8711 15.1426 17.1172 15.5908 17.1172Z'
                  fill='#1C1C1E'
                />
              </svg>
            ) : (
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.9912 22.7422C18.9746 22.7422 23.0879 18.6289 23.0879 13.6543C23.0879 8.67969 18.9658 4.56641 13.9824 4.56641C9.00781 4.56641 4.90332 8.67969 4.90332 13.6543C4.90332 18.6289 9.0166 22.7422 13.9912 22.7422ZM13.9912 20.9316C9.95703 20.9316 6.73145 17.6885 6.73145 13.6543C6.73145 9.62012 9.95703 6.38574 13.9824 6.38574C18.0166 6.38574 21.2598 9.62012 21.2686 13.6543C21.2773 17.6885 18.0254 20.9316 13.9912 20.9316ZM17.4014 14.1465C17.7705 13.9355 17.7617 13.3994 17.4014 13.1885L12.3389 10.2002C11.9521 9.98047 11.4424 10.165 11.4424 10.5957V16.7305C11.4424 17.1611 11.9258 17.3721 12.3389 17.126L17.4014 14.1465Z'
                  fill='#1C1C1E'
                />
              </svg>
            )}
          </button>
          <Link to='/' className='btn case'>
            Store
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Home;
