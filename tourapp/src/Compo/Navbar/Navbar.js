import React from 'react';
import './Navbar.scss'; 
import logo from '../../setup-files-react-city-tours-project-master/logo.png';
const Navbar = () => {
    return (
      <div>
        <nav className="nav-bar">
          <img src={logo} alt="LOGO" width="60"/>
          <ul className="nav-links">
              <li><a href="#Home" className="nav-link">Home</a></li>
              <li><a href="#Tours" className="nav-link active">Tours</a></li>
              <li><a href="#About" className="nav-link">About</a></li>
          </ul>
        </nav>
      </div>
        
      );
}
 
export default Navbar;