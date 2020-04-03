import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

import ModifyDecisionImage from './ModifyDecisionImage';
// import ModifyDecisionVideo from './ModifyDecisionVideo';

export default function ModifyDecision({
	mode,
	nodeId,
	toggleNodeModal,
	first,
	story_id,
}) {
	// const [decision, setDecision] = useState();

	const [updatedDec, setUpdatedDec] = useState({});

	useEffect(() => {
		if (first === true) {
			setUpdatedDec({ ...updatedDec, first: true });
		} else {
			setUpdatedDec({ ...updatedDec, first: false });
		}
	}, []);

	useEffect(() => {
		if (mode === 'edit') {
			axiosWithAuth()
				.get(`https://cyahack.herokuapp.com/api/nodes/${nodeId}`)
				.then(res => {
					setUpdatedDec(res.data.specifiedNode);
				});
		} else {
			// } else if (mode === 'create'){
			setUpdatedDec({ ...updatedDec, story_id: story_id });
		}
	}, []);

	const deleteNode = () => {
		axiosWithAuth()
			.delete(`https://cyahack.herokuapp.com/api/nodes/${nodeId}`)
			.then(res => {
				console.log(res);
				toggleNodeModal();
				window.location.reload();
			})
			.catch(err => console.log(err));
	};

	const handleDelete = () => {
		let answer = window.confirm('Are you sure you want to delete this node?');
		if (answer) {
			deleteNode();
		}
	};

	const handleChange = e => {
		setUpdatedDec({ ...updatedDec, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (mode === 'edit') {
			axiosWithAuth()
				.put(`https://cyahack.herokuapp.com/api/nodes/${nodeId}`, {
					node: updatedDec,
				})
				.then(res => {
					toggleNodeModal();
					window.location.reload();
				})
				.catch(err => console.log(err));
		} else if (first === true) {
			axiosWithAuth()
				.post(`https://cyahack.herokuapp.com/api/nodes/`, {
					node: { ...updatedDec, first: true, video: '', image: '' },
				})
				.then(res => {
					toggleNodeModal();
					window.location.reload();
				})
				.catch(err => console.log(err));
		} else if (mode === 'create') {
			axiosWithAuth()
				.post(
					`https://cyahack.herokuapp.com/api/nodes/${nodeId}/createandconnect
			`,
					{ node: updatedDec },
				)
				.then(res => {
					toggleNodeModal();
					window.location.reload();
				})
				.catch(err => console.log(err));
		}
	};

	return (
		<StyledWrapper>
			<StyledForm onSubmit={handleSubmit}>
				{!first && <h2>{mode === 'edit' ? 'Modify' : 'Create'} a decision</h2>}
				{first && <h2>Begin Story</h2>}
				<label htmlFor='decision-name'>Name</label>
				<input
					id='decision-name'
					name='name'
					type='text'
					placeholder={
						updatedDec && mode === 'edit'
							? updatedDec.name
							: first
							? 'Write the title of your first chapter'
							: 'Write the name of the decision here!'
					}
					value={updatedDec && updatedDec.name}
					onChange={handleChange}
				/>
				<label htmlFor='decision-text'>Text</label>
				<textarea
					id='decision-text'
					name='text'
					// type='textarea'
					placeholder={
						updatedDec && mode === 'edit'
							? updatedDec.text
							: !first
							? 'Write the text of the decision here!'
							: 'Start your story here'
					}
					value={updatedDec && updatedDec.text}
					onChange={handleChange}
				/>
				<ModifyDecisionImage />
				{/* <ModifyDecisionVideo /> */}
				<div className='button-container-modify'>
					<button type='button' onClick={() => handleDelete()}>
						Delete Node
					</button>
					<button type='submit'>Submit</button>
				</div>
			</StyledForm>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	margin-top: 2rem;

	h2 {
		font-size: 3.6rem;
	}
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 96%;
	max-width: 90rem;
	margin: 2rem auto;
	padding: 2rem 2%;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 0.25rem;

	h2 {
		align-self: center;
		margin-bottom: 2.4rem;
	}

	label {
		font-size: 1.8rem;
	}

	input {
		width: 100%;
		margin-bottom: 2rem;
		padding: 1rem 1%;
		font-family: sans-serif;
	}

	textarea {
		width: 100%;
		margin-bottom: 2rem;
		padding: 1rem 1%;
		height: 20rem;
		font-family: sans-serif;
	}

	button {
		align-self: center;
		width: 10rem;
		height: 2.4rem;
		border-radius: 1.2rem;
		border: none;
		background-color: red;
		color: white;
		font-family: inherit;
		cursor: pointer;

		&:hover {
			background-color: darkred;
		}
	}
`;
