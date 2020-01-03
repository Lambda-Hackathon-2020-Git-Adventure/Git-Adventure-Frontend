import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

import ModifyDecisionImage from './ModifyDecisionImage';
import ModifyDecisionVideo from './ModifyDecisionVideo';

export default function ModifyDecision({ mode, nodeId }) {
	const [decision, setDecision] = useState({
		name: '',
		text: '',
		image: '',
		video: '',
	});

	useEffect(() => {
		setDecision({ ...decision });
	}, []);

	useEffect(() => {
		if (mode === 'edit') {
			// axios
		}
	}, []);

	const deleteNode = () => {
		console.log('DELETED YO');
	};

	const handleDelete = () => {
		let answer = window.confirm('Are you sure you want to delete this node?');
		if (answer) {
			deleteNode();
		}
	};

	const handleChange = e => {
		setDecision({ ...decision, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('QUAIL.');
		if (mode === 'edit') {
			// axios
		} else if (mode === 'create') {
			// axios
		}
	};

	return (
		<StyledWrapper>
			<StyledForm onSubmit={handleSubmit}>
				<h2>{mode === 'edit' ? 'Modify' : 'Create'} a decision</h2>
				<label htmlFor='decision-name'>Name</label>
				<input
					id='decision-name'
					name='name'
					type='text'
					placeholder='Write the name of the decision here!'
					value={decision.name}
					onChange={handleChange}
				/>
				<label htmlFor='decision-text'>Text</label>
				<textarea
					id='decision-text'
					name='text'
					// type='textarea'
					placeholder='Write the text of the decision here!'
					value={decision.text}
					onChange={handleChange}
				/>
				<ModifyDecisionImage />
				<ModifyDecisionVideo />
				<button type='button' onClick={() => handleDelete()}>
					Delete Node
				</button>
				<button type='submit'>Submit</button>
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
	border: 1px solid silver;
	border-radius: 0.5rem;

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
