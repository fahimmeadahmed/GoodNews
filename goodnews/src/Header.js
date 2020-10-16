import React from 'react'
import './Header.css'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function Header() {
    return (
        <div>
            <div className='header'>
                <h2>GOOD NEWS TODAY</h2>
                <div> <SentimentVerySatisfiedIcon className="header__logo" /></div>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    Sign In
                </div>

                <div className="header__option">
                    Sign Up
                </div>

            </div>
        </div >
    )
}

export default Header
