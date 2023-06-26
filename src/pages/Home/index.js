import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDecorator from '../../components/PageDecorator';
import Filters from '../../components/Filters';
import ShowCard from '../../components/Card/ShowCard';

import { DataContext } from '../../utils/context';

const Home = () => {
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
    <PageDecorator subtitle='Home' headline='Collection'>
      <Filters handleFilter={handleResult} />

      <div className='grid home gap provision'>
        {state.data.map((show) => (
          <Link key={show.id} to={`/${show.id}`}>
            <ShowCard title={show.title} price={show.id} />
          </Link>
        ))}
      </div>
    </PageDecorator>
  );
};

export default Home;
