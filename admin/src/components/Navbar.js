import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='main-nav'>
                <div className='nav-logo'></div>

                <div className='nav-menu'>
                    <ul>
                        <li className='home'>
                            <Link to="/home">Registraion</Link>
                        </li>

                        <li className='home'>
                            <Link to="/reg-appoin">Appointemnt</Link>
                        </li>

                        <li className='home'>
                            <Link to="/contact">Contact</Link>
                        </li>
                     
                        <li className='home'>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar
