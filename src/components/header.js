import React from 'react';
import './header.css'

function Header({items}){
    return (
        <header className="navbar navbar-light">
            <nav className="navbar navbar-light">
                <span class="navbar-brand mb-0 h1" style={{background : "transparent"}}>PostIT</span>
            </nav>
            <div className="nav justify-content-end">
                {items.map(item => 
                    <a class="nav-link active" href="#">{item.option}</a> 
                )}
            </div>
        </header>
    )
}

export default Header;
