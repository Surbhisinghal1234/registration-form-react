import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <h1><Link to="/">RegisterForm</Link></h1>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        
    
        </ul>
      </header>
    );
}

export default Header;
