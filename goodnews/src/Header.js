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
            {/* <div className="header__nav">
                <div className="header__option">
                    <button>Sign In</button>
                </div>

                <div className="header__option">
                    <button>Sign Up</button>
                </div>

            </div> */}
        </div >
    )
}

export default Header
