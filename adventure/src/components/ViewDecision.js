import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function ViewDecision() {
	const paper = `url('/photos/paper-texture-3.jpg')`;

	const [decisions, setDecisions] = useState([]);

	useEffect(() => {
		// axios.get()

		setDecisions(['Blah', 'Blahbedyblah', 'Jan Meiii']);
	}, []);

	return (
		<StyledPageWrapper paper={paper}>
			<div>
				<h2>STORY</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					veritatis perferendis tenetur pariatur accusamus esse eligendi
					deleniti, nam dignissimos qui provident ratione beatae, aliquid optio
					quas ea porro quis incidunt!
				</p>
				<hr />
			</div>
			<StyledDecisions>
				{decisions.map(decision => (
					<div>{decision}</div>
				))}
			</StyledDecisions>
		</StyledPageWrapper>
	);
}

const StyledPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 96%;
	height: 80vh;
	max-width: 65rem;
	margin: 2rem auto;
	padding: 4rem 4%;
	border-radius: 0.2rem;
	font-family: 'Souvenir', 'Libre Baskerville', serif;
	background-image: ${props => props.paper};
	background-size: cover;

	h2 {
		width: 100%;
		text-align: left;
		font-size: 1.4rem;
		margin-bottom: 2.4rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		font-size: 1.4rem;
		text-align: left;
		max-width: 65ch;
		line-height: 1.5;
	}

	hr {
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
		border: 1px solid silver;
		width: 100%;
	}
`;

const StyledDecisions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;

	font-size: 1.4rem;
	font-style: italic;

	div {
		margin-top: 2.4rem;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;
