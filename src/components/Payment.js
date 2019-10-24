import React, { useState } from "react";
import { createPortal } from "react-dom";

import Popup from "./Popup";

const Payment = ({ item }) => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section className="flex album control" onClick={() => setPopup(true)}>
        <div className="cover"></div>
        <h4>{item.title}</h4>
      </section>
      {popup &&
        createPortal(<Popup item={item} setPopup={setPopup} />, document.body)}
    </>
  );
};

export default Payment;
