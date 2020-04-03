import React from 'react';
import { axiosWithAuth } from './authentication/axiosWithAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReadIcon from '../images/book-open-page-variant.png';
import EditIcon from '../images/lead-pencil.png';
import InviteIcon from '../images/account-plus.png';
import DeleteIcon from '../images/delete-forever.png';
// import InviteForm from './InviteForm';

//font

export default function StoryCard(props) {
	const { image, title, creator, description, id, collaborators } = props.story;
	const { myStories, setMyStories, createInviteModal, collaborator } = props;

	let str =
		collaborators &&
		collaborators.reduce((acc, curr) => acc + curr.username + ', ', '');
	str = str && str.substring(0, str.length - 2);

	const deleteStory = () => {
		axiosWithAuth()
			.delete(`https://cyahack.herokuapp.com/api/stories/${id}`)
			.then(res => {
				console.log(res);
				console.log(myStories);
				if (myStories.createdStories.filter(story => story.id !== id)) {
					setMyStories(
						myStories.createdStories.filter(story => story.id !== id),
					);
				} else {
					setMyStories(
						myStories.collaboratingOn.filter(story => story.id !== id),
					);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<Tile>
			<ButtonBar>
				<Button read>
					<Link to={`/story/${id}`}>
						<img src={ReadIcon} alt='Read' />
						Play story
					</Link>
				</Button>
				<Button edit>
					<Link to={`/storytree/${id}`}>
						<img src={EditIcon} alt='Edit' />
						Edit story
					</Link>
				</Button>
				<Button share onClick={() => createInviteModal(id)}>
					<img src={InviteIcon} alt='Invite' />
					Share & invite
				</Button>
				{/* Need to change how we grab the id. Refreshing the edit page will throw an error */}
				{/* <Button edit><Link to={{pathname: `/storytree/${id}`, state: {
                    thisId: id
                }}}><img src={EditIcon}/>Edit story</Link></Button> */}
				{/* <Button share><Link to={`/storytree/${id}/invite`}><img src={InviteIcon}/>Share & invite</Link></Button> */}
				{!collaborator && (
					<Button onClick={deleteStory}>
						{' '}
						<img src={DeleteIcon} alt='Delete' /> Delete story
					</Button>
				)}
			</ButtonBar>
			<StoryInfo>
				{image && <img src='' alt=''></img>}
				<Title>{title}</Title>
				<Authors>By: {creator}</Authors>
				<Authors>
					{collaborators && collaborators.length ? 'with:' : ''} {str}
				</Authors>
				<Desc>{description}</Desc>
				{/*dateEdited && <p>{dateEdited}</p>*/}
			</StoryInfo>
		</Tile>
	);
}

// GENERAL STYLES

const Tile = styled.section`
	/* border: 1px hotpink solid; */
	/* padding: 1rem; */
	margin: 1rem;
	padding-right: 1rem;
	max-height: 300px;
	background-color: rgba(255, 255, 255, 0.5);
	background-image: url('/photos/paper-texture-2.jpg');
	background-blend-mode: luminosity;
	border-radius: 0.25rem;
	box-shadow: 2px 2px 5px #938782;
	width: 90%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	&:hover {
		cursor: default;
	}
`;

// TEXT STYLES
const Title = styled.h3`
	font-size: 2rem;
	padding-top: 1rem;
`;

const Authors = styled.h4`
	font-size: 1.2rem;
	padding-top: 1rem;
`;
const Desc = styled.p`
	font-size: 1.4rem;
	padding-top: 1rem;
	text-align: left;
	// font-family: 'Open Sans', sans-serif;
	font-family: 'Libre Baskerville';
`;

// BUTTONS

const ButtonBar = styled.nav`
	display: flex;
	/* width: 100%; */
	flex-flow: column;
	/* height: 100%; */
	justify-content: space-between;
	margin-right: 1rem;
`;

const Button = styled.button`
	width: 5rem;
	height: 100%;
	background-color: ${props =>
		props.read
			? '#5b88a4'
			: props.edit
			? 'goldenrod'
			: props.share
			? '#D95947'
			: 'grey'};
	border: none;
	color: white;
	font-size: 10px;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;

	&:hover {
		background-color: black;
	}

	&:nth-of-type(1) {
		border-radius: 0.25rem 0 0 0;
	}
	&:nth-last-of-type(1) {
		border-radius: 0 0 0 0.25rem;
	}
	img {
		width: 60%;
		padding-bottom: 3px;
	}
	a {
		color: white;
		text-decoration: none;
		font-family: 'Open Sans', sans-serif;
	}
`;

const StoryInfo = styled.div`
	padding: 1rem;
	width: 100%;
`;

/// MODAL ----------------------------------------------------- ///
