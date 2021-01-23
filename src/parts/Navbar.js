// React
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Materialize
import M from 'materialize-css'

const Navbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems, {
            edge:"right"
        })
    })
    return(
        <div className="navbar-fixed">
            <nav>
                <div class="nav-wrapper teal">
                    <div className="container">
                    <a href="#logo" class="brand-logo">Adi Wiyata</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Beranda</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/kalender">Kalender</Link></li>
                        <li><Link to="/album">Album</Link></li>
                    </ul>
                    <a href="#menu" data-target="slide-out" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                    </div>
                    <ul id="slide-out" class="sidenav">
                        <li><Link to="/" class="waves-effect">Beranda</Link></li>
                        <li><Link to="/gallery" class="waves-effect">Gallery</Link></li>
                        <li><Link to="/kalender" class="waves-effect">Kalender</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar