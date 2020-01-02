import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StoriesList = props => {
	const [list, setList] = useState();
	useEffect(() => {
		axios
			.get('www.url.com')
			.then(res => {
				console.log(res);
				setList(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div>STORIES LIST</div>
			{list &&
				list.map(story => {
					return (
						<>
							<Link to={`/story/${story.id}`}>{story.title}</Link>
						</>
					);
				})}
		</>
	);
};

export default StoriesList;
