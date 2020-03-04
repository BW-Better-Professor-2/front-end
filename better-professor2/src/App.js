import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/Signup';
// import Login2 from './components/Login2';
import './App.css';
// import Registration from './components/Registration';


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
        {/* <ul>
          <li>
            <Link to='/registration '>Registration</Link>
          </li>
        </ul>         */}
        {/* <ul>
          <li>
            <Link to='/login2 '>Login2</Link>
          </li>
        </ul> */}
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} /> 
          {/* <Route path='/registration' component={Registration} /> 
          <Route path='/login2' component={Login2} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;