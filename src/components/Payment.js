import React, { useState } from "react";
import { createPortal } from "react-dom";

import Popup from "./Popup";

const Payment = ({ item }) => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section className="album control" onClick={() => setPopup(true)}>
        <span className="category">Black</span>
        <span className="category sub">Layers</span>
        <strong className="teaser">{item.title}</strong>
      </section>
      {popup &&
        createPortal(<Popup item={item} setPopup={setPopup} />, document.body)}
    </>
  );
};

export default Payment;
