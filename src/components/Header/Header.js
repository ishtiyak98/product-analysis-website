import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <nav className='container py-3 d-lg-flex justify-content-center'>
            <CustomLink className='nav-link mx-2 mb-2' to={"/"}>HOME</CustomLink>
            <CustomLink className='nav-link mx-2 mb-2' to={"/reviews"}>REVIEWS</CustomLink>
            <CustomLink className='nav-link mx-2 mb-2' to={"/dashboard"}>DASHBOARD</CustomLink>
            <CustomLink className='nav-link mx-2 mb-2' to={"/blogs"}>BLOGS</CustomLink>
            <CustomLink className='nav-link mx-2 mb-2' to={"/about"}>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;