import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';

const Header = lazy(() => import('../components/Header'));
const Popup = lazy(() => import('../components/Popup'));
const Tags = lazy(() => import('../components/Tags'));
const MoreFrom = lazy(() => import('../components/MoreFrom'));

import '../styles/details.css';

const Details = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Header />

      <Tags tags={['Black', 'Tailored', 'Layers']} />

      <article className='flex details'>
        <Popup item={data} />

        {data.id ? (
          <div
            style={{
              backgroundColor: data.id % 2 === 0 ? '#2d2d2d' : '#FF385C',
            }}
            className='hacking'
          >
            <h6 className='case'>ABOUT ME</h6>

            <p className='case'>{data.email}</p>
          </div>
        ) : (
          <Loader />
        )}

        <div>
          <strong className='case'>Description</strong>

          <p className='logo case'>{data.body}</p>
        </div>
      </article>

      <MoreFrom />
    </Suspense>
  );
};

export default Details;
