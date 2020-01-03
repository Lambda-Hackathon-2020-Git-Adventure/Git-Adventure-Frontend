import React, {useState} from 'react';
import styled from 'styled-components';

//local imports
import StoryCard from './StoryCard'
import Img1 from '../images/headers/img1.jpg'
import Img2 from '../images/headers/img2.jpg'
import Img3 from '../images/headers/img3.jpg'
import Img4 from '../images/headers/img4.jpg'
import Img5 from '../images/headers/img5.jpg'
import CreateStoryForm from './CreateStoryForm';

const stories = [
  {
    id: 1,
    image: '',
    title: 'A Cookie to Remember',
    authors: ["Fozzie Bear", "Rizzo the Rat"],
    description: `It's lonely in paradise. Life couldn't be better after Cookie Monster wins the the cookie lottery. Eating cookies was all Cookie Monster ever wanted...wasn't it? Everything changes when a gruff orange hockey monster named Gritty barrels into his cookie shop. Can these two misunderstood monsters find love?`,
    dateEdited: '10/31/19'
  }, {
    id: 2,
    image: '',
    title: 'A Cookie to Remember',
    authors: ["Luisa", "Clarence"],
    description: 'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
    dateEdited: '10/31/19'
  }, {
    id: 3,
    image: '',
    title: 'The Telltale Heart',
    authors: ["Myrtle", "Dorothy"],
    description: 'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
    dateEdited: '10/31/19'
  }, {
    id: 4,
    image: '',
    title: 'A Tale of Two Cities',
    authors: ["Luisa", "Clarence"],
    description: 'Fruitcake chocolate sugar plum cookie. Marzipan bear claw gingerbread muffin cake. Chupa chups cheesecake tiramisu pie.',
    dateEdited: '10/31/19'
  }, {
    id: 5,
    image: '',
    title: 'Choice of Robots',
    authors: ["Myrtle", "Dorothy"],
    description: 'Pastry jujubes macaroon caramels cake pudding donut soufflé cake. Fruitcake tootsie roll gingerbread wafer topping soufflé liquorice donut.',
    dateEdited: '10/31/19'
  }]

export default function Dashboard(props) {
  const [modalViz, setModalViz] = useState(false)

  const createStoryModal = () => {
    setModalViz(!modalViz)
  }
  const closeModal = (e) => {
    e.stopPropagation()
    setModalViz(!modalViz)
  }


  return (
    <DashBG>
      <Header>
        <h2>Your Stories</h2>
      </Header>
      <Blurb>
        Here you'll find all the interactive stories that you've created or collaborated on. To get started, create a new story.
      </Blurb>
      <NewStory onClick={createStoryModal}>Create new story (not yet styled)</NewStory>
      {modalViz && <CreateStoryForm closeModal={closeModal}/> }
      <DashContainer>
        <StoryColumn>
          <Subheading>Created by you</Subheading>
          {stories.map((story, index) => {
            return (
              <StoryCard key={index} story={story} />
              )
            })}
        </StoryColumn>
        <StoryColumn>
          <Subheading>Shared with you</Subheading>
          {stories.map((story, index) => {
          return (
            <StoryCard key={index} story={story} />
            )
          })}
        </StoryColumn>
      </DashContainer>
    </DashBG>
  )
}

const DashBG = styled.div`
  background-color: #DED4D2;
`;

const DashContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media (max-width: 900px) {
      flex-flow: row wrap;
    }
`;

const Blurb = styled.p`
  max-width: 100%;
  width: 100%;
  background-color: #7C6B68;
  color: white;
  font-size: 1.75rem;
  padding: 1rem;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  text-align: center;
`;

const StoryColumn = styled.section`
  /* border: 1px solid blue; */
  display: flex;
  flex-flow: row wrap;
  max-width: 90%;
  justify-content: center;
`;

const Subheading = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`;

const randomImage = () => {
  const imgArray = [Img1, Img2, Img3, Img4, Img5]
  const randomNum = Math.floor(Math.random() * imgArray.length)
  const pick = imgArray[randomNum]
  return pick;
}

const Header = styled.header`
  background-image: url(${Img3});
  background-color: #DED4D2;
  background-blend-mode: multiply;
  background-size: cover;
  height: 200px;
  font-size: 4rem;
  color: white;
  text-shadow: 2px 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-attachment: fixed; */

  h2 {
    margin-top: 8rem;
  }
`;

const NewStory = styled.button`
  background-color: transparent;
  color: maroon;
  font-size: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 2px solid maroon;
  cursor: pointer;
  box-shadow: 2px 2px 5px #B5646E3f;
  margin: 1rem 0;
  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;
