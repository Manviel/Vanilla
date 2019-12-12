import React, { useState, useEffect } from "react";

import Filters from "../components/Filters";
import ShowCard from "../components/ShowCard";
import Header from "../components/Header";

import { groupBy } from "../utils";

import "../styles/albums.css";

const Albums = ({ match }) => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(0);

  const loadNewData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}/albums`
    )
      .then(response => response.json())
      .then(json => {
        const result = groupBy(json, "userId");

        setState([...state, ...result[page]]);
      });
  };

  useEffect(() => {
    loadNewData();
  }, []);

  const paginatePage = () => {
    if (page < 10) {
      setPage(page + 1);

      loadNewData();
    }
  };

  return (
    <>
      <Header />
      <Filters />

      <div className="flex col">
        <article className="flex container">
          {state.map(a => (
            <ShowCard key={a.id} title={a.title} />
          ))}
        </article>

        <button className="paginate case" onClick={paginatePage}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Albums;
