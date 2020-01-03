import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Graph } from 'react-d3-graph';
import Modali, { useModali } from 'modali';
import { axiosWithAuth } from './authentication/axiosWithAuth';
import ModifyDecision from './ModifyDecision';
import EditStoryDescription from './EditStoryDescription';

export default function StoryTree() {
	const params = useParams();

	console.log(params.id);

	// console.log(props);
	const [modalViz, setModalViz] = useState(false);
	const [data, setData] = useState();
	const [nodeModal, toggleNodeModal] = useModali();
  const [editNode, setEditNode] = useState();
  const [mode, setMode] = useState('edit');
  const [storyId, setStoryId] = useState();
  const [first, setFirst] = useState(false);

  // let mode = 'create';

	const myConfig = {
		directed: true,
		nodeHighlightBehavior: true,
		// d3: {
    //   alphaTarget: 0.05,
    //   gravity: -200,
    //   linkLength: 100,
    //   linkStrength: 1,
    // },
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

	// const createStoryModal = () => {
	// 	setModalViz(!modalViz);
	// };
	// const closeModal = e => {
	// 	// e.stopPropagation()
	// 	setModalViz(!modalViz);
  // };
  
  const noNodes = () =>{
    let someData = [];
		let someLinks = [];
		axiosWithAuth()
			.get(`https://cyahack.herokuapp.com/api/stories/${params.id}`)
			.then(res => {
        console.log(res.data.story);
        setMode('create');
        setFirst(true);
        
        // mode = 'create';
				// if (res.data.length < 1) {
				// 	return;
				// }
				//Sets the nodes
				// res.data.forEach(item => {
				// 	let color = 'blue';
				// 	let symbol = 'circle';
				// 	if (item.nodeParents.length < 1) {
				// 		color = 'red';
				// 		symbol = 'star';
				// 	}
					someData.push({
						name: res.data.story.title,
						id: res.data.story.id,
						color: "red",
						symbolType: "cross",
					});
					// someData.push({id: item.specifiedNode.id});
				// });

				//sets the links sources to targets
				// res.data.forEach(item => {
				// 	item.nodeChildren.forEach(child => {
						// someLinks.push({ source: item.specifiedNode.id, target: child.id });
				// 	});
				// });
				setData({
					nodes: someData,
					links: someLinks,
				});
			})
			.catch(err => {
				console.log(err);
			});
  }

	useEffect(() => {
		let someData = [];
		let someLinks = [];
		axiosWithAuth()
			.get(`https://cyahack.herokuapp.com/api/nodes/story/${params.id}`)
			.then(res => {
				console.log(res);
				if (res.data.length < 1) {
          noNodes();
					return;
        }
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

	return (
		<>
			<div>
				<EditStoryDescription nodeId={params.id} />
			</div>
			{data && (
				<Graph
        className = "graph-class"
					id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
					data={data}
					config={myConfig}
					onClickNode={onClickNode}
				/>
			)}
			<Modali.Modal {...nodeModal}>
				<ModifyDecision mode={mode} nodeId={editNode} first={first} />
			</Modali.Modal>
		</>
	);
}
