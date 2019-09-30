import React, { lazy, useState, useEffect } from "react";

const Header = lazy(() => import("./Header"));
const ShowCard = lazy(() => import("./ShowCard"));

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
    <>
      <Header handleFilter={handleFilter} showFilter />
      <article className="container content">
        {data && data.map(show => <ShowCard key={show.id} {...show} />)}
      </article>
    </>
  );
};

export default Landing;
