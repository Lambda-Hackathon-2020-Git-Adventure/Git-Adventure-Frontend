import React from 'react';
import styled from 'styled-components';

export default function TeamMemberCard({ team_member }) {
	const image = `url('/photos/` + team_member.img_path + `')`;

	return (
		<StyledCard>
			<StyledRole>{team_member.role.toUpperCase()}</StyledRole>
			<StyledHeader>
				<p>{team_member.bio.toUpperCase()}</p>
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
	height: 54rem;
	margin-bottom: 2rem;
	padding: 1.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid silver;
	background-color: white;
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
		font-size: 3.4rem;
	}

	p {
		font-size: 1.8rem;
	}
`;

const StyledImage = styled.div`
	width: 28.5rem;
	height: 35.2rem;
	border: 1.6rem solid green;
	border-top-left-radius: 9rem;
	border-top-right-radius: 9rem;

	background-image: ${props => props.image};
	background-size: cover;
`;

const StyledLink = styled.a`
	margin-top: 1.2rem;
	font-size: 1.8rem;
	color: inherit;
`;
