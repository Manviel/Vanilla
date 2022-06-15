import React, { lazy, useContext, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

import { DataContext } from '../utils/context';

const Filters = lazy(() => import('../components/Filters'));
const Header = lazy(() => import('../components/Header'));
const ShowCard = lazy(() => import('../components/ShowCard'));

const Landing = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (state.data.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => dispatch({ type: 'update', payload: json }));
    }
  };

  const reverseComparison = (first, last) => (first.id < last.id ? -1 : 0);

  const sortByDefault = (first, last, key) => (first[key] > last[key] ? -1 : 0);

  const handleFilter = (query) => {
    if (query === 'asc') {
      return state.data.sort((a, b) =>
        a.id > b.id ? 1 : sortByDefault(b, a, 'id')
      );
    } else if (query === 'desc') {
      return state.data.sort((a, b) =>
        a.id < b.id ? 1 : reverseComparison(b, a)
      );
    } else {
      return state.data.sort((a, b) =>
        a.title > b.title ? 1 : sortByDefault(b, a, 'title')
      );
    }
  };

  const handleResult = (result) =>
    dispatch({ type: 'update', payload: handleFilter(result) });

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Filters handleFilter={handleResult} />

      <main className='flex container'>
        {state.data.map((show) => (
          <Link key={show.id} to={`/${show.id}`} className='item'>
            <ShowCard title={show.title} price={show.id} />
          </Link>
        ))}
      </main>
    </Suspense>
  );
};

export default Landing;
