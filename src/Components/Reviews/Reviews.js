import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h1>This is Reviews: {reviews.length}</h1>
            <div className='reviews-card'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        reviews={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;