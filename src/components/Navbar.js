import React from 'react';
import logo from '../images/logo.svg';
import avator from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';




export default function Navbar(){
    return(
       <div className="container">
        <nav className="navbar">
          <div className="logo-top">
           <img src={ logo } alt="logo" className="logo" />
         </div>
           <ul className="nav-items">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
           </ul>

           <ul className="cart">
              <img src={ cart } alt="logo" />
              <img src={ avator } alt="logo" />
           </ul>
        </nav>
         <div>
             <hr />
         </div>
        </div>
    )
}

 