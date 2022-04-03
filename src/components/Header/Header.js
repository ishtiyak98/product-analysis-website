import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <nav className='py-2 d-flex justify-content-center'>
            <CustomLink className='nav-link mx-1' to={"/"}>HOME</CustomLink>
            <CustomLink className='nav-link mx-1' to={"/reviews"}>REVIEWS</CustomLink>
            <CustomLink className='nav-link mx-1' to={"/dashboard"}>DASHBOARD</CustomLink>
            <CustomLink className='nav-link mx-1' to={"/blogs"}>BLOGS</CustomLink>
            <CustomLink className='nav-link mx-1' to={"/about"}>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;