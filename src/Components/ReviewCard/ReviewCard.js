import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ reviews }) => {
    const { name, body, image, email } = reviews;
    return (
        <div className="review-card">
            <div className='card-title'>
                <img src={image} alt="" />
                <div className='name-container'>
                    <h3>{name}</h3>
                    <small>Ratting:  out of 5</small>
                </div>
            </div>
            <span>comment: </span><p>{body}</p>
        </div>
    );
};

export default ReviewCard;