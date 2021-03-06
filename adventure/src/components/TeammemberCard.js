import React from 'react';
import styled from 'styled-components';

export default function TeamMemberCard({ team_member }) {
	const cover = `url('/photos/paper-texture-2.jpg')`;
	const image = `url('/photos/` + team_member.img_path + `')`;

	return (
		<StyledCard cover={cover}>
			<StyledRole>{team_member.role.toUpperCase()}</StyledRole>
			<StyledHeader>
				<p><span>{team_member.bio.toUpperCase()}</span></p>
				<hr />
				<h3>{team_member.name.toUpperCase()}</h3>
				<hr />
			</StyledHeader>
			<StyledImage image={image} />
			{/* <StyledLeftBox /> */}
			{/* <StyledRightBox /> */}
			<StyledLink href={team_member.link_url} target='_blank'>
				{team_member.link_title.toUpperCase()}
			</StyledLink>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	width: 33rem;
	height: 58rem;
	margin-bottom: 2rem;
	padding: 1.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-image: ${props => props.cover};
`;

const StyledRole = styled.div`
	background-color: red;
	color: white;
	width: 28.5rem;
	height: 2.4rem;
	border-radius: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.8rem;
`;

const StyledHeader = styled.div`
	width: 90%;

	h3 {
		color: red;
		width: 30rem;
		font-size: 3rem;
		
	}

	p {
		min-height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		span{
			text-align: center;
			font-size: 1.8rem;
		}
	}
`;

const StyledImage = styled.div`
	width: 96%;
	max-width: 27.4rem;
	height: 35.2rem;
	border-top-left-radius: 9rem;
	border-top-right-radius: 9rem;
	border: 1.6rem solid #5b88a4;
	box-shadow: 0 0 0 0.6rem #f1bd19;

	background-image: ${props => props.image};
	background-size: cover;
`;

const StyledLink = styled.a`
	margin-top: 1.2rem;
	font-size: 1.8rem;
	color: inherit;
`;
