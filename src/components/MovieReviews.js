import React from 'react';

 const MovieReviews = (props) => {

     let allReviews = props.reviews;
     allReviews = allReviews.map(review =>
       <div className="review">
         <h1>Title: {review.display_title}</h1>
         <h1>Critics Pick: {review.critics_pick}</h1>
         <h2>Byline: {review.display_title}</h2>
         <h3>Opening Date: {review.display_title}</h3>
         <h3>Summary:</h3>
         <p>{review.summary_short}</p>
       </div>
     )




  return(
    <div className="review-list">
      {allReviews}
    </div>

  )
}
export default MovieReviews
