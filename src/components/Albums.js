import React, { useState, useEffect, lazy } from "react";

import { days, groupBy } from "../utils";

const Header = lazy(() => import("./Header"));

const Albums = ({ match }) => {
  const [state, setState] = useState({
    data: [],
    suggestions: [],
    showSuggestions: false
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
          ...state,
          suggestions: json.data,
          showSuggestions: true
        })
      );
  };

  const onChange = e => {
    const userInput = e.target.value;

    if (userInput.length === 0) {
      setState({
        ...state,
        suggestions: [],
        showSuggestions: false
      });
    } else {
      getData(userInput);
    }
  };

  const { data, showSuggestions, suggestions } = state;

  return (
    <>
      <Header
        handleFilter={onChange}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        showFilter
      />
      <div className="header content">
        {data &&
          data.map((group, i) => (
            <section className="group" key={`g${i}`}>
              <h3 className="day">{i < days.length ? days[i] : "Later"}</h3>
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
          <h5 className="review">{data.length} videos</h5>
          <span className="out">Updated just now</span>
        </section>
      </div>
    </>
  );
};

export default Albums;
