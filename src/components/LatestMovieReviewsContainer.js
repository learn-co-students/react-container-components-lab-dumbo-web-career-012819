import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FiuxIAmFNEL6hmDRBhqM8ojM1EaXKKc3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews:[]
  }

  componentDidMount(){
    fetch(URL )
    .then(response => response.json())
    .then(parsedResponse => {
      this.setState({
        reviews: parsedResponse.results
      })
    })
  }

  render(){
    return(
      <section className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </section>
    )
  }
}
