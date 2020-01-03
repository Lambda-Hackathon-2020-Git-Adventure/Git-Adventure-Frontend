import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Graph } from 'react-d3-graph';
import Modali, { useModali } from 'modali';
import { axiosWithAuth } from './authentication/axiosWithAuth';
import ModifyDecision from './ModifyDecision';
import EditStoryDescription from './EditStoryDescription';
import styled from 'styled-components';

export default function StoryTree() {
	const params = useParams();

	const [modalViz, setModalViz] = useState(false);
	const [data, setData] = useState();
	const [nodeModal, toggleNodeModal] = useModali();
	const [questionModal, toggleQuestionModal] = useModali();
	const [addModal, toggleAddModal] = useModali();
	const [editNode, setEditNode] = useState();
	const [mode, setMode] = useState('edit');
	const [story_id, setStoryId] = useState();
	const [first, setFirst] = useState(false);

	// let mode = 'create';
// let restart;
	const myConfig = {
		directed: true,
		nodeHighlightBehavior: true,
		node: {
			labelProperty: 'name',
			color: 'lightgreen',
			size: 220,
			highlightStrokeColor: 'blue',
			// fontSize: 190
		},
		// label: {
		// 	// fontSize: 100
		// },
		d3: {
			linkLength: 150,
			// fontSize: 100
		},
		link: {
			highlightColor: 'lightblue',
		},
	};

	const onClickGraph = function() {
		window.alert(`Clicked the graph background`);
	};

	const onClickNode = function(nodeId) {
		setEditNode(nodeId);
		// toggleNodeModal();
		toggleQuestionModal();
		
	};

	const noNodes = () => {
		let someData = [];
		let someLinks = [];
		axiosWithAuth()
			.get(`https://cyahack.herokuapp.com/api/stories/${params.id}`)
			.then(res => {
				console.log(params.id);
				setMode('create');
				setFirst(true);
				setStoryId(res.data.story.id);
				someData.push({
					name: res.data.story.title,
					id: res.data.story.id,
					color: 'red',
					symbolType: 'cross',
				});
				someLinks.push({source: res.data.story.id, target: res.data.story.id})
				setData({
					nodes: someData,
					links: someLinks,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		let someData = [];
		let someLinks = [];
		axiosWithAuth()
			.get(`https://cyahack.herokuapp.com/api/nodes/story/${params.id}`)
			.then(res => {
				if (res.data.length < 1) {
					noNodes();
					return;
				} else if(res.data.length ==1){
					res.data.forEach(item => {
						let color = 'blue';
						let symbol = 'circle';
						if (item.nodeParents.length < 1) {
							color = 'red';
							symbol = 'star';
						}
						someData.push({
							name: item.specifiedNode.name,
							id: item.specifiedNode.id,
							color: color,
							symbolType: symbol,
						});
						// someData.push({id: item.specifiedNode.id});
						someLinks.push({ source: item.specifiedNode.id, target: item.specifiedNode.id });
					});
					// res.data.forEach(item => {
					// 	item.nodeChildren.forEach(child => {
						// });
					// });
					setData({
						nodes: someData,
						links: someLinks,
					});
					return;
				}
				console.log("MEOWWW")
				setStoryId(res.data[0].specifiedNode.story_id);
				setFirst(false);
				//Sets the nodes
				res.data.forEach(item => {
					let color = 'blue';
					let symbol = 'circle';
					if (item.nodeParents.length < 1) {
						color = 'red';
						symbol = 'star';
					}
					someData.push({
						name: item.specifiedNode.name,
						id: item.specifiedNode.id,
						color: color,
						symbolType: symbol,
					});
					// someData.push({id: item.specifiedNode.id});
				});

				//sets the links sources to targets
				res.data.forEach(item => {
					item.nodeChildren.forEach(child => {
						someLinks.push({ source: item.specifiedNode.id, target: child.id });
					});
				});
				setData({
					nodes: someData,
					links: someLinks,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const selectEdit = () => {
		toggleQuestionModal();
		toggleNodeModal();
	};

	const selectAdd = () => {
		toggleQuestionModal();
		toggleAddModal();
	};

	return (
		<>
			<div>
				<EditStoryDescription nodeId={params.id} />
			</div>
			{data && (
				<Graph
					className='graph-class'
					id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
					data={data}
					config={myConfig}
					onClickNode={onClickNode}
				/>
			)}
			<Modali.Modal {...questionModal}>
				{!first && <NodeButton onClick={selectEdit}>Edit Node</NodeButton>}
				<NodeButton onClick={selectAdd}>Add Node</NodeButton>
			</Modali.Modal>
			<Modali.Modal {...addModal}>
				<ModifyDecision
					mode='create'
					nodeId={editNode}
					toggleNodeModal={toggleAddModal}
					first={first}
					story_id={story_id}
					// restart={Graph.restart}
				/>
			</Modali.Modal>
			<Modali.Modal {...nodeModal}>
				<ModifyDecision
					mode={mode}
					nodeId={editNode}
					toggleNodeModal={toggleNodeModal}
					first={first}
					story_id={story_id}
					// restart={Graph.restart}
				/>
			</Modali.Modal>
		</>
	);
}

const NodeButton = styled.button`
	height: 3.6rem;
	width: 60%;
	margin: 0 auto 2.4rem;
	background-color: red;
	color: white;
	border-radius: 1.8rem;
	border: none;
	font-family: inherit;
	font-height: 1.8rem;
	cursor: pointer;

	&:hover {
		background-color: maroon;
	}
`;
