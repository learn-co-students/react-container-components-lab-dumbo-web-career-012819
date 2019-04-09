import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FiuxIAmFNEL6hmDRBhqM8ojM1EaXKKc3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'



export default class SearchableMovieReviewsContainer extends PureComponent {

  state = {
    reviews:[],
    searchTerm:''
  }

     // AssertionError: Fetch should have the base URL
     // 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?': expected
     // 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?&api-key=FiuxIAmFNEL6hmDRBhqM8ojM1EaXKKc3'
     // 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

  componentDidMount(){
    fetch(URL+ `&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(parsedResponse => {
      if(parsedResponse.length > 0){
        this.setState({
          reviews: parsedResponse.results
        })
      }
    })
  }

  search = (event) =>{
    event.preventDefault();

    if( this.state.searchTerm.length < 1){
      return 'No search'
    }

    console.log(URL + 'query=' + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
    const ok  = 'yes'
    fetch(URL + 'query=' + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
    .then(response => response.json())
    .then(parsedResponse => {
        this.setState({
          reviews: parsedResponse.results
        }, () => console.log(this.state.reviews))
    })
  }

  chnageHandle = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <section className="searchable-movie-reviews">
        <h1>Search</h1>
        <form onSubmit={this.search}>
          <input type="text" onChange={this.chnageHandle} placeholder="Search Here" />
          <input type="submit" value="Search!!!" />

        </form>
         <MovieReviews reviews={this.state.reviews} />
      </section>
    )
  }

}
