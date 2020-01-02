import React from 'react';
import styled from 'styled-components';

export default function TeamMemberCard({ team_member }) {
	console.log(team_member.img_url);

	const imgStyle = {
		width: '250px',
		height: '352px',
		border: '18px solid green',
		borderTopLeftRadius: '90px',
		borderTopRightRadius: '90px',
		backgroundImage: `url('/photos/${team_member.img_url}')`,
		backgroundSize: 'cover',
	};

	return (
		<StyledCard>
			<StyledRole>{team_member.role.toUpperCase()}</StyledRole>
			<StyledHeader>
				<p>{team_member.bio.toUpperCase()}</p>
				<h3>{team_member.name.toUpperCase()}</h3>
			</StyledHeader>
			{/* <StyledBorder> */}
			<div style={imgStyle}></div>
			{/* </StyledBorder> */}
			<StyledLink href={team_member.link_url}>
				{team_member.link_title.toUpperCase()}
			</StyledLink>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	width: 330px;
	height: 540px;
	margin-bottom: 20px;
	padding: 15px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid silver;
	background-color: white;
`;

const StyledRole = styled.div`
	background-color: red;
	color: white;
	width: 285px;
	height: 24px;
	border-radius: 12px;
`;

const StyledHeader = styled.div`
	h3 {
		color: red;
		font-size: 30px;
	}
`;

const StyledBorder = styled.div`
	width: 250px;
	height: 352px;
	border: 18px solid green;
	border-top-left-radius: 90px;
	border-top-right-radius: 90px;
`;

const StyledLink = styled.div`
	margin-top: 12px;
`;
