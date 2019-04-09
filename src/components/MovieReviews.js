// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

const movieList = () => {
    return props.reviews.map(review => {
      return(
    <li key={review.display_title} className="review">
      <img src={review.multimedia !== null ? review.multimedia.src : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"} alt="" />
      <a href={review.link.url} > {review.display_title}</a>
    </li>
  )
  })
}

  return (
    <ul className="review-list">
      {movieList()}
    </ul>
  )
}


export default MovieReviews
