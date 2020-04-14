import React from 'react';
import AuthState from './context/auth/AuthState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import NotFound from './components/layout/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Notes from './components/notes/Notes';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/notes" component={Notes} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
};

export default App;
