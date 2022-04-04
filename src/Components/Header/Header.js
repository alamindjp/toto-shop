import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <Link to='/'><div className='logo'><h3>TOTO</h3><h4>SHOP</h4></div></Link>
            <div className='custom-link'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;