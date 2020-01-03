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

// import { axiosWithAuth } from './authentication/axiosWithAuth';

import CreateStoryForm from './CreateStoryForm';



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

  const [modalViz, setModalViz] = useState(false);

  const createStoryModal = () => {
    setModalViz(!modalViz);
  };
  const closeModal = e => {
    // e.stopPropagation()
    setModalViz(!modalViz);
  };
	// const [modalViz, setModalViz] = useState(false);
	// const [data, setData] = useState();

	// const [nodeModal, toggleNodeModal] = useModali();
	// const [editNode, setEditNode] = useState();
	// the graph configuration, you only need to pass down properties
	// that you want to override, otherwise default ones will be used
	// const myConfig = {
	// 	directed: true,
	// 	nodeHighlightBehavior: true,
	// 	d3: {
	// 		gravity: -200,
	// 	},
	// 	node: {
	// 		labelProperty: 'name',
	// 		color: 'lightgreen',
	// 		size: 120,
	// 		highlightStrokeColor: 'blue',
	// 	},
	// 	link: {
	// 		highlightColor: 'lightblue',
	// 	},
	// };

	// graph event callbacks
	// const onClickGraph = function() {
	// 	window.alert(`Clicked the graph background`);
	// };

	// const onClickNode = function(nodeId) {
	// 	console.log(nodeId);
	// 	setEditNode(nodeId);
	// 	toggleNodeModal();
	// };

	// const createStoryModal = () => {
	// 	setModalViz(!modalViz);
	// };
	// const closeModal = e => {
	// 	// e.stopPropagation()
	// 	setModalViz(!modalViz);
	// };

	// useEffect(() => {
	// 	let someData = [];
	// 	let someLinks = [];
	// 	axiosWithAuth()
	// 		.get('https://cyahack.herokuapp.com/api/nodes/story/1')
	// 		.then(res => {
	// 			//Sets the nodes
	// 			res.data.forEach(item => {
	// 				let color = 'blue';
	// 				let symbol = 'circle';
	// 				if (item.nodeParents.length < 1) {
	// 					color = 'red';
	// 					symbol = 'star';
	// 				}
	// 				someData.push({
	// 					name: item.specifiedNode.name,
	// 					id: item.specifiedNode.id,
	// 					color: color,
	// 					symbolType: symbol,
	// 				});
	// 				// someData.push({id: item.specifiedNode.id});
	// 			});

	// 			//sets the links sources to targets
	// 			res.data.forEach(item => {
	// 				item.nodeChildren.forEach(child => {
	// 					someLinks.push({ source: item.specifiedNode.id, target: child.id });
	// 				});
	// 			});
	// 			setData({
	// 				nodes: someData,
	// 				links: someLinks,
	// 			});
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }, []);

	// console.log(axios.get("https://cyahack.herokuapp.com/api/stories/1"))

	return (
		<DashBG>
			{/* {data && (
				<Graph
					id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
					data={data}
					config={myConfig}
					onClickNode={onClickNode}
				/>
			)}
			<Modali.Modal {...nodeModal}>
				<ModifyDecision mode="edit" nodeId={editNode} />
			</Modali.Modal> */}

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
			{modalViz && <CreateStoryForm closeModal={closeModal} />}
			<DashContainer>
				<StoryColumn>
					<Subheading>Created by you</Subheading>
					{stories.map((story, index) => {
						return <StoryCard key={index} story={story} />;
					})}
				</StoryColumn>
				<StoryColumn>
					<Subheading>Shared with you</Subheading>
					{stories.map((story, index) => {
						return <StoryCard key={index} story={story} />;
					})}
				</StoryColumn>
			</DashContainer>
		</DashBG>
	);
}

const DashBG = styled.div`
	background-color: whitesmoke;
`;

const DashContainer = styled.main`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
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
	max-width: 90%;
	justify-content: center;
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
