
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavLinksContainer} from './styled-components';
import './styles.css';

function Navigation() {

  return(
    <Nav>

        <NavLinksContainer>
            <Link className="link">Home</Link>
            <Link className="link">Home</Link>
            <Link className="link">Home</Link>
            <Link className="link">Home</Link>
       </NavLinksContainer>
    </Nav>
  );
}

export default Navigation;