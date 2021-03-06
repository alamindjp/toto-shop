import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div >
            <div className='home-container'>
                <div className='content-container'>
                    <h1>YOUR NEXT LAPTOP</h1>
                    <h1><span>YOUR BEST LAPTOP</span></h1>
                    <p>We’re used to demanding the best quality from our TV screens, but often we don’t notice how poor our laptop displays are - and it’s a screen we look at a lot. Older computers often have low-resolution screens that can look blurry or make it more difficult to read text, particularly smaller letters. Switch to a new computer with a pin-sharp display, and you really notice the difference.</p>
                </div>
                <div className='image-container'><img src="photo.png" alt="" /></div>
            </div>
            <div className='reviews-card-component'>
                <h2>Customer Reviews</h2>
                <div className='card-container'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard
                            key={review.id}
                            reviews={review}
                        ></ReviewCard>)
                    }
                </div>
                <div className='reviews-card-btn'>
                    <Link to="/reviews" className='reviews-btn'>See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;