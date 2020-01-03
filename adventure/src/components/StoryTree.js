import React, { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import Modali, { useModali } from 'modali';
import { axiosWithAuth } from './authentication/axiosWithAuth';
import ModifyDecision from './ModifyDecision';
import EditStoryDescription from './EditStoryDescription';

export default function StoryTree(props) {
	console.log(props);
	const [modalViz, setModalViz] = useState(false);
	const [data, setData] = useState();
	const [nodeModal, toggleNodeModal] = useModali();
	const [editNode, setEditNode] = useState();

	const myConfig = {
		directed: true,
		nodeHighlightBehavior: true,
		d3: {
			gravity: -200,
		},
		node: {
			labelProperty: 'name',
			color: 'lightgreen',
			size: 120,
			highlightStrokeColor: 'blue',
		},
		link: {
			highlightColor: 'lightblue',
		},
	};

	const onClickGraph = function() {
		window.alert(`Clicked the graph background`);
	};

	const onClickNode = function(nodeId) {
		console.log(nodeId);
		setEditNode(nodeId);
		toggleNodeModal();
	};

	const createStoryModal = () => {
		setModalViz(!modalViz);
	};
	const closeModal = e => {
		// e.stopPropagation()
		setModalViz(!modalViz);
	};

	useEffect(() => {
		let someData = [];
		let someLinks = [];
		axiosWithAuth()
			.get(
				`https://cyahack.herokuapp.com/api/nodes/story/${props.location.state.thisId}`,
			)
			.then(res => {
				console.log(res);
				if (res.data.length < 1) {
					return;
				}
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

	return (
		<>
			<div>
				<EditStoryDescription nodeId={props.location.state.thisId} />
			</div>
			{data && (
				<Graph
					id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
					data={data}
					config={myConfig}
					onClickNode={onClickNode}
				/>
			)}
			<Modali.Modal {...nodeModal}>
				<ModifyDecision mode='edit' nodeId={editNode} />
			</Modali.Modal>
		</>
	);
}
