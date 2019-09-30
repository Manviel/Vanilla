import React, { useState, useEffect, lazy } from "react";

import { days, groupBy } from "../utils";

const Header = lazy(() => import("./Header"));

const Albums = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}/albums`
    )
      .then(response => response.json())
      .then(json => {
        const result = groupBy(json, "userId");

        setData(result);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="header content">
        {data &&
          data.map((group, i) => (
            <section className="group" key={`g${i}`}>
              <h3 className="day">{i < 7 ? days[i] : "Later"}</h3>
              <article className="container">
                {group.map(a => (
                  <section key={a.id} className="album">
                    <h4 className="white">{a.title}</h4>
                  </section>
                ))}
              </article>
            </section>
          ))}
        <section className="stats">
          <h5 className="total">{data.length} videos</h5>
          <span className="out">Updated just now</span>
        </section>
      </div>
    </>
  );
};

export default Albums;
