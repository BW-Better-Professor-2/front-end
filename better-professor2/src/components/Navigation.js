
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavLinksContainer} from './styled-components';
import './styles.css';

function Navigation() {

  return(
    <Nav>

        <NavLinksContainer>
            <Link className='link'>Dashboard</Link>
            <Link className="link">Student List List</Link>
            <Link className="link">Project List</Link>
            <Link className="link">My Reminders</Link>
            <Link className="link">Setings</Link>
            <Link className="link">Help</Link>
       </NavLinksContainer>
    </Nav>
  );
}

export default Navigation;