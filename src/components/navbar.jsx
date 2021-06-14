import React, { Component } from 'react';

const NavBar = ( { totalCounter } ) => {
    console.log('Navbar-render');  
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {totalCounter.filter( c=> c.value > 0).length}
                </span>
            </a>
        </nav>
     );

}

// class NavBar extends Component {
//     render() { 
//     }
// }
 
export default NavBar;

