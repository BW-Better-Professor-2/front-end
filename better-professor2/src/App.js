import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/Signup';
import './App.css';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import ProjectList from './components/ProjectList';
import ReminderList from './components/ReminderList';
import Projects from './utils/Projects';



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

        <Header />
        <Navigation />

        <Dashboard />

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/studentlist' component={StudentList}/>
          <Route path='/studentlist/:id' render={()=> <Projects/>}/>
          <Route path='/projectlist' component={ProjectList}/>
          <Route path='/reminderlist' component={ReminderList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;