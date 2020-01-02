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

	const StyledHeader = styled.div`
		width: 90%;

		h3 {
			color: red;
			font-size: 3.4rem;
		}

		a {
			font-size: 1.8rem;
		}

		display: flex;
		justify-content: center;
		width: 100%;
		justify-content: space-evenly;
	`;

	let token = localStorage.getItem('token');

	return (
		<div className="navbar-two-rows">
			<NavLink to="/" className="navbar-title">
				<StyledRole>CHOOSE YOUR OWN ADVENTURE</StyledRole>
			</NavLink>
			<div className="navbar-main">
				<StyledHeader>
					{/* <NavLink to="/about">About</NavLink> */}
					<NavLink to="/list">View Stories</NavLink>
					{token && <NavLink to="/dashboard">Dashboard</NavLink>}
					{!token && (
						<>
							<NavLink to="/signin">Sign In</NavLink>
							<NavLink to="/signup">Sign Up</NavLink>
						</>
					)}
				</StyledHeader>
			</div>
		</div>
	);
}
