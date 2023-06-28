import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageDecorator from '../../components/PageDecorator';
import Tags from '../../components/Tags';

import MoreFrom from './SliderReview/MoreFrom';
import InfoTable from './InfoTable';

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
        <article>
          <h3 className='title'>Description</h3>

          <p className='info'>{data.body}</p>

          <InfoTable item={data} />
        </article>

        <ul className='flex col gap'>
          <li className='flex col os price'>
            <h4 className='subtitle activity'>Adapter</h4>
            <p className='term'>
              Allows objects with incompatible interfaces to collaborate.
            </p>
          </li>

          <li className='flex col os alice'>
            <h4 className='subtitle demo'>Bridge</h4>
            <p className='term'>
              Lets you split a large class or a set of closely related classes
              into two separate hierarchies—abstraction and implementation—which
              can be developed independently of each other.
            </p>
          </li>

          <li className='flex col os layer'>
            <h4 className='subtitle outline'>Composite</h4>
            <p className='term'>
              Lets you compose objects into tree structures and then work with
              these structures as if they were individual objects.
            </p>
          </li>
        </ul>
      </div>

      <MoreFrom />
    </PageDecorator>
  );
};

export default Details;
