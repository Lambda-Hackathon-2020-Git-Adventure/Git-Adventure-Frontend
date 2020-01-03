import React, { useState } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

const StyledForm = styled.form`
	input {
		border: 5px solid #f43518;
		font-weight: 600;
		padding-left: 2px;
	}
`;

const StyledButton = styled.button`
	background-color: #5b88a4;
	color: white;
	width: 5.5rem;
	height: 3.6rem;
	border-radius: 2rem;
	border: none;
	align-items: center;
	font-size: 1.2rem;
	cursor: pointer;
`;

const StyledH1 = styled.p`
	color: #e63313;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
		1px 1px 0 #000;
	font-size: 40px;
`;

const SignIn = props => {
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
		axiosWithAuth()
			.post('endpoint needed for BE', user)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/dashboard');
				window.location.reload();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<StyledH1>SIGN IN!</StyledH1>
			<StyledForm onSubmit={handleSubmit}>
				{/* <form onSubmit={handleSubmit}> */}
				{/* <label htmlFor='username'> UserName </label> */}
				<br />
				<input
					name="username"
					value={user.username}
					onChange={handleChange}
					id="email"
					placeholder="UserName"
				/>
				<br />
				{/* <label htmlFor='password'> Password</label> */}
				<br />
				<input
					name="password"
					value={user.password}
					onChange={handleChange}
					id="password"
					placeholder="Password"
				/>
			</StyledForm>
			{/* </form> */}
			<br />
			<StyledButton>Sign In</StyledButton>
			{/* <button type="submit">Sign In</button> */}
		</div>
	);
};

export default SignIn;
