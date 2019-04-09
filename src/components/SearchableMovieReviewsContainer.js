import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'n70DREmKRtqhDWn6PbnnlL93ANAFc3ob';
const URL = searchTerm => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${searchTerm}`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: '',
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL(this.state.searchTerm))
    .then(r => r.json())
    .then(apiReviews => {
      this.setState({ reviews: apiReviews.results })
    }
  )}

  // componentDidMount() {
  //     fetch(`${URL}`).then(r => r.json()).then(reviews => this.setState({ reviews: reviews }, () => console.log(this.state)))
  // }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleSearch}/>
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
