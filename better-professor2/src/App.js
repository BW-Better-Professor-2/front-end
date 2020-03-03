import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/signUp'>SignUp</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute  />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;