
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './styled-components';

function Navigation() {

  return(
    <Nav>
      <ul className="navLinksContainer">
        <a href="#"><div id="nav-link">Home</div></a>
        <a href="#"><div id="nav-link">How It Works</div></a>
        <a href="#"><div id="nav-link">Reviews</div></a>
        <a href=""><div id="nav-link">Meet the Team</div></a>
        <Link to="/registration"><div id="nav-link">Sign Up</div></Link>
      </ul>
    </Nav>
  );
}

export default Navigation;