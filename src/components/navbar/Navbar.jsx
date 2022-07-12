import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'

import { useSelector } from 'react-redux'


const Navbar = () => {

    // console.log(useSelector((state) => console.log(state)))

    return (
        <nav className='nav-container'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='website-name'>
                Redditophilia
            </div>
        </nav>
    )
}

export default Navbar