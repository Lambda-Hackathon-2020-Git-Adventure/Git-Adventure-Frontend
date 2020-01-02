import React from 'react';
import styled from 'styled-components';

//local imports
import StoryCard from './StoryCard'

const stories = [
  {
    image: '',
    title: 'A Cookie to Remember',
    authors: ["Fozzie Bear", "Rizzo the Rat"],
    description: `It's lonely in paradise. Life couldn't be better after Cookie Monster wins the the cookie lottery. Eating cookies was all Cookie Monster ever wanted...wasn't it? Everything changes when a gruff orange hockey monster named Gritty barrels into his cookie shop. Can these two misunderstood monsters find love?`,
    dateEdited: '10/31/19'
  }, {
    image: '',
    title: 'A Cookie to Remember',

    authors: ["Luisa", "Clarence"],
    description: 'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
    dateEdited: '10/31/19'
  }, {
    image: '',
    title: 'The Telltale Heart',
    authors: ["Myrtle", "Dorothy"],
    description: 'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
    dateEdited: '10/31/19'
  }, {
    image: '',
    title: 'A Tale of Two Cities',
    authors: ["Luisa", "Clarence"],
    description: 'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
    dateEdited: '10/31/19'
  }, {
    image: '',
    title: 'Choice of Robots',
    authors: ["Myrtle", "Dorothy"],
    description: 'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
    dateEdited: '10/31/19'
  }]

export default function Dashboard(props) {

  return (
    <React.Fragment>
      <h2>Story shelf</h2>
      <DashContainer>
        <StoryColumn>
          <Subheading>Your stories</Subheading>
          {stories.map(story => {
            return (
            <StoryCard story={story} />
            )
            })}
        </StoryColumn>
        <StoryColumn>
          <Subheading>Shared with you</Subheading>
          {stories.map(story => {
          return (
            <StoryCard story={story} />
            )
          })}
        </StoryColumn>
      </DashContainer>
    </React.Fragment>
  )
}

const DashContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const StoryColumn = styled.section`
  border: 1px solid blue;
  display: flex;
  flex-flow: row wrap;
  max-width: 500px;
`;

const Subheading = styled.h2`
  width: 100%;
  font-size: 1.5rem;
`;