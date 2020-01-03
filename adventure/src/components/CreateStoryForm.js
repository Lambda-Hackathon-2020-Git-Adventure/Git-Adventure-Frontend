import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './authentication/axiosWithAuth';

export default function CreateStoryForm(props) {
	const { closeModal } = props;
	const [newStory, setNewStory] = useState({
		title: '',
		description: '',
		image: '',
	});

	const createStory = e => {
		e.preventDefault();
		axiosWithAuth()
			.post(`/stories`, newStory)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		setNewStory({
			...newStory,
			title: '',
			description: '',
			image: '',
		});
		closeModal();
	};
	const handleChange = e => {
		setNewStory({
			...newStory,
			[e.target.name]: e.target.value,
		});
		console.log(newStory);
	};

	return (
		<ModalBG>
			<CreateForm onSubmit={createStory}>
				<CloseBtn onClick={closeModal}>x</CloseBtn>
				<label htmlFor='test'>Title your story</label>
				<input
					type='text'
					id='title'
					name='title'
					onChange={handleChange}></input>

				<label htmlFor='test'>Description -- what's your story about?</label>
				<textarea
					rows='10'
					id='description'
					name='description'
					onChange={handleChange}></textarea>
				<button type='submit'>Create story</button>
			</CreateForm>
		</ModalBG>
	);
}

// creator id
// title

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

const CreateForm = styled.form`
	margin: 0 auto;
	border: 3px hotpinksolid;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 0.25rem;
	width: 500px;
	display: flex;
	flex-flow: column;
	padding: 3rem;
	min-height: 40%;
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
