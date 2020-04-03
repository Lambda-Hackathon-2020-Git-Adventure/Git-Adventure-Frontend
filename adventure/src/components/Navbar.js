import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar({ token, setToken }) {
	// const test = {
	// 	story: {
	// 		id: 1,
	// 		creator: 'janmei',
	// 		title: 'The Lost Mine of Phandelver',
	// 		description:
	// 			"In the city of Neverwinter, a dwarf named Gundren Rockseeker asked you to bring a wagon load of provisions to the rough-and-tumble settlement of Phandalin, a couple of days' travel southeast of the city. Gundren was clearly excited and more than a little secretive about his reasons for the trip, saying only that he and his brothers had found something big, and that he'd pay you ten gold pieces each for escorting his supplies safely to Barthen's Provisions, a trading post in Phandalin. He then set out ahead of you on horse, along with a warrior escort named Sildar Haliwinter, claiming he needed to arrive early to take care of business.",
	// 		image: '',
	// 		collaborators: [{ username: 'quail' }],
	// 		start: {
	// 			name: 'Intro',
	// 			text:
	// 				"You've been on the Triboar Trail for about half a day. As you come around a bend, you spot two dead horses sprawled about fifty feet ahead of you, blocking the path. Each has several black-feathered arrows sticking out of it. The woods press close to the right side of the trail here, with a open field on the left side.",
	// 			author_id: 1,
	// 			video: '',
	// 			image: '',
	// 		},
	// 	},
	// };

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
		border-radius: 2rem;
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
		background-image: url('/photos/paper-texture-2.jpg');
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

	const handleLogOut = () => {
		localStorage.removeItem('token');
		setToken('');
	};

	return (
		<StyledNavRows>
			<NavLink to='/'>
				<StyledRole>CREATE YOUR OWN ADVENTURE!</StyledRole>
			</NavLink>
			<StyledNavbarMain>
				<StyledHeader>
					<NavLink to='/list' className='navbar-links-hovered'>
						View Stories
					</NavLink>
					{token && (
						<NavLink
							className='navbar-links-hovered'
							onClick={handleLogOut}
							to='/'>
							Sign Out
						</NavLink>
					)}
					{token && (
						<NavLink className='navbar-links-hovered' to='/dashboard'>
							Dashboard
						</NavLink>
					)}
					{!token && (
						<>
							<NavLink to='/signin' className='navbar-links-hovered'>
								Sign In
							</NavLink>
							<NavLink to='/signup' className='navbar-links-hovered'>
								Sign Up
							</NavLink>
						</>
					)}
				</StyledHeader>
			</StyledNavbarMain>
			<StyledBottomBorder></StyledBottomBorder>
		</StyledNavRows>
	);
}
