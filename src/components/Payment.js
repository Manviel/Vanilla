import React, { useState, lazy } from "react";

const Popup = lazy(() => import("./Popup"));

const Payment = ({ item }) => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section className="album">
        <h4 className="white" onClick={() => setPopup(true)}>
          {item.title}
        </h4>
      </section>
      {popup && <Popup item={item} setPopup={setPopup} />}
    </>
  );
};

export default Payment;
