import React, { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';
export default function SignUp(props) {
	const StyledForm2 = styled.div`
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

	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		console.log(user);
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
		axios
			.post('BE url for signup', user)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/signin');
				window.location.reload();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<StyledH1>SIGN UP!</StyledH1>
			{/* <h1>SIGNUP PAGE</h1> */}
			{/* <StyledForm2 > */}
        <form onSubmit={handleSubmit}>
				{/* <label forhmtl='userame'>Create a Username</label> */}
				<br />
				<input
					name="username"
					value={user.username}
					onChange={handleChange}
					id="email"
          placeholder="Username"
          className="sign-up-input"
				/>
				<br />
				{/* <label forhtml='password'>Create a Password</label> */}
				<br />
				<input
					name="password"
					value={user.password}
					onChange={handleChange}
					id="password"
          placeholder="Password"
          className="sign-up-input"
				/>
				<br />
				<br />
				<StyledButton onClick={handleSubmit}> Sign Up </StyledButton>
        </form>
			{/* </StyledForm2> */}
		</div>
	);
}
