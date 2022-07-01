import './Navbar.css';
import React from 'react';



const Navbar = () => {
    return (
        <>
            <nav>

                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            Tenet Gym
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/feature">Feature</a>
                        <a href="/signin">Appointment</a>
                        <a href="/aboutus">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
