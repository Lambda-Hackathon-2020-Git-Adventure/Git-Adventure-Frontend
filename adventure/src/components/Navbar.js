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
		display: flex;
		justify-content: center;
		width: 100%;
		justify-content: space-evenly;
		a {
			font-size: 1.8rem;
		}
	`;

	const StyledNavRows = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
        padding-top: 20px;
		a {
			text-decoration: none;
        }
        // background-image : url(bg2.jpg);
	`;

	const StyledNavbarMain = styled.div`
		display: flex;
		align-items: center;
		border-bottom: 1px solid black;
		height: 50px;
        width: 100%;
		a {
			color: black;
		}
	`;

	let token = localStorage.getItem('token');

	return (
		<StyledNavRows>
			<NavLink to="/">
				<StyledRole>CREATE YOUR OWN ADVENTURE</StyledRole>
			</NavLink>
			<StyledNavbarMain>
				<StyledHeader>
					<NavLink to="/list">View Stories</NavLink>
					{token && <NavLink to="/dashboard">Dashboard</NavLink>}
					{!token && (
						<>
							<NavLink to="/signin">Sign In</NavLink>
							<NavLink to="/signup">Sign Up</NavLink>
						</>
					)}
				</StyledHeader>
			</StyledNavbarMain>
		</StyledNavRows>
	);
}
