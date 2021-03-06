import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled.form`
	input {
		border: 5px solid #f43518;
		font-weight: 600;
		padding-left: 2px;
		:focus {
			outline: 0;
		}
	}
`;

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

const SignIn = props => {
	// console.log(props);
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
		// axiosWithAuth()
		axios
			.post('https://cyahack.herokuapp.com/api/auth/login', user)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				props.setToken(res.data.token);
				props.history.push('/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<SignInWrapper>
			<StyledH1>SIGN IN!</StyledH1>
			<StyledForm onSubmit={handleSubmit}>
				<br />
				<input
					name='username'
					type='text'
					value={user.username}
					onChange={handleChange}
					id='email'
					placeholder='Username'
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
				/>
				<br /> <br />
				<StyledButton onClick={handleSubmit}>Sign In</StyledButton>
			</StyledForm>
			<br />
		</SignInWrapper>
	);
};

export default SignIn;

const SignInWrapper = styled.div`
	input {
		padding: 1rem;
	}
`;
