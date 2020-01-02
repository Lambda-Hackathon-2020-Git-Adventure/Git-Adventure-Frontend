import React from 'react';
import styled from 'styled-components';

import TeamMemberCard from './TeamMemberCard';

import { team_member_info } from './TeamMemberInfo';

export default function About() {
	return (
		<div>
			<h2>Meet the team behind Git Your Own Adventure!</h2>
			<StyledWrapper>
				{team_member_info.map(team_member => (
					<TeamMemberCard key={team_member.name} team_member={team_member} />
				))}
			</StyledWrapper>
		</div>
	);
}

const StyledWrapper = styled.div`
	width: 96%;
	max-width: 110rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin: 0 auto;
`;
