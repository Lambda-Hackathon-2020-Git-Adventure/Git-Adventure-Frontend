import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { Graph } from 'react-d3-graph';
import Modali, { useModali } from 'modali';

//local imports
import StoryCard from './StoryCard';
import ModifyDecision from './ModifyDecision';
import Img1 from '../images/headers/img1.jpg';
import Img2 from '../images/headers/img2.jpg';
import Img3 from '../images/headers/img3.jpg';
import Img4 from '../images/headers/img4.jpg';
import Img5 from '../images/headers/img5.jpg';
import left_arrow from '../images/left_arrow.png';
import right_arrow from '../images/right_arrow.png';
import curly_arrow from '../images/curly_arrow.png';

import CreateStoryForm from './CreateStoryForm';
import InviteForm from './InviteForm';
import { axiosWithAuth } from './authentication/axiosWithAuth';

const stories = [
	{
		id: 1,
		image: '',
		title: 'A Cookie to Remember',
		authors: ['Fozzie Bear', 'Rizzo the Rat'],
		description: `It's lonely in paradise. Life couldn't be better after Cookie Monster wins the the cookie lottery. Eating cookies was all Cookie Monster ever wanted...wasn't it? Everything changes when a gruff orange hockey monster named Gritty barrels into his cookie shop. Can these two misunderstood monsters find love?`,
		dateEdited: '10/31/19',
	},
	{
		id: 2,
		image: '',
		title: 'A Cookie to Remember',
		authors: ['Luisa', 'Clarence'],
		description:
			'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
		dateEdited: '10/31/19',
	},
	{
		id: 3,
		image: '',
		title: 'The Telltale Heart',
		authors: ['Myrtle', 'Dorothy'],
		description:
			'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
		dateEdited: '10/31/19',
	},
	{
		id: 4,
		image: '',
		title: 'A Tale of Two Cities',
		authors: ['Luisa', 'Clarence'],
		description:
			'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
		dateEdited: '10/31/19',
	},
	{
		id: 5,
		image: '',
		title: 'Choice of Robots',
		authors: ['Myrtle', 'Dorothy'],
		description:
			'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
		dateEdited: '10/31/19',
	},
];

export default function Dashboard(props) {
	const [storyModalViz, setStoryModalViz] = useState(false);
	const [inviteModalViz, setInviteModalViz] = useState(false);
	const [myStories, setMyStories] = useState({
		createdStories: [],
		collaboratingOn: [],
	});

	const [modalId, setModalId] = useState();

	console.log(modalId);

	const createStoryModal = () => {
		setStoryModalViz(!storyModalViz);
	};
	const closeModal = e => {
		// e.stopPropagation()
		if (storyModalViz) {
			setStoryModalViz(!storyModalViz);
		} else {
			setInviteModalViz(!inviteModalViz);
		}
	};
	// really inefficient modal code!!! oh well
	const createInviteModal = id => {
		setModalId(id);
		setInviteModalViz(!inviteModalViz);
	};

	useEffect(() => {
		axiosWithAuth()
			.get('https://cyahack.herokuapp.com/api/stories/mine')
			.then(res => {
				console.log(res.data);
				setMyStories(res.data);
				// console.log('LSKDFSLKDJF', myStories);
			})
			.catch(err => {
				console.log(err);
			});
	}, [
		myStories.createdStories && myStories.createdStories.length,
		myStories.collaboratingOn && myStories.collaboratingOn.length,
	]);

	return (
		<DashBG>
			<Header>
				<h2>Your Stories</h2>
			</Header>
			<Blurb>
				Here you'll find all the interactive stories that you've created or
				collaborated on. To get started, create a new story.
			</Blurb>
			<CreateContainer>
				<img src={curly_arrow}></img>
				<NewStory onClick={createStoryModal}>Create a new story</NewStory>
				<div>
					<img src={left_arrow}></img>
					<h2>...or work on one you've already started!</h2>
					<img src={right_arrow}></img>
				</div>
			</CreateContainer>

			{storyModalViz && (
				<CreateStoryForm
					closeModal={closeModal}
					myStories={myStories}
					setMyStories={setMyStories}
				/>
			)}
			{inviteModalViz && <InviteForm closeModal={closeModal} id={modalId} />}

			<DashContainer>
				<StoryColumn>
					<Subheading>Created by you</Subheading>
					{/* {console.log('My stories state', myStories.createdStories)} */}
					{myStories.createdStories &&
						myStories.createdStories.map((story, index) => {
							// console.log(story);
							return (
								<StoryCard
									key={index}
									story={story}
									myStories={myStories}
									setMyStories={setMyStories}
									createInviteModal={createInviteModal}
									setModalId={setModalId}
									collaborator={false}
								/>
							);
						})}
				</StoryColumn>
				<StoryColumn>
					<Subheading>Shared with you</Subheading>
					{myStories.collaboratingOn &&
						myStories.createdStories &&
						myStories.collaboratingOn.map((story, index) => {
							return (
								<StoryCard
									key={index}
									story={story}
									myStories={myStories}
									setMyStories={setMyStories}
									collaborator={true}
								/>
							);
						})}
				</StoryColumn>
			</DashContainer>
		</DashBG>
	);
}

const DashBG = styled.div`
	background-color: whitesmoke;
	height: 100%;
`;

const DashContainer = styled.main`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: 900px) {
		flex-flow: row wrap;
	}
`;

const Blurb = styled.p`
	/* max-width: 100%; */
	width: 50%;
	/* background-color: #7C6B68; */
	/* color: white; */
	font-size: 1.75rem;
	padding: 1rem;
	/* border-top: black 1px solid;
  border-bottom: black 1px solid; */
	text-align: left;
	margin: 0 auto;
	font-family: 'Open Sans', sans-serif;
`;

const StoryColumn = styled.section`
	/* border: 1px solid blue; */
	display: flex;
	flex-flow: row wrap;
	max-width: 50%;
	justify-content: center;
	align-items: flex-start;
`;

const Subheading = styled.h2`
	width: 100%;
	font-size: 1.5rem;
	text-align: center;
	padding: 1rem;
`;

const randomImage = () => {
	const imgArray = [Img1, Img2, Img3, Img4, Img5];
	const randomNum = Math.floor(Math.random() * imgArray.length);
	const pick = imgArray[randomNum];
	return pick;
};

const Header = styled.header`
  /* background-image: url(${Img3}); */
  /* background-color: #DED4D2; */
  /* background-blend-mode: multiply; */
  /* background-size: cover; */
  /* height: 200px; */
  font-size: 4rem;
  /* color: red; */
  /* text-shadow: 2px 2px black; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-attachment: fixed; */

  h2 {
    margin-top: 4rem;
  }
`;

const NewStory = styled.button`
	background-color: red;
	height: 3rem;
	color: white;
	font-size: 2rem;
	font-family: font77490;
	text-transform: uppercase;
	padding: 0 4rem;
	border-radius: 2rem;
	border-color: transparent;
	cursor: pointer;
	box-shadow: 2px 2px 3px rgba(150, 0, 40, 0.5);
	margin: 1rem 0;
	&:hover {
		background-color: black;
		color: white;
		border-color: black;
	}
`;

const CreateContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	align-items: center;
	img {
		transform: scale(0.7);
		display: inline-block;
	}
	div {
		display: flex;
		align-items: flex-start;
	}
	h2 {
		padding-top: 1rem;
	}
`;
