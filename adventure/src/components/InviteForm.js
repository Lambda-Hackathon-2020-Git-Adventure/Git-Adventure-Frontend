import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './authentication/axiosWithAuth';

export default function InviteForm({ closeModal, id }) {
	// const [invites, setInvites] = useState({
	// 	list: [],
	// });

	const [invites, setInvites] = useState('');

	const handleChange = e => {
		let temp = e.target.value;
		// console.log(temp);
		// let newArray = temp.split(',');
		// setInvites(newArray);
		setInvites(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// return invites.map(a => {
		// 	axiosWithAuth()
		// 		.post(`/stories/id/collaborator`, a.trim())
		// 		.then(res => console.log(res))
		// 		.catch(err => console.log(a.trim(), err));
		// });
		console.log(invites);
		axiosWithAuth()
			.post(`/stories/${id}/collaborator`, { username: invites })
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	return (
		<ModalBG>
			<CollabForm onSubmit={handleSubmit}>
				<CloseBtn onClick={closeModal}>x</CloseBtn>
				<label htmlFor='invites'>
					{/* Enter usernames to invite, separated by commas. */}
					Enter a user to invite!
				</label>
				<br />
				<input
					type='text'
					name='list'
					id='invites'
					onChange={handleChange}></input>
				<button>Invite to collaborate</button>
			</CollabForm>
		</ModalBG>
	);
}

const ModalBG = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CollabForm = styled.form`
	margin: 0 auto;
	border: 3px hotpinksolid;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 0.25rem;
	width: 500px;
	display: flex;
	flex-flow: column;
	padding: 3rem;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
	position: relative;

	input {
		padding: 1.5rem;
	}
	textarea {
		padding: 1.5rem;
	}
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 20px;
	height: 20px;
	cursor: pointer;
`;
