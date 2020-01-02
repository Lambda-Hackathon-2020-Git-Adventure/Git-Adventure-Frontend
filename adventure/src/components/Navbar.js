import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
	const StyledRole = styled.div`
		background-color: red;
		color: white;
		width: 36.5rem;
		height: 2.4rem;
		border-radius: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.8rem;
	`;

	let token = localStorage.getItem('token');

	return (
		<div className="navbar-two-rows">
			<NavLink to="/" className="navbar-title">
				<StyledRole>CHOOSE YOUR OWN ADVENTURE</StyledRole>
			</NavLink>
			<div className="navbar-main">
				<div className="navbar-sign-in-up">
					<NavLink to="/about">The Team</NavLink>
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
		</div>
	);
}
