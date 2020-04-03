import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
		<StoriesListWrapper>
			<h2>STORIES LIST</h2>
			{list &&
				list.map(story => {
					return (
						// <Link to={`/story/${story.id}`}>
						<div>
							<ReaderStoryCard story={story} />
						</div>
						// </Link>
					);
				})}
		</StoriesListWrapper>
	);
};

export default StoriesList;

const StoriesListWrapper = styled.div`
	h2 {
		font-size: 3.6rem;
		width: 96%;
		margin: 2rem auto;
	}

	div {
		width: 96%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
`;
