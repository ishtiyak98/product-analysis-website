import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReviews();
    console.log(reviews);
    return (
        <div className='container pb-5'>
            <h2 className='text-center text-success mt-3 mb-5 '>Our Customers Thought</h2>
            <div className='row g-4'>
                {
                    reviews.map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;