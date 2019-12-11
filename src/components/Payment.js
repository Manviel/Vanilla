import React, { useState } from "react";
import { createPortal } from "react-dom";

import Popup from "./Popup";
import ShowCard from "./ShowCard";

const Payment = ({ item }) => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="item" onClick={() => setPopup(true)}>
      <ShowCard title={item.title} />
      {popup &&
        createPortal(<Popup item={item} setPopup={setPopup} />, document.body)}
    </div>
  );
};

export default Payment;
