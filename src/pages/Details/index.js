import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageDecorator from '../../components/PageDecorator';
import Popup from '../../components/Popup';
import Tags from '../../components/Tags';
import MoreFrom from '../../components/MoreFrom';

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
      <Tags tags={TAGS} />

      <div className='grid gap details'>
        <Popup item={data} />

        <div>
          <strong className='case'>Description</strong>

          <p className='logo case'>{data.body}</p>
        </div>
      </div>

      <MoreFrom />
    </PageDecorator>
  );
};

export default Details;
