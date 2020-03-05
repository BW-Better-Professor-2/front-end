
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavLinksContainer} from './styled-components';

import './styles.css';

function Navigation() {

  return(
    <Nav>

        <NavLinksContainer>
            <Link className='link'>Dashboard</Link>
            <Link className="link" to={`/studentlist/`}>Student List</Link>
            <Link className="link" to={`/projectlist/`}>Project List</Link>
            <Link className="link" to={`/reminderlist/`}>My Reminders</Link>
            <Link className="link">Settings</Link>
            <Link className="link">Help</Link>
       </NavLinksContainer>
    </Nav>
  );
}

export default Navigation;