import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

export default function ViewDecision() {
	const paper = `url('/photos/paper-texture-3.jpg')`;
	const [data, setData] = useState({});
	const [storyId, setStoryId] = useState();
	const [story, setStory] = useState({});

	const id = 1;

	useEffect(() => {
		axiosWithAuth()
			.get(`/nodes/${id}`)
			.then(res => {
				console.log(res.data);
				setData(res.data);
				setStoryId(res.data.specifiedNode.story_id);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		axiosWithAuth()
			.get(`/stories/${storyId}`)
			.then(res => {
				console.log(res.data);
				setStory(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [storyId]);

	return (
		<StyledPageWrapper paper={paper}>
			<div>
				<h2>{story.story && story.story.title}</h2>
				<p>{data.specifiedNode && data.specifiedNode.text}</p>
				<hr />
			</div>
			<StyledDecisions>
				{data.nodeChildren &&
					data.nodeChildren.map(node => <div key={node.id}>{node.name}</div>)}
			</StyledDecisions>
		</StyledPageWrapper>
	);
}

const StyledPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 96%;
	height: 80vh;
	max-width: 65rem;
	margin: 2rem auto;
	padding: 4rem 4%;
	border-radius: 0.2rem;
	font-family: 'Souvenir', 'Libre Baskerville', serif;
	background-image: ${props => props.paper};
	background-size: cover;

	h2 {
		width: 100%;
		text-align: left;
		font-size: 1.4rem;
		margin-bottom: 2.4rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		font-size: 1.4rem;
		text-align: left;
		max-width: 65ch;
		line-height: 1.5;
	}

	hr {
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
		border: 1px solid silver;
		width: 100%;
	}
`;

const StyledDecisions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;

	font-size: 1.4rem;
	font-style: italic;

	div {
		margin-top: 2.4rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;
