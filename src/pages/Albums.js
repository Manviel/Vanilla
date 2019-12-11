import React, { useState, useEffect, lazy, Suspense } from "react";

import { days, groupBy } from "../utils";

import Loader from "../components/Loader";
import AutoComplete from "../components/AutoComplete";
import ShowCard from "../components/ShowCard";

const Header = lazy(() => import("../components/Header"));

import "../styles/albums.css";

const Albums = ({ match }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}/albums`
    )
      .then(response => response.json())
      .then(json => {
        const result = groupBy(json, "userId");

        setState(result);
      });
  }, []);

  const getData = value => {
    fetch(`https://api.lyrics.ovh/suggest/${value}`)
      .then(response => response.json())
      .then(json => setState(json));
  };

  const handleFilter = e => {
    const userInput = e.target.value;

    if (userInput.length === 0) {
      setState(json);
    } else {
      getData(userInput);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <AutoComplete handleFilter={handleFilter} />

      <div className="flex col content">
        {state.map((group, i) => (
          <section className="group" key={`g${i}`}>
            <h3 className="day">{i < days.length ? days[i] : "Later"}</h3>
            <article className="flex container">
              {group.map(a => (
                <ShowCard key={a.id} title={a.title} />
              ))}
            </article>
          </section>
        ))}
        <section className="stats">
          <h5 className="out">{state.length} videos</h5>
          <span className="out">Updated just now</span>
        </section>
      </div>
    </Suspense>
  );
};

export default Albums;
