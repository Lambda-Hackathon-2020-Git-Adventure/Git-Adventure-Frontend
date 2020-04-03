import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

const ViewStory = props => {
	const paper = `url('/photos/paper-texture-3.jpg')`;
	const [story, setStory] = useState();
	const [collabs, setCollab] = useState();
	const [history, setHistory] = useState([]);
	const [current, setCurrent] = useState();
	const handleClick = e => {
		e.preventDefault();
		setHistory([story.start.id]);
		axiosWithAuth()
			.get(`/nodes/${story.start.id}`)
			.then(res => setCurrent(res.data));
	};

	const handleNext = (e, id) => {
		e.preventDefault();
		setHistory([...history, current]);
		axiosWithAuth()
			.get(`/nodes/${id}`)
			.then(res => setCurrent(res.data));
	};

	const handleBack = e => {
		e.preventDefault();
		setCurrent(history[history.length - 1]);
		const newHistory = history.slice(0, history.length - 1);
		setHistory(newHistory);
	};

	useEffect(() => {
		axiosWithAuth()
			.get(`/stories/${props.match.params.id}`)
			.then(res => {
				setStory(res.data.story);
				let str = res.data.story.collaborators.reduce(
					(acc, curr) => acc + curr.username + ', ',
					'',
				);
				str = str.substring(0, str.length - 2);
				setCollab(str);
			});
	}, []);

	if (!story)
		return <StyledPageWrapper paper={paper}>Loading...</StyledPageWrapper>;

	return (
		<StyledPageWrapper paper={paper}>
			<div>
				<h2>
					{story.title}{' '}
					<Byline>
						{' '}
						By {story.creator} {collabs && 'with: '} {collabs}
					</Byline>
				</h2>
				{history.length === 0 && (
					<div>
						{current ? (
							<Image src={current.specifiedNode.image} />
						) : (
							<Image src={story.image} />
						)}
						<p>{story.description}</p>
						{story && story.start && (
							<h2 className='button' onClick={handleClick}>
								Read More!
							</h2>
						)}
					</div>
				)}
				{current && <p>{current.specifiedNode.text}</p>}
				<hr />
				{history.length > 1 && (
					<h2 className='button' onClick={handleBack}>
						Go Back
					</h2>
				)}
			</div>
			<StyledDecisions>
				{current &&
					current.nodeChildren.map(child => (
						<div key={child.id} onClick={e => handleNext(e, child.id)}>
							{child.name}
						</div>
					))}
			</StyledDecisions>
		</StyledPageWrapper>
	);
};

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
	}

	.button {
		width: 100%;
		text-align: center;
		font-size: 1.4rem;
		margin-bottom: 2.4rem;
		cursor: pointer;
		margin-top: 4%;
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

const Image = styled.img`
	width: 55%;
`;
const Byline = styled.span`
	font-size: 10px;
	font-weight: 400;
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

export default ViewStory;
