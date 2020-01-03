import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import { ctabutton } from './cta-button';
import styled from 'styled-components';

const Landing = () => {
	function photoSelect() {
		return Math.floor(Math.random() * 3);
	}

	const [photo, setPhoto] = useState(photoSelect());

	return (
		<div className='landing-page-container'>
			<h1>
				<Black>Welcome to</Black> CREATE YOUR OWN ADVENTURE<Black>...</Black>
			</h1>
			<div className='landing-page-top'>
				<img
					className='landing-page-image'
					src={
						photo === 1
							? './photos/cyoa1.jpg'
							: photo === 2
							? './photos/cyoa2.jpg'
							: './photos/cyoa3.jpg'
					}
				/>
				<div className='landing-page-top-text'>
					<div>
						<h2>
							Create custom stories and share <br />
							them with friends
						</h2>
						<p>
							Create Your Own Adventure allows you to create your own
							interactive stories and make choices to explore your worlds.
							Collaborate with friends to create unique and compelling stories
							full of daring deeds and treacherous encounters. Build rich plots
							to explore. Become a hero in your own story.
						</p>
						{/* <Link to='/signup'><img classname='cta-button' src='./photos/button.png' /><span>Get Started</span></Link>  */}
						<div className='cta-button'>
							<Link
								to={localStorage.getItem('token') ? '/dashboard' : '/signup'}>
								{ctabutton()}{' '}
							</Link>
							<Link
								to={localStorage.getItem('token') ? '/dashboard' : '/signup'}>
								<div className='cta-text'>
									Get
									<br /> Started
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<hr className='landing-page-hr' />
			<About />
		</div>
	);
};

export default Landing;
const Black = styled.span`
	color: black;
`;
