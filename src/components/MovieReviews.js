// Code MovieReviews Here
import React from 'react';

const movieReviews = (props) => {

  const createMovieCards = props.reviews.map(movie => {
    return (
      <div key={movie.id} className="review">
        <h3>{movie["display_title"]}</h3>
        {movie.multimedia === null ? null : <img alt={movie["display_title"]} src={movie.multimedia.src}/>}
      </div>
    )
  })

  return (
    <div className="review-list">
      {createMovieCards}
    </div>
  )
}
export default movieReviews
