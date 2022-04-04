import React from 'react';
import useReviews from '../../Hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews]= useReviews()
    for(const review of reviews){
        console.log(review)
    }
    console.log(reviews)
    return (
        <div>
            <h1>This is Reviews: {reviews.length}</h1>
        </div>
    );
};

export default Reviews;