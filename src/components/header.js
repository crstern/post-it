import React from 'react';
import './header.css'

function Header({items}){
    return (
        <header>
            <h1>PostIT</h1>
            <div className="options">
                {items.map(item => 
                    <div>{item.option}</div>
                )}
            </div>
        </header>
    )
}

export default Header;
