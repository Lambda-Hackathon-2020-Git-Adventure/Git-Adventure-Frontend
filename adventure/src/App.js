import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import ModifyDecision from './components/ModifyDecision';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StoryTree from './components/StoryTree';
import ViewDecision from './components/ViewDecision';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adventure Time!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar />
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/landing' component={Landing} />
      <Route path='/modifydecision' component={ModifyDecision} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/storytree' component={StoryTree} />
      <Route path='/viewdecision' component={ViewDecision} />
    </div>
  );
}

export default App;
