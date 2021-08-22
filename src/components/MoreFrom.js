import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShowCard from "./ShowCard";
import Above from "./Above";

import "../styles/slider.css";

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
    <article className="container">
      <h3 className="title case">More from Ratings & Reviews</h3>

      <Above handleNext={next} handlePrev={previous} />

      <Slider ref={slider} {...settings}>
        <div className="slide">
          <ShowCard title="Stunning!" />
        </div>

        <div className="slide">
          <ShowCard title="Kharkiv student" />
        </div>

        <div className="slide">
          <ShowCard title="Merezhko Michael" />
        </div>
      </Slider>
    </article>
  );
};

export default MoreFrom;
