import React, { lazy, useContext, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import { DataContext } from "../utils/context";

const Filters = lazy(() => import("../components/Filters"));
const Header = lazy(() => import("../components/Header"));
const ShowCard = lazy(() => import("../components/ShowCard"));

const Landing = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => dispatch({ type: "update", payload: json }));
  };

  const handleFilter = query => {
    if (query === "asc") {
      const result = state.data.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );

      dispatch({ type: "update", payload: result });
    } else if (query === "desc") {
      const result = state.data.sort((a, b) =>
        a.id < b.id ? 1 : b.id < a.id ? -1 : 0
      );

      dispatch({ type: "update", payload: result });
    } else {
      const result = state.data.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );

      dispatch({ type: "update", payload: result });
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Filters handleFilter={handleFilter} />

      <main className="flex container">
        {state.data.map(show => (
          <Link key={show.id} to={`/${show.id}`} className="item">
            <ShowCard title={show.title} />
          </Link>
        ))}
      </main>
    </Suspense>
  );
};

export default Landing;
