import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function SignUp(props) {
	const StyledButton = styled.button`
		background-color: #5b88a4;
		color: white;
		width: 10rem;
		height: 3.6rem;
		border-radius: 2rem;
		border: none;
		align-items: center;
		font-size: 1.8rem;
		cursor: pointer;
		:focus {
			outline: 0;
		}
		font-family: inherit;
	`;

	const StyledH1 = styled.p`
		color: #e63313;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
		font-size: 40px;
		cursor: default;
		margin-top: 2.4rem;
	`;

	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('https://cyahack.herokuapp.com/api/auth/signup', user)
			.then(res => {
				console.log(res);
				props.history.push('/signin');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<SignUpWrapper>
			<StyledH1>SIGN UP!</StyledH1>
			<form onSubmit={handleSubmit}>
				<br />
				<input
					name='username'
					type='text'
					value={user.username}
					onChange={handleChange}
					id='email'
					placeholder='Username'
					className='sign-up-input'
				/>
				<br />
				<br />
				<input
					name='password'
					type='password'
					value={user.password}
					onChange={handleChange}
					id='password'
					placeholder='Password'
					className='sign-up-input'
				/>
				<br />
				<br />
				<StyledButton onClick={handleSubmit}> Sign Up </StyledButton>
			</form>
		</SignUpWrapper>
	);
}

const SignUpWrapper = styled.div`
	input {
		padding: 1rem;
	}
`;
