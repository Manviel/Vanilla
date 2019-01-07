import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/comments/${
        this.props.match.params.id
      }`
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    const { data } = this.state;

    return (
      <article className="container indent">
        <div className="details indent">
          <h3>{data && data.name}</h3>
          <p>{data && data.email}</p>
          <p>{data && data.body}</p>
        </div>
      </article>
    );
  }
}

export default Details;
