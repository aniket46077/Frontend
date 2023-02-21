import './style.css';
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

export default function Navbar() {
  return (
    <div>
      <section id="header">
        <div>
            <ul id="navbar">
                <img id="img15" src={Logo} alt="pic"  width="67" height="69" />
                <li><Link  to="/">Home</Link></li>
                <li><Link to="internship">Internships</Link></li>
                <li><Link to="signup">Signup</Link></li>
                <li><Link to="login">login</Link></li>
                <li><Link to="company">Company</Link></li>
                
            </ul>
        </div>
    </section>
    </div>
  )
}
