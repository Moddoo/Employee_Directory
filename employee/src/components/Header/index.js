import React from 'react';
import './style.css';

function Header() {
    return (
        <div className= 'jumbotron bg-mute border-dark' style={{border: '2px solid black'}}>
            <h1 className= 'text-center text-primary'>Welcome</h1>
        </div>
    )
}

export default Header;