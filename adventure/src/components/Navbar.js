import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {

    const StyledBottomBorder = styled.div`
    background-color: #f1bd19;
    height: 0.6rem;
    width: 100%;
    `;
	const StyledRole = styled.div`
		background-color: red;
		color: white;
		width: 50.5rem;
		height: 3.6rem;
		border-radius: 2.0rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.8rem;
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
        background-image : url('/photos/paper-texture-2.jpg');
        border-bottom: 1.6rem solid #5b88a4;
	`;

	const StyledNavbarMain = styled.div`
		display: flex;
		align-items: center;
		
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
				<StyledRole>CREATE YOUR OWN ADVENTURE!</StyledRole>
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
            <StyledBottomBorder></StyledBottomBorder>
		</StyledNavRows>
	);
}
