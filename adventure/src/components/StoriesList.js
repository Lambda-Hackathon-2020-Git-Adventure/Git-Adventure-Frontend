import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReaderStoryCard from './ReaderStoryCard';

const StoriesList = props => {
	const [list, setList] = useState();
	useEffect(() => {
		axios
			.get('https://cyahack.herokuapp.com/api/stories/')
			.then(res => {
				console.log(res);
				setList(res.data.stories);
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
							<Link to={`/story/${story.id}`}>
								<ReaderStoryCard story={story} />
							</Link>
						</>
					);
				})}
		</>
	);
};

export default StoriesList;
