import React from 'react';
import {NavLink} from 'react-router-dom'

export default function NavBar() {
	return (
		<div className="navbar-main">
            <NavLink to ="/" className="navbar-title">Adventure</NavLink>
			{/* <p className="navbar-title">Adventure</p> */}
			<div className="navbar-sign-in-up">
                <NavLink to="/">View Stories</NavLink>
                <NavLink to="/">Sign In</NavLink>
                <NavLink to="/">Sign Up</NavLink>
                <NavLink to="/">Dashboard</NavLink>
				{/* <p>View Stories</p>
                <p>Sign in</p>
				<p>Sign up</p>
                <p>Dashboard</p> */}
			</div>
		</div>
	);
}
