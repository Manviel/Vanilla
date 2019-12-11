import React, { lazy, useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

const AutoComplete = lazy(() => import("../components/AutoComplete"));
const Header = lazy(() => import("../components/Header"));
const ShowCard = lazy(() => import("../components/ShowCard"));

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json));
  };

  const handleFilter = e => {
    const query = e.target.value;

    if (query.length === 0) {
      getData();
    } else {
      const result = data.filter(i => i.title.includes(query));

      setData(result);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <AutoComplete handleFilter={handleFilter} />

      <main className="flex container">
        {data.map(show => (
          <Link key={show.id} to={`/${show.id}`} className="item">
            <ShowCard title={show.title} />
          </Link>
        ))}
      </main>
    </Suspense>
  );
};

export default Landing;
