import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './GlobalStyle';

import About from './components/About';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import ModifyDecision from './components/ModifyDecision';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StoryTree from './components/StoryTree';
import ViewDecision from './components/ViewDecision';
import StoriesList from './components/StoriesList';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Navbar />
			<Route exact path='/' component={Landing} />
			<Route path='/about' component={About} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/list' component={StoriesList} />
			<Route path='/modifydecision' component={ModifyDecision} />
			<Route path='/signin' component={SignIn} />
			<Route path='/signup' component={SignUp} />
			<Route path='/storytree' component={StoryTree} />
			<Route path='/node/:id' component={ViewDecision} />
		</div>
	);
}

export default App;
