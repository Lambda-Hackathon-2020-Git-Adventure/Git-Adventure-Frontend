import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ModifyDecisionImage from './ModifyDecisionImage';
import ModifyDecisionVideo from './ModifyDecisionVideo';

export default function ModifyDecision({ mode, story_id }) {
	const [decision, setDecision] = useState({
		name: '',
		text: '',
		story_id: '',
		author: '',
		image: '',
		video: '',
	});

	useEffect(() => {
		setDecision({ ...decision, author: localStorage.getItem('subject') });
		setDecision({ ...decision, story_id });
	}, []);

	useEffect(() => {
		if (mode === 'edit') {
			// axios
		}
	}, []);

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
			<h2>{mode === 'edit' ? 'Modify' : 'Create'} a decision</h2>
			<StyledForm onSubmit={handleSubmit}>
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
