import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews();
    
    return (
        <div className='container pb-5'>
            <h2 className='text-center text-success fw-bold mt-3 mb-5 '>Our Customers Feedback</h2>
            <div className='row gy-5 gx-lg-5'>
                {
                    reviews.map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;