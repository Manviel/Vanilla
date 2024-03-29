import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ShowCard from '../../../components/Card/ShowCard';
import Above from './Above';

import './slider.css';

const MoreFrom = () => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <article className='screen'>
      <h3 className='card-sub' id='candidate'>
        Ratings
      </h3>

      <Above handleNext={next} handlePrev={previous} />

      <Slider ref={slider} {...settings}>
        <div className='slide'>
          <ShowCard title='Stunning!' price='38.99' />
        </div>

        <div className='slide'>
          <ShowCard title='Kharkiv student' price='32.99' />
        </div>

        <div className='slide'>
          <ShowCard title='Merezhko Michael' price='14.99' />
        </div>
      </Slider>
    </article>
  );
};

export default MoreFrom;
