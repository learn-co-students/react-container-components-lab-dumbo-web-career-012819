import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'n70DREmKRtqhDWn6PbnnlL93ANAFc3ob';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
      fetch(`${URL}`)
      .then(r => r.json())
      .then(reviewsList => {
        this.setState({ reviews: reviewsList.results })
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <h1> Latest Movie Reviews </h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer
