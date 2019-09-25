import React, { useState, useEffect } from "react";

const groupBy = (arr, prop) => {
  const map = new Map(Array.from(arr, obj => [obj[prop], []]));

  arr.forEach(obj => map.get(obj[prop]).push(obj));

  return Array.from(map.values());
};

const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

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
    <div className="header">
      {data &&
        data.map((group, i) => (
          <section className="group" key={`g${i}`}>
            <h3 className="day">{i < 7 ? Days[i] : "Later"}</h3>
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
  );
};

export default Albums;
