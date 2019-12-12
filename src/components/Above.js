import React from "react";

const Above = ({ handleNext, handlePrev }) => (
  <section className="flex">
    <div onClick={handlePrev} className="flex above tag">
      <i className="arrow prev"></i>
    </div>
    <div onClick={handleNext} className="flex above tag">
      <i className="arrow next"></i>
    </div>
  </section>
);

export default Above;
