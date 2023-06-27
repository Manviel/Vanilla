import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PageDecorator from '../../components/PageDecorator';
import Popup from '../../components/Popup';
import Tags from '../../components/Tags';
import MoreFrom from './MoreFrom';

import { ActionTypes, Paths } from '../../utils/models';

import './details.css';

const TAGS = [
  {
    id: '2',
    label: 'Black',
  },
  {
    id: '3',
    label: 'Tailored',
  },
  {
    id: '4',
    label: 'Layers',
  },
  {
    id: '5',
    label: 'Sale',
  },
];

const Details = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <PageDecorator subtitle='Item' headline='Details'>
      <div className='grid brands gap'>
        <Tags tags={TAGS} />
      </div>

      <div className='grid gap details screen'>
        <Popup item={data} />

        <article>
          <h3 className='title'>Description</h3>

          <p className='info'>{data.body}</p>

          <Link to={Paths.Profile} className={ActionTypes.Contained}>
            Pay with Touch ID
          </Link>
        </article>
      </div>

      <MoreFrom />
    </PageDecorator>
  );
};

export default Details;
