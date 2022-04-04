import React from 'react';
import errorImg from '../../assets/error.jpg'

const NotFound = () => {
    return (
        <div className='container pb-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-lg-6'>
                    <img className='img-fluid' src={errorImg} width={500} alt="" />
                </div>
                <div className='col-lg-6'>
                    <h1 className='text-primary fw-bold text-center'>404 Error</h1>
                    <h3 className='text-primary fw-bold text-center'>Page Not Found!</h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;