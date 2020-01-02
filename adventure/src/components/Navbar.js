import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	let token = localStorage.getItem('token');

	return (
		<div className="navbar-main">
			<NavLink to="/" className="navbar-title">
				Adventure
			</NavLink>
			<div className="navbar-sign-in-up">
				<NavLink to="/list">View Stories</NavLink>
				{token && <NavLink to="/dashboard">Dashboard</NavLink>}
				{!token && (
					<>
						<NavLink to="/signin">Sign In</NavLink>
						<NavLink to="/signup">Sign Up</NavLink>
					</>
				)}
			</div>
		</div>
	);
}
