import React, { useState } from 'react'
import './Header.css'
import '../Responsive.css'
import { Link } from 'react-router-dom';
import whatsappLogo from '../whatsappLogo.png'
import phoneLogo from '../phoneLogo.png'

export default function Header() {
    const [height, setHeight] = useState(55);
    const [display, setDisplay] = useState('');
    function openHamBurger() {
        if (height !== 300) {
            setHeight(300);
            setDisplay('block');

        }
        else {
            setHeight(55);
            setDisplay('none');
        }

    }

    return (
        <div>
            <header>
                <div id="headTop">
                    <ul className="topInfo">
                        <div id="contact">
                            <div id="whatappContact">
                            <img src={whatsappLogo} alt="" />
                            <li>+91-800-3643373</li>
                            </div>
                            <div id="phoneContact">
                            <img src={phoneLogo} alt="" />
                            <li>8003443333</li>
                            </div> 
                        </div>
                        <li><Link to="/apply">Apply Online</Link></li>
                    </ul>
                </div>

                <nav className="navbar" style={{ height: `${height}px` }}>
                    <div className="logo">YMS Classes</div>
                    <ul className="navList">
                        <li><Link style={{ display: `${display}` }} to="/">Home</Link></li>
                        <li><Link style={{ display: `${display}` }} to="/about">About Us</Link></li>
                        <li><Link style={{ display: `${display}` }} to="/courses">Courses</Link></li>
                        <li><Link style={{ display: `${display}` }} to="/blogs">Blog</Link></li>
                        <li><Link style={{ display: `${display}` }} to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="logAndSignUp">
                        <Link to="/login"><button style={{ display: `${display}` }} className="btn">Log in</button></Link>
                        <Link to="/register"><button style={{ display: `${display}` }} className="btn">Sign Up</button></Link>
                    </div>

                    <div className="burger" onClick={openHamBurger}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
