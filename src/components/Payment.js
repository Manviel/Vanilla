import React, { useState, Suspense, lazy } from "react";

import Loader from "./Loader";

const Popup = lazy(() => import("./Popup"));

const Payment = ({ item }) => {
  const [popup, setPopup] = useState(false);

  return (
    <section className="album control">
      <h4 className="title" onClick={() => setPopup(true)}>
        {item.title}
      </h4>
      {popup && (
        <Suspense fallback={<Loader />}>
          <Popup item={item} setPopup={setPopup} />
        </Suspense>
      )}
    </section>
  );
};

export default Payment;
