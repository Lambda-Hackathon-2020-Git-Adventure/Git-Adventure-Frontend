import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './authentication/axiosWithAuth';
import styled from 'styled-components';

const EditStoryDescription = ({ nodeId }) => {
	const [newStoryDesc, setNewStoryDesc] = useState({});
	const [story, setStory] = useState();
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		axiosWithAuth()
			.get(`https://cyahack.herokuapp.com/api/stories/${nodeId}`)
			.then(res => {
				setStory(res.data.story);
				console.log(res.data.story);
			});
	}, []);

	const onSubmit = () => {
		axiosWithAuth()
			.put(`https://cyahack.herokuapp.com/api/stories/${nodeId}`, newStoryDesc)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setNewStoryDesc({
			...newStoryDesc,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<EditStoryWrapper>
			{editing ? (
				<form onSubmit={onSubmit}>
					<div>
						<h4>Story Title</h4>
						<p>{story.title}</p>
						<input
							name='title'
							value={newStoryDesc.title}
							placeholder='Enter updated story title here!'
							onChange={handleChange}
						/>
					</div>
					<div>
						<h4>Story Description</h4>
						<p>{story.description}</p>
						<input
							name='description'
							value={newStoryDesc.description}
							placeholder='Enter updated story description here!'
							onChange={handleChange}
						/>
					</div>
					<button onClick={() => setEditing(false)}>Cancel</button>
					<button type='submit'>Submit</button>
				</form>
			) : (
				<div className='main-story-card'>
					{story ? (
						<div>
							<h3>Story Title</h3>
							<p>{story.title}</p>
							<h3>Story Description</h3>
							<p>{story.description}</p>
						</div>
					) : null}
					<button onClick={() => setEditing(true)}>Edit</button>
				</div>
			)}
		</EditStoryWrapper>
	);
};

export default EditStoryDescription;

const EditStoryWrapper = styled.div`
	width: 96%;
	margin: 2rem auto 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: left;

	h3,
	h4 {
		font-size: 3rem;
		margin-bottom: 1.2rem;
	}

	p {
		font-family: 'Libre Baskerville';
		font-size: 1.8rem;
		margin-bottom: 2.4rem;
		max-width: 65ch;
	}

	input {
		width: 100%;
		margin-bottom: 2.4rem;
		padding: 0.5rem;
	}

	button {
		font-family: inherit;
		background-color: red;
		color: white;
		height: 2.4rem;
		border-radius: 1.2rem;
		width: 8rem;
		border: none;
		cursor: pointer;
		margin-right: 2.4rem;

		&:hover {
			background-color: maroon;
		}
	}
`;
