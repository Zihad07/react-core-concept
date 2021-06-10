import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounter.filter( c=> c.value > 0).length}
                    </span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;