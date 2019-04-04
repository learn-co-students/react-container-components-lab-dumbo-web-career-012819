import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value}, () => console.log(this.state.searchTerm))
  }

  handleSubmit = (e) => {
    const queryParam = this.state.searchTerm
    e.preventDefault();
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${queryParam}&api-key=gVjjAC927JCr8IQUqA0oxbwkKl6ORehV`)
      .then(res => res.json())
      .then(searchJSON => this.setState({reviews: searchJSON.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input name="search" onChange={this.handleChange}></input>
          <input type="submit" value="Search"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
