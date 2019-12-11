import React, { useState, useEffect, lazy, Suspense } from "react";

import { days, groupBy } from "../utils";

import Payment from "../components/Payment";
import Loader from "../components/Loader";

const Header = lazy(() => import("../components/Header"));

import "../styles/albums.css";

const Albums = ({ match }) => {
  const [state, setState] = useState({
    data: []
  });

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}/albums`
    )
      .then(response => response.json())
      .then(json => {
        const result = groupBy(json, "userId");

        setState({ ...state, data: result });
      });
  }, []);

  const getData = value => {
    fetch(`https://api.lyrics.ovh/suggest/${value}`)
      .then(response => response.json())
      .then(json =>
        setState({
          ...state
        })
      );
  };

  const onChange = e => {
    const userInput = e.target.value;

    if (userInput.length === 0) {
      setState({
        ...state
      });
    } else {
      getData(userInput);
    }
  };

  const { data } = state;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header handleFilter={onChange} showFilter />

        <AutoComplete handleFilter={handleFilter} />
      </Suspense>
      <div className="flex header content">
        {data.map((group, i) => (
          <section className="group" key={`g${i}`}>
            <h3 className="day">{i < days.length ? days[i] : "Later"}</h3>
            <article className="flex container">
              {group.map(a => (
                <Payment key={a.id} item={a} />
              ))}
            </article>
          </section>
        ))}
        <section className="stats">
          <h5 className="out">{data.length} videos</h5>
          <span className="out">Updated just now</span>
        </section>
      </div>
    </>
  );
};

export default Albums;
