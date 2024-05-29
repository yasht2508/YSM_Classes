import React from 'react'
import baloon from '../ballon.jpeg'
import whatsappLogo2 from '../whatsappLogo2.png'
import instagram from '../Instagram.png'
import facebook from '../Facebook.png'
import './LoginForm.css'
import '../Responsive.css'
import { Link } from 'react-router-dom';
export default function LoginForm({login,formHeading1,formHeading2,loginButton,downText1,downText2}) {
    return (
        <>
            <div id="outerContainer">
                <div id="container">
                    <div id="FormCont">
                        <form action="" id="form">
                            <div id="upper_text">
                                <h1 id="loginText">{formHeading1}</h1>
                                <span className="lightColor spans ">{formHeading2}</span>
                            </div>
                            <input type="text" placeholder="User Name" />
                            <input type="password" placeholder="Password" />
                            <button id="loginBtn">{loginButton}</button>
                            <span className="spans lightColor">Or connect with social media</span>
                            <div id="socialMediaLogos"><img src={whatsappLogo2} alt="" /> <img src={instagram} alt="" /> <img src={facebook} alt="" /> </div>
                            <span className="spans lightColor">
                            {downText1}<Link to={login==='true' ? '/register' : '/login'}>{downText2}</Link>
                            </span>
                        </form>
                    </div>
                    <div id="imgcont">
                        <img src={baloon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
