import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Blurb} from './Dashboard'

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
			<h2>Browse stories</h2>
			<Blurb>
				These are some of the latest stories uploaded by users. Hit the play button to explore an adventure, or head over to the dashboard to create your own!
			</Blurb>
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
		font-size: 6rem;
		width: 96%;
		margin: 4rem 0 0 0;
	}

	div {
		width: 96%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
`;
